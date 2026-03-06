import { useEffect } from 'react'

export default function useShootingStars() {
  useEffect(() => {
    function shoot() {
      const el = document.createElement('div')
      el.className = 'shooting-star'
      el.style.left = Math.random() * window.innerWidth + 'px'
      el.style.top  = Math.random() * window.innerHeight * 0.5 + 'px'
      document.body.appendChild(el)
      const ang = Math.random() * 25 + 10
      el.animate([
        { transform: `rotate(${ang}deg) translate(0,0)`, opacity: 1 },
        { transform: `rotate(${ang}deg) translate(380px,0)`, opacity: 0 }
      ], { duration: Math.random() * 900 + 600, easing: 'ease-out', fill: 'forwards' })
        .onfinish = () => el.remove()
    }

    const ids = [
      setTimeout(shoot, 400),
      setTimeout(shoot, 1600),
    ]
    const interval = setInterval(shoot, 2800)

    return () => {
      ids.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [])
}
