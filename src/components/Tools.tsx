import { TOOLS_EXPLORED } from '../data/portfolioData';
import { Reveal } from './Reveal';

function ToolGlyph({ id }: { id: string }) {
  switch (id) {
    case 'canva':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M20.2 12.2c-1-1-2.5-1.4-4-1.2-2.6.4-4.5 2.7-4.5 5.4 0 2.7 1.9 4.6 4.5 4.6 1.7 0 3-.7 3.9-1.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'wordpress':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M7.5 11.5l4.4 12.2 3.7-9.6 3.7 9.6 4.2-11.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'meta-business':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <path
            d="M6.5 18.5c0-4 2.3-7.5 5.1-7.5 2.4 0 3.7 2.4 4.4 4 .7-1.6 2-4 4.4-4 2.8 0 5.1 3.5 5.1 7.5 0 2.7-1.5 4.5-3.6 4.5-1.9 0-3.2-1.3-5.9-5.3-2.7 4-4 5.3-5.9 5.3-2.1 0-3.6-1.8-3.6-4.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'google-analytics':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <rect x="6" y="19" width="4.5" height="7" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <rect x="13.75" y="13" width="4.5" height="13" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <rect x="21.5" y="6" width="4.5" height="20" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case 'google-ads':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <path
            d="M8 24.5L15.5 7.5a2.3 2.3 0 014.2 0l4.3 9.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="9.2" cy="23.5" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M17.2 13.5l5.4 11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'search-console':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <circle cx="14" cy="14" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M19.5 19.5l6.5 6.5M10.5 15.5l2.5-2.5 2 2 3-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'powerpoint':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <circle cx="17" cy="16" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path d="M17 6.5V16h9.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <rect x="5" y="10" width="11" height="12" rx="2" fill="#FAF8F4" stroke="currentColor" strokeWidth="1.75" />
          <path d="M9 19v-6h2.2a1.8 1.8 0 010 3.6H9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'chatgpt':
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <polygon
            points="16,5.5 25,10.7 25,21.3 16,26.5 7,21.3 7,10.7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <circle cx="16" cy="16" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case 'instagram':
    default:
      return (
        <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
          <rect x="6" y="6" width="20" height="20" rx="6" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16" cy="16" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="21.5" cy="10.5" r="1.2" fill="currentColor" />
        </svg>
      );
  }
}

export function Tools() {
  return (
    <section
      id="tools"
      className="py-16 sm:py-20 bg-[#EDE5DB]/45 border-y border-[#282525]/8"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
              DIGITAL WORKFLOW
            </p>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525]">
              Tools I Explore
            </h2>
          </div>
          <p className="font-sans text-[14.5px] text-[#77716D] max-w-md leading-relaxed">
            Platforms and creative applications I actively practice with for
            design, scheduling, web publishing, and marketing insights.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TOOLS_EXPLORED.map((tool, index) => (
            <Reveal key={tool.id} delay={index * 0.03}>
              <div className="group rounded-2xl bg-[#FAF8F4] border border-[#282525]/10 px-5 py-6 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B98289] hover:bg-[#FFFFFF]">
                <div className="w-12 h-12 rounded-xl bg-[#EDE5DB]/70 text-[#6D263C] flex items-center justify-center mb-3.5 transition-colors duration-200 group-hover:bg-[#6D263C] group-hover:text-[#FAF8F4]">
                  <ToolGlyph id={tool.id} />
                </div>
                <h3 className="font-serif text-[16px] font-semibold text-[#282525] leading-snug">
                  {tool.name}
                </h3>
                <p className="font-sans text-[12px] text-[#77716D] mt-1">
                  {tool.area}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
