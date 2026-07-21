'use client';

import { useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Feedback from '../../../components/blog/Feedback';
import ShareButton from '../../../components/blog/ShareButton';
import ReadingProgress from '../../../components/blog/ReadingProgress';
import articles from '../../../config/articles';

const defaultArticleMeta = {
  readingTime: null,
  footnotes: [],
  signature: null,
  postscript: null,
};

export default function BlogPost() {
  const params = useParams();
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Article not found</h1>
          <Link href="/" className="text-accent hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  const readingEndRef = useRef(null);

  return (
    <div className="min-h-screen bg-dark-bg">
      <ReadingProgress targetRef={readingEndRef} />
      <main className="max-w-2xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/#writing" 
              className="text-text-tertiary hover:text-text-primary transition-colors text-sm"
            >
              ← Back
            </Link>
            <ShareButton articleSlug={params?.slug ?? 'unknown'} articleTitle={article.title} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-12 text-text-tertiary text-sm">
            <span>{article.date}</span>
            {article.readingTime && (
              <>
                <span>·</span>
                <span>{article.readingTime}</span>
              </>
            )}
          </div>
          
          <div className="prose prose-invert max-w-none">
            {(() => {
              const meta = { ...defaultArticleMeta, ...article };
              const footnotes = meta.footnotes ?? [];
              const lines = article.content.split('\n').filter((l) => l.trim());
              const blocks = [];
              let i = 0;
              while (i < lines.length) {
                const line = lines[i];
                const imgMatch = line.trim().match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
                if (imgMatch) {
                  blocks.push({ type: 'image', alt: imgMatch[1], src: imgMatch[2] });
                  i++;
                } else if (line.trim().startsWith('- ')) {
                  const items = [];
                  while (i < lines.length && lines[i].trim().startsWith('- ')) {
                    items.push(lines[i].trim().slice(2));
                    i++;
                  }
                  blocks.push({ type: 'list', items });
                } else {
                  blocks.push({ type: 'paragraph', text: line.trim() });
                  i++;
                }
              }

              const parseEmphasis = (str) => {
                const regex = /\*\*(.+?)\*\*|\*([^*]+?)\*/g;
                const result = [];
                let lastIndex = 0;
                let match;
                while ((match = regex.exec(str)) !== null) {
                  if (lastIndex < match.index) {
                    result.push(str.slice(lastIndex, match.index));
                  }
                  if (match[1] !== undefined) {
                    result.push(<strong key={`b-${match.index}`}>{match[1]}</strong>);
                  } else {
                    result.push(<em key={`i-${match.index}`}>{match[2]}</em>);
                  }
                  lastIndex = regex.lastIndex;
                }
                if (lastIndex < str.length) {
                  result.push(str.slice(lastIndex));
                }
                return result.length > 1 ? result : result[0] ?? str;
              };

              const renderTextWithFootnotes = (text) => {
                const parts = text.split(/(\[\^\d+\])/g);
                return parts.map((part, idx) => {
                  const match = part.match(/\[\^(\d+)\]/);
                  if (match) {
                    const fnId = parseInt(match[1], 10);
                    return (
                      <sup key={idx} className="text-[0.65em] text-text-tertiary">
                        <a
                          href={`#fn-${fnId}`}
                          id={`fnref-${fnId}`}
                          className="text-text-tertiary hover:text-accent no-underline"
                        >
                          {fnId}
                        </a>
                      </sup>
                    );
                  }
                  return (
                    <span key={idx}>
                      {parseEmphasis(part)}
                    </span>
                  );
                });
              };

              return (
                <>
                  <div ref={readingEndRef}>
                  {blocks.map((block, i) =>
                    block.type === 'image' ? (
                      <figure key={i} className="my-10">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full rounded-lg border border-dark-border"
                        />
                        {block.alt && (
                          <figcaption className="text-center mt-3">
                            <span className="text-text-tertiary text-sm">{block.alt}</span>
                            <span className="block text-text-tertiary/50 text-xs mt-1">Graph generated by AI</span>
                          </figcaption>
                        )}
                      </figure>
                    ) : block.type === 'list' ? (
                      <ul key={i} className="list-disc list-inside text-text-secondary leading-loose mb-6 space-y-2">
                        {block.items.map((item, j) => (
                          <li key={j}>{parseEmphasis(item)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i} className="text-text-secondary leading-loose mb-6">
                        {renderTextWithFootnotes(block.text)}
                      </p>
                    )
                  )}
                  {meta.signature && (
                    <p className="text-text-primary font-medium mt-10 mb-6">
                      {meta.signature}
                    </p>
                  )}
                  {meta.postscript && (
                    <p className="text-text-secondary italic text-sm mb-12">
                      {meta.postscript}
                    </p>
                  )}
                  </div>
                  {footnotes.length > 0 && (
                    <section className="mt-12 pt-8 border-t border-border">
                      <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-text-tertiary mb-4">
                        Notes
                      </h3>
                      <ol className="space-y-3 text-sm text-text-secondary">
                        {footnotes.map((fn) => (
                          <li key={fn.id} id={`fn-${fn.id}`} className="flex gap-2">
                            <span className="text-text-tertiary/70 text-xs shrink-0">{fn.id}.</span>
                            <span>{fn.text}</span>
                          </li>
                        ))}
                      </ol>
                    </section>
                  )}
                  <Feedback articleSlug={params?.slug ?? 'unknown'} />
                </>
              );
            })()}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
