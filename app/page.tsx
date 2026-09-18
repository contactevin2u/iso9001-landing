import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import PainPoints from '@/components/PainPoints'
import WhyChooseUs from '@/components/WhyChooseUs'
import Benefits from '@/components/Benefits'
import Industries from '@/components/Industries'
import Process from '@/components/Process'
import Founder from '@/components/Founder'
import WhatIsISO from '@/components/WhatIsISO'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import AnswerBlock from '@/components/AnswerBlock'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <PainPoints />
        <WhyChooseUs />
        <Benefits />
        <Industries />
        <Process />
        <Founder />
        <WhatIsISO />
        <Pricing />
        <FAQ />
        <AnswerBlock />
        <RelatedGuides heading="ISO 9001 guides" />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
