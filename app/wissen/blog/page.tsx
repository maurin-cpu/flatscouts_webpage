import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog: Dokumentenmanagement Immobilien | Flatscouts',
  description: 'Fachartikel zu Dokumentenklassifizierung, Mandatswechsel und Digitalisierung in der Schweizer Immobilienbewirtschaftung.',
  alternates: {
    canonical: 'https://www.flatscouts.ch/wissen/blog',
  },
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'dokumentenklassifizierung-guide',
    title: 'Der ultimative Guide zur Dokumentenklassifizierung',
    description: 'Alles über Dokumentenklassifizierung: SVIT-Standard, KI-Klassifizierung, ROI-Berechnung und Checkliste für die Tool-Auswahl.',
    date: '2026-01-16',
    readTime: '12 Min.',
    category: 'Guide',
  },
  {
    slug: 'mandatswechsel-kosten',
    title: 'Was kostet ein Mandatswechsel ohne Automatisierung?',
    description: 'Die versteckten Kosten bei der Mandatsübergabe: Zeitaufwand, Personalkosten und Fehlerrisiken. Mit ROI-Rechnung für automatisierte Dokumentenklassifizierung.',
    date: '2026-01-16',
    readTime: '8 Min.',
    category: 'Kosten',
  },
  // Weitere Blog-Posts sind vorbereitet, aber noch nicht öffentlich verlinkt:
  // - monster-pdf-aufteilen
  // - dokumentenprobleme-bewirtschafter
]

export default function BlogPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.separator}>/</span>
          <Link href="/wissen">Wissen</Link>
          <span className={styles.separator}>/</span>
          <span className={styles.current}>Blog</span>
        </nav>

        <h1 className={styles.headline}>Blog</h1>
        <p className={styles.intro}>
          Fachartikel zu Dokumentenklassifizierung, Mandatswechsel und Digitalisierung 
          in der Schweizer Immobilienbewirtschaftung.
        </p>

        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.slug} className={styles.blogCard}>
              <Link href={`/wissen/blog/${post.slug}`} className={styles.cardLink}>
                <span className={styles.category}>{post.category}</span>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardDescription}>{post.description}</p>
                <div className={styles.cardMeta}>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('de-CH', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </time>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>
              </Link>
            </article>
          ))}
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

        <Link href="/wissen" className={styles.backLink}>
          ← Zurück zu Wissen
        </Link>
      </div>
    </main>
  )
}
