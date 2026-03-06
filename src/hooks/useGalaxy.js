import { useEffect, useRef } from 'react'

export default function useGalaxy() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, stars = [], rafId, t = 0

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    function initStars() {
      stars = []
      for (let i = 0; i < 280; i++) {
        stars.push({
          x: Math.random() * W, y: Math.random() * H,
          r: Math.random() * 1.4 + 0.2, a: Math.random() * 0.8 + 0.2,
          ts: Math.random() * 0.02 + 0.005, to: Math.random() * Math.PI * 2,
          c: ['#fff','#c8b8ff','#b8e4ff','#ffd8b8'][~~(Math.random() * 4)]
        })
      }
      for (let i = 0; i < 480; i++) {
        stars.push({
          x: Math.random() * W, y: H / 2 + (Math.random() - 0.5) * 200,
          r: Math.random() * 0.7 + 0.1, a: Math.random() * 0.28 + 0.05,
          ts: Math.random() * 0.01 + 0.003, to: Math.random() * Math.PI * 2,
          c: '#c8b8ff'
        })
      }
    }
    function draw() {
      ctx.clearRect(0, 0, W, H)
      t += 0.016
      stars.forEach(s => {
        const a = s.a * (0.6 + 0.4 * Math.sin(t * s.ts * 60 + s.to))
        ctx.save()
        ctx.globalAlpha = a; ctx.fillStyle = s.c; ctx.shadowColor = s.c
        ctx.shadowBlur = s.r > 1 ? 5 : 2
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill()
        ctx.restore()
      })
      rafId = requestAnimationFrame(draw)
    }

    const onResize = () => { resize(); initStars() }
    resize(); initStars(); draw()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return canvasRef
}
