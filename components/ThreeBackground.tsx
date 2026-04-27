'use client'

import { useEffect, useRef } from 'react'

export default function ThreeBackground() {
  const particleRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = particleRef.current
    if (!c) return
    const ctx = c.getContext('2d')!
    let W = 0, H = 0
    const COLORS = ['rgba(0,212,255,', 'rgba(124,58,255,', 'rgba(0,255,148,']

    function resize() {
      W = c.width = window.innerWidth
      H = c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class P {
      x = 0; y = 0; vx = 0; vy = 0; r = 0; col = ''; life = 0; age = 0
      reset() {
        this.x = Math.random() * W; this.y = Math.random() * H
        this.vx = (Math.random() - .5) * .25; this.vy = (Math.random() - .5) * .25
        this.r = Math.random() * 1.6 + .4
        this.col = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.life = Math.random() * 200 + 100; this.age = 0
      }
      constructor() { this.reset() }
      draw() {
        const a = Math.sin(Math.PI * this.age / this.life) * 0.6
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.col + a + ')'
        ctx.shadowBlur = 10; ctx.shadowColor = this.col + '0.4)'; ctx.fill(); ctx.shadowBlur = 0
      }
      update() {
        this.x += this.vx; this.y += this.vy; this.age++
        if (this.age > this.life || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
    }

    const particles: P[] = []
    for (let i = 0; i < 80; i++) particles.push(new P())

    let animId: number
    function loop() {
      ctx.clearRect(0, 0, W, H)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = 'rgba(0,212,255,' + (0.06 * (1 - dist / 120)) + ')'
            ctx.lineWidth = .5; ctx.stroke()
          }
        }
      }
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={particleRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', opacity: 0.45 }}
    />
  )
}