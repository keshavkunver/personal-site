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

const state = {
  ctx: null,
  gain: null,
  bytes: {},
  buffers: {},
  warned: {},
  fetchPromise: null,
  decodeStarted: false,
  muted: false,
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
}

export function initAudio() {
  preloadAudio();
  if (!state.ctx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const gain = ctx.createGain();
    gain.gain.value = state.muted ? 0 : VOLUME;
    gain.connect(ctx.destination);
    state.ctx = ctx;
    state.gain = gain;
  }
  if (!state.decodeStarted) {
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
  // Called from user gestures, so this resume is allowed.
  if (state.ctx.state === 'suspended') state.ctx.resume();
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
