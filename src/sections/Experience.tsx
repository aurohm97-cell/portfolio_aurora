import { useTranslation } from 'react-i18next'

interface ExperienceItem {
  role: string
  place: string
  period: string
}

function ExperienceGroup({ title, items }: { title: string; items: ExperienceItem[] }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <h3 style={{
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--text-muted)',
        marginBottom: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>
        {title}
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem',
      }}>
        {items.map((item, i) => (
          <div key={i} style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid var(--bg-secondary)',
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
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--primary)',
            }}>
              {item.period}
            </span>
            <h4 style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--text)',
              margin: '0.3rem 0 0.2rem',
            }}>
              {item.role}
            </h4>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}>
              {item.place}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  const { t } = useTranslation()

  const reception = t('experience.reception', { returnObjects: true }) as ExperienceItem[]
  const guest = t('experience.guest', { returnObjects: true }) as ExperienceItem[]
  const dev = t('experience.dev', { returnObjects: true }) as ExperienceItem[]

  return (
    <section id="experience" style={{
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
          {t('nav.experience')}
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--primary)',
          borderRadius: '2px',
          marginBottom: '3rem',
        }} />

        <ExperienceGroup title={t('experience.reception_title')} items={reception} />
        <ExperienceGroup title={t('experience.guest_title')} items={guest} />
        <ExperienceGroup title={t('experience.dev_title')} items={dev} />
      </div>
    </section>
  )
}

export default Experience