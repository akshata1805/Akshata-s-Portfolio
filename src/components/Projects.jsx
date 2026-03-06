import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <div className="section-wrap" id="projects">
      <p className="sec-label">// selected work</p>
      <h2 className="sec-title">Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => {
          const Card = (
            <>
              <div className="proj-num">{p.num}</div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="proj-link">{p.link ? 'View on GitHub →' : 'Coming Soon ✦'}</div>
              <div className="proj-glow" style={{ background: p.glow }} />
            </>
          )
          return p.link
            ? <a href={p.link} target="_blank" rel="noreferrer" className="project-card" key={i}>{Card}</a>
            : <div className="project-card" key={i}>{Card}</div>
        })}
      </div>
    </div>
  )
}
