'use client'

import { useState } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde normalerweise die Formular-Daten gesendet werden
    console.log('Form submitted:', formData)
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns bald bei Ihnen.')
  }

  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <h2 className={styles.headline}>Jetzt risikofrei starten</h2>
        <p className={styles.text}>
          Volumenbasiertes Pricing oder Abo – inklusive kostenlosem Pilot.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="company"
              placeholder="Firma"
              value={formData.company}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Nachricht"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Individuelles Angebot anfordern
          </button>
        </form>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogo}>FlatScouts</div>
          <nav className={styles.footerNav}>
            <a href="#hero">Home</a>
            <a href="#team">Team</a>
            <a href="#kontakt">Kontakt</a>
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutz</a>
          </nav>
          <p className={styles.footerText}>Made in Switzerland</p>
        </div>
      </footer>
    </section>
  )
}

