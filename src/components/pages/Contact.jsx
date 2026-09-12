'use client';

import React from 'react';
import { track } from '@vercel/analytics';
import { motion } from 'framer-motion';
import { Section, Button } from '../ui';
import { personalInfo, socialLinks, offTheClock } from '../../config/content';

const Contact = () => {
  return (
    <Section id="contact" className="py-24 relative overflow-hidden">
      {/* Aurora bookend: the page closes under the same sky it opened with */}
      <motion.div
        className="absolute inset-0 bg-aurora pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-screen pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-medium text-text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Say hello.
        </motion.h2>
        <motion.p 
          className="text-lg text-text-secondary mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Want to talk AI products or basketball? Either works.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button variant="primary" size="lg" href={`mailto:${personalInfo.email}`}>
            Email Me
          </Button>
          <Button variant="secondary" size="lg" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </Button>
          <Button variant="secondary" size="lg" href="/keshav-kunver-resume.pdf" download onClick={() => track('resume_download', { source: 'contact' })}>
            Download resume (PDF)
          </Button>
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

        {/* Off the clock drawer, relocated from the hero */}
        <motion.div
          className="mt-14 inline-block text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <details className="group" onToggle={(e) => { if (e.currentTarget.open) track('off_the_clock_open'); }}>
            <summary className="inline-flex h-9 cursor-pointer list-none items-center gap-2 rounded-lg border border-dark-border px-4 font-heading text-sm font-medium text-text-secondary transition-all duration-200 hover:border-dark-border-hover hover:bg-white/[0.04] hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg [&::-webkit-details-marker]:hidden">
              Off the clock
              <span aria-hidden="true" className="text-text-tertiary transition-transform duration-200 group-open:rotate-180">⌄</span>
            </summary>
            <div className="mt-3 max-w-lg border-l-2 border-white/10 pl-4">
              <p className="text-text-secondary text-sm leading-relaxed mb-2.5">
                {offTheClock.intro}
              </p>
              <p className="text-sm leading-relaxed mb-2">
                <span className="text-text-secondary">{offTheClock.predictionLabel}</span>{' '}
                <span className="text-text-primary font-heading font-semibold">{offTheClock.prediction}</span>{' '}
                <span className="text-text-tertiary text-xs">· {offTheClock.receipt}</span>
              </p>
              <ul className="space-y-1.5">
                {offTheClock.reasons.map((reason, i) => (
                  <li key={i} className="relative pl-3.5 text-text-tertiary text-[13px] leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:h-px before:w-[5px] before:bg-white/30 before:content-['']">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
