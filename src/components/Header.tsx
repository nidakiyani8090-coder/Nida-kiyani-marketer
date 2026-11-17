import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_PROFILE, NAV_LINKS } from '../data/portfolioData';
import { DesktopNavigation, MobileNavigation } from './Navigation';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const handleLinkClick = (sectionId: string) => {
    setIsMobileOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled || isMobileOpen
          ? 'bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#282525]/10 shadow-[0_4px_20px_rgba(40,37,37,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex flex-col shrink-0 group focus-visible:outline-2"
        >
          <span className="font-serif text-[19px] sm:text-[21px] font-semibold tracking-[0.06em] text-[#282525] leading-tight whitespace-nowrap group-hover:text-[#6D263C] transition-colors">
            {BRAND_PROFILE.wordmark}
          </span>
          <span className="font-sans text-[9.5px] font-medium tracking-[0.22em] text-[#77716D] uppercase leading-tight mt-0.5 whitespace-nowrap">
            {BRAND_PROFILE.subtitle}
          </span>
        </a>

        <DesktopNavigation
          links={NAV_LINKS}
          activeSection={activeSection}
          onNavigate={handleLinkClick}
        />

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#6D263C] px-5 py-2.5 text-[14px] font-medium text-[#FFFFFF] whitespace-nowrap shrink-0 hover:bg-[#541B2D] hover:-translate-y-0.5 transition-all duration-200 shadow-xs"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#282525]/15 text-[#282525] hover:border-[#6D263C] hover:text-[#6D263C] transition-colors"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <MobileNavigation
        isOpen={isMobileOpen}
        links={NAV_LINKS}
        activeSection={activeSection}
        onNavigate={handleLinkClick}
      />
    </header>
  );
}
