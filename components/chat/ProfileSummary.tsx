"use client";

import { motion } from "framer-motion";

interface PatientProfile {
  contact: { name: string; email: string; whatsapp: string };
  mainComplaint: string;
  thematicAreas: string[];
  emotionalTone: string;
  summary: string;
}

interface ProfileSummaryProps {
  profile: PatientProfile | null;
  onClose: () => void;
}

const WHATSAPP_URL = "https://wa.me/5511969171629?text=Ol%C3%A1%2C%20Julia!%20Conversei%20com%20sua%20assistente%20no%20site%20Viva%20Consciente%20e%20gostaria%20de%20agendar%20minha%20conversa%20gratuita.%20%F0%9F%92%9A";

export default function ProfileSummary({ profile, onClose }: ProfileSummaryProps) {
  const firstName = profile?.contact?.name?.split(" ")[0] || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full overflow-y-auto"
    >
      {/* Header verde */}
      <div
        className="px-5 pt-6 pb-5 text-center"
        style={{ backgroundColor: "#557A45" }}
      >
        <div
          className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-white font-bold text-base m-0">
          {firstName ? `Obrigada, ${firstName}!` : "Obrigada pela conversa!"}
        </h2>
        <p className="text-white text-xs mt-1 m-0" style={{ opacity: 0.85 }}>
          Suas informações foram enviadas à Julia
        </p>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 px-5 py-5 space-y-4">
        <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>
          A Julia receberá um resumo desta conversa antes do seu primeiro atendimento, para que a sessão já comece de um jeito mais personalizado para você.
        </p>

        {/* Áreas identificadas */}
        {profile?.thematicAreas && profile.thematicAreas.length > 0 && (
          <div
            className="rounded-xl p-4"
            style={{ backgroundColor: "#F5E1CE" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#557A45" }}>
              Áreas identificadas na conversa
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.thematicAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#C4D6BC", color: "#2C1810" }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tom emocional */}
        {profile?.emotionalTone && (
          <div
            className="rounded-xl p-4"
            style={{ backgroundColor: "#FEFBF6", border: "1px solid #E8C39E" }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#96AF88" }}>
              Como você chegou até aqui
            </p>
            <p className="text-sm" style={{ color: "#5C3D2E" }}>
              {profile.emotionalTone}
            </p>
          </div>
        )}

        <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>
          O próximo passo é dar início à sua jornada com uma conversa gratuita com a Julia, sem compromisso.
        </p>
      </div>

      {/* CTA + Fechar */}
      <div className="p-4 space-y-2" style={{ borderTop: "1px solid #E8C39E" }}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#25D366", textDecoration: "none" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M11.9 0C5.335 0 0 5.293 0 11.813c0 2.088.55 4.044 1.508 5.742L.057 23.928a.5.5 0 0 0 .614.614l6.42-1.447a11.826 11.826 0 0 0 4.81 1.018C18.465 24.113 24 18.82 24 12.3 24 5.78 18.465.487 11.9.487zm0 21.626a9.833 9.833 0 0 1-4.97-1.352l-.356-.211-3.691.832.848-3.593-.233-.37A9.765 9.765 0 0 1 2 11.813C2 6.4 6.45 2 11.9 2s9.9 4.4 9.9 9.813-4.45 9.813-9.9 9.813z"/>
          </svg>
          Agendar conversa gratuita
        </a>
        <button
          onClick={onClose}
          className="w-full py-2 rounded-xl text-sm transition-opacity hover:opacity-70"
          style={{ color: "#96AF88" }}
        >
          Fechar
        </button>
      </div>
    </motion.div>
  );
}
