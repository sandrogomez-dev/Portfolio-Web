// Theme types
export type ThemeMode = 'light' | 'dark' | 'auto';

export interface Theme {
  mode: ThemeMode;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    danger: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  fonts: {
    primary: string;
    mono: string;
  };
}

// Animation types
export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing: string;
}

// Project types
export interface TechStack {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'design';
}

export interface ProjectLink {
  type: 'demo' | 'repo' | 'case-study';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: TechStack[];
  links: ProjectLink[];
  image: string;
  images: string[];
  featured: boolean;
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  metrics?: {
    users?: number;
    performance?: string;
    coverage?: number;
  };
  challenges: string[];
  solutions: string[];
  learnings: string[];
  createdAt: string;
  completedAt?: string;
}

// Skills types
export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  experience: number; // years
  icon: string;
  color: string;
  category: 'frontend' | 'backend' | 'mobile' | 'devops' | 'design' | 'soft';
  projects: number; // number of projects using this skill
  certifications?: string[];
  lastUsed: string; // ISO date
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
  icon: string;
}

// Experience types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  metric?: string;
  impact: 'high' | 'medium' | 'low';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'contract' | 'internship';
  location: string;
  remote: boolean;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  achievements: Achievement[];
  techStack: TechStack[];
  companyLogo: string;
  companyUrl?: string;
  teamSize?: number;
  salary?: {
    amount: number;
    currency: string;
    period: 'hourly' | 'monthly' | 'yearly';
  };
}

// Education & Certifications
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  verified: boolean;
  category: 'course' | 'certification' | 'bootcamp' | 'degree';
}

// Contact types
export interface ContactInfo {
  email: string;
  phone?: string;
  location: {
    city: string;
    country: string;
    timezone: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  availability: {
    status: 'available' | 'busy' | 'unavailable';
    workingHours: string;
    preferredContact: 'email' | 'phone' | 'linkedin';
    responseTime: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    behance?: string;
    dribbble?: string;
  };
  resume: {
    url: string;
    lastUpdated: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

// Analytics types
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  timestamp: number;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Component Props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AnimatedComponentProps extends BaseComponentProps {
  animation?: AnimationConfig;
  delay?: number;
  threshold?: number;
}

// Portfolio Data types
export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    avatar: string;
    tagline: string[];
    yearsOfExperience: number;
    projectsCompleted: number;
    clientsSatisfied: number;
    currentSalary: {
      min: number;
      max: number;
      currency: string;
    };
  };
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
  certifications: Certification[];
  contact: ContactInfo;
  testimonials?: Testimonial[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
  projectId?: string;
}

// GitHub Activity types (for daily coding section)
export interface GitHubActivity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubStats {
  totalCommits: number;
  streak: number;
  longestStreak: number;
  contributions: GitHubActivity[];
  languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
}

// Recruitment Mode types
export interface RecruitmentInfo {
  availability: boolean;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
  };
  workPreference: ('remote' | 'hybrid' | 'onsite')[];
  contractTypes: ('full-time' | 'part-time' | 'contract' | 'freelance')[];
  techStackPreferences: string[];
  companySize: ('startup' | 'small' | 'medium' | 'large' | 'enterprise')[];
  benefits: string[];
  noticePeriod: string;
  relocate: boolean;
} 