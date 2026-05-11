'use client';

import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  BarChart3,
  Cloud,
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
      title: 'Languages',
      icon: MonitorSmartphone,
      skills: [
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
          name: 'Python',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          },
        },
        {
          name: 'SQL',
          icon: {
            type: 'lucide',
            icon: Database,
          },
        },
        {
          name: 'Java',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          },
        },
        // {
        //   name: 'C++',
        //   icon: {
        //     type: 'svg',
        //     src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
        //   },
        // },
      ],
    },
    {
      title: 'Frontend',
      icon: ServerCog,
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
          name: 'Tailwind CSS',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          },
        },
        { name: 'ShadCN UI', icon: { type: 'lucide', icon: Wrench } },
        { name: 'HTML5 / CSS3', icon: { type: 'lucide', icon: MonitorSmartphone } },
        { name: 'PWA', icon: { type: 'lucide', icon: RefreshCw } },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: Database,
      skills: [
        {
          name: 'Node.js',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
          },
        },
        {
          name: 'Express.js',
          icon: { type: 'lucide', icon: Route },
        },
        { name: 'REST APIs', icon: { type: 'lucide', icon: Link } },
        { name: 'JWT Auth', icon: { type: 'lucide', icon: Shield } },
        { name: 'GitHub Actions', icon: { type: 'lucide', icon: RefreshCw } },
        { name: 'CI/CD', icon: { type: 'lucide', icon: ServerCog } },
      ],
    },
    {
      title: 'AI & Automation',
      icon: FlaskConical,
      skills: [
        { name: 'OpenAI API', icon: { type: 'lucide', icon: FlaskConical } },
        { name: 'Prompt Engineering', icon: { type: 'lucide', icon: RefreshCw } },
        { name: 'AI Agents', icon: { type: 'lucide', icon: ServerCog } },
        { name: 'Multi-LLM Systems', icon: { type: 'lucide', icon: Link } },
        { name: 'n8n', icon: { type: 'lucide', icon: RefreshCw } },
        { name: 'AssemblyAI', icon: { type: 'lucide', icon: FlaskConical } },
        { name: 'Vapi AI', icon: { type: 'lucide', icon: FlaskConical } },
      ],
    },
    {
      title: 'Databases & Cloud',
      icon: Cloud,
      skills: [
        {
          name: 'MongoDB',
          icon: {
            type: 'svg',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          },
        },
        { name: 'PostgreSQL', icon: { type: 'lucide', icon: Database } },
        { name: 'NeonDB', icon: { type: 'lucide', icon: Database } },
        { name: 'Firebase', icon: { type: 'lucide', icon: Database } },
        { name: 'Vercel', icon: { type: 'lucide', icon: Cloud } },
        { name: 'AWS', icon: { type: 'lucide', icon: Cloud } },
        { name: 'Render', icon: { type: 'lucide', icon: Cloud } },
        { name: 'Netlify', icon: { type: 'lucide', icon: Cloud } },
        { name: 'Docker', icon: { type: 'lucide', icon: Cloud } },
        {
          name: 'Postman',
          icon: { type: 'lucide', icon: Link },
        },
        { name: 'Cloudinary', icon: { type: 'lucide', icon: Database } },
        { name: 'Tableau', icon: { type: 'lucide', icon: BarChart3 } },
      ],
    },
    {
      title: 'Analytics & Collaboration',
      icon: Terminal,
      skills: [
        {
          name: 'TensorFlow',
          icon: { type: 'lucide', icon: Terminal },
        },
        {
          name: 'Pandas',
          icon: { type: 'lucide', icon: Terminal },
        },
        {
          name: 'NumPy',
          icon: { type: 'lucide', icon: Terminal },
        },
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
