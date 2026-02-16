'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Section, Card } from '../ui';
import { writing } from '../../config/content';

const Writing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [isExpanded, setIsExpanded] = useState(false);

  const pinnedArticle = writing[0];
  const otherArticles = writing.slice(1);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <Section id="writing">
      <motion.div 
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-h1 font-bold text-text-primary">Writing</h2>
      </motion.div>

      {/* Featured Article */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="mb-8"
      >
        <Card className="relative">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent text-xs font-medium uppercase tracking-wider">Featured</span>
            <span className="text-text-tertiary text-xs">·</span>
            <span className="text-text-tertiary text-xs">Coming soon</span>
          </div>
          <h3 className="text-xl font-semibold text-text-primary mb-3">
            {pinnedArticle.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            That is <em className="italic">exactly</em> why.
          </p>
        </Card>
      </motion.div>

      {/* Expandable Section */}
      {otherArticles.length > 0 && (
        <div>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors duration-200 mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-lg"
            >
              →
            </motion.span>
            <span className="text-sm font-medium">
              {isExpanded ? 'Hide' : 'More'} articles ({otherArticles.length})
            </span>
          </motion.button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherArticles.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full flex flex-col">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">
                          {post.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]">
                          {post.description}
                        </p>
                        <span className="text-text-tertiary text-xs font-medium mt-auto">
                          Coming soon
                        </span>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </Section>
  );
};

export default Writing;
