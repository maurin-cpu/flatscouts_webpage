import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './laufender-betrieb.module.css'

export const metadata: Metadata = {
  title: 'Automatische Dokumentenablage im Daily Business | Flatscouts',
  description: 'Schluss mit 5 Ablageorten. Der digitale Ablagesklave: KI-Klassifizierung für tägliche Dokumentenflut. Skalierungspotenzial für Bewirtschafter.',
  keywords: 'Automatische Dokumentenablage Bewirtschaftung, KI Dokumentenmanagement, Dokumentenklassifizierung Immobilien, digitaler Ablagesklave',
  alternates: {
    canonical: 'https://www.flatscouts.ch/loesung/laufender-betrieb',
  },
  openGraph: {
    title: 'Der digitale Ablagesklave für Ihre Dokumentenflut | Flatscouts',
    description: 'KI-Klassifizierung für den täglichen Bewirtschaftungsbetrieb. SVIT-konform.',
    type: 'website',
    url: 'https://www.flatscouts.ch/loesung/laufender-betrieb',
    locale: 'de_CH',
  },
}

// Schema.org HowTo
const jsonLdHowTo = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Dokumente im Tagesbetrieb automatisch klassifizieren',
  description: 'So automatisieren Sie die tägliche Dokumentenablage in der Immobilienbewirtschaftung',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dokument hochladen',
      text: 'Laden Sie eingehende Dokumente hoch – per Drag & Drop oder automatischer E-Mail-Integration.',
    },
    {
      '@type': 'HowToStep',
      name: 'KI-Erkennung',
      text: 'Flatscouts erkennt den Dokumenttyp automatisch und ordnet ihn der richtigen Liegenschaft/Mieter zu.',
    },
    {
      '@type': 'HowToStep',
      name: 'Validierung',
      text: 'Prüfen Sie Klassifizierungen mit niedrigem Konfidenzwert kurz. Das System lernt.',
    },
    {
      '@type': 'HowToStep',
      name: 'Ablage',
      text: 'Das Dokument wird automatisch korrekt benannt und in Ihrem DMS abgelegt.',
    },
  ],
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie funktioniert die automatische E-Mail-Ablage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'E-Mails mit Anhängen können automatisch an Flatscouts weitergeleitet werden. Die Anhänge werden klassifiziert und der richtigen Liegenschaft oder dem Mieter zugeordnet. Die E-Mail selbst wird archiviert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann Flatscouts mit meiner bestehenden Ablagestruktur arbeiten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Flatscouts klassifiziert nach SVIT-Standard, aber Sie können Ihre individuelle Ablagestruktur darauf aufbauen. Die Zuordnung zu Ihren Ordnern und Kategorien ist flexibel konfigurierbar.',
      },
    },
  ],
}

export default function LaufenderBetriebPage() {
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
              <span className={styles.current}>Laufender Betrieb</span>
            </nav>

            <h1 className={styles.heroTitle}>
              Der digitale Ablagesklave für Ihre tägliche Dokumentenflut
            </h1>
            <p className={styles.heroSubtitle}>
              Schluss mit 5 verschiedenen Ablageorten. Flatscouts klassifiziert 
              Ihre Dokumente automatisch – im Hintergrund, während Sie arbeiten.
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
            <h2 className={styles.sectionTitle}>Das tägliche Dokumenten-Dilemma</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📧</div>
                <h3>E-Mail-Chaos</h3>
                <p>
                  Wichtige Dokumente verstecken sich in E-Mail-Postfächern. 
                  Bei Mitarbeiterwechsel gehen Informationen verloren.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🗂️</div>
                <h3>5+ Ablageorte</h3>
                <p>
                  ERP, DMS, SharePoint, E-Mail, Papierarchiv – jedes Dokument 
                  muss an den richtigen Ort.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🔍</div>
                <h3>Suchzeit</h3>
                <p>
                  "Wo ist der Mietvertrag von Müller?" Statt zu suchen, 
                  könnten Sie bewirtschaften.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📈</div>
                <h3>Skalierungslimit</h3>
                <p>
                  Manuelle Ablage begrenzt die Anzahl Wohnungen, die ein 
                  Bewirtschafter betreuen kann.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className={styles.solutionSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Die Lösung: KI arbeitet im Hintergrund</h2>
            <p className={styles.solutionIntro}>
              Flatscouts übernimmt die Ablage, während Sie sich auf die Bewirtschaftung 
              konzentrieren. Jedes Dokument landet automatisch am richtigen Ort.
            </p>
            
            <div className={styles.uspGrid}>
              <div className={styles.uspCard}>
                <h3>Zentraler Posteingang</h3>
                <p>
                  Alle Dokumente an einem Ort – ob per E-Mail, Scan oder Upload. 
                  Flatscouts sortiert automatisch.
                </p>
              </div>
              <div className={styles.uspCard}>
                <h3>Automatische Zuordnung</h3>
                <p>
                  Die KI erkennt, zu welcher Liegenschaft und welchem Mieter 
                  das Dokument gehört.
                </p>
              </div>
              <div className={styles.uspCard}>
                <h3>SVIT-konform + flexibel</h3>
                <p>
                  Basiert auf SVIT-Standard, aber Sie definieren Ihre eigene 
                  Ablagestruktur darauf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.processSection} id="prozess">
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>So einfach funktioniert's</h2>
            
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Upload</h3>
                  <p>Dokument hochladen – per Drag & Drop, E-Mail-Weiterleitung oder Scanner.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>KI-Erkennung</h3>
                  <p>Flatscouts erkennt Dokumenttyp, Liegenschaft und Mieter automatisch.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Validierung</h3>
                  <p>Bei niedrigem Konfidenzwert: kurz prüfen. Das System lernt aus Korrekturen.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Ablage</h3>
                  <p>Dokument wird korrekt benannt und im DMS abgelegt. Fertig.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Ihr Nutzen</h2>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>⏱️</div>
                <h3>Zeit sparen</h3>
                <p>
                  Keine manuelle Sortierung mehr. Dokumente werden im Hintergrund 
                  klassifiziert, während Sie arbeiten.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🔎</div>
                <h3>Alles finden</h3>
                <p>
                  Jedes Dokument ist sofort auffindbar – kein Suchen in 
                  verschiedenen Systemen mehr.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🛡️</div>
                <h3>Nichts verlieren</h3>
                <p>
                  E-Mails und Anhänge werden automatisch archiviert – 
                  auch bei Mitarbeiterwechsel.
                </p>
              </div>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📊</div>
                <h3>Skalierungspotenzial</h3>
                <p>
                  Mehr Zeit für die eigentliche Bewirtschaftung bedeutet 
                  Potenzial für mehr Wohnungen pro Mitarbeiter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className={styles.docTypesSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Diese Dokumente erkennt Flatscouts</h2>
            
            <div className={styles.docTypesList}>
              <div className={styles.docTypeCategory}>
                <h3>Mieterdokumente</h3>
                <ul>
                  <li>Mietverträge & Nachträge</li>
                  <li>Mietzinsanpassungen</li>
                  <li>Kündigungen</li>
                  <li>Bewerbungsunterlagen</li>
                  <li>Mieterkorrespondenz</li>
                </ul>
              </div>
              <div className={styles.docTypeCategory}>
                <h3>Liegenschaftsdokumente</h3>
                <ul>
                  <li>Nebenkostenabrechnungen</li>
                  <li>Serviceverträge</li>
                  <li>Rechnungen</li>
                  <li>Offerten</li>
                  <li>Protokolle</li>
                </ul>
              </div>
              <div className={styles.docTypeCategory}>
                <h3>Eigentümerdokumente</h3>
                <ul>
                  <li>Bewirtschaftungsverträge</li>
                  <li>Honorarabrechnungen</li>
                  <li>Budgets</li>
                  <li>Eigentümerkorrespondenz</li>
                  <li>Versammlungsprotokolle</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Häufige Fragen</h2>
            
            <div className={styles.faqList}>
              <details className={styles.faqItem}>
                <summary>Wie funktioniert die automatische E-Mail-Ablage?</summary>
                <p>
                  E-Mails mit Anhängen können automatisch an Flatscouts weitergeleitet 
                  werden. Die Anhänge werden klassifiziert und der richtigen Liegenschaft 
                  oder dem Mieter zugeordnet. Die E-Mail selbst wird archiviert.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Kann Flatscouts mit meiner bestehenden Ablagestruktur arbeiten?</summary>
                <p>
                  Ja. Flatscouts klassifiziert nach SVIT-Standard, aber Sie können Ihre 
                  individuelle Ablagestruktur darauf aufbauen. Die Zuordnung zu Ihren 
                  Ordnern und Kategorien ist flexibel konfigurierbar.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Was passiert bei Dokumenten, die nicht eindeutig sind?</summary>
                <p>
                  Jede Klassifizierung hat einen Konfidenzwert. Bei Dokumenten mit 
                  niedrigem Wert werden Sie zur Prüfung aufgefordert. Das System lernt 
                  aus Ihren Korrekturen und wird immer besser.
                </p>
              </details>
              <details className={styles.faqItem}>
                <summary>Funktioniert Flatscouts mit meinem ERP?</summary>
                <p>
                  Flatscouts arbeitet mit gängigen ERP-Systemen der Schweizer 
                  Immobilienbranche zusammen – darunter Garaio REM, Rimo R5, ImmoTop, 
                  AbaImmo und weitere. Die klassifizierten Dokumente können exportiert 
                  und importiert werden.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Bereit für weniger Ablage-Stress?</h2>
            <p className={styles.ctaText}>
              Lassen Sie uns besprechen, wie Flatscouts Ihre tägliche 
              Dokumentenablage automatisieren kann.
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
