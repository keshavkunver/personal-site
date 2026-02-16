'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const articles = {
  'why-i-still-write': {
    title: 'We Have ChatGPT, Why Write?',
    date: 'February 2026',
    content: `
      [Your content here]

      Placeholder outline (replace with your actual writing):

      • The copy/paste era: LLMs generate text, people ship it without thinking
      • Writing as thinking: the act of writing forces clarity
      • Why it matters now more than ever: differentiation through original thought
      • What this section represents: my own words, my own perspective

      ...
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

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#writing" 
            className="text-text-tertiary hover:text-text-primary transition-colors text-sm mb-8 inline-block"
          >
            ← Back
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            {article.title}
          </h1>
          
          <p className="text-text-tertiary mb-12">{article.date}</p>
          
          <div className="prose prose-invert max-w-none">
            {article.content.split('\n').map((paragraph, i) => (
              paragraph.trim() && (
                <p key={i} className="text-text-secondary leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
