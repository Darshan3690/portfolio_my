import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'mediai',
    title: 'MediAI – Medical Voice AI Agent',
    tagline: 'Voice‑first virtual doctor for real‑time medical conversations powered by AI.',
    description: 'Developed an AI‑powered virtual doctor using Next.js, TypeScript, and AssemblyAI to deliver real‑time voice‑first medical consultations. Integrated Clerk authentication and NeonDB storage for secure patient data, and deployed with scalable cloud APIs.',
    category: 'Major Projects',
    thumbnail: '/blogs-images/default.jpg', // Replace with your image
    images: ['/blogs-images/default.jpg'],
    technologies: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'AssemblyAI' },
      { name: 'Clerk' },
      { name: 'NeonDB' }
    ],
    features: [
      'Real-time voice-to-text conversion',
      'AI medical consultation logic',
      'Secure patient data storage',
      'User authentication'
    ],
    links: {
      live: 'https://medical-voice-ai-agent-vqa8.vercel.app/',
      github: 'https://github.com/Darshan3690/medical-voice-ai-agent'
    },
    timeline: '2024'
  },
  {
    id: 'mlcs',
    title: 'MlCS – Multi‑LLM Chat System',
    tagline: 'PWA to compare GPT, Gemini, and Claude chats side by side in real time.',
    description: 'Engineered a Progressive Web App with Next.js and React that lets users chat with multiple LLMs in parallel. Implemented secure API key management, persistent chat history, and export functionality for reliable, low‑latency conversations.',
    category: 'Projects',
    thumbnail: '/blogs-images/default.jpg',
    images: ['/blogs-images/default.jpg', '/blogs-images/default.jpg'],
    technologies: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'PWA' }
    ],
    features: [
      'Multi-LLM side-by-side comparison',
      'Secure API key management',
      'Export chat history',
      'PWA support for mobile'
    ],
    links: {
      live: 'https://multi-llm-chat-ne88.vercel.app/',
      github: 'https://github.com/Darshan3690/multi-llm-chat'
    },
    timeline: '2024'
  }
];
