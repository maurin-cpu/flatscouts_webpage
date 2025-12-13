import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import ProofProcess from './components/ProofProcess'
import Team from './components/Team'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <ProblemSolution />
      <ProofProcess />
      <Team />
      <CTA />
    </main>
  )
}

