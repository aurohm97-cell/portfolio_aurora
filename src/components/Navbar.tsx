import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const SECTIONS = ['about', 'projects', 'education', 'experience', 'contact']
const LANGS = ['es', 'en', 'fr']

function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg)',
      borderBottom: '1px solid var(--bg-secondary)',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
    }}>
      <a href="#" style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', cursor: 'pointer' }}>
  AHM
</a>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['about', 'projects', 'education', 'experience', 'contact'].map(section => (
          <a
            key={section}
            href={`#${section}`}
            style={{
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text)')}
          >
            {t(`nav.${section}`)}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <MdLanguage style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }} />
          {['es', 'en', 'fr'].map(lang => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              style={{
                background: i18n.language === lang ? 'var(--primary)' : 'transparent',
                color: i18n.language === lang ? '#fff' : 'var(--text-muted)',
                border: '1px solid var(--primary)',
                borderRadius: '4px',
                padding: '2px 8px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          onClick={toggleDarkMode}
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
            transition: 'all 0.2s ease',
          }}
        >
          {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
        </button>
    </nav>
  )
}

export default Navbar