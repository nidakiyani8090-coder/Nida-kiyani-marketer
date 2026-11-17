import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import {
  BRAND_PROFILE,
  CONTACT_DETAILS,
  isEditablePlaceholder,
} from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFloatingTop(window.scrollY > 520);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const exploreLinks = [
    { label: 'My Projects', id: 'portfolio' },
    { label: 'Education', id: 'education' },
    { label: 'Tools', id: 'tools' },
    { label: 'Work Process', id: 'process' },
  ];

  const sanitizedWhatsapp = CONTACT_DETAILS.whatsapp.replace(/[^\d]/g, '');

  const connectItems = [
    {
      label: 'LinkedIn',
      href: isEditablePlaceholder(CONTACT_DETAILS.linkedinUrl)
        ? '#contact'
        : CONTACT_DETAILS.linkedinUrl,
      external: !isEditablePlaceholder(CONTACT_DETAILS.linkedinUrl),
    },
    {
      label: 'Instagram',
      href: isEditablePlaceholder(CONTACT_DETAILS.instagramUrl)
        ? '#contact'
        : CONTACT_DETAILS.instagramUrl,
      external: !isEditablePlaceholder(CONTACT_DETAILS.instagramUrl),
    },
    {
      label: 'Email',
      href: isEditablePlaceholder(CONTACT_DETAILS.email)
        ? '#contact'
        : `mailto:${CONTACT_DETAILS.email}`,
      external: false,
    },
    {
      label: 'WhatsApp',
      href: isEditablePlaceholder(CONTACT_DETAILS.whatsapp)
        ? '#contact'
        : `https://wa.me/${sanitizedWhatsapp}`,
      external: !isEditablePlaceholder(CONTACT_DETAILS.whatsapp),
    },
  ];

  return (
    <>
      <footer className="bg-[#282525] text-[#FAF8F4] pt-16 pb-10 border-t border-[#FAF8F4]/10">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F4]/12">
            {/* Column 1: Brand */}
            <div className="lg:col-span-4">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="inline-block font-serif text-[22px] font-semibold tracking-[0.06em] text-[#FAF8F4] hover:text-[#EDE5DB] transition-colors"
              >
                {BRAND_PROFILE.wordmark}
              </a>
              <p className="font-sans text-[14px] text-[#FAF8F4]/75 leading-[1.7] mt-3 max-w-xs">
                Creative ideas. Strategic thinking. Digital possibilities.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-[#B98289] mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.id);
                      }}
                      className="font-sans text-[14px] text-[#FAF8F4]/80 hover:text-[#FAF8F4] underline-offset-4 hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Explore */}
            <div className="lg:col-span-3">
              <h3 className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-[#B98289] mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5">
                {exploreLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.id);
                      }}
                      className="font-sans text-[14px] text-[#FAF8F4]/80 hover:text-[#FAF8F4] underline-offset-4 hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div className="lg:col-span-2">
              <h3 className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-[#B98289] mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5">
                {connectItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={
                        item.href === '#contact'
                          ? (e) => {
                              e.preventDefault();
                              onNavigate('contact');
                            }
                          : undefined
                      }
                      className="font-sans text-[14px] text-[#FAF8F4]/80 hover:text-[#FAF8F4] underline-offset-4 hover:underline transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#FAF8F4]/70">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <p>Copyright &copy; 2026 Nida Kiyani. All Rights Reserved.</p>
              <span className="hidden sm:inline text-[#B98289]" aria-hidden="true">
                ·
              </span>
              <p>Designed with creativity and purpose.</p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="min-h-[40px] inline-flex items-center gap-2 rounded-xl border border-[#FAF8F4]/20 px-4 py-2 text-[13px] font-medium text-[#FAF8F4] hover:border-[#B98289] hover:bg-[#6D263C] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Scroll-triggered Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed right-5 bottom-5 z-30 w-11 h-11 rounded-full bg-[#6D263C] text-[#FAF8F4] border border-[#FAF8F4]/25 shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#541B2D] hover:-translate-y-0.5 cursor-pointer ${
          showFloatingTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
