'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Breadcrumb.module.css'

interface BreadcrumbItem {
  label: string
  href?: string
}

// Mapping für lesbare Labels
const pathLabels: Record<string, string> = {
  'wissen': 'Wissen',
  'blog': 'Blog',
  'glossar': 'Glossar',
  'loesung': 'Lösungen',
  'mandatswechsel': 'Mandatswechsel',
  'laufender-betrieb': 'Laufender Betrieb',
  'impressum': 'Impressum',
  'datenschutz': 'Datenschutz',
  'mandatswechsel-kosten': 'Mandatswechsel Kosten',
  'monster-pdf-aufteilen': 'Monster-PDF aufteilen',
  'dokumentenklassifizierung-guide': 'Dokumentenklassifizierung Guide',
  'dokumentenprobleme-bewirtschafter': '5 Dokumentenprobleme',
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ customItems, className }: BreadcrumbProps) {
  const pathname = usePathname()
  
  // Generate breadcrumb items from pathname
  const generateItems = (): BreadcrumbItem[] => {
    if (customItems) return customItems
    
    const segments = pathname.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
    
    let currentPath = ''
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1
      const label = pathLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
      
      items.push({
        label,
        href: isLast ? undefined : currentPath,
      })
    })
    
    return items
  }
  
  const items = generateItems()
  
  // Schema.org BreadcrumbList
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://www.flatscouts.ch${item.href}` : undefined,
    })),
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <nav 
        className={`${styles.breadcrumb} ${className || ''}`} 
        aria-label="Breadcrumb"
      >
        <ol className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.item}>
              {item.href ? (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.current}>{item.label}</span>
              )}
              {index < items.length - 1 && (
                <span className={styles.separator} aria-hidden="true">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
