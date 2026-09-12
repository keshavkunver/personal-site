/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Wide AND tall enough for the hero's absolute corner cards
        'hero-lg': { raw: '(min-width: 1024px) and (min-height: 760px)' },
      },
      fontFamily: {
        heading: ['var(--font-instrument-sans)', 'Inter', 'sans-serif'],
        display: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      colors: {
        // Background layers (ink sky: deep indigo)
        'dark-bg': '#0f1322',
        'dark-surface': '#171c2b',
        'dark-elevated': '#1f2536',

        // Borders
        'dark-border': 'rgba(240, 242, 248, 0.08)',
        'dark-border-hover': 'rgba(240, 242, 248, 0.16)',

        // Text hierarchy (warm ivory headings, neutral grays for body)
        'text-primary': '#f8f6f0',
        'text-secondary': '#b4b5b8',
        'text-tertiary': '#898c94',

        // Accent (monochrome ivory system)
        'accent': '#f8f6f0',
        'accent-hover': '#ffffff',
        'accent-subtle': 'rgba(248, 246, 240, 0.08)',

        // Warm accent, tiny doses only (dots, marks)
        'gold': '#d9a441',
      },
      fontSize: {
        'sm': ['0.9375rem', { lineHeight: '1.5rem' }],
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '500' }],
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '0' }],
        'h2': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
        'body-lg': ['1.25rem', { lineHeight: '1.75' }],
        'body': ['1.125rem', { lineHeight: '1.75' }],
        'small': ['0.9375rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(248, 246, 240, 0.08)',
        'glow-lg': '0 0 60px -15px rgba(248, 246, 240, 0.10)',
        'card': '0 4px 20px -5px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 30px -5px rgba(0, 0, 0, 0.6)',
        'inner-top': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Aurora: teal light upper-left, gold lower-right, over an indigo wash
        'aurora':
          'radial-gradient(ellipse 60% 44% at 82% 88%, rgba(217, 164, 65, 0.22) 0%, transparent 65%), radial-gradient(ellipse 55% 40% at 12% 8%, rgba(52, 211, 153, 0.11) 0%, transparent 60%), linear-gradient(160deg, #0c101d 0%, #101528 60%, #12182b 100%)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
