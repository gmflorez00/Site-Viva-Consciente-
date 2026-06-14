import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — Viva Consciente
        cream: {
          50: "#FEFBF6", // main background
        },
        beige: {
          100: "#F5E1CE", // alternate sections, cards
          300: "#E8C39E", // accents, borders, highlights
        },
        sage: {
          200: "#C4D6BC", // badge backgrounds, hover states
          400: "#96AF88", // decorative fills, icons, borders
          600: "#557A45", // accessible text + button bg — passes WCAG AA on white (4.99:1)
        },
        brown: {
          600: "#5C3D2E", // subtitles, secondary text
          900: "#2C1810", // primary text, footer bg
        },
      },
      fontFamily: {
        // Plus Jakarta Sans configured via next/font in layout.tsx
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "-0.01em",
      },
      lineHeight: {
        relaxed: "1.7",
        loose: "1.8",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
