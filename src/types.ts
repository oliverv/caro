export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  program: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answerLead?: string;
  answer: string;
}

export interface PillarItem {
  id: string;
  letter: string;
  title: string;
  gradient: string;
  accentHoverColor: string;
  description: string;
}

export interface PracticalArea {
  id: string;
  title: string;
  status: 'active' | 'upcoming';
  statusLabel: string;
  description: string;
  bullets: string[];
  icon: string;
  ctaText: string;
}

export interface DiagnosticCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  badgeBg: string;
  iconColor: string;
  borderColor: string;
}

export type PageId = 'inicio' | 'sobre-mi' | 'planes' | 'blog' | 'contacto' | 'privacy';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  scientificReference?: string;
}

