import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { ArchitecturalProject, HERO_PROJECT, STUDIO_METRICS } from '../data/projects';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroProps {
  onContactClick: () => void;
  onOpenProject: (project: ArchitecturalProject) => void;
}

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setDisplayValue(target);
      return;
    }

    const duration = 1100;
    const startTime = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue.toLocaleString('pt-BR')}
      {suffix}
    </span>
  );
}

export function Hero({ onContactClick, onOpenProject }: HeroProps) {
  const staggerTransition = (delay: number) => ({
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  return (
    <section id="inicio" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Hero Split 12-Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Coluna Editorial Esquerda */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={staggerTransition(0)}
                className="text-xs sm:text-sm text-muted-foreground tracking-[0.06em]"
              >
                Arquitetura Autoral · Residencial &amp; Comercial
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={staggerTransition(0.08)}
                className="mt-5 font-display font-medium text-secondary leading-[0.98] tracking-[-0.03em] text-[clamp(3rem,5.4vw,5.75rem)]"
              >
                A forma exata onde a luz esculpe o silêncio.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={staggerTransition(0.16)}
                className="mt-6 text-base sm:text-lg text-primary leading-[1.68] max-w-[54ch]"
              >
                Concebemos residências contemporâneas, sedes corporativas e espaços interiores guiados
                pelo rigor estrutural, pela verdade dos materiais e pela permanência no tempo.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={staggerTransition(0.24)}
                className="mt-9 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                <button
                  type="button"
                  onClick={onContactClick}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[44px] bg-secondary text-secondary-foreground text-sm font-bold tracking-[0.03em] hover:bg-primary transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-card-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                </button>

                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 py-2.5 min-h-[44px] text-sm font-bold text-secondary hover:text-primary border-b border-secondary/30 hover:border-primary transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Explorar portfólio</span>
                  <ArrowDownRight className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Nota Editorial de Obra em Destaque */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={staggerTransition(0.32)}
              className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground"
            >
              <span>
                Obra em destaque · <strong className="font-bold text-secondary">{HERO_PROJECT.title}</strong>
              </span>
              <span className="tabular-nums">
                {HERO_PROJECT.location} · {HERO_PROJECT.area} · {HERO_PROJECT.year}
              </span>
            </motion.div>
          </div>

          {/* Coluna Visual Direita — Altura Simétrica ao Texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(0.14)}
            className="lg:col-span-6 flex"
          >
            <button
              type="button"
              onClick={() => onOpenProject(HERO_PROJECT)}
              aria-label={`Ampliar detalhes do projeto ${HERO_PROJECT.title}`}
              className="group relative w-full min-h-[340px] lg:min-h-full border border-border bg-card overflow-hidden text-left cursor-pointer shadow-card-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <ArchitecturalImage
                src={HERO_PROJECT.image}
                alt={HERO_PROJECT.alt}
                title={HERO_PROJECT.title}
                loading="eager"
                className="w-full h-full aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent pointer-events-none"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex items-end justify-between gap-4 text-secondary-foreground">
                <div>
                  <p className="text-xs text-secondary-foreground/80 tracking-[0.04em]">
                    {HERO_PROJECT.category} · {HERO_PROJECT.year}
                  </p>
                  <p className="font-display text-2xl sm:text-3xl font-medium tracking-tight mt-0.5">
                    {HERO_PROJECT.title}
                  </p>
                </div>
                <span className="inline-flex items-center justify-center w-10 h-10 border border-secondary-foreground/35 bg-secondary/45 backdrop-blur-xs text-secondary-foreground group-hover:bg-secondary group-hover:border-secondary-foreground/60 transition-colors shrink-0">
                  <Maximize2 className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                </span>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Faixa de Métricas Full-Width Abaixo do Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 border border-border bg-card shadow-card-subtle"
        >
          {STUDIO_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`p-6 sm:p-8 flex flex-col justify-between ${
                idx % 2 === 0 ? 'border-r border-border lg:border-r' : 'lg:border-r lg:last:border-r-0'
              } ${idx < 2 ? 'border-b border-border lg:border-b-0' : ''}`}
            >
              <p className="font-display text-4xl sm:text-5xl font-medium tracking-[-0.03em] text-secondary">
                <CountUpNumber target={metric.value} suffix={metric.suffix} />
              </p>
              <div className="mt-4">
                <p className="text-sm font-bold text-secondary">{metric.label}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Divisor Editorial Discreto */}
        <div className="mt-14 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground tracking-[0.04em]">
          <span>Obras Selecionadas · Arquitetura Residencial · Edifícios Comerciais · Interiores</span>
          <span className="tabular-nums">2008 — 2026</span>
        </div>
      </div>
    </section>
  );
}
