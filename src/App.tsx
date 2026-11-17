import { useCallback, useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Values } from './components/Values';
import { NAV_LINKS } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [prefilledSubject, setPrefilledSubject] = useState<string>('');

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 72;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });
    setActiveSection(sectionId);
  }, []);

  const handleInquiryPrefill = useCallback(
    (subjectText: string) => {
      setPrefilledSubject(subjectText);
      scrollToSection('contact');
    },
    [scrollToSection]
  );

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.sectionId);

    const handleScrollSpy = () => {
      const scrollMarker = window.scrollY + 140;
      let current = 'home';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          if (scrollMarker >= top) {
            current = id;
          }
        }
      }

      // Ensure bottom of page maps to Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 40
      ) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Update canonical and OpenGraph URL dynamically for SEO accuracy
  useEffect(() => {
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#282525]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#6D263C] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#FAF8F4]"
      >
        Skip to main content
      </a>

      <Header activeSection={activeSection} onNavigate={scrollToSection} />

      <main id="main-content" className="flex-1">
        <Hero onNavigate={scrollToSection} />
        <About onNavigate={scrollToSection} />
        <Skills />
        <Portfolio
          onInquireAboutProject={(title) =>
            handleInquiryPrefill(`Inquiry regarding: ${title}`)
          }
        />
        <Services onSelectService={handleInquiryPrefill} />
        <Process />
        <Education />
        <Tools />
        <Values />
        <Contact prefilledSubject={prefilledSubject} />
      </main>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
