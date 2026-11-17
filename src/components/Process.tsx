import { WORK_PROCESS_STEPS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function Process() {
  return (
    <section
      id="process"
      className="py-16 sm:py-20 lg:py-24 bg-[#EDE5DB]/45 border-y border-[#282525]/8"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
            MY WORK PROCESS
          </p>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525] mb-4">
            My Approach to Digital Marketing
          </h2>
          <p className="font-sans text-[15px] lg:text-[16px] text-[#77716D] leading-[1.7]">
            A structured six-stage workflow guiding every campaign from early
            audience understanding to thoughtful review.
          </p>
        </Reveal>

        {/* Horizontal Timeline on Desktop / Vertical Timeline on Mobile */}
        <div className="relative">
          {/* Desktop horizontal connector */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[23px] left-8 right-8 h-[1px] bg-[#B98289]/55"
          />

          <ol className="relative grid grid-cols-1 lg:grid-cols-6 gap-7 lg:gap-5">
            {WORK_PROCESS_STEPS.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <li className="relative flex lg:flex-col items-start gap-4 lg:gap-0 pl-2 lg:pl-0">
                  {/* Mobile vertical connector */}
                  {index < WORK_PROCESS_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="lg:hidden absolute left-[29px] top-12 bottom-[-28px] w-[1px] bg-[#B98289]/50"
                    />
                  )}

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#FAF8F4] border border-[#6D263C] text-[#6D263C] flex items-center justify-center shrink-0 font-serif text-[16px] font-semibold tabular-nums lg:mb-5 shadow-xs">
                    {step.number}
                  </div>

                  <div className="pt-1 lg:pt-0">
                    <h3 className="font-serif text-[20px] font-semibold text-[#282525] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[14px] text-[#77716D] leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
