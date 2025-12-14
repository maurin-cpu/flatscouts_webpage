'use client'

import { useEffect, useRef } from 'react'
import styles from './ProofProcess.module.css'

export default function ProofProcess() {
  const blocksRef = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const animatedBlocks = new Set<HTMLElement>()

    const observers = blocksRef.current.map((block, index) => {
      if (!block) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement
            
            if (entry.isIntersecting) {
              // Only animate if not already animated
              if (!animatedBlocks.has(element)) {
                // Mark as animated so it doesn't animate again
                animatedBlocks.add(element)
                
                // Staggered animation: each block appears with a delay
                const delay = prefersReducedMotion ? 0 : index * 120 // 120ms stagger
                
                setTimeout(() => {
                  element.classList.add(styles.visible)
                }, delay)
              } else {
                // If already animated, just ensure it's visible (no animation)
                element.classList.add(styles.visible)
              }
            }
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -80px 0px',
        }
      )

      observer.observe(block)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className={styles.section} id="proof-process">
      <div className={styles.container} ref={containerRef}>
        <h2 className={styles.headline}>
          In 5 Schritten zu automatisierter Effizienz
        </h2>
        <p className={styles.subtitle}>
          Schritt 1 ist einmalig beim Onboarding – die Schritte 2-5 laufen kontinuierlich im Daily Business.
        </p>

        <div className={styles.zigzagContainer}>
          {/* Block 1: Bild links, Text rechts - Struktur konfigurieren */}
          <div
            ref={(el) => { blocksRef.current[0] = el }}
            className={`${styles.zigzagBlock} ${styles.block1}`}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.iconWrapper}>
                <img src="/konfiguration.png" alt="Struktur konfigurieren" />
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepNumber}>1.</span>
                  <span>Struktur konfigurieren</span>
                  <span className={styles.stepBadge}>(einmalig)</span>
                </h3>
                <p className={styles.stepText}>
                  Definieren Sie Ihre Indexierung, Kategorien und Ablagelogik – inklusive Konfidenz-Schwelle für automatischen Transfer. Passend zu Ihrem DMS/ERP.
                </p>
              </div>
            </div>
          </div>

          {/* Block 2: Text links, Bild rechts - Dokumente hochladen */}
          <div
            ref={(el) => { blocksRef.current[1] = el }}
            className={`${styles.zigzagBlock} ${styles.block2}`}
          >
            <div className={styles.textWrapper}>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepNumber}>2.</span>
                  <span>Dokumente hochladen</span>
                  <span className={styles.stepBadge}>(kontinuierlich)</span>
                </h3>
                <p className={styles.stepText}>
                  Laden Sie laufend E-Mails, PDFs und Scans hoch – alles wird zentral und sicher verarbeitet.
                </p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.iconWrapper}>
                <img src="/upload.png" alt="Dokumente hochladen" />
              </div>
            </div>
          </div>

          {/* Block 3: Bild links, Text rechts - AI-Kategorisierung */}
          <div
            ref={(el) => { blocksRef.current[2] = el }}
            className={`${styles.zigzagBlock} ${styles.block3}`}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.iconWrapper}>
                <img src="/ai-kategorisierung.png" alt="AI-Kategorisierung" />
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepNumber}>3.</span>
                  <span>AI-Kategorisierung</span>
                  <span className={styles.stepBadge}>(kontinuierlich)</span>
                </h3>
                <p className={styles.stepText}>
                  Die KI erkennt Inhalte automatisch und schlägt Kategorien/Benennungen vor – mit Konfidenz-Wert für jede Entscheidung.
                </p>
              </div>
            </div>
          </div>

          {/* Block 4: Text links, Bild rechts - Intelligenter Transfer */}
          <div
            ref={(el) => { blocksRef.current[3] = el }}
            className={`${styles.zigzagBlock} ${styles.block4}`}
          >
            <div className={styles.textWrapper}>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepNumber}>4.</span>
                  <span>Intelligenter Transfer</span>
                  <span className={styles.stepBadge}>(kontinuierlich)</span>
                </h3>
                <p className={styles.stepText}>
                  Dokumente mit hoher Konfidenz (Ihre definierte Schwelle) werden direkt übertragen – ohne Validierung. Bei niedriger Konfidenz validieren Sie kurz; das Tool lernt dazu.
                </p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <div className={styles.iconWrapper}>
                <img src="/validierung.png" alt="Intelligenter Transfer" />
              </div>
            </div>
          </div>

          {/* Block 5: Bild links, Text rechts - Nahtloser Abgleich */}
          <div
            ref={(el) => { blocksRef.current[4] = el }}
            className={`${styles.zigzagBlock} ${styles.block5}`}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.iconWrapper}>
                <img src="/ablage.png" alt="Nahtloser Abgleich" />
              </div>
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepNumber}>5.</span>
                  <span>Nahtloser Abgleich – erledigt</span>
                  <span className={styles.stepBadge}>(kontinuierlich)</span>
                </h3>
                <p className={styles.stepText}>
                  Alles landet sicher in ERP, Filesystem und DMS – inklusive Aktualisierungen. Maximale Automatisierung bei voller Kontrolle.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.closingLine}>
          Basierend auf Interviews mit Branchenexperten – maximale Entlastung im Daily Business und bei Mandatswechseln.
        </p>
      </div>
    </section>
  )
}
