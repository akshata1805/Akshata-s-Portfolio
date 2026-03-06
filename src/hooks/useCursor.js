import { useEffect, useRef } from 'react'

export default function useCursor(theme) {
  const moonRef  = useRef(null)
  const ringRef  = useRef(null)
  const dotRef   = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    const moon  = moonRef.current
    const ring  = ringRef.current
    const dot   = dotRef.current
    const canvas = trailRef.current
    if (!moon || !ring || !dot || !canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let moonX = mx, moonY = my
    let ringX = mx, ringY = my
    const trail = []
    let rafId

    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    const onResize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    function animate() {
      moonX += (mx - moonX) * 0.09
      moonY += (my - moonY) * 0.09
      ringX += (mx - ringX) * 0.20
      ringY += (my - ringY) * 0.20

      moon.style.left = moonX + 'px'
      moon.style.top  = moonY + 'px'
      ring.style.left = ringX + 'px'
      ring.style.top  = ringY + 'px'
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'

      trail.push({ x: moonX, y: moonY })
      if (trail.length > 22) trail.shift()

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
      trail.forEach((p, i) => {
        const r = (i / trail.length) * 13
        const a = (i / trail.length) * 0.26
        ctx.save()
        ctx.globalAlpha = a
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r)
        g.addColorStop(0, isDark ? 'rgba(180,130,255,0.8)' : 'rgba(255,185,0,0.8)')
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })
      rafId = requestAnimationFrame(animate)
    }
    animate()

    // Hover scale on interactive elements
    const targets = document.querySelectorAll(
      'a,button,.project-card,.stat-card,.ach-card,.hobby-card,.cert-card,.edu-item,.lang-pill'
    )
    const enter = () => {
      moon.style.width = moon.style.height = '56px'
      dot.style.width  = dot.style.height  = '11px'
      ring.style.width = ring.style.height = '50px'
    }
    const leave = () => {
      moon.style.width = moon.style.height = '44px'
      dot.style.width  = dot.style.height  = '8px'
      ring.style.width = ring.style.height = '36px'
    }
    targets.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafId)
      targets.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) })
    }
  }, [theme])

  return { moonRef, ringRef, dotRef, trailRef }
}
