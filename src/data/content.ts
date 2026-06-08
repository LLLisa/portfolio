export const profile = {
    name: 'Lisa Anne Knox',
    role: 'Full-Stack Engineer',
    location: 'New York, NY',
    email: 'lisaknox83@gmail.com',
    phone: '646.858.5409',
    tagline:
        'I build user-focused interfaces, fast and reliable systems, and the AI / agentic tooling that ties them together.',
    intro: [
        'Full-stack web developer with 4+ years of experience shipping production software — from React front ends that load in a fraction of the time to back ends built on Rails, Postgres, and Node.',
        'Lately I spend most of my time at the edge of AI engineering: building MCP servers, designing agentic workflows, and using LLMs to generate the testing and infrastructure that keeps real applications honest.',
    ],
};

export const links = {
    github: 'https://github.com/LLLisa',
    linkedin: 'https://www.linkedin.com/in/lisa-a-knox',
    npm: 'https://www.npmjs.com/~lisaknox',
    email: 'mailto:lisaknox83@gmail.com',
};

export const stats = [
    { value: '4+', label: 'Years building production software' },
    { value: '62%', label: 'Faster front-end load times' },
    { value: '0→84%', label: 'Test coverage on a legacy codebase' },
    { value: '100+', label: 'Developers mentored' },
];

export type Experience = {
    company: string;
    role: string;
    period: string;
    current?: boolean;
    points: string[];
};

export const experience: Experience[] = [
    {
        company: 'Fly Over The City',
        role: 'Senior Developer',
        period: 'Oct 2025 — Present',
        current: true,
        points: [
            'Built an MCP server that gives AI agents first-class access to the codebase for agentic development.',
            'Used LLMs to stand up a testing infrastructure from scratch, raising coverage from 0% to 84%.',
            'Launched a public API enabling customers to automate their own workflows.',
            'Designed and built a modern React replacement for an aging Ruby on Rails application.',
        ],
    },
    {
        company: 'Curii Corporation',
        role: 'Front-End Developer',
        period: 'Sep 2022 — Mar 2026',
        points: [
            'Cut front-end load times by 62% (6.5s → 2.5s) through targeted performance optimization.',
            'Consolidated a fractured test suite from 3 libraries down to 1 across 50+ test files.',
            'Ran monthly customer design sessions to shape UI features and improve satisfaction.',
        ],
    },
    {
        company: 'Zeemoo LLC',
        role: 'Full-Stack Developer (Contract)',
        period: 'Aug 2022 — Feb 2023',
        points: [
            'Implemented multi-factor authentication with DUO.',
            'Designed the database schema using Prisma.',
        ],
    },
    {
        company: 'Fullstack Academy',
        role: 'Web Development Mentor',
        period: 'Aug 2022 — Aug 2023',
        points: [
            'Mentored 100+ students across 4 cohorts in full-stack web development.',
        ],
    },
];

export type Project = {
    name: string;
    blurb: string;
    tags: string[];
    href?: string;
    repo?: string;
    featured?: boolean;
    accent?: string;
};

export const projects: Project[] = [
    {
        name: 'Arvados',
        blurb:
            'Open-source platform for managing, processing, and sharing genomic and other large-scale scientific data, maintained by Curii. I lead UI and testing overhauls and build new features to meet customer needs.',
        tags: ['React', 'TypeScript', 'Redux', 'Open Source'],
        href: 'https://arvados.org',
        repo: 'https://github.com/arvados/arvados',
        featured: true,
        accent: '#c6f24e',
    },
    {
        name: 'voice-input',
        blurb:
            'A local, privacy-first speech-to-text daemon for Linux / Wayland. Hold a hotkey, speak, release — your words are typed into the focused window. Runs fully on-device with Whisper, with optional LLM cleanup via Ollama.',
        tags: ['Python', 'Whisper', 'Ollama', 'Wayland'],
        repo: 'https://github.com/LLLisa/voice-input',
        featured: true,
        accent: '#7b6cff',
    },
    {
        name: 'The Redux General Store',
        blurb:
            'A stateless Redux store alternative that simplifies and automates the build-out of basic CRUD operations — published to npm.',
        tags: ['TypeScript', 'Redux', 'npm Package'],
        href: 'https://www.npmjs.com/~lisaknox',
        featured: true,
        accent: '#3dd7ff',
    },
    {
        name: 'NA Daily Inventory',
        blurb:
            'A privacy-first daily-inventory tool for members of Narcotics Anonymous. No responses or personal data are ever stored — everything stays on your device, with a PDF export at the end. Free and open source.',
        tags: ['React', 'TypeScript', 'Privacy'],
        href: 'https://nadailyinventory.com',
        repo: 'https://github.com/LLLisa/inventory',
        accent: '#ff8a5c',
    },
    {
        name: 'Yaku Palace',
        blurb:
            'A frontend-only riichi mahjong toolkit — scoring practice, memorization articles, and printable reference tables — running entirely in the browser.',
        tags: ['React 19', 'Vite', 'Tailwind v4', 'MDX'],
        repo: 'https://github.com/LLLisa/yakupalace',
        accent: '#f25ec0',
    },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
    {
        label: 'Languages',
        items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Ruby'],
    },
    {
        label: 'Front-End',
        items: ['React', 'Redux', 'Vite', 'Material-UI', 'Electron'],
    },
    {
        label: 'Back-End & Data',
        items: ['Node / Express', 'Ruby on Rails', 'Postgres', 'Prisma', 'Deno'],
    },
    {
        label: 'AI & Agentic',
        items: ['MCP Integration', 'Agentic Workflows', 'LLM Tooling', 'Whisper', 'Ollama'],
    },
    {
        label: 'Testing & Tooling',
        items: ['Jest', 'Cypress', 'Git', 'Linux'],
    },
];
