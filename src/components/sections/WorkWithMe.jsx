'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { Section } from '../ui';

// Secondary freelance router: two compact options, details live on their pages
const options = [
  {
    title: 'Build with me',
    copy: "Have an idea for a product? Let's make it real.",
    cta: 'Explore',
    href: '/build',
  },
  {
    title: 'Websites',
    copy: 'Need a polished website for your business?',
    cta: 'See website packages',
    href: '/websites',
  },
];

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
        <h2 className="font-display text-3xl font-medium text-text-primary mb-8">
          Work with me
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {options.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              onClick={() => track('freelance_teaser_click', { target: option.href })}
              className="group flex flex-col rounded-2xl border border-dark-border bg-dark-surface/45 backdrop-blur-sm p-6 transition-all duration-200 hover:border-dark-border-hover hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
            >
              <h3 className="font-heading font-semibold text-text-primary">{option.title}</h3>
              <p className="text-sm text-text-tertiary mt-1 leading-relaxed">{option.copy}</p>
              <p className="text-sm font-medium text-text-primary mt-4 group-hover:underline underline-offset-4 decoration-white/40">
                {option.cta} &rarr;
              </p>
            </Link>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default WorkWithMe;
