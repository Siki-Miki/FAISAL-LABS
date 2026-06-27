export type Theme = 'dark' | 'light';

export type Language = 'en' | 'ar' | 'ru';

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
