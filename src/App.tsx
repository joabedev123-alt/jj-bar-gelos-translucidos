import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { MobileCtaBar } from './components/layout/MobileCtaBar'
import { About } from './components/sections/About'
import { Curriculum } from './components/sections/Curriculum'
import { Faq } from './components/sections/Faq'
import { FinalCta } from './components/sections/FinalCta'
import { Gallery } from './components/sections/Gallery'
import { Hero } from './components/sections/Hero'
import { Instructor } from './components/sections/Instructor'
import { Offer } from './components/sections/Offer'
import { PainPoints } from './components/sections/PainPoints'
import { Testimonials } from './components/sections/Testimonials'

export default function App() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <PainPoints />
      <Gallery />
      <Curriculum />
      <About />
      <Instructor />
      <Testimonials />
      <Faq />
      <Offer />
      <FinalCta />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
