'use client';

import { useEffect, useState } from 'react';
import FadeSlider from './FadeSlider';
import { preloadAudio } from './audio';
import { cuts, photo } from './cuts';

const [latest, ...archive] = cuts;

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
        before={photo(latest, 'front-before')}
        after={photo(latest, 'front-after')}
        view="front"
        revealText="Tera Raja is HIM."
        onRevealChange={markRevealed('front')}
        highSound="after"
        lowSound="before"
        edgeTrigger
      />

      <p className="text-text-tertiary text-xs font-semibold tracking-[0.25em] uppercase mt-12 mb-3">
        Side
      </p>
      <FadeSlider
        before={photo(latest, 'side-before')}
        after={photo(latest, 'side-after')}
        view="side"
        revealText="You may bark now."
        onRevealChange={markRevealed('side')}
        lazy
      />

      <p
        className={`text-center text-sm mt-10 ${archive.length ? 'pb-14' : 'pb-20'} ${
          bothRevealed ? 'text-text-primary' : 'text-text-tertiary'
        }`}
      >
        <span key={String(bothRevealed)} className="inline-block animate-fade-in">
          {bothRevealed
            ? 'Text me what you think my ting.'
            : 'You said you wanted pics ma, I gotchu.'}
        </span>
      </p>

      {archive.length > 0 && (
        <div className="pt-10 pb-20 border-t border-dark-border">
          <p className="text-text-tertiary text-xs font-semibold tracking-[0.25em] uppercase mb-1">
            The Archive
          </p>
          <p className="text-text-tertiary text-sm mb-8">
            Every era gets remembered, bb.
          </p>
          {archive.map((cut) => (
            <div key={cut.slug} className="mb-12 last:mb-0">
              <p className="text-text-secondary text-sm font-medium mb-3">{cut.label}</p>
              <div className="grid grid-cols-2 gap-3">
                {['front', 'side'].flatMap((view) =>
                  ['before', 'after'].map((stage) => (
                    <figure key={`${view}-${stage}`}>
                      <img
                        src={photo(cut, `${view}-${stage}`)}
                        alt={`${stage === 'before' ? 'Before' : 'After'} the haircut, ${view} view, ${cut.label}`}
                        loading="lazy"
                        draggable={false}
                        className="w-full aspect-[4/5] object-cover rounded-xl border border-dark-border bg-dark-surface"
                      />
                      <figcaption className="text-text-tertiary text-xs uppercase tracking-[0.25em] mt-2">
                        {view} · {stage}
                      </figcaption>
                    </figure>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
