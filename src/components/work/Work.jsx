'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { motion, useInView } from 'framer-motion';
import { Section } from '../ui';
import { selectedWork } from '../../config/content';

// Editorial case row: one project per row, typography-led
const ProjectRow = ({ id, name, problem, built, outcome, stack, links, image, isActive }) => {
  const titleHref = links?.website || links?.appStore;

  return (
    <article className="py-12 first:pt-0">
      <div className="flex items-center gap-4 mb-3">
        {image && (
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-dark-border bg-dark-elevated flex items-center justify-center flex-shrink-0">
            <Image
              src={image}
              alt={name || 'Project logo'}
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
        )}
        <div>
          {titleHref ? (
            <a
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('work_card_click', { project: id, target: 'title' })}
            >
              <h3 className="font-display text-3xl font-medium text-text-primary hover:underline underline-offset-4 decoration-white/40">
                {name}
              </h3>
            </a>
          ) : (
            <h3 className="font-display text-3xl font-medium text-text-primary">{name}</h3>
          )}
          {isActive && (
            <p className="text-gold text-sm font-heading font-medium mt-1">Current focus</p>
          )}
        </div>
      </div>

      <div className="max-w-2xl space-y-4">
        <p className="text-text-secondary leading-loose">{problem}</p>
        <p className="text-text-secondary leading-loose">{built}</p>
        <p className="text-text-primary font-medium">{outcome}</p>
        {stack?.length > 0 && (
          <p className="text-text-tertiary text-sm">Built with {stack.join(', ')}.</p>
        )}
      </div>

      {links && Object.keys(links).length > 0 && (
        <div className="flex gap-6 mt-6">
          {links.appStore && (
            <a
              href={links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('work_card_click', { project: id, target: 'appStore' })}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              View App
            </a>
          )}
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('work_card_click', { project: id, target: 'website' })}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              Website
            </a>
          )}
          {links.writeup && (
            <Link
              href={links.writeup}
              onClick={() => track('work_card_click', { project: id, target: 'writeup' })}
              className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium"
            >
              Read the write-up
            </Link>
          )}
        </div>
      )}
    </article>
  );
};

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const featuredProjects = selectedWork.filter((p) => p.featured);

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
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Section id="work">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-medium text-text-primary mb-3">The Work</h2>
        <p className="text-text-secondary text-lg">A selection</p>
      </motion.div>

      <motion.div
        ref={ref}
        className="divide-y divide-dark-border"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectRow {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Work;
