# Websites showcase: Johnny reveal and copy reduction

Owner: Codex, primary checkout on main. All changes continue the same uncommitted user-approved task. No other agent work overwritten. User authorized committing and pushing personal-site changes on 2026-09-29.

Goal completed: create Johnny’s cinematic reveal, then drastically reduce the copy added around the visuals.

Delivered:
- Johnny replaces Ruvoa in /websites; real captures for Johnny, NV Studio, and Mack Minaya.
- 10.5-second Johnny film: seven-second Higgsfield linen/room opening, native Higgsedit transition into the actual homepage, then real desktop/phone screens. Separate desktop and phone edits (~1.3 MB / 721 KB).
- Johnny is selected initially. Desktop plays once in view; phone waits for Play. Film replays; completion selects Home and pauses. Offscreen/tab-hidden pause preserves position. Reduced motion shows the real still site and avoids video downloads.
- Removed showcase introduction, nine explanatory caption/description pairs, stage labels/footer, category labels, chapter numbers, and the added NV Studio narrative section. Kept Recent work, project names, actual page labels, Film, Play/Pause, Visit site. Noel’s approved testimonial is back in the original gallery card.

Design/contracts: existing ink/ivory design and fonts; website text/photos use real captures. AI footage is atmosphere only, not a real client home or invented footage of Johnny. No new dependencies. Existing offer unchanged. Source/prompt/composition archive: docs/ai/WEBSITE_SHOWCASE_MEDIA.md, docs/ai/johnny-reveal-generation.json, scripts/higgsfield/.

Validation: production build passed. Lint passed with the same 12 pre-existing warnings. Browser checks passed at 390/820/1440: desktop/mobile film selection, real playback, pause/resume, offscreen pause, natural completion to Home, replay, all project/chapter captures, keyboard focus, no overflow, no console/page errors. Reduced motion skips film and video downloads while manual chapters work. Native transition frames at 7.5/8.5/10 seconds visually inspected; final page screenshots reviewed at all sizes. Removed-copy sweep clean in src; git diff --check passed.

Review: http://localhost:3000/websites. Film: http://localhost:3000/work/showcase/johnny-ferraer/reveal.mp4. Screenshots: /tmp/website-showcase-review/johnny-film-{390,820,1440}.png. Full native project archive also retained at the cloud link in media provenance. Publishing approved: commit and push to main; Vercel deploys automatically. No remaining implementation blockers.

Prior completed context: $997 offer update and self-hosted fonts are already committed. Do not reintroduce next/font/google.

Follow-up: Johnny moved to the first showcase tab (already first in gallery). Removed all three project status captions and their content fields at user request. Production build/lint and focused 390/820/1440 checks rerun. The Your website here invitation remains static; proposed next is a short business-scene-to-website reveal with optional name entry and one CTA, no explanatory paragraphs. No new invitation generation submitted.
