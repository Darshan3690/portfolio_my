'use client';

import { ExternalLink, FolderGit2, Play } from 'lucide-react';

const projects = [
  {
    id: 'mediai',
    title: 'MediAI – Medical Voice AI Agent',
    tagline:
      'Voice‑first virtual doctor for real‑time medical conversations powered by AI.',
    description:
      'Developed an AI‑powered virtual doctor using Next.js, TypeScript, and AssemblyAI to deliver real‑time voice‑first medical consultations. Integrated Clerk authentication and NeonDB storage for secure patient data, and deployed with scalable cloud APIs.',
    repo: 'https://github.com/Darshan3690/medical-voice-ai-agent',
    org: 'Personal Project',
    tech: ['Next.js', 'TypeScript', 'React', 'AssemblyAI', 'Clerk', 'NeonDB'],
    videoNativeUrl: '',
    liveUrl: 'https://medical-voice-ai-agent-vqa8.vercel.app/',
  },
  {
    id: 'mlcs',
    title: 'MlCS – Multi‑LLM Chat System',
    tagline:
      'PWA to compare GPT, Gemini, and Claude chats side by side in real time.',
    description:
      'Engineered a Progressive Web App with Next.js and React that lets users chat with multiple LLMs in parallel. Implemented secure API key management, persistent chat history, and export functionality for reliable, low‑latency conversations.',
    repo: 'https://github.com/Darshan3690/multi-llm-chat',
    org: 'Personal Project',
    tech: ['Next.js', 'React', 'TypeScript', 'PWA'],
    videoNativeUrl: '',
    liveUrl: 'https://multi-llm-chat-ne88.vercel.app/',
  },
  {
    id: 'promptgenius',
    title: 'PromptGenius – AI Prompt Enhancer',
    tagline:
      'Chrome extension that upgrades basic prompts into optimized CRISPE prompts.',
    description:
      'Built a Chrome extension that turns simple prompts into structured, CRISPE‑formatted prompts for any AI model. Designed a responsive UI with a client‑side engine, so users get instant improvements without needing API keys.',
    repo: 'https://github.com/Darshan3690/promptgenius',
    org: 'Personal Project',
    tech: ['JavaScript', 'HTML', 'CSS', 'Chrome API'],
    videoNativeUrl: '',
    liveUrl: '',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
        <FolderGit2 className="h-7 w-7 md:h-8 md:w-8 text-accent" />
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map(project => (
          <article
            key={project.id}
            className="rounded-xl bg-gray-900/50 border border-gray-700/50 overflow-hidden hover:bg-gray-900/70 hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="relative aspect-video w-full bg-gray-900/80 flex items-center justify-center min-h-[200px] overflow-hidden rounded-t-xl">
              {project.videoNativeUrl ? (
                <video
                  src={project.videoNativeUrl}
                  controls
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3 text-gray-500 px-4">
                  <div className="rounded-full bg-gray-800 p-4">
                    <Play className="h-8 w-8 text-gray-600" />
                  </div>
                  <p className="text-sm text-center max-w-xs">
                    Demo video placeholder — add your CX Linux distro video URL
                    in the Projects component.
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400/90 text-sm mt-0.5">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors shrink-0"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors shrink-0"
                    >
                      View Code
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-gray-800 text-gray-400 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
