'use client'

import { useEffect, useState } from 'react'
import styles from './BlogTeaser.module.css'

const blogArticles = [
  {
    slug: 'dokumentenklassifizierung-guide',
    title: 'Der ultimative Guide zur Dokumentenklassifizierung',
    description: 'SVIT-Standard, KI-Klassifizierung, ROI-Berechnung und Checkliste für die Tool-Auswahl.',
    tag: 'Guide',
  },
  {
    slug: 'mandatswechsel-kosten',
    title: 'Was kostet ein Mandatswechsel ohne Automatisierung?',
    description: 'Versteckte Kosten bei der Mandatsübergabe: Zeitaufwand, Personalkosten und Fehlerrisiken.',
    tag: 'Kosten',
  },
  {
    slug: 'monster-pdf-aufteilen',
    title: 'Monster-PDFs aufteilen: Schritt-für-Schritt',
    description: 'So teilen Sie grosse, unstrukturierte PDFs bei Mandatsübergaben auf.',
    tag: 'Anleitung',
  },
  {
    slug: 'dokumentenprobleme-bewirtschafter',
    title: '5 typische Dokumentenprobleme bei Bewirtschaftern',
    description: 'Die häufigsten Herausforderungen mit Dokumenten – und wie Sie sie lösen.',
    tag: 'Praxis',
  },
]

export default function BlogTeaser() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <h2 className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}>
          Wissen & Ressourcen
        </h2>
        <p className={`${styles.subtitle} ${isVisible ? styles.animateIn : ''}`}>
          Praxiswissen für Immobilienbewirtschafter – von Mandatswechsel bis KI-Klassifizierung
        </p>

        <div className={styles.grid}>
          {blogArticles.map((article) => (
            <a
              key={article.slug}
              href={`/wissen/blog/${article.slug}`}
              className={styles.card}
            >
              <span className={styles.tag}>{article.tag}</span>
              <h3 className={styles.cardTitle}>{article.title}</h3>
              <p className={styles.cardDescription}>{article.description}</p>
              <span className={styles.readMore}>Weiterlesen →</span>
            </a>
          ))}
        </div>

        <div className={styles.allArticles}>
          <a href="/wissen/blog" className={styles.allArticlesLink}>
            Alle Artikel ansehen →
          </a>
        </div>
      </div>
    </section>
  )
}
