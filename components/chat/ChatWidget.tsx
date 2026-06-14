"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ConsentScreen from "./ConsentScreen";
import ChatWindow from "./ChatWindow";

type WidgetState = "closed" | "consent" | "chatting";

export default function ChatWidget() {
  const [state, setState] = useState<WidgetState>("closed");

  function open() {
    setState("consent");
  }

  function close() {
    setState("closed");
  }

  function acceptConsent() {
    setState("chatting");
  }

  const isOpen = state !== "closed";

  return (
    <>
      {/* Botão flutuante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 left-6 z-50"
          >
            {/* Anel de pulso */}
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ backgroundColor: "#557A45" }}
              aria-hidden="true"
            />
            <button
              onClick={open}
              className="relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                backgroundColor: "#557A45",
              }}
              aria-label="Abrir assistente de acolhimento"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
            >
              <div
                className="px-3 py-1.5 rounded-lg text-xs font-medium shadow-md"
                style={{ backgroundColor: "#2C1810", color: "#FEFBF6" }}
              >
                Fale com a assistente da Julia
                <div
                  className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                  style={{ borderRightColor: "#2C1810" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Painel do chat */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay escuro (apenas mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 sm:hidden"
              style={{ backgroundColor: "rgba(44,24,16,0.4)" }}
              onClick={close}
            />

            {/* Painel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className={[
                "fixed z-50 flex flex-col overflow-hidden shadow-2xl",
                // Mobile: tela cheia
                "inset-0 rounded-none",
                // Desktop: widget fixo no canto
                "sm:inset-auto sm:bottom-6 sm:left-6 sm:w-[380px] sm:h-[600px] sm:rounded-2xl sm:max-h-[calc(100vh-48px)]",
              ].join(" ")}
              style={{ backgroundColor: "#FEFBF6" }}
              role="dialog"
              aria-modal="true"
              aria-label="Assistente de acolhimento"
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                style={{
                  backgroundColor: "#557A45",
                  borderBottom: "1px solid #96AF88",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    J
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight m-0">
                      Assistente da Julia
                    </p>
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#C4D6BC" }}
                      />
                      <p
                        className="text-xs m-0"
                        style={{ color: "#C4D6BC" }}
                      >
                        Viva Consciente
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={close}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  aria-label="Fechar assistente"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Conteúdo dinâmico */}
              <div className="flex-1 min-h-0 relative">
                <AnimatePresence mode="wait">
                  {state === "consent" && (
                    <motion.div
                      key="consent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 overflow-y-auto"
                    >
                      <ConsentScreen onAccept={acceptConsent} onCancel={close} />
                    </motion.div>
                  )}

                  {state === "chatting" && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col"
                    >
                      <ChatWindow onClose={close} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
