'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Process.module.css'

// Image Icon Components
const CategoryIcon = () => (
  <Image
    src="/intelligent.png"
    alt="Intelligente Verarbeitung"
    width={65}
    height={65}
    style={{ objectFit: 'contain' }}
    unoptimized={true}
  />
)

const ServicesIcon = () => (
  <Image
    src="/zweiservices.png"
    alt="Zwei Services"
    width={50}
    height={50}
    style={{ objectFit: 'contain' }}
    unoptimized={true}
  />
)

interface WorkflowPhase {
  icon: React.FC
  title: string
  subtitle: string
  bullets?: string[]
  highlightBox?: string
  hasServices?: boolean
}

const workflowPhases: WorkflowPhase[] = [
  {
    icon: CategoryIcon,
    title: 'Intelligente Verarbeitung',
    subtitle: 'Monster-PDFs werden zu strukturierten Dokumenten',
    bullets: [
      'Erkennt und trennt automatisch mehrseitige PDFs',
      'Kategorisiert nach Dokumenttyp (Mietvertrag, Rechnung, etc.)',
      'Benennt und Kategorisiert Dateien gemäss ihren Konventionen',
      'Sie prüfen nur noch – nicht mehr sortieren'
    ],
    highlightBox: 'Monster PDFs mit 300 Seiten → strukturiert in minuten statt stunden'
  },
  {
    icon: ServicesIcon,
    title: 'Zwei Services',
    subtitle: 'Für jeden Bedarf die richtige Lösung',
    hasServices: true
  }
]

export default function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer for workflow phase cards
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const animatedPhases = new Set<HTMLElement>()

    const observers = phaseRefs.current.map((phase, index) => {
      if (!phase) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement

            if (entry.isIntersecting) {
              if (!animatedPhases.has(element)) {
                animatedPhases.add(element)
                const delay = prefersReducedMotion ? 0 : index * 200

                setTimeout(() => {
                  element.classList.add(styles.phaseVisible)
                }, delay)
              } else {
                element.classList.add(styles.phaseVisible)
              }
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '-50px'
        }
      )

      observer.observe(phase)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="solution"
      aria-label="Loesung"
    >
      <div className={styles.container}>
        <h2 className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}>
          Ihr digitaler Ablagesklave – vollautomatisch im Hintergrund
        </h2>

        {/* Workflow Phases */}
        <div className={styles.phasesGrid}>
          {workflowPhases.map((phase, index) => {
            const IconComponent = phase.icon
            return (
              <div
                key={index}
                ref={(el) => { phaseRefs.current[index] = el }}
                className={styles.phaseCard}
                role="article"
                aria-labelledby={`phase-${index}-title`}
              >
                <div className={styles.phaseIconWrapper}>
                  <IconComponent />
                </div>
                <h3 id={`phase-${index}-title`} className={styles.phaseTitle}>
                  {phase.title}
                </h3>
                <p className={styles.phaseSubtitle}>{phase.subtitle}</p>

                {phase.hasServices ? (
                  // Services Layout for Kachel 2 - Simple version
                  <>
                    <div className={styles.servicesContainer}>
                      {/* Enterprise Integration */}
                      <div className={styles.serviceItem}>
                        <div className={styles.serviceHeader}>
                          <h4 className={styles.serviceTitle}>Enterprise Integration</h4>
                        </div>
                        <ul className={styles.serviceBullets}>
                          <li>Für große Bewirtschaften mit vielen Einheiten</li>
                          <li>Für Mandatsübergaben und Automatisierung im Tagesbetrieb</li>
                          <li>Direkte Integration in ihr DMS & ERP</li>
                        </ul>
                      </div>

                      {/* On-Demand Classification */}
                      <div className={styles.serviceItem}>
                        <div className={styles.serviceHeader}>
                          <h4 className={styles.serviceTitle}>On-Demand Classification</h4>
                        </div>
                        <ul className={styles.serviceBullets}>
                          <li>Für sporadische Übergaben</li>
                          <li>Einfach hochladen, KI arbeitet</li>
                          <li>Ab CHF 0.10 pro Dokument</li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  // Regular bullets for other phases
                  <ul className={styles.phaseBullets}>
                    {phase.bullets?.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className={styles.bulletItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>

        {/* Highlight Box below cards */}
        {workflowPhases[0]?.highlightBox && (
          <div className={styles.highlightBox}>
            {workflowPhases[0].highlightBox}
          </div>
        )}
      </div>
    </section>
  )
}
