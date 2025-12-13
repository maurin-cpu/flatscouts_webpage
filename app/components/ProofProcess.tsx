import styles from './ProofProcess.module.css'

export default function ProofProcess() {
  return (
    <section className={styles.section} id="proof-process">
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Herausforderungen & Nutzen
        </h2>

        <div className={styles.challengesBenefits}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Herausforderungen</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Dokumente & Infos an 5 Orten suchen
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Datenverluste bei Wechseln/Personalfluktuation
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Manuelles Ablegen & Indexieren
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Fragmentierte Tools
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Nutzen</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Vollautomatische Ablage
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Keine Datenverluste
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Schnelle Suche & Abgleich
              </li>
              <li className={styles.listItem}>
                <span className={styles.icon}>•</span>
                Signifikanter Effizienzgewinn
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.closingLine}>
          Basierend auf realen Branchengesprächen – für Ihren Alltag.
        </p>

        <h3 className={styles.processSubtitle}>
          In 3 einfachen Schritten umsetzbar
        </h3>

        <div className={styles.process}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>1</div>
            <h4 className={styles.stepTitle}>Dokumente hochladen</h4>
            <div className={styles.stepIconSvg}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="20" width="30" height="35" rx="2" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 25h20M20 30h20M20 35h15" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M30 12v8M30 12l-4 4M30 12l4 4" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className={styles.arrow}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10l10 10-10 10" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>2</div>
            <h4 className={styles.stepTitle}>KI schlägt vor – kurze Validierung</h4>
            <div className={styles.stepIconSvg}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="15" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 30l4 4 8-8" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className={styles.arrow}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 10l10 10-10 10" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>3</div>
            <h4 className={styles.stepTitle}>Automatischer Transfer – erledigt</h4>
            <div className={styles.stepIconSvg}>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 30h24M18 30l6 6M18 30l6-6M42 30l-6 6M42 30l-6-6" stroke="#123c36" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
