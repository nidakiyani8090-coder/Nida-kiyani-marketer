import { useEffect, useState } from 'react';
import { ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { PORTFOLIO_PROJECTS, isEditablePlaceholder } from '../data/portfolioData';
import type { PortfolioProject } from '../types/portfolio';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface PortfolioProps {
  onInquireAboutProject?: (projectTitle: string) => void;
}

export function Portfolio({ onInquireAboutProject }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);
  const [linkNotice, setLinkNotice] = useState<boolean>(false);

  const categories = [
    'All',
    ...Array.from(new Set(PORTFOLIO_PROJECTS.map((project) => project.category))),
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  useEffect(() => {
    if (!selectedProject) {
      setLinkNotice(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-20 lg:py-24 bg-[#EDE5DB]/45 border-y border-[#282525]/8"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="font-sans text-[12px] font-medium tracking-[0.22em] text-[#6D263C] uppercase mb-3">
              SELECTED CREATIVE WORK
            </p>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] font-semibold leading-[1.2] text-[#282525] mb-4">
              My Portfolio
            </h2>
            <p className="font-sans text-[15px] lg:text-[16px] text-[#77716D] leading-[1.7]">
              A collection of creative concepts, promotional campaigns and
              digital marketing practice projects.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter portfolio projects by category"
          className="flex flex-wrap items-center gap-2 mb-10"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[40px] px-4 py-2 rounded-lg text-[13px] font-medium whitespace-nowrap transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#6D263C] text-[#FFFFFF]'
                    : 'bg-[#FAF8F4] text-[#282525] border border-[#282525]/10 hover:border-[#6D263C]/40 hover:text-[#6D263C]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3-Column Desktop / 2-Column Tablet / 1-Column Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.05}>
              <article className="group h-full flex flex-col rounded-2xl bg-[#FAF8F4] border border-[#282525]/10 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(40,37,37,0.08)]">
                {/* Project Thumbnail */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Open details for ${project.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE5DB] text-left cursor-pointer"
                >
                  <EditorialImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#282525]/65 via-[#282525]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5"
                  >
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#FAF8F4] tracking-wide">
                      <span>Inspect Concept Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>

                {/* Card Body */}
                <div className="flex-1 flex flex-col p-6">
                  <div className="flex items-center justify-between gap-2 text-[12px] font-medium text-[#6D263C] mb-2">
                    <span className="tracking-[0.06em] uppercase">
                      {project.category}
                    </span>
                    <span className="font-sans tabular-nums text-[#77716D]">
                      {project.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[#282525] leading-snug mb-2.5">
                    {project.title}
                  </h3>

                  <p className="font-sans text-[14px] text-[#77716D] leading-[1.65] mb-5 flex-1">
                    {project.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-[#282525]/10 flex items-center justify-between gap-3">
                    <p className="font-sans text-[12.5px] text-[#77716D] truncate">
                      {project.tools.join(' · ')}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-[13.5px] font-medium text-[#6D263C] hover:text-[#541B2D] whitespace-nowrap shrink-0 underline underline-offset-4 decoration-[#B98289] hover:decoration-[#6D263C] transition-colors cursor-pointer"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Dedicated Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#282525]/65 backdrop-blur-xs"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FAF8F4] border border-[#282525]/15 shadow-2xl">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#FAF8F4]/95 backdrop-blur-sm border-b border-[#282525]/10">
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#6D263C] uppercase tracking-[0.12em]">
                <span>Project {selectedProject.number}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProject.category}</span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project detail modal"
                className="w-10 h-10 rounded-xl border border-[#282525]/15 flex items-center justify-center text-[#282525] hover:border-[#6D263C] hover:text-[#6D263C] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-7">
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#282525]/10 bg-[#EDE5DB]">
                <EditorialImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3
                  id="project-modal-title"
                  className="font-serif text-[26px] sm:text-[32px] font-semibold text-[#282525] leading-tight mb-3"
                >
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-[15px] text-[#77716D] leading-[1.7]">
                  {selectedProject.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#282525]/10">
                <div>
                  <h4 className="font-serif text-[18px] font-semibold text-[#282525] mb-2.5">
                    Project Objectives
                  </h4>
                  <ul className="space-y-2 text-[14px] text-[#282525]/85 leading-relaxed list-disc pl-5">
                    {selectedProject.objectives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-5">
                  <div>
                    <h4 className="font-serif text-[18px] font-semibold text-[#282525] mb-1.5">
                      Target Audience
                    </h4>
                    <p className="font-sans text-[14px] text-[#282525]/85 leading-relaxed">
                      {selectedProject.targetAudience}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-serif text-[18px] font-semibold text-[#282525] mb-1.5">
                      Tools Used
                    </h4>
                    <p className="font-sans text-[14px] font-medium text-[#6D263C]">
                      {selectedProject.tools.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#282525]/10">
                <div>
                  <h4 className="font-serif text-[18px] font-semibold text-[#282525] mb-2">
                    Creative Approach
                  </h4>
                  <p className="font-sans text-[14px] text-[#282525]/85 leading-relaxed">
                    {selectedProject.creativeApproach}
                  </p>
                </div>

                <div>
                  <h4 className="font-serif text-[18px] font-semibold text-[#282525] mb-2">
                    Key Learnings
                  </h4>
                  <ul className="space-y-2 text-[14px] text-[#282525]/85 leading-relaxed list-disc pl-5">
                    {selectedProject.keyLearnings.map((learning) => (
                      <li key={learning}>{learning}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl bg-[#EDE5DB]/70 border border-[#282525]/10 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#77716D]">
                    Practice Concept Note &amp; Asset Link
                  </p>
                  <p className="font-sans text-[13.5px] text-[#282525] mt-0.5">
                    {selectedProject.externalLinkPlaceholder}
                  </p>
                  {linkNotice && (
                    <p className="font-sans text-[12.5px] text-[#6D263C] mt-1">
                      This project uses an editable link placeholder. Update{' '}
                      <code className="font-mono text-[12px]">
                        externalLinkPlaceholder
                      </code>{' '}
                      in your portfolio data with a live Canva or Google Drive
                      URL.
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {isEditablePlaceholder(
                    selectedProject.externalLinkPlaceholder
                  ) ? (
                    <button
                      type="button"
                      onClick={() => setLinkNotice(true)}
                      className="min-h-[42px] inline-flex items-center gap-1.5 rounded-xl border border-[#6D263C] px-4 py-2 text-[13.5px] font-medium text-[#6D263C] hover:bg-[#6D263C] hover:text-[#FFFFFF] transition-colors"
                    >
                      <span>Project Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={selectedProject.externalLinkPlaceholder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[42px] inline-flex items-center gap-1.5 rounded-xl border border-[#6D263C] px-4 py-2 text-[13.5px] font-medium text-[#6D263C] hover:bg-[#6D263C] hover:text-[#FFFFFF] transition-colors"
                    >
                      <span>Open External Asset</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {onInquireAboutProject && (
                    <button
                      type="button"
                      onClick={() => {
                        const title = selectedProject.title;
                        setSelectedProject(null);
                        onInquireAboutProject(title);
                      }}
                      className="min-h-[42px] inline-flex items-center rounded-xl bg-[#6D263C] px-4 py-2 text-[13.5px] font-medium text-[#FFFFFF] hover:bg-[#541B2D] transition-colors"
                    >
                      Discuss Similar Concept
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
