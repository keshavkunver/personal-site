'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import styles from '../../app/websites/websites.module.css';

const ADVANCE_MS = 3400;
const REDUCED_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_QUERY).matches;
}

/**
 * Revolving preview of a finished site: walks its pages starting at the home
 * page so a visitor sees the work without leaving this page. Advances on its
 * own, pauses on hover/focus and when scrolled out of view, and stops
 * permanently once the visitor takes manual control or asks for reduced motion.
 */
export default function SitePreview({ shots, name, href }) {
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef(null);

  const go = useCallback(
    (next, manual = false) => {
      setIndex((next + shots.length) % shots.length);
      if (manual) setAuto(false);
    },
    [shots.length]
  );

  // Respect reduced motion: never self-advance.
  const reduced = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);

  // Only animate while actually on screen.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || reduced || !visible || hovered || shots.length < 2) return;
    const t = setInterval(() => setIndex(i => (i + 1) % shots.length), ADVANCE_MS);
    return () => clearInterval(t);
  }, [auto, reduced, visible, hovered, shots.length]);

  const onKeyDown = e => {
    if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go(index + 1, true);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(index - 1, true);
    }
  };

  const current = shots[index];

  return (
    <div className={styles.previewWrap}>
      <div
        ref={frameRef}
        className={styles.preview}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className={styles.browserBar} aria-hidden="true">
          <span />
          <span />
          <span />
          <i>{href.replace(/^https?:\/\/(www\.)?/, '')}</i>
        </div>

        <div
          className={styles.shotViewport}
          role="button"
          tabIndex={0}
          aria-label={`${name} page previews, showing ${current.page}. Click or press Enter for the next page.`}
          onKeyDown={onKeyDown}
          onClick={() => go(index + 1, true)}
        >
          {shots.map((shot, i) => {
            // Mount the current frame, the next one (so the swap is instant),
            // and any earlier frame already displayed. A phone therefore
            // downloads two screenshots per site on first paint, not five.
            if (i > index + 1) return null;
            return (
              <div
                key={shot.src}
                className={`${styles.shot} ${i === index ? styles.shotActive : ''}`}
                aria-hidden={i !== index}
              >
                <Image
                  src={shot.src}
                  alt={i === index ? shot.alt : ''}
                  fill
                  sizes="(max-width: 767px) 100vw, 560px"
                  className="object-cover object-top"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            );
          })}
          <span className={styles.shotPage}>{current.page}</span>
        </div>
      </div>

      <div className={styles.previewControls}>
        <div className={styles.dots} role="group" aria-label={`${name} pages`}>
          {shots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              aria-current={i === index ? 'true' : undefined}
              aria-label={`Show ${shot.page}`}
              title={shot.page}
              className={`${styles.dot} ${i === index ? styles.dotActive : ''} ${i < index ? styles.dotSeen : ''}`}
              onClick={() => go(i, true)}
            />
          ))}
        </div>
        {shots.length > 1 && !reduced && (
          <button
            type="button"
            className={styles.playToggle}
            aria-label={auto ? `Pause ${name} preview` : `Play ${name} preview`}
            onClick={() => setAuto(a => !a)}
          >
            {auto ? 'Pause' : 'Play'}
          </button>
        )}
        <span className={styles.shotCount} aria-hidden="true">
          {index + 1} / {shots.length}
        </span>
        <p className={styles.srStatus} aria-live="polite">
          {current.page}
        </p>
      </div>
    </div>
  );
}
