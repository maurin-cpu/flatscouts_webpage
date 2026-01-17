import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './article.module.css'

export const metadata: Metadata = {
  title: 'Was kostet ein Mandatswechsel ohne Automatisierung? | Flatscouts',
  description: 'Die versteckten Kosten bei der Mandatsübergabe: Zeitaufwand, Personalkosten und Fehlerrisiken. Mit ROI-Rechnung für automatisierte Dokumentenklassifizierung.',
  keywords: 'Mandatswechsel Kosten, Mandatsübergabe Aufwand, Dokumentenklassifizierung ROI, Immobilienbewirtschaftung Schweiz',
  alternates: {
    canonical: 'https://www.flatscouts.ch/wissen/blog/mandatswechsel-kosten',
  },
  openGraph: {
    title: 'Was kostet ein Mandatswechsel ohne Automatisierung?',
    description: 'Die versteckten Kosten bei der Mandatsübergabe: Zeitaufwand, Personalkosten und Fehlerrisiken.',
    type: 'article',
    url: 'https://www.flatscouts.ch/wissen/blog/mandatswechsel-kosten',
    locale: 'de_CH',
  },
}

// Schema.org JSON-LD
const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Was kostet ein Mandatswechsel ohne Automatisierung?',
  description: 'Die versteckten Kosten bei der Mandatsübergabe: Zeitaufwand, Personalkosten und Fehlerrisiken.',
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
  mainEntityOfPage: 'https://www.flatscouts.ch/wissen/blog/mandatswechsel-kosten',
}

export default function MandatswechselKostenArticle() {
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
              <span className={styles.current}>Mandatswechsel Kosten</span>
            </nav>

            {/* Header */}
            <header className={styles.header}>
              <div className={styles.meta}>
                <time dateTime="2026-01-16">16. Januar 2026</time>
                <span className={styles.readTime}>6 Min. Lesezeit</span>
              </div>
              <h1 className={styles.title}>
                Was kostet ein Mandatswechsel ohne Automatisierung?
              </h1>
              <p className={styles.subtitle}>
                Die versteckten Kosten bei der Mandatsübergabe – und wie Sie mit KI-gestützter 
                Dokumentenklassifizierung bis zu 80% Zeit sparen können.
              </p>
            </header>

            {/* Table of Contents */}
            <nav className={styles.toc}>
              <h2 className={styles.tocTitle}>Inhalt</h2>
              <ol className={styles.tocList}>
                <li><a href="#versteckte-kosten">Die versteckten Kosten eines Mandatswechsels</a></li>
                <li><a href="#zeitaufwand">Zeitaufwand: Stunden pro 100 Wohnungen</a></li>
                <li><a href="#personalkosten">Personalkosten: Die Rechnung mit Stundensätzen</a></li>
                <li><a href="#fehlerkosten">Fehlerkosten: Was passiert bei falscher Zuordnung?</a></li>
                <li><a href="#roi-rechnung">ROI-Rechnung: Mit vs. ohne Automatisierung</a></li>
                <li><a href="#fazit">Fazit</a></li>
              </ol>
            </nav>

            {/* Content */}
            <div className={styles.content}>
              <section id="versteckte-kosten">
                <h2>Die versteckten Kosten eines Mandatswechsels</h2>
                <p>
                  Ein Mandatswechsel in der Immobilienbewirtschaftung ist weit mehr als nur eine 
                  administrative Übergabe. Wenn eine Bewirtschaftungsfirma ein Portfolio von 
                  beispielsweise 2'500 Wohnungen übernimmt, beginnt oft ein wochenlanges 
                  Dokumentenchaos.
                </p>
                <p>
                  Die Herausforderung: <strong>350 GB an PDFs</strong>, darunter unzählige 
                  "Monster-PDFs" mit 100+ Seiten ohne jegliche Struktur. Mietverträge, 
                  Nebenkostenabrechnungen, Korrespondenz – alles wild durcheinander gescannt.
                </p>
                
                <div className={styles.highlightBox}>
                  <h3>Typische Ausgangslage bei Mandatsübernahmen</h3>
                  <ul>
                    <li>Dokumente an 5+ verschiedenen Orten (ERP, DMS, E-Mail, SharePoint, Papierarchiv)</li>
                    <li>Monster-PDFs mit hunderten Seiten ohne Struktur</li>
                    <li>Fehlende oder inkonsistente Benennung</li>
                    <li>Keine Zuordnung zu Eigentümer-, Liegenschafts- oder Mieterdossiers</li>
                    <li>Verlorene E-Mails von ausgeschiedenen Mitarbeitern</li>
                  </ul>
                </div>
              </section>

              <section id="zeitaufwand">
                <h2>Zeitaufwand: Stunden pro 100 Wohnungen</h2>
                <p>
                  Bei manueller Dokumentensortierung rechnen erfahrene Bewirtschafter mit 
                  folgenden Durchschnittswerten:
                </p>
                
                <div className={styles.tableWrapper}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Tätigkeit</th>
                        <th>Zeit pro 100 Wohnungen</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sichten und Sortieren der Dokumente</td>
                        <td>15-25 Stunden</td>
                      </tr>
                      <tr>
                        <td>Monster-PDFs manuell aufteilen</td>
                        <td>8-12 Stunden</td>
                      </tr>
                      <tr>
                        <td>Dokumente umbenennen und einordnen</td>
                        <td>10-15 Stunden</td>
                      </tr>
                      <tr>
                        <td>Qualitätskontrolle und Nacharbeit</td>
                        <td>5-8 Stunden</td>
                      </tr>
                      <tr className={styles.totalRow}>
                        <td><strong>Total (manuell)</strong></td>
                        <td><strong>38-60 Stunden</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  Bei einer Übernahme von 2'500 Wohnungen bedeutet das: 
                  <strong> 950-1'500 Arbeitsstunden</strong> – oder 6-9 Monate Vollzeitarbeit 
                  einer Person, nur für die Dokumentensortierung.
                </p>
              </section>

              <section id="personalkosten">
                <h2>Personalkosten: Die Rechnung mit Stundensätzen</h2>
                <p>
                  Setzen wir einen durchschnittlichen Vollkostensatz von CHF 85/Stunde an 
                  (inklusive Sozialleistungen, Infrastruktur, etc.), ergibt sich folgende Rechnung:
                </p>

                <div className={styles.calculationBox}>
                  <h3>Kostenbeispiel: 2'500 Wohnungen</h3>
                  <div className={styles.calculation}>
                    <div className={styles.calcRow}>
                      <span>Arbeitsaufwand (Mittelwert)</span>
                      <span>1'225 Stunden</span>
                    </div>
                    <div className={styles.calcRow}>
                      <span>× Stundensatz</span>
                      <span>CHF 85</span>
                    </div>
                    <div className={styles.calcTotal}>
                      <span>Gesamtkosten manuelle Sortierung</span>
                      <span>CHF 104'125</span>
                    </div>
                  </div>
                </div>

                <p>
                  Dazu kommen indirekte Kosten, die oft übersehen werden:
                </p>
                <ul>
                  <li><strong>Opportunitätskosten:</strong> Bewirtschafter können sich nicht um das Tagesgeschäft kümmern</li>
                  <li><strong>Verzögerungen:</strong> Mieteranfragen können nicht zeitnah beantwortet werden</li>
                  <li><strong>Überstunden:</strong> Zusatzbelastung für das bestehende Team</li>
                  <li><strong>Fluktuation:</strong> Monotone Sortierarbeit führt zu Unzufriedenheit</li>
                </ul>
              </section>

              <section id="fehlerkosten">
                <h2>Fehlerkosten: Was passiert bei falscher Zuordnung?</h2>
                <p>
                  Manuelle Dokumentensortierung ist fehleranfällig. Studien zeigen eine 
                  Fehlerquote von <strong>3-8%</strong> bei repetitiver Sortierarbeit – besonders 
                  gegen Ende eines langen Arbeitstages.
                </p>

                <div className={styles.warningBox}>
                  <h3>Typische Fehler und ihre Konsequenzen</h3>
                  <ul>
                    <li>
                      <strong>Mietvertrag im falschen Dossier:</strong> Bei Streitigkeiten ist 
                      das Dokument nicht auffindbar → Rechtliche Risiken
                    </li>
                    <li>
                      <strong>Fehlende Mietzinsanpassung:</strong> Einnahmenausfälle über Monate 
                      hinweg → Direkte finanzielle Verluste
                    </li>
                    <li>
                      <strong>Verlorene Kündigungsbestätigung:</strong> Wohnung wird nicht rechtzeitig 
                      neu vermietet → Leerstandskosten
                    </li>
                    <li>
                      <strong>Doppelte Dokumente:</strong> Verwirrung und Mehraufwand bei der Suche
                    </li>
                  </ul>
                </div>

                <p>
                  Konservativ geschätzt verursachen diese Fehler Folgekosten von 
                  <strong> CHF 15'000-30'000</strong> bei einer grossen Mandatsübernahme – 
                  oft erst Monate später sichtbar.
                </p>
              </section>

              <section id="roi-rechnung">
                <h2>ROI-Rechnung: Mit vs. ohne Automatisierung</h2>
                <p>
                  Mit KI-gestützter Dokumentenklassifizierung wie Flatscouts reduziert sich 
                  der Aufwand drastisch:
                </p>

                <div className={styles.comparisonTable}>
                  <div className={styles.comparisonColumn}>
                    <h3 className={styles.comparisonHeader}>Manuell</h3>
                    <ul>
                      <li>1'225 Arbeitsstunden</li>
                      <li>6-9 Monate Dauer</li>
                      <li>CHF 104'125 Personalkosten</li>
                      <li>3-8% Fehlerquote</li>
                      <li>CHF 15'000+ Fehlerfolgekosten</li>
                    </ul>
                    <div className={styles.comparisonTotal}>
                      <strong>Total: ~CHF 120'000+</strong>
                    </div>
                  </div>
                  <div className={styles.comparisonColumn + ' ' + styles.highlighted}>
                    <h3 className={styles.comparisonHeader}>Mit Flatscouts</h3>
                    <ul>
                      <li>~150 Stunden (Validierung)</li>
                      <li>2-4 Wochen Dauer</li>
                      <li>CHF 12'750 Personalkosten</li>
                      <li>Minimale Fehlerquote durch KI</li>
                      <li>Dokumentenkosten ab CHF 0.10/Stk.</li>
                    </ul>
                    <div className={styles.comparisonTotal}>
                      <strong>Total: ~CHF 25'000-35'000</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.savingsBox}>
                  <span className={styles.savingsLabel}>Potenzielle Ersparnis</span>
                  <span className={styles.savingsValue}>CHF 85'000 - 95'000</span>
                  <span className={styles.savingsPercent}>~75% Kostenreduktion</span>
                </div>

                <p>
                  <strong>Wichtig:</strong> Diese Zahlen sind Schätzungen basierend auf 
                  Branchenerfahrungen. Die tatsächlichen Kosten variieren je nach Qualität 
                  der übergebenen Dokumente, Komplexität des Portfolios und internen Prozessen.
                </p>
              </section>

              <section id="fazit">
                <h2>Fazit: Automatisierung als strategischer Vorteil</h2>
                <p>
                  Die Kosten eines Mandatswechsels ohne Automatisierung werden oft unterschätzt. 
                  Neben den offensichtlichen Personalkosten entstehen versteckte Kosten durch:
                </p>
                <ul>
                  <li>Gebundene Ressourcen im Tagesgeschäft</li>
                  <li>Fehler mit langfristigen Folgekosten</li>
                  <li>Verzögerte Mandatsübernahme</li>
                  <li>Mitarbeiterunzufriedenheit</li>
                </ul>
                <p>
                  KI-gestützte Dokumentenklassifizierung löst nicht nur das unmittelbare 
                  Problem, sondern schafft eine saubere Datenbasis für die zukünftige 
                  Bewirtschaftung – nach SVIT-Standard oder Ihrer individuellen Struktur.
                </p>
              </section>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection}>
              <h2 className={styles.ctaHeadline}>
                Mandatswechsel steht an?
              </h2>
              <p className={styles.ctaText}>
                Flatscouts klassifiziert Ihre Dokumente automatisch – ab CHF 0.10 pro Dokument. 
                SVIT-konform und flexibel anpassbar an Ihre Struktur.
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
