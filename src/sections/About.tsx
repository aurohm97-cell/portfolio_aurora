import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import oliveTree from '../assets/olive-tree.svg'

gsap.registerPlugin(ScrollTrigger)

interface AboutProps {
  darkMode: boolean
}

function About({ darkMode }: AboutProps) {
  const { t } = useTranslation()
  const treeRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!treeRef.current || !wordsRef.current) return

    const words = wordsRef.current.querySelectorAll('.tree-word')

    gsap.set(words, { opacity: 0, scale: 0.5 })

    ScrollTrigger.create({
      trigger: treeRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(words, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.3,
          ease: 'back.out(1.7)',
        })
      }
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="about" className="px-6 py-16 md:px-16 md:py-24" style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>

        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text)',
          marginBottom: '0.5rem',
        }}>
          {t('nav.about')}
        </h2>
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: 'var(--primary)',
          borderRadius: '2px',
          marginBottom: '3rem',
        }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
              fontWeight: 700,
              color: 'var(--primary)',
              lineHeight: 1.3,
            }}>
              {t('about.title')}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {t('about.p1')}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {t('about.p2')}
            </p>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
              {t('about.p3')}
            </p>
          </div>

           <div ref={treeRef} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
           
       <img src={oliveTree} alt="Olive tree" style={{ width: '100%', maxWidth: '420px', filter: darkMode 
       ? 'brightness(0) saturate(100%) invert(87%) sepia(29%) saturate(562%) hue-rotate(127deg) brightness(101%) contrast(101%)'
      : 'brightness(0) saturate(100%) invert(25%) sepia(69%) saturate(1000%) hue-rotate(245deg) brightness(90%) contrast(95%)',
       }} />
            <div ref={wordsRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
              <span className="tree-word" style={{
                position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)',
                fontWeight: 700, fontSize: '1.1rem', color: darkMode ? '#F72585' : '#F59E0B', textShadow: '0 1px 4px rgba(0,0,0,0.3)',
                letterSpacing: '2px'
              }}>{t('about.tree_effort')}</span>
              <span className="tree-word" style={{
                position: 'absolute', top: '35%', left: '8%',
                fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)', textShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }}>{t('about.tree_team')}</span>
              <span className="tree-word" style={{
                position: 'absolute', top: '20%', left: '30%',
                fontWeight: 700, fontSize: '0.95rem', color: 'var(--secondary)', textShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }}>{t('about.tree_simplify')}</span>
              <span className="tree-word" style={{
                position: 'absolute', top: '22%', right: '15%',
                fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)', textShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }}>{t('about.tree_explain')}</span>
              <span className="tree-word" style={{
                position: 'absolute', top: '45%', right: '5%',
                fontWeight: 700, fontSize: '0.95rem', color: 'var(--secondary)', textShadow: '0 1px 4px rgba(0,0,0,0.2)'
              }}>{t('about.tree_understand')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About