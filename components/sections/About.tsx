"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Badge component ─────────────────────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 bg-sage-200/60 text-brown-600 text-xs font-semibold px-3 py-1.5 rounded-full border border-sage-200">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <section
      id="sobre"
      className="section-padding bg-cream-50"
      aria-label="Sobre Julia Macedo Flores"
    >
      <div className="container-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left column: photo ───────────────────────────────────────── */}
          <AnimatedSection variant="fadeLeft" className="order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-[3rem] border-2 border-beige-300/40 pointer-events-none" />

              {/* Photo */}
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5]">
                <Image
                  src="/principal.png"
                  alt="Julia Macedo Flores, psicóloga"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating CRP badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-beige-100">
                <p className="text-xs text-brown-600/70 uppercase tracking-wide font-medium">
                  CRP
                </p>
                <p className="text-sm font-bold text-brown-900">06/191966</p>
              </div>

              {/* Floating years experience badge */}
              <div className="absolute -top-4 -left-4 bg-sage-400 rounded-2xl px-4 py-3 shadow-lg">
                <p className="text-xs text-white/80 uppercase tracking-wide font-medium">
                  Experiência
                </p>
                <p className="text-sm font-bold text-white">+5 anos</p>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right column: bio text ────────────────────────────────────── */}
          <AnimatedSection variant="fadeRight" delay={0.1} className="order-1 lg:order-2">
            {/* Section label */}
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-4">
              Sobre mim
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-6 leading-tight">
              Olá, sou{" "}
              <span className="text-sage-400">Julia Macedo Flores</span>
            </h2>

            <div className="divider-line mb-8" />

            <div className="space-y-4 text-brown-600 leading-relaxed">
              <p>
                Sou Julia, psicóloga, com trabalho voltado à Terapia
                Cognitivo-Comportamental, Psicologia Positiva e consciência
                emocional.
              </p>
              <p>
                O projeto Vida Consciente nasceu da minha experiência clínica e
                de um profundo processo de autoconhecimento: muitas pessoas
                estão emocionalmente sobrecarregadas, mas sem clareza sobre o
                que as levou a esse estado.
              </p>
              <p>
                Vivemos em uma cultura marcada pelo medo e pela sensação
                constante de ameaça, o que nos leva ao modo automático —
                sobrevivendo mais do que vivendo de fato, desconectados de
                nossa identidade e emoções. O Vida Consciente surge como um
                espaço para desenvolver esse olhar.
              </p>
              <p className="italic text-sage-600 font-medium border-l-2 border-sage-200 pl-4">
                Um espaço de acolhimento, mas também de orientação. De escuta,
                mas também de direcionamento.
              </p>
              <p>
                Meu trabalho tem como objetivo ajudar cada pessoa a compreender
                seu próprio funcionamento emocional, identificar padrões e
                construir novas formas de pensar, sentir e agir.
              </p>
              <p>
                Acredito que a consciência é o primeiro passo para qualquer
                mudança. E que, ao nos tornarmos mais conscientes, nos
                tornamos mais capazes de escolher — com mais liberdade,
                presença e autenticidade.
              </p>
            </div>

            {/* Specialty badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              <Badge>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#96AF88" strokeWidth="1.5" />
                  <path d="M4 6l1.5 1.5L8 4.5" stroke="#96AF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Terapia Cognitivo-Comportamental
              </Badge>
              <Badge>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#96AF88" strokeWidth="1.5" />
                  <path d="M4 6l1.5 1.5L8 4.5" stroke="#96AF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Ansiedade & Depressão
              </Badge>
              <Badge>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#96AF88" strokeWidth="1.5" />
                  <path d="M4 6l1.5 1.5L8 4.5" stroke="#96AF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Autoestima & Autoconhecimento
              </Badge>
              <Badge>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#96AF88" strokeWidth="1.5" />
                  <path d="M4 6l1.5 1.5L8 4.5" stroke="#96AF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Relacionamentos
              </Badge>
              <Badge>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="#96AF88" strokeWidth="1.5" />
                  <path d="M4 6l1.5 1.5L8 4.5" stroke="#96AF88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Atendimento Online
              </Badge>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
