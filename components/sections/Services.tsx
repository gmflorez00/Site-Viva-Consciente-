"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Service Card Data ────────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    title: "Terapia Individual",
    mode: "Online",
    description:
      "Um espaço exclusivo para você explorar seus pensamentos, emoções e comportamentos com profundidade. Nas sessões individuais, trabalhamos juntos para identificar padrões que limitam seu bem-estar e desenvolver estratégias práticas e personalizadas para uma vida mais plena e autêntica.",
    details: [
      "Sessões de 50 minutos via videochamada",
      "Agendamento flexível, respeitando sua rotina",
      "Abordagem baseada em evidências (TCC)",
      "Sigilo e confidencialidade garantidos",
    ],
    icon: (
      // Heart pulse — represents individual care and vitality
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M16 28C16 28 4 20 4 11.5C4 8.42 6.42 6 9.5 6C11.5 6 13.24 7.02 14.32 8.58L16 11L17.68 8.58C18.76 7.02 20.5 6 22.5 6C25.58 6 28 8.42 28 11.5C28 20 16 28 16 28Z"
          stroke="#96AF88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 15h3l2-4 3 8 2-4h4"
          stroke="#96AF88"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Terapia em Grupo",
    mode: "Online",
    description:
      "Uma experiência transformadora de escuta e apoio mútuo entre pessoas que compartilham desafios semelhantes. Os grupos terapêuticos oferecem a oportunidade única de reconhecer que não estamos sozinhos, enquanto praticamos novas formas de se relacionar em um ambiente seguro e acolhedor.",
    details: [
      "Grupos pequenos (máx. 8 participantes)",
      "Encontros semanais de 90 minutos",
      "Temas focados: ansiedade, autoestima, vínculos",
      "Facilitação profissional em todas as sessões",
    ],
    icon: (
      // People/community icon — represents group connection
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="10" r="4" stroke="#96AF88" strokeWidth="2" />
        <circle cx="22" cy="12" r="3" stroke="#96AF88" strokeWidth="2" />
        <path
          d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8"
          stroke="#96AF88"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 18c2.761 0 5 2.239 5 5v3"
          stroke="#96AF88"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// ─── Service Card Component ───────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  return (
    <AnimatedSection delay={index * 0.15}>
      {/* whileHover lift — subtle elevation feedback */}
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
        className="group relative bg-white rounded-3xl p-8 md:p-10 border border-beige-100
                   shadow-sm hover:shadow-xl hover:shadow-beige-300/30
                   transition-shadow duration-300 flex flex-col h-full"
      >
        {/* Top accent line — sage color, reveals on hover */}
        <span
          className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-sage-400/0 via-sage-400 to-sage-400/0
                        rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-6">
          {/* Icon container with sage background circle */}
          <div className="w-16 h-16 rounded-2xl bg-sage-200/40 flex items-center justify-center
                          group-hover:bg-sage-200/70 transition-colors duration-300">
            {service.icon}
          </div>

          {/* Online badge */}
          <span className="inline-flex items-center gap-1.5 bg-sage-200/50 text-sage-600 border border-sage-200
                           text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-400 inline-block" aria-hidden="true" />
            {service.mode}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-brown-900 mb-4 group-hover:text-sage-400 transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-brown-600 leading-relaxed mb-8 flex-grow">
          {service.description}
        </p>

        {/* Detail list */}
        <ul className="space-y-3 mb-8">
          {service.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-brown-600">
              <span
                className="mt-0.5 w-5 h-5 rounded-full bg-sage-200/60 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5l2 2 4-4"
                    stroke="#96AF88"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {detail}
            </li>
          ))}
        </ul>

        {/* CTA link */}
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-sage-400 font-semibold text-sm
                     hover:text-brown-900 transition-colors duration-200 group/link"
        >
          Quero saber mais
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transform group-hover/link:translate-x-1 transition-transform duration-200"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </motion.div>
    </AnimatedSection>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
export default function Services() {
  return (
    <section
      id="servicos"
      className="section-padding bg-beige-100/40"
      aria-label="Serviços oferecidos"
    >
      <div className="container-xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Serviços
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            Como posso te ajudar
          </h2>
          <div className="divider-line mx-auto mb-6" />
          <p className="text-brown-600 max-w-xl mx-auto leading-relaxed">
            Oferece atendimento online com qualidade e cuidado, adaptado à sua
            realidade e necessidades.
          </p>
        </AnimatedSection>

        {/* 2-column grid — equal-height cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
