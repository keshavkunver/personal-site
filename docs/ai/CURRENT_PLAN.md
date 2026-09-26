# Fonts are self-hosted

Claude self-hosted the Google Fonts families via `next/font/local` and
deployed to production. No work is in flight; both checkouts are clean.

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
