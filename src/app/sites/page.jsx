import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, BeforeAfterSlider } from '../../components/ui';

const CONTACT_EMAIL = 'sites@kunver.com';
const CTA_HREF = `mailto:${CONTACT_EMAIL}?subject=Here%27s%20my%20site`;

// TODO: real client work only. One great comparison beats six mediocre ones.
const showcase = [
  {
    id: 'client-one',
    beforeSrc: null, // TODO: before screenshot (e.g. /sites/client-one-before.png in /public)
    afterSrc: null, // TODO: after screenshot
    // TODO: one line of context — who, what was wrong, how long it took.
    context: 'TODO: e.g. "Restaurant in Austin. Old Wix site, no mobile menu. Rebuilt in a week."',
  },
  {
    id: 'client-two',
    beforeSrc: null, // TODO: before screenshot
    afterSrc: null, // TODO: after screenshot
    context: 'TODO: context line for second client. Delete this entry if there is only one strong example.',
  },
];

const steps = [
  {
    title: 'Send us your site',
    body: 'TODO: e.g. "Email the link. No call, no forms."',
  },
  {
    title: 'Get a fixed price',
    body: 'TODO: e.g. "One number back in two days. No hourly billing."',
  },
  {
    title: 'We build, you review',
    body: 'TODO: e.g. "Live preview link. Your current site stays up until you say go."',
  },
  {
    title: 'Launch',
    body: 'TODO: e.g. "We point your domain. You own everything."',
  },
];

const tiers = [
  {
    id: 'refresh',
    price: 'TODO: $X',
    name: 'Refresh',
    description: 'TODO: existing site, polished. New look, same bones. Scope in 1–2 lines.',
  },
  {
    id: 'rebuild',
    price: 'TODO: $X',
    name: 'Rebuild',
    description: 'TODO: from scratch. New design, new build, your content moved over.',
  },
  {
    id: 'custom',
    price: 'Custom',
    name: 'Bigger than that',
    description: 'TODO: for sites that need booking, payments, or something weirder. Email us.',
  },
];

const faqs = [
  {
    q: 'Do I own the site after?',
    a: 'TODO: e.g. "Yes. Code, domain, accounts — all yours. No monthly fee to us."',
  },
  {
    q: 'How long does it take?',
    a: 'TODO: honest range, e.g. "A refresh is about a week. A rebuild is two to three."',
  },
  {
    q: 'Will my domain and email keep working?',
    a: 'TODO: cover hosting moves here too, e.g. "Yes. We handle the hosting move; email stays exactly as it is."',
  },
  {
    q: 'What if I want changes later?',
    a: 'TODO: e.g. "Small fixes are free the first month. After that, email us."',
  },
];

export default function SitesPage() {
  // Dev-only preview: this route 404s in production builds until it's ready
  // to ship. Remove this gate (and the layout's noindex) to go live.
  if (process.env.NODE_ENV !== 'development') {
    notFound();
  }

  return (
    <div className='min-h-screen bg-dark-bg'>
      <div className='max-w-2xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-20'>
        <Link
          href='/'
          className='text-text-tertiary hover:text-text-primary transition-colors text-sm'
        >
          &larr; Back
        </Link>

        {/* Dev-only banner — remove when the page ships */}
        <p className='mt-6 text-xs uppercase tracking-wider text-accent/70 border border-dark-border rounded-lg px-3 py-2 w-fit'>
          Dev preview &mdash; not visible in production
        </p>

        {/* Hero */}
        <h1 className='text-4xl sm:text-5xl font-bold text-text-primary mt-8 mb-6 tracking-tight'>
          {/* TODO: pick one — "We rebuild your site." / "Your site, upgraded." */}
          Your site, upgraded.
        </h1>
        <div className='space-y-6 text-text-secondary leading-loose mb-10'>
          <p>
            {/* TODO: cold open in the /build voice — a short story or blunt one-liner, not agency-speak. */}
            My brother and I build and upgrade sites for clients. I lead the
            builds; he executes with me.
          </p>
        </div>
        <div className='mb-16'>
          <a
            href={CTA_HREF}
            className='inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto'
          >
            Send us your site
          </a>
          <p className='text-text-tertiary text-sm mt-3'>
            {/* TODO: one-line reassurance, e.g. "You get a fixed quote back in two days. No call required." */}
            TODO: reassurance line under the CTA.
          </p>
        </div>

        {/* Before / After showcase */}
        <h2 className='text-2xl font-bold text-text-primary mt-12 mb-2 tracking-tight'>
          Recent work
        </h2>
        <p className='text-text-tertiary text-sm mb-6'>Drag the handle.</p>
        <div className='space-y-10'>
          {showcase.map((item) => (
            <div key={item.id}>
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
              />
              <p className='text-text-secondary text-sm mt-3 leading-relaxed'>
                {item.context}
              </p>
            </div>
          ))}
        </div>

        {/* What we do / don't do */}
        <h2 className='text-2xl font-bold text-text-primary mt-16 mb-4 tracking-tight'>
          What we do
        </h2>
        <div className='space-y-4 text-text-secondary leading-relaxed'>
          {/* TODO: tighten to what you genuinely want to take on. */}
          <p>
            Rebuilds. Refreshes. Mobile fixes. Speed. The booking form or
            payment link your site should already have.
          </p>
          <p className='text-text-tertiary'>
            {/* TODO: the "not us" list — kills bad-fit emails. */}
            Not us: TODO &mdash; e.g. big e-commerce, SEO retainers, social media.
          </p>
        </div>

        {/* How it works */}
        <h2 className='text-2xl font-bold text-text-primary mt-16 mb-6 tracking-tight'>
          How it works
        </h2>
        <ol className='space-y-6'>
          {steps.map((step, i) => (
            <li key={step.title} className='flex gap-4'>
              <span className='text-accent/60 font-heading text-sm pt-1 shrink-0 w-5'>
                {i + 1}
              </span>
              <div>
                <h3 className='text-lg font-semibold text-text-primary mb-1'>
                  {step.title}
                </h3>
                <p className='text-text-secondary leading-relaxed'>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {/*
          TODO: Outcome strip — ONLY when there are real, self-measurable numbers
          (load time before/after, Lighthouse scores). Reuse <MetricTile /> from
          components/ui. Skip entirely rather than padding it — no fake metrics.
        */}

        {/* Pricing */}
        <h2 className='text-2xl font-bold text-text-primary mt-16 mb-4 tracking-tight'>
          What it costs
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className='rounded-xl p-4 border border-dark-border'
            >
              <p className='text-text-primary text-2xl font-heading font-semibold'>
                {tier.price}
              </p>
              <p className='text-sm mt-1 text-text-secondary'>{tier.name}</p>
              <p className='text-text-tertiary text-sm mt-1'>{tier.description}</p>
            </div>
          ))}
        </div>
        <p className='text-text-secondary text-sm leading-relaxed'>
          {/* TODO: capacity line if true, e.g. "We take on two sites a month." */}
          TODO: capacity / scarcity line (only if real).
        </p>

        {/* Guarantee */}
        <div className='mt-12'>
          <Card>
            <h2 className='text-2xl font-bold text-text-primary mb-4 tracking-tight'>
              Our guarantee
            </h2>
            <p className='text-text-secondary leading-loose'>
              {/* TODO: pick the guarantee you can actually stand behind, e.g.
                  "If you don't like the new site, you don't launch it and you
                  don't pay the balance." Define deposit vs. balance terms. */}
              TODO: guarantee copy.
            </p>
          </Card>
        </div>

        {/*
          TODO: Testimonial — one real quote with name + business. Skip until
          you have one; don't use a placeholder quote in production.
        */}

        {/* FAQ */}
        <h2 className='text-2xl font-bold text-text-primary mt-16 mb-4 tracking-tight'>
          Questions people ask
        </h2>
        <div className='space-y-8'>
          {faqs.map((faq) => (
            <div key={faq.q}>
              <h3 className='text-lg font-semibold text-text-primary mb-2'>
                {faq.q}
              </h3>
              <p className='text-text-secondary leading-loose'>{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className='mt-16 pt-10 border-t border-dark-border'>
          <a
            href={CTA_HREF}
            className='inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto'
          >
            Send us your site
          </a>
          <p className='text-text-tertiary text-sm mt-3'>{CONTACT_EMAIL}</p>
        </div>
      </div>
    </div>
  );
}
