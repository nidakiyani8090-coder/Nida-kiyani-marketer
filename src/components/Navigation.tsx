import type { NavLinkItem } from '../types/portfolio';

interface DesktopNavigationProps {
  links: NavLinkItem[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function DesktopNavigation({
  links,
  activeSection,
  onNavigate,
}: DesktopNavigationProps) {
  return (
    <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
      {links.map((item) => {
        const isActive = activeSection === item.sectionId;
        return (
          <a
            key={item.sectionId}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.sectionId);
            }}
            aria-current={isActive ? 'page' : undefined}
            className={`relative py-1.5 text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
              isActive
                ? 'text-[#6D263C]'
                : 'text-[#282525]/80 hover:text-[#6D263C]'
            }`}
          >
            {item.label}
            <span
              aria-hidden="true"
              className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#6D263C] origin-left transition-transform duration-200 ${
                isActive ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}

interface MobileNavigationProps {
  isOpen: boolean;
  links: NavLinkItem[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function MobileNavigation({
  isOpen,
  links,
  activeSection,
  onNavigate,
}: MobileNavigationProps) {
  return (
    <div
      id="mobile-navigation-drawer"
      aria-hidden={!isOpen}
      className={`lg:hidden overflow-hidden transition-all duration-300 ease-out bg-[#FAF8F4] border-b border-[#282525]/10 ${
        isOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 border-b-0'
      }`}
    >
      <nav
        aria-label="Mobile Navigation"
        className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col gap-1"
      >
        {links.map((item) => {
          const isActive = activeSection === item.sectionId;
          return (
            <a
              key={item.sectionId}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.sectionId);
              }}
              className={`min-h-[44px] flex items-center justify-between px-3 rounded-lg text-[14px] font-medium transition-colors duration-200 ${
                isActive
                  ? 'text-[#6D263C] bg-[#EDE5DB]/70'
                  : 'text-[#282525] hover:bg-[#EDE5DB]/40 hover:text-[#6D263C]'
              }`}
            >
              <span>{item.label}</span>
              {isActive && (
                <span className="w-4 h-[2px] bg-[#6D263C]" aria-hidden="true" />
              )}
            </a>
          );
        })}

        <div className="pt-3 mt-2 border-t border-[#282525]/10">
          <a
            href="#contact"
            tabIndex={isOpen ? 0 : -1}
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="min-h-[44px] w-full inline-flex items-center justify-center rounded-xl bg-[#6D263C] px-5 py-2.5 text-[14px] font-medium text-[#FAF8F4] hover:bg-[#541B2D] transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </div>
  );
}
