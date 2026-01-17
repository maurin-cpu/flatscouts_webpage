import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from './wissen.module.css'

export const metadata: Metadata = {
  title: 'Wissen: Dokumentenmanagement Immobilien | Flatscouts',
  description: 'Blog, Glossar und Ressourcen zur Dokumentenklassifizierung in der Schweizer Immobilienbewirtschaftung.',
  alternates: {
    canonical: 'https://www.flatscouts.ch/wissen',
  },
}

export default function WissenPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Zurück zur Startseite
        </Link>

        <h1 className={styles.headline}>Wissen & Ressourcen</h1>
        <p className={styles.intro}>
          Fachwissen rund um Dokumentenklassifizierung, Mandatswechsel und Digitalisierung 
          in der Schweizer Immobilienbewirtschaftung.
        </p>

        <div className={styles.resourceGrid}>
          <Link href="/wissen/blog" className={styles.resourceCard}>
            <div className={styles.cardIcon}>
              <Image
                src="/blog.png"
                alt="Blog"
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className={styles.cardTitle}>Blog</h2>
            <p className={styles.cardDescription}>
              Fachartikel zu Mandatswechsel, Monster-PDFs und automatisierter Dokumentenablage.
            </p>
            <span className={styles.cardLink}>Zum Blog →</span>
          </Link>

          <Link href="/wissen/glossar" className={styles.resourceCard}>
            <div className={styles.cardIcon}>
              <Image
                src="/glossar.png"
                alt="Glossar"
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className={styles.cardTitle}>Glossar</h2>
            <p className={styles.cardDescription}>
              Die wichtigsten Begriffe: Von Eigentümerdossier bis SVIT-Standard erklärt.
            </p>
            <span className={styles.cardLink}>Zum Glossar →</span>
          </Link>

          <div className={styles.resourceCard + ' ' + styles.comingSoon}>
            <div className={styles.cardIcon}>
              <Image
                src="/casestudies.png"
                alt="Case Studies"
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className={styles.cardTitle}>Case Studies</h2>
            <p className={styles.cardDescription}>
              Praxisbeispiele aus der Schweizer Immobilienbewirtschaftung.
            </p>
            <span className={styles.badge}>Demnächst</span>
          </div>

          <div className={styles.resourceCard + ' ' + styles.comingSoon}>
            <div className={styles.cardIcon}>
              <Image
                src="/leitfaden.png"
                alt="Leitfäden"
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <h2 className={styles.cardTitle}>Leitfäden</h2>
            <p className={styles.cardDescription}>
              Schritt-für-Schritt Anleitungen für Mandatswechsel und Digitalisierung.
            </p>
            <span className={styles.badge}>Demnächst</span>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaHeadline}>Dokumentenchaos lösen?</h2>
          <p className={styles.ctaText}>
            Flatscouts klassifiziert Ihre Immobiliendokumente automatisch – ab CHF 0.10/Dokument.
          </p>
          <Link href="/#cta" className={styles.ctaButton}>
            Demo anfordern
          </Link>
        </div>
      </div>
    </main>
  )
}
