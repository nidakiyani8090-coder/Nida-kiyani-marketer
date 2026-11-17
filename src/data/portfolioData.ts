import type {
  AboutInfoCard,
  EducationItem,
  NavLinkItem,
  PortfolioProject,
  ProcessStep,
  ServiceItem,
  SkillCategory,
  ToolItem,
  ValueItem,
} from '../types/portfolio';

export const BRAND_PROFILE = {
  fullName: 'Nida Kiyani',
  wordmark: 'NIDA KIYANI',
  subtitle: 'DIGITAL MARKETING PORTFOLIO',
  roleTitle: 'Aspiring Digital Marketing Specialist',
  education: 'ADA (Associate Degree in Arts)',
  training: 'Advanced Digital Marketing',
  heroImage: '/src/assets/images/hero_nida_portrait_1794900902979.jpg',
  heroImageAlt:
    'Editorial studio portrait of Nida Kiyani, Aspiring Digital Marketing Specialist, in a tailored ivory blazer and deep burgundy blouse',
  aboutImage: '/src/assets/images/about_creative_workspace_1794900903413.jpg',
  aboutImageAlt:
    'Minimalist luxury digital marketing workspace with linen brand strategy notebook, laptop, and burgundy ceramic cup on travertine desk',
};

/**
 * Editable placeholders for personal contact details & social profile URLs.
 * Replace each placeholder string with live details before publishing.
 */
export const CONTACT_DETAILS = {
  email: '[INSERT YOUR EMAIL]',
  whatsapp: '[INSERT YOUR NUMBER]',
  linkedinUrl: '[INSERT YOUR LINKEDIN URL]',
  instagramUrl: '[INSERT YOUR INSTAGRAM URL]',
};

export function isEditablePlaceholder(value: string): boolean {
  return value.trim().startsWith('[') && value.trim().endsWith(']');
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Portfolio', href: '#portfolio', sectionId: 'portfolio' },
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Education', href: '#education', sectionId: 'education' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const ABOUT_INFO_CARDS: AboutInfoCard[] = [
  { label: 'Name', value: 'Nida Kiyani' },
  { label: 'Education', value: 'ADA (Associate Degree in Arts)' },
  { label: 'Training', value: 'Advanced Digital Marketing' },
  { label: 'Career Focus', value: 'Digital Marketing' },
  { label: 'Availability', value: 'Open to Professional Opportunities' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    subtitle: 'Building structured brand presence and audience connection across social channels.',
    skills: [
      {
        title: 'Social Media Marketing',
        description:
          'Developing platform-tailored promotional concepts that align with brand tone and audience interests.',
        icon: 'share',
      },
      {
        title: 'Social Media Management',
        description:
          'Organizing publishing schedules, visual feeds, and consistent page activity for brand clarity.',
        icon: 'users',
      },
      {
        title: 'Content Planning',
        description:
          'Structuring content pillars, recurring formats, and monthly themes around marketing goals.',
        icon: 'calendar',
      },
      {
        title: 'Audience Research',
        description:
          'Exploring customer demographics, preferences, and online behaviors to guide messaging.',
        icon: 'search',
      },
    ],
  },
  {
    id: 'content-creative',
    title: 'Content & Creative',
    subtitle: 'Translating marketing ideas into thoughtful visuals and clear brand copy.',
    skills: [
      {
        title: 'Content Creation',
        description:
          'Crafting engaging post concepts, short-form storytelling ideas, and UGC-style narratives.',
        icon: 'sparkles',
      },
      {
        title: 'Copywriting',
        description:
          'Writing readable captions, value-focused headlines, and clear calls to action for social posts.',
        icon: 'pen',
      },
      {
        title: 'Canva Designing',
        description:
          'Designing clean social posts, carousels, and promotional layouts with cohesive visual hierarchy.',
        icon: 'palette',
      },
      {
        title: 'Brand Communication',
        description:
          'Shaping consistent visual and verbal identity so audiences recognize a brand effortlessly.',
        icon: 'message',
      },
    ],
  },
  {
    id: 'advertising-seo',
    title: 'Digital Advertising & SEO',
    subtitle: 'Applying foundational paid media and search principles to support visibility.',
    skills: [
      {
        title: 'Meta Ads Fundamentals',
        description:
          'Understanding campaign objectives, ad creative structure, and audience targeting basics on Meta.',
        icon: 'megaphone',
      },
      {
        title: 'Google Ads Fundamentals',
        description:
          'Learning search campaign structure, keyword intent, and ad copy alignment for discovery.',
        icon: 'target',
      },
      {
        title: 'SEO Fundamentals',
        description:
          'Applying on-page structure, keyword research basics, and descriptive metadata best practices.',
        icon: 'globe',
      },
      {
        title: 'Campaign Planning',
        description:
          'Mapping promotional timelines, messaging angles, and channel roles from concept to launch.',
        icon: 'compass',
      },
    ],
  },
  {
    id: 'analytics-tools',
    title: 'Analytics & Digital Tools',
    subtitle: 'Using essential digital platforms to organize workflows and review insights.',
    skills: [
      {
        title: 'Google Analytics Fundamentals',
        description:
          'Exploring website traffic sources, audience engagement signals, and basic reporting views.',
        icon: 'barChart',
      },
      {
        title: 'Google Search Console',
        description:
          'Learning how search queries, indexing status, and page visibility insights support SEO.',
        icon: 'lineChart',
      },
      {
        title: 'WordPress',
        description:
          'Navigating pages, posts, and content formatting to maintain clean web presence.',
        icon: 'layout',
      },
      {
        title: 'Microsoft PowerPoint',
        description:
          'Preparing structured marketing plans, campaign decks, and clear visual presentations.',
        icon: 'presentation',
      },
    ],
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'bano-qabil-campaign',
    number: '01',
    title: 'Bano Qabil Promotional Campaign',
    category: 'Social Media Marketing',
    shortDescription:
      'Promotional content concept designed to communicate course opportunities and encourage audience engagement.',
    tools: ['Canva', 'Social Media Platforms'],
    image: '/src/assets/images/project_bano_qabil_1794900904401.jpg',
    imageAlt:
      'Bano Qabil promotional campaign social media graphics and mobile layout concept in warm ivory and burgundy tones',
    overview:
      'A promotional social media campaign concept created to highlight skill-building course opportunities in an approachable, inspiring, and structured visual format.',
    objectives: [
      'Communicate program benefits clearly for prospective learners.',
      'Maintain a cohesive visual system across promotional feed posts and story cards.',
      'Encourage organic audience interaction through informative, scannable layouts.',
    ],
    targetAudience:
      'Students, recent graduates, and young adults exploring practical career-oriented digital skills training.',
    creativeApproach:
      'Paired concise headline hierarchy with structured enrollment highlights and warm editorial framing so key course details are legible at a glance on mobile screens.',
    keyLearnings: [
      'Balancing informational clarity with strong visual focal points in promotional graphics.',
      'Adapting core campaign messaging across multiple social post formats without losing consistency.',
    ],
    externalLinkPlaceholder: '[INSERT PROJECT LINK OR CANVA SHARE URL]',
  },
  {
    id: 'jewelry-ugc-ad',
    number: '02',
    title: 'Jewelry UGC Advertisement',
    category: 'UGC & Content Creation',
    shortDescription:
      'A creative unboxing and product review advertising concept featuring product-focused storytelling.',
    tools: ['AI Video Tools', 'Canva'],
    image: '/src/assets/images/project_jewelry_ugc_1794900904650.jpg',
    imageAlt:
      'Jewelry UGC advertisement concept showcasing a minimalist gold ring unboxing in a deep burgundy velvet box on travertine stone',
    overview:
      'A user-generated content style advertisement concept centered on an intimate unboxing moment and relatable product storytelling tailored for social video feeds.',
    objectives: [
      'Capture viewer attention within the opening seconds using tactile unboxing visuals.',
      'Present product craftsmanship and packaging details in an authentic, lifestyle-led tone.',
      'Structure a natural narrative flow from curiosity to product appreciation.',
    ],
    targetAudience:
      'Style-conscious online shoppers drawn to minimalist jewelry, gifting experiences, and authentic creator-style reviews.',
    creativeApproach:
      'Combined warm diffused natural lighting, close-up unboxing framing, and conversational voiceover pacing with clean on-screen text accents.',
    keyLearnings: [
      'How pacing, tactile visuals, and relatable framing elevate short-form product ads.',
      'Structuring UGC hooks and visual beats before editing creative assets.',
    ],
    externalLinkPlaceholder: '[INSERT PROJECT VIDEO OR CONCEPT DECK LINK]',
  },
  {
    id: 'social-media-content-strategy',
    number: '03',
    title: 'Social Media Content Strategy',
    category: 'Content Strategy',
    shortDescription:
      'A sample content planning concept designed to improve brand communication and maintain consistent social media activity.',
    tools: ['Canva', 'Content Planning'],
    image: '/src/assets/images/project_content_strategy_1794900905925.jpg',
    imageAlt:
      'Editorial brand and social media content strategy presentation folio with ivory, muted rose, and deep burgundy swatches',
    overview:
      'A foundational content strategy blueprint outlining brand voice pillars, visual direction, and recurring content themes to guide steady social media communication.',
    objectives: [
      'Establish clear content pillars balancing educational, storytelling, and promotional posts.',
      'Create visual and tonal guidelines for consistent audience recognition.',
      'Build a repeatable framework that prevents ad-hoc or off-brand posting.',
    ],
    targetAudience:
      'Emerging lifestyle brands and small businesses seeking a cohesive, intentional voice across social channels.',
    creativeApproach:
      'Organized brand communication into four distinct content pillars supported by moodboards, color direction, and sample caption frameworks.',
    keyLearnings: [
      'Translating abstract brand values into practical weekly content categories.',
      'Aligning visual aesthetic guidelines with written brand tone.',
    ],
    externalLinkPlaceholder: '[INSERT STRATEGY DOCUMENT LINK]',
  },
  {
    id: 'instagram-post-designs',
    number: '04',
    title: 'Instagram Post Designs',
    category: 'Graphic Design',
    shortDescription:
      'Creative social media visual concepts designed to communicate promotional messages clearly.',
    tools: ['Canva'],
    image: '/src/assets/images/project_instagram_designs_1794900906250.jpg',
    imageAlt:
      'Tablet and smartphone showcasing cohesive editorial Instagram post designs and minimalist grid layouts',
    overview:
      'A curated suite of Instagram feed and carousel templates exploring editorial typography, balanced whitespace, and clear promotional messaging.',
    objectives: [
      'Design scannable social graphics where headlines and offers remain readable on mobile.',
      'Develop reusable visual templates that preserve grid harmony across campaigns.',
      'Use typography and subtle color contrast to guide viewer attention naturally.',
    ],
    targetAudience:
      'Modern service-based businesses and digital-first brands seeking clean, elevated social media aesthetics.',
    creativeApproach:
      'Paired classic serif display headers with clean sans-serif supporting copy, generous margins, and restrained accent blocks to avoid visual clutter.',
    keyLearnings: [
      'Applying editorial layout principles—alignment, breathing room, and hierarchy—to social graphics.',
      'Designing modular templates adaptable for announcements, quotes, and product highlights.',
    ],
    externalLinkPlaceholder: '[INSERT CANVA DESIGN PORTFOLIO LINK]',
  },
  {
    id: 'digital-marketing-plan',
    number: '05',
    title: 'Digital Marketing Plan',
    category: 'Marketing Strategy',
    shortDescription:
      'A practice marketing strategy outlining target audience research, content direction and promotional objectives.',
    tools: ['Marketing Research', 'Microsoft PowerPoint'],
    image: '/src/assets/images/project_marketing_plan_1794900905652.jpg',
    imageAlt:
      'Printed digital marketing plan presentation book open to target audience insights and campaign direction spreads',
    overview:
      'A comprehensive practice marketing plan mapping audience personas, channel roles, messaging angles, and phased promotional objectives from awareness to engagement.',
    objectives: [
      'Define clear buyer personas and core audience pain points before selecting channels.',
      'Connect brand positioning with practical social, content, and search initiatives.',
      'Establish structured review checkpoints to evaluate campaign progress thoughtfully.',
    ],
    targetAudience:
      'Small business decision-makers and startup teams looking for structured digital growth direction.',
    creativeApproach:
      'Built from audience discovery outward—documenting audience insights, competitive positioning notes, channel mix rationale, and phased action steps in a clear deck.',
    keyLearnings: [
      'Why clear audience definition simplifies every downstream creative and media choice.',
      'Structuring strategic recommendations into digestible, decision-ready slides.',
    ],
    externalLinkPlaceholder: '[INSERT PRESENTATION DECK LINK]',
  },
  {
    id: 'social-media-content-calendar',
    number: '06',
    title: 'Social Media Content Calendar',
    category: 'Social Media Management',
    shortDescription:
      'A sample monthly content calendar with planned post topics, content formats and publishing schedules.',
    tools: ['Content Planning', 'Meta Business Suite'],
    image: '/src/assets/images/project_content_calendar_1794900906945.jpg',
    imageAlt:
      'Overhead flat-lay of a structured monthly social media content calendar with post topics, formats, and scheduling notes',
    overview:
      'A full-month editorial scheduling framework organizing daily post concepts, content formats (carousels, reels, static posts), caption angles, and publishing cadence.',
    objectives: [
      'Maintain consistent weekly publishing momentum without sacrificing content quality.',
      'Balance varied content formats across educational, behind-the-scenes, and promotional themes.',
      'Create clear pre-production checkpoints for copywriting, design, and scheduling.',
    ],
    targetAudience:
      'Marketing teams and business owners wanting predictable, organized social media workflows.',
    creativeApproach:
      'Mapped a 4-week calendar matrix pairing thematic weekly focuses with format diversity and clear status workflows from ideation to scheduled publishing.',
    keyLearnings: [
      'Planning content in monthly batches improves thematic cohesion and reduces last-minute rushes.',
      'Balancing format mix keeps a social feed engaging and structured.',
    ],
    externalLinkPlaceholder: '[INSERT CONTENT CALENDAR TEMPLATE LINK]',
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'content-planning',
    title: 'Social Media Content Planning',
    description:
      'Developing structured monthly content pillars, post themes, and balanced publishing calendars tailored to your brand.',
    icon: 'calendar',
    inquirySubject: 'Social Media Content Planning Inquiry',
  },
  {
    id: 'page-management',
    title: 'Social Media Page Management',
    description:
      'Supporting consistent page activity, post scheduling, feed organization, and thoughtful audience communication.',
    icon: 'layout',
    inquirySubject: 'Social Media Page Management Inquiry',
  },
  {
    id: 'creative-designs',
    title: 'Creative Social Media Designs',
    description:
      'Crafting clean, on-brand Canva graphics, carousels, and story visuals designed for clarity and visual harmony.',
    icon: 'palette',
    inquirySubject: 'Creative Social Media Designs Inquiry',
  },
  {
    id: 'content-writing',
    title: 'Content Writing & Captions',
    description:
      'Writing engaging social captions, concise promotional copy, and clear messaging aligned with brand voice.',
    icon: 'pen',
    inquirySubject: 'Content Writing & Captions Inquiry',
  },
  {
    id: 'brand-promotion',
    title: 'Brand Promotion Concepts',
    description:
      'Brainstorming creative campaign angles, UGC-inspired concepts, and launch ideas to strengthen brand visibility.',
    icon: 'megaphone',
    inquirySubject: 'Brand Promotion Concepts Inquiry',
  },
  {
    id: 'marketing-research',
    title: 'Digital Marketing Research',
    description:
      'Conducting audience discovery, competitor observations, and foundational SEO/keyword research to inform decisions.',
    icon: 'search',
    inquirySubject: 'Digital Marketing Research Inquiry',
  },
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Research',
    description: 'Understand the brand, market and target audience.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Define objectives and create a marketing direction.',
  },
  {
    number: '03',
    title: 'Planning',
    description: 'Develop content ideas and campaign plans.',
  },
  {
    number: '04',
    title: 'Creation',
    description: 'Create engaging and relevant digital content.',
  },
  {
    number: '05',
    title: 'Execution',
    description: 'Organize and publish marketing content.',
  },
  {
    number: '06',
    title: 'Analysis',
    description: 'Review performance and identify opportunities for improvement.',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'ada-degree',
    type: 'Academic Qualification',
    title: 'ADA (Associate Degree in Arts)',
    institutionPlaceholder: '[INSERT INSTITUTION / UNIVERSITY NAME]',
    completionDatePlaceholder: '[INSERT COMPLETION DATE]',
    summary:
      'Built a well-rounded foundation in communication, analytical thinking, and humanities that supports clear brand storytelling and audience understanding.',
    highlights: [
      'Written & verbal communication foundations',
      'Critical thinking and structured research skills',
      'Cultural and audience perspective awareness',
    ],
    certificatePlaceholderLabel: '[INSERT DEGREE DOCUMENT / TRANSCRIPT PREVIEW]',
    certificateNote:
      'Editable credential placeholder — replace with verified institution details and scanned credential image when ready.',
  },
  {
    id: 'advanced-digital-marketing',
    type: 'Professional Training',
    title: 'Advanced Digital Marketing',
    institutionPlaceholder: '[INSERT TRAINING INSTITUTE NAME]',
    completionDatePlaceholder: '[INSERT COMPLETION DATE]',
    summary:
      'Completed structured practical training covering social media marketing, content creation, SEO fundamentals, paid advertising basics, and analytics tools.',
    highlights: [
      'Social media strategy, content planning & Canva workflows',
      'Foundations of Meta Ads, Google Ads & Search Engine Optimization',
      'Introduction to Google Analytics & Google Search Console',
    ],
    certificatePlaceholderLabel: '[INSERT CERTIFICATE IMAGE / CREDENTIAL PREVIEW]',
    certificateNote:
      'Editable certificate placeholder — insert your training institute name, completion date, and certificate preview image in portfolioData.ts.',
  },
];

export const TOOLS_EXPLORED: ToolItem[] = [
  { id: 'canva', name: 'Canva', area: 'Visual Design' },
  { id: 'wordpress', name: 'WordPress', area: 'Web & Content' },
  { id: 'meta-business', name: 'Meta Business Suite', area: 'Social Scheduling' },
  { id: 'google-analytics', name: 'Google Analytics', area: 'Traffic Insights' },
  { id: 'google-ads', name: 'Google Ads', area: 'Search Campaigns' },
  { id: 'search-console', name: 'Google Search Console', area: 'Search Visibility' },
  { id: 'powerpoint', name: 'Microsoft PowerPoint', area: 'Strategy Decks' },
  { id: 'chatgpt', name: 'ChatGPT', area: 'Ideation & Research' },
  { id: 'instagram', name: 'Instagram', area: 'Social Storytelling' },
];

export const PROFESSIONAL_VALUES: ValueItem[] = [
  {
    id: 'creativity',
    title: 'Creativity',
    description: 'Turning ideas into engaging content.',
    icon: 'lightbulb',
  },
  {
    id: 'strategic-thinking',
    title: 'Strategic Thinking',
    description: 'Understanding objectives before creating campaigns.',
    icon: 'compass',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Always exploring new digital trends and tools.',
    icon: 'book',
  },
  {
    id: 'attention-to-detail',
    title: 'Attention to Detail',
    description: 'Focusing on clarity, consistency and quality.',
    icon: 'eye',
  },
];
