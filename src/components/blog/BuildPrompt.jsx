import Link from 'next/link';

const BuildPrompt = () => {
  return (
    <section className="mt-12 pt-8 border-t border-border">
      <p className="text-text-tertiary text-sm leading-relaxed">
        I help non-technical people ship the thing they've been putting off.{' '}
        <Link
          href="/build"
          className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4 decoration-white/30"
        >
          Build with me
        </Link>
      </p>
    </section>
  );
};

export default BuildPrompt;
