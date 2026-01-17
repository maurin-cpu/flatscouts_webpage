'use client'

import { useEffect, useState } from 'react'
import styles from './FAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'Was ist Dokumentenklassifizierung in der Immobilienbewirtschaftung?',
    answer: 'Dokumentenklassifizierung bezeichnet den Prozess, Immobiliendokumente wie Mietverträge, Rechnungen, Mietzinsanpassungen oder Korrespondenz automatisch zu erkennen und in die korrekte Ablagestruktur einzuordnen. In der Schweiz orientieren sich viele Bewirtschafter am SVIT-Leitfaden "Datenhandling beim Mandatswechsel", der Dokumententypen wie Eigentümerdossier (ED), Liegenschaftsdossier (LD), Mieterdossier (MD) und Hauswartdossier (HD) definiert.',
  },
  {
    question: 'Wie viele Dokumente kann Flatscouts pro Tag verarbeiten?',
    answer: 'Flatscouts ist für grosse Volumen ausgelegt. In typischen Mandatsübergabe-Szenarien verarbeiten wir problemlos mehrere tausend Dokumente pro Tag. Die genaue Kapazität hängt von der Dokumentenkomplexität ab – Monster-PDFs mit 200+ Seiten benötigen mehr Verarbeitungszeit als einzelne Mietverträge. Kontaktieren Sie uns für eine Einschätzung zu Ihrem spezifischen Projekt.',
  },
  {
    question: 'Funktioniert Flatscouts mit meinem ERP (z.B. Garaio REM, Rimo, AbaImmo)?',
    answer: 'Flatscouts ist darauf ausgelegt, mit den gängigen ERP-Systemen der Schweizer Immobilienbranche zusammenzuarbeiten – darunter Garaio REM, Rimo R5, ImmoTop, AbaImmo und weitere. Die klassifizierten Dokumente können mit strukturierten Metadaten exportiert und in Ihr bestehendes System importiert werden. Wir arbeiten kontinuierlich an direkten Integrationen.',
  },
  {
    question: 'Was passiert bei einer Mandatsübergabe mit 2500+ Wohnungen?',
    answer: 'Bei grossen Mandatsübergaben (z.B. 2500 Wohnungen mit 350 GB an PDFs) übernimmt Flatscouts die schwere Arbeit: Monster-PDFs werden automatisch aufgeteilt, alle Dokumente klassifiziert und gemäss SVIT-Standard strukturiert. Was manuell Monate dauern würde, reduziert sich auf wenige Wochen – bei deutlich höherer Konsistenz und niedrigerer Fehlerquote.',
  },
  {
    question: 'Wie lange dauert die Klassifizierung eines Monster-PDFs?',
    answer: 'Ein typisches Monster-PDF mit 100-200 Seiten wird in wenigen Minuten vollständig analysiert, in Einzeldokumente getrennt und klassifiziert. Im Vergleich: Die manuelle Bearbeitung desselben PDFs dauert erfahrungsgemäss 2-4 Stunden. Bei sehr komplexen Dokumenten oder schlechter Scanqualität kann die Verarbeitung etwas länger dauern.',
  },
  {
    question: 'Was ist ein "Monster-PDF" und wie hilft Flatscouts dabei?',
    answer: '"Monster-PDFs" sind in der Branche gefürchtet: Bei Mandatsübergaben werden oft alle Dokumente einer Liegenschaft in ein einziges PDF gescannt – teilweise mit 100-300 Seiten ohne Struktur. Flatscouts analysiert solche PDFs, erkennt die einzelnen Dokumententypen und trennt sie in separate, korrekt benannte Dateien auf – in Minuten statt Stunden.',
  },
  {
    question: 'Was kostet die Dokumentenklassifizierung mit Flatscouts?',
    answer: 'Unser On-Demand Service startet ab CHF 0.10 pro Dokument – ohne Fixkosten oder Setup-Gebühren. Ideal für kleine Bewirtschafter oder einzelne Mandatsübergaben. Für grosse Bewirtschaftungen bieten wir den Enterprise Integration Service mit individueller Preisgestaltung – ROI typischerweise unter 6 Monaten.',
  },
  {
    question: 'Welche Dokumententypen erkennt Flatscouts?',
    answer: 'Flatscouts erkennt typische Immobiliendokumente: Mietverträge, Mietvertragsnachträge, Mietzinsanpassungen, Kündigungen, Rechnungen, Nebenkostenabrechnungen, Bewerbungsunterlagen, Korrespondenz, Hauswartverträge, Serviceverträge und mehr. Die Dokumente werden in vier Hauptkategorien strukturiert: Eigentümerdossier (ED), Liegenschaftsdossier (LD), Mieterdossier (MD) und Hauswartdossier (HD).',
  },
  {
    question: 'Was ist der SVIT-Standard für Mandatswechsel?',
    answer: 'Der SVIT Schweiz (Schweizerischer Verband der Immobilienwirtschaft) hat über das SVIT Futureboard einen Leitfaden für das "Datenhandling beim Mandatswechsel" erarbeitet. Dieser definiert einen Branchenstandard für Struktur, Benennung und Übergabe von digitalen Dokumenten. Flatscouts orientiert sich an diesem Standard.',
  },
  {
    question: 'Was ist ein Konfidenzwert?',
    answer: 'Der Konfidenzwert zeigt an, wie sicher die KI bei einer Klassifizierung ist. Bei hohem Wert (z.B. über 90%) kann das Dokument automatisch verarbeitet werden. Bei niedrigerem Wert prüfen Sie kurz – und das System lernt aus Ihrer Korrektur.',
  },
  {
    question: 'Kann Flatscouts mit meinem DMS oder ERP verbunden werden?',
    answer: 'Wir arbeiten an Anbindungen für gängige Systeme der Schweizer Immobilienbranche. Aktuell können klassifizierte Dokumente als strukturierte Ausgabe mit Metadaten exportiert und in Ihr System importiert werden. Kontaktieren Sie uns für Details zu Ihrem Setup.',
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer: 'Datensicherheit hat höchste Priorität. Alle Dokumente werden verschlüsselt übertragen und verarbeitet. Die Verarbeitung erfolgt in der Schweiz. Wir erfüllen das Schweizer Datenschutzgesetz (DSG).',
  },
]

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number>(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <h2 className={`${styles.headline} ${isVisible ? styles.animateIn : ''}`}>
          Häufig gestellte Fragen
        </h2>

        <div
          className={styles.faqContainer}
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                className={styles.faqSummary}
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                itemProp="name"
              >
                {item.question}
                <span className={styles.faqIcon}>{openIndex === index ? '−' : '+'}</span>
              </button>
              <div
                className={styles.faqContent}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
