'use client'

import { useEffect } from 'react'
import ThreeBackground from '@/components/ThreeBackground'
import Cursor from '@/components/Cursor'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Stats, Skills, Projects, DevOps, EduCerts } from '@/components/Sections'
import AiChat from '@/components/AiChat'
import Contact from '@/components/Contact'

export default function Home() {
  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))

    // Gradient shift on scroll
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY
          const hue = Math.round((sy / document.body.scrollHeight) * 60)
          document.documentElement.style.setProperty('--a1', `hsl(${195 + hue},100%,50%)`)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      obs.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <ThreeBackground />
      <Cursor />
      <Navbar />
      <div className="page-wrap">
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <DevOps />
        <EduCerts />
        <AiChat />
        <Contact />
        <footer>
          <span>
            Designed & built by <a href="#">Omm Prakash Debata</a> — 2025
          </span>
          <span>Spring Boot · React · Node.js · Docker · AWS</span>
        </footer>
      </div>
    </>
  )

  // Tap to flip on mobile
const flipWraps = document.querySelectorAll('.flip-wrap')
flipWraps.forEach(fw => {
  fw.addEventListener('click', () => fw.classList.toggle('tapped'))
})
}
