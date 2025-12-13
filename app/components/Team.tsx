import styles from './Team.module.css'

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <div className={styles.container}>
        <h2 className={styles.headline}>Unser Team</h2>
        <p className={styles.text}>
          Informationen zum Team folgen in Kürze.
        </p>
      </div>
    </section>
  )
}

