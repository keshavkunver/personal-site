// Centralized content configuration
// Edit this file to update site content

// Import images statically for Next.js
import edharmaLogo from '../assets/images/projects/eternal-dharma/eternal-dharma-logo.png';
import fourthspaceImg from '../assets/images/projects/fourthspace/fourthspace-logo.png';

export const personalInfo = {
  name: "Keshav Kunver",
  title: "Engineer. Founder. Builder.",
  tagline: "Building reliable AI-native products from 0 → 1.",
  location: "Los Angeles",
  email: "keshav@kunver.com",
  availability: "Available for opportunities",
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/keshav-kunver/",
  github: "https://github.com/keshavkunver",
  instagram: "https://instagram.com/keshavkunver",
};

export const impactMetrics = [
  { value: "200+", label: "Active Users" },
  { value: "4", label: "Products Shipped" },
  { value: "1M+", label: "Views" },
  { value: "6+", label: "Years Experience" },
];

export const selectedWork = [
  {
    id: "fourthspace",
    name: "FourthSpace",
    problem: "Tech keeps people scrolling, distracted, and dependent. We wanted to build something that does the opposite.",
    built: "A web app that helps people get their focus back, ask better questions, and actually do something with their time.",
    outcome: "MVP live. My antidote to distraction.",
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
    category: "AI & Product Development",
    skills: ["LLM Integration", "Prompt Engineering", "RAG Pipelines", "AI-Assisted Development", "AI-Native Products"],
  },
  {
    category: "Full-Stack Engineering",
    skills: ["React", "React Native", "TypeScript", "Node.js", "Python", "Firebase", "REST APIs"],
  },
  {
    category: "Quality & Delivery",
    skills: ["Test Automation", "CI/CD", "System Design", "Database Design"],
  },
];

export const experience = [
  {
    company: "Infosys",
    role: "Software Engineer",
    duration: "Mar 2021 - Present",
    achievements: [
      "Designed web testing framework architecture adopted across the team",
      "Led API testing, delivering production-ready releases to stakeholders",
      "Integrated AI tooling to accelerate test development and expand coverage",
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
    title: "We Have ChatGPT, Why Write?",
    url: "/blog/why-i-still-write",
    description: "And that is exactly why.",
  },
  {
    title: "Dharma, Regret, and the Clock",
    url: "/blog/dharma-regret-and-the-clock",
    description: "On finding purpose before AI reshapes everything, and why I stopped waiting.",
  },
  {
    title: "The Productivity Trap",
    url: "/blog/the-productivity-trap",
    description: "How I catch myself doing busywork disguised as progress.",
  },
  {
    title: "The Polyglot Paradox",
    url: "/blog/the-polyglot-paradox",
    description: "I speak four languages. Sometimes I wonder if that held me back.",
  },
  {
    title: "Health Advice Nobody Asked For",
    url: "/blog/health-advice-nobody-asked-for",
    description: "What actually worked for me. Not for everyone.",
  },
  {
    title: "The 2am Question",
    url: "/blog/the-2am-question",
    description: "Why do I only feel motivated when everyone else is asleep?",
  },
  {
    title: "Too Many Interests",
    url: "/blog/too-many-interests",
    description: "I want to learn everything. So what do I actually do?",
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
