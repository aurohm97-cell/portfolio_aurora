import { useState, useEffect } from 'react'
import '../src/i18n/index'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Contact from './sections/Contact'


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main style={{ paddingTop: '80px' }}>
        <Hero />
        <About darkMode={darkMode} />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App