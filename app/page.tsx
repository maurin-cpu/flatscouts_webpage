import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import ProofProcess from './components/ProofProcess'
import Architecture from './components/Architecture'
import Team from './components/Team'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProblemSolution />
      <ProofProcess />
      <Architecture />
      <Team />
      <CTA />
    </main>
  )
}

