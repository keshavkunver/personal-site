import Link from 'next/link';

export const metadata = {
  title: 'Now | Keshav Kunver',
  description: "What I'm building right now.",
  alternates: {
    canonical: '/now',
  },
  openGraph: {
    title: 'Now | Keshav Kunver',
    description: "What I'm building right now.",
    url: 'https://www.kunver.com/now',
    type: 'website',
    siteName: 'Keshav Kunver',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Keshav Kunver, AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Now | Keshav Kunver',
    description: "What I'm building right now.",
    images: ['/og.png'],
  },
};

export default function NowPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-20">
        <Link
          href="/"
          className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
        >
          ← Back
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mt-8 mb-4 tracking-tight">
          Now
        </h1>
        <p className="text-text-tertiary text-sm mb-12">Updated July 2026</p>
        <p className="text-text-secondary leading-loose mb-6">
          Building FourthSpace: shipping the AI meetup-planning agent, improving
          the voice moderator, and growing the eval suite as the product evolves.
          Live at{' '}
          <a
            href="https://www.fourthspace.vip/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            fourthspace.vip
          </a>
          .
        </p>
        <p className="text-text-secondary leading-loose mb-6">
          Also publishing an open-source RAG project with a full evaluation harness.
        </p>
        <p className="text-text-secondary leading-loose mb-6">
          Outside of that: traveling, basketball and pickleball, and hanging out
          with friends around LA.
        </p>
        <p className="text-text-secondary leading-loose">
          And I'm taking on a few build sessions each month. One hour, screen share,
          for non-technical people who want to actually ship the thing they've been
          putting off. Details at{' '}
          <Link
            href="/build"
            className="text-text-tertiary hover:text-text-primary transition-colors underline underline-offset-4 decoration-white/30"
          >
            /build
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
