export interface NavLinkItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface AboutInfoCard {
  label: string;
  value: string;
}

export interface SkillItem {
  title: string;
  description: string;
  icon:
    | 'share'
    | 'users'
    | 'calendar'
    | 'search'
    | 'sparkles'
    | 'pen'
    | 'palette'
    | 'message'
    | 'megaphone'
    | 'target'
    | 'globe'
    | 'compass'
    | 'barChart'
    | 'lineChart'
    | 'layout'
    | 'presentation';
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface PortfolioProject {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  tools: string[];
  image: string;
  imageAlt: string;
  overview: string;
  objectives: string[];
  targetAudience: string;
  creativeApproach: string;
  keyLearnings: string[];
  externalLinkPlaceholder: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon:
    | 'calendar'
    | 'layout'
    | 'palette'
    | 'pen'
    | 'megaphone'
    | 'search';
  inquirySubject: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  type: string;
  title: string;
  institutionPlaceholder: string;
  completionDatePlaceholder: string;
  summary: string;
  highlights: string[];
  certificatePlaceholderLabel: string;
  certificateNote: string;
}

export interface ToolItem {
  id: string;
  name: string;
  area: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: 'lightbulb' | 'compass' | 'book' | 'eye';
}
