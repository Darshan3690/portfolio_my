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
            <strong className="text-white">Full Stack Developer & Open Source Contributor</strong>{' '}
            at Marwadi University, focused on LLM-powered applications, voice AI
            agents, and multi-model orchestration systems. I build production
            software that moves from prompt design and model selection to
            deployment and measurable user impact.
          </div>
          <div className="mt-4">
            My stack spans{' '}
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
            , plus Python, Node.js, SQL, TensorFlow, Pandas, NumPy, and cloud
            deployment with Vercel and AWS. I focus on building reliable AI
            pipelines, not just wiring APIs together.
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-accent" />
            Key Achievements
          </h4>
          <ul className="text-gray-300 space-y-2">
            <li>
              Built <strong className="text-white">MediAI</strong>, a medical
              voice AI agent that improved accessibility for
              <strong className="text-white"> 40%+</strong> of target users.
            </li>
            <li>
              Engineered <strong className="text-white">MLCS</strong>, a
              multi-LLM chat system that supported
              <strong className="text-white"> 1,000+ concurrent users</strong>
              and side-by-side GPT, Gemini, and Claude workflows.
            </li>
            <li>
              Shipped <strong className="text-white">FitMentor</strong> and
              <strong className="text-white"> CoolTheClimate</strong> as full
              end-to-end products during hackathons and community builds.
            </li>
            <li>
              Served as an open-source maintainer in Hacktoberfest and GSSOC,
              reviewing PRs, mentoring contributors, and keeping community
              projects moving.
            </li>
            <li>
              Currently exploring applied ML, data science internships, and
              forward-deployed AI engineer roles.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
