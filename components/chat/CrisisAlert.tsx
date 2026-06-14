"use client";

import { motion } from "framer-motion";

interface CrisisAlertProps {
  onClose: () => void;
}

export default function CrisisAlert({ onClose }: CrisisAlertProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute inset-0 flex flex-col z-20 overflow-y-auto"
      style={{ backgroundColor: "#FEFBF6" }}
    >
      {/* Header */}
      <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid #E8C39E" }}>
        <div className="flex justify-center mb-3">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#F5E1CE" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5C3D2E"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
        <h2
          className="text-center font-bold text-base"
          style={{ color: "#2C1810" }}
        >
          Você não está sozinho(a)
        </h2>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 px-5 py-4 space-y-4">
        <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>
          Percebo que você está passando por um momento muito difícil. Isso importa, e sua dor é real.
          Em situações assim, é fundamental contar com apoio especializado imediatamente.
        </p>

        <p className="text-sm leading-relaxed" style={{ color: "#5C3D2E" }}>
          Por favor, entre em contato com um dos serviços abaixo agora:
        </p>

        {/* CVV */}
        <a
          href="tel:188"
          className="flex items-center gap-4 p-4 rounded-xl transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#557A45", textDecoration: "none" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.48 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-white text-base m-0">CVV — 188</p>
            <p className="text-white text-xs m-0" style={{ opacity: 0.85 }}>Centro de Valorização da Vida · 24h · Gratuito</p>
          </div>
        </a>

        {/* SAMU */}
        <a
          href="tel:192"
          className="flex items-center gap-4 p-4 rounded-xl transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#5C3D2E", textDecoration: "none" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-white text-base m-0">SAMU — 192</p>
            <p className="text-white text-xs m-0" style={{ opacity: 0.85 }}>Serviço de Atendimento Móvel de Urgência</p>
          </div>
        </a>

        {/* CAPS */}
        <a
          href="https://www.google.com/maps/search/CAPS+perto+de+mim"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 rounded-xl border transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#fff", borderColor: "#E8C39E", textDecoration: "none" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#F5E1CE" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#5C3D2E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-sm m-0" style={{ color: "#2C1810" }}>CAPS — Centro de Atenção Psicossocial</p>
            <p className="text-xs m-0" style={{ color: "#5C3D2E" }}>Buscar CAPS mais próximo</p>
          </div>
        </a>

        <p className="text-xs leading-relaxed text-center" style={{ color: "#96AF88" }}>
          Cuidar de si é um ato de coragem. Você merece apoio.
        </p>
      </div>

      {/* Botão fechar */}
      <div className="p-4" style={{ borderTop: "1px solid #E8C39E" }}>
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-80"
          style={{ backgroundColor: "#F5E1CE", color: "#5C3D2E" }}
        >
          Fechar conversa
        </button>
      </div>
    </motion.div>
  );
}
