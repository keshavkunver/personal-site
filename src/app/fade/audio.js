// Shared Web Audio singleton so both sliders play through one
// AudioContext and one GainNode (mute/volume apply globally).
//
// Loading is two-phase so a fast first drag doesn't outrun the network:
// preloadAudio() fetches the mp3 bytes at page load (no AudioContext
// needed), initAudio() creates the context on the first user gesture and
// decodes. A channel play requested mid-decode is queued and fired as
// soon as its buffer is ready.

const SOUND_URLS = {
  snip: '/fade/sounds/snip.mp3',
  chime: '/fade/sounds/chime.mp3',
  trombone: '/fade/sounds/trombone.mp3',
  before: '/fade/sounds/before.mp3',
  after: '/fade/sounds/after.mp3',
};

const VOLUME = 0.8;

// 0.05s of silence. Looping this through an HTMLAudio element on the
// first touch switches iOS into media-playback mode, so Web Audio keeps
// playing even when the physical silent switch is on (same rules as
// music playback). No-op everywhere else.
const SILENT_WAV =
  'data:audio/wav;base64,UklGRkQDAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YSADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=';

const state = {
  ctx: null,
  gain: null,
  bytes: {},
  buffers: {},
  warned: {},
  fetchPromise: null,
  decodeStarted: false,
  muted: false,
  unlockEl: null,
  // One playing source per channel: starting a sound on a channel
  // stops whatever was playing there (keeps long clips from stacking).
  channels: {},
  // Channel plays requested before their buffer finished decoding.
  pending: {},
};

function warnOnce(name, err) {
  if (state.warned[name]) return;
  state.warned[name] = true;
  console.warn(`[fade] sound unavailable: ${SOUND_URLS[name]}`, err);
}

function ensureContext() {
  if (state.ctx) return;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const gain = ctx.createGain();
  gain.gain.value = state.muted ? 0 : VOLUME;
  gain.connect(ctx.destination);
  state.ctx = ctx;
  state.gain = gain;
}

export function preloadAudio() {
  if (state.fetchPromise) return;
  state.fetchPromise = Promise.all(
    Object.entries(SOUND_URLS).map(async ([name, url]) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        state.bytes[name] = await res.arrayBuffer();
      } catch (err) {
        warnOnce(name, err);
      }
    })
  );
  // Decode immediately as bytes land. A pre-gesture AudioContext starts
  // suspended, but decoding works while suspended, so buffers are ready
  // the moment the user first touches anything.
  ensureContext();
  if (state.ctx && !state.decodeStarted) {
    state.decodeStarted = true;
    state.fetchPromise.then(() =>
      Promise.all(
        Object.keys(state.bytes).map(async (name) => {
          try {
            state.buffers[name] = await state.ctx.decodeAudioData(state.bytes[name]);
            flushPending(name);
          } catch (err) {
            warnOnce(name, err);
          }
        })
      )
    );
  }
}

// Call from EVERY user gesture (pointer down AND up, key presses, button
// taps). iOS only grants audio activation on certain gestures - notably
// the end of a tap, not the start of a captured drag - so each call
// retries the suspended-context resume and the silent unlock element
// until one gesture sticks.
export function initAudio() {
  preloadAudio();
  ensureContext();
  if (!state.unlockEl) {
    try {
      const el = new Audio(SILENT_WAV);
      el.loop = true;
      state.unlockEl = el;
    } catch {
      // audio element unavailable; Web Audio may still work
    }
  }
  if (state.unlockEl && state.unlockEl.paused) {
    state.unlockEl.play().catch(() => {});
  }
  if (state.ctx && state.ctx.state !== 'running') {
    state.ctx.resume().catch(() => {});
  }
}

function flushPending(name) {
  for (const [channel, req] of Object.entries(state.pending)) {
    if (req.name !== name) continue;
    delete state.pending[channel];
    playNow(req.name, req.opts);
  }
}

function playNow(name, { rate = 1, channel } = {}) {
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

export function play(name, opts = {}) {
  if (!state.ctx) return;
  if (!state.buffers[name]) {
    // Still fetching/decoding. Queue channel sounds (the long clips,
    // where late is better than never); drop one-shot snips.
    if (opts.channel) state.pending[opts.channel] = { name, opts };
    return;
  }
  playNow(name, opts);
}

export function stopChannel(channel) {
  delete state.pending[channel];
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
