"use client";

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
          {/* ── Left column: abstract visual placeholder ─────────────────── */}
          {/*
            Substitua este elemento pela foto real de Julia.
            Recomendação: imagem quadrada ou levemente retrato, mínimo 600×700px,
            com boa iluminação natural e fundo neutro.
          */}
          <AnimatedSection variant="fadeLeft" className="order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-[3rem] border-2 border-beige-300/40 pointer-events-none" />

              {/* Abstract SVG portrait placeholder */}
              <div className="relative bg-gradient-to-br from-beige-100 to-beige-300/40 rounded-[2.5rem] overflow-hidden aspect-[4/5] flex items-center justify-center">
                <svg
                  viewBox="0 0 400 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-hidden="true"
                  role="img"
                  aria-label="Espaço reservado para foto de Julia Macedo Flores"
                >
                  {/* Background warm gradient fill */}
                  <defs>
                    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5E1CE" />
                      <stop offset="100%" stopColor="#E8C39E" />
                    </linearGradient>
                    <linearGradient id="shapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C4D6BC" />
                      <stop offset="100%" stopColor="#96AF88" />
                    </linearGradient>
                  </defs>
                  <rect width="400" height="500" fill="url(#bgGrad)" />

                  {/* Large organic shape — primary */}
                  <path
                    d="M80 400 C40 320, 30 200, 80 120 C130 40, 250 20, 320 80 C390 140, 400 280, 360 380 C320 480, 200 520, 120 480 C80 460, 100 450, 80 400Z"
                    fill="url(#shapeGrad)"
                    fillOpacity="0.55"
                  />

                  {/* Second organic shape — accent */}
                  <path
                    d="M200 60 C260 40, 350 80, 370 160 C390 240, 340 340, 270 380 C200 420, 120 390, 100 310 C80 230, 140 80, 200 60Z"
                    fill="#96AF88"
                    fillOpacity="0.3"
                  />

                  {/* Leaf motif — nature, growth, wellness */}
                  <path
                    d="M200 150 C200 150, 240 180, 250 230 C260 280, 230 320, 200 340 C170 320, 140 280, 150 230 C160 180, 200 150, 200 150Z"
                    fill="#96AF88"
                    fillOpacity="0.7"
                  />
                  <line
                    x1="200"
                    y1="150"
                    x2="200"
                    y2="340"
                    stroke="#FEFBF6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeOpacity="0.6"
                  />

                  {/* Small decorative circles */}
                  <circle cx="120" cy="140" r="18" fill="#E8C39E" fillOpacity="0.5" />
                  <circle cx="300" cy="380" r="24" fill="#C4D6BC" fillOpacity="0.4" />
                  <circle cx="340" cy="120" r="12" fill="#96AF88" fillOpacity="0.4" />

                  {/* "Photo here" hint text */}
                  <text
                    x="200"
                    y="430"
                    textAnchor="middle"
                    fill="#5C3D2E"
                    fillOpacity="0.4"
                    fontSize="12"
                    fontFamily="sans-serif"
                  >
                    Foto de Julia
                  </text>
                </svg>
              </div>

              {/* Floating CRP badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-beige-100">
                <p className="text-xs text-brown-600/70 uppercase tracking-wide font-medium">
                  CRP
                </p>
                {/* Substitua pelo número real de CRP */}
                <p className="text-sm font-bold text-brown-900">[00/00000]</p>
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
                Sou psicóloga clínica com formação em Terapia
                Cognitivo-Comportamental (TCC) e pós-graduação em Saúde Mental.
                Minha prática é fundamentada na escuta acolhedora, no respeito à
                história de cada pessoa e na crença de que a mudança é possível
                para todos.
              </p>
              <p>
                Ao longo de mais de cinco anos de atuação, acompanhei pessoas de
                diferentes fases da vida — adolescentes, adultos e idosos — em
                processos que envolvem ansiedade, depressão, relacionamentos,
                autoestima e desenvolvimento pessoal. Cada trajetória é única e
                merece ser tratada com individualidade e cuidado.
              </p>
              <p>
                Acredito que a terapia é um espaço de liberdade onde você pode
                ser exatamente quem é, sem julgamentos. Meu compromisso é
                caminhar ao seu lado com ética, empatia e técnica, honrando o
                tempo e o ritmo de cada pessoa.
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
