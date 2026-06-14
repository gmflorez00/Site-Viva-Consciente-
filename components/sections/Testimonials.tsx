"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AnimatedSection from "@/components/AnimatedSection";

// ─── Testimonial Data — fictional placeholder names ───────────────────────────
const testimonials = [
  {
    id: 1,
    name: "Mariana S.",
    role: "Designer, 28 anos",
    text: "Comecei a terapia com Julia em um momento muito difícil da minha vida. Ela tem uma escuta genuína e uma capacidade incrível de me ajudar a enxergar as situações de outro ângulo. Em poucos meses, senti uma transformação real na forma como lido com a ansiedade no trabalho.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rafael T.",
    role: "Engenheiro, 34 anos",
    text: "Sempre fui cético quanto à terapia online, mas a experiência com a Julia mudou completamente minha visão. O ambiente virtual não tira nada da profundidade do processo. Ela cria um espaço seguro onde me sinto livre para falar sobre qualquer coisa.",
    rating: 5,
  },
  {
    id: 3,
    name: "Camila R.",
    role: "Professora, 41 anos",
    text: "A Julia tem uma sensibilidade e uma inteligência emocional raras. Sinto que ela realmente se importa com meu progresso. O grupo terapêutico que participo foi uma das melhores decisões que já tomei — aprendo muito com as histórias dos outros participantes.",
    rating: 5,
  },
  {
    id: 4,
    name: "Lucas M.",
    role: "Estudante, 22 anos",
    text: "Entrei na terapia sem saber bem o que esperar, mas a Julia me deixou confortável desde a primeira sessão. Hoje consigo reconhecer meus gatilhos, estabelecer limites e me comunicar melhor nos meus relacionamentos. É um investimento que vale cada centavo.",
    rating: 5,
  },
  {
    id: 5,
    name: "Fernanda O.",
    role: "Empreendedora, 37 anos",
    text: "O que me impressiona na Julia é a combinação de técnica sólida com acolhimento humano. Ela não te diz o que fazer — ela te acompanha para você mesmo encontrar as respostas. Esse processo me ensinou a confiar mais em mim mesma.",
    rating: 5,
  },
];

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="#E8C39E"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.441L7 9l-3.09 1.63.59-3.441L2 4.632l3.455-.502L7 1z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <div className="h-full px-3">
      <div className="bg-white rounded-3xl p-8 border border-beige-100 shadow-sm h-full flex flex-col relative overflow-hidden">
        {/* Decorative oversized quote mark in top-right corner */}
        <span
          className="absolute top-4 right-6 text-8xl font-serif text-beige-300/60 leading-none pointer-events-none select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Stars */}
        <div className="mb-4">
          <StarRating count={testimonial.rating} />
        </div>

        {/* Testimonial text */}
        <blockquote className="text-brown-600 leading-relaxed text-sm md:text-base flex-grow relative z-10">
          {testimonial.text}
        </blockquote>

        {/* Author */}
        <footer className="mt-6 pt-4 border-t border-beige-100 flex items-center gap-3">
          {/* Avatar placeholder — initials circle */}
          <div
            className="w-10 h-10 rounded-full bg-sage-200 flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <span className="text-sage-400 font-bold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-brown-900 text-sm">{testimonial.name}</p>
            <p className="text-brown-600/70 text-xs">{testimonial.role}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
export default function Testimonials() {
  const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [isPlaying, setIsPlaying] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const toggleAutoplay = useCallback(() => {
    const ap = autoplayPlugin.current as unknown as { stop?: () => void; play?: () => void };
    if (isPlaying) {
      ap.stop?.();
    } else {
      ap.play?.();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="depoimentos"
      className="section-padding bg-cream-50"
      aria-label="Depoimentos de clientes"
    >
      <div className="container-xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sage-600 font-semibold text-sm uppercase tracking-widest mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brown-900 mb-4">
            O que dizem sobre o processo
          </h2>
          <div className="divider-line mx-auto mb-6" />
          <p className="text-brown-600 max-w-xl mx-auto leading-relaxed">
            Histórias reais de pessoas que escolheram investir no próprio bem-estar
            e encontraram um caminho de transformação.
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <AnimatedSection delay={0.1}>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container -mx-3">
              {testimonials.map((t) => (
                <div key={t.id} className="embla__slide">
                  <TestimonialCard testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-center gap-6 mt-10">
            {/* Prev button */}
            <button
              onClick={scrollPrev}
              aria-label="Depoimento anterior"
              className="w-10 h-10 rounded-full border border-beige-300 flex items-center justify-center
                         text-brown-600 hover:bg-sage-600 hover:border-sage-600 hover:text-white
                         transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onDotClick(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "w-6 h-2.5 bg-sage-600"
                      : "w-2.5 h-2.5 bg-beige-300 hover:bg-sage-200"
                  }`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={scrollNext}
              aria-label="Próximo depoimento"
              className="w-10 h-10 rounded-full border border-beige-300 flex items-center justify-center
                         text-brown-600 hover:bg-sage-600 hover:border-sage-600 hover:text-white
                         transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Pause / play — WCAG 2.1 SC 2.2.2 requires auto-updating content to be pauseable */}
            <button
              onClick={toggleAutoplay}
              aria-label={isPlaying ? "Pausar rotação automática" : "Retomar rotação automática"}
              className="w-10 h-10 rounded-full border border-beige-300 flex items-center justify-center
                         text-brown-600 hover:bg-sage-600 hover:border-sage-600 hover:text-white
                         transition-all duration-200"
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="3.5" height="10" rx="1" fill="currentColor" />
                  <rect x="8.5" y="2" width="3.5" height="10" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 2l9 5-9 5V2z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
