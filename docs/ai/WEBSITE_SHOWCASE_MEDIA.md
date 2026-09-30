# Website showcase media

Created 2026-09-29 for the user-approved `/websites` showcase. No deployment requested.

## Real website captures

`node scripts/capture-website-showcase.mjs` captures NV Studio, Mack Minaya, and Johnny Ferraer at 1440×960 and 390×844. The public website URLs, routes, and section IDs are in the script. Captures are WebP at quality 85 under `public/work/showcase/`. No client imagery, interfaces, or testimonials were generated or retouched. Screenshots reflect the sites at capture time and should be refreshed when those sites change.

## Higgsfield backdrop

- Project / folder: `881715b7-0233-4eb5-866a-1463c9ce7c9a`
- Job: `891f1cc2-9f76-4416-a9de-c253c9775c1d`
- Model: `cinematic_studio_3_0`; 6 seconds, 720p, 16:9, no audio.
- Preflight cost: 30 credits. User chose to top up; balance was confirmed sufficient before submission.
- Source: https://d8j0ntlcm91z4.cloudfront.net/user_3JLUXBUtYZQ0KqinE355oxWvFAI/hf_20260930_025726_891f1cc2-9f76-4416-a9de-c253c9775c1d.mp4
- Prompt and parameters: `website-showcase-generation.json` in this directory.
- Delivery: `public/work/showcase/studio-light.mp4` and `studio-light.webp`.

The source is only a moving light backdrop. The website devices are real captures composited in the browser using CSS; text is never redrawn by a video model. The source video can be downloaded again if a different encode is needed.

Encode with FFmpeg: `-an -vf 'scale=1280:-2,fps=24' -c:v libx264 -crf 27 -preset slow -movflags +faststart`. Extract the first frame as a 1280px WebP at quality 80 for the poster.

Desktop playback starts only in view and pauses when the tab or stage is hidden. Phones start still; playback is user-initiated. Reduced motion suppresses playback and video downloads, with chapter controls still available. All copy and scene definitions live in `src/config/websites.js`.

Run `node scripts/verify-website-showcase.mjs` with the personal-site server on port 3000 for responsive/control checks and review screenshots in `/tmp/website-showcase-review`.

## Johnny reveal film (2026-09-29)

User approved a cinematic linen-to-room-to-website reveal, followed by a drastic reduction of added explanatory copy.

- Generation job: `eea6a715-06d4-4244-82d7-a3c3df3e4f23`, same Higgsfield project/folder as above.
- Model: `cinematic_studio_3_0`, seven seconds, 1080p, 16:9, silent; preflight 70 credits.
- Prompt: `johnny-reveal-generation.json`.
- Source: https://d8j0ntlcm91z4.cloudfront.net/user_3JLUXBUtYZQ0KqinE355oxWvFAI/hf_20260930_031405_eea6a715-06d4-4244-82d7-a3c3df3e4f23.mp4
- Editable native Higgsedit project, captures, review frames, and masters: https://d2ol7oe51mr4n9.cloudfront.net/user_3JLUXBUtYZQ0KqinE355oxWvFAI/a2a77360-8e8d-42c5-9da4-f93812cbd8ab.zip
- Composition script: `scripts/higgsfield/johnny-reveal.jsx`. Capture script: `scripts/higgsfield/capture-johnny-reveal.mjs`.

The opening is an AI-created atmosphere scene, not footage of Johnny or a documented client home. At seven seconds the scene contracts into the real homepage image area, then dissolves to the unchanged real photograph. Native Higgsedit uses measured image bounds and full-resolution website captures. A separate phone composition preserves readable text. Both edits are 10.5 seconds: desktop 1280×776, mobile 720×728, 24 fps.

Reproduction: in the Higgsfield sandbox, create `/home/user/reveal`; save source as `source.mp4`; run the capture script there to produce `desktop.png`, `phone.png`, and `bounds.json`. Extract the final source frame as `last.png`. Run `higgsedit build` with the composition script. Each edit directory contains its own `project.json`, imported media, review frames, and `reveal.mp4`.

Website encodes use FFmpeg `-an -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -movflags +faststart`. Files: `public/work/showcase/johnny-ferraer/reveal.mp4` (~1.3 MB) and `reveal-mobile.mp4` (~721 KB). Posters use source time 5s, cover crop to each canvas, WebP quality 85. The two native projects were downloaded and visually inspected at 7.5, 8.5, and 10 seconds before delivery.

Johnny is the initial project. Desktop plays the film once in view; phones require Play. Film has replay through the Film control. Playback pauses in hidden tabs and offscreen without discarding its position. Natural completion selects Home and pauses. Reduced motion skips Film and offers the still website controls without video download. The retained ambient loop serves the regular screenshot views.

Copy reduction: removed the showcase intro, all nine scene captions/descriptions, stage meta/footer copy, duplicate category labels, numbered chapters, and the added NV Studio narrative section. Restored Noel’s existing quote to his original gallery card. Controls now use page names, Play/Pause, Film, and Visit site.

## Business invitation, 2026-09-29
The Your website here card now uses six newly generated illustrative films plus
the existing massage footage. Source requests, exact prompts, job IDs and URLs
are in business-invitation-generation.json and business-invitation-jobs.json.
These are fictional business concepts, not additional client projects.

Cinema Studio 3.0, six four-second 720p 16:9 silent generations, 120 credits total.
One rejected concurrency submission created no job; only that barber request
was retried. All six results displayed together through Higgsfield's batch gallery.

Each source was encoded with ffmpeg: scale=960:-2, libx264 CRF25, preset slow,
no audio, faststart. JPEG posters use the frame at one second, scale 960px,
q:v 3. Massage is a four-second cut starting at 3s of Johnny's original film;
its poster uses 2s of the cut. Public assets live under public/work/invitation.
The component uses native HTML video plus CSS to transform the footage into
live website layouts. No generated text or UI is baked into the footage.
