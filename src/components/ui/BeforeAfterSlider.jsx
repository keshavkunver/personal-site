'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * Draggable before/after comparison. Renders the "after" image as the base
 * layer and clips the "before" image on top; the divider follows pointer
 * drags and arrow keys.
 *
 * Pass `beforeSrc` / `afterSrc` (plus alt text). While screenshots are
 * missing, labeled placeholder panels render instead so the layout works.
 */
const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Site before redesign',
  afterAlt = 'Site after redesign',
  className = '',
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (draggingRef.current) updateFromClientX(e.clientX);
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - 5));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + 5));
    }
  };

  const placeholder = (label) => (
    <div className='w-full h-full flex items-center justify-center bg-dark-surface'>
      <span className='text-text-tertiary text-sm tracking-wide'>{label}</span>
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-dark-border select-none touch-none cursor-ew-resize ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      role='slider'
      aria-label='Compare site before and after'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
    >
      {/* After (base layer) */}
      <div className='absolute inset-0'>
        {afterSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={afterSrc} alt={afterAlt} className='w-full h-full object-cover object-top' draggable={false} />
        ) : (
          placeholder('After — TODO: screenshot')
        )}
      </div>

      {/* Before (clipped overlay) */}
      <div
        className='absolute inset-0'
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {beforeSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={beforeSrc} alt={beforeAlt} className='w-full h-full object-cover object-top' draggable={false} />
        ) : (
          placeholder('Before — TODO: screenshot')
        )}
      </div>

      {/* Divider + handle */}
      <div
        className='absolute inset-y-0 w-px bg-white/60 pointer-events-none'
        style={{ left: `${position}%` }}
      >
        <div className='absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-bg border border-dark-border-hover shadow-lg flex items-center justify-center'>
          <span className='text-text-secondary text-xs tracking-tighter'>&#x2039;&#x203a;</span>
        </div>
      </div>

      {/* Corner labels */}
      <span className='absolute top-3 left-3 text-[11px] uppercase tracking-wider text-text-secondary bg-dark-bg/70 backdrop-blur-sm rounded px-2 py-0.5 pointer-events-none'>
        Before
      </span>
      <span className='absolute top-3 right-3 text-[11px] uppercase tracking-wider text-text-secondary bg-dark-bg/70 backdrop-blur-sm rounded px-2 py-0.5 pointer-events-none'>
        After
      </span>
    </div>
  );
};

export default BeforeAfterSlider;
