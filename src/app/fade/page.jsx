import Link from 'next/link';
import FadeSlider from './FadeSlider';
import MuteButton from './MuteButton';

export const metadata = {
  title: 'The Fade | Keshav Kunver',
  description: 'A haircut, before and after.',
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
        <p className="text-text-tertiary text-sm mb-10">
          Drag the scissors all the way. Sound on.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <p className="text-text-tertiary text-xs font-semibold tracking-[0.25em] uppercase mb-3">
          Front
        </p>
        <FadeSlider
          before="/fade/front-before.jpg"
          after="/fade/front-after.jpg"
          view="front"
          revealText="I'm HIM."
        />

        <p className="text-text-tertiary text-xs font-semibold tracking-[0.25em] uppercase mt-12 mb-3">
          Side
        </p>
        <FadeSlider
          before="/fade/side-before.jpg"
          after="/fade/side-after.jpg"
          view="side"
          revealText="You may bark now."
        />

        <p className="text-center text-text-tertiary text-sm mt-10 pb-20">
          Some people get a before and after text. One person gets a whole page.
        </p>
      </div>

      <MuteButton />
    </div>
  );
}
