export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  tech: string[];
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  challenges: string[];
  learnings: string[];
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'digital-wellbeing-tracker',
    title: 'Digital Wellbeing Tracker',
    shortDescription:
      'An intelligent, desktop-based productivity application that logs real-time system and application activity.',
    fullDescription: [
      'The Digital Wellbeing Tracker is a desktop-native productivity application built to give users genuine insight into their digital habits. Unlike browser extensions or passive loggers, this tool runs at the system level - monitoring active application windows in real-time, tracking session durations, and categorizing usage patterns automatically.',
      'At its core, the project integrates a K-Means clustering algorithm using scikit-learn to group behavioral profiles dynamically. Each user\'s activity data is processed into feature vectors (session lengths, app categories, time-of-day distributions) which are then clustered to detect addictive or unhealthy usage patterns without relying on hardcoded rules.',
      'The feedback engine generates personalized, data-driven suggestions - nudging users toward mindful technology usage by surfacing insights like "You\'ve spent 3x more time on social apps vs. productive tools this week." The UI is built with Tkinter and Matplotlib, rendering live usage graphs and historical trend charts directly within the application.',
    ],
    tech: ['Python', 'Tkinter', 'Matplotlib', 'scikit-learn', 'K-Means', 'SQLite'],
    timeline: 'January 2025 - March 2025',
    liveUrl: 'https://divyanshm30.github.io/digital-wellbeing-tracker/',
    githubUrl: 'https://github.com/divyanshm30/digital-wellbeing-tracker',
    highlights: [
      'Real-time system-level activity monitoring across all applications',
      'K-Means clustering for dynamic behavioral profiling without hardcoded rules',
      'Live usage graphs and historical trend charts rendered with Matplotlib',
    ],
    challenges: [
      'Capturing active window data reliably across different OS environments required platform-specific APIs and careful polling strategies.',
      'Designing the K-Means pipeline to work with heterogeneous usage data - normalizing session lengths, app categories, and time distributions into meaningful feature vectors.',
      'Balancing real-time monitoring performance with minimal CPU/memory overhead to avoid impacting the user\'s workflow.',
    ],
    learnings: [
      'Gained hands-on experience with unsupervised machine learning applied to real user data rather than toy datasets.',
      'Learned how to build responsive desktop UIs with Tkinter that update in real-time without blocking the main thread.',
      'Understood the importance of data normalization and feature engineering when clustering behavioral profiles.',
    ],
  },
  {
    id: 2,
    slug: 'quizforge',
    title: 'QuizForge',
    shortDescription:
      'An AI-powered assessment platform that transforms study materials into topic-wise timed MCQ quizzes with instant evaluation.',
    fullDescription: [
      'QuizForge is an end-to-end AI-powered assessment platform that transforms raw study materials - PDFs, PPTs, and documents - into structured, topic-wise timed MCQ quizzes with instant evaluation and detailed explanations.',
      'The platform features a robust document processing pipeline for text extraction and AI-driven question generation using the Google Gemini API. Users can configure quiz settings including difficulty level, number of questions, and time limits.',
      'Real-time scoring, performance analytics, and revision-focused feedback create a personalized prep experience that adapts to each student\'s learning patterns.',
    ],
    tech: ['Next.js', 'TypeScript', 'Gemini API', 'Document Parsing', 'PDF.js / LangChain'],
    timeline: 'March 2025 - May 2025',
    liveUrl: 'https://quiz-forge-v1.vercel.app/',
    githubUrl: 'https://github.com/DivyanshM30/QuizForge',
    highlights: [
      'Supports multiple document formats: PDF, PPT, and plain text',
      'AI-driven question generation with configurable difficulty and topics',
      'Real-time scoring with performance analytics and revision suggestions',
    ],
    challenges: [
      'Building a reliable document parsing pipeline that handles diverse PDF layouts and PPT structures without losing semantic context.',
      'Prompt engineering the Gemini API to generate high-quality, unambiguous MCQs with plausible distractors consistently.',
      'Implementing real-time quiz timing and scoring that remains accurate across network latency and browser tab switching.',
    ],
    learnings: [
      'Deepened understanding of LLM prompt engineering for structured output generation.',
      'Learned how to architect full-stack Next.js applications with complex async data flows.',
      'Gained experience integrating third-party AI APIs with rate limiting and error handling strategies.',
    ],
  },
  {
    id: 3,
    slug: 'mindpalette',
    title: 'MindPalette',
    shortDescription:
      'A beautifully designed, cloud-synced mood tracking application that turns daily feelings into an expressive visual story.',
    fullDescription: [
      'MindPalette is a cloud-synced mood tracking application that transforms daily emotional check-ins into a beautiful, expressive visual story.',
      'Instead of logging emotions in traditional spreadsheets, MindPalette transforms your year into a gentle, aesthetic grid canvas - where each day becomes a brushstroke of color, emotion, and personal reflection.',
      'Built with Next.js and Supabase, the app features seamless authentication, real-time data sync, and fluid animations powered by Framer Motion. State management via Zustand ensures a smooth, responsive experience.',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase (Auth & DB)', 'Zustand', 'Framer Motion'],
    timeline: 'April 2025 - May 2025',
    liveUrl: 'https://themindpalette.vercel.app/',
    githubUrl: 'https://github.com/DivyanshM30/mindpalette',
    highlights: [
      'Year-long mood grid canvas with color-coded emotional visualization',
      'Cloud-synced with Supabase for seamless cross-device access',
      'Fluid, gesture-driven animations with Framer Motion',
    ],
    challenges: [
      'Designing an intuitive color-emotion mapping system that feels natural and visually harmonious across the full spectrum of moods.',
      'Implementing real-time sync with Supabase while handling offline states and conflict resolution gracefully.',
      'Creating smooth, performant animations for the mood grid with hundreds of cells without jank.',
    ],
    learnings: [
      'Learned how to design emotionally resonant UIs that prioritize aesthetics alongside functionality.',
      'Gained experience with Supabase\'s real-time capabilities and row-level security policies.',
      'Mastered Zustand for lightweight, scalable state management in React applications.',
    ],
  },
  {
    id: 4,
    slug: 'blockchain-vpn',
    title: 'Blockchain-based Decentralized VPN',
    shortDescription:
      'A secure, decentralized networking protocol leveraging blockchain technology for censorship-resistant browsing.',
    fullDescription: [
      'A secure, decentralized networking protocol leveraging blockchain technology for censorship-resistant browsing.',
      'The system utilizes peer-to-peer architecture and robust cryptographic encryption to eliminate central single-points-of-failure, ensuring absolute user privacy and trustless node connectivity.',
      'Smart contracts manage node registration, bandwidth allocation, and payment distribution - creating a self-sustaining network where participants are incentivized to provide reliable VPN services.',
    ],
    tech: ['Blockchain', 'Python', 'Smart Contracts', 'Encryption'],
    timeline: 'October 2024 - December 2024',
    isPrivate: true,
    highlights: [
      'Fully decentralized architecture with no central point of failure',
      'Smart contract-based node management and incentive system',
      'End-to-end cryptographic encryption for complete user privacy',
    ],
    challenges: [
      'Designing a trustless node discovery and verification system that prevents malicious participants from compromising network integrity.',
      'Balancing the overhead of blockchain consensus with the low-latency requirements of real-time VPN traffic.',
      'Implementing robust encryption protocols that maintain performance while ensuring end-to-end privacy.',
    ],
    learnings: [
      'Gained deep understanding of blockchain consensus mechanisms and their practical limitations in real-time applications.',
      'Learned how to design and deploy smart contracts for managing distributed resource allocation.',
      'Understood the complexities of peer-to-peer networking and NAT traversal in decentralized systems.',
    ],
  },
  {
    id: 5,
    slug: 'smart-route',
    title: 'Smart Route',
    shortDescription:
      'A cloud-native navigation engine that computes optimized travel routes by evaluating real-time traffic feeds.',
    fullDescription: [
      'Smart Route is a cloud-native navigation engine that computes optimized travel routes by evaluating real-time traffic feeds and pathfinding algorithms.',
      'The system integrates Google Maps API with custom graph optimization algorithms to calculate the most efficient routes considering live traffic conditions, road closures, and historical patterns.',
      'Deployed on AWS, the service ensures scalable, low-latency updates for routing calculations, handling concurrent requests efficiently through a well-architected Flask backend.',
    ],
    tech: ['Python', 'Flask', 'Maps API', 'AWS (Deployment)'],
    timeline: 'August 2024 - October 2024',
    githubUrl: 'https://github.com/DivyanshM30/smartroute',
    highlights: [
      'Real-time traffic-aware route optimization',
      'Cloud-deployed on AWS for scalable, low-latency performance',
      'Custom graph algorithms integrated with Google Maps API',
    ],
    challenges: [
      'Integrating real-time traffic data with graph-based pathfinding algorithms while maintaining sub-second response times.',
      'Designing the AWS deployment architecture to handle traffic spikes and ensure consistent low-latency responses.',
      'Handling edge cases in routing - road closures, one-way streets, and multi-modal transportation options.',
    ],
    learnings: [
      'Learned how to optimize graph algorithms for real-world routing scenarios with dynamic edge weights.',
      'Gained hands-on experience with AWS deployment, auto-scaling, and infrastructure-as-code practices.',
      'Understood the importance of caching strategies when working with rate-limited external APIs.',
    ],
  },
  {
    id: 6,
    slug: 'ai-news-summarizer',
    title: 'Real-Time AI Based News Summarizer Web App',
    shortDescription:
      'A full-stack web application that fetches and condenses global news into bulleted summaries using the Google Gemini Pro API.',
    fullDescription: [
      'A full-stack, responsive web application that fetches and condenses global news into bulleted summaries using the Google Gemini Pro API.',
      'The modular Flask backend API handles news fetching, processing, and AI-powered summarization with smart token optimization strategies that reduce query latency and API overhead.',
      'Users can filter news by customized categories - Tech, Business, Science, and more - for a personalized feed experience tailored to their interests.',
    ],
    tech: ['Python', 'Flask', 'Google Gemini API', 'NLP'],
    timeline: 'June 2024 - August 2024',
    githubUrl: 'https://github.com/DivyanshM30/summarizer_ai',
    highlights: [
      'AI-powered news summarization with smart token optimization',
      'Customizable category filters for personalized news feeds',
      'Modular Flask API with efficient token management',
    ],
    challenges: [
      'Optimizing token usage with the Gemini API to minimize costs while maintaining high-quality summarization output.',
      'Handling diverse news article formats and extracting clean, structured text from varied HTML sources.',
      'Designing a responsive frontend that presents summarized content in a scannable, user-friendly format.',
    ],
    learnings: [
      'Learned effective strategies for token optimization and cost management when working with LLM APIs.',
      'Gained experience building modular Flask APIs with clean separation of concerns.',
      'Understood the nuances of NLP-driven text summarization and how to evaluate summary quality.',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}