'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section, Button, MagneticButton } from '../ui';
import { personalInfo, socialLinks } from '../../config/content';

const Contact = () => {
  return (
    <Section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 blur-3xl rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <motion.p 
          className="text-lg text-text-secondary mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Happy to chat.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MagneticButton strength={0.4} radius={100}>
            <Button variant="primary" size="lg" href={`mailto:${personalInfo.email}`}>
              Email Me
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.4} radius={100}>
            <Button variant="secondary" size="lg" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </Button>
          </MagneticButton>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-8 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a 
            href={socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-tertiary hover:text-text-primary transition-colors duration-200"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
