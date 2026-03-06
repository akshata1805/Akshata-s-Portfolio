import { meta } from '../data/portfolioData'

export default function Resume() {
  return (
    <div className="section-wrap" id="resume">
      <p className="sec-label">// my resume</p>
      <h2 className="sec-title">Download <em>Resume</em></h2>
      <div className="resume-box">
        <p>View or download my full resume to learn more about my experience, education, skills, and achievements.</p>
        <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center' }}>
          <a href={meta.resume} target="_blank" rel="noreferrer" className="btn btn-primary">📄 View Resume</a>
          <a href={meta.resume} download className="btn btn-ghost">⬇ Download PDF</a>
        </div>
      </div>
    </div>
  )
}
