interface EducationItem {
  title: string
  institution: string
  period: string
}

const FEATURED: EducationItem[] = [
  {
    title: 'FPGS DAW - Desarrollo de Aplicaciones Web',
    institution: 'Ilerna Online',
    period: '2024 - 07/2026',
  },
{
    title: 'Certificado de Profesionalidad - Operaciones Auxiliares de Montaje y Mantenimiento de Sistemas Microinformáticos',
    institution: 'Junta de Andalucía · I.E.S. Luis Carrillo de Sotomayor, Baena',
    period: 'Marzo - Junio 2026'
  },
  {
    title: 'FPGS Guía, Información y Asistencia Turística',
    institution: 'I.E.S. Cánovas del Castillo, Málaga',
    period: '2015 - 2017',
  },
  {
    title: 'FPGS Agencia de Viajes y Gestión de Eventos',
    institution: 'I.E.S. La Rosaleda, Málaga',
    period: '2017 - 2019',
  },
  {
    title: 'Marketing Digital',
    institution: 'Generation Spain y Fundación Incyde',
    period: '2019',
  },
  {
    title: 'Bachillerato',
    institution: 'EE.PP. Sagrada Familia, Baena',
    period: '2013 - 2015',
  },
]

const COMPLEMENTARY: EducationItem[] = [
  {
    title: 'Socorrista en instalaciones acuáticas y DEA',
    institution: 'Global Autoprotect',
    period: '2015',
  },
  {
    title: 'Administrativo (50h)',
    institution: 'Diputación de Granada',
    period: '2024',
  },
  {
    title: 'Autodidacta',
    institution: 'Creando mi portfolio con ayuda de la IA',
    period: 'Actualidad',
  },
]

function Education() {
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
          Formación
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
          {FEATURED.map((item, i) => (
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
          Formación complementaria
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {COMPLEMENTARY.map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: '0.5rem',
              padding: '0.75rem 0',
              borderBottom: i === COMPLEMENTARY.length - 1 ? 'none' : '1px solid var(--bg)',
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