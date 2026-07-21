'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section, Card } from '../ui';
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
    <Section id="capabilities" className="bg-dark-surface/30">
      <motion.div 
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-bold text-text-primary">Capabilities</h2>
      </motion.div>

      <motion.div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {capabilities.map((category, index) => (
          <motion.div key={index} variants={itemVariants} className={`relative${category.lead ? ' mt-7 md:mt-0' : ''}`}>
            {category.lead && (
              <div className="absolute -top-[1.65rem] left-4 z-20">
                <span
                  className="bg-dark-surface text-accent text-xs font-medium px-3 py-1.5 border border-accent/40 border-b-0 rounded-t-lg"
                  style={{
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  Core focus
                </span>
              </div>
            )}
            <Card hover className={`h-full ${category.lead ? 'border border-accent/40' : ''}`}>
              <h3 className="text-lg font-semibold text-text-primary mb-4">{category.category}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{category.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Capabilities;
