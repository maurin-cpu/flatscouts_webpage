import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './impressum.module.css'

export const metadata: Metadata = {
  title: 'Impressum | Flatscouts',
  description: 'Impressum und rechtliche Informationen von Flatscouts - KI-Dokumentenklassifizierung für die Schweizer Immobilienbewirtschaftung.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.flatscouts.ch/impressum',
  },
}

export default function ImpressumPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Zurück zur Startseite
        </Link>

        <h1 className={styles.headline}>Impressum</h1>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Angaben gemäss Schweizer Recht</h2>

            <div className={styles.infoBlock}>
              <h3>Firmenname</h3>
              <p>Flatscouts GmbH</p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Adresse</h3>
              <p>
                Bahnhofstrasse 100<br />
                8001 Zürich<br />
                Schweiz
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Kontakt</h3>
              <p>
                E-Mail: <a href="mailto:info@flatscouts.ch">info@flatscouts.ch</a><br />
                Telefon: +41 44 123 45 67
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Handelsregister</h3>
              <p>
                Handelsregister-Nr.: CHE-123.456.789<br />
                Handelsregisteramt: Kanton Zürich
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h3>Mehrwertsteuer</h3>
              <p>
                UID: CHE-123.456.789 MWST
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Verantwortlich für den Inhalt</h2>
            <p>Maurin (Geschaeftsfuehrer)</p>
          </section>

          <section className={styles.section}>
            <h2>Haftungsausschluss</h2>
            <p>
              Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Links zu externen Websites</h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
          </section>
        </div>

        <div className={styles.footer}>
          <p>Stand: Januar 2026</p>
          <Link href="/datenschutz" className={styles.link}>
            Datenschutzerklärung →
          </Link>
        </div>
      </div>
    </main>
  )
}
