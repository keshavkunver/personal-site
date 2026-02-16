'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Section, Card, Tag } from '../ui';
import { selectedWork } from '../../config/content';

// Project Card component for case study format
const ProjectCard = ({ name, problem, built, outcome, stack, links, image, isActive }) => {
  return (
    <div className="relative">
      {/* Current focus tab */}
      {isActive && (
        <div className="absolute -top-[1.65rem] left-4 z-20">
          <span 
            className="bg-dark-surface text-amber-400 text-xs font-medium px-3 py-1.5 border border-amber-500/40 border-b-0 rounded-t-lg"
            style={{ 
              borderBottomLeftRadius: 0, 
              borderBottomRightRadius: 0,
            }}
          >
            Current focus
          </span>
        </div>
      )}
      <Card hover className={`flex flex-col h-full group ${isActive ? 'border border-amber-500/40' : ''}`}>
        {/* Project Header - Logo + Name */}
        <div className="flex items-center gap-4 mb-6">
          {image && (
            <div className="w-14 h-14 rounded-xl overflow-hidden border border-dark-border bg-dark-elevated flex items-center justify-center flex-shrink-0">
              <Image 
                src={image} 
                alt={name || "Project logo"} 
                width={56}
                height={56}
                className="object-contain" 
              />
            </div>
          )}
          {name && (
            <h3 className="text-xl font-semibold text-text-primary">{name}</h3>
          )}
        </div>

        {/* Problem */}
        <div className="mb-5">
          <h4 className="text-text-tertiary text-xs uppercase tracking-[0.15em] mb-2 font-medium">Problem</h4>
          <p className="text-text-secondary text-sm leading-relaxed">{problem}</p>
        </div>

        {/* What I Built */}
        <div className="mb-5">
          <h4 className="text-text-tertiary text-xs uppercase tracking-[0.15em] mb-2 font-medium">Built</h4>
          <p className="text-text-secondary text-sm leading-relaxed">{built}</p>
        </div>

        {/* Outcome */}
        <div className="mb-6">
          <h4 className="text-text-tertiary text-xs uppercase tracking-[0.15em] mb-2 font-medium">Outcome</h4>
          <p className="text-text-primary font-semibold">{outcome}</p>
        </div>

        {/* Stack */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {stack.map((tech, i) => <Tag key={i}>{tech}</Tag>)}
          </div>
        </div>

        {/* Links */}
        {links && Object.keys(links).length > 0 && (
          <div className="flex gap-6 mt-auto pt-4 border-t border-dark-border">
            {links.appStore && (
              <a 
                href={links.appStore} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-20 cursor-pointer text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
              >
                View App
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            )}
            {links.website && (
              <a 
                href={links.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-20 cursor-pointer text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-medium inline-flex items-center gap-1"
              >
                Website
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const featuredProjects = selectedWork.filter(p => p.featured);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Section id="work">
      <motion.div 
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-bold text-text-primary mb-3">The Work</h2>
        <p className="text-text-secondary text-lg">A selection</p>
      </motion.div>

      <motion.div 
        ref={ref}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {featuredProjects.map(project => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Work;
