import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { HiMenu, HiX } from 'react-icons/hi'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const SECTIONS = ['about', 'projects', 'skills', 'education', 'experience', 'contact']
const LANGS = ['es', 'en', 'fr']

function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--bg-secondary)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.2rem 1.5rem',
        }}
      >
        <a
          href="#"
          style={{
            fontWeight: 700,
            fontSize: '1.3rem',
            color: 'var(--primary)',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          AHM
        </a>

        {/* Links - solo visible en desktop */}
        <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
          {SECTIONS.map(section => (
            <a
              key={section}
              href={`#${section}`}
              style={{
                color: 'var(--text)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>

        {/* Controles - solo visible en desktop */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: '0.75rem',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '999px',
            padding: '0.4rem 0.6rem',
          }}
        >
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {LANGS.map(lang => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                style={{
                  background: i18n.language === lang ? 'var(--primary)' : 'transparent',
                  color: i18n.language === lang ? '#fff' : 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--bg)' }} />

          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar tema"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--primary)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </div>

        {/* Hamburguesa - solo visible en mobile */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text)',
            fontSize: '1.5rem',
            cursor: 'pointer',
          }}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Panel mobile */}
      <div
        ref={menuRef}
        className="md:hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '0 1.5rem 1rem' }}>
          {SECTIONS.map(section => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--text)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                padding: '0.6rem 0',
              }}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.8rem 1.5rem',
            borderTop: '1px solid var(--bg-secondary)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {LANGS.map(lang => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                style={{
                  background: i18n.language === lang ? 'var(--primary)' : 'transparent',
                  color: i18n.language === lang ? '#fff' : 'var(--text-muted)',
                  border: '1px solid var(--primary)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar tema"
            style={{
              background: 'transparent',
              border: '1px solid var(--primary)',
              borderRadius: '8px',
              padding: '6px 10px',
              cursor: 'pointer',
              color: 'var(--primary)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar