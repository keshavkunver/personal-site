# Business invitation film

Owner: Codex, primary main checkout. User approved implementation on 2026-09-29.
Keshav approved the visual preview and authorized committing and pushing this iteration.
Personal-site showcase previously pushed as fddc5c09. Johnny entrance separately
pushed in its own repository as 9dc54a7.

## Delivered
- Replaced static Your website here card with three randomly selected distinct
  business concepts per visit, followed by the invitation and one CTA.
- Six new Higgsfield Cinema Studio 3.0 films: photography, independent barber,
  restaurant, cafe, HVAC, consultant; approved massage footage reused.
- Films expand across the canvas then contract into live DOM hero layouts.
  Business-specific colour/type treatments; real sharp DOM text. Illustrative
  concepts, separate from real client examples. No new dependencies.
- Desktop autoplay once in view; mobile waits for Play. Pause/replay, offscreen
  and hidden-tab pause. Reduced motion and no-JS show static invitation without
  video requests. Data saving/slow connection disables automatic playback.
- Removed old invitation body/caption. CTA: Let’s build yours.

## Media and cost
Prompts: docs/ai/business-invitation-generation.json.
Completed jobs and source URLs: docs/ai/business-invitation-jobs.json.
Six four-second 720p source films, 20 credits each. One barber submission was
explicitly rejected for concurrency and retried only after capacity freed.
All six completed: 120 credits spent; balance 53.55 after generation.
Delivered silent H.264 960px CRF25 faststart films, 230–414KB each, plus JPEG
posters. Massage uses seconds 3–7 of the original approved source in
johnny-reveal-generation.json. Only three selected videos requested per play.
No browser tracking/storage used for random selection.

## Verification
- Production build passes; lint 0 errors, 12 pre-existing warnings.
- scripts/verify-business-invitation.mjs passes 390/820/1440: real playback,
  pause/resume, three unique video requests, completion, replay, visible keyboard
  focus, no overflow/page errors; desktop offscreen pause tested.
- Reduced-motion and no-JS cases show invitation, download no invitation videos,
  and CTA navigates to concept form.
- Film contact sheet reviewed at opening/end; card screenshots reviewed.
  Artifacts: /tmp/business-films/contact-sheet.png and
  /tmp/business-invitation-review/.
- git diff --check passes. Old invitation copy removed from src.

Review: http://localhost:3000/websites#your-website (Play on mobile).
Visual review completed and publishing authorized. No remaining implementation tasks.
