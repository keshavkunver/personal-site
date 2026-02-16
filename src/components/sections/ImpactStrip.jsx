'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MetricTile } from '../ui';
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
    <section id="impact" className="w-full py-12 px-4 border-y border-dark-border bg-dark-surface/30">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-dark-border gap-y-6 md:gap-y-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {impactMetrics.map((metric, index) => (
            <motion.div key={index} variants={itemVariants}>
              <MetricTile
                value={metric.value}
                label={metric.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStrip;
