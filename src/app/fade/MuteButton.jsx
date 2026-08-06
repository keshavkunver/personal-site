'use client';

import { useState } from 'react';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { isMuted, setMuted } from './audio';

export default function MuteButton() {
  const [muted, setMutedState] = useState(isMuted);

  function toggle() {
    const next = !muted;
    setMutedState(next);
    setMuted(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={muted}
      aria-label={muted ? 'Unmute sound effects' : 'Mute sound effects'}
      className="fixed bottom-6 right-6 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-dark-surface border border-dark-border text-text-secondary hover:text-text-primary hover:border-dark-border-hover transition-colors duration-200"
    >
      {muted ? <FiVolumeX size={18} /> : <FiVolume2 size={18} />}
    </button>
  );
}
