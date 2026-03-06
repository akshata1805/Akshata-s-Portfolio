import { certifications, achievements } from '../data/portfolioData'

export default function Certs() {
  return (
    <div className="section-wrap" id="certifications">
      <p className="sec-label">// credentials</p>
      <h2 className="sec-title"><em>Certifications</em></h2>
      <div className="cert-list">
        {certifications.map((c, i) => (
          <div className="cert-card" key={i}>
            <div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-org">{c.org}</div>
            </div>
            <div className="cert-right">
              <div className="cert-date">{c.date}</div>
              <div className="cert-id">{c.id}</div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <p className="sec-label" style={{ marginTop: '2rem' }}>// achievements</p>
      <div className="ach-grid" style={{ marginTop: '1.5rem' }}>
        {achievements.map((a, i) => (
          <div className="ach-card" key={i}>
            <div className="ach-icon">{a.icon}</div>
            <div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
