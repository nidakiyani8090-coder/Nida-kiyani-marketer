import { ArrowRight, Sparkles } from 'lucide-react';
import { BRAND_PROFILE } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#FAF8F4] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#EDE5DB]/70 blur-3xl"
      />

      <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="font-sans text-[12px] sm:text-[13px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-4">
              HELLO, I&apos;M NIDA KIYANI
            </p>

            <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[64px] font-semibold leading-[1.12] tracking-[-0.015em] text-[#282525] mb-6">
              Creative Thinking. Strategic Marketing. Meaningful{' '}
              <span className="text-[#6D263C] italic font-semibold">
                Digital Growth.
              </span>
            </h1>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-[#77716D] max-w-xl mb-8">
              I&apos;m an aspiring Digital Marketing Specialist passionate about
              building brands, creating engaging content and developing
              thoughtful strategies that connect businesses with their
              audiences.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('portfolio');
                }}
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#6D263C] px-7 py-3.5 text-[15px] font-medium text-[#FFFFFF] whitespace-nowrap hover:bg-[#541B2D] hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="min-h-[48px] inline-flex items-center justify-center rounded-xl border border-[#6D263C] bg-transparent px-7 py-3.5 text-[15px] font-medium text-[#6D263C] whitespace-nowrap hover:bg-[#6D263C] hover:text-[#FFFFFF] hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>

            <div className="pt-5 border-t border-[#282525]/10 max-w-xl">
              <p className="font-sans text-[13px] tracking-[0.04em] text-[#77716D]">
                Creative Mind <span className="mx-2 text-[#B98289]">|</span>{' '}
                Digital Marketing Enthusiast{' '}
                <span className="mx-2 text-[#B98289]">|</span> Lifelong Learner
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[440px] lg:max-w-none lg:h-full min-h-[420px] sm:min-h-[480px]">
              {/* Subtle architectural background frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#EDE5DB] border border-[#B98289]/30"
              />

              {/* Portrait image container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-[#282525]/10 bg-[#EDE5DB] shadow-[0_18px_45px_rgba(40,37,37,0.08)]">
                <EditorialImage
                  src={BRAND_PROFILE.heroImage}
                  alt={BRAND_PROFILE.heroImageAlt}
                  fallbackTitle="Nida Kiyani — Digital Marketing Portfolio"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating editorial note card */}
              <div className="absolute left-4 right-4 sm:left-6 sm:right-auto bottom-5 rounded-xl bg-[#FAF8F4]/95 backdrop-blur-sm border border-[#282525]/10 px-4 py-3.5 shadow-[0_10px_28px_rgba(40,37,37,0.1)] flex items-center gap-3 max-w-[290px]">
                <span className="w-9 h-9 rounded-lg bg-[#6D263C]/10 text-[#6D263C] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-serif text-[14px] font-semibold text-[#282525] leading-snug">
                    Passionate About Digital Growth
                  </p>
                  <p className="font-sans text-[11.5px] text-[#77716D] leading-tight mt-0.5">
                    Strategy · Content · Brand Presence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
