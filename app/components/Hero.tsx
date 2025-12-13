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
          Dokumenten-Chaos beenden – signifikant mehr Effizienz und Sicherheit.
        </h1>
        <p className={styles.subheadline}>
          KI-Assistent, der PDFs, E-Mails und Scans automatisch erkennt, kategorisiert und sicher in Ihr DMS oder ERP integriert – manuelles Ablegen entfällt, Datenverluste werden verhindert.
        </p>
        <button 
          className={styles.ctaButton}
          onClick={() => scrollToSection('cta')}
        >
          Kostenlose Demo anfordern
        </button>
      </div>
    </section>
  )
}

