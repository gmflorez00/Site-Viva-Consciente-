"use client";

import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

// Custom cubic-bezier easing — smooth deceleration
const customEase = [0.22, 1, 0.36, 1] as unknown as Transition["ease"];

// Stagger delays for the hero entrance animation cascade
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: customEase },
});

export default function Hero() {
  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Apresentação principal"
    >
      {/* Background gradient — cream to warm beige */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #FEFBF6 0%, #F5E1CE 55%, #EDD4B8 100%)",
        }}
      />

      {/* Decorative abstract organic SVG shape — sage tones, top-right */}
      {/* This is a purely decorative element; aria-hidden keeps screen readers unaffected */}
      <div
        className="absolute top-0 right-0 -z-10 opacity-40 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="680"
          height="680"
          viewBox="0 0 680 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M580 80 C660 180, 700 320, 640 450 C580 580, 420 650, 300 620 C180 590, 60 480, 40 340 C20 200, 120 60, 250 30 C380 0, 500 -20, 580 80Z"
            fill="#C4D6BC"
            fillOpacity="0.6"
          />
          <path
            d="M540 120 C610 210, 640 340, 580 460 C520 580, 370 630, 260 600 C150 570, 60 460, 50 330 C40 200, 130 90, 250 60 C370 30, 470 30, 540 120Z"
            fill="#96AF88"
            fillOpacity="0.25"
          />
        </svg>
      </div>

      {/* Second decorative shape — bottom-left, smaller */}
      <div
        className="absolute bottom-0 left-0 -z-10 opacity-30 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="380"
          height="380"
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 320 C-20 240, -30 120, 60 50 C150 -20, 300 10, 350 110 C400 210, 360 360, 260 380 C160 400, 140 400, 60 320Z"
            fill="#E8C39E"
            fillOpacity="0.7"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container-xl section-padding w-full mx-auto">
        <div className="max-w-3xl">
          {/* Eyebrow label — small badge above headline */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 bg-sage-200/60 text-brown-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              <span
                className="w-1.5 h-1.5 rounded-full bg-sage-400 inline-block"
                aria-hidden="true"
              />
              Psicologia Clínica Online
            </span>
          </motion.div>

          {/* Main headline — high-impact, warm, human */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brown-900 mb-6"
            style={{ lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            Sua jornada para o{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-sage-400">bem-estar</span>
              {/* Decorative underline behind the word */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 Q50 0 100 4 Q150 8 200 2"
                  stroke="#E8C39E"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            começa aqui
          </motion.h1>

          {/* Subtitle with psychologist name */}
          <motion.div {...fadeUp(0.2)} className="mb-8">
            <p className="text-lg md:text-xl text-brown-600 leading-relaxed mb-3">
              Um espaço seguro para autoconhecimento, cura emocional e
              crescimento pessoal — no conforto da sua casa.
            </p>
            <p className="text-sm font-medium text-brown-600/80 tracking-wide">
              {/* Substitua [número CRP] pelo número real da psicóloga */}
              <span className="font-semibold text-brown-900">
                Julia Macedo Flores
              </span>{" "}
              · Psicóloga Clínica · CRP: [número CRP]
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Primary CTA — WhatsApp */}
            <a
              href="https://wa.me/5511969171629?text=Ol%C3%A1%2C%20Julia!%20Vim%20pelo%20site%20Viva%20Consciente%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
              aria-label="Agendar consulta via WhatsApp"
            >
              {/* WhatsApp icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Agendar via WhatsApp
            </a>

            {/* Secondary CTA — smooth scroll to About */}
            <button
              onClick={() => handleScrollTo("#sobre")}
              className="btn-secondary text-base px-8 py-4"
            >
              Saiba mais
            </button>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {/* Placeholder avatar circles representing clients */}
              {["#C4D6BC", "#E8C39E", "#96AF88", "#F5E1CE"].map(
                (color, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-cream-50 flex items-center justify-center text-white text-xs font-semibold"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                )
              )}
            </div>
            <p className="text-sm text-brown-600">
              <span className="font-semibold text-brown-900">+100 pessoas</span>{" "}
              iniciaram sua jornada
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs text-brown-600/60 tracking-widest uppercase">
            Explorar
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-sage-400"
          >
            <path
              d="M8 3L8 13M8 13L4 9M8 13L12 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
