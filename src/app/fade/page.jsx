import Link from 'next/link';
import FadeGallery from './FadeGallery';
import MuteButton from './MuteButton';

export const metadata = {
  title: 'The Fade | Keshav Kunver',
  description: 'A haircut, before and after.',
  alternates: {
    canonical: 'https://kunver.com/fade',
  },
  openGraph: {
    title: 'The Fade',
    description: 'Open this with sound on, Rups ;)',
    url: 'https://kunver.com/fade',
    type: 'website',
    siteName: 'Keshav Kunver',
    images: [{ url: '/fade/og.jpg', width: 1200, height: 630, alt: 'The Fade' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Fade',
    description: 'Open this with sound on, Rups ;)',
    images: ['/fade/og.jpg'],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function FadePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-2xl mx-auto px-6 pt-8 md:pt-16">
        <Link
          href="/"
          className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
        >
          ← Back
        </Link>
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mt-8 mb-4 tracking-tight">
          The Fade
        </h1>
        <p className="text-text-secondary mb-2">
          I know you liked the curls but they must go, meri jaan.
        </p>
        <p className="text-text-tertiary text-sm mb-10">
          Drag the scissors all the way. Sound/Ringer on, bb :)
        </p>
      </div>

      <FadeGallery />

      <MuteButton />
    </div>
  );
}
