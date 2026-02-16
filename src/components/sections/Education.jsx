'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '../ui';
import { education } from '../../config/content';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Section id="education" className="bg-dark-surface/30">
      <motion.div 
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-bold text-text-primary">Education</h2>
      </motion.div>

      <motion.div 
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Master's */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h3 className="text-xl font-semibold text-text-primary">
            {education.masters.degree}
          </h3>
          <p className="text-text-secondary">
            {education.masters.school}{education.masters.year && `, ${education.masters.year}`}
          </p>
          {education.masters.gpa && (
            <p className="text-accent text-sm font-medium">{education.masters.gpa} GPA</p>
          )}
        </motion.div>

        {/* Bachelor's */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h3 className="text-xl font-semibold text-text-primary">
            {education.bachelors.degree}
          </h3>
          <p className="text-text-secondary">{education.bachelors.school}</p>
          {education.bachelors.gpa && (
            <p className="text-accent text-sm font-medium">{education.bachelors.gpa} GPA</p>
          )}
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Education;
