# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint check
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

- `GOOGLE_AI_API_KEY` — Gemini API key (used for post-chat patient profile generation)
- `GMAIL_USER` / `GMAIL_APP_PASSWORD` — Gmail SMTP credentials for sending reports
- `JULIA_EMAIL` — Psychologist's email address that receives patient intake reports

## Architecture

This is a Next.js 14 (App Router) marketing and patient intake website for psychologist Julia Macedo Flores. Language: Portuguese (Brazil).

### Pages & Layout

Single-page marketing site at `app/page.tsx` composed of section components (Hero → About → Services → Testimonials → CTABand → Contact). The root layout (`app/layout.tsx`) mounts two persistent floating widgets: `WhatsAppFAB` and `ChatWidget`.

### AI-Powered Intake Chat Flow

The chat widget is the core feature. It uses a multi-LLM pipeline:

1. **`/api/chat`** — Streams responses using **Groq** (Llama 3.3-70B) to conduct an 8-stage structured intake conversation: welcome → complaint → feelings → therapy history → expectations → availability → contact info → completion.
2. **`/api/send-report`** — On conversation completion, the full chat history is sent to **Google Gemini** which generates a structured patient profile (complaint summary, emotional tone, thematic areas, attention points). The profile is formatted as HTML and emailed to the psychologist via Gmail SMTP (`nodemailer`).

Crisis detection runs in the chat API: if the message content signals a crisis, the API response includes a flag that triggers `CrisisAlert.tsx` — an overlay showing Brazilian emergency resources (CVV 188, SAMU 192, CAPS).

### Component Structure

```
components/
  chat/          # ChatWidget (state machine) → ChatWindow (messages + streaming)
                 # ConsentScreen (LGPD consent gate) → CrisisAlert → ProfileSummary
  sections/      # One component per landing page section
  layout/        # Navbar (sticky, scroll-aware) + Footer
  ui/            # Shared UI primitives
  AnimatedSection.tsx   # Framer Motion entrance wrapper
  WhatsAppFAB.tsx       # Fixed WhatsApp button (bottom-right)
```

`ChatWidget.tsx` owns the widget state machine (closed → consent → chatting → summary). `ChatWindow.tsx` owns message history, streaming logic, and triggers the `/api/send-report` call on completion.

### Styling

Tailwind CSS with a custom brand palette defined in `tailwind.config.ts`:
- **Cream/Beige** (`#FEFBF6`, `#F5E1CE`, `#E8C39E`) — backgrounds and cards
- **Sage** (`#C4D6BC`, `#96AF88`, `#557A45`) — accents, icons, buttons
- **Brown** (`#5C3D2E`, `#2C1810`) — text

Custom utility classes in `app/globals.css`: `.section-padding`, `.container-xl`, `.divider-line`, `.text-gradient`. Animations use Framer Motion; the Tailwind config also defines `fade-in` and `slide-up` keyframes.

### Anthropic SDK

The `@anthropic-ai/sdk` package is installed but not yet wired to an active feature — it is available for future use.
