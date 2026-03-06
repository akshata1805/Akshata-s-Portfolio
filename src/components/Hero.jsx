import { meta } from '../data/portfolioData'

function navTo(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (!el) return
  const navH = document.querySelector('.nav')?.offsetHeight || 70
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - navH - 24, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="orbit-ring o1"><div className="odot" /></div>
      <div className="orbit-ring o2"><div className="odot" /></div>
      <div className="orbit-ring o3"><div className="odot" /></div>

      <p className="hero-badge">✦ {meta.title} ✦</p>
      <h1 className="hero-name">
        {meta.name.split(' ')[0]}<br />{meta.name.split(' ').slice(1).join(' ')}
      </h1>
      <p className="hero-summary">{meta.summary}</p>
      <div className="hero-meta">
        <span>{meta.location}</span>
        <span>B.E. Computer Science &amp; Design</span>
        <span>8.08 CGPA</span>
        <span>PRECCON-2025 Champion 🏆</span>
      </div>
      <div className="hero-cta">
        <a href="#projects" onClick={e => navTo(e,'projects')} className="btn btn-primary">View Projects</a>
        <a href="#contact"  onClick={e => navTo(e,'contact')}  className="btn btn-ghost">Get In Touch</a>
        <a href={meta.resume} target="_blank" rel="noreferrer" className="btn btn-outline">📄 Resume</a>
      </div>
      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </div>
  )
}
