import { useState, useEffect } from 'react'
import Cursor    from './components/Cursor'
import GalaxyBg  from './components/GalaxyBg'
import Nav       from './components/Nav'
import Hero      from './components/Hero'
import About     from './components/About'
import Education from './components/Education'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Certs     from './components/Certs'
import Hobbies   from './components/Hobbies'
import Languages from './components/Languages'
import Resume    from './components/Resume'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import useShootingStars from './hooks/useShootingStars'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  useShootingStars()

  return (
    <>
      {/* Background layers */}
      <GalaxyBg theme={theme} />
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Custom cursor */}
      <Cursor theme={theme} />

      {/* Theme toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>

      {/* Navigation */}
      <Nav />

      {/* Page content */}
      <div className="page">
        <Hero />
        <div className="cosmic-divider" />
        <About />
        <div className="cosmic-divider" />
        <Education />
        <div className="cosmic-divider" />
        <Skills />
        <div className="cosmic-divider" />
        <Projects />
        <div className="cosmic-divider" />
        <Certs />
        <div className="cosmic-divider" />
        <Hobbies />
        <div className="cosmic-divider" />
        <Languages />
        <div className="cosmic-divider" />
        <Resume />
        <div className="cosmic-divider" />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
