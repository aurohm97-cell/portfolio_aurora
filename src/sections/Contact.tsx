import { useTranslation } from 'react-i18next'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { PiCarProfileFill } from 'react-icons/pi'

function Contact() {
  const { t } = useTranslation()

  const items = [
    {
      icon: <FiPhone />,
      label: t('contact.phone_label'),
      value: t('contact.phone'),
      href: `tel:${t('contact.phone')}`,
    },
    {
      icon: <FiMail />,
      label: t('contact.email_label'),
      value: t('contact.email'),
      href: `mailto:${t('contact.email')}`,
    },
    {
      icon: <FiMapPin />,
      label: t('contact.location_label'),
      value: t('contact.location'),
    },
    {
      icon: <PiCarProfileFill />,
      label: t('contact.license_label'),
      value: '',
    },
  ]

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        padding: '6rem 4rem',
        backgroundColor: 'var(--bg-secondary)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}
        >
          {t('nav.contact')}
        </h2>

        <div
          style={{
            width: '60px',
            height: '4px',
            backgroundColor: 'var(--primary)',
            borderRadius: '2px',
            marginBottom: '2rem',
          }}
        />

        <h3
          style={{
            fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
            fontWeight: 700,
            color: 'var(--primary)',
            marginBottom: '1rem',
          }}
        >
          {t('contact.title_cta')}
        </h3>

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '600px',
            marginBottom: '3rem',
          }}
        >
          {t('contact.subtitle')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {items.map((item, i) => {
            const isLink = Boolean(item.href)
            const CardTag = isLink ? 'a' : 'div'

            return (
              <CardTag
                key={i}
                href={isLink ? item.href : undefined}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  backgroundColor: 'var(--bg)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid var(--bg-secondary)',
                  textDecoration: 'none',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: isLink ? 'pointer' : 'default',
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
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}
                >
                  {item.icon}
                </div>

                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.label}
                </span>

                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}
                >
                  {item.value}
                </span>
              </CardTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact