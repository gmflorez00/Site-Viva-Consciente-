"use client";

import AnimatedSection from "@/components/AnimatedSection";

// ─── Reasons list ─────────────────────────────────────────────────────────────
const reasons = [
  "Se sente confusa, mas sabe que precisa mudar",
  "Quer melhorar de vida, mas não sabe por onde começar",
  "Percebe padrões que se repetem, mas não consegue sair deles",
  "Busca autoconhecimento, incluindo suas sombras e emoções difíceis",
  "Quer desenvolver clareza emocional para tomar decisões mais seguras",
  "Sente que está vivendo no automático e quer retomar o controle da própria vida",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7l3 3 6-6"
        stroke="#96AF88"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── For Who Section ───────────────────────────────────────────────────────────
export default function ForWho() {
  return (
    <section
      id="para-quem"
      className="section-padding bg-beige-100/40"
      aria-label="Para quem é o Vida Consciente"
    >
      <div className="container-xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Para quem é
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Este espaço é para você que
          </h2>
          <div className="divider-line mx-auto" />
        </AnimatedSection>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto mb-12">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason} delay={index * 0.08}>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-beige-100 shadow-sm h-full">
                <span
                  className="mt-0.5 w-6 h-6 rounded-full bg-sage-200/60 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <CheckIcon />
                </span>
                <p className="text-brown-600 leading-relaxed">{reason}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing statement */}
        <AnimatedSection delay={0.3}>
          <p className="text-center text-brown-900 font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Aqui, o foco não é apenas entender o que você sente — mas compreender{" "}
            <span className="text-sage-600">por que sente</span>, como isso te
            afeta e o que fazer com isso.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
