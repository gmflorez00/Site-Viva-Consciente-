import { GoogleGenerativeAI } from "@google/generative-ai";
import nodemailer from "nodemailer";

type Message = { role: "user" | "assistant"; content: string };

interface PatientProfile {
  contact: { name: string; email: string; whatsapp: string };
  mainComplaint: string;
  currentFeelings: string[];
  therapyHistory: { hasDoneBefore: boolean; details: string };
  expectations: string;
  availability: string;
  thematicAreas: string[];
  emotionalTone: string;
  attentionPoints: string[];
  summary: string;
}

async function generateProfile(
  messages: Message[]
): Promise<PatientProfile | null> {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

  const conversationText = messages
    .map((m) => `${m.role === "user" ? "Paciente" : "Assistente"}: ${m.content}`)
    .join("\n");

  const result = await model.generateContent(`Analise a conversa de pré-atendimento abaixo e gere um perfil estruturado em JSON.

CONVERSA:
${conversationText}

Retorne APENAS o JSON válido, sem markdown, sem texto extra, sem blocos de código:
{
  "contact": { "name": "", "email": "", "whatsapp": "" },
  "mainComplaint": "queixa principal em 1-2 frases",
  "currentFeelings": ["sentimento1", "sentimento2"],
  "therapyHistory": { "hasDoneBefore": false, "details": "" },
  "expectations": "o que espera da terapia",
  "availability": "dias e horários mencionados",
  "thematicAreas": ["ansiedade", "autoestima"],
  "emotionalTone": "tom emocional percebido (ex: ansioso mas esperançoso)",
  "attentionPoints": ["ponto de atenção 1"],
  "summary": "resumo geral para a psicóloga em 2-3 frases"
}

Preencha apenas com o que foi efetivamente mencionado na conversa. Use string vazia quando a informação não foi fornecida.`);

  try {
    let text = result.response.text().trim();
    // Remove blocos de código markdown se presentes
    text = text.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
    return JSON.parse(text) as PatientProfile;
  } catch {
    return null;
  }
}

function buildEmailHtml(profile: PatientProfile, timestamp: string): string {
  const thematicBadges = profile.thematicAreas
    .map(
      (area) =>
        `<span style="display:inline-block;background:#C4D6BC;color:#2C1810;padding:3px 10px;border-radius:20px;font-size:12px;margin:2px;">${area}</span>`
    )
    .join(" ");

  const attentionList = profile.attentionPoints
    .map((p) => `<li style="margin-bottom:4px;">${p}</li>`)
    .join("");

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#FEFBF6;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:24px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,0.08);">

    <div style="background:#557A45;padding:24px 32px;">
      <p style="color:#fff;margin:0;font-size:13px;opacity:0.85;">Viva Consciente — Pré-atendimento</p>
      <h1 style="color:#fff;margin:4px 0 0;font-size:22px;font-weight:700;">Novo perfil de paciente</h1>
      <p style="color:#C4D6BC;margin:4px 0 0;font-size:12px;">${timestamp}</p>
    </div>

    <div style="padding:32px;">

      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 12px;">Dados de Contato</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="padding:6px 0;color:#5C3D2E;font-weight:600;width:120px;">Nome</td><td style="color:#2C1810;">${profile.contact.name || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#5C3D2E;font-weight:600;">E-mail</td><td style="color:#2C1810;">${profile.contact.email || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#5C3D2E;font-weight:600;">WhatsApp</td><td style="color:#2C1810;">${profile.contact.whatsapp || "—"}</td></tr>
      </table>

      ${profile.thematicAreas.length > 0 ? `<h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 10px;">Áreas Temáticas</h2><div style="margin-bottom:24px;">${thematicBadges}</div>` : ""}

      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Queixa Principal</h2>
      <p style="color:#2C1810;margin:0 0 24px;line-height:1.6;background:#F5E1CE;border-radius:8px;padding:12px 16px;">${profile.mainComplaint || "—"}</p>

      ${profile.currentFeelings.length > 0 ? `<h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Sentimentos Relatados</h2><p style="color:#2C1810;margin:0 0 24px;">${profile.currentFeelings.join(", ")}</p>` : ""}

      ${profile.emotionalTone ? `<h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Tom Emocional Percebido</h2><p style="color:#2C1810;margin:0 0 24px;">${profile.emotionalTone}</p>` : ""}

      <h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Histórico com Terapia</h2>
      <p style="color:#2C1810;margin:0 0 24px;">${profile.therapyHistory.hasDoneBefore ? `Sim — ${profile.therapyHistory.details || "sem detalhes"}` : "Não fez terapia anteriormente"}</p>

      ${profile.expectations ? `<h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Expectativas com a Terapia</h2><p style="color:#2C1810;margin:0 0 24px;">${profile.expectations}</p>` : ""}

      ${profile.availability ? `<h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Disponibilidade</h2><p style="color:#2C1810;margin:0 0 24px;">${profile.availability}</p>` : ""}

      ${profile.attentionPoints.length > 0 ? `<h2 style="font-size:14px;text-transform:uppercase;letter-spacing:0.08em;color:#96AF88;margin:0 0 8px;">Pontos de Atenção</h2><ul style="color:#2C1810;margin:0 0 24px;padding-left:20px;">${attentionList}</ul>` : ""}

      <div style="background:#557A45;border-radius:8px;padding:16px 20px;margin-top:8px;">
        <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#C4D6BC;margin:0 0 8px;">Resumo para a Psicóloga</h2>
        <p style="color:#fff;margin:0;line-height:1.7;">${profile.summary || "—"}</p>
      </div>

    </div>

    <div style="background:#F5E1CE;padding:16px 32px;text-align:center;">
      <p style="color:#5C3D2E;font-size:12px;margin:0;">Gerado automaticamente pela assistente de acolhimento do site Viva Consciente.</p>
    </div>

  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const { messages } = (await request.json()) as { messages: Message[] };

    if (!process.env.GOOGLE_AI_API_KEY) {
      return Response.json({ error: "GOOGLE_AI_API_KEY não configurada." }, { status: 500 });
    }

    const profile = await generateProfile(messages);

    if (!profile) {
      return Response.json({ error: "Falha ao gerar perfil." }, { status: 500 });
    }

    const timestamp = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      dateStyle: "full",
      timeStyle: "short",
    });

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD && process.env.JULIA_EMAIL) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Viva Consciente — Assistente" <${process.env.GMAIL_USER}>`,
        to: process.env.JULIA_EMAIL,
        subject: `Novo perfil de pré-atendimento${profile.contact.name ? ` — ${profile.contact.name}` : ""}`,
        html: buildEmailHtml(profile, timestamp),
      });
    }

    return Response.json({ profile, timestamp });
  } catch (error) {
    console.error("[/api/send-report] Erro:", error);
    return Response.json({ error: "Erro interno ao processar relatório." }, { status: 500 });
  }
}
