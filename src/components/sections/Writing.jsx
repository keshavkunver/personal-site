'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Section, Card } from '../ui';
import { writing } from '../../config/content';

const Writing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [isExpanded, setIsExpanded] = useState(false);

  const pinnedArticles = writing.slice(0, 2);
  const otherArticles = writing.slice(2);

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

      {/* Featured Articles (two pinned) */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        {pinnedArticles.map((article, index) => (
          article.published ? (
            <Link key={index} href={article.url} onClick={() => track('writing_card_click', { slug: article.url.replace('/blog/', '') })} className="block group h-full">
              <Card className="relative h-full flex flex-col transition-all duration-200 group-hover:border-border/80">
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-hover transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 mt-auto">
                  {article.date && (
                    <span className="text-text-tertiary text-xs">{article.date}</span>
                  )}
                  {article.date && article.readingTime && (
                    <span className="text-text-tertiary text-xs">·</span>
                  )}
                  {article.readingTime && (
                    <span className="text-text-tertiary text-xs">{article.readingTime}</span>
                  )}
                </div>
              </Card>
            </Link>
          ) : (
            <Card key={index} className="relative h-full flex flex-col">
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                {article.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {article.description}
              </p>
              <span className="text-text-tertiary text-xs font-medium mt-auto">
                Coming soon
              </span>
            </Card>
          )
        ))}
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
                      {post.published ? (
                        <Link href={post.url} onClick={() => track('writing_card_click', { slug: post.url.replace('/blog/', '') })} className="block group h-full">
                          <Card className="h-full flex flex-col transition-all duration-200 group-hover:border-border/80">
                            <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-hover transition-colors duration-200">
                              {post.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-2 min-h-[2.5rem]">
                              {post.description}
                            </p>
                            <div className="flex items-center gap-2 mt-auto">
                              {post.date && (
                                <span className="text-text-tertiary text-xs">{post.date}</span>
                              )}
                              {post.date && post.readingTime && (
                                <span className="text-text-tertiary text-xs">·</span>
                              )}
                              {post.readingTime && (
                                <span className="text-text-tertiary text-xs">{post.readingTime}</span>
                              )}
                            </div>
                          </Card>
                        </Link>
                      ) : (
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
                      )}
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
