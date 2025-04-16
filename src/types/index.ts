// Common types used across the application
export type Language = 'en' | 'ar';
export type Theme = 'light' | 'dark';
// Component Props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}
// Feature types
export interface Feature {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}
export interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  achievement: string;
  rating: number;
  category: string;
  beforeImage?: string;
  afterImage?: string;
  date: string;
  helpfulCount: number;
  verified?: boolean;
  platform?: string;
}
// Form types
export interface WaitlistFormData {
  name: string;
  email: string;
  referralCode?: string;
  interests?: string;
}
// Animation types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  initialScale?: number;
}
// Theme types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}