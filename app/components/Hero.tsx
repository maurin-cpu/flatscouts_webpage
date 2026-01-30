'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} id="hero">
      {/* Background Gradient Orbs */}
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
      <div className={styles.gradientOrb3} />

      <div className={styles.container}>
        {/* Text Content - Centered */}
        <div className={styles.content}>
          <h1 className={styles.srOnly}>
            KI-Dokumentenklassifizierung für Schweizer Immobilienbewirtschafter
          </h1>
          <span
            className={`${styles.badge} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.1s' }}
          >
            KI-Dokumentenverarbeitung
          </span>
          <p
            className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.25s' }}
            aria-hidden="true"
          >
            Dokumenten-Chaos beenden.
          </p>
          <p
            className={`${styles.subheadline} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            KI-Assistent, der PDFs, E-Mails und Scans automatisch erkennt, kategorisiert und für Ihr DMS oder ERP vorbereitet – ob bei <a href="/loesung/mandatswechsel" className={styles.inlineLink}>Mandatswechseln</a> oder im <a href="/loesung/laufender-betrieb" className={styles.inlineLink}>laufenden Betrieb</a>.
          </p>
          <div
            className={`${styles.ctaWrapper} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.55s' }}
          >
            <button
              className={styles.ctaPrimary}
              onClick={() => scrollToSection('cta')}
            >
              Persönliches Gespräch vereinbaren
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`${styles.imageWrapper} ${isVisible ? styles.animateIn : ''}`}
          style={{ animationDelay: '0.7s' }}
        >
          <div className={styles.imageGlow} />
          <Image
            src="/hero.png"
            alt="Flatscouts Dashboard"
            width={1200}
            height={692}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  )
}
