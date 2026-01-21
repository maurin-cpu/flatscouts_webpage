import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './datenschutz.module.css'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Flatscouts',
  description: 'Datenschutzerklärung von Flatscouts - Informationen zur Verarbeitung Ihrer Daten gemäss Schweizer Datenschutzgesetz (DSG).',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.flatscouts.ch/datenschutz',
  },
}

export default function DatenschutzPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Zurück zur Startseite
        </Link>

        <h1 className={styles.headline}>Datenschutzerklärung</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Flatscouts GmbH<br />
              Bahnhofstrasse 100<br />
              8001 Zuerich<br />
              Schweiz
            </p>
            <p>
              E-Mail: <a href="mailto:datenschutz@flatscouts.ch">datenschutz@flatscouts.ch</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Allgemeine Hinweise</h2>
            <p>
              Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck
              der Verarbeitung personenbezogener Daten auf unserer Website. Die
              rechtliche Grundlage bildet das Schweizer Datenschutzgesetz (DSG)
              sowie, soweit anwendbar, die EU-Datenschutz-Grundverordnung (DSGVO).
            </p>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Datenerhebung auf unserer Website</h2>

            <h3>3.1 Server-Log-Dateien</h3>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch Informationen
              in sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar und werden nach
              30 Tagen automatisch gelöscht.
            </p>

            <h3>3.2 Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre
              Angaben (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung Ihrer Anfrage
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Dokumentenverarbeitung (Flatscouts Service)</h2>
            <p>
              Wenn Sie unseren Dokumentenklassifizierungsservice nutzen, werden die
              hochgeladenen Dokumente ausschliesslich zur Erbringung des Services
              verarbeitet:
            </p>
            <ul>
              <li>Dokumente werden verschlüsselt übertragen (TLS/SSL)</li>
              <li>Verarbeitung erfolgt auf Servern in der Schweiz</li>
              <li>Dokumente werden nach der Verarbeitung gemäss Ihren Vorgaben gelöscht</li>
              <li>Keine Weitergabe an Dritte ohne ausdrückliche Zustimmung</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Cookies</h2>
            <p>
              Diese Website verwendet technisch notwendige Cookies, die für den
              Betrieb der Website erforderlich sind. Diese Cookies werden nach
              Beendigung der Browser-Sitzung automatisch gelöscht.
            </p>
            <p>
              Analyse-Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
            </p>
            <ul>
              <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten Daten verlangen</li>
              <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
              <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
              <li><strong>Einschränkungsrecht:</strong> Sie können die Einschränkung der Verarbeitung verlangen</li>
              <li><strong>Widerspruchsrecht:</strong> Sie können der Datenverarbeitung widersprechen</li>
              <li><strong>Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem gängigen Format erhalten</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
              <a href="mailto:datenschutz@flatscouts.ch">datenschutz@flatscouts.ch</a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu
              beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
              personenbezogenen Daten gegen das Datenschutzrecht verstösst.
            </p>
            <p>
              Zuständige Aufsichtsbehörde in der Schweiz:<br />
              Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)<br />
              <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">
                www.edoeb.admin.ch
              </a>
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
              stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen
              unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die
              neue Datenschutzerklärung.
            </p>
          </section>
        </div>

        <div className={styles.footer}>
          <p>Stand: Januar 2026</p>
          <Link href="/impressum" className={styles.link}>
            Impressum →
          </Link>
        </div>
      </div>
    </main>
  )
}
