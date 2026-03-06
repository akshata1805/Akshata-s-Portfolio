import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <div className="section-wrap" id="education">
      <p className="sec-label">// education</p>
      <h2 className="sec-title">Academic <em>Journey</em></h2>
      <div className="edu-timeline">
        {education.map((e, i) => (
          <div className="edu-item" key={i}>
            <div className="edu-degree">{e.degree}</div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-meta">{e.period}</div>
            <span className="edu-grade">{e.grade}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
