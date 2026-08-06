'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { FiScissors } from 'react-icons/fi';
import { initAudio, play } from './audio';

const SNIP_THROTTLE_MS = 120;
const CONFETTI_COOLDOWN_MS = 3000;

const placeholder = (label) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <rect width="1200" height="800" fill="#141414"/>
      <rect width="1200" height="800" fill="url(#g)"/>
      <defs><radialGradient id="g" cx="50%" cy="45%" r="70%">
        <stop offset="0%" stop-color="#1f1f1f"/><stop offset="100%" stop-color="#0a0a0a"/>
      </radialGradient></defs>
      <text x="600" y="380" text-anchor="middle" fill="#8a8a8a" font-family="sans-serif" font-size="56" font-weight="700" letter-spacing="8">${label}</text>
    </svg>`
  )}`;

export default function FadeSlider({ before, after, view, revealText, onRevealChange }) {
  // 0 = full before, 100 = full after
  const [value, setValue] = useState(50);
  const [imgError, setImgError] = useState({ before: false, after: false });
  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState(null);

  const containerRef = useRef(null);
  const draggingRef = useRef(false);
  const fxRef = useRef({ lastSnip: 0, chimeFired: false, tromboneFired: false, lastConfetti: -Infinity });
  const confettiTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(confettiTimerRef.current), []);

  useEffect(() => {
    onRevealChange?.(revealed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealed]);

  function snip() {
    const now = performance.now();
    if (now - fxRef.current.lastSnip < SNIP_THROTTLE_MS) return;
    fxRef.current.lastSnip = now;
    play('snip', { rate: 0.95 + Math.random() * 0.1 });
  }

  function fireConfetti() {
    const fx = fxRef.current;
    const now = performance.now();
    if (now - fx.lastConfetti < CONFETTI_COOLDOWN_MS) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    fx.lastConfetti = now;
    const pieces = Array.from({ length: 24 }, (_, i) => ({
      id: `${now}-${i}`,
      dx: `${(Math.random() - 0.5) * 380}px`,
      dy: `${-60 - Math.random() * 300}px`,
      rot: `${(Math.random() - 0.5) * 720}deg`,
      delay: `${Math.random() * 120}ms`,
      color: ['#fafafa', '#ededed', '#a3a3a3', '#f5c542'][i % 4],
      size: 5 + Math.round(Math.random() * 5),
    }));
    setConfetti(pieces);
    clearTimeout(confettiTimerRef.current);
    confettiTimerRef.current = setTimeout(() => setConfetti(null), 1200);
  }

  function applyValue(next) {
    let v = Math.min(100, Math.max(0, next));
    // Snap near the edges so a finger can actually land the full reveal.
    if (v > 98.5) v = 100;
    else if (v < 1.5) v = 0;
    setValue(v);

    const fx = fxRef.current;
    if (v >= 90 && !fx.chimeFired) {
      fx.chimeFired = true;
      play('chime');
    }
    if (v <= 10 && !fx.tromboneFired) {
      fx.tromboneFired = true;
      play('trombone');
    }
    if (v > 10 && v < 90) {
      fx.chimeFired = false;
      fx.tromboneFired = false;
    }
    if (v >= 100) {
      setRevealed(true);
      fireConfetti();
    } else if (v < 90) {
      setRevealed(false);
    }
    return v;
  }

  function valueFromClientX(clientX) {
    const rect = containerRef.current.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  function onPointerDown(e) {
    initAudio();
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    applyValue(valueFromClientX(e.clientX));
    snip();
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    applyValue(valueFromClientX(e.clientX));
    snip();
  }

  function onPointerEnd() {
    draggingRef.current = false;
  }

  function onKeyDown(e) {
    const step = e.shiftKey ? 10 : 2;
    let next = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = value - step;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = value + step;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = 100;
    if (next === null) return;
    e.preventDefault();
    initAudio();
    applyValue(next);
    snip();
  }

  const beforeSrc = imgError.before ? placeholder('BEFORE') : before;
  const afterSrc = imgError.after ? placeholder('AFTER') : after;

  const confettiStyles = useMemo(
    () => `
      @keyframes fade-confetti-pop {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
        100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); opacity: 0; }
      }
    `,
    []
  );

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      className="relative w-full aspect-[4/5] overflow-hidden select-none cursor-ew-resize bg-dark-surface border border-dark-border rounded-2xl"
      style={{ touchAction: 'none' }}
    >
      <style>{confettiStyles}</style>

      {/* Before: base layer */}
      <img
        src={beforeSrc}
        alt={`Before the haircut, ${view} view`}
        draggable={false}
        onError={() => setImgError((s) => (s.before ? s : { ...s, before: true }))}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* After: top layer, clipped to the left of the divider.
          Stays blurred until the slider is dragged all the way. */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <img
          src={afterSrc}
          alt={`After the haircut, ${view} view`}
          draggable={false}
          onError={() => setImgError((s) => (s.after ? s : { ...s, after: true }))}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: revealed ? 'blur(0px)' : 'blur(24px)',
            transform: revealed ? 'scale(1)' : 'scale(1.06)',
            transition: 'filter 600ms ease, transform 600ms ease',
          }}
        />
      </div>

      {/* Labels */}
      <span
        aria-hidden="true"
        className="absolute top-5 left-5 font-heading font-bold text-text-primary text-sm tracking-[0.25em] transition-opacity duration-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
        style={{ opacity: Math.min(1, Math.max(0, (value - 15) / 35)) }}
      >
        AFTER
      </span>
      <span
        aria-hidden="true"
        className="absolute top-5 right-5 font-heading font-bold text-text-primary text-sm tracking-[0.25em] transition-opacity duration-200 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
        style={{ opacity: Math.min(1, Math.max(0, (85 - value) / 35)) }}
      >
        BEFORE
      </span>

      {/* Reveal line: only earned by dragging all the way */}
      {revealText && (
        <span
          aria-hidden={!revealed}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 font-heading font-bold text-text-primary text-xl sm:text-2xl tracking-tight whitespace-nowrap [text-shadow:0_2px_12px_rgba(0,0,0,0.9)] transition-opacity duration-500"
          style={{ opacity: revealed ? 1 : 0, transitionDelay: revealed ? '350ms' : '0ms' }}
        >
          {revealText}
        </span>
      )}

      {/* Divider + handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`Haircut reveal, ${view} view`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        aria-valuetext={`${Math.round(value)}% after`}
        onKeyDown={onKeyDown}
        className="absolute top-0 bottom-0 w-px bg-text-primary/80 outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-dark-elevated border border-dark-border-hover text-text-primary shadow-card">
          <FiScissors aria-hidden="true" size={18} />
        </span>
      </div>

      {/* Confetti */}
      {confetti && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
          {confetti.map((p) => (
            <span
              key={p.id}
              className="absolute left-1/2 top-2/3 rounded-[1px]"
              style={{
                '--dx': p.dx,
                '--dy': p.dy,
                '--rot': p.rot,
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                animation: `fade-confetti-pop 900ms ease-out ${p.delay} forwards`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
