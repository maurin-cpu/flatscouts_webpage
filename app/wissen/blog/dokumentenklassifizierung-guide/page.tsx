import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../mandatswechsel-kosten/article.module.css'

export const metadata: Metadata = {
  title: 'Der ultimative Guide zur Dokumentenklassifizierung | Flatscouts',
  description: 'Alles über Dokumentenklassifizierung in der Immobilienbewirtschaftung: SVIT-Standard, KI-Klassifizierung, ROI-Berechnung und Checkliste für die Tool-Auswahl.',
  keywords: 'Dokumentenklassifizierung, automatische Dokumentenerkennung, KI Dokumentenmanagement, SVIT Standard, Immobilienbewirtschaftung',
  alternates: {
    canonical: 'https://www.flatscouts.ch/wissen/blog/dokumentenklassifizierung-guide',
  },
  openGraph: {
    title: 'Der ultimative Guide zur Dokumentenklassifizierung',
    description: 'Alles über Dokumentenklassifizierung in der Immobilienbewirtschaftung.',
    type: 'article',
    url: 'https://www.flatscouts.ch/wissen/blog/dokumentenklassifizierung-guide',
    locale: 'de_CH',
  },
}

const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Der ultimative Guide zur Dokumentenklassifizierung',
  description: 'Alles über Dokumentenklassifizierung in der Immobilienbewirtschaftung: SVIT-Standard, KI-Klassifizierung, ROI-Berechnung.',
  author: {
    '@type': 'Organization',
    name: 'Flatscouts',
    url: 'https://www.flatscouts.ch',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Flatscouts',
    url: 'https://www.flatscouts.ch',
  },
  datePublished: '2026-01-16',
  dateModified: '2026-01-16',
  mainEntityOfPage: 'https://www.flatscouts.ch/wissen/blog/dokumentenklassifizierung-guide',
}

export default function DokumentenklassifizierungGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <main className={styles.main}>
        <article className={styles.article}>
          <div className={styles.container}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.separator}>/</span>
              <Link href="/wissen">Wissen</Link>
              <span className={styles.separator}>/</span>
              <Link href="/wissen/blog">Blog</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.current}>Dokumentenklassifizierung Guide</span>
            </nav>

            {/* Header */}
            <header className={styles.header}>
              <div className={styles.meta}>
                <time dateTime="2026-01-16">16. Januar 2026</time>
                <span className={styles.readTime}>12 Min. Lesezeit</span>
              </div>
              <h1 className={styles.title}>
                Der ultimative Guide zur Dokumentenklassifizierung
              </h1>
              <p className={styles.subtitle}>
                Alles, was Schweizer Immobilienbewirtschafter über automatische 
                Dokumentenerkennung wissen müssen – von SVIT-Standards bis zur ROI-Berechnung.
              </p>
            </header>

            {/* Table of Contents */}
            <nav className={styles.toc}>
              <h2 className={styles.tocTitle}>Inhalt</h2>
              <ol className={styles.tocList}>
                <li><a href="#was-ist">Was ist Dokumentenklassifizierung?</a></li>
                <li><a href="#warum-wichtig">Warum ist sie in der Immobilienbewirtschaftung wichtig?</a></li>
                <li><a href="#manuell-vs-automatisch">Manuelle vs. automatische Klassifizierung</a></li>
                <li><a href="#svit-standard">Der SVIT-Standard erklärt</a></li>
                <li><a href="#ki-klassifizierung">Wie funktioniert KI-basierte Klassifizierung?</a></li>
                <li><a href="#anwendungsfaelle">Anwendungsfälle</a></li>
                <li><a href="#roi">ROI-Berechnung</a></li>
                <li><a href="#checkliste">Checkliste: So wählen Sie das richtige Tool</a></li>
                <li><a href="#fazit">Fazit</a></li>
              </ol>
            </nav>

            {/* Content */}
            <div className={styles.content}>
              <section id="was-ist">
                <h2>Was ist Dokumentenklassifizierung?</h2>
                <p>
                  <strong>Dokumentenklassifizierung</strong> bezeichnet den Prozess, Dokumente 
                  automatisch nach ihrem Typ zu erkennen und in eine definierte Ablagestruktur 
                  einzuordnen. In der Immobilienbewirtschaftung bedeutet das: Ein eingehendes 
                  Dokument wird automatisch als Mietvertrag, Rechnung, Kündigung oder 
                  Korrespondenz erkannt und dem richtigen Dossier zugeordnet.
                </p>
                <p>
                  Der Unterschied zur einfachen <strong>Dokumentenablage</strong>: Bei der 
                  Klassifizierung "versteht" das System den Inhalt des Dokuments und trifft 
                  Entscheidungen basierend auf dem Dokumenttyp, nicht nur auf Dateinamen 
                  oder manuellen Eingaben.
                </p>
                
                <div className={styles.highlightBox}>
                  <h3>Definition auf einen Blick</h3>
                  <p>
                    Dokumentenklassifizierung = Automatische Erkennung des Dokumenttyps + 
                    Zuordnung zur korrekten Ablagestruktur + Extraktion relevanter Metadaten
                  </p>
                </div>
              </section>

              <section id="warum-wichtig">
                <h2>Warum ist sie in der Immobilienbewirtschaftung wichtig?</h2>
                <p>
                  Die Schweizer Immobilienbewirtschaftung hat ein Dokumentenproblem. 
                  Bewirtschafter jonglieren täglich mit:
                </p>
                <ul>
                  <li><strong>5+ Ablagesysteme:</strong> ERP, DMS, E-Mail, SharePoint, Papierarchiv</li>
                  <li><strong>Dutzende Dokumenttypen:</strong> Mietverträge, Rechnungen, NK-Abrechnungen, Korrespondenz...</li>
                  <li><strong>Hunderte Liegenschaften:</strong> Jedes Dokument muss der richtigen Liegenschaft zugeordnet werden</li>
                  <li><strong>Mandatswechsel:</strong> Bei Übernahmen kommen oft 350+ GB an PDFs auf einmal</li>
                </ul>
                <p>
                  Das Resultat: Bewirtschafter verbringen geschätzt <strong>20-30% ihrer Zeit</strong> 
                  mit Dokumentensuche und -ablage statt mit der eigentlichen Bewirtschaftung.
                </p>
              </section>

              <section id="manuell-vs-automatisch">
                <h2>Manuelle vs. automatische Klassifizierung</h2>
                
                <div className={styles.comparisonTable}>
                  <div className={styles.comparisonColumn}>
                    <h3 className={styles.comparisonHeader}>Manuelle Klassifizierung</h3>
                    <ul>
                      <li>Mitarbeiter sichtet jedes Dokument</li>
                      <li>Entscheidet über Dokumenttyp</li>
                      <li>Benennt Datei manuell</li>
                      <li>Legt in korrekten Ordner ab</li>
                      <li>Skaliert nicht mit Volumen</li>
                    </ul>
                  </div>
                  <div className={`${styles.comparisonColumn} ${styles.highlighted}`}>
                    <h3 className={styles.comparisonHeader}>Automatische Klassifizierung</h3>
                    <ul>
                      <li>KI analysiert Dokumentinhalt</li>
                      <li>Erkennt Dokumenttyp automatisch</li>
                      <li>Generiert standardisierte Benennung</li>
                      <li>Ordnet korrekt zu mit Konfidenzwert</li>
                      <li>Skaliert linear mit Volumen</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="svit-standard">
                <h2>Der SVIT-Standard erklärt</h2>
                <p>
                  Der <strong>SVIT Schweiz</strong> (Schweizerischer Verband der Immobilienwirtschaft) 
                  hat über das SVIT Futureboard einen Leitfaden für das "Datenhandling beim 
                  Mandatswechsel" erarbeitet. Dieser definiert vier Hauptkategorien:
                </p>
                
                <div className={styles.tableWrapper}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Kürzel</th>
                        <th>Dossier</th>
                        <th>Typische Dokumente</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>ED</strong></td>
                        <td>Eigentümerdossier</td>
                        <td>Bewirtschaftungsverträge, Honorare, Budgets</td>
                      </tr>
                      <tr>
                        <td><strong>LD</strong></td>
                        <td>Liegenschaftsdossier</td>
                        <td>Serviceverträge, Pläne, NK-Abrechnungen</td>
                      </tr>
                      <tr>
                        <td><strong>MD</strong></td>
                        <td>Mieterdossier</td>
                        <td>Mietverträge, Kündigungen, Korrespondenz</td>
                      </tr>
                      <tr>
                        <td><strong>HD</strong></td>
                        <td>Hauswartdossier</td>
                        <td>Verträge, Pflichtenhefte, Lohnabrechnungen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p>
                  <strong>Wichtig:</strong> Der SVIT-Standard ist eine Empfehlung, keine Pflicht. 
                  Viele Bewirtschafter haben eigene, historisch gewachsene Strukturen. Gute 
                  Klassifizierungssysteme erlauben es, den SVIT-Standard als Basis zu nutzen 
                  und die eigene Struktur darauf aufzubauen.
                </p>
                
                <p>
                  <Link href="/wissen/glossar">→ Alle Begriffe im Glossar</Link>
                </p>
              </section>

              <section id="ki-klassifizierung">
                <h2>Wie funktioniert KI-basierte Klassifizierung?</h2>
                <p>
                  Moderne KI-Systeme zur Dokumentenklassifizierung arbeiten in mehreren Schritten:
                </p>
                
                <ol>
                  <li>
                    <strong>Texterkennung (OCR):</strong> Bei gescannten Dokumenten wird 
                    der Text zunächst digital lesbar gemacht.
                  </li>
                  <li>
                    <strong>Inhaltsanalyse:</strong> Die KI analysiert den Textinhalt, 
                    Struktur und Layout des Dokuments.
                  </li>
                  <li>
                    <strong>Klassifizierung:</strong> Basierend auf trainierten Modellen 
                    wird der Dokumenttyp bestimmt (z.B. "Mietvertrag").
                  </li>
                  <li>
                    <strong>Entitätenerkennung:</strong> Relevante Informationen werden 
                    extrahiert (Mieter, Liegenschaft, Datum, Beträge).
                  </li>
                  <li>
                    <strong>Konfidenzwert:</strong> Das System gibt an, wie sicher es 
                    bei der Klassifizierung ist (z.B. 95%).
                  </li>
                </ol>
                
                <div className={styles.highlightBox}>
                  <h3>Was ist ein Konfidenzwert?</h3>
                  <p>
                    Der Konfidenzwert (0-100%) zeigt, wie sicher die KI bei einer 
                    Klassifizierung ist. Bei hohen Werten (z.B. über 90%) kann das 
                    Dokument automatisch verarbeitet werden. Bei niedrigen Werten 
                    prüft ein Mitarbeiter kurz – und das System lernt aus der Korrektur.
                  </p>
                </div>
              </section>

              <section id="anwendungsfaelle">
                <h2>Anwendungsfälle</h2>
                
                <h3>1. Mandatswechsel</h3>
                <p>
                  Bei der Übernahme eines Verwaltungsmandats kommen oft viele GB an PDF-Daten –
                  inklusive "Monster-PDFs" mit 100-300 Seiten ohne Struktur. Automatische
                  Klassifizierung:
                </p>
                <ul>
                  <li>Teilt Monster-PDFs in Einzeldokumente auf</li>
                  <li>Klassifiziert jedes Dokument nach SVIT-Standard</li>
                  <li>Ordnet der richtigen Liegenschaft/Mieter zu</li>
                  <li>Reduziert den Aufwand von Monaten auf Wochen</li>
                </ul>
                <p>
                  <Link href="/loesung/mandatswechsel">→ Mehr zur Mandatswechsel-Lösung</Link>
                </p>
                
                <h3>2. Laufender Betrieb</h3>
                <p>
                  Im Tagesgeschäft fallen täglich Dutzende Dokumente an: E-Mail-Anhänge, 
                  Scans, Uploads. Automatische Klassifizierung im Hintergrund:
                </p>
                <ul>
                  <li>Erkennt eingehende Dokumente automatisch</li>
                  <li>Ordnet der richtigen Liegenschaft zu</li>
                  <li>Archiviert E-Mails vollständig</li>
                  <li>Spart täglich 1-2 Stunden pro Mitarbeiter</li>
                </ul>
                <p>
                  <Link href="/loesung/laufender-betrieb">→ Mehr zur Lösung für den laufenden Betrieb</Link>
                </p>
              </section>

              <section id="roi">
                <h2>ROI-Berechnung</h2>
                <p>
                  Die Investition in automatische Dokumentenklassifizierung kann sich in
                  vielen Fällen innerhalb weniger Monate rechnen. Die folgende Berechnung
                  ist ein <strong>hypothetisches Beispiel</strong> basierend auf Annahmen
                  und dient zur Orientierung. Die tatsächlichen Werte variieren je nach
                  Unternehmensgröße, Dokumentenvolumen und internen Prozessen.
                </p>

                <div className={styles.calculationBox}>
                  <h3>Hypothetisches Beispiel: Bewirtschaftung mit 1000 Wohnungen</h3>
                  <p style={{fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1rem'}}>
                    Hinweis: Die folgenden Zahlen sind Annahmen und können in der Praxis
                    stark variieren.
                  </p>
                  <div className={styles.calculation}>
                    <div className={styles.calcRow}>
                      <span>Zeitaufwand Ablage/Woche (manuell, angenommen)</span>
                      <span>10 Stunden</span>
                    </div>
                    <div className={styles.calcRow}>
                      <span>× 50 Wochen × CHF 85/Stunde (angenommen)</span>
                      <span>CHF 42'500/Jahr</span>
                    </div>
                    <div className={styles.calcRow}>
                      <span>Automatisierung reduziert auf (angenommen)</span>
                      <span>2 Stunden/Woche</span>
                    </div>
                    <div className={styles.calcRow}>
                      <span>Einsparung (angenommen)</span>
                      <span>CHF 34'000/Jahr</span>
                    </div>
                    <div className={styles.calcTotal}>
                      <span>ROI bei CHF 15'000 Jahreskosten (hypothetisch)</span>
                      <span>unter 6 Monaten</span>
                    </div>
                  </div>
                </div>
                
                <p>
                  <strong>Zusätzliche Vorteile</strong> (schwer quantifizierbar):
                </p>
                <ul>
                  <li>Weniger Fehler bei der Zuordnung</li>
                  <li>Schnellere Auskunftsfähigkeit</li>
                  <li>Bessere Compliance</li>
                  <li>Skalierungspotenzial (mehr Wohnungen pro Mitarbeiter)</li>
                </ul>
              </section>

              <section id="checkliste">
                <h2>Checkliste: So wählen Sie das richtige Tool</h2>
                <p>
                  Bei der Auswahl eines Klassifizierungstools für die Immobilienbewirtschaftung 
                  sollten Sie folgende Kriterien prüfen:
                </p>
                
                <div className={styles.highlightBox}>
                  <h3>Technische Anforderungen</h3>
                  <ul>
                    <li>Unterstützt OCR für gescannte Dokumente</li>
                    <li>Erkennt branchenspezifische Dokumenttypen (Mietverträge, NK-Abrechnungen...)</li>
                    <li>Kann Monster-PDFs aufteilen</li>
                    <li>Liefert Konfidenzwerte</li>
                    <li>Lernt aus Korrekturen</li>
                  </ul>
                </div>
                
                <div className={styles.highlightBox}>
                  <h3>Integration</h3>
                  <ul>
                    <li>Export in gängige Formate (CSV, JSON)</li>
                    <li>Kompatibilität mit Ihrem ERP (Garaio REM, Rimo, etc.)</li>
                    <li>Anbindung an Ihr DMS möglich</li>
                    <li>E-Mail-Integration</li>
                  </ul>
                </div>
                
                <div className={styles.highlightBox}>
                  <h3>Compliance & Sicherheit</h3>
                  <ul>
                    <li>Datenverarbeitung in der Schweiz</li>
                    <li>DSG-konform</li>
                    <li>Verschlüsselte Übertragung</li>
                    <li>SVIT-Standard unterstützt</li>
                  </ul>
                </div>
                
                <div className={styles.highlightBox}>
                  <h3>Flexibilität</h3>
                  <ul>
                    <li>Eigene Kategorien definierbar</li>
                    <li>Anpassung an bestehende Ablagestruktur</li>
                    <li>Skalierbar für Mandatswechsel</li>
                  </ul>
                </div>
              </section>

              <section id="fazit">
                <h2>Fazit</h2>
                <p>
                  Dokumentenklassifizierung ist kein "nice-to-have" mehr, sondern 
                  wird zum Wettbewerbsvorteil für Schweizer Immobilienbewirtschafter. 
                  Die Kombination aus steigendem Dokumentenvolumen, Fachkräftemangel 
                  und dem Druck zu mehr Effizienz macht Automatisierung unverzichtbar.
                </p>
                <p>
                  Die gute Nachricht: Die Technologie ist ausgereift, die Kosten sind 
                  überschaubar und der ROI in der Regel unter einem Jahr. Wer heute 
                  investiert, hat morgen mehr Zeit für die eigentliche Bewirtschaftung – 
                  und kann mehr Liegenschaften mit dem gleichen Team betreuen.
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaHeadline}>
                Bereit für automatische Dokumentenklassifizierung?
              </h2>
              <p className={styles.ctaText}>
                Flatscouts klassifiziert Ihre Immobiliendokumente automatisch – 
                SVIT-konform und anpassbar an Ihre Struktur. Ab CHF 0.10 pro Dokument.
              </p>
              <Link href="/#cta" className={styles.ctaButton}>
                Unverbindliche Demo anfordern
              </Link>
            </div>

            {/* Author Box */}
            <div className={styles.authorBox}>
              <div className={styles.authorInfo}>
                <span className={styles.authorLabel}>Veröffentlicht von</span>
                <span className={styles.authorName}>Flatscouts Team</span>
                <span className={styles.authorDesc}>
                  Experten für automatisierte Dokumentenklassifizierung in der Schweizer Immobilienbewirtschaftung
                </span>
              </div>
            </div>

            {/* Back Link */}
            <Link href="/wissen/blog" className={styles.backLink}>
              ← Zurück zum Blog
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
