import { NextRequest, NextResponse } from 'next/server'
import { AI_KNOWLEDGE } from '@/lib/data'

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return NextResponse.json({ reply: getOfflineReply(messages.at(-1)?.content || '') })
  }

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',   // free and very fast
        max_tokens: 500,
        messages: [
          { role: 'system', content: AI_KNOWLEDGE },
          ...messages.map((m: { role: string; content: string }) => ({
            role: m.role === 'assistant' ? 'assistant' : 'user',
            content: m.content,
          })),
        ],
      }),
    })

    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content
      || 'Sorry, I could not generate a response.'

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ reply: getOfflineReply(messages.at(-1)?.content || '') })
  }
}

function getOfflineReply(q: string): string {
  const lower = q.toLowerCase()
  if (lower.includes('project')) return "I've built a Library Management System (Spring Boot + MySQL + Angular), a 3D Interactive Website, and a Solar System Explorer — all deployed and live!"
  if (lower.includes('stack') || lower.includes('tech') || lower.includes('skill')) return "My stack: Java, Spring Boot, React, Angular, Node.js, MySQL, MongoDB, Docker, GitHub Actions, AWS EC2/S3."
  if (lower.includes('devops') || lower.includes('docker')) return "I build CI/CD pipelines with GitHub Actions — every push triggers Docker builds, tests, and auto-deployment to Render or AWS."
  if (lower.includes('intern') || lower.includes('hire') || lower.includes('available')) return "Yes! Actively looking for internships and entry-level roles. Email: ommprakashdebata6@gmail.com"
  return "I'm Omm Prakash Debata — full-stack developer. Ask me about my projects, skills, or experience!"
}