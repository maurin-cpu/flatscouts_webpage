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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de-CH">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSoftware) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </head>
      <body className={`${ubuntu.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}


