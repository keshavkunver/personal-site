'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section, Card, Tag } from '../ui';
import { experience } from '../../config/content';

const Experience = () => {
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
    <Section id="experience">
      <motion.div 
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-bold text-text-primary">Industry</h2>
      </motion.div>

      <motion.div 
        ref={ref}
        className="space-y-6 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {experience.map((role, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card hover>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{role.role}</h3>
                  <p className="text-text-secondary mt-1">{role.company}</p>
                </div>
                <span className="text-text-tertiary text-sm mt-2 md:mt-0 font-medium">{role.duration}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {role.achievements.map((achievement, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-border">
                {role.technologies.map((tech, i) => (
                  <Tag key={i}>{tech}</Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Experience;
