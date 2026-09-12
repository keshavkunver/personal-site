'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '../ui';
import { education } from '../../config/content';

const degrees = [
  {
    degree: education.masters.degree,
    school: education.masters.school,
    year: education.masters.year,
    gpa: education.masters.gpa,
  },
  {
    degree: education.bachelors.degree,
    school: education.bachelors.school,
    year: education.bachelors.year,
    gpa: education.bachelors.gpa,
  },
];

const Education = () => {
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
    <Section id="education">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-medium text-text-primary">Education</h2>
      </motion.div>

      <motion.div
        ref={ref}
        className="max-w-3xl border-y border-dark-border divide-y divide-dark-border"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {degrees.map((item) => (
          <motion.div key={item.degree} variants={itemVariants} className="py-8">
            <h3 className="font-display text-2xl font-medium text-text-primary">
              {item.degree}
            </h3>
            <p className="text-text-secondary mt-1">
              {item.school}
              {item.year && `, ${item.year}`}
            </p>
            {item.gpa && (
              <p className="text-text-tertiary text-sm mt-1">{item.gpa} GPA</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Education;
