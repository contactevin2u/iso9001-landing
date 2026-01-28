import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickContact from '@/components/QuickContact'
import WhatIsISO from '@/components/WhatIsISO'
import Benefits from '@/components/Benefits'
import CTABanner from '@/components/CTABanner'
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
        <QuickContact />
        <WhatIsISO />
        <Benefits />
        <CTABanner
          title="Ready to Improve Your Quality Management?"
          subtitle="Get expert guidance and start your certification journey today."
        />
        <Process />
        <CTABanner
          title="Start Your ISO 9001 Certification Now"
          subtitle="Our consultants are ready to help you every step of the way."
        />
        <Pricing />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
