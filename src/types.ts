export interface DesignProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  modalBadge?: string;
  modalSubtext?: string;
  category: string;
  description: string;
  tags: string[];
  role: string;
  duration: string;
  statusText?: string;
  highlights: string[];
  designHighlights?: string[];
  previewType: 'fazch' | 'fintech' | 'anvieo';
  coverImage?: string;
  cardTag?: string;
  cardDescription?: string;
  modalVariant?: 'full' | 'anvieo-in-progress' | 'credit-risk-minimal';
  statusBadge?: {
    text: string;
    variant: 'live' | 'ongoing' | 'design-system';
  };
  contextNote?: string;
  designProcess?: DesignProcessStep[];
  liveUrl?: string;
  figmaUrl?: string;
  liveDemoAvailable?: boolean;
  unavailableNote?: string;
  caseStudyDetails?: {
    problem: string;
    solution: string;
    metrics?: string[];
    deliverables?: string[];
  };
}

export interface SkillAccordionItem {
  id: string;
  number: string;
  title: string;
  chips: string[];
  description: string;
  details?: string[];
}

export interface ProcessItem {
  number: string;
  title: string;
  theme: 'light' | 'dark';
  description: string;
  iconName: string;
  subPoints?: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  category: string;
}
