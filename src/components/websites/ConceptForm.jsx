'use client';

import { useState } from 'react';
import { useForm } from '@formspree/react';

const FORMSPREE_FORM_ID = 'mgolnrrn';

const inputClasses =
  'w-full px-4 py-3 bg-dark-surface border border-dark-border rounded-lg text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 transition-colors';

const labelClasses = 'block text-text-primary text-sm font-medium mb-2';

export default function ConceptForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [name, setName] = useState('');

  if (state.succeeded) {
    return (
      <div
        role="status"
        className="rounded-xl border border-dark-border bg-dark-surface p-8"
      >
        <h3 className="text-xl font-bold text-text-primary mb-4 tracking-tight">
          Your project is in.
        </h3>
        <p className="text-text-secondary leading-loose mb-4">
          I'll personally review what you've sent to make sure I'm the right
          fit for the project.
        </p>
        <p className="text-text-secondary leading-loose mb-4">
          If it looks like a good fit, I'll create a website concept and send
          you a private video walking through the direction.
        </p>
        <p className="text-text-secondary leading-loose">
          There's nothing to book in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <input
        type="hidden"
        name="_subject"
        value={
          name.trim()
            ? `Website Concept Request from ${name.trim()}`
            : 'Website Concept Request'
        }
      />
      {/* Honeypot for spam bots. Formspree silently drops submissions that fill it. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="concept-name" className={labelClasses}>
          Name
        </label>
        <input
          id="concept-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={state.submitting}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="concept-email" className={labelClasses}>
          Email
        </label>
        <input
          id="concept-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={state.submitting}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="concept-website" className={labelClasses}>
          Current website{' '}
          <span className="font-normal text-text-tertiary">(optional)</span>
        </label>
        <input
          id="concept-website"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="Don't have one? Leave this blank."
          disabled={state.submitting}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="concept-business" className={labelClasses}>
          Tell me a little about your business
        </label>
        <textarea
          id="concept-business"
          name="business"
          required
          rows={4}
          placeholder="What do you do? A sentence or two is plenty."
          disabled={state.submitting}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <fieldset>
        <legend className={labelClasses}>
          My website package is $1,300. Is that within your budget?
        </legend>
        <div className="flex flex-col sm:flex-row gap-3">
          {['Yes', 'Not right now'].map((option) => (
            <label
              key={option}
              className="flex items-center gap-3 rounded-lg border border-dark-border bg-dark-surface px-4 py-3 text-text-secondary cursor-pointer transition-colors hover:border-dark-border-hover sm:flex-1"
            >
              <input
                type="radio"
                name="budget"
                value={option}
                required
                disabled={state.submitting}
                className="h-4 w-4 accent-accent"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-heading text-base font-medium text-dark-bg transition-all duration-200 hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {state.submitting ? 'Sending...' : 'Get My Website Concept'}
        </button>
        <p className="text-sm text-text-tertiary mt-4">
          No calls. No commitment. I personally review every submission.
        </p>
        {state.errors && (
          <p role="alert" className="text-red-400 text-sm mt-3">
            Something went wrong and your request didn't send. Your answers are
            still here, so please try again.
          </p>
        )}
      </div>
    </form>
  );
}
