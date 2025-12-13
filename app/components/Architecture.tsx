import Image from 'next/image'
import styles from './Architecture.module.css'

export default function Architecture() {
  return (
    <section className={styles.section} id="architecture">
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Systemarchitektur
        </h2>
        
        <div className={styles.imageWrapper}>
          <Image 
            src="/system-architecture.jpg" 
            alt="Systemarchitektur: DMS, ERP, E-Mail und File-Ablage verbunden mit Adapter Immobilienbewirtschaftung, Flatscouts Interpreter und Digital Document Twin"
            width={1200}
            height={800}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  )
}

