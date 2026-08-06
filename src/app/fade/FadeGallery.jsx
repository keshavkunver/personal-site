'use client';

import { useEffect, useState } from 'react';
import FadeSlider from './FadeSlider';
import { preloadAudio } from './audio';

export default function FadeGallery() {
  // Sticky: once a slider has been fully revealed, it counts forever,
  // so the payoff line doesn't retract if a slider gets re-blurred.
  const [revealedOnce, setRevealedOnce] = useState({ front: false, side: false });

  // Start fetching the mp3 bytes at page load so a fast first drag
  // doesn't reach the reveal before its clip has downloaded.
  useEffect(() => {
    preloadAudio();
  }, []);
  const bothRevealed = revealedOnce.front && revealedOnce.side;

  const markRevealed = (view) => (revealed) => {
    if (!revealed) return;
    setRevealedOnce((s) => (s[view] ? s : { ...s, [view]: true }));
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <p className="text-text-tertiary text-xs font-semibold tracking-[0.25em] uppercase mb-3">
        Front
      </p>
      <FadeSlider
        before="/fade/front-before.jpg"
        after="/fade/front-after.jpg"
        view="front"
        revealText="I'm HIM."
        onRevealChange={markRevealed('front')}
        highSound="after"
        lowSound="before"
        edgeTrigger
      />

      <p className="text-text-tertiary text-xs font-semibold tracking-[0.25em] uppercase mt-12 mb-3">
        Side
      </p>
      <FadeSlider
        before="/fade/side-before.jpg"
        after="/fade/side-after.jpg"
        view="side"
        revealText="You may bark now."
        onRevealChange={markRevealed('side')}
      />

      <p
        className={`text-center text-sm mt-10 pb-20 ${
          bothRevealed ? 'text-text-primary' : 'text-text-tertiary'
        }`}
      >
        <span key={String(bothRevealed)} className="inline-block animate-fade-in">
          {bothRevealed
            ? 'Text me what you think my ting.'
            : 'You said you wanted pics ma, I gotchu.'}
        </span>
      </p>
    </div>
  );
}
