## Shared workspace instructions

Before working in this repository, read `../AGENTS.md`.
Resolve these paths from this file's directory. These references are explicit
because parent rules may not load when this repo is opened directly. Read each
file once; do not recurse through instruction references. If this is a standalone
clone or worktree and a referenced file is absent, report the missing context
and continue with available instructions and the user's request.

# Personal site (kunver.com)

Keshav's personal website. NOT a client site: the `client-work/` launch
checklist and the "Site by Keshav Kunver" footer-credit rule do not apply.

Live at https://www.kunver.com. `main` auto-deploys on Vercel.

## Status: built and iterating

This site is shipped and in ongoing refinement. Work here is incremental
change against a settled design system, not a revamp. There is no open
redesign mandate.

An earlier version of this file was a one-shot build brief ("implement a full
visual/structural revamp", hero headline `Technical Founder`, acceptance
criteria). That brief is **retired**. It described a site that no longer
exists and a positioning Keshav has since moved off. Do not reintroduce its
instructions. If you find a copy in an old branch or worktree, ignore it.

## Positioning (current, binding)

- Identity line is **Software Engineer**, not "Technical Founder".
  `personalInfo.title`: "Software Engineer building AI-powered products."
  (set 2026-09-17, commit 41f1d70, and the resume PDF matches).
- Tagline: "Full-stack engineering, applied AI, and reliable systems."
- The SDET background is an asset, framed as rigor and reliability
  ("Quality & Reliability" capability, 6+ years), not hidden and not led with.
- Open to hybrid and remote; based in Los Angeles.
- Never fabricate metrics. `impactMetrics` are real and already verified;
  do not invent new numbers or inflate existing ones.

## Stack

Next.js 16 App Router (JSX, not TypeScript) + React 19 + Tailwind **v3**
(`tailwind.config.js`, not v4). Framer Motion for animation, Lenis for smooth
scroll, Formspree for contact, `@vercel/analytics`. Playwright + Puppeteer are
devDependencies for visual checks. Ask before adding any dependency.

Note the shape: source lives under `src/`, so it is `src/app/`, not `app/`.
Tailwind v3 here and Tailwind v4 in `ruvoa`/`swe-grind`. Do not copy v4
`@theme` patterns into this repo.

## Routes

- `/` homepage, composed in `src/app/page.jsx`
- `/build` one-hour build sessions
- `/websites` websites for local service businesses
- `/now` current focus
- `/blog/[slug]` articles, with per-post `opengraph-image.jsx`
- `/fade` a standalone gallery/audio piece

## Homepage section order

Set in `src/app/page.jsx`. Current order:
Navbar, Home (hero), ImpactStrip, Work, Capabilities, Experience, Education,
Writing, WorkWithMe, Contact, Footer.

Recent deliberate ordering decisions (do not silently revert):
- Writing, then the freelance teaser, then Contact at the bottom
  (commit 04ca855).
- The freelance teaser is split into two cards, "Build with me" and
  "Websites" (commit 23e424e).

## Design system: "Monument under aurora"

Approved 2026-09-11. Full spec:
`docs/superpowers/specs/2026-09-11-monument-aurora-redesign.md`. Tokens live
in `tailwind.config.js`.

- Ground: ink-indigo. `dark-bg #0f1322`, `dark-surface #171c2b`,
  `dark-elevated #1f2536`; borders are ivory at 8% / 16% alpha.
- Text: `text-primary #f8f6f0` ivory, `text-secondary #b4b5b8`,
  `text-tertiary #898c94`.
- Buttons and accent: monochrome cream (`accent #f8f6f0`). The accent system
  is deliberately monochrome, not a color.
- Color only in tiny doses: `gold #d9a441` (nav active dot, aurora light) and
  emerald-500 (availability dot only).
- Type: Source Serif 4 (`font-display`) for h1/h2 at weight 500 with no
  negative tracking; Instrument Sans (`font-heading`) for h3+, UI, buttons;
  body at 18px.
- Aurora: composed once as a **page-level canvas** in `src/app/page.jsx`
  (teal glow upper-left, gold lower-right, over a 160deg indigo wash, plus
  `.bg-grain` at ~5%). This is intentional: it was moved to page level to
  remove section-edge seams (commit b192fbec). Do not reintroduce per-section
  aurora backgrounds.
- Hero: centered column, avatar, serif name, one role line, status line with
  emerald dot, two CTAs. Quick-link cards anchor the bottom corners on
  desktop via the `hero-lg` breakpoint (which gates on both width and
  height), and stack below the CTAs on mobile. No prices in the hero.

## Content

All site content is centralized in `src/config/content.js`; articles live in
`src/config/articles/`. Edit content there, not inline in component JSX.

## Copy rules

- No fluff ("passionate", "hard-working", "team player").
- Outcome verbs: Built, Shipped, Led, Designed, Reduced, Improved.
- No fabricated metrics, users, or testimonials.
- No "available for hire" tone; the status line covers availability.

## Verification before claiming done

- `npm run build` passes and `npm run lint` (scoped to `src`) is clean
- Every touched page checked at 390 / 820 / 1440
- No console errors
- Keyboard navigable with visible focus rings
- Motion respects `prefers-reduced-motion`
- Screenshots for review on visual changes; `screenshots/` holds reference
  shots including `variant-5-final.png` (the approved hero)

## Open threads

- Branch `feature/playbook` (a9b4b637, "Add Vibe Code Playbook section with
  landing page and module pages") is unmerged and behind `main`. Do not
  assume it is abandoned and do not merge it without asking Keshav; rebase
  onto `main` before any work resumes on it.
