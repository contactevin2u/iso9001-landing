import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'
import WhatsAppLink from '@/components/WhatsAppLink'
import { SITE_LAST_UPDATED } from '@/lib/constants'

const PATH = '/iso-9001-2026-transition'
const URL = `https://isoconsultantmalaysia.com${PATH}`
const TITLE = 'ISO 9001:2026 Transition Malaysia | Consultant Support'
const DESCRIPTION =
  'ISO 9001:2026 was published in September 2026. What changes, the expected transition period to around September 2029, and how we prepare your QMS for the transition audit.'
const WA_TEXT = 'Hi, I would like to discuss the ISO 9001:2026 transition for my company.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ['ISO 9001:2026', 'ISO 9001 2026 transition', 'ISO 9001 2026 changes', 'ISO 9001 new version Malaysia'],
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  alternates: { canonical: URL },
}

const glance = [
  { label: 'Published', value: 'September 2026', note: 'Sixth edition of ISO 9001' },
  { label: 'Transition period', value: 'About three years', note: 'Expected to end around September 2029' },
  { label: 'Your ISO 9001:2015 certificate', value: 'Stays valid', note: 'Until the transition period ends' },
  { label: 'First ISO 9001:2026 audits', value: 'From around mid-2027', note: 'Once certification bodies are accredited' },
]

const changes = [
  {
    clause: 'Clauses 5 and 7',
    title: 'Quality culture and ethical behaviour',
    text: 'Top management is expected to actively promote a quality culture, integrity and ethical behaviour, and staff awareness now covers them. Auditors will look for evidence of this in leadership activity, not only in the quality policy.',
  },
  {
    clause: 'Clause 4',
    title: 'Climate change in your context',
    text: 'You determine whether climate change is a relevant issue for your quality management system, and whether interested parties have climate-related requirements. This was introduced by the 2024 amendment to ISO 9001:2015 and is carried into the 2026 edition.',
  },
  {
    clause: 'Clause 6.1',
    title: 'Risks and opportunities, separated',
    text: 'Clause 6.1 is split into sub-clauses, so risks and opportunities are addressed separately rather than as one combined list. Most risk registers need restructuring rather than replacing.',
  },
  {
    clause: 'Structure',
    title: 'Updated Harmonized Structure',
    text: 'The standard follows the latest common structure for ISO management system standards. It keeps the same 10 clauses, which also keeps integration with ISO 14001 and ISO 45001 straightforward.',
  },
]

const steps = [
  {
    title: 'Transition gap assessment',
    text: 'We review your current ISO 9001:2015 system against the 2026 changes and list exactly what needs updating.',
  },
  {
    title: 'Update your documentation',
    text: 'Context analysis including climate change, a restructured risk and opportunity register, leadership and quality culture records, and updated awareness material.',
  },
  {
    title: 'Brief your managers and internal auditors',
    text: 'Short, practical sessions so the people who run and audit the system understand what changed and what auditors will ask.',
  },
  {
    title: 'Internal audit and management review',
    text: 'An internal audit against ISO 9001:2026 and a management review, so any gaps are closed before your certification body visits.',
  },
  {
    title: 'Transition audit support',
    text: 'We help you plan the transition with your certification body and support you during the audit and any follow-up on findings.',
  },
]

const faqs = [
  {
    question: 'When do I need to transition to ISO 9001:2026?',
    answer:
      'Within the transition period, which is expected to run for about three years from publication, to around September 2029. Your certification body will confirm the exact deadline and when it can audit against the new version.',
  },
  {
    question: 'Is my ISO 9001:2015 certificate still valid?',
    answer:
      'Yes. ISO 9001:2015 certificates remain valid during the transition period. A certificate that has not been transitioned to ISO 9001:2026 by the end of the transition period is expected to lose its validity.',
  },
  {
    question: 'Can I still get certified to ISO 9001:2015?',
    answer:
      'Yes. Certification bodies must first be accredited to audit ISO 9001:2026, so certification today is still to ISO 9001:2015, and 2026 certificates are expected from around mid-2027. If a tender or customer needs ISO 9001 now, certify to 2015 with a system built to carry over to 2026.',
  },
  {
    question: 'Do I need a separate audit for the transition?',
    answer:
      'Not always. The transition can often be combined with a scheduled surveillance or recertification audit, sometimes with extra audit time. Your certification body decides how it handles your transition, so ask it early.',
  },
  {
    question: 'Does AA Alive issue the ISO 9001:2026 certificate?',
    answer:
      'No. Certificates are issued by an accredited certification body after its audit. As consultants, we prepare your quality management system and your team for that audit.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

const ctaClass =
  'inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors text-base sm:text-lg'

export default function ISO9001TransitionPage() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 9001:2026 Transition', href: PATH },
          ]}
        />

        <section className="pt-10 pb-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-medium text-primary-700 mb-5">ISO 9001:2026 was published in September 2026</p>
              <h1 className="text-4xl sm:text-5xl leading-[1.08] mb-6 max-w-[20ch] text-balance">
                ISO 9001:2026 transition for Malaysian companies
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-[36rem] text-pretty">
                If your company holds an ISO 9001:2015 certificate, you will need to move to the new version within
                the transition period. We update your quality management system for the 2026 changes and prepare you
                for the transition audit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <WhatsAppLink text={WA_TEXT} className={ctaClass}>
                  Discuss your transition
                </WhatsAppLink>
                <a
                  href="#changes"
                  className="inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-4 border border-gray-300 text-gray-900 font-semibold rounded-md hover:border-primary-600 hover:text-primary-700 transition-colors text-base sm:text-lg"
                >
                  What changes
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Free initial consultation by WhatsApp, phone or video. Last updated {SITE_LAST_UPDATED}.
              </p>
            </div>

            <aside className="relative" aria-labelledby="glance-heading">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-primary-50 border border-primary-100" />
              <div className="relative bg-white border border-gray-300 rounded-md shadow-[0_1px_2px_rgba(14,34,56,0.06),0_12px_32px_-12px_rgba(14,34,56,0.18)]">
                <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-gray-200">
                  <h2 id="glance-heading" className="font-serif text-lg font-semibold text-ink">
                    Transition at a glance
                  </h2>
                </div>
                <dl className="divide-y divide-gray-100">
                  {glance.map((item) => (
                    <div key={item.label} className="px-5 sm:px-6 py-3.5">
                      <dt className="text-xs text-gray-500">{item.label}</dt>
                      <dd className="font-serif text-xl font-semibold text-ink mt-0.5">{item.value}</dd>
                      <dd className="text-sm text-gray-600">{item.note}</dd>
                    </div>
                  ))}
                </dl>
                <p className="px-5 sm:px-6 py-3 text-xs text-gray-500 border-t border-gray-200 bg-gray-50 rounded-b-md">
                  Confirm your exact deadline with your certification body.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section id="changes" className="py-20 px-4 sm:px-6 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl mb-4">What changes in ISO 9001:2026</h2>
              <p className="text-lg text-gray-600">
                The 10-clause structure stays the same, so a well-maintained ISO 9001:2015 system carries over. The
                transition is an update to your existing system, focused on these areas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {changes.map((change) => (
                <div key={change.title} className="bg-white border border-gray-200 rounded-lg p-6">
                  <p className="text-sm font-semibold text-primary-700 mb-2">{change.clause}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{change.title}</h3>
                  <p className="text-gray-600">{change.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl mb-12 max-w-3xl">Who needs to act</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-2 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Already certified to ISO 9001:2015</h3>
                <p className="text-gray-600">
                  Plan the transition with your certification body now. The transition can often be combined with a
                  scheduled surveillance or recertification audit, and updating your system early leaves time to
                  close any gaps before the audit.
                </p>
              </div>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Not certified yet</h3>
                <p className="text-gray-600">
                  If a tender or customer needs ISO 9001 now, certify to ISO 9001:2015. We build your system so it
                  carries over to 2026.{' '}
                  <a href="/iso-9001-certification-malaysia" className="font-medium text-primary-700 underline underline-offset-4 hover:text-primary-800">
                    ISO 9001 certification in Malaysia
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto [&>*]:max-w-3xl">
            <h2 className="text-3xl sm:text-4xl mb-4">How we prepare you for the transition</h2>
            <p className="text-lg text-gray-600 mb-12">
              A focused update to the system you already run. Transition support is quoted after we review your current
              system.
            </p>
            <ol className="space-y-8">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-6 items-start">
                  <span className="flex-shrink-0 w-11 h-11 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <div className="pb-8 border-b border-gray-200 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <WhatsAppLink text={WA_TEXT} className={ctaClass}>
                Plan your transition with us
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto [&>*]:max-w-3xl">
            <h2 className="text-3xl sm:text-4xl mb-10">ISO 9001:2026 transition questions</h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-sm text-gray-500">
              Sources:{' '}
              <a href="https://www.iso.org/standard/88464.html" rel="noopener" className="underline underline-offset-4 hover:text-gray-700">
                ISO 9001:2026 (ISO)
              </a>
              ,{' '}
              <a href="https://www.iso.org/quality-management/iso-9001-2026" rel="noopener" className="underline underline-offset-4 hover:text-gray-700">
                ISO 9001:2026: what businesses need to know (ISO)
              </a>
              . Transition dates follow certification body guidance and may be confirmed by accreditation bodies.
            </p>
          </div>
        </section>

        <RelatedGuides current={PATH} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
