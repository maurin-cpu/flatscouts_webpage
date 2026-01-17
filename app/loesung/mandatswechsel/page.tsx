import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './mandatswechsel.module.css'

export const metadata: Metadata = {
  title: 'Digitale Dokumentenübergabe bei Mandatswechsel | Flatscouts',
  description: '350 GB PDFs von 2500 Wohnungen? Flatscouts klassifiziert automatisch gemäss SVIT-Leitfaden. Monster-PDFs zu strukturierten Dossiers.',
  keywords: 'Mandatswechsel Immobilien, Mandatsübergabe digitalisieren, SVIT Datenhandling, Dokumentenübergabe Bewirtschaftung',
  alternates: {
    canonical: 'https://www.flatscouts.ch/loesung/mandatswechsel',
  },
  openGraph: {
    title: 'Mandatswechsel automatisieren | Flatscouts',
    description: 'Von Monster-PDFs zu strukturierten Dossiers. SVIT-konforme Dokumentenklassifizierung.',
    type: 'website',
    url: 'https://www.flatscouts.ch/loesung/mandatswechsel',
    locale: 'de_CH',
  },
}

// Schema.org HowTo
const jsonLdHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Mandatswechsel Dokumente automatisch klassifizieren',
  description: 'So automatisieren Sie die Dokumentenklassifizierung bei einer Mandatsübergabe',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dokumente hochladen',
      text: 'Laden Sie alle Dokumente des Mandats hoch – auch Monster-PDFs mit hunderten Seiten.',
    },
    {
      '@type': 'HowToStep',
      name: 'KI-Analyse',
      text: 'Flatscouts analysiert jeden Dokumenttyp und erkennt Mietverträge, Rechnungen, Korrespondenz etc.',
    },
    {
      '@type': 'HowToStep',
      name: 'Automatische Strukturierung',
      text: 'Monster-PDFs werden aufgeteilt und alle Dokumente gemäss SVIT-Standard kategorisiert.',
    },
    {
      '@type': 'HowToStep',
      name: 'Validierung',
      text: 'Prüfen Sie die Klassifizierungen mit dem Konfidenzwert und korrigieren Sie bei Bedarf.',
    },
    {
      '@type': 'HowToStep',
      name: 'Export & Integration',
      text: 'Exportieren Sie die strukturierten Dokumente mit Metadaten in Ihr DMS.',
    },
  ],
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Klassifizierung bei einem Mandatswechsel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Verarbeitungszeit hängt vom Volumen ab. Ein typischer Mandatswechsel mit 500 Wohnungen und mehreren tausend Dokumenten wird in wenigen Tagen verarbeitet – was manuell Wochen oder Monate dauern würde.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der SVIT-Standard bei Mandatswechseln?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der SVIT Schweiz hat über das Futureboard den Leitfaden "Datenhandling beim Mandatswechsel" erarbeitet. Er definiert Dokumentenkategorien wie Eigentümerdossier (ED), Liegenschaftsdossier (LD), Mieterdossier (MD) und Hauswartdossier (HD).',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann Flatscouts auch meine eigene Struktur verwenden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Flatscouts klassifiziert nach SVIT-Standard, aber Sie können Ihre eigene Ablagestruktur darauf aufbauen. Die flexible Konfiguration passt sich Ihren individuellen Anforderungen an.',
      },
    },
  ],
}

export default function MandatswechselPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.separator}>/</span>
              <span>Lösungen</span>
              <span className={styles.separator}>/</span>
              <span className={styles.current}>Mandatswechsel</span>
            </nav>

            <h1 className={styles.heroTitle}>
              Mandatswechsel automatisieren: Von Monster-PDFs zu strukturierten Dossiers
            </h1>
            <p className={styles.heroSubtitle}>
              350 GB PDFs von 2500 Wohnungen – und alles manuell sortieren? 
              Flatscouts klassifiziert automatisch gemäss SVIT-Leitfaden.
            </p>
            <div className={styles.heroCta}>
              <Link href="/#cta" className={styles.primaryButton}>
                Demo anfordern
              </Link>
              <Link href="#prozess" className={styles.secondaryButton}>
                So funktioniert's →
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className={styles.problemSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Das Problem bei Mandatsübergaben</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📁</div>
                <h3>Monster-PDFs</h3>
                <p>
                  100-300 Seiten in einem PDF – Mietverträge, Rechnungen, Korrespondenz 
                  wild durcheinander gescannt.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🗂️</div>
                <h3>5+ Ablageorte</h3>
                <p>
                  Dokumente verstreut in ERP, DMS, E-Mail-Postfächern, SharePoint 
                  und physischen Archiven.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏱️</div>
                <h3>Wochen Aufwand</h3>
                <p>
                  Bei grossen Mandaten dauert die manuelle Sortierung 6-9 Monate 
                  Vollzeitarbeit.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>❌</div>
                <h3>Fehleranfällig</h3>
                <p>
                  3-8% Fehlerquote bei manueller Sortierung – mit teuren 
                  Folgekosten bei falscher Zuordnung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className={styles.solutionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Die Lösung: KI-gestützte Klassifizierung</h2>
            <p className={styles.solutionIntro}>
              Flatscouts analysiert alle Dokumente automatisch, teilt Monster-PDFs auf 
              und strukturiert alles gemäss SVIT-Standard – in Tagen statt Monaten.
            </p>
            
            <div className={styles.uspGrid}>
              <div className={styles.uspCard}>
                <h3>SVIT-konform + flexibel</h3>
                <p>
                  Klassifizierung basiert auf dem SVIT Futureboard Leitfaden. 
                  Ihre individuelle Struktur kann darauf aufgebaut werden.
                </p>
              </div>
              <div className={styles.uspCard}>
                <h3>Monster-PDF Splitting</h3>
                <p>
                  Grosse PDFs werden automatisch analysiert und in einzelne, 
                  korrekt benannte Dokumente aufgeteilt.
                </p>
              </div>
              <div className={styles.uspCard}>
                <h3>Konfidenzwerte</h3>
                <p>
                  Jede Klassifizierung hat einen Konfidenzwert. Hohe Werte = 
                  automatische Verarbeitung möglich.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection} id="prozess">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>5 Schritte zur automatisierten Mandatsübernahme</h2>
            
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Upload</h3>
                  <p>Laden Sie alle Dokumente hoch – auch Monster-PDFs mit hunderten Seiten.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>KI-Analyse</h3>
                  <p>Flatscouts erkennt jeden Dokumenttyp: Mietverträge, Rechnungen, Korrespondenz etc.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Strukturierung</h3>
                  <p>Automatische Zuordnung zu ED, LD, MD und HD gemäss SVIT-Standard.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Validierung</h3>
                  <p>Prüfen Sie Klassifizierungen mit niedrigem Konfidenzwert. Das System lernt.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <div className={styles.stepContent}>
                  <h3>Export</h3>
                  <p>Strukturierte Dokumente mit Metadaten in Ihr DMS exportieren.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className={styles.docTypesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>SVIT-konforme Dokumentenkategorien</h2>
            <p className={styles.docTypesIntro}>
              Basierend auf dem SVIT Futureboard Leitfaden "Datenhandling beim Mandatswechsel"
            </p>
            
            <div className={styles.docTypesGrid}>
              <div className={styles.docTypeCard}>
                <div className={styles.docTypeHeader}>ED</div>
                <h3>Eigentümerdossier</h3>
                <ul>
                  <li>Bewirtschaftungsverträge</li>
                  <li>Eigentümerkorrespondenz</li>
                  <li>Honorarabrechnungen</li>
                  <li>Budgets</li>
                </ul>
              </div>
              <div className={styles.docTypeCard}>
                <div className={styles.docTypeHeader}>LD</div>
                <h3>Liegenschaftsdossier</h3>
                <ul>
                  <li>Serviceverträge</li>
                  <li>Pläne & Grundrisse</li>
                  <li>Grundbuchauszüge</li>
                  <li>Nebenkostenabrechnungen</li>
                </ul>
              </div>
              <div className={styles.docTypeCard}>
                <div className={styles.docTypeHeader}>MD</div>
                <h3>Mieterdossier</h3>
                <ul>
                  <li>Mietverträge & Nachträge</li>
                  <li>Bewerbungsunterlagen</li>
                  <li>Mieterkorrespondenz</li>
                  <li>Kündigungen</li>
                </ul>
              </div>
              <div className={styles.docTypeCard}>
                <div className={styles.docTypeHeader}>HD</div>
                <h3>Hauswartdossier</h3>
                <ul>
                  <li>Hauswartverträge</li>
                  <li>Pflichtenhefte</li>
                  <li>Lohnabrechnungen</li>
                  <li>Korrespondenz</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Häufige Fragen zum Mandatswechsel</h2>
            
            <div className={styles.faqList}>
              <details className={styles.faqItem}>
                <summary>Wie lange dauert die Klassifizierung bei einem Mandatswechsel?</summary>
                <p>
                  Die Verarbeitungszeit hängt vom Volumen ab. Ein typischer Mandatswechsel 
                  mit 500 Wohnungen und mehreren tausend Dokumenten wird in wenigen Tagen 
                  verarbeitet – was manuell Wochen oder Monate dauern würde.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Was ist der SVIT-Standard bei Mandatswechseln?</summary>
                <p>
                  Der SVIT Schweiz hat über das Futureboard den Leitfaden "Datenhandling 
                  beim Mandatswechsel" erarbeitet. Er definiert Dokumentenkategorien wie 
                  Eigentümerdossier (ED), Liegenschaftsdossier (LD), Mieterdossier (MD) 
                  und Hauswartdossier (HD).
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Kann Flatscouts auch meine eigene Struktur verwenden?</summary>
                <p>
                  Ja. Flatscouts klassifiziert nach SVIT-Standard, aber Sie können Ihre 
                  eigene Ablagestruktur darauf aufbauen. Die flexible Konfiguration passt 
                  sich Ihren individuellen Anforderungen an.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Was kostet die Klassifizierung bei einem grossen Mandatswechsel?</summary>
                <p>
                  Für grosse Mandatsübergaben bieten wir den Enterprise Integration Service 
                  mit individueller Preisgestaltung. Kontaktieren Sie uns für ein Angebot – 
                  der ROI liegt typischerweise unter 6 Monaten.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Mandatswechsel steht an?</h2>
            <p className={styles.ctaText}>
              Lassen Sie uns besprechen, wie Flatscouts Ihre Dokumentenübergabe 
              automatisieren kann. SVIT-konform und anpassbar an Ihre Struktur.
            </p>
            <Link href="/#cta" className={styles.ctaButton}>
              Unverbindliche Demo anfordern
            </Link>
          </div>
        </section>

        {/* Back Link */}
        <div className={styles.backLinkContainer}>
          <Link href="/" className={styles.backLink}>
            ← Zurück zur Startseite
          </Link>
        </div>
      </main>
    </>
  )
}
