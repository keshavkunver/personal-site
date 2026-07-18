// Centralized content configuration
// Edit this file to update site content

// Import images statically for Next.js
import edharmaLogo from '../assets/images/projects/eternal-dharma/eternal-dharma-logo.png';
import fourthspaceImg from '../assets/images/projects/fourthspace/fourthspace-logo.png';

export const personalInfo = {
  name: "Keshav Kunver",
  title: "AI Engineer building reliable AI-native products from 0 to 1.",
  tagline: "I build production LLM apps: agents, RAG, and the evals that keep them from breaking. Six years as an SDET taught me how to make software behave under real conditions, and I bring that to AI.",
  location: "Los Angeles / Remote",
  email: "keshav@kunver.com",
  availability: "Available for opportunities",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/keshav-kunver/",
  github: "https://github.com/keshavkunver",
  instagram: "https://instagram.com/keshavkunver",
};

export const impactMetrics = [
  { value: "200+", label: "Users", caption: "Eternal Dharma, at peak" },
  { value: "4", label: "Products Shipped" },
  { value: "1M+", label: "Views", caption: "Short-form social content (Eternal Dharma)" },
  { value: "6+", label: "Years Experience" },
];

export const selectedWork = [
  {
    id: "fourthspace",
    name: "FourthSpace",
    problem: "Social media isn't social. People scroll for hours and end up lonelier than when they started.",
    built: "A web app where content leads to connection. Users discover content around their interests, then get matched with others who share them. Consuming becomes connecting.",
    outcome: "MVP live. Curing the loneliness epidemic, starting now.",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude", "PWA", "Tailwind CSS"],
    links: {
      website: "https://www.fourthspace.vip/",
    },
    image: fourthspaceImg,
    featured: true,
    isActive: true,
  },
  {
    id: "eternal-dharma",
    name: "Eternal Dharma",
    problem: "People want spiritual guidance but don't know where to start or how to apply ancient wisdom to modern life.",
    built: "iOS app with Krishna AI that gives personalized advice based on the Bhagavad Gita, plus daily verses and streak tracking.",
    outcome: "200+ users finding daily guidance",
    stack: ["React Native", "TypeScript", "Expo", "Firebase", "OpenAI"],
    links: {
      appStore: "https://apps.apple.com/us/app/eternal-dharma/id6744546350",
    },
    image: edharmaLogo,
    featured: true,
  },
  // Only include 2-4 COMPLETED projects as featured
];

export const capabilities = [
  {
    category: "AI Engineering",
    description: "Building production LLM applications: tool-calling agents, RAG and retrieval, prompt engineering, structured outputs, and real-time voice AI. Hands-on with Anthropic Claude and OpenAI APIs, the Vercel AI SDK, and LiveKit.",
  },
  {
    category: "Reliability & Evaluation",
    lead: true,
    description: "Making LLM apps behave in production. I build eval suites and regression tests that turn past agent failures into named tests, so the same bug can't ship twice. Six years as an SDET: test frameworks, API and mobile automation, CI/CD, and failure-mode thinking, now pointed at non-deterministic AI.",
  },
  {
    category: "Full-Stack Delivery",
    description: "Shipping the whole product. Next.js, React, React Native, TypeScript, Python. Supabase, Firebase, Vercel. From idea to a live, monetized app.",
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
