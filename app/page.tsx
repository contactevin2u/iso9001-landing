import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import WhatIsISO from '@/components/WhatIsISO'
import CaseStudy from '@/components/CaseStudy'
import Benefits from '@/components/Benefits'
import Process from '@/components/Process'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Industries from '@/components/Industries'
import Pricing from '@/components/Pricing'
import WhyChooseUs from '@/components/WhyChooseUs'
import Founder from '@/components/Founder'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
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
        <PainPoints />
        <CaseStudy />
        <WhatIsISO />
        <Benefits />
        <WhatsAppCTA />
        <Process />
        <Industries />
        <Pricing />
        <WhyChooseUs />
        <Founder />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
