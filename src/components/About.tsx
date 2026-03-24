'use client';

import { Trophy, UserRoundSearch } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  return (
    <section id="about" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
        <UserRoundSearch className="h-8 w-8 text-accent" />
        About Me
      </h2>
      <div className="space-y-6">
        <div className="text-gray-300 leading-relaxed">
          <div>
            I'm <strong className="text-white">Darshan Rajput</strong>, an{' '}
            <strong className="text-white">Innovative Developer</strong>{' '}
            specializing in AI integration, scalable frontend, and backend
            development. I build high-performance web applications using the
            MERN stack and Next.js, with hands-on experience in AI-powered
            features. I love leveraging modern web technologies to ship
            impactful products.
          </div>
          <div className="mt-4">
            I work primarily with{' '}
            <Badge className="bg-gray-800 text-gray-200 hover:bg-gray-700 border-0 rounded-lg px-2 py-0.5 inline-flex items-center gap-1.5 h-[1.5em] align-middle font-semibold text-sm leading-none">
              <Image
                src="/svg-icons/typescript.svg"
                alt="TypeScript"
                width={14}
                height={14}
                className="w-3.5 h-3.5 flex-shrink-0"
              />
              <span className="font-semibold">TypeScript</span>
            </Badge>
            ,{' '}
            <Badge className="bg-gray-800 text-gray-200 hover:bg-gray-700 border-0 rounded-lg px-2 py-0.5 inline-flex items-center gap-1.5 h-[1.5em] align-middle font-semibold text-sm leading-none">
              <Image
                src="/svg-icons/nextjs.svg"
                alt="Next.js"
                width={14}
                height={14}
                className="w-3.5 h-3.5 flex-shrink-0"
              />
              <span className="font-semibold">Next.js</span>
            </Badge>
            , and modern frontend tooling. On the backend, I work with Node.js
            and Express to design architectures capable of handling
            <strong className="text-white"> 1,000+ concurrent users</strong>,
            while integrating AI APIs to deliver intelligent experiences.
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-accent" />
            Key Achievements
          </h4>
          <ul className="text-gray-300 space-y-2">
            <li>
              Improved application performance by
              <strong className="text-white"> 25%</strong> and designed
              backend architectures ready for
              <strong className="text-white"> 1,000+ concurrent users</strong>.
            </li>
            <li>
              Built <strong className="text-white">MediAI</strong>, a
              medical voice AI agent that delivers real-time, voice‑first
              consultations using Next.js, TypeScript, AssemblyAI, Clerk, and
              NeonDB.
            </li>
            <li>
              Engineered <strong className="text-white">MlCS</strong>, a
              multi‑LLM chat system to compare GPT, Gemini, and Claude side by
              side with secure API‑key handling and persistent history.
            </li>
            <li>
              Created <strong className="text-white">PromptGenius</strong>, a
              Chrome extension that turns basic prompts into optimized,
              CRISPE‑style prompts, improving AI response quality and
              consistency.
            </li>
            <li>
              Active open‑source contributor through programs like
              Hacktoberfest and GirlScript Summer of Code, collaborating with
              global developer communities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
