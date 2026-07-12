import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import PainPoints from '@/components/PainPoints'
import CaseStudy from '@/components/CaseStudy'
import WhyChooseUs from '@/components/WhyChooseUs'
import Benefits from '@/components/Benefits'
import Industries from '@/components/Industries'
import Process from '@/components/Process'
import Founder from '@/components/Founder'
import WhatIsISO from '@/components/WhatIsISO'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import AnswerBlock from '@/components/AnswerBlock'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

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
        <CaseStudy />
        <WhyChooseUs />
        <Benefits />
        <Industries />
        <Process />
        <Founder />
        <WhatIsISO />
        <Pricing />
        <Testimonials />
        <FAQ />
        <AnswerBlock />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
