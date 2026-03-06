import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <div className="section-wrap" id="skills">
      <p className="sec-label">// expertise</p>
      <h2 className="sec-title">Skill <em>Constellation</em></h2>
      <div className="skills-container">
        {skillGroups.map((g, gi) => (
          <div className="skill-group" key={gi}>
            <p className="sg-title">{g.title}</p>
            {g.items.map((s, si) => (
              <div className="skill-item" key={si}>
                <span className="skill-name">{s.name}</span>
                <div className="skill-bar-wrap">
                  <div
                    className="skill-bar"
                    style={{
                      width: `${s.pct}%`,
                      animationDelay: `${(gi * 4 + si) * 0.1}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
