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
            <span className="h-icon">{h.icon}</span>
            <span className="h-name">{h.name}</span>
          </div>
        ))}
      </div>

      {/* Books Modal */}
      <Modal id="books-modal" open={modal === 'books'} onClose={() => setModal(null)}>
        <div className="modal-title">📚 Books I've Read</div>
        <div className="book-list">
          {books.map((b, i) => (
            <div className="book-item" key={i}>
              <div className="book-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="book-title">{b.title}</div>
                <div className="book-author">{b.author}</div>
              </div>
            </div>
          ))}
        </div>
      </Modal>

      {/* Drawings Modal */}
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
