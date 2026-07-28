export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
  iconName: string;
}

export interface TimelineCard {
  id: string;
  year: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  demoUrl?: string;
  tags: string[];
  price?: string;
  originalPrice?: string;
  saleBanner?: string;
  isSale?: boolean;
}

export interface PricingCard {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  saleBanner?: string;
  isSale?: boolean;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  popular: boolean;
  buttonText: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
