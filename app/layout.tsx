import type { Metadata } from 'next'
import { Ubuntu, Inter } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const inter = Inter({
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Automatische Dokumentenklassifizierung Immobilien Schweiz | KI-Ablage für Bewirtschafter',
  description: '350 GB Dokumente bei Mandatswechsel? Flatscouts klassifiziert automatisch – über 90% Erkennungsrate. Ab CHF 0.10/Dokument. SVIT-konform. Jetzt Demo sehen.',
  keywords: 'Dokumentenklassifizierung Immobilien, KI Dokumentenmanagement Immobilien Schweiz, Mandatswechsel Immobilien digitalisieren, Automatische Dokumentenablage Bewirtschaftung, SVIT Datenhandling Mandatswechsel, Monster-PDF',
  authors: [{ name: 'Flatscouts' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.flatscouts.ch/',
  },
  openGraph: {
    title: 'Automatische Dokumentenklassifizierung für Immobilienbewirtschafter',
    description: 'Der digitale Ablagesklave: Monster-PDFs automatisch strukturieren, Dokumente klassifizieren. SVIT-konform. Ab CHF 0.10/Dokument.',
    type: 'website',
    url: 'https://www.flatscouts.ch/',
    locale: 'de_CH',
    siteName: 'Flatscouts',
    images: [
      {
        url: 'https://www.flatscouts.ch/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flatscouts - Automatische Dokumentenklassifizierung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatische Dokumentenklassifizierung für Immobilienbewirtschafter',
    description: 'Monster-PDFs automatisch strukturieren. SVIT-konforme Klassifizierung. Ab CHF 0.10/Dokument.',
    images: ['https://www.flatscouts.ch/og-image.png'],
  },
  other: {
    'geo.region': 'CH',
    'geo.placename': 'Zürich',
    'content-language': 'de-CH',
  },
}

// Schema.org JSON-LD Structured Data
const jsonLdSoftware = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Flatscouts',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'KI-gestützter Ablagesklave für Schweizer Immobilienbewirtschafter. Automatische Erkennung und Kategorisierung von Mietverträgen, Rechnungen, Korrespondenz. Monster-PDFs werden zu strukturierten Dokumenten.',
  offers: [
    {
      '@type': 'Offer',
      name: 'On-Demand Classification Service',
      price: '0.10',
      priceCurrency: 'CHF',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '0.10',
        priceCurrency: 'CHF',
        unitText: 'pro Dokument',
      },
      description: 'Pay-per-Use Dokumentenklassifizierung für kleine Bewirtschafter. Kein Setup, keine Fixkosten.',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise Integration Service',
      description: 'KI-Lösung für grosse Immobilienfirmen. ROI meist unter 6 Monaten.',
    },
  ],
  featureList: [
    'Automatische Dokumentenerkennung',
    'Monster-PDF Splitting',
    'KI-Kategorisierung nach SVIT-Standard',
    'Konfidenzwert für jede Klassifizierung',
    'Semantische Suche',
    'Digitaler Zwilling',
    'Anomalie-Erkennung',
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Flatscouts',
    url: 'https://www.flatscouts.ch',
  },
}

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Flatscouts',
  url: 'https://www.flatscouts.ch',
  logo: 'https://www.flatscouts.ch/logo.png',
  description: 'KI-gestützte Dokumentenklassifizierung für die Schweizer Immobilienbewirtschaftung',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CH',
  },
}

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Dokumentenklassifizierung in der Immobilienbewirtschaftung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dokumentenklassifizierung bezeichnet den Prozess, Immobiliendokumente wie Mietverträge, Rechnungen, Mietzinsanpassungen oder Korrespondenz automatisch zu erkennen und in die korrekte Ablagestruktur einzuordnen. In der Schweiz orientieren sich viele Bewirtschafter am SVIT-Leitfaden "Datenhandling beim Mandatswechsel", der Dokumententypen wie Eigentümerdossier (ED), Liegenschaftsdossier (LD), Mieterdossier (MD) und Hauswartdossier (HD) definiert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie viele Dokumente kann Flatscouts pro Tag verarbeiten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flatscouts ist für grosse Volumen ausgelegt. In typischen Mandatsübergabe-Szenarien verarbeiten wir problemlos mehrere tausend Dokumente pro Tag. Die genaue Kapazität hängt von der Dokumentenkomplexität ab – Monster-PDFs mit 200+ Seiten benötigen mehr Verarbeitungszeit als einzelne Mietverträge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funktioniert Flatscouts mit meinem ERP (z.B. Garaio REM, Rimo, AbaImmo)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flatscouts ist darauf ausgelegt, mit den gängigen ERP-Systemen der Schweizer Immobilienbranche zusammenzuarbeiten – darunter Garaio REM, Rimo R5, ImmoTop, AbaImmo und weitere. Die klassifizierten Dokumente können mit strukturierten Metadaten exportiert und in Ihr bestehendes System importiert werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was passiert bei einer Mandatsübergabe mit 2500+ Wohnungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei grossen Mandatsübergaben (z.B. 2500 Wohnungen mit 350 GB an PDFs) übernimmt Flatscouts die schwere Arbeit: Monster-PDFs werden automatisch aufgeteilt, alle Dokumente klassifiziert und gemäss SVIT-Standard strukturiert. Was manuell Monate dauern würde, reduziert sich auf wenige Wochen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Klassifizierung eines Monster-PDFs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein typisches Monster-PDF mit 100-200 Seiten wird in wenigen Minuten vollständig analysiert, in Einzeldokumente getrennt und klassifiziert. Im Vergleich: Die manuelle Bearbeitung desselben PDFs dauert erfahrungsgemäss 2-4 Stunden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist ein "Monster-PDF" und wie hilft Flatscouts dabei?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"Monster-PDFs" sind in der Branche gefürchtet: Bei Mandatsübergaben werden oft alle Dokumente einer Liegenschaft in ein einziges PDF gescannt – teilweise mit 100-300 Seiten ohne Struktur. Flatscouts analysiert solche PDFs, erkennt die einzelnen Dokumententypen und trennt sie in separate, korrekt benannte Dateien auf.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Dokumentenklassifizierung mit Flatscouts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unser On-Demand Service startet ab CHF 0.10 pro Dokument – ohne Fixkosten oder Setup-Gebühren. Für grosse Bewirtschaftungen bieten wir den Enterprise Integration Service mit individueller Preisgestaltung – ROI typischerweise unter 6 Monaten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Dokumententypen erkennt Flatscouts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flatscouts erkennt typische Immobiliendokumente: Mietverträge, Mietvertragsnachträge, Mietzinsanpassungen, Kündigungen, Rechnungen, Nebenkostenabrechnungen, Bewerbungsunterlagen, Korrespondenz, Hauswartverträge, Serviceverträge und mehr.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der SVIT-Standard für Mandatswechsel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der SVIT Schweiz (Schweizerischer Verband der Immobilienwirtschaft) hat über das SVIT Futureboard einen Leitfaden für das "Datenhandling beim Mandatswechsel" erarbeitet. Dieser definiert einen Branchenstandard für Struktur, Benennung und Übergabe von digitalen Dokumenten. Flatscouts orientiert sich an diesem Standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist ein Konfidenzwert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Konfidenzwert zeigt an, wie sicher die KI bei einer Klassifizierung ist. Bei hohem Wert (z.B. über 90%) kann das Dokument automatisch verarbeitet werden. Bei niedrigerem Wert prüfen Sie kurz – und das System lernt aus Ihrer Korrektur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann Flatscouts mit meinem DMS oder ERP verbunden werden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir arbeiten an Anbindungen für gängige Systeme der Schweizer Immobilienbranche. Aktuell können klassifizierte Dokumente als strukturierte Ausgabe mit Metadaten exportiert und in Ihr System importiert werden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie sicher sind meine Daten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Datensicherheit hat höchste Priorität. Alle Dokumente werden verschlüsselt übertragen und verarbeitet. Die Verarbeitung erfolgt in der Schweiz. Wir erfüllen das Schweizer Datenschutzgesetz (DSG).',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="alternate" hrefLang="de-CH" href="https://www.flatscouts.ch/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.flatscouts.ch/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body className={`${ubuntu.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}


