import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import {
  ArchitecturalProject,
  PORTFOLIO_PROJECTS,
  ProjectCategory,
} from '../data/projects';
import { ArchitecturalImage } from './ArchitecturalImage';

interface PortfolioProps {
  selectedProject: ArchitecturalProject | null;
  onSelectProject: (project: ArchitecturalProject | null) => void;
  onInquiryFromProject: (projectTitle: string) => void;
}

const CATEGORIES: ProjectCategory[] = ['Todos', 'Residencial', 'Comercial', 'Interiores'];

export function Portfolio({
  selectedProject,
  onSelectProject,
  onInquiryFromProject,
}: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const filteredProjects =
    activeCategory === 'Todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === activeCategory);

  const selectedIndex = selectedProject
    ? filteredProjects.findIndex((p) => p.id === selectedProject.id)
    : -1;

  const handleStep = React.useCallback(
    (direction: -1 | 1) => {
      if (!selectedProject || filteredProjects.length === 0) return;
      const baseIndex = selectedIndex === -1 ? 0 : selectedIndex;
      const nextIndex = (baseIndex + direction + filteredProjects.length) % filteredProjects.length;
      onSelectProject(filteredProjects[nextIndex]);
    },
    [selectedProject, filteredProjects, selectedIndex, onSelectProject]
  );

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onSelectProject(null);
      } else if (event.key === 'ArrowRight') {
        handleStep(1);
      } else if (event.key === 'ArrowLeft') {
        handleStep(-1);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedProject, handleStep, onSelectProject]);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Cabeçalho da Seção e Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-border"
        >
          <div className="lg:col-span-7">
            <p className="text-xs text-muted-foreground tracking-[0.06em]">
              Acervo Autoral · Galeria de Obras
            </p>
            <h2 className="mt-3 font-display font-medium text-secondary tracking-[-0.025em] leading-[1.02] text-[clamp(2.25rem,4vw,3.75rem)]">
              Obras onde estrutura e atmosfera convergem.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col lg:items-end gap-5">
            <p className="text-sm sm:text-base text-primary leading-relaxed lg:text-right max-w-[44ch]">
              Cada projeto nasce de uma resposta única ao terreno, à incidência solar e à vocação
              permanente do espaço construído.
            </p>

            {/* Controles de Filtro Interativos */}
            <div
              role="tablist"
              aria-label="Filtrar obras por categoria"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-surface-subtle border border-border"
            >
              {CATEGORIES.map((category) => {
                const active = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-2 min-h-[38px] text-xs font-bold tracking-[0.03em] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                      active
                        ? 'bg-secondary text-secondary-foreground'
                        : 'text-primary hover:text-secondary hover:bg-card'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Grid Assimétrico 12 Colunas */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const spanClass =
              activeCategory === 'Todos'
                ? project.gridSpanClass
                : filteredProjects.length === 1
                ? 'lg:col-span-12'
                : 'lg:col-span-6';

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.24), ease: 'easeOut' }}
                className={`${spanClass} group flex flex-col bg-card border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-card-elevated`}
              >
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  aria-label={`Abrir galeria fotográfica de ${project.title}`}
                  className="relative w-full text-left overflow-hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <ArchitecturalImage
                    src={project.image}
                    alt={project.alt}
                    title={project.title}
                    className={
                      activeCategory === 'Todos' && project.id === 'centro-cultural-colunata'
                        ? 'aspect-[4/3] lg:aspect-[16/11]'
                        : 'aspect-[4/3]'
                    }
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/85 text-secondary-foreground text-xs font-normal backdrop-blur-xs opacity-90 group-hover:opacity-100 transition-opacity">
                    <Expand className="w-3.5 h-3.5 stroke-[1.5]" aria-hidden="true" />
                    <span>Ampliar</span>
                  </span>
                </button>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    {/* Metadados sem pílulas, separados por ponto tipográfico */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground tabular-nums">
                      <span className="font-bold text-primary">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.area}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium tracking-[-0.02em] text-secondary">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm sm:text-base text-primary leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-bold text-secondary hover:text-primary transition-colors cursor-pointer py-1 whitespace-nowrap"
                    >
                      Ver ficha técnica
                    </button>
                    <button
                      type="button"
                      onClick={() => onInquiryFromProject(project.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary transition-colors cursor-pointer py-1 whitespace-nowrap"
                    >
                      <span>Entrar em contato</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Lightbox da Galeria de Fotos */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectProject(null)}
              className="fixed inset-0 bg-secondary/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-project-title"
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background border border-border shadow-card-elevated grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Fotografia Principal */}
              <div className="lg:col-span-7 bg-secondary relative min-h-[260px] sm:min-h-[380px]">
                <ArchitecturalImage
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  title={selectedProject.title}
                  loading="eager"
                  className="w-full h-full aspect-[4/3] lg:aspect-auto lg:min-h-[520px]"
                />

                {/* Controles de Navegação da Galeria */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 pointer-events-auto">
                    <button
                      type="button"
                      onClick={() => handleStep(-1)}
                      aria-label="Projeto anterior"
                      className="w-10 h-10 inline-flex items-center justify-center bg-secondary/85 text-secondary-foreground border border-secondary-foreground/20 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStep(1)}
                      aria-label="Próximo projeto"
                      className="w-10 h-10 inline-flex items-center justify-center bg-secondary/85 text-secondary-foreground border border-secondary-foreground/20 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                    </button>
                  </div>
                  <span className="px-3 py-1.5 bg-secondary/85 text-secondary-foreground text-xs tabular-nums">
                    {(selectedIndex >= 0 ? selectedIndex : 0) + 1} / {filteredProjects.length}
                  </span>
                </div>
              </div>

              {/* Ficha Técnica Editorial */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs text-muted-foreground tabular-nums">
                      {selectedProject.category} · {selectedProject.year} · {selectedProject.area}
                    </p>
                    <button
                      type="button"
                      onClick={() => onSelectProject(null)}
                      aria-label="Fechar galeria"
                      className="w-10 h-10 -mt-2 -mr-2 inline-flex items-center justify-center border border-border text-secondary hover:bg-surface-subtle transition-colors cursor-pointer shrink-0"
                    >
                      <X className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                    </button>
                  </div>

                  <h3
                    id="lightbox-project-title"
                    className="mt-3 font-display text-3xl sm:text-4xl font-medium tracking-[-0.02em] text-secondary"
                  >
                    {selectedProject.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-primary leading-relaxed">
                    {selectedProject.narrative}
                  </p>

                  <dl className="mt-6 pt-6 border-t border-border space-y-3 text-xs sm:text-sm">
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-muted-foreground">Localização</dt>
                      <dd className="col-span-2 text-secondary font-medium">
                        {selectedProject.location}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-muted-foreground">Sistema estrutural</dt>
                      <dd className="col-span-2 text-secondary font-medium">
                        {selectedProject.structure}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <dt className="text-muted-foreground">Materialidade</dt>
                      <dd className="col-span-2 text-secondary font-medium">
                        {selectedProject.materials}
                      </dd>
                    </div>
                  </dl>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProject.title;
                    onSelectProject(null);
                    onInquiryFromProject(title);
                  }}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground text-sm font-bold hover:bg-primary transition-colors cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
