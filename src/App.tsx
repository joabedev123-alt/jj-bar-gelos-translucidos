import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import StickyMobileCta from './components/layout/StickyMobileCta'

import Hero from './components/sections/Hero'
import VisualComparison from './components/sections/VisualComparison'
import WhatIsClearIce from './components/sections/WhatIsClearIce'
import WhyCloudyIce from './components/sections/WhyCloudyIce'
import ProcessFlow from './components/sections/ProcessFlow'
import PainSection from './components/sections/PainSection'
import Curriculum from './components/sections/Curriculum'
import ShapesGallery from './components/sections/ShapesGallery'
import CocktailsDesign from './components/sections/CocktailsDesign'
import Instructor from './components/sections/Instructor'
import Applications from './components/sections/Applications'
import DetailPerception from './components/sections/DetailPerception'
import PhotoGallery from './components/sections/PhotoGallery'
import TargetAudience from './components/sections/TargetAudience'
import PricingSection from './components/sections/PricingSection'
import HowItWorksSection from './components/sections/HowItWorksSection'
import FaqSection from './components/sections/FaqSection'
import FinalCtaSection from './components/sections/FinalCtaSection'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#111111] pb-20 lg:pb-0 font-sans selection:bg-[#D4AF37]/30 selection:text-[#111111]">
      <TopBar />
      <Navbar />

      <main>
        <Hero />
        <VisualComparison />
        <WhatIsClearIce />
        <WhyCloudyIce />
        <ProcessFlow />
        <PainSection />
        <Curriculum />
        <ShapesGallery />
        <CocktailsDesign />
        <Instructor />
        <Applications />
        <DetailPerception />
        <PhotoGallery />
        <TargetAudience />
        <PricingSection />
        <HowItWorksSection />
        <FaqSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  )
}

export default App
