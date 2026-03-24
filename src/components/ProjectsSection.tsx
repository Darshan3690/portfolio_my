'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/project';
import { projects as allProjects } from '@/data/projects';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  ExternalLink,
  Github,
  Youtube,
  Linkedin,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  'All',
  'Projects',
  'Major Projects',
  'Internship Experience',
  'Freelance Projects',
  'Hackathons',
  'Learning Based Projects',
] as const;

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = allProjects.filter((p) =>
    activeCategory === 'All' ? true : p.category === activeCategory
  );
  const categoryCounts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = cat === 'All' ? allProjects.length : allProjects.filter(p => p.category === cat).length;
    return acc;
  }, {});

  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-[#020617] text-white w-full">
      <div className="w-full">
        <div className="text-center mb-14 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            A representation of my{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              All {allProjects.length} Projects
            </span>
          </motion.h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Explore my journey through development, featuring full-stack applications, AI solutions, hackathons, and freelance builds.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <Tabs
            value={activeCategory}
            onValueChange={(v) => setActiveCategory(v as any)}
            className="w-full"
          >
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="bg-gray-900/60 border border-gray-800 p-1 rounded-2xl max-w-screen-lg mx-auto shadow-lg shadow-blue-500/5">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    value={cat}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-xl px-4 md:px-5 py-2 text-sm md:text-base transition-all"
                  >
                    {cat}
                    <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-800 text-[11px] text-gray-300 border border-gray-700/70">
                      {categoryCounts[cat]}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </ScrollArea>
          </Tabs>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index, 
  onClick 
}: { 
  project: Project; 
  index: number;
  onClick: () => void;
}) => {
  const quickTags = [
    project.links.live ? 'Live' : null,
    'Web',
  ].filter(Boolean) as string[];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        className="group relative h-full bg-gradient-to-b from-gray-900/70 to-gray-900/40 border border-gray-800 hover:border-blue-500/50 rounded-3xl overflow-hidden cursor-pointer backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.45)]"
        onClick={onClick}
      >
        <div className="relative overflow-hidden">
          <AspectRatio ratio={16 / 10}>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="border-blue-400/40 text-blue-300 bg-blue-400/10">
                {project.category}
              </Badge>
              {quickTags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/10">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-white drop-shadow-sm leading-tight">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm line-clamp-2">
              {project.tagline}
            </p>
          </div>
        </div>

        <CardContent className="p-5 pt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <Badge key={tech.name} variant="secondary" className="bg-gray-800/80 text-gray-200 text-[11px] font-medium border border-gray-700/60">
                {tech.name}
              </Badge>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-xs text-gray-500">+{project.technologies.length - 6} more</span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectModal = ({ 
  project, 
  onClose 
}: { 
  project: Project | null; 
  onClose: () => void;
}) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl w-[96vw] h-[92vh] bg-[#020617] border-gray-800 p-0 overflow-hidden flex flex-col md:flex-row rounded-3xl shadow-2xl shadow-blue-500/10">
        {/* Left Section - 70% */}
        <div className="flex-1 md:w-[70%] border-r border-gray-800 bg-gray-950 flex flex-col justify-center p-4 md:p-8">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {project.images.map((img, idx) => (
                <CarouselItem key={idx}>
                  <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl border border-gray-800">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 bg-gray-900/80 border-gray-800" />
            <CarouselNext className="hidden md:flex -right-6 bg-gray-900/80 border-gray-800" />
          </Carousel>
        </div>

        {/* Right Section - 30% */}
        <div className="md:w-[30%] flex flex-col overflow-hidden bg-[#020617]">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <Badge className="bg-blue-600 text-white hover:bg-blue-500">
                  {project.category}
                </Badge>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="bg-gray-900/50 border border-gray-800 w-full mb-4">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="tech" className="flex-1">Stack</TabsTrigger>
                  <TabsTrigger value="features" className="flex-1">Features</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Timeline: {project.timeline}</span>
                  </div>
                </TabsContent>

                <TabsContent value="tech">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech.name} variant="outline" className="border-gray-700 text-gray-400 flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        {tech.name}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="features">
                  <ul className="space-y-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-gray-400 items-start">
                        <Sparkles className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>

              <div className="pt-6 space-y-3 border-t border-gray-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Links</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all text-xs font-medium">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all text-xs font-medium">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.links.youtube && (
                    <a href={project.links.youtube} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-500 transition-all text-xs font-medium border border-red-500/20">
                      <Youtube className="w-3.5 h-3.5" />
                      YouTube
                    </a>
                  )}
                  {project.links.linkedin && (
                    <a href={project.links.linkedin} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-blue-900/20 hover:bg-blue-900/30 text-blue-400 transition-all text-xs font-medium border border-blue-900/20">
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
