'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '../../components/ui';

const STRIPE_SINGLE = 'https://buy.stripe.com/8x27sL0UzfsdeoD70q0gw01';
const STRIPE_THREE = 'https://buy.stripe.com/fZu6oH9r51Bn0xN0C20gw00';

const tiers = [
  {
    id: 'single',
    price: '$150',
    name: 'One session',
    description: ['One hour.', 'One working thing.'],
    ctaLabel: 'Book a session ($150)',
    href: STRIPE_SINGLE,
  },
  {
    id: 'three',
    price: '$375',
    name: 'Ship it',
    description: ['Three sessions.', 'Save $75.'],
    ctaLabel: 'Book three sessions ($375)',
    href: STRIPE_THREE,
  },
  {
    id: 'ongoing',
    price: 'Custom',
    name: 'Ongoing',
    description: 'For bigger builds that need consistent time.',
    ctaLabel: 'Email me',
    href: 'mailto:keshav@kunver.com?subject=Ongoing%20build%20sessions',
  },
];

export default function BuildPage() {
  const [selected, setSelected] = useState(null);

  const activeTier = tiers.find((t) => t.id === selected);
  const ctaLabel = activeTier ? activeTier.ctaLabel : 'Book a session';
  const ctaHref = activeTier ? activeTier.href : STRIPE_SINGLE;

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-20">
        <Link
          href="/"
          className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
        >
          ← Back
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mt-8 mb-12 tracking-tight">
          Build with me
        </h1>

        {/* Cold open */}
        <div className="space-y-6 text-text-secondary leading-loose">
          <p>
            The first time I tried to explain vibe coding to a friend who doesn't
            code, I sent him a doc and a YouTube link and told him to just start
            messing around. He never opened either one. Three months later the idea
            was still an idea.
          </p>
        </div>

        {/* Pull quote */}
        <p className="text-xl sm:text-2xl text-text-primary my-10 leading-snug max-w-lg">
          Nobody wants to be alone the first time.
        </p>

        <p className="text-text-secondary leading-loose">
          So: one hour, we get on a call, and we build your thing together.
        </p>

        <div className="mt-10 mb-12">
          <a
            href={STRIPE_SINGLE}
            rel="noopener"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto"
          >
            Book a session
          </a>
          <p className="text-text-tertiary text-sm mt-3">
            $150 for the hour. If nothing's running by the end, I refund it.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4 tracking-tight">
          Who this is for
        </h2>
        <div className="space-y-6 text-text-secondary leading-loose">
          <p>
            You're not a developer and you don't want to become one. You've got
            something you keep describing to people at dinner and never building.
            Maybe you've poked at ChatGPT and gotten something that half worked and
            then broke in a way you couldn't explain.
          </p>
          <p>
            You don't need a bootcamp. You need somebody sitting next to you the
            first time.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4 tracking-tight">
          How the hour goes
        </h2>
        <div className="space-y-6 text-text-secondary leading-loose">
          <p>
            You show me what you want and where you got stuck. We cut it down to the
            smallest version that can actually work today, because the thing you
            described at dinner is a six month project and the version we can finish
            tonight is not.
          </p>
          <p>
            Then we build. You're the one typing. I'm the one telling you what to
            say. I could do it faster myself but then you'd be right back here next
            week, so we're not doing that.
          </p>
          <p>
            Last ten minutes I give you the next three things to try alone.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4 tracking-tight">
          What you walk away with
        </h2>
        <p className="text-text-secondary leading-loose">
          Something that runs. Plus an email from me with your project link, the
          prompts that actually worked, and where to go next.
        </p>

        <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4 tracking-tight">
          What we can actually get done in an hour
        </h2>
        <div className="space-y-6 text-text-secondary leading-loose">
          <p>
            Not the whole thing. One real piece of it, live.
          </p>
          <p>
            A landing page for the idea you keep describing at dinner, with a signup form that actually collects emails.
          </p>
          <p>
            An intake form for your practice, so clients stop booking you over text.
          </p>
          <p>
            The tracker that replaces the spreadsheet you outgrew, with the four fields you actually use.
          </p>
          <p>
            A quote calculator, so you stop doing pricing math on the phone.
          </p>
          <p>
            If yours isn't on this list, that's fine. Most of them aren't. The first ten minutes are me finding the version of your idea that fits in the other fifty.
          </p>
        </div>

        {/* Guarantee in a card */}
        <div className="mt-12">
          <Card>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">
              My guarantee
            </h2>
            <div className="space-y-6 text-text-secondary leading-loose">
              <p>
                If you leave the hour without something running on your screen, I'll
                refund it.
              </p>
              <p>
                To be clear about what that means: we're getting a working first version
                live, not a finished product. Your full idea is a months-long build. What
                we do in an hour is the smallest piece of it that actually works, which
                is the part that's been stopping you from starting.
              </p>
            </div>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4 tracking-tight">
          Questions people ask
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Do I need to install anything first?
            </h3>
            <p className="text-text-secondary leading-loose">
              Nothing to install. One thing to do: make sure you have a{' '}
              <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:underline">ChatGPT</a>
              {' '}account before we meet. We'll build in ChatGPT Codex, which is
              available through ChatGPT, including limited access on the free plan.
              No paid coding tool required to get started.
            </p>
            <p className="text-text-secondary leading-loose mt-6">
              That's the only homework. Bring your idea and a laptop.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              What if my idea is too big?
            </h3>
            <p className="text-text-secondary leading-loose">
              Every idea is too big for an hour. Cutting it down is step one, and it's
              the most useful thing I do.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              What if I get stuck after the session?
            </h3>
            <p className="text-text-secondary leading-loose">
              Email me. I answer.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4 tracking-tight">
          What it costs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setSelected(selected === tier.id ? null : tier.id)}
              className={`text-left rounded-xl p-4 transition-all duration-200 border ${
                selected === tier.id
                  ? 'border-dark-border-hover bg-white/[0.04]'
                  : 'border-transparent hover:bg-white/[0.02]'
              }`}
            >
              <p className="text-text-primary text-2xl font-heading font-semibold">{tier.price}</p>
              <p className={`text-sm mt-1 ${tier.id === 'three' ? 'text-text-primary font-medium' : 'text-text-secondary'}`}>
                {tier.name}
              </p>
              {Array.isArray(tier.description) ? (
                tier.description.map((line, i) => (
                  <p key={i} className="text-text-tertiary text-sm mt-1">{line}</p>
                ))
              ) : (
                <p className="text-text-tertiary text-sm mt-1">{tier.description}</p>
              )}
            </button>
          ))}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          I'm only taking 5 of these a month.
        </p>

        {/* CTA area */}
        <div className="mt-16 pt-10 border-t border-dark-border">
          <a
            href={ctaHref}
            rel="noopener"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto"
          >
            {ctaLabel}
          </a>
          {selected === 'ongoing' && (
            <p className="text-text-secondary text-sm mt-3">
              keshav@kunver.com
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
