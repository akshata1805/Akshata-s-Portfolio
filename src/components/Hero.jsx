import { useEffect, useRef } from 'react'
import { meta } from '../data/portfolioData'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heroRef.current?.querySelectorAll('.animate-in').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.18}s`
            el.classList.add('visible')
          })
        }
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="hero" ref={heroRef}>
      {/* Orbit rings */}
      <div className="orbit o1"><div className="orbit-dot" /></div>
      <div className="orbit o2"><div className="orbit-dot" /></div>
      <div className="orbit o3"><div className="orbit-dot" /></div>

      <div className="hero-content">
        <p className="hero-badge animate-in">✦ {meta.title} ✦</p>

        {/* ── NAME — reduced from clamp(3rem,12vw,7.5rem) to clamp(2.2rem,7vw,5rem) ── */}
        <h1 className="hero-name animate-in">
          {meta.name.split(' ').map((word, i) => (
            <span key={i} className="name-word">{word}</span>
          ))}
        </h1>

        <p className="hero-summary animate-in">{meta.summary}</p>

        <div className="hero-meta animate-in">
          <span>{meta.location}</span>
          <span>B.E. CS &amp; Design</span>
          <span>8.08 CGPA</span>
          <span>PRECCON-2025 🏆</span>
        </div>

        <div className="hero-cta animate-in">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact"  className="btn btn-ghost">Get In Touch</a>
          <a href={meta.resume} target="_blank" rel="noreferrer" className="btn btn-outline">📄 Resume</a>
        </div>
      </div>

      <div className="scroll-hint animate-in">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
