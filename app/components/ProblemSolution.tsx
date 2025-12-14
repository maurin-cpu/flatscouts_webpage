import styles from './ProblemSolution.module.css'

export default function ProblemSolution() {
  return (
    <section className={styles.section} id="problem-solution">
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Von täglichen Zeitfressern und Risiken zur vollständigen Automatisierung
        </h2>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Probleme</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Informationen suchen in mehreren Systemen und E-Mails (Datensilos)
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Datenverluste bei Personalwechseln oder Mandatsübergaben
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Manuelles Ablegen und Indexieren von E-Mails & Dokumenten
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Zu viele parallele Tools
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Lösung</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Vollautomatische Kategorisierung & Ablage von Dokumenten und E-Mails
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Schnelle Suche & ERP-Abgleich
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Digitaler Zwilling für schnelle Suche
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Signifikanter Effizienzgewinn im Alltag
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.result}>
          Ergebnis: Signifikanter Effizienzgewinn und sichere Datenhaltung – Ihr Team gewinnt Zeit für das Wesentliche.
        </p>
      </div>
    </section>
  )
}

