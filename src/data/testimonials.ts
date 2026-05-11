export type TestimonialSource = 'twitter' | 'discord' | 'github' | 'other';

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  source?: TestimonialSource;
  sourceUrl?: string;
  image?: string;
  username?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Harsh Kubavat',
    title: 'Lead Engineer, FitMentor',
    quote:
      'Darshan kept our Solution Challenge delivery on track by building dashboards, AI hooks, and clean UX under brutal deadlines. He is the teammate you want owning the tough features.',
    source: 'other',
    username: 'harshcodes',
  },
  {
    name: 'darshanrajput',
    title: 'Program Manager, Elite Coders',
    quote:
      'Every time we needed a reliable engineer to jump on a high-visibility initiative, Darshan volunteered, communicated clearly, and shipped with polish. The community trusts his leadership.',
    source: 'other',
  },
  {
    name: 'Darshan Rajput',
    title: 'Product Strategist, MediAI',
    quote:
      'From architecting the AI voice pipeline to refining the patient handoff flow, Darshan combined deep technical skill with empathy for end users. The product feels premium because of his decisions.',
    source: 'other',
  },
  {
    name: 'Darshan Rajput',
    title: 'Founder, The Dev Pocket',
    quote:
      'Darshan transformed our open-source roadmap into a contributor-friendly platform, adding automation, docs, and reviews that helped dozens of students push meaningful PRs.',
    source: 'other',
  },
];
