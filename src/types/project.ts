export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Projects' | 'Major Projects' | 'Internship Experience' | 'Freelance Projects' | 'Hackathons' | 'Learning Based Projects';
  thumbnail: string;
  images: string[];
  technologies: { name: string; icon?: string }[];
  features: string[];
  links: {
    live?: string;
    github?: string;
    youtube?: string;
    linkedin?: string;
  };
  timeline: string;
}
