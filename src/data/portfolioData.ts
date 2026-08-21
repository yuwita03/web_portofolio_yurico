import { Project, SkillCategory, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Nekoyu',
  japaneseName: 'ユウタ',
  role: 'BACKEND / FULLSTACK DEVELOPER',
  tagline: 'Building web applications, APIs, and systems with curiosity.',
  focus: 'Backend Engineering',
  location: 'Indonesia',
  currentlyLearning: 'Go',
  email: 'ppyurico@gmail.com',
  github: 'https://github.com/yuwita03',
  linkedin: 'https://www.instagram.com/_koyu_02/',
  aboutTitle: 'I BUILD THINGS\nWITH CURIOSITY.',
  aboutDescription: `I'm a developer focused on building modern web applications, backend systems, and reliable APIs.\n\nI enjoy turning ideas into working products and understanding how things work under the hood.`,
  videoUrl: 'https://res.cloudinary.com/dajkiwbqz/video/upload/v1786364487/Black_cat_on_ledge_202608101919_1_midto0.mp4',
  videoUrl2: 'https://res.cloudinary.com/dajkiwbqz/video/upload/v1786364490/Black_cat_on_ledge_202608101919_ibj8uj.mp4',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'BACKEND',
    japaneseSubtitle: 'バックエンド開発',
    skills: [
      { name: 'Go', description: 'Concurrent services, CLI utilities, and high-performance microservices', highlight: true, levelTag: 'Current Core' },
      { name: 'Node.js', description: 'Event-driven runtime for robust scalable network services', highlight: true, levelTag: 'Proficient' },
      { name: 'NestJS', description: 'Enterprise TypeScript architecture, dependency injection & modules', highlight: true, levelTag: 'Primary Framework' },
      { name: 'REST API', description: 'Clean RESTful design, OpenAPI specs, rate-limiting & JWT auth', highlight: true, levelTag: 'Core' },
    ],
  },
  {
    title: 'DATABASE',
    japaneseSubtitle: 'データベース設計',
    skills: [
      { name: 'PostgreSQL', description: 'Relational data modeling, indexing, ACID transactions & JSONB', highlight: false, levelTag: 'Primary SQL' },
      { name: 'MySQL', description: 'Schema normalization, complex queries & optimization', highlight: false },
      { name: 'MariaDB', description: 'High-availability relational database workflows', highlight: false },
      { name: 'Prisma', description: 'Type-safe ORM schema migrations and performant queries', highlight: false, levelTag: 'ORM' },
    ],
  },
  {
    title: 'FRONTEND',
    japaneseSubtitle: 'フロントエンド',
    skills: [
      { name: 'React', description: 'Declarative component architecture & modern hooks ecosystem', highlight: false, levelTag: 'UI Library' },
      { name: 'TypeScript', description: 'Strict end-to-end type safety across client and server', highlight: false, levelTag: 'Standard' },
      { name: 'Vite', description: 'Fast build tooling and modern frontend bundling', highlight: false },
      { name: 'Tailwind CSS', description: 'Utility-first styling, design tokens & responsive UI', highlight: false },
    ],
  },
  {
    title: 'TOOLS',
    japaneseSubtitle: 'ツールとインフラ',
    skills: [
      { name: 'Git', description: 'Version control, branch workflows, rebasing & PR reviews', highlight: false },
      { name: 'Docker', description: 'Containerization, multi-stage builds & Docker Compose stacks', highlight: false, levelTag: 'DevOps' },
      { name: 'Linux', description: 'Bash scripting, system administration & server deployment', highlight: false },
      { name: 'Nginx', description: 'Reverse proxying, SSL termination & load balancing', highlight: false },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'japanese-learning-platform',
    title: 'Japanese Learning Platform',
    japaneseTitle: '日本語学習プラットフォーム',
    subtitle: 'Interactive spaced-repetition vocabulary & grammar learning platform with real-time quiz engine.',
    description: 'A comprehensive full-stack web application designed for students learning Japanese (N5–N1). Features spaced repetition algorithms, audio quizzes, Kanji stroke order viewer, and dynamic user progress analytics.',
    longDescription: 'Built with NestJS backend architecture following clean modular domain separation. Features JWT authentication with refresh tokens, PostgreSQL relations for user flashcard decks, Prisma ORM queries, and an interactive React frontend with instant audio feedback and daily streak gamification.',
    category: 'Fullstack',
    isFeatured: true,
    techStack: ['NestJS', 'PostgreSQL', 'Prisma', 'React', 'TypeScript', 'Tailwind CSS'],
    year: '2025',
    githubUrlFe: 'https://github.com/yuwita03/JapaneseLearning-fe.git',
    githubUrlBe: 'https://github.com/yuwita03/Japanese-learning.git',
    // demoUrl: 'https://japanese-learning.example.com',
    metrics: ['Sub-50ms API Latency', 'Spaced Repetition Algorithm', '5,000+ Kanji DB'],
    highlights: [
      'Modular NestJS backend with Swagger API documentation',
      'PostgreSQL database with custom SRS scheduling queries',
      'Audio pronunciation player and Kanji stroke canvas',
      'Responsive dark/light anime-inspired dashboard'
    ],
    previewGradient: 'from-sky-500/20 via-indigo-500/10 to-transparent',
    accentColor: '#38bdf8',
  },
  {
    id: 'mvp-platform',
    title: 'MVP Platform',
    japaneseTitle: '電子商取引システム',
    subtitle: 'High-throughput inventory & order management backend with real-time checkout.',
    description: 'Scalable electronic commerce platform featuring modular checkout processing, dynamic cart calculation, order fulfillment workflows, and payment gateway webhooks.',
    longDescription: 'Engineered a resilient NestJS REST service backed by MySQL. Implements database transaction locks for inventory reservation, automated invoice generator, role-based access control (Admin/Customer), and clean React storefront.',
    category: 'Fullstack',
    isFeatured: false,
    techStack: ['NestJS', 'React', 'MySQL', 'Prisma', 'Tailwind CSS'],
    year: '2025',
    githubUrlFe: 'https://github.com/yuwita03/frontend-store.git',
    githubUrlBe: 'https://github.com/yuwita03/MVP-Ecommerce.git',
    // demoUrl: 'https://ecommerce.example.com',
    metrics: ['ACID-compliant Cart', 'Role-based Auth', 'Webhook Pipeline'],
    highlights: [
      'Optimistic locking on inventory checkout to prevent overselling',
      'Secure webhook handler with signature verification',
      'Real-time admin metrics dashboard with order filtering'
    ],
    previewGradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    accentColor: '#6366f1',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    japaneseTitle: '図書管理システム',
    subtitle: 'Automated book circulation, member registry & borrowing timeline service.',
    description: 'An intuitive management platform for cataloging literary collections, tracking borrowing durations, calculating late fines, and generating circulation statistics.',
    longDescription: 'Created with Express and MySQL, focusing on clean relational database design, foreign keys, cascade deletes, automated overdue calculation jobs, and an ergonomic Vue single-page application.',
    category: 'Backend',
    isFeatured: false,
    techStack: ['Express', 'MySQL', 'Vue', 'Node.js', 'JWT'],
    year: '2024',
    githubUrlFe: 'https://github.com/yuwita03/perpustakaan.git',
    githubUrlBe: 'https://github.com/yuwita03/perpustakaan.git',
    // demoUrl: 'https://library-system.example.com',
    metrics: ['Relational Schema', 'Automated Overdue Cron', 'Zero-leak Tokens'],
    highlights: [
      'Relational schema normalization with index tuning for fast ISBN lookup',
      'Automated nightly cron for overdue fee calculation and notices',
      'Clean REST endpoints with input validation middleware'
    ],
    previewGradient: 'from-teal-500/20 via-sky-500/10 to-transparent',
    accentColor: '#0ea5e9',
  },
{
  id: 'project-store-campus',
  title: 'Project Store by Campus',
  japaneseTitle: 'キャンパスストア',
  subtitle: 'Campus e-commerce platform built with Laravel for managing products, users, and transactions.',
  description: 'A web-based campus store application developed with Laravel, providing product management, user interaction, and basic e-commerce functionality.',
  longDescription: 'Built as a campus project to implement a structured Laravel application with database-driven CRUD operations, Vite-powered frontend assets, and Axios for client-server communication.',
  category: 'Fullstack',
  isFeatured: false,
  techStack: ['PHP', 'Laravel', 'Vite', 'Axios', 'MySQL'],
  year: '2025',
  githubUrlFe: 'https://github.com/yuwita03/Project_store_by_campus.git',
  githubUrlBe: 'https://github.com/yuwita03/Project_store_by_campus.git',
  demoUrl: '',
  highlights: [
    'Product and inventory CRUD',
    'Database-driven campus store system',
    'Laravel backend with Vite frontend tooling'
  ],
  previewGradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
  accentColor: '#0284c7',
}
];

export const JOURNEY_TIMELINE: JourneyMilestone[] = [
  {
    year: '2026',
    title: 'Backend Engineering',
    subtitle: 'High Performance & Systems',
    description: 'Deepening focus on Go, microservices architecture, asynchronous message workers, PostgreSQL performance tuning, and distributed systems design.',
    tags: ['Go', 'REST API', 'PostgreSQL', 'Docker', 'Redis'],
    iconType: 'backend',
  },
  {
    year: '2025',
    title: 'Fullstack Development',
    subtitle: 'Enterprise Frameworks & Type Safety',
    description: 'Built complex full-stack web applications with NestJS and React, mastering relational data modeling, Prisma ORM, JWT authentication protocols, and scalable frontend architectures.',
    tags: ['React', 'NestJS', 'Prisma', 'TypeScript', 'Tailwind CSS'],
    iconType: 'fullstack',
  },
  {
    year: '2024',
    title: 'Started Web Development',
    subtitle: 'Foundations & Passion',
    description: 'Initiated the developer journey by building responsive web interfaces, understanding DOM manipulation, asynchronous JavaScript, Node.js fundamentals, and relational database basics.',
    tags: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MySQL'],
    iconType: 'starter',
  },
];
