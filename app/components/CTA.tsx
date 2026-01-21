'use client'

import { useState } from 'react'
import styles from './CTA.module.css'
import { sendContactEmail } from '../actions'

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Call server action
    setErrorMessage('')
    setSuccessMessage('')
    const result = await sendContactEmail(formData)

    if (result.success) {
      setStatus('success')
      setSuccessMessage('Vielen Dank fuer Ihre Anfrage! Wir melden uns bald bei Ihnen.')
      console.log('Form submitted:', formData)
      console.log('Form submitted:', formData)

      setFormData({
        name: '',
        company: '',
        email: '',
        message: ''
      })
      setStatus('idle')
    } else {
      setStatus('error')
      setStatus('error')
      console.error('Submission error:', result.error)
      setErrorMessage(`Ups! Etwas ist schief gelaufen: ${result.error || 'Unbekannter Fehler'}. Bitte versuchen Sie es spaeter erneut.`)
      setStatus('idle')
      setStatus('idle')
    }
  }

  return (
    <section className={styles.section} id="cta">
      <div className={styles.container}>
        <h2 className={styles.headline}>Lassen Sie uns Ihre Anforderungen besprechen</h2>
        <p className={styles.text}>
          Produkt in Entwicklung – wir möchten Ihre Bedürfnisse verstehen und Ihnen priorisierten Zugang ermöglichen.
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
              placeholder="Beschreiben Sie Ihre Anforderungen und wie wir Ihnen helfen koennen..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={styles.textarea}
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={status === 'loading'}>
            {status === 'loading' ? 'Wird gesendet...' : 'Persoenliches Gespraech vereinbaren'}
          </button>

          {successMessage && (
            <div className={styles.successMessage}>
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className={styles.errorMessage}>
              {errorMessage}
            </div>
          )}
        </form>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            {/* Brand */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>Flatscouts</div>
              <p className={styles.footerBrandText}>
                KI-Dokumentenklassifizierung für die Schweizer Immobilienbewirtschaftung
              </p>
            </div>

            {/* Links Columns */}
            <div className={styles.footerLinksGrid}>
              <div className={styles.footerLinksColumn}>
                <h4 className={styles.footerLinksTitle}>Lösungen</h4>
                <nav className={styles.footerLinksNav}>
                  <a href="/loesung/mandatswechsel">Mandatswechsel</a>
                  <a href="/loesung/laufender-betrieb">Laufender Betrieb</a>
                  <a href="#service-models">Enterprise Integration</a>
                  <a href="#service-models">On-Demand Service</a>
                </nav>
              </div>

              <div className={styles.footerLinksColumn}>
                <h4 className={styles.footerLinksTitle}>Wissen & Ressourcen</h4>
                <nav className={styles.footerLinksNav}>
                  <a href="/wissen">Wissen</a>
                  <a href="/wissen/blog">Blog</a>
                  <a href="/wissen/glossar">Glossar</a>
                  <a href="#faq">FAQ</a>
                  <a href="https://www.svit.ch/de/datenhandling-bei-mandatswechsel" target="_blank" rel="noopener noreferrer">
                    SVIT Leitfaden ↗
                  </a>
                </nav>
              </div>

              <div className={styles.footerLinksColumn}>
                <h4 className={styles.footerLinksTitle}>Rechtliches</h4>
                <nav className={styles.footerLinksNav}>
                  <a href="/impressum">Impressum</a>
                  <a href="/datenschutz">Datenschutz</a>
                </nav>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.footerText}>© 2025 Flatscouts · Made in Switzerland</p>
          </div>
        </div>
      </footer>
    </section>
  )
}


