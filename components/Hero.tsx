'use client'

import { FLOAT_CARDS } from '@/lib/data'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-bg">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '177.78vh',
      minWidth: '100%',
      height: '100%',
      minHeight: '56.25vw',
      transform: 'translate(-50%, -50%)',
      objectFit: 'cover',
      pointerEvents: 'none',
    }}
  >
    <source src="/hero-bg.mp4" type="video/mp4" />
  </video>
  <div className="hero-video-overlay" />
  <div className="hero-video-overlay2" />
</div>

      <div className="floating-cards">
        {FLOAT_CARDS.map((card, i) => (
          <div
            key={i}
            className="float-card"
            style={card.style as React.CSSProperties}
          >
            <span>{card.text}</span>
          </div>
        ))}
      </div>

      <div className="hero-eyebrow">// Full Stack Engineer - DevOps - Cloud</div>
      <h1 className="hero-name">
        <span className="g1">Omm Prakash</span>
        <br />
        <span className="g2">Debata</span>
      </h1>
      <p className="hero-sub">
        B.Tech CS — Centurion University — Building scalable web apps, REST APIs & CI/CD pipelines. Spring Boot · React · Docker · AWS.
      </p>
      <div className="hero-btns">
        <a href="#projects" className="mag-btn mag-btn-p">View Projects</a>
        <a href="#chat" className="mag-btn mag-btn-s">Chat with AI-Me</a>
      </div>
      <div className="scroll-ind">
        <div className="scroll-txt">Scroll</div>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
