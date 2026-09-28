# Website offer price update

Owner: Codex, primary checkout on main.
Goal: change website build to $997 across copy, form, metadata, JSON-LD, and OG image.
Confirmed payment: $500 deposit + $497 at launch. Optional care remains $99/month.
Plan: update references, regenerate social card, run old-price sweep, build/lint, and check /websites at 390/820/1440.
Status: implementation and validation complete; user approved the OG image and authorized pushing to main. Publishing this change triggers Vercel deployment; deployment outcome is not yet verified. Starting checkout was clean.
Updated page/form/FAQ, all three metadata descriptions, OG alt text, JSON-LD, and regenerated public/og-websites.png. Social image URLs use ?v=997; generator now embeds existing local fonts.
Validation: production build passed (outside sandbox after sandbox run stalled); lint passed with 12 pre-existing warnings. Old-price and old-balance sweep clean outside historical docs; sibling repo sweep found no matching offer references. Browser checks at 390/820/1440: correct prices and metadata, no horizontal overflow or page errors; rendered Service JSON-LD price is 997. OG image visually reviewed. Screenshots: /tmp/websites-997-{390,820,1440}.png and /tmp/websites-997-package-{390,820,1440}.png.
No remaining implementation tasks.

# Fonts are self-hosted

Claude self-hosted the Google Fonts families via `next/font/local` and
deployed to production. That font task is complete.

Reason: vercel/next.js#99114 (open). Google's css2 endpoint intermittently
returns an extensionless `/l/font?kit=...&skey=...&v=..` URL. Turbopack
serializes font options to JSON and parses that JSON with a query-string
parser, so the `&` splits it into three pairs and trips an invariant
requiring exactly one. The response is HTTP 200, so Next's retry path never
engages. This broke nv-studio's production deploy on 2026-09-26.

The upstream fix PR (#99132) touches only the webpack loader, so the
Turbopack path stays broken; no released or canary version fixes it. Self
-hosting removes the build-time dependency on Google entirely, which is why
it was preferred over redeploying or switching to `--webpack`.

Do not reintroduce `next/font/google` in this repo. Font files live in
src/app/fonts/ and are
updated by hand if a family needs a newer version.

Validation: clean production build, repo-wide sweep for
`next/font/google`/`gstatic`/`fonts.googleapis`, headless Chrome check
that every face serves 200 with no failed requests, and a green Vercel
production deploy.

Note: the previous contents of this file described uncommitted Codex work
(/websites presentation).
That work was committed and pushed before this session; the note was stale.
