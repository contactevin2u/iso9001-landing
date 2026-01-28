import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhatIsISO from '@/components/WhatIsISO'
import Benefits from '@/components/Benefits'
import Process from '@/components/Process'
import WhyChooseUs from '@/components/WhyChooseUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIsISO />
        <Benefits />
        <Process />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
