import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatIsISO from '@/components/WhatIsISO'
import Benefits from '@/components/Benefits'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsISO />
        <Benefits />
        <Process />
        <Pricing />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
