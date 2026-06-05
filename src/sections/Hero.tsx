import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import avatar from '../assets/avatar.svg'
import { PiSparkle } from 'react-icons/pi'

function Hero() {
  const { t } = useTranslation()
  const [displayed, setDisplayed] = useState('')
  const [visible, setVisible] = useState(false)
  const fullText = t('hero.title')

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    setDisplayed('')
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1))
      i++
      if (i >= fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [fullText])

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4rem',
      backgroundColor: 'var(--bg)',
    }}>
    { <><svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="var(--primary)" opacity="0.15" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg><span style={{ position: 'absolute', top: '18%', left: '5%', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.2, pointerEvents: 'none' }}>const aurora =</span>
      <span style={{ position: 'absolute', top: '25%', right: '8%', fontFamily: 'monospace', fontSize: '0.85rem', color: 'var(--secondary)', opacity: 0.2, pointerEvents: 'none' }}>&lt;Frontend /&gt;</span>
      <span style={{ position: 'absolute', bottom: '25%', left: '3%', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--accent)', opacity: 0.2, pointerEvents: 'none' }}>{'{ design: true }'}</span>
      <span style={{ position: 'absolute', bottom: '15%', right: '5%', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--secondary)', opacity: 0.2, pointerEvents: 'none' }}>{'() => {}'}</span>
      <span style={{ position: 'absolute', top: '12%', right: '20%', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--primary)', opacity: 0.15, pointerEvents: 'none' }}>import React</span>
      <span style={{ position: 'absolute', bottom: '35%', right: '12%', fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--accent)', opacity: 0.15, pointerEvents: 'none' }}>useState()</span></>

    }
      <div style={{
        maxWidth: '1100px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
      }}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          flex: 1,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <p style={{
            color: 'var(--primary)',
            fontWeight: 500,
            fontSize: '1.5rem',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}>
            {t('hero.greeting')} <PiSparkle style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--primary)' }} />
          </p>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--text)',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
          }}>
            Aurora <span style={{ color: 'var(--primary)' }}>[Apellido]</span>
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 500,
            color: 'var(--secondary)',
            minHeight: '2.5rem',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.6s',
          }}>
            {displayed}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1.4em',
              backgroundColor: 'var(--secondary)',
              marginLeft: '4px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }}/>
          </h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '520px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s',
          }}>
            {t('hero.subtitle')}
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '0.5rem',
            flexWrap: 'wrap',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 1s, transform 0.8s ease 1s',
          }}>
            <a href="#projects" style={{
              backgroundColor: 'var(--primary)',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {t('hero.cta_projects')}
            </a>
            <a href="#contact" style={{
              backgroundColor: 'transparent',
              color: 'var(--primary)',
              padding: '0.75rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: '2px solid var(--primary)',
              transition: 'opacity 0.2s ease',
            }}
             onMouseEnter={e => {
    e.currentTarget.style.backgroundColor = 'var(--primary)'
    e.currentTarget.style.color = '#fff'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.backgroundColor = 'transparent'
    e.currentTarget.style.color = 'var(--primary)'
  }}
            >
        
              {t('hero.cta_contact')}
            </a>
          </div>
        </div>

        <div style={{
          flex: '0 0 360px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
        }}>
          <div style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--primary)',
            backgroundColor: 'var(--bg-secondary)',
            animation: 'float 4s ease-in-out infinite',
          }}>
            <img
              src={avatar}
              alt="Aurora avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  )
}

export default Hero