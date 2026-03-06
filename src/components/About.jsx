import { meta, stats } from '../data/portfolioData'

export default function About() {
  return (
    <div className="section-wrap" id="about">
      <p className="sec-label">// about me</p>
      <h2 className="sec-title">Crafting digital <em>constellations</em></h2>
      <div className="about-inner">
        <div className="about-text">
          <p>I build solutions that live at the intersection of design and engineering. From women's safety AI apps to municipal management systems, every project I build carries purpose.</p>
          <p>A quick learner with strong foundations in Java and full-stack development, eager to contribute to enterprise software and grow with a team that values craft.</p>
          <div className="about-links-grid">
            <a href={meta.links.github}     target="_blank" rel="noreferrer" className="alink">⌥ GitHub</a>
            <a href={meta.links.linkedin}   target="_blank" rel="noreferrer" className="alink">in LinkedIn</a>
            <a href={meta.links.leetcode}   target="_blank" rel="noreferrer" className="alink">💡 LeetCode</a>
            <a href={meta.links.hackerrank} target="_blank" rel="noreferrer" className="alink">⭐ HackerRank</a>
            <a href={`mailto:${meta.email}`}               className="alink">✉ Email</a>
            <a href={`tel:${meta.phone}`}                  className="alink">📞 {meta.phone}</a>
          </div>
        </div>
        <div className="stat-grid">
          {stats.map(s => (
            <div className="stat-card" key={s.l}>
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
