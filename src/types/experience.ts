export interface ExperienceContribution {
  title: string;
  description: string;
  badge?: string;
  bounty?: string;
  link?: string;
  pullRequests?: { title: string; link: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  logo: string;
  link: string;
  totalPRs: string;
  totalBounties?: string;
  reposPrivate?: boolean;
  contributions: ExperienceContribution[];
}
