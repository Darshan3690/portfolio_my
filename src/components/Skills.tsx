'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  BarChart3,
  Database,
  FlaskConical,
  Link,
  MonitorSmartphone,
  RefreshCw,
  Route,
  ServerCog,
  Shield,
  Terminal,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

type SkillIcon =
  | { type: 'svg'; src: string }
  | { type: 'lucide'; icon: LucideIcon };

type Skill = {
  name: string;
  icon: SkillIcon;
};

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
};

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: MonitorSmartphone,
      skills: [
        {
          name: 'Next.js',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
          },
        },
        {
          name: 'React.js',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
          },
        },
        {
          name: 'JavaScript',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          },
        },
        {
          name: 'TypeScript',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          },
        },
        {
          name: 'Tailwind CSS',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          },
        },
        {
          name: 'ShadCN UI',
          icon: { type: 'lucide', icon: Wrench },
        },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: ServerCog,
      skills: [
        {
          name: 'Node.js',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
          },
        },
        { name: 'Express.js', icon: { type: 'lucide', icon: Route } },
        {
          name: 'MongoDB',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          },
        },
        {
          name: 'RESTful APIs',
          icon: { type: 'lucide', icon: Link },
        },
        {
          name: 'JWT Authentication',
          icon: { type: 'lucide', icon: Shield },
        },
        {
          name: 'MERN Stack',
          icon: { type: 'lucide', icon: ServerCog },
        },
        {
          name: 'C++',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
          },
        },
      ],
    },
    {
      title: 'Cloud & Deployment',
      icon: Database,
      skills: [
        {
          name: 'Vercel',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
          },
        },
        {
          name: 'Netlify',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
          },
        },
        {
          name: 'Render',
          icon: { type: 'lucide', icon: ServerCog },
        },
        {
          name: 'AWS',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg',
          },
        },
        {
          name: 'Git & GitHub',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
          },
        },
        {
          name: 'Cloudinary',
          icon: { type: 'lucide', icon: Database },
        },
      ],
    },
    {
      title: 'AI & Automation',
      icon: FlaskConical,
      skills: [
        {
          name: 'AI API Integration',
          icon: { type: 'lucide', icon: FlaskConical },
        },
        {
          name: 'Prompt Engineering',
          icon: { type: 'lucide', icon: RefreshCw },
        },
        {
          name: 'AI‑powered Features',
          icon: { type: 'lucide', icon: MonitorSmartphone },
        },
        {
          name: 'n8n Workflows',
          icon: { type: 'lucide', icon: Link },
        },
      ],
    },
    {
      title: 'Other Skills',
      icon: Terminal,
      skills: [
        {
          name: 'Teamwork & Communication',
          icon: { type: 'lucide', icon: Terminal },
        },
        {
          name: 'Project Management',
          icon: { type: 'lucide', icon: BarChart3 },
        },
        {
          name: 'Agile Methodologies',
          icon: { type: 'lucide', icon: Wrench },
        },
      ],
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6 md:mb-8 text-white flex items-center gap-3">
        <BarChart3 className="h-7 w-7 md:h-8 md:w-8 text-accent" />
        My Stack
      </h2>
      <div className="space-y-4 md:space-y-8">
        {skillCategories.map((category, index) => {
          const CategoryIcon = category.icon;

          return (
            <div key={index} className="p-4 md:p-6 rounded-lg bg-gray-900/50">
              <h3 className="text-xl font-semibold mb-3 md:mb-4 text-purple-400 flex items-center gap-2">
                <CategoryIcon className="h-5 w-5" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-gray-800 text-gray-200 hover:bg-gray-700 transition-colors flex items-center gap-2"
                  >
                    {skill.icon.type === 'svg' ? (
                      <Image
                        src={skill.icon.src}
                        alt={`${skill.name}-svg`}
                        width={20}
                        height={20}
                        className={`${skill.name === 'Next.js' ? 'invert' : ''}`}
                      />
                    ) : (
                      <skill.icon.icon className="h-4 w-4" />
                    )}

                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
