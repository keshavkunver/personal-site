'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { motion, useInView } from 'framer-motion';
import { Section } from '../ui';
import { writing } from '../../config/content';

const Writing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Section id="writing">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-medium text-text-primary">Writing</h2>
      </motion.div>

      <motion.div
        ref={ref}
        className="max-w-3xl border-y border-dark-border divide-y divide-dark-border"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {writing.map((article, index) => {
          const meta = (
            <span className="text-text-tertiary text-sm shrink-0 sm:text-right">
              {article.published
                ? [article.date, article.readingTime].filter(Boolean).join(', ')
                : 'Coming soon'}
            </span>
          );

          return article.published ? (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={article.url}
                onClick={() => track('writing_card_click', { slug: article.url.replace('/blog/', '') })}
                className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 transition-colors duration-200 hover:bg-white/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg"
              >
                <span className="font-display text-xl font-medium text-text-primary group-hover:underline underline-offset-4 decoration-white/30">
                  {article.title}
                </span>
                {meta}
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <span className="font-display text-xl font-medium text-text-tertiary">
                {article.title}
              </span>
              {meta}
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
};

export default Writing;
