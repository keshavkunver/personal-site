import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../../components/ui';
import ConceptForm from '../../components/websites/ConceptForm';
import headshotImage from '../../assets/images/profile/headshot.png';

const EMAIL = 'keshavkunver@gmail.com';

const ctaClasses =
  'inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto';

const ctaSecondaryClasses =
  'inline-flex h-11 items-center justify-center rounded-lg border border-dark-border px-6 font-heading text-base font-medium text-text-secondary transition-all duration-200 hover:text-text-primary hover:border-dark-border-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto';

const problems = [
  "A customer finds you on Google and opens your site on their phone. They can't find your phone number, so they call the next company on the list.",
  'Your contact form sends to an inbox nobody checks. Or it broke months ago and nobody noticed.',
  "There's no pricing and no service area on the site. The people who would have hired you never call to ask.",
  "The site looks old enough that a customer wonders if you're still in business.",
];

const deliverables = [
  {
    outcome: 'Customers can reach you in one tap.',
    detail:
      'Click-to-call and click-to-text on every page, and a contact form wired to an inbox you actually check.',
  },
  {
    outcome: 'You show up when someone searches your service near your city.',
    detail:
      'The page titles and descriptions Google reads, a sitemap, and your Google Business Profile connected.',
  },
  {
    outcome: 'People know what you charge before they call.',
    detail: 'Your pricing and service area, right on the page.',
  },
  {
    outcome: 'It works on a phone, where almost everyone will see it.',
    detail: "Built for phones first, because that's where your customers will find you.",
  },
  {
    outcome: "It's done and live, not a project that drags.",
    detail: 'Up to 5 pages, 2 rounds of revisions, live on your domain.',
  },
];

const steps = [
  {
    name: 'Tell me about your business',
    detail: 'Send your website and a sentence or two about what you do. It should take about a minute.',
  },
  {
    name: 'I create a concept',
    detail: "If I think we're a good fit, I'll put together a website concept and send you a short private video walking through the direction I'd take.",
  },
  {
    name: 'You decide',
    detail: 'If you like the direction, you sign the agreement and send the $500 deposit.',
  },
  {
    name: 'I build it',
    detail: 'I turn the concept into the full site, we make revisions, and get it live.',
  },
];

export default function WebsitesPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-3xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-20">
        <Link
          href="/"
          className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
        >
          ← Back
        </Link>

        {/* Hero */}
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mt-8 mb-6 tracking-tight">
          Websites for local service businesses, live in two weeks.
        </h1>
        <p className="text-body-lg text-text-secondary leading-loose max-w-2xl">
          I'm an engineer and I build it myself. No template, no account
          manager, no chain of handoffs. You talk to the person doing the work.
        </p>
        <div className="mt-8">
          <a href="#concept" className={ctaClasses}>
            Get a Website Concept
          </a>
          <p className="text-sm text-text-tertiary mt-4">
            No call required. See the direction I'd take your site before
            deciding to hire me.
          </p>
        </div>

        {/* The problem */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          This is probably costing you money right now
        </h2>
        <ul className="space-y-5">
          {problems.map((problem) => (
            <li
              key={problem}
              className="text-text-secondary leading-loose pl-5 border-l border-dark-border-hover"
            >
              {problem}
            </li>
          ))}
        </ul>

        {/* Framing */}
        <div className="mt-16 py-8 border-y border-dark-border">
          <p className="text-lg text-text-primary leading-relaxed max-w-2xl">
            For a service business, a website has one job: turn someone who
            found you into someone who contacts you. Most small business sites
            fail at that one job. The reasons are almost always small and
            fixable.
          </p>
        </div>

        {/* What you get */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          What you get
        </h2>
        <div className="space-y-7">
          {deliverables.map((item) => (
            <div key={item.outcome}>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {item.outcome}
              </h3>
              <p className="text-text-secondary leading-loose">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* What's not included */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          What's not included
        </h2>
        <ul className="space-y-3 text-text-secondary leading-loose list-disc list-inside">
          <li>Logo design</li>
          <li>Copywriting from scratch</li>
          <li>Ongoing content updates (that's what the maintenance plan below is for)</li>
          <li>E-commerce</li>
        </ul>
        {/* Pricing */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          Pricing
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-dark-border-hover bg-dark-elevated shadow-glow p-8 flex flex-col">
            <p className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-2">
              The build
            </p>
            <p className="text-4xl font-bold text-text-primary mb-4">$1,300</p>
            <p className="text-text-secondary leading-loose mb-3">
              $500 deposit to start, $800 at launch. Roughly two weeks from
              kickoff to live.
            </p>
            <p className="text-text-tertiary text-sm mb-6 flex-1">
              Flat price. No hourly billing, no surprise add-ons later.
            </p>
            <a href="#concept" className={ctaClasses}>
              Get a Website Concept
            </a>
          </div>
          <div className="rounded-xl border border-dark-border bg-dark-surface p-8 flex flex-col">
            <p className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-2">
              Maintenance
            </p>
            <p className="text-4xl font-bold text-text-primary mb-4">
              $99<span className="text-lg font-medium text-text-tertiary">/month</span>
            </p>
            <p className="text-text-secondary leading-loose mb-6 flex-1">
              Updates, fixes, hosting oversight. Optional. Cancel anytime.
            </p>
            <a href="#concept" className={ctaSecondaryClasses}>
              Get a Website Concept
            </a>
          </div>
        </div>

        {/* Process */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          How it works
        </h2>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={step.name} className="flex gap-4 text-text-secondary leading-loose">
              <span className="text-text-tertiary font-heading font-medium shrink-0">
                {i + 1}.
              </span>
              <span>
                <span className="text-text-primary font-medium">{step.name}.</span>{' '}
                {step.detail}
              </span>
            </li>
          ))}
        </ol>

        {/* Who's building it */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          Who's building it
        </h2>
        <div className="flex items-start gap-5">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-dark-border shrink-0">
            <Image
              src={headshotImage}
              alt="Keshav Kunver"
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </div>
          <p className="text-text-secondary leading-loose">
            I'm Keshav. I build software for a living, and this site is mine.
            When you hire me, I'm the one you talk to and the one writing the
            code.{' '}
            <Link href="/" className="text-text-primary hover:underline">
              Here's the rest of my work.
            </Link>
          </p>
        </div>

        {/* TODO: Case study. Activate this section once the client site is live.
        Fill in the client name, the broken list, what changed, and the live URL.

        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          Recent work
        </h2>
        <Card>
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            CLIENT_NAME
          </h3>
          <p className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-2">
            What was broken
          </p>
          <ul className="space-y-2 text-text-secondary leading-loose list-disc list-inside mb-6">
            <li>BROKEN_ITEM_1</li>
            <li>BROKEN_ITEM_2</li>
            <li>BROKEN_ITEM_3</li>
          </ul>
          <p className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-2">
            What changed
          </p>
          <p className="text-text-secondary leading-loose mb-6">
            WHAT_CHANGED_COPY
          </p>
          <a
            href="LIVE_SITE_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:underline"
          >
            See the live site
          </a>
        </Card>
        */}

        {/* Website Concept form */}
        <div id="concept" className="mt-16 pt-10 border-t border-dark-border scroll-mt-20">
          <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">
            See what I'd do with your website.
          </h2>
          <p className="text-text-secondary leading-loose max-w-2xl mb-8">
            Tell me a little about your business. If I think we're a good fit,
            I'll put together a website concept and send you a short private
            video walking through the direction I'd take.
          </p>
          <ConceptForm />
          <p className="text-sm text-text-tertiary mt-8">
            Prefer email?{' '}
            <a
              href={`mailto:${EMAIL}?subject=Website%20inquiry`}
              className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4 decoration-white/30"
            >
              {EMAIL}
            </a>{' '}
            works too.
          </p>
        </div>
      </div>
    </div>
  );
}
