// Centralized content configuration
// Edit this file to update site content

// Import images statically for Next.js
import edharmaLogo from '../assets/images/projects/eternal-dharma/eternal-dharma-logo.png';
import fourthspaceImg from '../assets/images/projects/fourthspace/fourthspace-logo.png';
import hoopintelImg from '../assets/images/projects/hoop-intel/hoopintel-screenshot.png';

export const personalInfo = {
  name: "Keshav Kunver",
  title: "Software Engineer building AI-powered products.",
  tagline: "Full-stack engineering, applied AI, and reliable systems.",
  location: "Los Angeles",
  email: "keshav@kunver.com",
  availability: "Open to hybrid & remote",
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
  { value: "4", label: "Products Shipped", caption: "From 0 to 1" },
  { value: "200+", label: "Users", caption: "Eternal Dharma, at peak" },
  { value: "1M+", label: "Views", caption: "Short-form social content" },
  { value: "6+", label: "Years Experience" },
];

export const selectedWork = [
  {
    id: "fourthspace",
    name: "FourthSpace",
    problem: "AI-powered social app that turns natural-language chat into real-world meetups.",
    built: "Claude tool-calling agent with multi-turn guardrails, real-time voice moderation, ~20 generative endpoints, and regression tests built from past agent failures.",
    outcome: "Co-founded and built 2025–2026.",
    stack: ["Next.js", "React 19", "TypeScript", "Supabase", "Vercel", "Anthropic Claude", "LiveKit", "Python"],
    links: {
      website: "https://www.fourthspace.vip/",
      writeup: "/blog/building-fourthspace",
    },
    image: fourthspaceImg,
    featured: true,
  },
  {
    id: "eternal-dharma",
    name: "Eternal Dharma",
    problem: "Personalized, scripture-grounded spiritual guidance for iOS.",
    built: "Persona-constrained Claude assistant with citation rules and structured verse and commentary data.",
    outcome: "Grew to 200+ users at peak.",
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
    problem: "Basketball analytics app that turns player and team stats into clear visual insights.",
    built: "Interactive analysis for coaches, scouts, and fans.",
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
    category: "Full-Stack Engineering",
    description: "Modern web and mobile products from frontend to backend.",
    tools: "TypeScript · React · Next.js · React Native · Python · SQL",
  },
  {
    category: "Applied AI",
    description: "LLM-powered features, agents, tool calling, voice AI, and evals.",
    tools: "Claude · OpenAI · Vercel AI SDK · LiveKit",
  },
  {
    category: "Quality & Reliability",
    description: "Production-minded engineering shaped by 6+ years in quality.",
    tools: "API automation · Regression testing · CI/CD · AI evals",
  },
];

export const experience = [
  {
    company: "Infosys",
    role: "Software Development Engineer in Test (SDET)",
    duration: "Mar 2021 - Present",
    summary: [
      "Own API and UI automation for enterprise releases, including a custom framework covering 11 APIs and 800+ test cases.",
      "Building Claude-powered workflows across requirements, test generation, automation, execution, and validation.",
    ],
    note: "Onboarded and mentored two engineers through automation standards, coverage decisions, and code reviews.",
    technologies: ["JavaScript", "Java", "Selenium", "TestNG", "REST APIs", "GitLab CI/CD", "Claude"],
  },
  {
    company: "Prathibha Management",
    role: "Software Engineer",
    duration: "Aug 2019 - Jan 2021",
    summary: "Built a full-stack Django platform connecting Los Angeles talent with Hollywood casting opportunities.",
    outcome: "Helped performers match with and land real roles.",
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
