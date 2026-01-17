'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import styles from './ProofProcess.module.css'

export default function ProofProcess() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const entriesRef = useRef<(HTMLDivElement | null)[]>([])
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    if (timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect()
      setHeight(rect.height)
    }

    // Intersection Observer für Timeline-Entries
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const animatedEntries = new Set<HTMLElement>()

    const observers = entriesRef.current.map((entry, index) => {
      if (!entry) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement

            if (entry.isIntersecting) {
              if (!animatedEntries.has(element)) {
                animatedEntries.add(element)
                const delay = prefersReducedMotion ? 0 : index * 250

                setTimeout(() => {
                  element.classList.add(styles.entryVisible)
                }, delay)
              } else {
                element.classList.add(styles.entryVisible)
              }
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(entry)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const stepsData = [
    {
      image: '/konfiguration.png',
      alt: 'Struktur konfigurieren',
      title: 'Struktur konfigurieren',
      badge: '(einmalig)',
      description: 'Definieren Sie Ihre Indexierung, Kategorien und Ablagelogik – inklusive Konfidenz-Schwelle für automatischen Transfer. Passend zu Ihrem DMS/ERP.',
      benefits: [
        'Individuelle Kategorien definieren',
        'Konfidenz-Schwelle festlegen',
        'DMS/ERP Integration konfigurieren',
      ],
    },
    {
      image: '/upload.png',
      alt: 'Dokumente hochladen',
      title: 'Dokumente hochladen',
      badge: '(kontinuierlich)',
      description: 'Laden Sie laufend E-Mails, PDFs und Scans hoch – alles wird zentral und sicher verarbeitet.',
      benefits: [
        'Zentrale Verarbeitung',
        'Sichere Speicherung',
        'Unterstützung für alle Formate',
      ],
    },
    {
      image: '/ai-kategorisierung.png',
      alt: 'AI-Kategorisierung',
      title: 'Kategorisierung',
      badge: '(kontinuierlich)',
      description: 'Die KI erkennt Inhalte automatisch und schlägt Kategorien/Benennungen vor – mit Konfidenz-Wert für jede Entscheidung.',
      benefits: [
        'Automatische Erkennung',
        'Konfidenz-Werte pro Entscheidung',
        'Lernfähiges System',
      ],
    },
    {
      image: '/validierung.png',
      alt: 'Intelligenter Transfer',
      title: 'Intelligenter Transfer',
      badge: '(kontinuierlich)',
      description: 'Dokumente mit hoher Konfidenz (Ihre definierte Schwelle) werden direkt übertragen – ohne Validierung. Bei niedriger Konfidenz validieren Sie kurz; das Tool lernt dazu.',
      benefits: [
        'Automatischer Transfer bei hoher Konfidenz',
        'Manuelle Validierung bei Bedarf',
        'Kontinuierliches Lernen',
      ],
    },
    {
      image: '/ablage.png',
      alt: 'Nahtloser Abgleich',
      title: 'Nahtloser Abgleich – erledigt',
      badge: '(kontinuierlich)',
      description: 'Alles landet sicher in ERP, Filesystem und DMS – inklusive Aktualisierungen. Maximale Automatisierung bei voller Kontrolle.',
      benefits: [
        'Automatische Synchronisation',
        'ERP & DMS Integration',
        'Vollstaendige Kontrolle',
      ],
    },
  ]

  return (
    <section className={styles.section} id="proof-process" ref={containerRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}>
            So funktioniert es im Detail
          </h2>
          <p className={`${styles.subtitle} ${isVisible ? styles.animateIn : ''}`}>
            Schritt 1 ist einmalig beim Onboarding – die Schritte 2-5 laufen kontinuierlich im Daily Business.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className={styles.timeline}>
          {stepsData.map((step, index) => (
            <div
              key={index}
              ref={(el) => { entriesRef.current[index] = el }}
              className={styles.timelineEntry}
            >
              {/* Sticky Title Left */}
              <div className={styles.timelineTitle}>
                <div className={styles.timelineDot}>
                  <div className={styles.timelineDotInner} />
                </div>
                <h3 className={styles.timelineTitleText}>
                  <span className={styles.timelineNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.timelineTitleName}>{step.title}</span>
                </h3>
              </div>

              {/* Card Right */}
              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    {/* Image Links */}
                    <div className={styles.imageWrapper}>
                      <Image
                        src={step.image}
                        alt={step.alt}
                        width={160}
                        height={160}
                        className={styles.image}
                      />
                    </div>

                    {/* Text Content Rechts */}
                    <div className={styles.textContent}>
                      {/* Title and Badge */}
                      <h3 className={styles.cardTitle}>
                        {step.title}
                        {step.badge && (
                          <span className={styles.badge}>{step.badge}</span>
                        )}
                      </h3>

                      {/* Description */}
                      <p className={styles.cardDescription}>{step.description}</p>

                      {/* Benefits List */}
                      <ul className={styles.benefitsList}>
                        {step.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className={styles.benefitItem}>
                            <div className={styles.benefitDot}>
                              <div className={styles.benefitDotInner} />
                            </div>
                            <span className={styles.benefitText}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline Line */}
          <div
            style={{ height: height + 'px' }}
            className={styles.timelineLine}
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className={styles.timelineProgress}
            />
          </div>
        </div>

        {/* Closing Line */}
        <p className={`${styles.closingLine} ${isVisible ? styles.animateIn : ''}`}>
          Basierend auf Interviews mit Branchenexperten – maximale Entlastung im Daily Business und bei Mandatswechseln.
        </p>
      </div>
    </section>
  )
}
