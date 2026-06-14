"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position to toggle the frosted-glass navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-beige-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl px-6 md:px-12 lg:px-24 mx-auto">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex flex-col leading-tight group"
            aria-label="Viva Consciente — página inicial"
          >
            {/* Two-line logo with weight contrast for elegance */}
            <span
              className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-brown-900" : "text-brown-900"
              }`}
            >
              Viva
            </span>
            <span
              className={`font-light text-base tracking-widest uppercase transition-colors duration-300 ${
                scrolled ? "text-sage-400" : "text-sage-400"
              }`}
              style={{ letterSpacing: "0.18em" }}
            >
              Consciente
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-sage-400 relative group ${
                  scrolled ? "text-brown-900" : "text-brown-900"
                }`}
              >
                {link.label}
                {/* Animated underline on hover */}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-sage-400 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <a
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contato");
            }}
            className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
          >
            Agendar Consulta
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-brown-900 hover:bg-beige-100 transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <motion.div
              animate={menuOpen ? "open" : "closed"}
              className="flex flex-col gap-1.5 w-6"
            >
              <motion.span
                variants={{
                  open: { rotate: 45, y: 8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-brown-900 rounded-full origin-center"
              />
              <motion.span
                variants={{
                  open: { opacity: 0, x: -10 },
                  closed: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-brown-900 rounded-full"
              />
              <motion.span
                variants={{
                  open: { rotate: -45, y: -8 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full bg-brown-900 rounded-full origin-center"
              />
            </motion.div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-beige-100"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-brown-900 font-medium py-2 border-b border-beige-100 last:border-0 hover:text-sage-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contato");
                }}
                className="btn-primary text-sm mt-2 text-center"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
