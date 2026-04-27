'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTED = [
  'Tell me about your projects',
  "What's your tech stack?",
  'Explain your DevOps experience',
  'Are you available for internships?',
  "What's your strongest skill?",
]

export default function AiChat() {
  const [msgs, setMsgs] = useState<Message[]>([
    { role: 'assistant', content: "Hey! I'm an AI version of Omm Prakash Debata — Full Stack Developer & DevOps enthusiast. Ask me about my projects, skills, or anything you'd like to know." }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const msgsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [msgs, loading])

  async function send(text: string) {
    if (!text.trim() || loading) return
    const userMsg = { role: 'user' as const, content: text.trim() }
    setMsgs(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...msgs, userMsg] }),
      })
      const data = await res.json()
      setMsgs(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMsgs(prev => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="chat-section">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">// 05 — AI Powered</div>
          <h2 className="sec-title">Chat with <em>AI-Omm</em></h2>
        </div>
        <div className="chat-layout">
          <div className="chat-lhs reveal">
            <span className="ai-badge">AI-Omm — Smart Portfolio Assistant</span>
            <h3 style={{ marginTop: '1rem' }}>Ask me anything</h3>
            <p>This is an AI version of me, powered by Claude. Ask about projects, tech stack, experience, or anything you&apos;d ask in an interview!</p>
            <div className="suggested-qs">
              {SUGGESTED.map((q, i) => (
                <button key={i} className="sq" onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          </div>
          <div className="chat-box reveal">
            <div className="chat-hdr">
              <div className="chat-hdr-dot" />
              <div className="chat-hdr-title">AI Omm Prakash Debata — Online</div>
            </div>
            <div className="chat-msgs" ref={msgsRef}>
              {msgs.map((m, i) => (
                <div key={i} className={`msg ${m.role === 'user' ? 'msg-u' : 'msg-a'}`}>
                  {m.content}
                </div>
              ))}
              {loading && (
                <div className="msg msg-a">
                  <div className="typing-dots">
                    <span /><span /><span />
                  </div>
                </div>
              )}
            </div>
            <div className="chat-input-area">
              <input
                className="chat-inp"
                placeholder="Ask me anything..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send(input)}
              />
              <button className="send-b" onClick={() => send(input)} disabled={loading}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
