"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Contact Info Item ────────────────────────────────────────────────────────
function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex items-start gap-4 group ${href ? "hover:no-underline" : ""}`}
    >
      <div className="w-11 h-11 rounded-xl bg-sage-200/50 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-400 transition-colors duration-200">
        <span className="text-sage-400 group-hover:text-white transition-colors duration-200">
          {icon}
        </span>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wide font-semibold text-brown-600/60 mb-0.5">
          {label}
        </p>
        <p className="text-brown-900 font-medium text-sm">{value}</p>
      </div>
    </Wrapper>
  );
}

// ─── Contact Section ──────────────────────────────────────────────────────────
export default function Contact() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Basic form submission handler — replace with real backend/API integration
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulated async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contato"
      className="section-padding bg-beige-100/50"
      aria-label="Entre em contato"
    >
      <div className="container-xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Vamos conversar?
          </h2>
          <div className="divider-line mx-auto mb-6" />
          <p className="text-brown-600 max-w-xl mx-auto leading-relaxed">
            Dê o primeiro passo. Preencha o formulário ou entre em contato
            diretamente pelo WhatsApp — responderei em breve.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* ── Form (1 of 2 columns — 50/50 split) ──────────────────────── */}
          <AnimatedSection
            variant="fadeLeft"
            className="lg:col-span-1 h-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-beige-100 h-full">
              {submitted ? (
                // Success state
                <div className="flex flex-col items-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-sage-200/60 flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <path
                        d="M8 16l5 5 11-10"
                        stroke="#96AF88"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="16" cy="16" r="13" stroke="#96AF88" strokeWidth="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-brown-900 mb-3">
                    Mensagem enviada!
                  </h3>
                  <p className="text-brown-600 text-sm leading-relaxed max-w-sm">
                    Obrigada pelo contato. Responderei em até 24 horas úteis.
                    Caso precise de retorno mais rápido, me envie uma mensagem
                    no WhatsApp.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ nome: "", email: "", telefone: "", mensagem: "" });
                    }}
                    className="mt-6 text-sage-400 text-sm font-semibold hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label
                        htmlFor="nome"
                        className="block text-xs font-semibold text-brown-600 uppercase tracking-wide mb-2"
                      >
                        Nome completo <span className="text-sage-400">*</span>
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formState.nome}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="form-input"
                        autoComplete="name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-brown-600 uppercase tracking-wide mb-2"
                      >
                        E-mail <span className="text-sage-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="form-input"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Telefone */}
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-xs font-semibold text-brown-600 uppercase tracking-wide mb-2"
                    >
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formState.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="form-input"
                      autoComplete="tel"
                    />
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label
                      htmlFor="mensagem"
                      className="block text-xs font-semibold text-brown-600 uppercase tracking-wide mb-2"
                    >
                      Mensagem <span className="text-sage-400">*</span>
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      rows={5}
                      value={formState.mensagem}
                      onChange={handleChange}
                      placeholder="Conte um pouco sobre o que está buscando..."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 text-base relative overflow-hidden"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar mensagem"
                    )}
                  </button>

                  <p className="text-xs text-brown-600/60 text-center">
                    Suas informações são confidenciais e não serão compartilhadas com terceiros.
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* ── Sidebar (1 of 2 columns — 50/50 split) ───────────────────── */}
          <AnimatedSection
            variant="fadeRight"
            delay={0.15}
            className="lg:col-span-1 h-full"
          >
            {/* Contact info card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-beige-100 h-full flex flex-col">
              <h3 className="font-bold text-brown-900 text-lg mb-6">
                Informações de contato
              </h3>
              <div className="flex flex-col gap-8">

              {/* WhatsApp */}
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                }
                label="WhatsApp"
                value="(11) 96917-1629"
                href="https://wa.me/5511969171629?text=Ol%C3%A1%2C%20Julia!%20Vim%20pelo%20site%20Viva%20Consciente%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia."
              />

              {/* Email */}
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
                label="E-mail"
                // Substitua pelo endereço de e-mail real
                value="julia@vivaconsciente.com.br"
                href="mailto:julia@vivaconsciente.com.br"
              />

              {/* Hours */}
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Horários"
                value="Seg – Sex: 8h às 20h · Sáb: 8h às 14h"
              />

              {/* Location */}
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Modalidade"
                value="Atendimento 100% Online"
              />

              {/* Response time */}
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                }
                label="Tempo de resposta"
                value="Retorno em até 24h úteis"
              />

              {/* Session duration */}
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                label="Sessões"
                value="Individuais · 50 minutos"
              />
              </div>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
