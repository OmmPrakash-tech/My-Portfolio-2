'use client'

import { useState } from 'react'
import { CONTACT_LINKS } from '@/lib/data'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch {
      // fallback: open mailto
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:ommprakashdebata6@gmail.com?subject=${subject}&body=${body}`
    setTimeout(() => { setSubmitted(true); setLoading(false) }, 800)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">// 06 — Contact</div>
          <h2 className="sec-title">Let&apos;s <em>Connect</em></h2>
        </div>
        <div className="contact-layout">
          <div className="c-links reveal">
            {CONTACT_LINKS.map((l, i) => (
              <a key={i} className="c-link" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <span className="c-ico">{l.ico}</span>
                <div>
                  <div className="c-label">{l.label}</div>
                  <div className="c-val">{l.val}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="contact-form reveal">
            <div className="form-title">Send a Message</div>
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="fg">
                  <label>Name</label>
                  <input placeholder="Your name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="fg">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="fg">
                  <label>Message</label>
                  <textarea placeholder="Write your message..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button className="f-submit" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
                <p style={{ fontSize: '.65rem', color: 'var(--muted)', marginTop: '.8rem', textAlign: 'center', lineHeight: 1.7 }}>
                  Will open your email app pre-filled — guaranteed delivery to{' '}
                  <span style={{ color: 'var(--a1)' }}>ommprakashdebata6@gmail.com</span>
                </p>
              </form>
            ) : (
              <div className="f-success" style={{ display: 'block' }}>
                <div className="f-success-ico">✅</div>
                <div style={{ fontFamily: 'var(--fh)', fontSize: '1.1rem', fontWeight: 800, marginBottom: '.5rem' }}>Message Sent!</div>
                <p style={{ fontSize: '.74rem', color: 'var(--muted2)' }}>Thanks! Omm will get back to you soon.</p>
                <button className="mag-btn mag-btn-s" style={{ marginTop: '1.2rem' }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}>
                  Send Another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
