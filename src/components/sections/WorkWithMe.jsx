'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Section, Card } from '../ui';

const offers = [
  {
    label: 'Learn it',
    title: 'Build with me',
    body: 'One hour on a screen share. You type, I guide, you leave with something running.',
    price: '$150 a session. Refunded if nothing runs by the end.',
    linkText: 'How sessions work',
    href: '/build',
  },
  {
    label: 'Done for you',
    title: 'Websites for local service businesses',
    body: "I build the site myself and it's live in about two weeks. The full price and process is on the page.",
    price: '$1,300 flat. Optional $99/month maintenance.',
    linkText: "See what's included",
    href: '/websites',
  },
];

const WorkWithMe = () => {
  return (
    <Section id="work-with-me">
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-bold text-text-primary mb-6">Work with me</h2>
        <p className="text-body-lg text-text-secondary max-w-2xl">
          I help people become AI enabled. One hour at a time, on a screen
          share, until you can build things yourself. And if you don't have the
          time for that, I'll just build it for you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={offer.href} className="block h-full group">
              <Card hover className="h-full flex flex-col p-8">
                <p className="text-small font-medium text-text-tertiary uppercase tracking-wide mb-3">
                  {offer.label}
                </p>
                <h3 className="text-h2 font-semibold text-text-primary mb-3">
                  {offer.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-4 flex-1">
                  {offer.body}
                </p>
                <p className="text-small text-text-tertiary mb-6">{offer.price}</p>
                <span className="text-text-primary text-small font-medium group-hover:underline">
                  {offer.linkText} →
                </span>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default WorkWithMe;
