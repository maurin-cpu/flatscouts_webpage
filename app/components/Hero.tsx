'use client'

import styles from './Hero.module.css'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <h1 className={styles.headline}>
          Dokumenten-Chaos beenden.
        </h1>
        <p className={styles.subheadline}>
          KI-Assistent, der PDFs, E-Mails und Scans automatisch erkennt, kategorisiert und in Ihr DMS oder ERP integriert – Datensilos werden aufgelöst, manuelles Ablegen entfällt, Datenverluste werden verhindert.
        </p>
        <div className={styles.ctaWrapper}>
          <button 
            className={styles.ctaButton}
            onClick={() => scrollToSection('cta')}
          >
            Persönliches Gespräch vereinbaren
          </button>
          <p className={styles.subText}>
          </p>
        </div>
      </div>
    </section>
  )
}

