# claude.md — Personal Website Revamp (Dark, Premium, Founder + Product Engineer, AI-First)

## Your Role
You are Claude Code acting as a senior product engineer + UI designer. Your job is to **implement** a full visual/structural revamp of my personal site to look **clean, modern, premium, dark-themed** (inspired by Cursor IDE / Vercel), and position me as a:
- **Technical Founder**
- **Startup Product Engineer (0 → 1)**
- **AI-first builder** (applied AI systems + automation)
- **Senior / CTO-capable operator**

You must prioritize **restraint, clarity, polish, and credibility**.

---

## Primary Goal
Implement the **design + structure** first. Do not over-optimize copy. Use placeholders where needed and mark them with `TODO:` so I can refine later.

---

## Non-Negotiables
- **Dark theme** with premium feel (charcoal/matte black, soft contrast).
- **Tight typography and spacing**, strong hierarchy.
- **Above-the-fold hero must feel expensive** and aesthetically pleasing.
- Reduce verbosity everywhere (no long paragraphs).
- **Selected Work** should only show strong, completed work. Remove or hide “in progress” items (or move to a minimal “Now” section only if necessary).
- Must be responsive + accessible.
- Site should load fast; avoid heavy animation/libs unless already in repo.
- Keep **social links** (LinkedIn + GitHub at minimum; others optional) but present subtly.

---

## Visual Direction (Cursor / Vercel-inspired)
### Palette
- Background: near-black / charcoal (avoid pure #000)
- Surfaces: slightly lighter charcoal
- Borders: subtle low-contrast lines
- Text: off-white + muted gray (avoid harsh white)
- Accent: choose **ONE** accent color and use sparingly (hover states, focus rings, small highlights)

### Typography
- Modern sans (use existing if present)
- Big confident headline
- Calm body text, readable line-height
- No “creative portfolio” styling

### Motion
- Subtle only:
  - 150–250ms transitions
  - small translate on hover
  - fade/slide-in on section entry if already supported
- No parallax, no intense gradients, no distracting effects

### Background motif (optional)
- Very subtle grid/dot pattern OR radial gradient glow behind hero
- Must remain understated

---

## Information Architecture (Implement This Order)
1) **Hero**
   - Primary identity: “Technical Founder”
   - Secondary qualifier: “building AI-native products from 0 → 1”
   - 2 CTAs: Primary `Contact` and Secondary `View Work` (optional `Resume`)
   - Social links visible but subtle (text links preferred)

2) **Proof / Impact Strip**
   - 3–6 small metric tiles (if no real metrics, use non-numeric outcomes)
   - No fabricated numbers

3) **Selected Work (Case Studies)**
   - 2–4 max
   - Each: Problem → What I built → Outcome → Stack
   - Do not include in-progress work here

4) **Capabilities**
   4 buckets max:
   - AI & Automation Systems
   - Backend & APIs
   - Product Engineering (Frontend + UX polish)
   - Delivery & Reliability (leverage SDET background as rigor)

5) **0 → 1 Builder**
   - Short section emphasizing shipping, tradeoffs, ownership, founder mindset

6) **Experience (Brief)**
   - Each role 2–4 bullets max, outcome-based
   - No paragraphs

7) **Writing / Insights (Authority Builder)**
   - Simple list/cards of 2–4 posts (can be placeholders)
   - Mark with `TODO:` if posts not available yet

8) **Contact**
   - One-liner + email CTA
   - Optional scheduling link if present in repo

9) **Footer**
   - Minimal. Social links repeated OK.

---

## Social Links Requirements (Keep Them, But Premium)
- Keep at least: **LinkedIn** and **GitHub**
- Additional links only if they reinforce professional brand
- Do NOT show follower counts
- Prefer **text links** over big icons
- Place either:
  - Top-right nav, or
  - Under hero CTAs in muted style, and/or
  - Footer
- Social links must not visually compete with primary CTA

---

## Copy Rules (Light Touch For Now)
- No fluff words: “passionate”, “hard-working”, “team player”, etc.
- Avoid leading with “Full-stack engineer” or “SDET”
- Use outcome verbs: Built, Shipped, Led, Designed, Reduced, Improved
- If content missing, add `TODO:` placeholders rather than writing essays

Default hero copy (can adjust later):
- Headline: `Technical Founder`
- Subheadline: `Building AI-native products from 0 → 1 with modern backend, automation, and applied AI.`
CTAs: `View Work` + `Contact`

---

## Technical Implementation Requirements
- Keep current framework (React/Next/etc.) and existing conventions.
- Add theme tokens (CSS variables) for:
  - bg, surface, border, text, muted, accent
- Create/reuse small UI components:
  - Button (primary/secondary)
  - Card
  - Section container
  - Tag/pill
  - Metric tile
- Ensure:
  - Mobile-first responsive
  - Keyboard focus states
  - Good contrast
  - SEO meta + OpenGraph (basic)

---

## Remove / Avoid
- No skill bars
- No rainbow gradients everywhere
- No icon clutter
- No “available for hire” vibes
- No long bio
- No fake metrics

---

## Deliverables
1) Implement new layout + styling across homepage
2) Update navigation and section order per above
3) Ensure Selected Work excludes in-progress items
4) Keep social links (premium presentation)
5) Provide a short summary of changes + where to edit content (config/constants files)

---

## Definition of Done (Acceptance Criteria)
- Site looks premium dark (Cursor/Vercel-ish)
- Hero is visually strong and minimal
- Copy is concise placeholders where needed
- Work section is strong + not cluttered
- Social links present but understated
- Clean responsive layout on mobile
- Consistent spacing, typography, and component styling