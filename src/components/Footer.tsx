import React from 'react';

export function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-border">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-secondary">
              Projeto de Arquitetura
            </p>
            <p className="mt-3 text-sm text-primary leading-relaxed max-w-[38ch]">
              Arquitetura contemporânea, design estrutural e interiores autorais com rigor técnico e
              permanência estética.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold text-secondary mb-3">Navegação</p>
            <ul className="space-y-2 text-sm text-primary">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#inicio');
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#portfolio');
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#sobre');
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Sobre e Processo
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#contato');
                  }}
                  className="hover:text-secondary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2 text-sm text-primary">
            <p className="text-xs font-bold text-secondary mb-3">Estúdio</p>
            <p>SEU ENDEREÇO AQUI</p>
            <p className="tabular-nums">
              <a href="tel:+5500000000000" className="hover:text-secondary transition-colors">
                (00) 00000-0000
              </a>
            </p>
            <p className="text-xs text-muted-foreground">Horário: Não informado</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Projeto de Arquitetura. Todos os direitos reservados.</p>
          <p>Arquitetura · Urbanismo · Design de Interiores</p>
        </div>
      </div>
    </footer>
  );
}
