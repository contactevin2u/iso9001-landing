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
import { CONTENT_LAST_UPDATED, CONTENT_LAST_UPDATED_ISO } from '@/lib/constants'
import { chrome } from '@/lib/i18n/chrome'
import { formatDate, langTag, type Locale } from '@/lib/i18n/config'
import type { HomeDict } from '@/lib/i18n/home-types'

/** The homepage in one language: `/` (en), `/ms` and `/zh`. */
export default function HomePage({ locale, t }: { locale: Locale; t: HomeDict }) {
  const pricingDate = locale === 'en' ? CONTENT_LAST_UPDATED : formatDate(locale, CONTENT_LAST_UPDATED_ISO)

  return (
    // The root layout sets <html lang="en-MY">; translated homepages mark their content here.
    <div lang={locale === 'en' ? undefined : langTag[locale]}>
      <a href="#main-content" className="skip-nav">
        {chrome[locale].skipToContent}
      </a>
      <Header locale={locale} />
      <main id="main-content">
        <Hero t={t.hero} waText={t.whatsappText.hero} />
        <TrustBadges intro={t.trust.intro} />
        <PainPoints t={t.pain} />
        <WhyChooseUs t={t.why} />
        <Benefits t={t.benefits} />
        <Industries t={t.industries} />
        <Process t={t.process} waText={t.whatsappText.process} />
        <Founder t={t.founder} />
        <WhatIsISO t={t.whatIs} />
        <Pricing t={t.pricing} lastUpdated={pricingDate} />
        <FAQ t={t.faq} waText={t.whatsappText.faq} />
        <AnswerBlock t={t.answers} />
        <RelatedGuides heading={t.guidesHeading} />
        <Contact t={t.contact} />
      </main>
      <Footer locale={locale} />
      <FloatingWhatsApp locale={locale} />
    </div>
  )
}
