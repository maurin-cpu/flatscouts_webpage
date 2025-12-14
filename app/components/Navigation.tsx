'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Flatscouts Logo" 
            width={40} 
            height={40}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>Flatscouts</span>
        </div>
        <div className={styles.links}>
          <a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team') }}>Team</a>
          <a href="#cta" onClick={(e) => { e.preventDefault(); scrollToSection('cta') }}>Kontakt</a>
          <button 
            className={styles.ctaButton}
            onClick={(e) => { e.preventDefault(); scrollToSection('cta') }}
          >
            Demo anfordern
          </button>
        </div>
      </div>
    </nav>
  )
}

