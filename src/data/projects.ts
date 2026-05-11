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
    category: 'personal Projects',
    thumbnail: '/llm2.png',
    images: ['/llm2.png', '/llm1.png','/llm3.png'],
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
    category: 'personal Projects',
    thumbnail: '/tham.png',
    images: ['/pro1.png', '/pro3.png'],
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
        'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-promptengineering-aitools-ugcPost-7398944852903641088-tE6w?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEXu_QQBjqqm0Zd1bsuDytG00j7KloNkETU',
        
      youtube: 'https://youtu.be/GBa4a_T0ePg?si=-K0XwCLGettLvuCc',
    },
    timeline: '2024',
  },
//   {
//   id: 'ocms',
//   title: 'OCMS – Online College Canteen Management System',
//   tagline:
//     'Full-stack web platform for seamless food ordering, real-time tracking, and canteen management.',
//   description:
//     'Developed a scalable web-based canteen management system using Next.js, Supabase, and Clerk authentication. The platform enables students and staff to browse menus, place orders, make secure payments, and track order status in real time. Implemented a role-based admin dashboard for managing menu items, monitoring orders, and generating sales reports. Designed to reduce queues, eliminate manual errors, and improve operational efficiency.',
//   category: 'personal Projects',
//   thumbnail: '/ocms-thumb.png',
//   images: ['/ocms1.png', '/ocms2.png'],
//   technologies: [
//     { name: 'Next.js' },
//     { name: 'TypeScript' },
//     { name: 'Supabase (PostgreSQL)' },
//     { name: 'Clerk Authentication' },
//     { name: 'Tailwind CSS' },
//     { name: 'Prisma ORM' },
//   ],
//   features: [
//     'Role-based authentication (Admin / Student / Staff)',
//     'Digital menu browsing with dynamic updates',
//     'Smart cart system for order management',
//     'Online food ordering with real-time status tracking',
//     'Secure authentication and payment-ready architecture',
//     'Admin dashboard for menu, orders, and analytics',
//     'Sales reporting and order insights',
//     'Supabase-backed secure database and storage',
//     'Scalable and responsive UI for campus-wide usage',
//   ],
//   links: {
//     github: 'https://github.com/YOUR_REPO_LINK',
//     linkedin: 'https://www.linkedin.com/YOUR_POST_LINK',
//     youtube: 'https://youtube.com/YOUR_DEMO_LINK',
//   },
//   timeline: '2026',
// }
{
  id: 'devpocket',
  title: 'The Dev Pocket – Developer Learning Hub',
  tagline:
    'All-in-one platform for curated resources, interactive tools, and structured developer roadmaps.',
  description:
    'Built a community-driven developer platform using Next.js, Supabase, and Clerk that provides curated learning resources, interactive tools, and guided roadmaps for students and developers. Designed a scalable full-stack architecture supporting authentication, database integration, and contributor workflows. Actively maintained as an open-source project with Hacktoberfest participation, enabling developers worldwide to learn, build, and contribute effectively. Designed to scale as a developer ecosystem platform, not just a resource website.',
  category: 'My open source projects',
  thumbnail: '/dev_1',
  images: ['/dev_2.png', '/dev_3.png', '/dev_1_1.png', '/dev_1_2.png', '/dev_1_3.png', '/dev_1_4.png', '/dev_1_5.png', '/dev_1_6.png', '/dev_1_7.png'],
  technologies: [
    { name: 'Next.js' },
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'Tailwind CSS' },
    { name: 'Node.js (API Routes)' },
    { name: 'Supabase (PostgreSQL)' },
    { name: 'Prisma ORM' },
    { name: 'Clerk Authentication' },
    { name: 'Vercel' },
  ],
  metrics: [
    '🌍 Open-source platform with active contributors',
    '🚀 Production-ready deployment on Vercel',
    '📦 Scalable architecture using Supabase + Prisma',
    '🤝 Hacktoberfest-ready with structured contribution system',
  ],
  features: [
    'Curated learning resources for Web Dev, DSA, AI/ML, and emerging technologies',
    'Interactive tools for hands-on coding and productivity',
    'Structured developer roadmaps for guided learning paths',
    'Community-driven open source platform with contributor support',
    'Authentication system with Clerk for secure user access',
    'Supabase + Prisma-powered scalable database architecture',
    'Developer-friendly onboarding with clear setup and documentation',
    'Real-world open source collaboration experience',
  ],
  links: {
    github: 'https://github.com/Darshan3690/The-Dev-Pocket',
    live: 'https://the-dev-pocket-961a.vercel.app/',
    linkedin: 'https://www.linkedin.com/YOUR_POST_LINK',
  },
  timeline: '2025',
},{
  id: 'visitor-management',
  title: 'Visitor Management System',
  tagline:
    'Smart web-based system to streamline visitor check-ins, enhance security, and digitize access control.',
  description:
    'Developed a full-stack Visitor Management System during a hackathon (Web Horizons, Marwadi University) to modernize and automate visitor handling for institutions and organizations. The platform enables seamless visitor check-in/check-out, real-time host notifications, and secure visitor profiling. Built with a responsive and user-friendly interface, the system improves operational efficiency and enhances security through structured data tracking and reporting. Designed and delivered within a hackathon environment, demonstrating rapid problem-solving, product thinking, and execution under constraints.',
  category: 'Hackathons',
  thumbnail: '/hack_1.png',
  images: ['/hack_1.png', '/hack_2.png','/hack_3.png','/hack_4.png','/hack_5.png'],
  technologies: [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
  ],
  metrics: [
    '🏆 Built during Web Horizons Hackathon (Marwadi University)',
    '🔐 Improved visitor tracking and security workflows',
    '📊 Structured data handling for reporting and insights',
    '📱 Fully responsive design (mobile + desktop)',
  ],
  features: [
    'Secure visitor check-in and check-out system',
    'Visitor profiling with detailed tracking',
    'Real-time host notification system',
    'Customizable reporting and analytics',
    'Integration-ready with access control systems',
    'Responsive UI for cross-device accessibility',
    'User-friendly interface for smooth onboarding',
  ],
  links: {
    github: 'https://github.com/Darshan3690/Web_horizonss',
    live: 'https://darshan3690.github.io/Web_horizonss/',
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_certificate-of-webhorizon-ugcPost-7252363430794326016-QoB8',
  },
  timeline: '2024',
},
{
  id: 'fitmentor',
  title: 'FitMentor – AI-Powered Athlete Management Platform',
  tagline:
    'Comprehensive platform to track athlete performance, health, and career growth with AI-driven insights.',
  description:
    'Built FitMentor as a cross-platform solution for athletes to manage performance, health, and career growth in a unified ecosystem. Developed using React (Web) with a Node.js backend, the platform provides real-time performance tracking, wearable integration, and AI-driven insights for personalized recommendations. The system enables athletes to monitor training progress, predict injury risks, and manage financial and career aspects effectively. Submitted as part of the GDG on Campus Solution Challenge India, demonstrating real-world problem solving, collaboration, and scalable product development. Focused on solving real-world athlete challenges through data-driven insights, combining performance analytics, health monitoring, and career planning into a single intelligent system.',
  category: 'Hackathons',
  thumbnail: '/HACK_2_THUM.png',
  images: ['/hack_2_1.png', '/hack_2_2.png', '/hack_2_3.png', '/hack_2_4.png', '/hack_2_5.png', '/hack_2_6.png', '/hack_2_7.png', '/hack_2_8.png', '/hack_2_cer.png'],
  technologies: [
    { name: 'React (Web)' },
    { name: 'Node.js (Backend)' },
    { name: 'JavaScript / TypeScript' },
    { name: 'API Integration (Wearables)' },
  ],
  metrics: [
    '🏆 Submitted to GDG on Campus Solution Challenge India',
    '📊 Real-time athlete performance tracking system',
    '⌚ Wearable integration for live health data',
    '🤖 AI-driven recommendations for training and injury prevention',
  ],
  features: [
    'Real-time performance tracking for athletes',
    'AI-based injury risk prediction and health monitoring',
    'Wearable device integration for live data syncing',
    'Career and financial growth tracking for athletes',
    'Personalized training recommendations',
    'Cross-platform web platform with scalable backend',
    'Node.js-powered backend for handling real-time data and APIs',
  ],
  links: {
    github: 'https://github.com/Darshan3690/fitmentor',
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_keepbuilding-keeplearning-buildforimpact-activity-7357468929964892160-jX6r',
    certificate: 'https://certificate.hack2skill.com/user/gdgscsubmissions/2025H2S01GSC-I02930',
  },
  team: [
    'Darshan Rajput',
    'Harsh Kubavat',
    'Manav Mandalia',
    'Ravi Kumar',
  ],
  timeline: '2025',
},{
  id: 'coolclimate',
  title: 'CoolTheClimate – Personal Carbon Footprint Tracker',
  tagline:
    'A cross-platform mobile app to track, analyze, and reduce personal carbon emissions through actionable insights.',
  description:
    'Developed CoolTheClimate as a mobile-first solution to help individuals understand and reduce their environmental impact. Built using React Native (Expo) with Firebase backend services, the app enables users to track daily activities such as transportation, food consumption, and energy usage to calculate their carbon footprint in real time. Integrated interactive dashboards for visualizing emissions and implemented personalized recommendations to encourage sustainable lifestyle changes. Created during a 36-hour national-level hackathon (Code Carnival Season 02 at Atmiya University), showcasing rapid prototyping, real-world problem solving, and collaborative development. The project focuses on raising awareness about climate change and empowering users with data-driven insights to make eco-friendly decisions.',
  category: 'Hackathons',
  thumbnail: '/hack_3_thum.png',
  images: ['/hack_3_1.png', '/hack_3_2.jpeg', '/hack_3_3.jpeg', '/hack_3_4.jpeg', '/hack_3_5.jpeg', '/hack_3_6.jpeg', '/hack_3_7.jpeg'],
  technologies: [
    { name: 'React Native (Expo)' },
    { name: 'Firebase (Auth & Realtime DB)' },
    { name: 'JavaScript' },
    { name: 'Mobile UI/UX Design' },
  ],
  metrics: [
    '🏆 Built in 36-hour National Level Hackathon (Code Carnival S02)',
    '📊 Real-time carbon footprint tracking system',
    '🌍 Focused on sustainability and climate awareness',
    '⚡ Rapid MVP development with full working prototype',
  ],
  features: [
    'Track daily carbon emissions from lifestyle activities',
    'Interactive dashboards for emission visualization',
    'Personalized suggestions to reduce carbon footprint',
    'User authentication and real-time data sync via Firebase',
    'Cross-platform mobile app (Android, iOS, Web via Expo)',
    'Simple and intuitive UI for better user engagement',
    'Scalable architecture for future AI-based insights',
  ],
  links: {
    github: 'https://github.com/Darshan3690/coolclimate',
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_hackathon-techforgood-cleantech-ugcPost-7385152513051897856-cBIS',
    certificate: 'https://drive.google.com/file/d/1TVH6e8HhUHevof1hDvhQjn2Jkj_eIAM_/view?usp=sharing',
  },
  team: [
    'Darshan Rajput',
    'Heet Santoki',
    'Prem Parmar',
  ],
  timeline: '2026',
},{
  id: 'agetic-ai-inventory',
  title: 'Agetic AI – Inventory Management System',
  tagline:
    'An intelligent inventory system using Agetic AI principles for ethical, context-aware decision making and automation.',
  description:
    'Built an intelligent inventory management system as my first hands-on exploration into Agetic AI — a paradigm that combines agency-driven logic, ethical reasoning, and real-world context awareness. Developed using Python with a custom AgeticAI SDK, the system integrates with Google Sheets as a backend datastore and leverages Google Gemini for intelligent decision-making. Implemented a robust upsert mechanism to automatically check item existence, update quantities, or insert new records seamlessly. Automated workflows using n8n to enable real-time synchronization and decision execution. This project demonstrates the practical application of ethical AI systems in real-world scenarios, focusing not just on performance but responsible and context-aware automation.',
  category: 'Learning Based Projects',
  thumbnail: '/ai_agent_1_thum.png',
  images: ['/ai_agent_1_1.png', '/ai_agent_1_2.png', '/ai_agent_1_3.png'],
  technologies: [
    { name: 'Python (Custom AgeticAI SDK)' },
    { name: 'Google Sheets (Datastore)' },
    { name: 'Google Gemini AI' },
    { name: 'n8n (Automation Workflows)' },
  ],
  metrics: [
    '🧠 First hands-on implementation of Agetic AI principles',
    '⚙️ Automated upsert logic (update + insert) using AI decision flow',
    '🔗 Integrated multiple systems (Sheets + Gemini + n8n)',
    '🌍 Focused on ethical and context-aware AI automation',
  ],
  features: [
    'Check if an item exists in inventory (Google Sheets)',
    'Insert new item automatically if not present',
    'Update existing item data (quantity, fields) intelligently',
    'AI-driven decision-making using Gemini model',
    'Automation pipelines using n8n for seamless workflows',
    'Context-aware and ethically guided logic system',
    'Lightweight and scalable architecture for real-world use cases',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-ageticai-ethicalai-ugcPost-7331523440073428992-B7b2',
  },
  team: [
    'Darshan Rajput',
  ],
  timeline: '2026',
},{
  id: 'email-responder-ai',
  title: 'Email Responder AI Agent',
  tagline:
    'AI-powered email automation system that classifies, prioritizes, and generates professional draft replies.',
  description:
    'Developed an intelligent Email Responder AI Agent as part of my exploration into AI-driven automation systems. The solution leverages OpenAI APIs, Python, and n8n workflows to process incoming emails, classify them based on context (such as sponsorships, complaints, and queries), and generate professional, context-aware draft responses. Implemented priority detection to flag urgent emails for faster action. Designed a scalable automation pipeline that reduces manual effort, improves response efficiency, and enhances communication quality. This project demonstrates practical application of AI in real-world productivity workflows, focusing on automation, natural language understanding, and human-in-the-loop systems.',
  category: 'Learning Based Projects',
  thumbnail: '/ai_agent_2_thumb.png',
  images: ['/ai_agent_2_1.jpg', '/ai_agent_2_2.jpeg'],
  technologies: [
    { name: 'Python' },
    { name: 'OpenAI API' },
    { name: 'n8n (Automation Workflows)' },
    { name: 'Gmail API Integration' },
  ],
  metrics: [
    '🤖 Automated email classification and response generation',
    '📩 Reduced manual response effort using AI-generated drafts',
    '⚡ Real-time workflow automation using n8n pipelines',
    '🚨 Priority detection system for urgent emails',
  ],
  features: [
    'Automatic classification of emails (sponsorships, complaints, queries)',
    'Context-aware draft reply generation using AI',
    'Priority detection and flagging of urgent messages',
    'Integration with Gmail for real-time email processing',
    'Human-in-the-loop workflow for reviewing drafts before sending',
    'End-to-end automation pipeline using n8n',
    'Scalable architecture for business and support use cases',
  ],
  links: {
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-automation-n8n-ugcPost-7333357047561744384-79cE',
  },
  team: [
    'Darshan Rajput',
  ],
  timeline: '2026',
},{
  id: 'ai-receptionist-system',
  title: 'AI Receptionist System',
  tagline:
    'AI-powered front desk automation system for real-time customer interaction, appointment scheduling, and emergency handling.',
  description:
    'Developed an AI Receptionist System to automate customer communication and front desk operations using conversational AI and workflow automation. The system enables real-time interaction with customers via chat or voice, automatically books appointments using Google Calendar, and logs all activities into Google Sheets. Integrated Vapi AI for natural language understanding and intent detection, combined with n8n workflows for orchestrating actions like booking, inquiry logging, and emergency handling. Implemented intelligent duplicate detection, priority-based routing, and real-time alerts for emergency situations. Designed as a scalable, always-available solution to reduce manual workload, improve efficiency, and deliver seamless customer experiences across multiple channels.',
 category: 'Learning Based Projects',
  thumbnail: '/ai_agent_3_thumb.png',
  images: ['/ai_agent_3_1.jpeg', '/ai_agent_3_2.jpeg', '/ai_agent_3_3.jpeg', '/ai_agent_3_4.jpeg', '/ai_agent_3_5.jpeg', '/ai_agent_3_6.jpeg', '/ai_agent_3_7.jpeg', '/ai_agent_3_8.jpeg'],
  technologies: [
    { name: 'Vapi AI' },
    { name: 'n8n (Workflow Automation)' },
    { name: 'Google Sheets API' },
    { name: 'Google Calendar API' },
    { name: 'Node.js' },
  ],
  metrics: [
    '🤖 24/7 automated customer interaction system',
    '📅 Automated appointment booking with calendar sync',
    '⚡ Real-time workflow execution using n8n pipelines',
    '🚨 Instant emergency detection and alert system',
  ],
  features: [
    'Real-time chat and voice interaction with customers',
    'Automatic appointment scheduling with Google Calendar integration',
    'Duplicate booking detection using Google Sheets',
    'Emergency keyword detection and instant alert system',
    'Inquiry logging with timestamped records',
    'Multi-channel support (Web, WhatsApp, Voice)',
    'End-to-end workflow automation using n8n',
    'Scalable architecture for business and service use cases',
  ],
  links: {
    github: 'https://github.com/Darshan3690/AI-Receptionist',
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-automation-n8n-activity-7387369857253703680-ZTKz',
    // demo: 'https://youtu.be/GBa4a_T0ePg?si=FidqWQYP6zuoRHhR',
    youtube: 'https://youtu.be/GBa4a_T0ePg?si=FidqWQYP6zuoRHhR'
  },
  team: [
    'Darshan Rajput',
  ],
  timeline: '2026',
},
{
  id: 'ai-twitter-agent',
  title: 'AI Twitter Automation Agent',
  tagline:
    'AI-powered multi-agent system that generates, and posts tweets automatically using MCP Server.',
  description:
    'Developed an AI Twitter Automation Agent leveraging MCP Server (Multi-agent Control Protocol), Gemini AI, and Twitter API to fully automate content creation and posting workflows. The system generates tweets based on trending topics and predefined themes, schedules posts, and publishes them automatically. Implemented engagement analysis to optimize future tweet quality and relevance. Built using Node.js, the solution demonstrates real-world application of AI agents in social media automation, focusing on scalability, intelligent content generation, and multi-agent orchestration.',
  category: 'Learning Based Projects',
  thumbnail: '/ai_agent_4_thumb.jpeg',
  images: ['/ai_agent_4_1.jpg', '/ai_agent_4_2.jpg'],
  technologies: [
    { name: 'Node.js' },
    { name: 'Gemini AI' },
    { name: 'Twitter API' },
    { name: 'MCP Server (Multi-agent Control Protocol)' },
  ],
  metrics: [
    '🤖 Automated tweet generation using AI agents',
    '📲 Scheduled and auto-posted tweets via Twitter API',
    '⚡ Real-time content automation with MCP orchestration',
    '📊 Engagement-based optimization for better reach',
  ],
  features: [
    'AI-generated tweets based on trending topics and themes',
    'Automated scheduling and posting system',
    'Integration with Twitter API for real-time publishing',
    'Multi-agent orchestration using MCP Server',
    'Engagement analysis to improve future tweet performance',
    'Scalable architecture for continuous content automation',
    'Customizable themes and content strategies',
  ],
  links: {
    github: 'https://github.com/Darshan3690/Twiteer-Ai',
    linkedin: 'https://www.linkedin.com/posts/darshan-rajput-4b0b23288_ai-twitterbot-mcpserver-ugcPost-7339504941880741889-ZLi9',
  },
  team: [
    'Darshan Rajput',
  ],
  timeline: '2026',
}
];
