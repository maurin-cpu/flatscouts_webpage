'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import styles from './ServiceModels.module.css'

// Image Icon Components
const EnterpriseIcon = () => (
  <Image
    src="/enterprise.png"
    alt="Enterprise Integration Service"
    width={45}
    height={45}
    style={{ objectFit: 'contain' }}
  />
)

const OnDemandIcon = () => (
  <Image
    src="/ondemand.png"
    alt="On-Demand Classification Service"
    width={45}
    height={45}
    style={{ objectFit: 'contain' }}
  />
)

interface ServiceModel {
  id: string
  name: string
  icon: React.FC
  target: string
  idealFor: string[]
  capabilities: string[]
  benefits: string[]
  pricing: string
}

export default function ServiceModels() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setIsVisible(true)

    // Intersection Observer für Card-Animationen
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const animatedCards = new Set<HTMLElement>()

    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement

            if (entry.isIntersecting) {
              if (!animatedCards.has(element)) {
                animatedCards.add(element)
                const delay = prefersReducedMotion ? 0 : index * 200

                setTimeout(() => {
                  element.classList.add(styles.cardVisible)
                }, delay)
              } else {
                element.classList.add(styles.cardVisible)
              }
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -50px 0px',
        }
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])


  const serviceModels: ServiceModel[] = [
    {
      id: 'enterprise',
      name: 'Enterprise Integration Service',
      icon: EnterpriseIcon,
      target: 'Für große Bewirtschaftungen',
      idealFor: [
        'Große Immobilienfirmen mit vielen Einheiten und bestehenden IT-Systemen.'
      ],
      capabilities: [
        'Vorbereitet für Integration in Ihre Systeme (ERP, DMS) – strukturierter Export mit Metadaten',
        'Automatische Klassifizierung von E-Mails, Scans & PDFs im Tagesbetrieb – SVIT-konform',
        'Intelligente, semantische Suche über alle Dokumente hinweg',
        'Digitaler Zwilling für schnelle Prüfung & kontinuierliches Lernen',
        'Anomalie-Erkennung durch Abgleich mit ERP-Daten'
      ],
      benefits: [
        'Bis zu 50 % weniger Zeitaufwand bei Suche & Übergaben',
        'Höhere Produktivität pro Bewirtschafter',
        'Weniger Risiken bei Mandatswechseln & mehr Datensicherheit',
        'Zukunftsfähige KI-Basis für Ihr Unternehmen'
      ],
      pricing: 'Individuell, volumen- & integrationsbasiert – ROI meist < 6 Monate'
    },
    {
      id: 'on-demand',
      name: 'On-Demand Classification Service',
      icon: OnDemandIcon,
      target: 'Für kleine Bewirtschaftungen',
      idealFor: [
        'Kleine Bewirtschafter ohne IT-Ressourcen, mit sporadischen Mandatswechseln und Übergaben.'
      ],
      capabilities: [
        'Dokumente einfach hochladen (Portal oder Secure-Link)',
        'KI-Klassifizierung in eigens definierte Kategorien in wenigen Minuten',
        'Strukturierte Ausgabe mit Metadaten & Prüfwerten',
      ],
      benefits: [
        'Kein Setup, kein IT-Aufwand',
        'Günstig & risikoarm für einzelne Liegenschaften',
        'Schnelle Klarheit bei Übergaben',
        'Jederzeit upgrade-fähig auf Enterprise'
      ],
      pricing: 'Pay-per-Use: ab CHF 0.20 pro Dokument, keine Fixkosten'
    }
  ]

  return (
    <section className={styles.section} id="service-models" ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}>
            Unsere Service-Modelle
          </h2>
          <p className={`${styles.subtitle} ${isVisible ? styles.animateIn : ''}`}>
            Wählen Sie das Modell, das am besten zu Ihren Bedürfnissen passt
          </p>
        </div>

        {/* Service Model Cards */}
        <div className={styles.cardsGrid}>
          {serviceModels.map((model, index) => {
            const IconComponent = model.icon
            return (
              <div
                key={model.id}
                ref={(el) => { cardRefs.current[index] = el }}
                className={styles.card}
              >
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <div className={styles.cardTitleWrapper}>
                    <div className={styles.iconWrapper}>
                      <IconComponent />
                    </div>
                    <h3 className={styles.cardTitle}>{model.name}</h3>
                  </div>
                </div>

                {/* Target */}
                <div className={styles.target}>
                  <p className={styles.targetText}>{model.target}</p>
                </div>

                {/* Ideal For */}
                <div className={styles.contentSection}>
                  <h4 className={styles.sectionTitle}>Ideal für:</h4>
                  <ul className={styles.list}>
                    {model.idealFor.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.listItem}>
                        <span className={styles.listText}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Capabilities */}
                <div className={styles.contentSection}>
                  <h4 className={styles.sectionTitle}>Was es kann:</h4>
                  <ul className={styles.list}>
                    {model.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className={styles.listItem}>
                        <Check className={styles.checkIcon} size={18} />
                        <span className={styles.listText}>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className={styles.contentSection}>
                  <h4 className={styles.sectionTitle}>Ihr Nutzen:</h4>
                  <ul className={styles.list}>
                    {model.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className={styles.listItem}>
                        <Check className={styles.checkIcon} size={18} />
                        <span className={styles.listText}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className={styles.pricing}>
                  <p className={styles.pricingText}>
                    <strong>Preismodell:</strong> {model.pricing}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
