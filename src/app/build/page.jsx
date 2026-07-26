'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '../../components/ui';
import { personalInfo } from '../../config/content';

// TODO: Replace with real Stripe payment links when ready
const STRIPE_SINGLE = null;
const STRIPE_THREE = null;
// TODO: Replace with real playbook link when ready
const PLAYBOOK_URL = null;

const tiers = [
  {
    id: 'single',
    price: '$150',
    name: 'One session',
    description: 'One hour, one working thing.',
    ctaLabel: 'Book a session ($150)',
    href: STRIPE_SINGLE,
    external: true,
  },
  {
    id: 'three',
    price: '$375',
    name: 'Ship it',
    description: 'Three sessions to get it live.',
    ctaLabel: 'Book three sessions ($375)',
    href: STRIPE_THREE,
    external: true,
  },
  {
    id: 'ongoing',
    price: "Let's talk",
    name: 'Ongoing',
    description: 'For bigger builds that need consistent time.',
    ctaLabel: 'Get in touch',
    href: `mailto:${personalInfo.email}`,
    external: false,
  },
];

export default function BuildPage() {
  const [selected, setSelected] = useState(null);

  const activeTier = tiers.find((t) => t.id === selected);
  const bookingReady = !!(STRIPE_SINGLE && STRIPE_THREE);
  const ctaLabel = bookingReady
    ? (activeTier ? activeTier.ctaLabel : 'Book a session')
    : 'Sessions opening soon';
  const ctaHref = bookingReady
    ? (activeTier ? activeTier.href : STRIPE_SINGLE)
    : null;
  const ctaExternal = activeTier ? activeTier.external : true;

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
              No. Bring a laptop and your idea. We handle setup together, that's part
              of the hour.
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
              <p className="text-text-tertiary text-sm mt-1">{tier.description}</p>
            </button>
          ))}
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">
          I'm only taking four or five of these a month.
        </p>

        {/* CTA area */}
        <div className="mt-16 pt-10 border-t border-dark-border">
          {ctaHref ? (
            <a
              href={ctaHref}
              {...(ctaExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg w-full sm:w-auto"
            >
              {ctaLabel}
            </a>
          ) : (
            <span className="inline-flex h-11 items-center justify-center rounded-lg bg-dark-elevated px-6 font-heading text-base font-medium text-text-tertiary w-full sm:w-auto cursor-default">
              {ctaLabel}
            </span>
          )}
          {!bookingReady && (
            <p className="text-text-tertiary text-sm mt-3">
              Setting up scheduling now. Check back soon.
            </p>
          )}
          {PLAYBOOK_URL && (
            <p className="text-text-tertiary text-sm mt-6 leading-relaxed">
              Not ready to book? I wrote{' '}
              <a
                href={PLAYBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4 decoration-white/30"
              >
                The Vibe Code Playbook
              </a>
              {' '}for this exact person. Zero to a working app, no documentation, $29.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
