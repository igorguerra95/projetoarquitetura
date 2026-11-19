import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20Projeto%20de%20Arquitetura."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp no telefone (00) 00000-0000"
      title="WhatsApp: (00) 00000-0000"
      className="fixed bottom-5 right-5 z-40 group inline-flex items-center justify-center w-13 h-13 rounded-full bg-secondary text-secondary-foreground border border-secondary-foreground/20 shadow-card-elevated hover:bg-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border border-secondary/60 animate-whatsapp-pulse pointer-events-none"
      />
      <MessageCircle className="w-5 h-5 stroke-[1.75] relative z-10" aria-hidden="true" />
    </a>
  );
}
