import { languages } from '../data/portfolioData'

export default function Languages() {
  return (
    <div className="section-wrap" id="languages">
      <p className="sec-label">// communication</p>
      <h2 className="sec-title">Preferred <em>Languages</em></h2>
      <div className="lang-grid">
        {languages.map((l, i) => (
          <div className="lang-pill" key={i}>
            <span className="lang-flag">{l.flag}</span>
            <span className="lang-name">{l.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
