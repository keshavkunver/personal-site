import Link from 'next/link';
import { Card } from '../../components/ui';

// TODO: replace with your real Calendly link
const CALENDLY_URL = 'https://calendly.com/REPLACE_ME';

const ctaClasses =
  'inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto';

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
      'Meta titles and descriptions, a sitemap, and your Google Business Profile connected.',
  },
  {
    outcome: 'People know what you charge before they call.',
    detail: 'Your pricing and service area, right on the page.',
  },
  {
    outcome: 'It works on a phone, where almost everyone will see it.',
    detail: 'A mobile-first responsive build.',
  },
  {
    outcome: "It's done and live, not a project that drags.",
    detail: 'Up to 5 pages, 2 rounds of revisions, deployed on your domain.',
  },
];

const steps = [
  { name: '15 minute call', detail: 'You tell me about your business. I tell you if this is a fit.' },
  { name: 'Deposit and kickoff', detail: 'You send $500 and whatever you have: photos, prices, your old site.' },
  { name: 'Build', detail: 'I build the site, with one check-in partway through.' },
  { name: 'Launch', detail: 'The site goes live on your domain. You pay the rest.' },
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
          I'm an engineer and I build it myself, not a template and not an
          agency passing your project down a chain.
        </p>
        <div className="mt-8">
          <a href={CALENDLY_URL} rel="noopener" className={ctaClasses}>
            Book a 15 minute call
          </a>
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
        <p className="text-text-secondary leading-loose mt-4">
          If you need those, I'll tell you on the call and point you somewhere
          that does them well.
        </p>

        {/* Pricing */}
        <h2 className="text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight">
          Pricing
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-dark-border-hover bg-dark-elevated shadow-glow p-8 flex flex-col">
            <p className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-2">
              The build
            </p>
            <p className="text-4xl font-bold text-text-primary mb-4">$1,500</p>
            <p className="text-text-secondary leading-loose mb-6 flex-1">
              $500 deposit to start, $1,000 at launch. Roughly two weeks from
              kickoff to live.
            </p>
            <a href={CALENDLY_URL} rel="noopener" className={ctaClasses}>
              Book a 15 minute call
            </a>
          </div>
          <div className="rounded-xl border border-dark-border bg-dark-surface p-8 flex flex-col">
            <p className="text-sm font-medium text-text-tertiary uppercase tracking-wide mb-2">
              Maintenance
            </p>
            <p className="text-4xl font-bold text-text-primary mb-4">
              $99<span className="text-lg font-medium text-text-tertiary">/month</span>
            </p>
            <p className="text-text-secondary leading-loose flex-1">
              Updates, fixes, hosting oversight. Optional. Cancel anytime.
            </p>
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

        {/* Closing CTA */}
        <div className="mt-16 pt-10 border-t border-dark-border text-center">
          <p className="text-lg text-text-primary mb-6">
            One short call. If it's not a fit, you'll know in 15 minutes.
          </p>
          <a href={CALENDLY_URL} rel="noopener" className={ctaClasses}>
            Book a 15 minute call
          </a>
        </div>
      </div>
    </div>
  );
}
