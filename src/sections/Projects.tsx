import { useTranslation } from 'react-i18next'
import { SiAngular, SiTypescript, SiFirebase } from 'react-icons/si'
import { FiExternalLink, FiGithub, FiBookOpen } from 'react-icons/fi'
import { SiReact, SiTailwindcss } from 'react-icons/si'

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      name: 'Agenda Aurora',
      subtitle: t('projects.trello_subtitle'),
      description: t('projects.trello_description'),
      techs: [
        { icon: <SiAngular color="#DD0031" />, name: 'Angular' },
        { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
        { icon: <SiFirebase color="#FFCA28" />, name: 'Firebase' },
      ],
      demo: 'https://agenda-aurora-caf9b.web.app',
      github: 'https://github.com/aurohm97-cell/agenda_aurora',
      readme: 'https://github.com/aurohm97-cell/agenda_aurora#readme',
    }
    ,{
  name: 'AHM Portfolio',
  subtitle: t('projects.portfolio_subtitle'),
  description: t('projects.portfolio_description'),
  techs: [
    { icon: <SiReact color="#61DAFB" />, name: 'React' },
    { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
    { icon: <SiTailwindcss color="#06B6D4" />, name: 'Tailwind' },
  ],
  demo: 'https://project-v3yxp.vercel.app/',
  github: 'https://github.com/aurohm97-cell/portfolio_aurora',
  readme: 'https://github.com/aurohm97-cell/portfolio_aurora#readme',
},

  ]

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '6rem 4rem',
      backgroundColor: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}>
          {t('nav.projects')}
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--primary)',
          borderRadius: '2px',
          marginBottom: '3rem',
        }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--bg)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid var(--bg-secondary)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)' }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500, marginTop: '4px' }}>
                  {project.subtitle}
                </p>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.techs.map((tech, j) => (
                  <span key={j} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: 'var(--text)',
                    fontWeight: 500,
                  }}>
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem' }}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--primary)',
                  color: '#fff',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'opacity 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <FiExternalLink /> Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'transparent',
                  color: 'var(--primary)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: '2px solid var(--primary)',
                  transition: 'all 0.2s ease',
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
                  <FiGithub /> GitHub
                </a>
                <a href={project.readme} target="_blank" rel="noopener noreferrer" style={{
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  backgroundColor: 'transparent',
  color: 'var(--text-muted)',
  padding: '0.6rem 1.2rem',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 600,
  border: '2px solid var(--text-muted)',
  transition: 'all 0.2s ease',
}}
  onMouseEnter={e => {
    e.currentTarget.style.borderColor = 'var(--primary)'
    e.currentTarget.style.color = 'var(--primary)'
  }}
  onMouseLeave={e => {
    e.currentTarget.style.borderColor = 'var(--text-muted)'
    e.currentTarget.style.color = 'var(--text-muted)'
  }}
>
  <FiBookOpen /> README
</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects