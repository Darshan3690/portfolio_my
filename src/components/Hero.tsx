'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FileText, Linkedin } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const resumeUrl = 'https://drive.google.com/file/d/19ADwPShLoRqHHj9ZtpDsNO1TYML9ig1G/view';
const cvUrl = 'https://drive.google.com/file/d/1oRjWdYK9gLALcCmsQNnw_dTxrZzrWiAh/view';

export const Hero = () => {
  return (
    <section className="mb-12 pt-5 sm:pt-6 md:pt-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
        <div className="flex-shrink-0 md:order-2">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-white/20 mx-auto md:mx-0">
            <AvatarImage src="/avatar.png" alt="Darshan Rajput" />
            <AvatarFallback className="text-2xl font-bold bg-muted text-foreground">
              DR
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 min-w-0 md:pr-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-3 text-white text-left tracking-tight leading-tight">
            AI-focused Full Stack Developer
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-400 mb-6">
            Open-source builder | LLM Integration | Next.js · React · Python
          </h2>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="inline-flex overflow-hidden rounded-lg border border-white/20 bg-white/10">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-all duration-200 hover:scale-[1.02]"
                aria-label="Open Resume"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <span className="w-px bg-white/15" aria-hidden="true" />
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-all duration-200 hover:scale-[1.02]"
                aria-label="Open CV"
              >
                <FileText className="w-4 h-4" />
                CV
              </a>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get in touch
            </a>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 animate-ping opacity-75" />
              </span>
              Open to work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
