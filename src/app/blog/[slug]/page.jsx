'use client';

import { useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Feedback from '../../../components/blog/Feedback';
import ShareButton from '../../../components/blog/ShareButton';
import ReadingProgress from '../../../components/blog/ReadingProgress';
const defaultArticleMeta = {
  readingTime: null,
  footnotes: [],
  signature: null,
  postscript: null,
};

const articles = {
  'why-i-still-write': {
    title: 'We Have ChatGPT, Why Write?',
    date: 'February 2026',
    readingTime: '3 min read',
    footnotes: [
      {
        id: 1,
        text: 'Sparrow, B., Liu, J., & Wegner, D. M. (2011). Google effects on memory: Cognitive consequences of having information at our fingertips. Science, 333(6043), 776-778.',
      },
      { id: 2, text: 'AI helped revise this piece for clarity and flow.' },
    ],
    signature: 'Keshav',
    content: `
I remember being able to sit down and write a five-paragraph argumentative essay in under an hour. I was able to score A's on all my persuasive and argumentative essays (humble brag). Just a pencil and a piece of paper. I didn't have access to grammar tools, never mind LLM prompts. There was no assistance. It was just thought, structure, and execution.

Somewhere along the way, that ability dulled.

I didn't lose intelligence. I *outsourced* friction.

I chose convenience over resistance more often than I realized.

Anyone as intrigued by technical advancement as I am probably uses generative AI every day. There are many use cases for GenAI, of course, but just from the technical side, it does the following for me:
- **Accelerates** product development
- Helps me prototype and make ideas **tangible**
- Sharpens **iteration** speed.

So, don't get me wrong. I'm not anti-AI. I build with it all the time.

But I've noticed something that makes me a bit uncomfortable. As I rely on it to structure my thinking, I skip the *cognitive reps*. What happens if we stop doing the hard parts ourselves?

This isn't just intuition. In 2011, cognitive psychologist Betsy Sparrow and her colleagues showed something interesting.[^1] When people expect information to be stored externally and easily retrievable, they're less likely to remember it themselves.

And why would we need to? Our brains and bodies are incredibly resourceful. The brain literally optimizes for efficiency. If it doesn't need to build a pathway for remembering information, then it won't.

I remind myself that writing is structured thinking. It forces clarity, and it exposes gaps in reasoning. It strengthens argumentation and communication.

AI removes friction, and *friction* is what builds cognition. That's the trade-off.

Life is a series of trade-offs. This is one that concerns me. AI itself is not the danger here. **Dependency** is.

It's completely reasonable to use AI as a grammar coach, a clarity editor, or just a second set of eyes.

But the ideas must *originate* from us humans.

We have to remember generative models are trained on existing data. They recombine patterns from the past. Innovation, however, requires new synthesis. If we increasingly outsource the act of forming and articulating ideas, we risk weakening the very mechanism that produces progress in our society.

Effective communication is **not optional**. It is leverage everywhere in our lives… whether in engineering, leadership, relationships, entrepreneurship, etc.

If we stop practicing effective communication, the skill decays.

It's a dilemma we have to face head-on. AI is stellar at writing on its own.[^2] But I wrote this because I don't want to lose the ability to think independently and express original ideas.

LLMs will continue to improve. We can't fight that. So we should too, alongside it.

Keep writing and keep thinking.

Don't outsource your mind.
    `,
  },
  'dharma-regret-and-the-clock': {
    title: 'Dharma, Regret, and the Clock',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The AI acceleration: how quickly the landscape is shifting
      • The wake-up call: realizing time isn't infinite
      • Dharma / purpose: what you're actually here to do
      • Regret as a compass: using it to guide decisions, not paralyze
      • The shift: what changed in how you approach work and life

      ...
    `,
  },
  'the-productivity-trap': {
    title: 'The Productivity Trap',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The illusion: feeling busy vs. being effective
      • Examples: the tasks that feel productive but aren't moving the needle
      • The lever: identifying the one thing that actually matters
      • How I catch myself: the mental check I run now
      • The uncomfortable truth: why we default to busywork

      ...
    `,
  },
  'the-polyglot-paradox': {
    title: 'The Polyglot Paradox',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The appeal: knowing multiple languages, frameworks, skills feels impressive
      • The irony: breadth without depth leaves you replaceable
      • The translation to skills: trying to learn everything means excelling at nothing
      • The uncomfortable realization: when I noticed this in myself
      • The shift: depth over breadth, and how to choose what to go deep on

      ...
    `,
  },
  'health-advice-nobody-asked-for': {
    title: 'Health Advice Nobody Asked For',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The disclaimer: this is what worked for me, not a prescription
      • The unconventional stuff: tips you won't find in mainstream advice
      • The practical nuggets: real, actionable things I actually do
      • Why most advice fails: it's generic and ignores individual context
      • The mindset shift: treating health like an experiment, not a rulebook

      ...
    `,
  },
  'the-2am-question': {
    title: 'The 2am Question',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The pattern: that surge of energy and ideas when everyone else is asleep
      • The realization: this isn't random, it's a signal
      • The research: why night feels like "your time"
      • The uncomfortable truth: daytime isn't fulfilling the things you care about
      • The question: what would change if your day looked more like your 2am?

      ...
    `,
  },
  'too-many-interests': {
    title: 'Too Many Interests',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The problem: genuinely curious about too many things
      • The paralysis: when everything is interesting, how do you choose?
      • The question I kept asking myself: what do I actually do?
      • The tension: fear of missing out on paths not taken
      • Where I landed: still figuring it out

      ...
    `,
  },
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
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-16 md:pt-16 md:pb-20">
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
                if (line.trim().startsWith('- ')) {
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
                    block.type === 'list' ? (
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
                      <h3 className="text-xs font-medium uppercase tracking-wider text-text-tertiary mb-4">
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
      </div>
    </div>
  );
}
