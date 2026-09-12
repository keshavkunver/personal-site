'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '../ui';
import { experience } from '../../config/content';

const Experience = () => {
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
    <Section id="experience">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-medium text-text-primary">Experience</h2>
      </motion.div>

      <motion.div
        ref={ref}
        className="max-w-3xl space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {experience.map((role, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="grid gap-2 md:grid-cols-[150px,1fr] md:gap-8"
          >
            <p className="text-text-tertiary text-sm md:pt-1.5">{role.duration}</p>
            <div>
              <h3 className="text-xl font-semibold text-text-primary">
                {role.role}
              </h3>
              <p className="text-text-secondary mt-0.5 mb-4">{role.company}</p>
              <div className="max-w-2xl space-y-3">
                <p className="text-text-secondary leading-relaxed">{role.summary}</p>
                <p className="text-text-primary font-medium">{role.outcome}</p>
                <p className="text-text-tertiary text-sm">
                  {role.technologies.join(', ')}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </Section>
  );
};

export default Experience;
