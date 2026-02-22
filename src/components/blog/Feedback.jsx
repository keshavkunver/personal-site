'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
import { FaRegMeh } from 'react-icons/fa';

const FORMSPREE_FORM_ID = 'mgolnrrn';

export default function Feedback({ articleSlug }) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [sentiment, setSentiment] = useState(null);

  if (state.succeeded) {
    return (
      <section className="mt-12 pt-8 border-t border-border">
        <p className="text-text-secondary text-sm">Thanks for your feedback.</p>
      </section>
    );
  }

  return (
    <section className="mt-12 pt-8 border-t border-border">
      <p className="text-text-tertiary text-sm mb-4">I&apos;d value your feedback.</p>
      <div className="flex items-center gap-4">
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            onClick={() => setSentiment('up')}
            title="Helpful"
            className={`p-2 rounded-lg transition-colors duration-200 ${
              sentiment === 'up'
                ? 'bg-accent/20 text-accent'
                : 'text-text-tertiary hover:text-text-primary hover:bg-dark-surface'
            }`}
            aria-label="Helpful"
          >
            <FiThumbsUp className="w-5 h-5" />
          </button>
          <span className="absolute top-full mt-1 px-2 py-0.5 text-[10px] text-text-tertiary bg-dark-surface border border-dark-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
            Helpful
          </span>
        </div>
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            onClick={() => setSentiment('neutral')}
            title="Neutral"
            className={`p-2 rounded-lg transition-colors duration-200 ${
              sentiment === 'neutral'
                ? 'bg-accent/20 text-accent'
                : 'text-text-tertiary hover:text-text-primary hover:bg-dark-surface'
            }`}
            aria-label="Neutral"
          >
            <FaRegMeh className="w-5 h-5" />
          </button>
          <span className="absolute top-full mt-1 px-2 py-0.5 text-[10px] text-text-tertiary bg-dark-surface border border-dark-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
            Neutral
          </span>
        </div>
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            onClick={() => setSentiment('down')}
            title="Not helpful"
            className={`p-2 rounded-lg transition-colors duration-200 ${
              sentiment === 'down'
                ? 'bg-accent/20 text-accent'
                : 'text-text-tertiary hover:text-text-primary hover:bg-dark-surface'
            }`}
            aria-label="Not helpful"
          >
            <FiThumbsDown className="w-5 h-5" />
          </button>
          <span className="absolute top-full mt-1 px-2 py-0.5 text-[10px] text-text-tertiary bg-dark-surface border border-dark-border rounded opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none whitespace-nowrap">
            Not helpful
          </span>
        </div>
      </div>

      {sentiment && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="hidden"
            name="_subject"
            value={`Blog feedback: ${articleSlug}`}
          />
          <input
            type="hidden"
            name="sentiment"
            value={
              sentiment === 'up'
                ? 'Helpful'
                : sentiment === 'neutral'
                  ? 'Neutral'
                  : 'Not helpful'
            }
          />
          <input type="hidden" name="article" value={articleSlug} />
          <div>
            <label htmlFor="feedback" className="block text-text-tertiary text-sm mb-2">
              Anything else you&apos;d like to share? (optional)
            </label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Your feedback..."
              rows={3}
              className="w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary placeholder:text-text-tertiary/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              disabled={state.submitting}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending...' : 'Submit'}
          </button>
          {state.errors && state.errors.length > 0 && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      )}
    </section>
  );
}
