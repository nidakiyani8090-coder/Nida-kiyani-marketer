import { useEffect, useState } from 'react';
import { Award, GraduationCap, X } from 'lucide-react';
import { EDUCATION_ITEMS } from '../data/portfolioData';
import type { EducationItem } from '../types/portfolio';
import { Reveal } from './Reveal';

export function Education() {
  const [selectedCredential, setSelectedCredential] =
    useState<EducationItem | null>(null);

  useEffect(() => {
    if (!selectedCredential) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCredential(null);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCredential]);

  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F4]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mb-12">
          <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
            ACADEMIC &amp; TRAINING FOUNDATION
          </p>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525] mb-4">
            Education &amp; Learning
          </h2>
          <p className="font-sans text-[15px] lg:text-[16px] text-[#77716D] leading-[1.7]">
            Combining an Associate Degree in Arts with dedicated practical
            training in modern digital marketing.
          </p>
        </Reveal>

        <div className="relative space-y-6">
          {EDUCATION_ITEMS.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.06}>
              <article className="rounded-2xl bg-[#FFFFFF] border border-[#282525]/10 p-6 sm:p-8 transition-all duration-200 hover:border-[#B98289] hover:shadow-[0_12px_30px_rgba(40,37,37,0.05)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
                  <div className="lg:col-span-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-[#EDE5DB]/80 text-[#6D263C] flex items-center justify-center shrink-0">
                        {idx === 0 ? (
                          <GraduationCap className="w-5 h-5" strokeWidth={1.75} />
                        ) : (
                          <Award className="w-5 h-5" strokeWidth={1.75} />
                        )}
                      </span>
                      <span className="font-sans text-[12px] font-medium tracking-[0.14em] uppercase text-[#6D263C]">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-[22px] sm:text-[26px] font-semibold text-[#282525] mb-3">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13.5px] text-[#77716D] mb-4">
                      <span>
                        <strong className="font-medium text-[#282525]">
                          Institution:
                        </strong>{' '}
                        {item.institutionPlaceholder}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>
                        <strong className="font-medium text-[#282525]">
                          Completed:
                        </strong>{' '}
                        {item.completionDatePlaceholder}
                      </span>
                    </div>

                    <p className="font-sans text-[14.5px] text-[#77716D] leading-[1.7] mb-4">
                      {item.summary}
                    </p>

                    <ul className="space-y-1.5 text-[14px] text-[#282525]/85 list-disc pl-5">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Certificate Image Placeholder Card */}
                  <div className="lg:col-span-4 flex flex-col justify-between rounded-xl bg-[#FAF8F4] border border-dashed border-[#B98289]/70 p-5 text-center">
                    <div className="aspect-[4/3] rounded-lg bg-[#EDE5DB]/60 border border-[#282525]/8 flex flex-col items-center justify-center p-4 mb-4">
                      <Award
                        className="w-7 h-7 text-[#6D263C]/70 mb-2"
                        strokeWidth={1.5}
                      />
                      <p className="font-serif text-[14px] font-medium text-[#282525]">
                        {item.title}
                      </p>
                      <p className="font-sans text-[11.5px] text-[#77716D] mt-1">
                        {item.certificatePlaceholderLabel}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCredential(item)}
                      className="min-h-[44px] w-full inline-flex items-center justify-center rounded-xl border border-[#6D263C] px-4 py-2.5 text-[14px] font-medium text-[#6D263C] hover:bg-[#6D263C] hover:text-[#FFFFFF] transition-colors duration-200 cursor-pointer"
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCredential && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#282525]/65 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedCredential(null);
            }
          }}
        >
          <div className="w-full max-w-xl rounded-2xl bg-[#FAF8F4] border border-[#282525]/15 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#282525]/10">
              <span className="font-sans text-[12px] font-medium tracking-[0.14em] uppercase text-[#6D263C]">
                {selectedCredential.type}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCredential(null)}
                aria-label="Close certificate preview"
                className="w-10 h-10 rounded-xl border border-[#282525]/15 flex items-center justify-center text-[#282525] hover:border-[#6D263C] hover:text-[#6D263C] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-5">
              <div className="aspect-[16/10] rounded-xl bg-[#EDE5DB]/70 border border-dashed border-[#B98289] flex flex-col items-center justify-center p-6 text-center">
                <Award className="w-10 h-10 text-[#6D263C] mb-3" strokeWidth={1.5} />
                <h3
                  id="certificate-modal-title"
                  className="font-serif text-[22px] font-semibold text-[#282525]"
                >
                  {selectedCredential.title}
                </h3>
                <p className="font-sans text-[13px] text-[#77716D] mt-2">
                  {selectedCredential.certificatePlaceholderLabel}
                </p>
              </div>

              <div className="space-y-1.5 text-[14px] text-[#282525]">
                <p>
                  <strong className="font-medium">Institution:</strong>{' '}
                  <span className="text-[#77716D]">
                    {selectedCredential.institutionPlaceholder}
                  </span>
                </p>
                <p>
                  <strong className="font-medium">Completion Date:</strong>{' '}
                  <span className="text-[#77716D]">
                    {selectedCredential.completionDatePlaceholder}
                  </span>
                </p>
              </div>

              <p className="font-sans text-[13px] text-[#77716D] bg-[#EDE5DB]/50 rounded-xl p-4 border border-[#282525]/8">
                {selectedCredential.certificateNote}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
