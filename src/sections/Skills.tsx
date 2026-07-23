import { useTranslation } from 'react-i18next'
import {
  SiAngular, SiReact, SiTypescript, SiFirebase, SiTailwindcss,
  SiHtml5, SiCss, SiJavascript, SiGit,
} from 'react-icons/si'

interface LanguageItem {
  name: string
  level: string
}

const TECHS = [
  { icon: <SiAngular color="#DD0031" />, name: 'Angular' },
  { icon: <SiReact color="#61DAFB" />, name: 'React' },
  { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
  { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <SiHtml5 color="#E34F26" />, name: 'HTML5' },
  { icon: <SiCss color="#1572B6" />, name: 'CSS3' },
  { icon: <SiTailwindcss color="#06B6D4" />, name: 'Tailwind' },
  { icon: <SiFirebase color="#FFCA28" />, name: 'Firebase' },
  { icon: <SiGit color="#F05032" />, name: 'Git' },
]

function Skills() {
  const { t } = useTranslation()
  const languages = t('skills.languages', { returnObjects: true }) as LanguageItem[]

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      padding: '6rem 4rem',
      backgroundColor: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}>
          {t('nav.skills')}
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--primary)',
          borderRadius: '2px',
          marginBottom: '3rem',
        }} />

        {/* Tecnologías */}
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {t('skills.tech_title')}
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
          marginBottom: '3.5rem',
        }}>
          {TECHS.map((tech, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.6rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '16px',
              padding: '1.5rem 1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '2rem', display: 'flex' }}>{tech.icon}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {t('skills.languages_title')}
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}>
          {languages.map((lang, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '16px',
              padding: '1.5rem',
            }}>
              <h4 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '0.3rem',
              }}>
                {lang.name}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--primary)',
                fontWeight: 600,
              }}>
                {lang.level}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills