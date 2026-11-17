import { BookOpen, Compass, Eye, Lightbulb } from 'lucide-react';
import { PROFESSIONAL_VALUES } from '../data/portfolioData';
import type { ValueItem } from '../types/portfolio';
import { Reveal } from './Reveal';

function ValueIcon({ icon }: { icon: ValueItem['icon'] }) {
  const props = { className: 'w-5 h-5', strokeWidth: 1.75 };
  switch (icon) {
    case 'lightbulb':
      return <Lightbulb {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'book':
      return <BookOpen {...props} />;
    case 'eye':
      return <Eye {...props} />;
  }
}

export function Values() {
  return (
    <section id="values" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F4]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mb-12">
          <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
            CORE MINDSET
          </p>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525]">
            What Defines My Work
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFESSIONAL_VALUES.map((value, index) => (
            <Reveal key={value.id} delay={index * 0.05}>
              <article className="h-full rounded-2xl bg-[#FFFFFF] border border-[#282525]/10 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#B98289] hover:shadow-[0_12px_28px_rgba(109,38,60,0.06)]">
                <div className="w-11 h-11 rounded-xl bg-[#EDE5DB]/80 text-[#6D263C] flex items-center justify-center mb-5">
                  <ValueIcon icon={value.icon} />
                </div>
                <p className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#6D263C] mb-2">
                  {value.title}
                </p>
                <p className="font-serif text-[19px] font-medium text-[#282525] leading-snug">
                  {value.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
