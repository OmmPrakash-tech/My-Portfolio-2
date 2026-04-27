'use client'

import { STATS, SKILLS, PROJECTS, PIPELINE, DEVOPS_CARDS, EDUCATION, CERTS } from '@/lib/data'

export function Stats() {
  return (
    <section className="stats-section">
      <div className="sec-inner">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-card tilt-card reveal">
              <div className="tilt-shine" />
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">// 01 — Skills</div>
          <h2 className="sec-title">Technical <em>Arsenal</em></h2>
        </div>
        <div className="skills-grid">
          {SKILLS.map((sk, i) => (
            <div key={i} className="sk-card tilt-card reveal">
              <div className="tilt-shine" />
              <span className="sk-ico">{sk.icon}</span>
              <div className="sk-cat">{sk.category}</div>
              <div className="sk-tags">
                {sk.tags.map((t, j) => (
                  <span key={j} className="sk-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">// 02 — Projects</div>
          <h2 className="sec-title">Things I&apos;ve <em>Shipped</em></h2>
          <p style={{ fontSize: '.73rem', color: 'var(--muted2)', marginTop: '-.8rem', marginBottom: '2rem' }}>
            Hover cards to flip and see live demos
          </p>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="flip-wrap reveal">
              <div className="flip-inner">
                <div className="flip-front">
                  <span className="flip-num">{p.num}</span>
                  <h3 className="flip-title">{p.title}</h3>
                  <p className="flip-desc">{p.desc}</p>
                  <div className="flip-stack">
                    {p.stack.map((s, j) => <span key={j} className="sbadge">{s}</span>)}
                  </div>
                  <div className="flip-hint">Hover to flip</div>
                </div>
                <div className="flip-back">
                  <div className="flip-back-title">{p.backTitle}</div>
                  <p>{p.backDesc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer" className="flip-link">
                    View Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DevOps() {
  return (
    <section className="devops-section">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">// 03 — DevOps</div>
          <h2 className="sec-title">How I <em>Ship</em></h2>
        </div>
        <div className="pipeline reveal">
          {PIPELINE.map((step, i) => (
            <div key={i} className="pipe-step">
              <div className="pipe-ico">{step.ico}</div>
              <div className="pipe-label">{step.label}</div>
            </div>
          ))}
        </div>
        <div className="devops-cards">
          {DEVOPS_CARDS.map((card, i) => (
            <div key={i} className="dv-card tilt-card reveal">
              <div className="tilt-shine" />
              <div className="dv-ico">{card.ico}</div>
              <div className="dv-title">{card.title}</div>
              <div className="dv-body">{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EduCerts() {
  return (
    <section className="edu-certs">
      <div className="sec-inner">
        <div className="reveal">
          <div className="sec-label">// 04 — Background</div>
          <h2 className="sec-title">Education & <em>Achievements</em></h2>
        </div>
        <div className="two-col">
          <div className="reveal">
            <div className="subsec-label">Education</div>
            {EDUCATION.map((ed, i) => (
              <div key={i} className="edu-item">
                <div className="edu-yr">{ed.year}</div>
                <div className="edu-deg">{ed.degree}</div>
                <div className="edu-sch">{ed.school}</div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <div className="subsec-label">Certifications & Achievements</div>
            <div className="cert-grid-2">
              {CERTS.map((c, i) => (
                <div key={i} className="cert-item">
                  <span style={{ fontSize: '1.2rem' }}>{c.ico}</span>
                  <div>
                    <div className="cert-name">{c.name}</div>
                    <div className="cert-by">{c.by}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
