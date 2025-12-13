import styles from './ProofProcess.module.css'

export default function ProofProcess() {
  return (
    <section className={styles.section} id="proof-process">
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Bewährt & in 3 Schritten umsetzbar
        </h2>

        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              "Keine manuellen Ablagen mehr – keine Datenverluste, enorme Zeitersparnis."
            </p>
            <p className={styles.source}>Bewirtschafter</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              "Einfache Integration, sofortiger Effizienz- und Sicherheitsgewinn."
            </p>
            <p className={styles.source}>Bewirtschafter</p>
          </div>
          <div className={styles.testimonialCard}>
            <p className={styles.quote}>
              "Zuverlässige Automatisierung, die den Alltag vereinfacht."
            </p>
            <p className={styles.source}>Bewirtschafter</p>
          </div>
        </div>

        <div className={styles.process}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>1</div>
            <h3 className={styles.stepTitle}>Dokumente hochladen</h3>
            <p className={styles.stepDescription}>E-Mails, PDFs, Scans</p>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>2</div>
            <h3 className={styles.stepTitle}>KI schlägt vor</h3>
            <p className={styles.stepDescription}>Kurze Validierung</p>
          </div>
          <div className={styles.arrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepIcon}>3</div>
            <h3 className={styles.stepTitle}>Automatischer Transfer</h3>
            <p className={styles.stepDescription}>Erledigt</p>
          </div>
        </div>

        <div className={styles.statsBox}>
          <p className={styles.statsText}>
            Entwickelt für reale Branchenprozesse – maximale Zeitersparnis und Datensicherheit durch Automatisierung.
          </p>
        </div>
      </div>
    </section>
  )
}

