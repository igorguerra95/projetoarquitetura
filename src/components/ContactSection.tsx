import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

interface ContactSectionProps {
  preselectedProject: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  typology: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  typology: 'Residencial',
  message: '',
};

const WHATSAPP_URL =
  'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20conversa%20com%20o%20escrit%C3%B3rio%20Projeto%20de%20Arquitetura.';

export function ContactSection({ preselectedProject }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [error, setError] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (!preselectedProject) return;
    setSubmitted(false);
    setForm((prev) => ({
      ...prev,
      message: prev.message
        ? prev.message
        : `Gostaria de solicitar um estudo preliminar com referência estética ao projeto ${preselectedProject}.`,
    }));
  }, [preselectedProject]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) {
      setError('Por favor, informe seu nome completo.');
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      setError('Por favor, informe um endereço de e-mail válido.');
      return;
    }
    if (!form.message.trim()) {
      setError('Descreva brevemente o terreno, a localização ou o escopo desejado.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda: Convite e Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <p className="text-xs text-muted-foreground tracking-[0.06em]">
              Contato · Atendimento Consultivo
            </p>

            <h2 className="mt-3 font-display font-medium text-secondary tracking-[-0.025em] leading-[1.04] text-[clamp(2.25rem,4vw,3.5rem)]">
              Inicie uma conversa sobre seu próximo projeto.
            </h2>

            <p className="mt-5 text-sm sm:text-base text-primary leading-[1.7] max-w-[46ch]">
              Recebemos demandas de arquitetura residencial, corporativa e interiores mediante
              agendamento prévio para avaliação técnica de viabilidade e cronograma.
            </p>

            <div className="mt-10 border-t border-border divide-y divide-border">
              <div className="py-5 flex items-start gap-4">
                <MapPin className="w-4 h-4 stroke-[1.5] text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">Endereço</p>
                  <p className="mt-1 text-sm sm:text-base font-bold text-secondary">
                    SEU ENDEREÇO AQUI
                  </p>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Phone className="w-4 h-4 stroke-[1.5] text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">Telefone e WhatsApp</p>
                  <a
                    href="tel:+5500000000000"
                    className="mt-1 inline-block text-sm sm:text-base font-bold text-secondary hover:text-primary transition-colors tabular-nums"
                  >
                    (00) 00000-0000
                  </a>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <Clock className="w-4 h-4 stroke-[1.5] text-primary mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">Horário de atendimento</p>
                  <p className="mt-1 text-sm sm:text-base font-bold text-secondary">
                    Não informado
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 min-h-[44px] border border-border bg-card text-secondary text-xs font-bold tracking-[0.04em] hover:border-secondary hover:bg-surface-subtle transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                <span>Conversar pelo WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Briefing Estrutural */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 bg-card border border-border p-6 sm:p-10 shadow-card-subtle"
          >
            {submitted ? (
              <div className="py-8 space-y-6">
                <div className="flex items-start gap-3 text-secondary">
                  <CheckCircle2 className="w-6 h-6 stroke-[1.5] text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-3xl font-medium tracking-tight">
                      Solicitação registrada com sucesso
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-primary leading-relaxed">
                      Agradecemos o contato, <strong className="font-bold text-secondary">{form.name}</strong>. Nossa equipe técnica analisará as informações referentes ao projeto{' '}
                      <strong className="font-bold text-secondary">{form.typology}</strong> e retornará pelo endereço{' '}
                      <span className="underline">{form.email}</span>.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-wrap items-center gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] bg-secondary text-secondary-foreground text-xs font-bold tracking-[0.04em] hover:bg-primary transition-colors"
                  >
                    <span>Continuar atendimento no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_STATE);
                    }}
                    className="px-5 py-3 min-h-[44px] border border-border text-xs font-bold text-primary hover:text-secondary hover:bg-surface-subtle transition-colors cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-border">
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-secondary tracking-tight">
                    Briefing de Novo Projeto
                  </h3>
                  {preselectedProject && (
                    <span className="text-xs text-muted-foreground">
                      Referência: <strong className="text-secondary">{preselectedProject}</strong>
                    </span>
                  )}
                </div>

                {error && (
                  <div
                    role="alert"
                    className="flex items-center gap-2.5 p-3.5 bg-surface-subtle border border-secondary text-xs sm:text-sm text-secondary"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 stroke-[1.75]" aria-hidden="true" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold text-secondary mb-2"
                    >
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full min-h-[44px] px-4 py-2.5 bg-background border border-border text-sm text-secondary placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold text-secondary mb-2"
                    >
                      E-mail corporativo ou pessoal
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="nome@dominio.com.br"
                      className="w-full min-h-[44px] px-4 py-2.5 bg-background border border-border text-sm text-secondary placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold text-secondary mb-2"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="w-full min-h-[44px] px-4 py-2.5 bg-background border border-border text-sm text-secondary placeholder:text-muted-foreground/70 tabular-nums focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-typology"
                      className="block text-xs font-bold text-secondary mb-2"
                    >
                      Tipologia do projeto
                    </label>
                    <select
                      id="contact-typology"
                      value={form.typology}
                      onChange={(e) => setForm({ ...form, typology: e.target.value })}
                      className="w-full min-h-[44px] px-4 py-2.5 bg-background border border-border text-sm text-secondary focus:outline-none focus:border-secondary transition-colors"
                    >
                      <option value="Residencial">Residencial</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Interiores">Interiores</option>
                      <option value="Consultoria Técnica">Consultoria Técnica</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-secondary mb-2"
                  >
                    Escopo, localização e área estimada
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Compartilhe detalhes sobre o terreno, metragem pretendida e prazo estimado."
                    className="w-full px-4 py-3 bg-background border border-border text-sm text-secondary placeholder:text-muted-foreground/70 focus:outline-none focus:border-secondary transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Atendimento confidencial com resposta direta do arquiteto responsável.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 min-h-[44px] bg-secondary text-secondary-foreground text-sm font-bold tracking-[0.03em] hover:bg-primary transition-colors cursor-pointer whitespace-nowrap shadow-card-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <span>Entrar em contato</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[1.75]" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
