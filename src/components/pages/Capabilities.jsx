'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '../ui';
import { capabilities } from '../../config/content';

const Capabilities = () => {
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
    <Section id="capabilities">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-medium text-text-primary">Capabilities</h2>
      </motion.div>

      <motion.div
        ref={ref}
        className="max-w-3xl border-y border-dark-border divide-y divide-dark-border"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {capabilities.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className="py-8">
            <h3 className="font-display text-2xl font-medium text-text-primary mb-3">
              {category.category}
            </h3>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              {category.description}
            </p>
            <p className="text-text-tertiary text-sm mt-3">
              {category.tools}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Capabilities;
