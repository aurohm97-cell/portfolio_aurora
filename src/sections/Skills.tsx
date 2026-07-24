import { useTranslation } from 'react-i18next'
import {
  SiAngular, SiReact, SiTypescript, SiFirebase, SiTailwindcss,
  SiHtml5, SiCss, SiJavascript, SiGit, SiNodedotjs,
} from 'react-icons/si'

interface LanguageItem {
  name: string
  level: string
}

const TECHS = [
  { icon: <SiAngular />, name: 'Angular', color: '#DD0031' },
  { icon: <SiReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F0DB4F' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#68A063' },
  { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
  { icon: <SiCss />, name: 'CSS3', color: '#1572B6' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
  { icon: <SiGit />, name: 'Git', color: '#F05032' },
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
          marginBottom: '4rem',
        }}>
          {TECHS.map((tech, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.7rem',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '14px',
              borderTop: `3px solid ${tech.color}`,
              padding: '1.5rem 1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '2rem', display: 'flex', color: tech.color }}>
                {tech.icon}
              </span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Idiomas - destacado */}
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {languages.map((lang, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              borderRadius: '16px',
              padding: '1.75rem',
              color: '#fff',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            }}>
              <h4 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
              }}>
                {lang.name}
              </h4>
              <p style={{
                fontSize: '0.85rem',
                lineHeight: 1.5,
                opacity: 0.95,
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