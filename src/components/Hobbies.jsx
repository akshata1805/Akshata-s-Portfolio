import { useState } from 'react'
import { hobbies, books, drawings } from '../data/portfolioData'

function Modal({ id, open, onClose, children }) {
  return (
    <div className={`modal-overlay ${open ? 'open' : ''}`} id={id} onClick={e => e.target.id === id && onClose()}>
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  )
}

// Group books by language
const groupedBooks = books.reduce((acc, book) => {
  if (!acc[book.lang]) acc[book.lang] = []
  acc[book.lang].push(book)
  return acc
}, {})

const langColors = {
  '🇮🇳 Marathi': 'var(--accent1)',
  '🇮🇳 Hindi':   'var(--accent3)',
  '🇬🇧 English': 'var(--accent2)',
}

export default function Hobbies() {
  const [modal, setModal] = useState(null)

  return (
    <div className="section-wrap" id="hobbies">
      <p className="sec-label">// beyond the code</p>
      <h2 className="sec-title">Hobbies &amp; <em>Passions</em></h2>
      <div className="hobbies-grid">
        {hobbies.map((h, i) => (
          <div
            key={i}
            className={`hobby-card ${h.modal ? 'clickable' : ''}`}
            onClick={() => h.modal && setModal(h.modal)}
          >
            {h.modal && <span style={{ position:'absolute', top:6, right:8, fontSize:'0.42rem', letterSpacing:'0.1em', color:'var(--text-muted)' }}>tap ✦</span>}
            <span className="h-icon">{h.icon}</span>
            <span className="h-name">{h.name}</span>
          </div>
        ))}
      </div>

      {/* ── Books Modal ── */}
      <Modal id="books-modal" open={modal === 'books'} onClose={() => setModal(null)}>
        <div className="modal-title">📚 Books I've Read</div>

        {/* Total count */}
        <p style={{ textAlign:'center', fontSize:'0.65rem', letterSpacing:'0.12em', color:'var(--text-muted)', marginBottom:'1.8rem' }}>
          {books.length} books across {Object.keys(groupedBooks).length} languages
        </p>

        {/* Language tabs / sections */}
        {Object.entries(groupedBooks).map(([lang, langBooks]) => (
          <div key={lang} style={{ marginBottom:'1.8rem' }}>
            {/* Language header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              marginBottom: '0.8rem', paddingBottom: '0.5rem',
              borderBottom: `1px solid var(--border)`
            }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.25em', color: langColors[lang] || 'var(--accent1)', textTransform: 'uppercase' }}>
                {lang}
              </span>
              <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                {langBooks.length} book{langBooks.length > 1 ? 's' : ''}
              </span>
            </div>

            {/* Books in this language */}
            <div className="book-list">
              {langBooks.map((b, i) => {
                // Get overall index for numbering
                const globalIdx = books.findIndex(bk => bk.title === b.title)
                return (
                  <div className="book-item" key={i}>
                    <div className="book-num" style={{ color: langColors[lang] || 'var(--accent1)' }}>
                      {String(globalIdx + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="book-title">{b.title}</div>
                      <div className="book-author">{b.author}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </Modal>

      {/* ── Drawings Modal ── */}
      <Modal id="drawings-modal" open={modal === 'drawings'} onClose={() => setModal(null)}>
        <div className="modal-title">🎨 My Drawings &amp; Paintings</div>
        <p style={{ textAlign:'center', fontSize:'0.72rem', color:'var(--text-muted)', marginBottom:'1.5rem' }}>
          A collection of my artwork — from pencil sketches to watercolour paintings.
        </p>
        <div className="drawings-grid">
          {drawings.map((d, i) => (
            <div className="drawing-item" key={i}>
              <span className="di-icon">{d.icon}</span>
              <span className="di-label">{d.label}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign:'center', fontSize:'0.65rem', color:'var(--text-muted)', marginTop:'1.5rem' }}>
          📸 Replace emoji with &lt;img&gt; tags to show your real artwork!
        </p>
      </Modal>
    </div>
  )
}
