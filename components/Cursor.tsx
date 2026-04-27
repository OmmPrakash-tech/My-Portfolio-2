'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0
    const cursor = document.getElementById('cursor')
    const trail = document.getElementById('cursor-trail')

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    let id: number
    function animCursor() {
      tx += (mx - tx) * .18; ty += (my - ty) * .18
      if (cursor) { cursor.style.left = mx + 'px'; cursor.style.top = my + 'px' }
      if (trail) { trail.style.left = tx + 'px'; trail.style.top = ty + 'px' }
      id = requestAnimationFrame(animCursor)
    }
    animCursor()

    const hovers = document.querySelectorAll('a,button,.sq,.flip-wrap,.sk-card,.stat-card,.cert-item')
    hovers.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (cursor) {
          cursor.style.width = '28px'; cursor.style.height = '28px'
          cursor.style.background = 'rgba(0,212,255,.3)'
          cursor.style.mixBlendMode = 'normal'
          cursor.style.border = '2px solid var(--a1)'
        }
      })
      el.addEventListener('mouseleave', () => {
        if (cursor) {
          cursor.style.width = '16px'; cursor.style.height = '16px'
          cursor.style.background = 'var(--a1)'
          cursor.style.mixBlendMode = 'screen'
          cursor.style.border = 'none'
        }
      })
    })

    return () => {
      cancelAnimationFrame(id)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div id="cursor" />
      <div id="cursor-trail" />
    </>
  )
}
