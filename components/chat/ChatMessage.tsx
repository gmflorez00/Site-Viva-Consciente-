"use client";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

export default function ChatMessage({ role, content, isStreaming }: ChatMessageProps) {
  const isUser = role === "user";

  // Remove os marcadores de controle que não devem ser visíveis ao usuário
  const visibleContent = content
    .replace(/\[CRISE_DETECTADA\]/g, "")
    .replace(/\[COLETA_CONCLUIDA\]/g, "")
    .trim();

  if (!visibleContent && !isStreaming) return null;

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {!isUser && (
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-sage-600 flex items-center justify-center mr-2 mt-1">
          <span className="text-white text-xs font-bold">J</span>
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
          isUser
            ? "bg-sage-600 text-white rounded-br-sm"
            : "bg-cream-100 text-brown-900 rounded-bl-sm border border-beige-200"
        }`}
        style={{
          backgroundColor: isUser ? "#557A45" : "#FEFBF6",
          color: isUser ? "#fff" : "#2C1810",
          borderColor: !isUser ? "#E8C39E" : undefined,
        }}
      >
        <p className="whitespace-pre-wrap m-0">{visibleContent}</p>
        {isStreaming && (
          <span className="inline-block w-2 h-4 ml-1 bg-current opacity-70 animate-pulse rounded-sm align-middle" />
        )}
      </div>
    </div>
  );
}
