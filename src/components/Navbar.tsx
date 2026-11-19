import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar({ onContactClick }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-background/92 backdrop-blur-md border-border'
            : 'bg-background/80 backdrop-blur-sm border-border/70'
        }`}
      >
        <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between gap-8">
          {/* Zona 1: Marca (texto em linha única, sem subtítulo anexo) */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#inicio');
            }}
            className="font-display text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-secondary whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Projeto de Arquitetura
          </a>

          {/* Zona 2: 4 links concisos em linha única */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-8 text-sm font-normal text-primary"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1 whitespace-nowrap shrink-0 text-primary hover:text-secondary transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-secondary hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zona 3: 1 ação primária */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onContactClick}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 min-h-[40px] bg-secondary text-secondary-foreground text-xs font-bold tracking-[0.04em] hover:bg-primary transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span>Entrar em contato</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menu de navegação"
              aria-expanded={drawerOpen}
              aria-controls="mobile-navigation-sheet"
              className="md:hidden inline-flex items-center justify-center w-11 h-11 border border-border bg-card text-secondary hover:bg-surface-subtle transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sheet / Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-secondary/55 backdrop-blur-xs"
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-navigation-sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[86%] max-w-sm bg-background border-l border-border p-6 flex flex-col justify-between shadow-card-elevated"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <span className="font-display text-xl font-semibold tracking-tight text-secondary whitespace-nowrap">
                    Projeto de Arquitetura
                  </span>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Fechar menu"
                    className="inline-flex items-center justify-center w-11 h-11 border border-border text-secondary hover:bg-surface-subtle transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
                  </button>
                </div>

                <nav aria-label="Menu móvel" className="mt-8 flex flex-col">
                  {NAV_LINKS.map((link, idx) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className="flex items-baseline justify-between py-4 border-b border-border text-secondary hover:text-primary transition-colors"
                    >
                      <span className="font-display text-3xl font-medium tracking-tight">
                        {link.label}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        0{idx + 1}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 space-y-4">
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>SEU ENDEREÇO AQUI</p>
                  <p className="tabular-nums">(00) 00000-0000</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    onContactClick();
                  }}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground text-sm font-bold hover:bg-primary transition-colors cursor-pointer"
                >
                  <span>Entrar em contato</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
