// Centralized content configuration
// Edit this file to update site content

// Import images statically for Next.js
import edharmaLogo from '../assets/images/projects/eternal-dharma/eternal-dharma-logo.png';
import fourthspaceImg from '../assets/images/projects/fourthspace/fourthspace-logo.png';
import hoopintelImg from '../assets/images/projects/hoop-intel/hoopintel-screenshot.png';

export const personalInfo = {
  name: "Keshav Kunver",
  title: "AI Engineer building reliable AI-native products from 0 to 1.",
  tagline: "I build production LLM apps: agents, RAG, and the evals that keep them from breaking.",
  location: "Los Angeles",
  email: "keshav@kunver.com",
  availability: "Open to remote and hybrid roles",
};

export const offTheClock = {
  intro: "My NBA dreams didn't pan out, so I redirected the obsession into software.",
  predictionLabel: "NBA Finals Prediction:",
  prediction: "76ers vs Lakers",
  receipt: "7/26/26",
  reasons: [
    "Bron, Jaylen Brown, and Embiid (when healthy) sound unstoppable",
    "Luka has time to reset and more room to play like himself now that LeBron's gone",
    "Philly's been starving for a Finals run, and the Lakers can be the dark horse even with the Thunder and Spurs heavily favored",
    "#TrustTheProcess has finally come",
  ],
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/keshav-kunver/",
  github: "https://github.com/keshavkunver",
  instagram: "https://instagram.com/keshavkunver",
};

export const impactMetrics = [
  { value: "200+", label: "Users", caption: "Eternal Dharma, at peak" },
  { value: "4", label: "Products Shipped" },
  { value: "1M+", label: "Views", caption: "Short-form social content" },
  { value: "6+", label: "Years Experience" },
];

export const selectedWork = [
  {
    id: "fourthspace",
    name: "FourthSpace",
    problem: "Social media isn't social. People scroll for hours and end up lonelier than when they started.",
    built: "A social web app with an AI agent that plans real-world meetups from natural-language chat. Built on a Claude tool-calling agent with multi-turn confirmation and safety guardrails, a real-time voice AI moderator (Pegasus, on LiveKit), and ~20 generative endpoints. Backed by a unit-test suite that encodes past agent failures as regression tests.",
    outcome: "MVP live.",
    stack: ["Next.js", "React 19", "TypeScript", "Supabase", "Vercel", "Anthropic Claude", "LiveKit", "Python"],
    links: {
      website: "https://www.fourthspace.vip/",
      writeup: "/blog/building-fourthspace",
    },
    image: fourthspaceImg,
    featured: true,
    isActive: true,
  },
  {
    id: "eternal-dharma",
    name: "Eternal Dharma",
    problem: "People want spiritual guidance but don't know where to start or how to apply ancient wisdom to modern life.",
    built: "An iOS app giving personalized, scripture-grounded spiritual guidance. A persona-constrained LLM assistant (Claude) with a scripture-sourced system prompt and citation rules, backed by structured verse and commentary data.",
    outcome: "Grew to 200+ users at peak",
    stack: ["React Native", "Expo", "TypeScript", "Firebase", "Claude (via OpenRouter)"],
    links: {
      appStore: "https://apps.apple.com/us/app/eternal-dharma/id6744546350",
    },
    image: edharmaLogo,
    featured: true,
  },
  {
    id: "hoopintel",
    name: "HoopIntel",
    problem: "Basketball stats are scattered and hard to read. Coaches, scouts, and fans want clear insights without digging through raw box scores.",
    built: "A web app that turns player and team stats into visual, digestible analysis for coaches, scouts, and super-fans.",
    outcome: "Live web app",
    stack: ["Next.js", "Node.js", "D3.js", "Chart.js", "MongoDB"],
    links: {
      website: "https://hoop-intel-y2gw.onrender.com/",
    },
    image: hoopintelImg,
    featured: true,
  },
];

export const capabilities = [
  {
    category: "AI Engineering",
    description: "Production LLM apps: tool-calling agents, RAG, structured outputs, and real-time voice AI. Hands-on with Claude and OpenAI APIs, the Vercel AI SDK, and LiveKit.",
  },
  {
    category: "Reliability & Evaluation",
    lead: true,
    description: "Eval suites and regression tests that turn past agent failures into named tests, so the same bug can't ship twice. Six years of SDET discipline, pointed at non-deterministic AI.",
  },
  {
    category: "Full-Stack Delivery",
    description: "Next.js, React, React Native, TypeScript, Python. Supabase, Firebase, Vercel. From idea to a live, monetized app.",
  },
];

export const experience = [
  {
    company: "Infosys",
    role: "Software Development Engineer in Test (SDET)",
    duration: "Mar 2021 - Present",
    achievements: [
      "Design and maintain UI, API, and CI/CD test-automation frameworks that improve coverage and release stability",
      "Cut regression effort 40% and related API defects 25%",
      "Integrating AI tooling into the testing workflow",
    ],
    technologies: ["Java", "REST APIs", "MySQL", "React", "TypeScript", "CI/CD", "AI"],
  },
  {
    company: "Prathibha Management",
    role: "Software Engineer",
    duration: "Aug 2019 - Jan 2021",
    achievements: [
      "Shipped full-stack Django platform connecting LA talent with Hollywood casting opportunities",
      "Built talent-matching system that helped performers land real roles",
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Full-Stack"],
  },
];

export const writing = [
  {
    title: 'FourthSpace: Shipping an LLM Agent That Plans Real-World Meetups',
    url: '/blog/building-fourthspace',
    description: 'A Claude tool-calling agent, a voice AI moderator, and the test suite that keeps them from breaking.',
    readingTime: '3 min read',
    date: 'July 2026',
    tag: 'AI',
    published: true,
  },
  {
    title: "We Have ChatGPT, Why Write?",
    url: "/blog/why-i-still-write",
    description: "AI removes friction, and friction is what builds cognition. Don't outsource your mind.",
    readingTime: "3 min read",
    date: "February 2026",
    tag: "AI",
    published: true,
  },
  {
    title: "Too Many Interests",
    url: "/blog/too-many-interests",
    description: "I want to learn everything. So what do I actually do?",
    readingTime: "4 min read",
    date: "April 2026",
    tag: "Life",
    published: true,
  },
  {
    title: "Health Advice Nobody Asked For",
    url: "/blog/health-advice-nobody-asked-for",
    description: "What actually worked for me. For almost anyone.",
    readingTime: "4 min read",
    date: "April 2026",
    tag: "Health",
    published: true,
  },
  {
    title: "The 2am Question",
    url: "/blog/the-2am-question",
    description: "Why do I only feel motivated when everyone else is asleep?",
    tag: "Life",
  },
  {
    title: "The Productivity Trap",
    url: "/blog/the-productivity-trap",
    description: "How I catch myself doing busywork disguised as progress.",
    tag: "Work",
  },
  {
    title: "Dharma, Regret, and the Clock",
    url: "/blog/dharma-regret-and-the-clock",
    description: "On finding purpose before AI reshapes everything, and why I stopped waiting.",
    tag: "Life",
  },
];

export const education = {
  masters: {
    degree: "MS Software Engineering",
    school: "CSU Fullerton",
    year: "2025",
    gpa: "4.0",
  },
  bachelors: {
    degree: "BS Computer Science",
    school: "UC Riverside",
  },
};
