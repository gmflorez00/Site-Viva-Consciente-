"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";

// Typed cubic-bezier easing to satisfy Framer Motion v12 strict types
const customEase = [0.22, 1, 0.36, 1] as unknown as Transition["ease"];
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Allow triggering a different animation variant
  variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";
}

const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
};

// Reusable scroll-triggered animation wrapper.
// Uses Framer Motion whileInView so sections animate in as they enter the viewport.
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: customEase }
      }
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
