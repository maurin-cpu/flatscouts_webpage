import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Process from './components/Process'
import ProofProcess from './components/ProofProcess'
import ServiceModels from './components/ServiceModels'
import FAQ from './components/FAQ'
import BlogTeaser from './components/BlogTeaser'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Process />
      <ProofProcess />
      <ServiceModels />
      <FAQ />
      <BlogTeaser />
      <CTA />
    </main>
  )
}

