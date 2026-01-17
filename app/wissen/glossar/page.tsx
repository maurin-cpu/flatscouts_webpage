import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './glossar.module.css'

export const metadata: Metadata = {
  title: 'Glossar: Dokumentenmanagement Immobilienbewirtschaftung | Flatscouts',
  description: 'Fachbegriffe der Immobilienbewirtschaftung: Dokumentenklassifizierung, Mandatswechsel, SVIT-Standard, Monster-PDF erklärt.',
  alternates: {
    canonical: 'https://www.flatscouts.ch/wissen/glossar',
  },
}

interface GlossarEntry {
  id: string
  term: string
  definition: string
}

const glossarEntries: GlossarEntry[] = [
  {
    id: 'dokumentenklassifizierung',
    term: 'Dokumentenklassifizierung',
    definition: 'Automatische Erkennung und Einordnung von Dokumenten nach ihrem Typ (Mietvertrag, Rechnung, Kündigung etc.) in eine definierte Ablagestruktur.',
  },
  {
    id: 'mandatswechsel',
    term: 'Mandatswechsel',
    definition: 'Übergabe einer Liegenschaftsverwaltung von einer Bewirtschaftungsfirma an eine andere. Alle Daten und Dokumente müssen strukturiert übergeben werden.',
  },
  {
    id: 'monster-pdf',
    term: 'Monster-PDF',
    definition: 'Umgangssprachlich für sehr grosse, unstrukturierte PDF-Dateien (oft 100-300 Seiten) bei Mandatsübergaben. Enthält viele Dokumenttypen ohne Trennung.',
  },
  {
    id: 'eigentuemerdossier',
    term: 'Eigentümerdossier (ED)',
    definition: 'Aktensammlung mit Dokumenten zum Immobilieneigentümer: Bewirtschaftungsverträge, Korrespondenz, Honorare, Budgets.',
  },
  {
    id: 'liegenschaftsdossier',
    term: 'Liegenschaftsdossier (LD)',
    definition: 'Aktensammlung zur Liegenschaft: Serviceverträge, Pläne, Grundbuchauszüge, Nebenkostenabrechnungen.',
  },
  {
    id: 'mieterdossier',
    term: 'Mieterdossier (MD)',
    definition: 'Aktensammlung zum Mietverhältnis: Mietvertrag, Nachträge, Bewerbungsunterlagen, Korrespondenz, Kündigungen.',
  },
  {
    id: 'hauswartdossier',
    term: 'Hauswartdossier (HD)',
    definition: 'Aktensammlung zum Hauswart: Vertrag, Pflichtenheft, Lohnabrechnungen.',
  },
  {
    id: 'svit',
    term: 'SVIT',
    definition: 'Schweizerischer Verband der Immobilienwirtschaft. Das SVIT Futureboard hat den Leitfaden "Datenhandling beim Mandatswechsel" erarbeitet.',
  },
  {
    id: 'konfidenzwert',
    term: 'Konfidenzwert',
    definition: 'Prozentwert, der angibt, wie sicher die KI bei einer Klassifizierung ist. Hoher Wert = automatische Verarbeitung möglich.',
  },
  {
    id: 'digitaler-zwilling',
    term: 'Digitaler Zwilling',
    definition: 'Strukturierte, durchsuchbare digitale Repräsentation eines Dokuments mit extrahierten Metadaten.',
  },
  {
    id: 'dms',
    term: 'DMS (Dokumentenmanagementsystem)',
    definition: 'Software zur Verwaltung und Archivierung digitaler Dokumente. In der Schweizer Immobilienbranche z.B. Therefore, D3, DocuWare.',
  },
  {
    id: 'erp',
    term: 'ERP (Enterprise Resource Planning)',
    definition: 'Betriebswirtschaftliche Software. In der Schweizer Immobilienbranche z.B. Garaio REM, Rimo R5, ImmoTop, AbaImmo, Propbase.',
  },
]

// Schema.org DefinedTermSet
const jsonLdGlossar = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glossar Immobilien-Dokumentenmanagement',
  description: 'Fachbegriffe der Immobilienbewirtschaftung in der Schweiz',
  url: 'https://www.flatscouts.ch/wissen/glossar',
  definedTerm: glossarEntries.map(entry => ({
    '@type': 'DefinedTerm',
    name: entry.term,
    description: entry.definition,
    url: `https://www.flatscouts.ch/wissen/glossar#${entry.id}`,
  })),
}

export default function GlossarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGlossar) }}
      />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <Link href="/wissen">Wissen</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>Glossar</span>
          </nav>

          <h1 className={styles.headline}>
            Glossar: Dokumentenmanagement in der Immobilienbewirtschaftung
          </h1>

          <p className={styles.intro}>
            Die wichtigsten Begriffe rund um Dokumentenverwaltung und Mandatswechsel
            in der Schweizer Immobilienbranche.
          </p>

          <div className={styles.glossarList}>
            {glossarEntries.map((entry) => (
              <article key={entry.id} className={styles.glossarEntry} id={entry.id}>
                <h2 className={styles.term}>{entry.term}</h2>
                <p className={styles.definition}>{entry.definition}</p>
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
    </>
  )
}
