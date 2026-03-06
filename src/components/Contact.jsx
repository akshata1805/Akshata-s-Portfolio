import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { meta } from '../data/portfolioData'

// EmailJS config — set in your .env file
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ msg: '', type: '' })
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setStatus({ msg: '', type: '' })
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus({ msg: '✦ Message sent! I\'ll reply soon.', type: 'ok' })
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({ msg: `✕ Could not send. Email me at ${meta.email}`, type: 'err' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="section-wrap" id="contact">
      <p className="sec-label">// let's connect</p>
      <h2 className="sec-title">Ready to build<br />something <em>stellar?</em></h2>
      <div className="contact-wrapper">
        {/* Left — info */}
        <div className="contact-info">
          <p>Whether you have an opportunity, a project idea, or just want to say hello — my inbox is always open!</p>
          <a href={`mailto:${meta.email}`} className="contact-email-link">{meta.email}</a>
          <p className="contact-phone">📞 {meta.phone} · Pune, Maharashtra</p>
          <div className="social-row">
            <a href={meta.links.github}     target="_blank" rel="noreferrer" className="soc-btn">⌥ GitHub</a>
            <a href={meta.links.linkedin}   target="_blank" rel="noreferrer" className="soc-btn">in LinkedIn</a>
            <a href={meta.links.leetcode}   target="_blank" rel="noreferrer" className="soc-btn">💡 LeetCode</a>
            <a href={meta.links.hackerrank} target="_blank" rel="noreferrer" className="soc-btn">⭐ HackerRank</a>
          </div>
        </div>

        {/* Right — form */}
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="from_name">Your Name</label>
            <input id="from_name" name="from_name" className="form-input" type="text" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="from_email">Your Email</label>
            <input id="from_email" name="from_email" className="form-input" type="email" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input id="subject" name="subject" className="form-input" type="text" required />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea id="message" name="message" className="form-textarea" required />
          </div>
          <button type="submit" className="btn btn-primary" disabled={sending} style={{ alignSelf:'flex-start' }}>
            {sending ? 'Sending…' : 'Send Message ✦'}
          </button>
          {status.msg && (
            <div className={`form-status ${status.type === 'ok' ? 'status-ok' : 'status-err'}`}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
