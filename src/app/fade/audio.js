// Shared Web Audio singleton so both sliders play through one
// AudioContext and one GainNode (mute/volume apply globally).

const SOUND_URLS = {
  snip: '/fade/sounds/snip.mp3',
  chime: '/fade/sounds/chime.mp3',
  trombone: '/fade/sounds/trombone.mp3',
  before: '/fade/sounds/before.mp3',
  after: '/fade/sounds/after.mp3',
};

const VOLUME = 0.8;

const state = {
  ctx: null,
  gain: null,
  buffers: {},
  warned: {},
  initPromise: null,
  muted: false,
  // One playing source per channel: starting a sound on a channel
  // stops whatever was playing there (keeps long clips from stacking).
  channels: {},
};

export function initAudio() {
  if (state.initPromise) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) {
    state.initPromise = Promise.resolve();
    return;
  }
  const ctx = new Ctx();
  const gain = ctx.createGain();
  gain.gain.value = state.muted ? 0 : VOLUME;
  gain.connect(ctx.destination);
  state.ctx = ctx;
  state.gain = gain;
  state.initPromise = Promise.all(
    Object.entries(SOUND_URLS).map(async ([name, url]) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        state.buffers[name] = await ctx.decodeAudioData(await res.arrayBuffer());
      } catch (err) {
        if (!state.warned[name]) {
          state.warned[name] = true;
          console.warn(`[fade] sound unavailable: ${url}`, err);
        }
      }
    })
  );
}

export function play(name, { rate = 1, channel } = {}) {
  if (!state.ctx || !state.buffers[name]) return;
  try {
    if (state.ctx.state === 'suspended') state.ctx.resume();
    const src = state.ctx.createBufferSource();
    src.buffer = state.buffers[name];
    src.playbackRate.value = rate;
    src.connect(state.gain);
    if (channel) {
      try {
        state.channels[channel]?.stop();
      } catch {
        // already stopped
      }
      state.channels[channel] = src;
    }
    src.start();
  } catch {
    // never let audio take the page down
  }
}

export function stopChannel(channel) {
  try {
    state.channels[channel]?.stop();
  } catch {
    // already stopped
  }
  delete state.channels[channel];
}

export function setMuted(muted) {
  state.muted = muted;
  if (state.ctx && state.gain) {
    state.gain.gain.setValueAtTime(muted ? 0 : VOLUME, state.ctx.currentTime);
  }
}

export function isMuted() {
  return state.muted;
}
