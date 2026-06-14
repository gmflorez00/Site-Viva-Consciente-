import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import ChatWidget from "@/components/chat/ChatWidget";

// Plus Jakarta Sans — loaded via next/font for performance and zero layout shift
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viva Consciente | Psicologia — Julia Macedo Flores",
  description:
    "Psicóloga Julia Macedo Flores oferece terapia individual e em grupo online. Inicie sua jornada para o bem-estar emocional com acolhimento e profissionalismo.",
  keywords: [
    "psicóloga",
    "terapia online",
    "saúde mental",
    "bem-estar",
    "Julia Macedo Flores",
    "Viva Consciente",
  ],
  openGraph: {
    title: "Viva Consciente | Psicologia — Julia Macedo Flores",
    description:
      "Psicóloga Julia Macedo Flores oferece terapia individual e em grupo online.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body className="font-jakarta antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
                     focus:bg-white focus:text-brown-900 focus:px-4 focus:py-2
                     focus:rounded-lg focus:shadow-lg focus:font-semibold focus:text-sm"
        >
          Ir para o conteúdo principal
        </a>
        {children}
        {/* Fixed WhatsApp floating action button — visible on all pages */}
        <WhatsAppFAB />
        {/* Agente de acolhimento — bottom-left para não conflitar com WhatsApp FAB */}
        <ChatWidget />
      </body>
    </html>
  );
}
