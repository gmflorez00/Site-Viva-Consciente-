"use client";
// components/layout/Footer.tsx

const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/vivaconsciente",
    // Substitua pelo perfil real do Instagram
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/juliamacedoflores",
    // Substitua pelo perfil real do LinkedIn
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-brown-900 text-cream-50"
      aria-label="Rodapé"
    >
      {/* Main footer content */}
      <div className="container-xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div>
            {/* Logo */}
            <div className="mb-4">
              <span className="font-bold text-2xl text-cream-50 tracking-tight block">
                Viva
              </span>
              <span
                className="font-light text-base text-sage-400 uppercase tracking-widest block"
                style={{ letterSpacing: "0.18em" }}
              >
                Consciente
              </span>
            </div>
            <p className="text-cream-50/60 text-sm leading-relaxed max-w-xs mb-6">
              Psicologia clínica online com acolhimento, ética e
              comprometimento com o seu bem-estar emocional.
            </p>
            {/* CRP */}
            {/* Substitua pelo número real de CRP */}
            <p className="text-cream-50/40 text-xs font-medium">
              CRP: [00/00000] · Julia Macedo Flores
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-cream-50 text-sm uppercase tracking-widest mb-6">
              Links rápidos
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-cream-50/60 text-sm hover:text-sage-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Social */}
          <div>
            <h3 className="font-semibold text-cream-50 text-sm uppercase tracking-widest mb-6">
              Contato
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="https://wa.me/5511969171629?text=Ol%C3%A1%2C%20Julia!%20Vim%20pelo%20site%20Viva%20Consciente%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-50/60 text-sm hover:text-sage-400 transition-colors duration-200 flex items-center gap-2"
                >
                  {/* Substitua pelo número real */}
                  WhatsApp: (11) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:julia@vivaconsciente.com.br"
                  // Substitua pelo e-mail real
                  className="text-cream-50/60 text-sm hover:text-sage-400 transition-colors duration-200"
                >
                  julia@vivaconsciente.com.br
                </a>
              </li>
              <li className="text-cream-50/60 text-sm">
                Seg – Sex: 8h às 20h
              </li>
              <li className="text-cream-50/60 text-sm">
                Sábado: 8h às 14h
              </li>
            </ul>

            {/* Social media icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-cream-50/20 flex items-center justify-center
                             text-cream-50/60 hover:text-sage-400 hover:border-sage-400
                             transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-50/10">
        <div className="container-xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream-50/40 text-xs text-center sm:text-left">
            © 2025 Viva Consciente · Todos os direitos reservados
          </p>
          <p className="text-cream-50/40 text-xs">
            Desenvolvido com cuidado
          </p>
        </div>
      </div>
    </footer>
  );
}
