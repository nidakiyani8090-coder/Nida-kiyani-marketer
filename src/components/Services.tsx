import {
  ArrowRight,
  Calendar,
  Layout,
  Megaphone,
  Palette,
  PenTool,
  Search,
} from 'lucide-react';
import { SERVICE_ITEMS } from '../data/portfolioData';
import type { ServiceItem } from '../types/portfolio';
import { Reveal } from './Reveal';

interface ServicesProps {
  onSelectService: (inquirySubject: string) => void;
}

function ServiceIcon({ icon }: { icon: ServiceItem['icon'] }) {
  const props = { className: 'w-5 h-5', strokeWidth: 1.75 };
  switch (icon) {
    case 'calendar':
      return <Calendar {...props} />;
    case 'layout':
      return <Layout {...props} />;
    case 'palette':
      return <Palette {...props} />;
    case 'pen':
      return <PenTool {...props} />;
    case 'megaphone':
      return <Megaphone {...props} />;
    case 'search':
      return <Search {...props} />;
  }
}

export function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F4]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-2xl mb-12">
          <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
            AREAS OF INTEREST &amp; DEVELOPING CAPABILITIES
          </p>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525] mb-4">
            How I Can Contribute
          </h2>
          <p className="font-sans text-[15px] lg:text-[16px] text-[#77716D] leading-[1.7]">
            As an aspiring digital marketing specialist, these are the focused
            areas where I bring enthusiasm, structured planning, and creative
            support to growing brands and teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_ITEMS.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <article className="group h-full flex flex-col rounded-2xl bg-[#FFFFFF] border border-[#282525]/10 p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#B98289] hover:shadow-[0_14px_30px_rgba(109,38,60,0.06)]">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#EDE5DB]/80 text-[#6D263C] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#6D263C] group-hover:text-[#FAF8F4]">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <span className="font-sans text-[12px] font-medium tabular-nums text-[#77716D]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#282525] leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-[14.5px] text-[#77716D] leading-[1.7] mb-6 flex-1">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[#282525]/8">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(service.inquirySubject);
                    }}
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#6D263C] hover:text-[#541B2D] underline underline-offset-4 decoration-[#B98289] hover:decoration-[#6D263C] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
