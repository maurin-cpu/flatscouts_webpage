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
      <div className={styles.container}>
        {/* Text Content */}
        <div className={styles.content}>
          {/* SEO-optimierter H1 */}
          <h1 className={styles.srOnly}>
            KI-Dokumentenklassifizierung für Schweizer Immobilienbewirtschafter
          </h1>
          <p
            className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.2s' }}
            aria-hidden="true"
          >
            Dokumenten-Chaos beenden.
          </p>
          <p
            className={`${styles.subheadline} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            KI-Assistent, der PDFs, E-Mails und Scans automatisch erkennt, kategorisiert und für Ihr DMS oder ERP vorbereitet.
          </p>
          <div
            className={`${styles.ctaWrapper} ${isVisible ? styles.animateIn : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            <button
              className={styles.ctaButton}
              onClick={() => scrollToSection('cta')}
            >
              Persoenliches Gespraech vereinbaren
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className={`${styles.imageWrapper} ${isVisible ? styles.animateIn : ''}`}
          style={{ animationDelay: '0.8s' }}
        >
          <Image
            src="/hero.png"
            alt="Flatscouts Dashboard"
            width={800}
            height={600}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  )
}
