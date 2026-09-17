// Examples shown on /websites. Only real, live, permitted work goes here.
// To add one: set screenshot (a path in public/), descriptive alt, and href.
// `kind` distinguishes what the reader is looking at:
//   'own'    Keshav's own product (honest: not client work)
//   'client' client work, live and cleared for display
export const websiteExamples = [
  {
    id: 'ruvoa',
    name: 'Ruvoa',
    kind: 'own',
    label: 'Product site',
    category: 'My own product',
    summary: 'Five pages, one question each. A real type system instead of a template.',
    status: 'Live at ruvoa.app.',
    href: 'https://www.ruvoa.app',
    shots: [
      { src: '/work/ruvoa/home.webp', page: 'Home', alt: 'Ruvoa homepage: a large serif question above a table of contents.' },
      { src: '/work/ruvoa/life-audit.webp', page: 'Life Audit', alt: 'Life Audit page walking through a miniature version of the product.' },
      { src: '/work/ruvoa/explore.webp', page: 'Explore', alt: 'Explore page: a gallery of example result artifacts.' },
      { src: '/work/ruvoa/philosophy.webp', page: 'Philosophy', alt: 'Philosophy essay page with a drop cap opening.' },
      { src: '/work/ruvoa/about.webp', page: 'About', alt: "About page with the author's first-person note." },
    ],
  },
  {
    id: 'mack-minaya',
    name: 'Mack Minaya',
    kind: 'client',
    label: 'Photographer, NYC and Connecticut',
    category: 'Client work',
    summary: 'His work was buried. Now it leads, and Book a Shoot is one tap from every page.',
    status: 'Live on a preview link while the domain moves over.',
    href: 'https://mack-minaya-site.vercel.app',
    // Mack's own words from messages after the site went up, excerpted to
    // contiguous fragments with an ellipsis marking the cut. Nothing reworded;
    // only the opening expletive is dropped. Permission confirmed 2026-09-17.
    quote: 'THIS WEBSITE ITS FIREEEEE \u2026 Brooo thank you so much for the website',
    shots: [
      { src: '/work/mack-minaya/home.webp', page: 'Home', alt: 'Mack Minaya homepage: a full-width studio portrait above a row of gallery tiles.' },
      { src: '/work/mack-minaya/work.webp', page: 'Work', alt: 'Work index page showing photography galleries by category.' },
      { src: '/work/mack-minaya/nightlife.webp', page: 'Nightlife', alt: 'Nightlife gallery: a grid of concert and club photographs.' },
      { src: '/work/mack-minaya/about.webp', page: 'About', alt: 'About page with a portrait of the photographer and his biography.' },
      { src: '/work/mack-minaya/contact.webp', page: 'Contact', alt: 'Contact page with booking details and enquiry options.' },
    ],
  },
  {
    id: 'nv-studio',
    name: 'NV Studio',
    kind: 'client',
    label: 'Barber, Lake Forest CA',
    category: 'Client work',
    summary: 'One page, built to send people straight to his booking page.',
    status: 'Live. Custom domain still to come.',
    href: 'https://nv-studio-nine.vercel.app',
    shots: [
      { src: '/work/nv-studio/home.webp', page: 'Home', alt: 'NV Studio homepage: the barber\u2019s name in heavy type beside a photo of a finished cut.' },
      { src: '/work/nv-studio/work.webp', page: 'The work', alt: 'Gallery section showing before and after haircut photographs.' },
      { src: '/work/nv-studio/reels.webp', page: 'Reels', alt: 'Short video clips of cuts in progress.' },
      { src: '/work/nv-studio/services.webp', page: 'Services', alt: 'Services and prices listed with a booking button.' },
      { src: '/work/nv-studio/visit.webp', page: 'Visit', alt: 'Location, hours, and directions to the studio.' },
    ],
  },
];

export const websiteOffer = {
  email: 'keshavkunver@gmail.com',
  headline: 'Let customers see what you do.',
  intro:
    'A website is where people decide whether to trust you with the job. Show them the work, the service area, and one obvious way to get in touch.',
  features: [
    [
      'Customers reach you in one tap',
      'Click-to-call and click-to-text on every page, and a contact form that goes to an inbox you actually check.',
    ],
    [
      'People know what you charge before they call',
      'Your services, your pricing or quote process, and your service area, right on the page.',
    ],
    [
      'It works on a phone first',
      'That is where nearly everyone will see it. The phone layout is the one I design first, not the one I shrink down afterward.',
    ],
    [
      'Search-friendly setup for your services and location',
      'Page titles and descriptions, a sitemap, and your Google Business Profile connected. Setup work, not a promise about where you rank.',
    ],
    [
      'Two rounds of revisions, then live',
      'You look, you tell me what to change, I change it. Twice. Then it goes live on your domain.',
    ],
  ],
  steps: [
    [
      'Tell me about your business',
      'Send your current site, if you have one, and a sentence or two about what you do. About a minute of typing. No call.',
    ],
    [
      'I reply either way',
      'If I think I can help, I record a short private video walking through the direction I would take. Free, and there is nothing to book.',
    ],
    [
      'I build it',
      'You pay the $500 deposit and I build in about a week. How soon it goes live after that depends on how quickly you come back with feedback on the two revision rounds.',
    ],
  ],
  faqs: [
    [
      'How many of these do you take on?',
      'Two at a time, so each one gets real attention. If both slots are full I will tell you when the next one opens rather than starting late.',
    ],
    [
      'Do I need an existing website?',
      'No. Leave the website field blank and tell me about your business instead. A rebuild and a first site are the same work to me.',
    ],
    [
      'How long does it take?',
      'The build itself takes about a week once the deposit is paid and I have your content and access. After that it depends on you: each revision round moves as fast as your feedback does. Clients who reply the same day are live inside two weeks. If you need longer, that is fine, it just moves the launch.',
    ],
    [
      'Who writes the words?',
      'You know your business better than I do, so the words are yours. I edit what you send for length and clarity and I write the small stuff: page titles, buttons, labels. Writing your services and story from scratch is not included.',
    ],
    [
      'What is not included?',
      'Logo design, writing your copy from scratch, and online payments or booking. If you already use something like Booksy or Square, I link to it.',
    ],
    [
      'What counts as a revision?',
      'One round is one pass of your notes, sent together. Change the copy, swap a photo, reorder a section, adjust the layout. A new page or a different direction after approval is new scope, and I will quote it before doing it.',
    ],
    [
      'How does payment work?',
      '$1,300 total: $500 to start and $800 when it goes live. Flat price, no hourly billing. If you do not like the first concept, I refund the $500 and we stop there.',
    ],
    [
      'Who handles the domain and hosting?',
      'Either way works. I can register and manage both, with the cost inside the care plan, or point the site at a domain you already own. A domain runs about $15 a year; hosting for a site this size is usually free or a few dollars a month. The domain is yours regardless: ask and I transfer it to you, free, any time.',
    ],
    [
      'Can you look after the site afterward?',
      'Optional, $99 a month. It covers updates, small edits, monitoring, and the two running costs a website has: hosting (the computer your site lives on) and the domain (your web address, like yourbusiness.com, which renews yearly). I keep both paid and renewed so there is nothing separate for you to remember. Cancel any time. If you skip the plan, those two costs are yours to hold, about $15 a year for the domain plus hosting, and you can email me when something needs doing.',
    ],
  ],
};

// Quotes live on the example entries above (`quote`), so a reaction sits
// under the site it is about. VERBATIM WORDS ONLY, and only with permission
// recorded: paraphrased or invented reviews are an FTC problem and a launch
// blocker (client-work/AGENTS.md). Trimming to contiguous fragments is fine;
// rewording is not.

// The AEO audit: a second, smaller offer for businesses whose site is fine but
// invisible. Set `href` to the real page when it exists; while it is null the
// section links to the inquiry form and says the audit is opening soon, so
// nothing on the page promises a destination that 404s.
export const aeoOffer = {
  href: null,
  eyebrow: 'A different problem',
  title: 'Site is fine. Nobody finds it.',
  body: 'If your website already says the right things and the phone still is not ringing, the problem is not the design. It is that you are not showing up: not in Google results, and not in the answers people now get from ChatGPT and other assistants when they ask for someone in your trade.',
  detail: 'I audit what is actually blocking you: how your pages are structured, what a search engine and an AI assistant can and cannot read on your site, whether your business details line up across the web, and what your competitors are doing that you are not. You get a written list of what to fix, in priority order.',
  caveat: 'An audit, not a ranking promise. Nobody can guarantee a position in Google or a mention in an AI answer, and anyone who does is selling you something.',
  cta: 'Ask about an SEO and AI search audit',
  ctaSoon: 'Ask me about an audit',
  soonNote: 'Details page coming soon. In the meantime, ask me directly.',
};

// Page copy lives here so wording can change without editing the layout.
export const websiteCopy = {
  mockLabel: 'Example layout',
  mockContact: 'Call now',
  mockFooterLeft: 'Services & pricing',
  mockFooterRight: 'Service area',
  invitationBody: 'Yours could be next. Tell me what you have in mind.',
  invitationCta: 'Tell me about your business',
  invitationCaption: 'New site or a rebuild. Either works.',
  packageEyebrow: 'The package',
  packageTitle: 'What you get.',
  packageIntro: 'One price, one person. Design, build, and launch.',
  priceDescription: 'Up to 5 pages, 2 rounds of revisions, live on your domain.',
  priceGuarantee: 'Do not like the first concept? I refund the $500 and we stop.',
  priceRunning: 'Hosting and your domain renew yearly. Covered by the plan below, or held by you.',
  buildSpeed: 'Built in about a week',
  careTitle: 'Ongoing maintenance',
  careBody: 'Updates, small edits, monitoring, and the hosting and domain kept paid and renewed. No separate bills to remember. Cancel anytime.',
  processTitle: 'How it works.',
  processIntro: 'Start with the form. No call to book.',
  aboutTitle: 'You work with me.',
  aboutBody:
    'I am a software engineer in Los Angeles. No account manager, no handoff to someone else: the person you email is the person writing the code.',
  faqTitle: 'Questions.',
  contactEyebrow: 'Have a project in mind?',
  contactTitle: 'Tell me about your business.',
  contactBody:
    'Send your current site, if you have one, and a sentence or two about what you do. I reply either way. If I think I can help, you get a short video walking through what I would change and why.',
  footer: 'Websites by Keshav Kunver',
  successTitle: 'Got it.',
  successReview: 'I will read what you sent and reply either way.',
  successNext:
    'If I think I can help, you will get a short video walking through the direction I would take.',
  successEnd: 'Nothing to book in the meantime.',
  formNote: 'No call required. I reply either way.',
};
