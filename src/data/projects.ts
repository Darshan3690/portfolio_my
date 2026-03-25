import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'mediai',
    title: 'MediAI – Medical Voice AI Agent',
    tagline: 'Voice‑first virtual doctor for real‑time medical conversations powered by AI.',
    description:
      'Developed an AI‑powered virtual doctor using Next.js, TypeScript, and AssemblyAI to deliver real‑time voice‑first medical consultations. Integrated Clerk authentication and NeonDB storage for secure patient data, and deployed with scalable cloud APIs.',
    category: 'personal Projects',
    thumbnail: '/m1.png',
    images: ['/m2.png', '/m3.png', '/m4.png', '/m5.png', '/m6.png', '/m7.png', '/m8.png', '/m9.png', '/m10.png'],
    technologies: [
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'AssemblyAI' },
      { name: 'Clerk' },
      { name: 'NeonDB' },
    ],
    features: [
      'Real-time voice-to-text conversion',
      'AI medical consultation logic',
      'Secure patient data storage',
      'User authentication',
    ],
    links: {
      live: 'https://medical-voice-ai-agent-vqa8.vercel.app/',
      github: 'https://github.com/Darshan3690/medical-voice-ai-agent',
      linkedin:
        'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-healthcareai-voiceai-ugcPost-7350578643233865731-tty3?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEXu_QQBjqqm0Zd1bsuDytG00j7KloNkETU',
      youtube: 'https://youtu.be/GBa4a_T0ePg?si=-K0XwCLGettLvuCc',
    },
    timeline: '2024',
  },
  {
    id: 'mlcs',
    title: 'MlCS – Multi‑LLM Chat System',
    tagline: 'PWA to compare GPT, Gemini, and Claude chats side by side in real time.',
    description:
      'Engineered a Progressive Web App with Next.js and React that lets users chat with multiple LLMs in parallel. Implemented secure API key management, persistent chat history, and export functionality for reliable, low‑latency conversations.',
    category: 'Projects',
    thumbnail: '/blogs-images/default.jpg',
    images: ['/blogs-images/default.jpg', '/blogs-images/default.jpg'],
    technologies: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'PWA' },
    ],
    features: [
      'Multi-LLM side-by-side comparison',
      'Secure API key management',
      'Export chat history',
      'PWA support for mobile',
    ],
    links: {
      live: 'https://multi-llm-chat-ne88.vercel.app/',
      github: 'https://github.com/Darshan3690/multi-llm-chat',
      linkedin:
        'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-llm-artificialintelligence-activity-7365425248768339968-tbP8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEXu_QQBjqqm0Zd1bsuDytG00j7KloNkETU',
      youtube: 'https://youtu.be/GBa4a_T0ePg?si=-K0XwCLGettLvuCc',
    },
    timeline: '2024',
  },
  {
    id: 'promptgenius',
    title: 'PromptGenius – AI Prompt Enhancer',
    tagline:
      'Chrome extension that transforms basic prompts into CRISPE-optimized, professional AI prompts instantly.',
    description:
      'Built a powerful Chrome extension using Manifest V3 that enhances user prompts into structured, high-quality CRISPE-formatted prompts. Designed a fully client-side engine ensuring zero data leakage, no API dependency, and instant performance. Integrated multi-model support, dynamic UI interactions, and seamless in-page enhancement workflows.',
    category: 'Projects',
    thumbnail: '/blogs-images/default.jpg',
    images: ['/blogs-images/default.jpg', '/blogs-images/default.jpg'],
    technologies: [
      { name: 'JavaScript' },
      { name: 'Chrome Extension (Manifest V3)' },
      { name: 'Tailwind CSS' },
      { name: 'GSAP' },
      { name: 'Jest' },
    ],
    features: [
      'CRISPE framework-based prompt optimization',
      'Fully client-side processing (no API keys required)',
      'Multi-model support (GPT, Gemini, Claude)',
      'Floating in-page enhancer button',
      'Right-click context menu integration',
      'Animated prompt generation with streaming UI',
      'Multiple tone/style variations (Professional, Creative, Technical, Concise)',
      'Instant prompt enhancement with zero latency backend',
    ],
    links: {
      github: 'https://github.com/Darshan3690/PromptGenius',
      linkedin:
        'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-promptengineering-aitools-activity-7398944998328532992-C8le',
    },
    timeline: '2024',
  },
];
