import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ATELIER_IMAGE, CREATIVE_PROCESS } from '../data/projects';
import { ArchitecturalImage } from './ArchitecturalImage';

interface AboutProcessProps {
  onContactClick: () => void;
}

const PRINCIPLES = [
  {
    title: 'Proporção e Claridade',
    text: 'Cada traço responde a uma necessidade estrutural ou luminosa. Eliminamos o excesso ornamental para revelar a força silenciosa dos volumes.',
  },
  {
    title: 'Honestidade Material',
    text: 'Trabalhamos com concreto aparente, pedra natural, aço e madeira certificada em estado íntegro, respeitando o envelhecimento nobre de cada superfície.',
  },
  {
    title: 'Implantação Consciente',
    text: 'Orientação solar, ventilação cruzada e leitura topográfica precedem o desenho da forma, garantindo conforto térmico passivo e longevidade.',
  },
];

export function AboutProcess({ onContactClick }: AboutProcessProps) {
  return (
    <section
      id="sobre"
      className="bg-secondary text-secondary-foreground py-20 md:py-28 border-y border-secondary-foreground/10"
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Parte 1: Sobre e Visão Estética */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="h-full border border-secondary-foreground/15 bg-primary/30 overflow-hidden">
              <ArchitecturalImage
                src={ATELIER_IMAGE.src}
                alt={ATELIER_IMAGE.alt}
                title="Estúdio Projeto de Arquitetura"
                className="w-full h-full aspect-[3/4] lg:aspect-auto lg:min-h-[560px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-between py-2"
          >
            <div>
              <p className="text-xs text-secondary-foreground/70 tracking-[0.06em]">
                Sobre o Estúdio · Visão Estética
              </p>

              <h2 className="mt-4 font-display font-medium text-secondary-foreground tracking-[-0.025em] leading-[1.04] text-[clamp(2.25rem,4vw,3.75rem)]">
                Arquitetura como disciplina espacial e patrimônio duradouro.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-secondary-foreground/85 leading-[1.7] max-w-[62ch]">
                O escritório Projeto de Arquitetura atua na interseção entre engenharia precisa e
                sensibilidade escultórica. Nossa prática parte da convicção de que um espaço bem
                proporcionado transforma o ritmo cotidiano com discrição, precisão térmica e rigor
                construtivo.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-secondary-foreground/15">
              {PRINCIPLES.map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="font-display text-xl font-medium text-secondary-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-foreground/75 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-secondary-foreground/15 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs text-secondary-foreground/70">
                Atendimento exclusivo para projetos residenciais, corporativos e interiores.
              </p>
              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-background text-secondary text-xs font-bold tracking-[0.04em] hover:bg-surface-subtle transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Parte 2: Processo Criativo */}
        <div className="mt-20 md:mt-28 pt-16 border-t border-secondary-foreground/15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
          >
            <div className="lg:col-span-7">
              <p className="text-xs text-secondary-foreground/70 tracking-[0.06em]">
                Metodologia · Processo Criativo
              </p>
              <h3 className="mt-3 font-display font-medium text-secondary-foreground tracking-[-0.025em] leading-[1.06] text-[clamp(2rem,3.4vw,3.15rem)]">
                Do levantamento inicial à direção estética da obra.
              </h3>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-secondary-foreground/75 leading-relaxed lg:text-right">
              Quatro etapas estruturadas garantem previsibilidade de custos, fidelidade ao projeto e
              acabamento milimétrico em canteiro.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-secondary-foreground/15">
            {CREATIVE_PROCESS.map((stage, index) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                className="p-6 sm:p-8 flex flex-col justify-between gap-8 border-b sm:border-b-0 sm:border-r border-secondary-foreground/15 last:border-b-0 last:border-r-0 lg:border-b-0"
              >
                <div>
                  <span className="font-display text-4xl font-medium text-secondary-foreground/45 tabular-nums">
                    {stage.step}
                  </span>
                  <h4 className="mt-5 font-display text-2xl font-medium text-secondary-foreground tracking-tight">
                    {stage.title}
                  </h4>
                  <p className="mt-3 text-sm text-secondary-foreground/78 leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <p className="pt-4 border-t border-secondary-foreground/12 text-xs text-secondary-foreground/65">
                  {stage.deliverable}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
