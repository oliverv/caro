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
