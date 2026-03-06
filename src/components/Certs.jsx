import { useState } from 'react'
import { certifications, achievements } from '../data/portfolioData'

export default function Certs() {
  const [modal, setModal] = useState(null) // holds the achievement object

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
      <p style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        ✦ Click any achievement to view certificate
      </p>

      <div className="ach-grid" style={{ marginTop: '0.5rem' }}>
        {achievements.map((a, i) => (
          <div
            className="ach-card"
            key={i}
            onClick={() => a.certImage && setModal(a)}
            style={{ cursor: a.certImage ? 'none' : 'default', position: 'relative' }}
          >
            {a.certImage && (
              <span style={{
                position: 'absolute', top: 8, right: 10,
                fontSize: '0.42rem', letterSpacing: '0.1em',
                color: 'var(--text-muted)'
              }}>view cert ✦</span>
            )}
            <div className="ach-icon">{a.icon}</div>
            <div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Certificate Modal ── */}
      {modal && (
        <div
          onClick={e => e.target === e.currentTarget && setModal(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9000,
            background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: 12, maxWidth: 680, width: '100%',
            padding: '2rem', position: 'relative'
          }}>
            {/* Close */}
            <button
              onClick={() => setModal(null)}
              style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'transparent', border: '1px solid var(--border)',
                color: 'var(--text-muted)', borderRadius: '50%',
                width: 32, height: 32, fontSize: '1rem', cursor: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>✕</button>

            {/* Title */}
            <div style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem',
              fontWeight: 300, color: 'var(--text)', marginBottom: '0.4rem',
              paddingRight: '2rem'
            }}>
              {modal.icon} {modal.title}
            </div>
            <div style={{
              fontSize: '0.65rem', letterSpacing: '0.14em',
              color: 'var(--text-muted)', marginBottom: '1.5rem'
            }}>{modal.desc}</div>

            {/* Certificate Image */}
            <div style={{
              border: '1px solid var(--border)', borderRadius: 8,
              overflow: 'hidden', background: 'rgba(0,0,0,0.3)'
            }}>
              <img
                src={modal.certImage}
                alt={`${modal.title} certificate`}
                style={{ width: '100%', display: 'block', maxHeight: 480, objectFit: 'contain' }}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback if image not found */}
              <div style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: '0.8rem', padding: '3rem',
                color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.12em'
              }}>
                <span style={{ fontSize: '2.5rem' }}>📄</span>
                <span>Certificate image not found</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--accent1)' }}>
                  Add image to: public/certs/{modal.certImage?.split('/').pop()}
                </span>
              </div>
            </div>

            {/* Download button */}
            <div style={{ marginTop: '1.2rem', textAlign: 'center' }}>
              <a
                href={modal.certImage}
                download
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.6rem 1.4rem',
                  background: 'linear-gradient(135deg, var(--accent1), var(--accent2))',
                  color: '#fff', borderRadius: 3, fontSize: '0.65rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  textDecoration: 'none', fontFamily: "'Space Mono', monospace"
                }}
              >
                ⬇ Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
