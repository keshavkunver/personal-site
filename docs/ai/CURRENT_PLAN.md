# Current task

Codex completed the `/websites` presentation update in the primary checkout on
`main`; changes are uncommitted and not deployed. Homepage files are unchanged.

User requirements: three example placeholders plus a fourth “Your website here”
frame; retain keshavkunver@gmail.com. Existing $1,300 / $500 deposit / $800 launch /
optional $99 care terms preserved. No clients, testimonials, or outcomes invented.

Implemented: large opening headline and visible pricing, responsive two-column
example gallery, invitation frame linking to the inquiry form, compact package,
process, introduction, FAQ, and existing Formspree flow with consistent request CTA.
Styles are route-scoped. Example data lives in src/config/websites.js; replace
screenshot (public path), alt, href, name, and caption when actual work is ready.

Validation:
- Production build passed (network access needed for existing Google Fonts).
- npm run lint: 0 errors, 12 existing warnings in unrelated files.
- git diff --check passed.
- Visual checks at 1440, 820, and 390; no horizontal overflow. Tablet package and
  form stack to avoid narrow columns. Screenshots: screenshots/websites-offer/.
- Inquiry anchor arrival verified; FAQ opens by click and closes with Enter;
  keyboard focus visibly outlined. Form submission intentionally not sent.
- No new motion. Existing shared provider respects reduced-motion preferences.
- Browser console contained extension-style asynchronous listener/message-channel
  errors; no application-specific error was observed.

Local production preview runs on http://localhost:3100/websites (session 57209).
Existing server at 3000 was left alone because it was serving stale content.

Remaining: user visual review, replace placeholders with real examples. Clarify
hosting ownership, care limits, and concept response timing before adding new
promises to the page. No dependencies added.


## Copy and proof revision (Claude, 2026-09-17)

Keshav's critique: the copy read as AI-written and corny. Root cause was not
only tone. Codex's first pass ("Your business deserves a better first
impression", "Picture the possibilities") was replaced by Codex itself at
10:46 with plainer copy, but that second pass converted the previous
benefit-led lines into feature labels ("Basic search setup"), losing the
persuasion that the committed pre-Codex version had. This revision restores
specificity from the committed copy without the first pass's theatrics.

Changed:
- Hero: "A website your customers can actually use." Price band retains
  $1,300 / up to 5 pages, and the turnaround now reads "About two weeks,
  revisions included" (Keshav: two weeks is padded to cover the two revision
  rounds; stating that makes the buffer honest rather than a missed estimate).
- Features restored to outcome-first lines ("Customers reach you in one tap",
  "People know what you charge before they call"). The search line is
  deliberately "Search-friendly setup for your services and location" plus
  "Setup work, not a promise about where you rank", per Keshav's point 6.
- Concept offer made precise and consistent: free, video only, no mockup
  file, and "I reply either way" everywhere (hero, steps, form, success
  state). Keshav confirmed free/video-only.
- New FAQs: when the two weeks starts, who writes the words, what counts as a
  revision. Recurring costs and site ownership deliberately NOT stated;
  Keshav has not settled that policy, so the page stays silent rather than
  guessing.
- Section headings de-cutesied: "Before you ask." -> "Questions.",
  "I'm Keshav. I build it myself." -> "You work with me."

Real examples replacing the three placeholders (Keshav authorized both):
- Mack Minaya, client work, https://mack-minaya-site.vercel.app
- Ruvoa, labeled as Keshav's own product, https://www.ruvoa.app

IMPORTANT, verified 2026-09-17: mackminaya.com still serves Squarespace (404
at root), so the client site is NOT launched, and the per-deployment Vercel
URLs redirect to vercel.com/sso-api because Deployment Protection is on. The
only publicly reachable URL is the project alias
mack-minaya-site.vercel.app (200, serves the real site). Swap the href to
mackminaya.com after DNS cutover. Note that client sign-off remains an open
launch blocker in client-work/mack-minaya/AGENTS.md; Keshav accepted the
exposure of featuring the work before that sign-off is recorded.

New AEO offer section (Keshav's third offer), placed between the FAQ and the
contact form so it catches readers who conclude their site is fine but
invisible. Worded as an audit, never a ranking promise, with an explicit
caveat that no one can guarantee Google positions or AI-answer mentions.
`aeoOffer.href` in src/config/websites.js is null until that page exists; the
section then links to #concept and says the details page is coming. Set href
to the real URL when built and the CTA switches automatically.

Validation: npm run build passes; npm run lint 0 errors (pre-existing
warnings only); 1440/820/390 screenshots in screenshots/websites-offer/
(final-*.png), no horizontal overflow at any width; no em dashes in built
output; no banned fluff words. The only console 404 is
/_vercel/insights/script.js, which is pre-existing and also 404s on the
committed homepage locally (Vercel Analytics is production-only).

Still open: replace the mock browser frames with real screenshots of both
sites; decide recurring-cost and ownership policy for the FAQ; build the AEO
page; the keshavkunver@gmail.com address on this page differs from
keshav@kunver.com used elsewhere on the site (pre-existing, Keshav asked to
retain the gmail).


## Round 2 (Claude, 2026-09-17, later)

Per Keshav, in order:

1. Example cards trimmed to a one-line caption each; the three-bullet lists
   and the longer summaries are gone. Ruvoa is first, Mack Minaya second.
2. Mock browser frames replaced with REAL screenshots of every page of both
   sites, captured at 1440 from the live URLs and compressed to webp
   (3.8MB of PNG -> 351KB total). Stored in public/work/<site>/.
   New component: src/components/websites/SitePreview.jsx. It walks the
   pages starting at Home, advances every 3.4s, pauses on hover/focus and
   when scrolled out of view, and stops permanently once the visitor takes
   manual control. Clicking the image advances; so do Enter, Space, and the
   arrow keys. The segmented bar below is clickable to jump, fills to show
   position, and is paired with a "n / total" counter plus an aria-live
   region. prefers-reduced-motion disables auto-advance via
   useSyncExternalStore (a plain effect tripped the react-hooks lint rule
   about setState in an effect body).
3. The "Work." heading and "Two sites, both built end to end by me." intro
   were removed; the section is now just the previews and captions, labelled
   with aria-label since its h2 is gone. workTitle/workIntro dropped from
   config.
4. Headline is now "Let customers see what you do." with the intro "A website
   is where people decide whether to trust you with the job..." Keshav chose
   this over two alternatives. Deliberately avoids the word "visualize" and
   any "it's 2026, you need a website" framing, both of which read as
   generic sales copy.

Footer, site-wide. Audit found the real problem was not styling: FOUR of six
pages rendered no footer at all (/build, /now, /fade, /blog/[slug]), and the
two that did (/ and /websites) shared no markup, with /websites missing a
copyright entirely. There is now ONE footer
(src/components/common/Footer.jsx): identity block (name, role, location,
email), three link columns (Site / Work with me / Elsewhere), and the
copyright, with "Thanks for scrolling this far." kept but demoted beneath the
divider per Keshav. Rendered from the layouts for /build, /websites, and
/blog/[slug], inline on /now (no layout file), and unchanged on /. The
bespoke inline footer on /websites was deleted. /fade is deliberately left
without one: it is a full-screen audio/gallery piece. Every footer link
resolves to a real route or homepage anchor; there is no /writing route, so
Writing points at /#writing.

Validation: build passes, lint 0 errors, footer verified identical on
/, /websites, /build, /now (3 columns, 11 links, copyright present);
slideshow verified in-browser (auto-advance Home -> Life Audit -> ..., image
click advances, bar click jumps, counter tracks); 1440/820/390 with no
horizontal overflow; 0 em dashes in built output. Screenshots:
screenshots/websites-offer/v3-*.png.

Still open: recurring-cost and ownership FAQ policy (Keshav deferred);
build the AEO page and set aeoOffer.href; swap the Mack href to
mackminaya.com after DNS cutover; record Mack's sign-off for featuring his
work (still an open launch blocker in his repo).


## Round 3 (Claude, 2026-09-17)

Keshav: previews are fine to show, capability is the point, and some of this
was free work for clients. Added NV Studio below Mack Minaya.

Gallery is now three real sites, in this order: Ruvoa, Mack Minaya, NV Studio.

NV Studio (https://nv-studio-nine.vercel.app, verified 200 and public) is a
SINGLE-page site, so its five slideshow frames are its anchored sections
(#top, #work, #reels, #services, #visit) captured by scrolling, not separate
routes. Labels read Home / The work / Reels / Services / Visit. Its custom
domain is still pending; swap the href when it lands (also noted in that
repo's AGENTS.md alongside its metadataBase TODO).

Grid: with three examples the fourth cell was empty and the full-width
invitation left a visible gap. The invitation now fills that cell when the
example count is odd and spans the full row when it is even. That decision
lives in page.jsx (`websiteExamples.length % 2`) rather than a CSS
`nth-last-of-type` sibling selector, which I tried first and reverted because
it would silently break when a fourth site is added.

Total shipped screenshot weight across all three sites: 488KB of webp.

Validation: build passes, lint 0 errors, 1440/820/390 with no horizontal
overflow, invitation verified side-by-side with the third card at 1440,
NV Studio slideshow click-advance confirmed. Screenshots: v4-*.png.


## Round 4 (Claude, 2026-09-17): free-build strategy, deliberately NOT on the page

Keshav's plan for the next one or two clients: offer a free build bundled with
the recurring care plan, so those clients buy real domains and this page can
show live client domains instead of .vercel.app URLs.

Decision: this offer stays a CONVERSATION, never public on /websites. A visible
free option cannibalizes the $1,300 one, converting a paid sale into a
13-month receivable. Retire the offer once two live client domains exist.

Terms worked out with Keshav (record these in the client agreement, not the
site):
- Build free; $99/month care plan with a 12-MONTH MINIMUM, then month-to-month.
  Without a minimum the free build is a gift: 12 months at $99 is $1,188,
  roughly the $1,300 build.
- Keshav registers and manages the domain and hosting, cost absorbed in the
  $99. This is deliberate: asking a local-business owner to pick a registrar
  and configure DNS is where deals stall or die.
- The domain transfers to the client on request, free, at any time. This
  sentence must be in the agreement; it removes the "holding my domain
  hostage" objection at zero cost.
- Cancellation inside the term: remaining months due, or a buyout figure.
- Rejected: a screenshare to set up the domain together. It spends a live
  half hour on a $15 transaction and still needs their card on the call.
  Screenshares are the /build offer at $150.

The public page is UNCHANGED on price and terms: $1,300 flat, $99/month
optional, "Cancel anytime" (accurate for paying clients). Note the tension if
the free offer is ever made public: "Cancel anytime" would have to become the
12-month minimum.

Only page edit this round: a new FAQ, "Who handles the domain and hosting?",
answering that Keshav can register and manage both with the cost inside the
care plan or point at a domain the client already owns, and that the domain is
theirs on request, free, any time. This is true for paying clients too and
partly closes the recurring-cost/ownership gap deferred in round 1. FAQ count
is now 8; build passes.


## Round 5 (Claude, 2026-09-17): conversion audit of /websites

Audited the page for what stops a prospect committing. Two defects found were
mine from round 2 and are fixed:

- Color contrast failed AA in the new footer: the `/70` and `/80` opacity
  modifiers gave 3.31:1 and 3.95:1 against #0f1322 (needs 4.5:1). Now using
  the full tokens. Accessibility 95 -> 100.
- Heading order broke when the "Work." h2 was removed in round 3, leaving the
  example h3s with no parent. Restored as a visually hidden h2 (.srOnly), so
  the visual design Keshav asked for is unchanged and the outline is valid.

Four conversion changes, each approved by Keshav:

1. Budget field. Was a REQUIRED radio with only "Yes" / "Not right now",
   asking a prospect to commit to $1,300 before any trust exists, as the
   fourth required field. Now optional, relabelled "Does that work for you?",
   with a third option "Depends what it includes" (Keshav expects most to pick
   it, which is the point: it keeps the lead alive instead of forcing a no).
2. Risk reversal. New line in the price card and the payment FAQ: if they do
   not like the first concept, the $500 deposit is refunded and the project
   stops. This makes an existing reality explicit rather than adding risk.
   Keshav considered free-until-delivery instead; rejected because a client
   with nothing invested does not send content or show up for revisions, and
   the deposit filters tyre-kickers before two weeks of work.
3. Capacity. "Two projects at a time" replaces the turnaround line in the hero
   band, plus a FAQ. Keshav chose concurrency over "two builds a month"
   because it is easier to defend and needs no monthly tracking. Turnaround
   detail moves to the conversation.
4. Client reactions. Section built but DELIBERATELY EMPTY:
   `testimonials = []` renders nothing. Keshav has real positive reactions
   from Noel and Mack and will paste verbatim words later. Do NOT write these
   from memory: paraphrased reviews are an FTC problem and a launch blocker
   under client-work/AGENTS.md, and NV Studio's repo still lists testimonial
   permissions as an open launch blocker. Shape is
   { quote, name, business, href }.

Performance, item 5 of the audit. Root cause found by direct measurement
under 4x CPU / 1.6Mbps throttling: ALL 15 slideshow frames (5 per site x 3
sites) were downloading on first paint even though 12 were hidden. Frames now
mount progressively (current + next only), so first paint pulls 6 images
instead of 15 and the rest load as the visitor advances. Verified all five
frames per site are still reachable by clicking.

Two failed attempts worth recording, both tripping the react-hooks lint rules:
a `useState` high-water mark ("setState synchronously within an effect") and
then a `useRef` one ("Cannot access refs during render"). The working version
derives the mount window from `index` alone, which is sufficient because
advance is sequential.

Lighthouse mobile, before -> after: performance 87 -> 92, accessibility
95 -> 100, best practices 100 -> 96 (run variance), SEO 100 -> 100.
LCP 3.8s -> 3.4s, TBT 160ms -> 10ms, CLS 0. Note `unminified-javascript`
(~450ms) is a local dev-server artifact and does not apply to Vercel builds.
Build passes, lint 0 errors.

Remaining recommendations NOT acted on: none outstanding from the audit.
Open items unchanged: paste the real testimonials, build the AEO page and set
aeoOffer.href, swap both client hrefs to real domains when they land.


## Round 6 (Claude, 2026-09-17)

1. Spacing bug in the price card. The deposit-back line had a border-top and
   padding above but no margin below, so it sat flush against the CTA. Now
   1.35rem above and 1.5rem below (verified: 24px gap where there was ~0).

2. "About two weeks" was still front-facing in SEVEN places after round 5
   swapped the hero band to "Two projects at a time". My miss: the hero band
   was changed but a second hardcoded turnaround line remained in the price
   card, plus the meta description, OG description, Twitter description, OG
   image alt, and the JSON-LD offer description. All removed. The FAQ question
   "When does the two weeks start, and why two?" is now "How long does it
   take?", answered as "We agree a timeline once I know your project", with
   the clock-start and revision-rounds detail kept. Verified: no "two weeks"
   anywhere in the rendered page.

3. Domain and hosting costs now stated in plain English wherever cost appears,
   per Keshav:
   - Price card: "Hosting and your domain renew yearly. Covered by the plan
     below, or held by you." (Two earlier drafts were too wordy; the first
     explained what hosting and a domain ARE, the second opened with a
     redundant "One-time.")
   - Care block: "Updates, small edits, monitoring, and the hosting and domain
     kept paid and renewed. No separate bills to remember. Cancel anytime."
   - Care FAQ: full plain-English version, including that a domain is about
     $15 a year and that if they skip the plan those costs are theirs.
   - Domain FAQ: names the ~$15/year figure.

4. Email removed from the footer on every page, per Keshav. Verified absent on
   /, /websites, /build, /now. Contact routes are unchanged (the /websites
   contact section and the homepage Contact section still show it).

5. Homepage Work section now ends with "I also build websites for local
   businesses." and a "See the websites" link to /websites, above a hairline
   divider, with a `websites_click` analytics event tagged
   placement: work_section (matching the existing BookLink pattern used
   elsewhere). Navigation verified. The products above stay the case studies;
   client website work lives on its own page rather than being mixed into that
   list.

Build passes, lint 0 errors. Screenshots: pricecard3.png, home-work.png.


## Round 7 (Claude, 2026-09-17): where turnaround belongs

Question was where a visitor actually wonders about turnaround while scrolling.
Two moments, and they are different questions:

- Hero band: a COMPARISON question ("are you an agency that takes four
  months?"), answered in a three-second scan.
- Step 03 of "How it works": the real one. That step asks for a $500 deposit,
  so it is the only place the question is urgent rather than curious.

Keshav's decisions: nothing in the hero band (it stays price / pages /
capacity), and step 03 points at the conversation rather than quoting a
duration. Step 03 now reads: "We agree the timeline before you pay anything.
Then the $500 deposit, I build the site, we do the two revision rounds, and it
goes live." Reassurance deliberately precedes the money in that sentence.

The FAQ "How long does it take?" remains the detailed answer.

Net effect: the page now makes NO duration claim anywhere. Verified absent:
"two weeks", "three weeks", "N weeks", "weeks, not months". Recommended but
declined: "Weeks, not months" in the band, which would have kept the speed
advantage over slower agencies with nothing falsifiable to defend. If the page
ever underperforms against agency competitors, that is the first thing to try.

Build passes. Screenshot: screenshots/websites-offer/process.png.


## Round 8 (Claude, 2026-09-17): how to claim speed honestly

Keshav's insight, which is the whole solution: the build is about a week when
he has all the client's material, but the two revision rounds add THEIR
response time on top. Those are two separable things, and bundling them into
one number is what made "live in about two weeks" a promise he could miss
through no fault of his own.

Approach: claim the part he controls, name the part he does not.

- Hero band: "Built in about a week". Faster-sounding than the old "two
  weeks", and actually hittable since it excludes client review time.
- Step 03: "You pay the $500 deposit and I build in about a week. How soon it
  goes live after that depends on how quickly you come back with feedback on
  the two revision rounds." Pre-frames delay as shared, so a client sitting on
  revisions for five days already knows why it is not live. Also quietly
  selects for responsive clients.
- FAQ "How long does it take?": the full breakdown, including "Clients who
  reply the same day are live inside two weeks" (a conditional, not a
  promise) and that needing longer is fine, it just moves the launch.

Band crowding: adding speed made four facts plus the link. Dropped "Two
projects at a time", the weakest of the four in a three-second scan (scarcity
matters less than price, scope, speed). Capacity is preserved in the FAQ
"How many of these do you take on?" and the now-unused `capacity` copy key was
removed. Band is now price / scope / speed.

One process note: my first crowding check measured the band's container height
(72px) and reported wrapping, but that was padding, not a wrap. The band reads
on one line at 1440. Verified visually rather than trusting the metric. A
later check also reported the capacity FAQ missing, which was the test only
reading text visible before the <details> was opened; the FAQ is intact at
config line 103.

Build passes, lint 0 errors, no mobile overflow. Screenshot: hero.png.


## Round 9 (Claude, 2026-09-17): the two-weeks claim OUTSIDE /websites

Rounds 5-8 removed "two weeks" from /websites but left it live in three
places elsewhere, all now fixed to "built in about a week":

- src/components/pages/Home.jsx:174 - hero quick-link card, mobile stacked
- src/components/pages/Home.jsx:201 - hero quick-link card, desktop corner
- src/app/now/page.jsx:58 - the /now freelance line

Lesson for future copy changes: a claim like this lives in more than the page
that owns it. `grep -rn "<claim>" src/` across the whole repo, not just the
route being edited.

The hero CTA BUTTONS themselves ("Get in Touch", "View Work") carry no timing
copy and are unchanged; the stale claim was in the quick-link cards beneath
them.

Every remaining week reference is deliberate: "built in about a week" as the
build-time claim, plus one conditional in the FAQ ("clients who reply the same
day are live inside two weeks"), which is contingent on client behavior rather
than a promise.

Build passes, lint 0 errors. Verified rendered at 1512 (corner cards), 390
(stacked cards), and on /now.


## Round 10 (Claude, 2026-09-17): audit of /websites and its entry points

Entry points into /websites, all five verified consistent in message and all
now saying "built in about a week":
1. Hero quick-link card (Home.jsx, mobile stacked + desktop corner variants)
2. Work section link, "I also build websites for local businesses" (round 6)
3. WorkWithMe section card, "Need a polished website for your business?"
4. /now page freelance line
5. Footer "Work with me" column
Plus src/app/sitemap.js, which already includes the route.

Three defects found and fixed:

- Slideshow position-bar segments were 22x3px tap targets on mobile, far under
  the 44px minimum. Added a transparent 44px-tall ::after hit area so the bar
  is reachable on a phone without changing the 3px visual. Verified by
  elementFromPoint probing: hits register 20px above and 14px below centre.
  Lighthouse target-size now PASS.
- The footer linked to the page you were already on (a dead click on every
  route). Footer is now a client component using usePathname; the current
  route renders as text with aria-current="page" instead of a link. Verified
  on /websites: no self-link, aria-current present.
- "More about me" in the About section pointed at "/" (homepage top), not at
  anything about Keshav. Now /#experience, and that anchor exists
  (Experience.jsx line 32).

No failed network requests on the page apart from the known
/_vercel/insights/script.js 404, which is production-only tooling.

Final Lighthouse mobile: performance 92, accessibility 100, best practices 96,
SEO 100. LCP 3.4s, CLS 0, TBT 10ms, tap targets PASS. Build passes, lint 0
errors.

Observation not acted on: five separate CTAs on the page all point at
#concept, three of them labelled "Request a website concept". That is
deliberate repetition for a long sales page, not a defect, but if the page
ever feels repetitive that is the place to look.


## Round 11 (Claude, 2026-09-17): Mack's testimonial is live

Keshav supplied Mack's messages from after the site went up and confirmed
permission to quote publicly (2026-09-17). Recorded in
client-work/mack-minaya/AGENTS.md as item 10a, explicitly distinguished from
item 10 (Mack approving his OWN site's copy and imagery before launch), which
remains an open launch blocker.

Published excerpt, verbatim and contiguous with an ellipsis marking the cut:
"HOLY SHIT THIS WEBSITE ITS FIREEEEE ... Brooo thank you so much for the
website" - Mack Minaya, Photographer, NYC and Connecticut.

The profanity is deliberate, per Keshav. An unpolished reaction is the part
that reads as a real person; sanding it into "Great website, thank you" would
be the paraphrasing the house rule prohibits.

Layout: a single testimonial stretched the full 1168px column and read as a
thin banner. The section now detects a lone entry with
`.quotes:has(> :only-child)` and treats it as a feature instead: 46rem
measure, centred, Source Serif at clamp(1.25rem, 2.4vw, 1.6rem). Two or more
fall back to the original auto-fit grid with no change needed.

Two measurement mistakes of mine worth noting: a `[class*=quote]` selector in
my verification script matched the outer `.quotes` container rather than the
`.quote` figure, so I briefly believed the width constraint had not applied.
It had (grid column 736px, justify-content centre). Verified by reading
computed styles and then visually.

Final state: Lighthouse mobile performance 92, accessibility 100 (contrast
PASS), best practices 96, SEO 100. No overflow at 1440 or 390. 0 em dashes in
built output. Build passes, lint 0 errors.

Still open: NV Studio testimonial (Noel's reaction not yet supplied, and that
repo's testimonial-permission blocker is separate and still open); build the
AEO page and set aeoOffer.href; swap both client hrefs to real domains when
they land.


## Round 12 (Claude, 2026-09-17): quotes attach to their site

Keshav: put each testimonial directly under the site it is about, and drop the
profanity.

Structural change: the standalone `testimonials` export and the
`.quotes` section are gone. A reaction is now an optional `quote` field on the
example entry itself, rendered inside the card beneath the summary. Adding
Noel's is a one-line edit to the nv-studio entry. Styled with a left rule and
the serif face so it reads as someone else's voice rather than more page copy.

Profanity: Keshav asked whether we could rephrase to "this website is fire ...
bro thank you". Declined the rewording and offered excerpting instead, because
client-work/AGENTS.md treats paraphrased-beyond-recognition reviews as an FTC
problem and a launch blocker, and altered words inside quotation marks are
exactly what that rule covers. Dropping the first two words achieves the same
result with nothing reworded. Published quote:

  "THIS WEBSITE ITS FIREEEEE ... Brooo thank you so much for the website"

Every character is his. Starting mid-sentence is normal excerpting, so no
leading ellipsis.

One self-caught rule violation: my first version of the attribution used an em
dash (CSS `content: '\2014'`), which the house rule bans in rendered copy.
Attribution dashes are a conventional exception, but rather than silently
introduce one I switched to an en dash (`\2013`). Verified 0 em dashes in both
the built HTML and the built CSS.

Lighthouse mobile unchanged: performance 92, accessibility 100 (contrast
PASS), best practices 96, SEO 100. No overflow at 390, 820, or 1440. Build
passes, lint 0 errors.


## Round 14 (Claude, 2026-09-17): Noel's testimonial

Noel's messages had no profanity and no grammar to fix, so unlike Mack's this
is a genuine verbatim `quote` and carries real quotation marks:

  "Dude this is amazing, so much better than I could have ever thought of
   doing ... Looks so good"

Two of his three messages, joined with an ellipsis marking the cut. "Woahhh"
was left out: stitching three fragments starts to read as assembled rather
than said. Permission confirmed 2026-09-17, logged in
client-work/nv-studio/AGENTS.md and explicitly distinguished from that repo's
open blocker about the reviewers on Noel's own site.

Signature is "Noel (NV Studio)" per Keshav.

Bug found while verifying: the attribution rendered `example.name`, which is
the SITE name. It happened to look right for Mack (his site is named after
him) but produced "NV Studio" as the speaker of a personal testimonial. Added
an explicit `said_by` field; the caption now falls back to `name` only if it
is absent.

Noel also likes that tapping the address opens the studio in Google Maps.
Verified real (Visit.tsx and Footer.tsx both link to a Maps search for the
studio). Written into Keshav's own summary of the build rather than into
Noel's quote, since his messages never mention it; putting it there would be
inventing testimonial content. Worded as "opens the studio in Google Maps",
not "directions", because the link is a location search rather than
turn-by-turn navigation.

Build passes, lint 0 errors, 0 em dashes, no overflow at 390 or 1440.


## Round 15 (Claude, 2026-09-17): the OG image still said two weeks

Keshav caught this. Rounds 5-9 removed the claim from every page and from the
OG *alt text*, but public/og-websites.png had "live in two weeks" rendered
into the pixels, so every social share still promised it.

Root cause worth noting: the image was generated by a throwaway script in
/tmp, so there was nothing in the repo to grep or update when the copy
changed. The generator now lives at scripts/generate-og-websites.mjs with a
header explaining why, and folds the compression step in so it is one command.

New image: same Monument-under-aurora design (ink-indigo ground, teal glow
upper-left, gold lower-right, Source Serif headline, Inter subline), headline
"Websites for local service businesses." and subline "$1,300 flat. Built in
about a week, by one engineer." The speed claim is the defensible build-time
version from round 8, not a total-delivery promise.

Also: the raw 2x screenshot was 593KB, heavy for a social card. Compressed to
50KB at the correct 1200x630. Alt text updated to match the image.

Checked the main og.png too: no timing claim, and its "Software Engineer
building AI-powered products" line matches current positioning. Left alone.

Build passes. The only remaining "two weeks" in the codebase is the FAQ
conditional at config/websites.js:126, which is contingent on client response
time rather than a promise.
