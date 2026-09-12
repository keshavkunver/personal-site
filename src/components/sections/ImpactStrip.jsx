'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Section } from '../ui';
import { impactMetrics } from '../../config/content';

const ImpactStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Section id="impact">
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {impactMetrics.map((metric, index) => (
          <motion.div key={index} variants={itemVariants}>
            <p className="font-display text-5xl font-medium text-text-primary mb-2">
              {metric.value}
            </p>
            <p className="text-text-secondary text-sm">{metric.label}</p>
            {metric.caption && (
              <p className="text-text-tertiary text-sm mt-0.5">{metric.caption}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ImpactStrip;
