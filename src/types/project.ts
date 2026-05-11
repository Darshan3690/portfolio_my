export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category:
    | 'Projects'
    | 'personal Projects'
    | 'Major Projects'
    | 'My open source projects'
    | 'Hackathons'
    | 'Learning Based Projects';
  thumbnail: string;
  images: string[];
  technologies: { name: string; icon?: string }[];
  features: string[];
  metrics?: string[];
  team?: string[];
  links?: {
    live?: string;
    github?: string;
    youtube?: string;
    linkedin?: string;
    certificate?: string;
  };
  timeline: string;
} 
