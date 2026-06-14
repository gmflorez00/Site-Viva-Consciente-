"use client";

import { motion } from "framer-motion";

interface ConsentScreenProps {
  onAccept: () => void;
  onCancel: () => void;
}

export default function ConsentScreen({ onAccept, onCancel }: ConsentScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full"
    >
      {/* Ícone */}
      <div className="flex justify-center mt-6 mb-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#C4D6BC" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#557A45"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto px-5 pb-4">
        <h2
          className="text-center font-bold text-base mb-1"
          style={{ color: "#2C1810" }}
        >
          Bem-vindo(a) ao espaço de acolhimento
        </h2>
        <p
          className="text-center text-xs mb-4"
          style={{ color: "#5C3D2E" }}
        >
          Assistente da Psicóloga Julia Macedo Flores
        </p>

        <div
          className="rounded-xl p-4 text-xs leading-relaxed mb-4"
          style={{ backgroundColor: "#F5E1CE", color: "#5C3D2E" }}
        >
          <p className="font-semibold mb-2" style={{ color: "#2C1810" }}>
            Antes de começar, é importante que você saiba:
          </p>
          <ul className="space-y-2 list-none p-0 m-0">
            <li className="flex gap-2">
              <span style={{ color: "#557A45" }}>•</span>
              <span>Esta é uma <strong>assistente de acolhimento inicial</strong>, não um serviço de terapia ou atendimento psicológico.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: "#557A45" }}>•</span>
              <span>Nenhum diagnóstico será feito nesta conversa.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: "#557A45" }}>•</span>
              <span>As informações compartilhadas serão enviadas <strong>exclusivamente à Psicóloga Julia</strong> para preparação do seu primeiro atendimento.</span>
            </li>
            <li className="flex gap-2">
              <span style={{ color: "#557A45" }}>•</span>
              <span>Seus dados são tratados com sigilo e em conformidade com a <strong>LGPD</strong>.</span>
            </li>
          </ul>
        </div>

        <div
          className="rounded-xl p-3 text-xs text-center"
          style={{ backgroundColor: "#fff", border: "1px solid #E8C39E" }}
        >
          <p style={{ color: "#5C3D2E", margin: 0 }}>
            Em caso de emergência:{" "}
            <strong style={{ color: "#2C1810" }}>CVV 188</strong> (24h, gratuito) ou{" "}
            <strong style={{ color: "#2C1810" }}>SAMU 192</strong>
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="p-4 space-y-2 border-t" style={{ borderColor: "#E8C39E" }}>
        <button
          onClick={onAccept}
          className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "#557A45" }}
        >
          Aceitar e começar
        </button>
        <button
          onClick={onCancel}
          className="w-full py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-70"
          style={{ color: "#5C3D2E" }}
        >
          Cancelar
        </button>
      </div>
    </motion.div>
  );
}
