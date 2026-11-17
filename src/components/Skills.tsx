import { useState } from 'react';
import {
  BarChart3,
  Calendar,
  Compass,
  Globe,
  Layout,
  LineChart,
  Megaphone,
  MessageSquare,
  Palette,
  PenTool,
  Presentation,
  Search,
  Share2,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import type { SkillItem } from '../types/portfolio';
import { Reveal } from './Reveal';

function SkillIcon({ icon }: { icon: SkillItem['icon'] }) {
  const props = { className: 'w-5 h-5', strokeWidth: 1.75 };
  switch (icon) {
    case 'share':
      return <Share2 {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'pen':
      return <PenTool {...props} />;
    case 'palette':
      return <Palette {...props} />;
    case 'message':
      return <MessageSquare {...props} />;
    case 'megaphone':
      return <Megaphone {...props} />;
    case 'target':
      return <Target {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'barChart':
      return <BarChart3 {...props} />;
    case 'lineChart':
      return <LineChart {...props} />;
    case 'layout':
      return <Layout {...props} />;
    case 'presentation':
      return <Presentation {...props} />;
  }
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F4]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
              WHAT I BRING TO THE TABLE
            </p>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525] mb-4">
              My Skills &amp; Expertise
            </h2>
            <p className="font-sans text-[15px] lg:text-[16px] text-[#77716D] leading-[1.7]">
              Exploring the creative and strategic side of digital marketing
              through continuous learning and practical projects.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`min-h-[40px] px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-[#6D263C] text-[#FFFFFF]'
                  : 'bg-[#EDE5DB]/60 text-[#282525] hover:bg-[#EDE5DB]'
              }`}
            >
              All Areas
            </button>
            {SKILL_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`min-h-[40px] px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-[#6D263C] text-[#FFFFFF]'
                    : 'bg-[#EDE5DB]/60 text-[#282525] hover:bg-[#EDE5DB]'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="space-y-12">
          {visibleCategories.map((category, categoryIdx) => (
            <Reveal key={category.id} delay={categoryIdx * 0.05}>
              <div className="pb-3 mb-6 border-b border-[#282525]/10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#282525]">
                  {category.title}
                </h3>
                <p className="font-sans text-[13.5px] text-[#77716D]">
                  {category.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.skills.map((skill) => (
                  <article
                    key={skill.title}
                    className="group rounded-2xl bg-[#FFFFFF] border border-[#282525]/10 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#B98289] hover:shadow-[0_12px_28px_rgba(109,38,60,0.07)]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#EDE5DB]/80 text-[#6D263C] flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-[#6D263C] group-hover:text-[#FAF8F4]">
                      <SkillIcon icon={skill.icon} />
                    </div>
                    <h4 className="font-serif text-[18px] font-semibold text-[#282525] mb-2 leading-snug">
                      {skill.title}
                    </h4>
                    <p className="font-sans text-[14px] text-[#77716D] leading-[1.65]">
                      {skill.description}
                    </p>
                  </article>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
