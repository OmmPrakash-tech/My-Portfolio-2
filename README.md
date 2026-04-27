# Omm Prakash Debata — 3D Portfolio (Next.js)

A full-stack Next.js 14 portfolio with a Three.js racing scene background, particle field, 3D flip cards, AI chat powered by Claude, and a contact form.

## Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   ├── chat/route.ts        # AI chat endpoint (Anthropic Claude)
│   │   └── contact/route.ts     # Contact form endpoint (Resend email)
│   ├── globals.css              # All CSS design tokens & styles
│   ├── layout.tsx               # Root layout + metadata
│   └── page.tsx                 # Main page assembling all sections
├── components/
│   ├── ThreeBackground.tsx      # Three.js racing scene + particle canvas
│   ├── Cursor.tsx               # Custom animated cursor
│   ├── Navbar.tsx               # Fixed navigation bar
│   ├── Hero.tsx                 # Hero section with floating cards
│   ├── Sections.tsx             # Stats, Skills, Projects, DevOps, Edu/Certs
│   ├── AiChat.tsx               # AI chat widget (calls /api/chat)
│   └── Contact.tsx              # Contact form (calls /api/contact)
├── lib/
│   ├── data.ts                  # All portfolio data + AI knowledge base
│   └── useReveal.ts             # Scroll-reveal hook
├── .env.example                 # Environment variables template
├── next.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local`:
- `ANTHROPIC_API_KEY` — from [console.anthropic.com](https://console.anthropic.com) (enables live AI chat)
- `RESEND_API_KEY` — from [resend.com](https://resend.com) (optional, for actual email delivery)

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

## Features

| Feature | Description |
|---|---|
| 🚗 Three.js Scene | Animated night-drive racing car scene as page background |
| ✨ Particle Field | Glowing connected particle network overlay |
| 🖱️ Custom Cursor | Animated glow cursor with hover effects |
| 📦 3D Flip Cards | Hover-to-flip project cards with live demo links |
| 🤖 AI Chat | Claude-powered chatbot that knows your resume |
| 📬 Contact Form | Form that triggers mailto + optional Resend delivery |
| 📱 Responsive | Mobile-first responsive layout |
| ⚡ App Router | Next.js 14 App Router with TypeScript |

## Customising

All portfolio data is in `lib/data.ts` — update `SKILLS`, `PROJECTS`, `STATS`, `EDUCATION`, `CERTS`, and `CONTACT_LINKS` to make it yours.

The AI's knowledge base (`AI_KNOWLEDGE`) is also in `lib/data.ts` — update it with your own background for accurate AI responses.
