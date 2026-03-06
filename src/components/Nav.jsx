const links = ['about','education','skills','projects','certifications','hobbies','contact']

function navTo(e, id) {
  e.preventDefault()
  const el = document.getElementById(id)
  if (!el) return
  const navH = document.querySelector('.nav')?.offsetHeight || 70
  const top = el.getBoundingClientRect().top + window.pageYOffset - navH - 24
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">Akshata<span>.</span></div>
      <div className="nav-links">
        {links.map(id => (
          <a key={id} href={`#${id}`} onClick={e => navTo(e, id)}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  )
}
