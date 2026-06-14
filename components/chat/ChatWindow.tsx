"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import CrisisAlert from "./CrisisAlert";
import ProfileSummary from "./ProfileSummary";

type Message = { role: "user" | "assistant"; content: string };
type ChatState = "chatting" | "crisis" | "profile_ready";

interface PatientProfile {
  contact: { name: string; email: string; whatsapp: string };
  mainComplaint: string;
  thematicAreas: string[];
  emotionalTone: string;
  summary: string;
}

interface ChatWindowProps {
  onClose: () => void;
}

const WELCOME_MESSAGE =
  "Olá! Que bom que você está aqui. 💚\n\nEste espaço é tranquilo e seguro — estou aqui para ouvir você antes do seu primeiro encontro com a Julia.\n\nO que te trouxe a buscar apoio psicológico neste momento?";

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [chatState, setChatState] = useState<ChatState>("chatting");
  const [profile, setProfile] = useState<PatientProfile | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingContent]);

  useEffect(() => {
    if (!isLoading) {
      inputRef.current?.focus();
    }
  }, [isLoading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setStreamingContent("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Erro na resposta da API");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullContent = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullContent += chunk;
        setStreamingContent(fullContent);
      }

      const assistantMessage: Message = {
        role: "assistant",
        content: fullContent,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setStreamingContent("");

      // Detectar marcadores de controle
      if (fullContent.includes("[CRISE_DETECTADA]")) {
        setChatState("crisis");
      } else if (fullContent.includes("[COLETA_CONCLUIDA]")) {
        setChatState("profile_ready");
        generateAndSendReport([...updatedMessages, assistantMessage]);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Desculpe, houve um problema técnico. Por favor, tente novamente ou entre em contato diretamente com a Julia via WhatsApp.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  async function generateAndSendReport(allMessages: Message[]) {
    try {
      const response = await fetch("/api/send-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages }),
      });
      if (response.ok) {
        const data = await response.json();
        setProfile(data.profile);
      }
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div className="flex flex-col h-full relative">
      {/* Crisis overlay */}
      <AnimatePresence>
        {chatState === "crisis" && (
          <CrisisAlert onClose={onClose} />
        )}
      </AnimatePresence>

      {/* Profile summary overlay */}
      <AnimatePresence>
        {chatState === "profile_ready" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-10 overflow-y-auto"
            style={{ backgroundColor: "#FEFBF6" }}
          >
            <ProfileSummary profile={profile} onClose={onClose} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{ backgroundColor: "#FEFBF6" }}
      >
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}

        {/* Streaming message */}
        {isLoading && streamingContent && (
          <ChatMessage
            role="assistant"
            content={streamingContent}
            isStreaming
          />
        )}

        {/* Typing indicator (antes de começar a stremar) */}
        {isLoading && !streamingContent && (
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#557A45" }}
            >
              <span className="text-white text-xs font-bold">J</span>
            </div>
            <div
              className="px-4 py-3 rounded-2xl rounded-bl-sm border"
              style={{
                backgroundColor: "#FEFBF6",
                borderColor: "#E8C39E",
              }}
            >
              <div className="flex gap-1 items-center h-4">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full animate-bounce"
                    style={{
                      backgroundColor: "#96AF88",
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="px-4 py-3 border-t"
        style={{
          backgroundColor: "#fff",
          borderColor: "#E8C39E",
        }}
      >
        <div
          className="flex items-end gap-2 rounded-xl border px-3 py-2"
          style={{
            borderColor: "#E8C39E",
            backgroundColor: "#FEFBF6",
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading || chatState !== "chatting"}
            placeholder="Digite sua mensagem..."
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm outline-none py-1 max-h-28 leading-relaxed"
            style={{
              color: "#2C1810",
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading || chatState !== "chatting"}
            className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-40"
            style={{ backgroundColor: "#557A45" }}
            aria-label="Enviar mensagem"
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
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <p
          className="text-center text-xs mt-2"
          style={{ color: "#96AF88" }}
        >
          Enter para enviar · Shift+Enter para nova linha
        </p>
      </div>
    </div>
  );
}
