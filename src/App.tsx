import { useState, useEffect } from 'react'
import '../src/i18n/index'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

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
        <Projects />
      </main>
    </div>
  )
}

export default App