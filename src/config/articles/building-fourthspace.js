export default {
  title: 'FourthSpace: Shipping an LLM Agent That Plans Real-World Meetups',
  date: 'July 2026',
  readingTime: '3 min read',
  signature: 'Keshav',
  content: `
FourthSpace turns shared interests into real-world hangouts. The core feature is an AI agent that reads a natural-language message ("find me a coffee spot near Silver Lake this Saturday afternoon") and plans an actual meetup: venue, time, and a confirmation flow.

**The build.** The agent runs on Anthropic Claude through the Vercel AI SDK, in a roughly 1,200-line route with tool-calling and multi-turn confirmation. It has guardrails: it passes venue identity straight through so it can't invent a place, and it refuses to schedule in the past or the far future. Around it sit about 20 generative endpoints (captions, prompt cards, Socratic questions, video analysis, semantic search).

There's also Pegasus, a real-time voice AI moderator built in Python on LiveKit Agents (Claude for reasoning, Deepgram for speech-to-text, ElevenLabs for speech). It listens to a group audio room, detects when a conversation is converging, and nudges it forward, with a web-search fallback when it needs a fact.

**The part that matters most: keeping it from breaking.** Every time the agent failed in production, I turned that failure into a named test. Venue-swap bugs, time-parse errors, response-extraction failures, they all live in the unit-test suite now, so the same bug can't ship twice. This is the discipline I spent six years building as an SDET, applied to a non-deterministic system. It's the hardest and least-staffed part of shipping AI, and it's where I'm strongest.

Stack: Next.js 16, React 19, TypeScript, Supabase, Vercel, Anthropic Claude, LiveKit, Python.

Status: MVP live at fourthspace.vip.
  `,
};
