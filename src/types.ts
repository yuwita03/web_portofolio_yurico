export interface Project {
  id: string;
  title: string;
  japaneseTitle?: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Backend' | 'Fullstack' | 'System';
  isFeatured?: boolean;
  techStack: string[];
  year: string;
  githubUrl: string;
  demoUrl?: string;
  metrics?: string[];
  highlights?: string[];
  previewGradient: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  japaneseSubtitle: string;
  skills: {
    name: string;
    description: string;
    highlight?: boolean;
    levelTag?: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  iconType: 'backend' | 'fullstack' | 'starter';
}
