import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'
import WhatsAppLink from '@/components/WhatsAppLink'

const PATH = '/iso-9001-certification-body-malaysia'
const URL = `https://isoconsultantmalaysia.com${PATH}`
const TITLE = 'ISO 9001 Certification Bodies in Malaysia: How to Choose'
const DESCRIPTION =
  'Who issues ISO 9001 certificates in Malaysia, how to check a certification body is accredited, what the audit cycle looks like, and how to compare quotes.'
const WA_TEXT = 'Hi, I would like help choosing an ISO 9001 certification body.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'ISO 9001 certification body',
    'ISO certification body Malaysia',
    'SIRIM ISO 9001',
    'accredited certification body Malaysia',
    'ISO 9001 audit',
  ],
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  alternates: { canonical: URL },
}

const examples = [
  'SIRIM QAS International',
  'BSI',
  'SGS',
  'TÜV SÜD',
  'Bureau Veritas',
  'Intertek',
  'LRQA',
  'DNV',
]

const cycle = [
  {
    name: 'Stage 1 audit',
    text: 'The auditor reviews your QMS documentation, scope and readiness, and confirms whether you are ready for Stage 2.',
  },
  {
    name: 'Stage 2 audit',
    text: 'The auditor checks on site that the QMS is implemented and effective. Any major nonconformities must be closed before a certification decision.',
  },
  {
    name: 'Certificate issued',
    text: 'After the certification body reviews the audit, it issues a certificate valid for three years.',
  },
  {
    name: 'Surveillance audits',
    text: 'Shorter audits at least once a year in years one and two, to confirm the QMS is still working.',
  },
  {
    name: 'Recertification audit',
    text: 'A full audit before the certificate expires, which starts a new three-year cycle.',
  },
]

const checks = [
  {
    title: 'Accreditation, and its scope',
    text: 'Ask which accreditation body accredits the certification body for ISO 9001, and check that the accreditation scope covers your industry sector. A certificate from an unaccredited body may not be accepted by your customers.',
  },
  {
    title: 'Acceptance by your customers',
    text: 'Read your tender documents and customer supplier requirements. Some ask for a certificate from an accredited certification body, and a few name the accreditation they accept.',
  },
  {
    title: 'What the quote includes',
    text: 'Compare Stage 1 and Stage 2, both surveillance audits, recertification, auditor travel and any certificate or application fees. A low first-year price can hide higher surveillance fees.',
  },
  {
    title: 'Auditor availability and language',
    text: 'Ask about lead time for audit dates, whether auditors work in your state, and whether the audit can be run in English, Bahasa Malaysia or Chinese.',
  },
  {
    title: 'Sector experience',
    text: 'An auditor who knows your sector asks better questions and understands your processes, which makes the audit more useful.',
  },
]

const faqs = [
  {
    q: 'Is SIRIM the only ISO 9001 certification body in Malaysia?',
    a: 'No. SIRIM QAS International is one well-known certification body, but several local and international certification bodies issue ISO 9001 certificates in Malaysia. What matters is that the certification body is accredited for your sector.',
  },
  {
    q: 'Can an ISO consultant issue my ISO 9001 certificate?',
    a: 'No. A consultant helps you build and prepare the QMS. Only a certification body can audit the QMS and issue the certificate. To stay impartial, a certification body must not provide consultancy on the management system it certifies.',
  },
  {
    q: 'How do I check whether an ISO 9001 certificate is accredited?',
    a: 'Check the accreditation mark and certificate number, then verify it with the certification body and its accreditation body. Standards Malaysia is the national accreditation body. Many accredited certificates can also be searched on IAF CertSearch.',
  },
  {
    q: 'How long is an ISO 9001 certificate valid?',
    a: 'Three years, with surveillance audits at least once a year in between. A recertification audit before expiry renews it for another three years.',
  },
  {
    q: 'Are certification body fees included in your consulting fee?',
    a: 'No. Certification body fees are quoted by the certification body and paid directly to it. We can help you request and compare quotes.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function CertificationBodyPage() {
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
            { name: 'ISO 9001 Certification Bodies', href: PATH },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 9001 certification bodies in Malaysia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A certification body is the independent organisation that audits your quality management system and
              issues your ISO 9001 certificate. This guide explains how certification bodies work, how to check
              accreditation, and what to compare before you sign a quote.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Consultant vs certification body</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">ISO consultant</h3>
                <p className="text-gray-600">
                  Helps you run a gap analysis, write the documentation, train your team and prepare for the audit.
                  That is our role.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Certification body</h3>
                <p className="text-gray-600">
                  Audits your QMS against ISO 9001 and decides whether to certify it. It cannot consult on the system
                  it certifies, so the two roles stay separate.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Accreditation: why it matters</h2>
            <p className="text-gray-600 mb-4">
              Accreditation is an independent check that a certification body is competent and impartial. In
              Malaysia, the national accreditation body is Standards Malaysia (Department of Standards Malaysia).
              Certification bodies operating here may also be accredited by other accreditation bodies that are
              members of the International Accreditation Forum (IAF), such as UKAS in the United Kingdom.
            </p>
            <p className="text-gray-600 mb-4">
              Before you choose, ask for the certification body&apos;s accreditation certificate and check that its
              scope covers ISO 9001 for your industry sector. Many accredited certificates can also be looked up on
              IAF CertSearch.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Certification bodies that issue ISO 9001 certificates in Malaysia
            </h2>
            <p className="text-gray-600 mb-4">
              Examples of certification bodies with ISO 9001 activity in Malaysia include:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 list-disc pl-6 text-gray-600 mb-4">
              {examples.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mb-4">
              This list is not complete and is not an endorsement. Accreditation and sector scope differ between
              certification bodies, so check them for your own case.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">The ISO 9001 audit cycle</h2>
            <ol className="space-y-4 mb-6">
              {cycle.map((s, i) => (
                <li key={s.name} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{s.name}</h3>
                    <p className="text-gray-600">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-gray-600 mb-4">
              See the full{' '}
              <a href="/iso-9001-certification-process" className="text-primary-600 hover:underline">
                ISO 9001 certification process
              </a>{' '}
              for the preparation steps before Stage 1.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">How to choose a certification body</h2>
            <div className="space-y-4 mb-6">
              {checks.map((c) => (
                <div key={c.title} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600">{c.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              Certification body fees are separate from consulting fees. See{' '}
              <a href="/iso-9001-cost-malaysia" className="text-primary-600 hover:underline">
                ISO 9001 cost in Malaysia
              </a>{' '}
              for how the two fit together.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Not sure which certification body fits your company?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Tell us your industry, sites and customer requirements, and we will help you compare quotes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppLink
                  text={WA_TEXT}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  WhatsApp us
                </WhatsAppLink>
                <a
                  href="/iso-9001-cost-malaysia"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  See ISO 9001 costs
                </a>
              </div>
            </div>
          </div>
        </section>
        <RelatedGuides current={PATH} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
