<div align="center">

# Omm Prakash Debata — AI-Powered Portfolio

An immersive full-stack developer portfolio built with Next.js, TypeScript, a cinematic video background, interactive animations, an AI assistant, and a working contact experience.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Groq](https://img.shields.io/badge/AI-Groq-F55036?style=for-the-badge)](https://groq.com/)

[Explore the repository](https://github.com/OmmPrakash-tech/My-Portfolio-2) · [Report an issue](https://github.com/OmmPrakash-tech/My-Portfolio-2/issues)

</div>

## Overview

This portfolio presents skills, projects, education, certifications, DevOps experience, and contact information through a responsive single-page interface. It also includes **AI-Omm**, a portfolio assistant that answers questions about the developer's background using the Groq API and continues to provide useful preset answers when no API key is configured.

## Key Features

| Feature | Description |
| --- | --- |
| Cinematic hero | Full-screen looped video background with animated floating technology cards |
| Interactive UI | Custom cursor, scroll-reveal effects, dynamic accent colors, and 3D-style flip cards |
| Project showcase | Responsive cards with technology stacks, descriptions, and live demo links |
| AI portfolio assistant | Groq-powered chatbot with a project-specific knowledge base and offline fallback responses |
| DevOps presentation | Visual CI/CD pipeline and cards for Docker, GitHub Actions, Linux, and cloud deployment |
| Education and achievements | Structured timeline of education, certifications, training, and accomplishments |
| Contact experience | Contact API with optional Resend delivery plus a pre-filled email-client fallback |
| Responsive design | Optimized layouts and interactions for desktop and mobile screens |

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | Next.js 14 App Router |
| Frontend | React 18, TypeScript, CSS3 |
| Visual effects | HTML5 video, Canvas API, CSS animations |
| AI integration | Groq Chat Completions API, Llama 3.1 8B Instant |
| Email integration | Resend API and `mailto` fallback |
| Deployment | Vercel-ready |

## Application Flow

```mermaid
flowchart TD
    A[Visitor] --> B[Next.js Portfolio]
    B --> C[Skills, Projects and Achievements]
    B --> D[AI-Omm Chat]
    B --> E[Contact Form]
    D --> F[/api/chat]
    F --> G[Groq API]
    F --> H[Offline Answers]
    E --> I[/api/contact]
    I --> J[Resend API]
    E --> K[Email App Fallback]
```

## Project Structure

```text
My-Portfolio-2/
├── app/
│   ├── api/
│   │   ├── chat/route.ts       # Groq chat endpoint and offline fallback
│   │   └── contact/route.ts    # Contact endpoint and optional Resend delivery
│   ├── globals.css             # Global styles, themes, and animations
│   ├── layout.tsx              # Root layout and SEO metadata
│   └── page.tsx                # Main portfolio page
├── components/
│   ├── AiChat.tsx              # AI assistant interface
│   ├── Contact.tsx             # Contact links and message form
│   ├── Cursor.tsx              # Animated custom cursor
│   ├── Hero.tsx                # Video hero and call-to-action buttons
│   ├── Navbar.tsx              # Fixed navigation bar
│   ├── Sections.tsx            # Skills, projects, DevOps, education, and awards
│   └── ThreeBackground.tsx     # Animated Canvas particle network
├── lib/
│   ├── data.ts                 # Portfolio content and AI knowledge base
│   └── useReveal.ts            # Reusable scroll-reveal hook
├── public/
│   └── hero-bg.mp4             # Hero background video
├── next.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 18.17 or newer
- npm
- A Groq API key for live AI responses (optional)
- A Resend API key for server-side email delivery (optional)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OmmPrakash-tech/My-Portfolio-2.git
   cd My-Portfolio-2
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```env
   GROQ_API_KEY=your_groq_api_key
   RESEND_API_KEY=your_resend_api_key
   ```

   Both variables are optional. Without `GROQ_API_KEY`, AI-Omm uses its built-in offline answers. Without `RESEND_API_KEY`, the contact form still opens the visitor's email application with a pre-filled message.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

> Never commit `.env.local` or expose API keys in frontend code.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates an optimized production build |
| `npm start` | Runs the production build |
| `npm run lint` | Checks the project with Next.js ESLint rules |

## API Routes

### `POST /api/chat`

Accepts the current chat history and returns an AI-generated or offline fallback response.

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Tell me about your projects"
    }
  ]
}
```

### `POST /api/contact`

Accepts a visitor's contact details and optionally sends them through Resend.

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Hello, I would like to connect."
}
```

## Customization

Most portfolio content is centralized in [`lib/data.ts`](./lib/data.ts). Update these exports to personalize the site:

- `SKILLS` — languages, frameworks, databases, DevOps, and cloud skills
- `PROJECTS` — project descriptions, stacks, and demo links
- `STATS` — headline statistics
- `PIPELINE` and `DEVOPS_CARDS` — DevOps workflow and capabilities
- `EDUCATION` and `CERTS` — education, certifications, and achievements
- `CONTACT_LINKS` — email, GitHub, LinkedIn, and phone links
- `AI_KNOWLEDGE` — information used by AI-Omm when answering questions

You can replace [`public/hero-bg.mp4`](./public/hero-bg.mp4) to use a different hero video and edit [`app/globals.css`](./app/globals.css) to change the color system, typography, animations, and responsive layouts.

## Production Build

Test the optimized build locally before deployment:

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Import this GitHub repository into [Vercel](https://vercel.com/new).
2. Add `GROQ_API_KEY` and `RESEND_API_KEY` under **Settings → Environment Variables** if you want the live integrations.
3. Deploy the project. Vercel automatically detects the Next.js configuration.

## Author

**Omm Prakash Debata**

- GitHub: [@OmmPrakash-tech](https://github.com/OmmPrakash-tech)
- LinkedIn: [omm-prakash-debata](https://www.linkedin.com/in/omm-prakash-debata-/)

If you find this project useful, consider giving the repository a star.
