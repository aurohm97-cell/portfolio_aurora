import { useTranslation } from 'react-i18next'

interface EducationItem {
  title: string
  institution: string
  period: string
}

function Education() {
  const { t } = useTranslation()

  const featured = t('education.featured', { returnObjects: true }) as EducationItem[]
  const complementaryItems = t('education.complementaryItems', { returnObjects: true }) as EducationItem[]

  return (
    <section id="education" style={{
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
          {t('nav.education')}
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--primary)',
          borderRadius: '2px',
          marginBottom: '3rem',
        }} />

        {/* Destacados */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem',
        }}>
          {featured.map((item, i) => (
            <div key={i} style={{
              backgroundColor: 'var(--bg)',
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
              <h3 style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--text)',
                margin: '0.3rem 0 0.2rem',
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}>
                {item.institution}
              </p>
            </div>
          ))}
        </div>

        {/* Complementaria */}
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          {t('education.complementary')}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {complementaryItems.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '0.5rem',
              padding: '0.75rem 0',
              borderBottom: i === complementaryItems.length - 1 ? 'none' : '1px solid var(--bg)',
            }}>
              <div>
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                }}>
                  {item.title}
                </span>
                <span style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  opacity: 0.7,
                }}>
                  {' — '}{item.institution}
                </span>
              </div>
              <span style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                opacity: 0.7,
                whiteSpace: 'nowrap',
              }}>
                {item.period}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education