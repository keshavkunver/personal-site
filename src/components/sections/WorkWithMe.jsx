'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { Section } from '../ui';

// Secondary freelance teaser: the detailed offers live on the dedicated page
const WorkWithMe = () => {
  return (
    <Section id="work-with-me">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-3xl font-medium text-text-primary mb-4">
          Work with me
        </h2>
        <p className="text-text-secondary leading-relaxed max-w-xl mb-6">
          I take on select freelance projects for startups, small businesses,
          and people building with AI.
        </p>
        <Link
          href="/websites"
          onClick={() => track('freelance_teaser_click')}
          className="inline-block text-text-primary font-medium hover:underline underline-offset-4 decoration-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
        >
          Explore freelance work &rarr;
        </Link>
      </motion.div>
    </Section>
  );
};

export default WorkWithMe;
