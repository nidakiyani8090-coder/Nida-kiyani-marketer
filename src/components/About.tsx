import { ArrowDownRight } from 'lucide-react';
import { ABOUT_INFO_CARDS, BRAND_PROFILE } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-[#EDE5DB]/45 border-y border-[#282525]/8"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <Reveal className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#282525]/10 bg-[#EDE5DB] shadow-[0_14px_34px_rgba(40,37,37,0.06)]">
              <EditorialImage
                src={BRAND_PROFILE.aboutImage}
                alt={BRAND_PROFILE.aboutImageAlt}
                fallbackTitle="Creative Digital Marketing Workspace"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
              GET TO KNOW ME
            </p>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525] mb-6">
              About Me
            </h2>

            <div className="space-y-4 font-sans text-[15px] lg:text-[16px] leading-[1.75] text-[#282525]/85 mb-8">
              <p>
                I&apos;m Nida Kiyani, an aspiring Digital Marketing Specialist
                with an educational background in ADA and professional training
                in Advanced Digital Marketing.
              </p>
              <p>
                I am interested in understanding how brands communicate, how
                audiences interact with digital platforms and how creative
                strategies can build a strong online presence.
              </p>
              <p>
                My goal is to combine creativity, strategic thinking and
                continuous learning to create meaningful digital marketing
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {ABOUT_INFO_CARDS.map((card, index) => (
                <div
                  key={card.label}
                  className={`rounded-xl bg-[#FAF8F4] border border-[#282525]/10 px-4 py-3.5 ${
                    index === ABOUT_INFO_CARDS.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <p className="font-sans text-[11px] font-medium tracking-[0.12em] uppercase text-[#77716D] mb-0.5">
                    {card.label}
                  </p>
                  <p className="font-serif text-[16px] font-semibold text-[#282525]">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('skills');
                }}
                className="min-h-[46px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#6D263C] px-6 py-3 text-[15px] font-medium text-[#FFFFFF] whitespace-nowrap hover:bg-[#541B2D] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Skills</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
