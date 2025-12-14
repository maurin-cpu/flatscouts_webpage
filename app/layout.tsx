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
  title: 'Flatscouts - KI-Tool für Immobilien-Dokumentenmanagement',
  description: 'Dokumenten-Chaos beenden durch vollständige Automatisierung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={`${ubuntu.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}


