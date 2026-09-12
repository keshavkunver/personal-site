'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section } from '../ui';

const offers = [
  {
    title: 'Build with me',
    body: 'One hour on a screen share. You type, I guide, you leave with something running.',
    price: '$150 a session',
    href: '/build',
  },
  {
    title: 'Websites for local service businesses',
    body: "I build the site myself and it's live in about two weeks.",
    price: '$1,300 flat',
    href: '/websites',
  },
];

const WorkWithMe = () => {
  return (
    <Section id="work-with-me">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-medium text-text-primary mb-6">Work with me</h2>
        <p className="text-body-lg text-text-secondary max-w-2xl">
          I help people become AI enabled. One hour at a time, on a screen
          share, until you can build things yourself. And if you don't have the
          time for that, I'll just build it for you.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl border-y border-dark-border divide-y divide-dark-border"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {offers.map((offer) => (
          <Link
            key={offer.href}
            href={offer.href}
            className="group flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 transition-colors duration-200 hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
          >
            <h3 className="font-display text-2xl font-medium text-text-primary shrink-0 group-hover:underline underline-offset-4 decoration-white/30">
              {offer.title}
            </h3>
            <div className="sm:max-w-sm sm:text-right">
              <p className="text-text-secondary leading-relaxed">{offer.body}</p>
              <p className="text-text-tertiary text-sm mt-1.5">{offer.price}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </Section>
  );
};

export default WorkWithMe;
