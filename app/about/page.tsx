import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import WhatsAppLink from '@/components/WhatsAppLink'

export const metadata: Metadata = {
  title: 'About Us — AA Alive Sdn Bhd',
  description:
    'ISO 9001 Malaysia is the ISO consulting service of AA Alive Sdn Bhd (1204108-D), founded in 2016 by Evin Lim. Quality management system consulting for Malaysian businesses.',
  openGraph: {
    title: 'About Us — AA Alive Sdn Bhd | ISO 9001 Malaysia',
    description:
      'ISO 9001 Malaysia is the ISO consulting service of AA Alive Sdn Bhd (1204108-D), founded in 2016 by Evin Lim.',
    url: 'https://isoconsultantmalaysia.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://isoconsultantmalaysia.com/about',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://isoconsultantmalaysia.com/#person',
  name: 'Evin Lim',
  jobTitle: 'Founder & Managing Director',
  description:
    'Founder and Managing Director of AA Alive Sdn Bhd (est. 2016), leading ISO 9001, ISO 14001 and ISO 45001 certification consulting for Malaysian businesses.',
  url: 'https://isoconsultantmalaysia.com/about',
  worksFor: {
    '@id': 'https://isoconsultantmalaysia.com/#organization',
  },
  sameAs: [
    'https://my.linkedin.com/in/evin-lim-362a84258',
    'https://www.linkedin.com/company/aa-alive',
  ],
  subjectOf: [
    {
      '@type': 'VideoObject',
      name: 'Ruang Bicara: Aspirasi Ekonomi — BERNAMA TV (3 Julai 2026)',
      description:
        'Panel discussion on the direction of the Malaysian pharmaceutical and medical device industry, with Datuk Lau Tiam Kwee (ACCCIM) and Evin Lim, founder of AA Alive Sdn Bhd, as industry consultant.',
      thumbnailUrl: 'https://i.ytimg.com/vi/p0rcj7kaqpQ/hq720.jpg',
      uploadDate: '2026-07-03',
      url: 'https://www.youtube.com/watch?v=p0rcj7kaqpQ',
      embedUrl: 'https://www.youtube.com/embed/p0rcj7kaqpQ',
      publisher: { '@type': 'Organization', name: 'BERNAMA TV' },
    },
    {
      '@type': 'NewsArticle',
      headline: 'Krisis tenaga global, peraturan ketat beri kesan kos perubatan',
      datePublished: '2026-07-04',
      url: 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/krisis-tenaga-global-peraturan-ketat-beri-kesan-kos-perubatan/',
      publisher: { '@type': 'Organization', name: 'Portal Berita RTM' },
    },
    {
      '@type': 'VideoObject',
      name: 'Superbrands Malaysia CEO Interviews 2025 — Evin Lim',
      description:
        'Superbrands Malaysia CEO Interviews 2025 with Evin Lim on the official Superbrands Limited channel. AA Alive Sdn Bhd is a Superbrands Malaysia 2025 (Malaysia’s Choice) award recipient.',
      thumbnailUrl: 'https://i.ytimg.com/vi/4Y7hNFsM3Jk/hqdefault.jpg',
      uploadDate: '2025-12-09',
      url: 'https://www.youtube.com/watch?v=4Y7hNFsM3Jk',
      embedUrl: 'https://www.youtube.com/embed/4Y7hNFsM3Jk',
      publisher: { '@type': 'Organization', name: 'Superbrands Limited' },
    },
  ],
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://isoconsultantmalaysia.com/about#webpage',
  url: 'https://isoconsultantmalaysia.com/about',
  name: 'About ISO 9001 Malaysia — AA Alive Sdn Bhd',
  inLanguage: 'en-MY',
  mainEntity: { '@id': 'https://isoconsultantmalaysia.com/#organization' },
}

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Header />
      <main id="main-content" className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About ISO 9001 Malaysia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ISO 9001 Malaysia is the ISO consulting service of{' '}
              <strong className="text-gray-900">AA Alive Sdn Bhd</strong> (SSM 1204108-D), founded
              in 2016 by <strong className="text-gray-900">Evin Lim</strong>. We help Malaysian
              businesses implement and certify ISO 9001:2015 quality management systems — from gap
              analysis and documentation to staff training, internal audit and certification audit
              preparation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our founder</h2>
            <p className="text-gray-600 mb-4">
              Evin Lim founded AA Alive Sdn Bhd in 2016 and has grown it into a portfolio spanning
              ISO certification consulting, medical device regulatory consulting and medical
              equipment supply. He personally leads client engagements — at AA Alive you work
              directly with the founder, not a junior consultant. His industry commentary has been
              featured in national media:
            </p>
            <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
              <li>
                <strong className="text-gray-900">BERNAMA TV</strong> — panelist,{' '}
                <em>Ruang Bicara: Aspirasi Ekonomi</em>, on the pharmaceutical and medical device
                industry (3 July 2026)
              </li>
              <li>
                <strong className="text-gray-900">RTM</strong> — quoted in Portal Berita RTM on
                regulation and medical costs, alongside <em>Selamat Pagi Malaysia</em> coverage
                (July 2026)
              </li>
              <li>
                <strong className="text-gray-900">Superbrands Malaysia</strong> — CEO Interviews
                2025 on the official Superbrands Limited channel (December 2025)
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              Watch the appearances on our{' '}
              <Link href="/media" className="text-primary-600 hover:text-primary-700 underline">
                media coverage page
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Credentials &amp; recognition
            </h2>
            <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
              <li>AA Alive Sdn Bhd — registered with SSM Malaysia (1204108-D), operating since 2016</li>
              <li>Malaysian businesses certified across manufacturing, construction, IT, healthcare, F&amp;B and logistics</li>
              <li>Superbrands Malaysia 2025 (Malaysia&apos;s Choice) award recipient</li>
              <li>Nationwide service across Malaysia — remote-friendly engagements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What we do</h2>
            <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
              <li>
                <Link href="/iso-9001-certification-malaysia" className="text-primary-600 hover:text-primary-700 underline">
                  ISO 9001 certification consulting
                </Link>{' '}
                — gap analysis to certificate, from RM 13,000
              </li>
              <li>
                <Link href="/quality-management-system-malaysia" className="text-primary-600 hover:text-primary-700 underline">
                  Quality management system implementation
                </Link>
              </li>
              <li>
                Integrated management systems — ISO 9001 with ISO 14001 (via{' '}
                <a href="https://esgiso.com" className="text-primary-600 hover:text-primary-700 underline" rel="noopener">
                  esgiso.com
                </a>
                ) and ISO 45001
              </li>
              <li>
                ISO 13485 &amp; medical device compliance via{' '}
                <a href="https://iso13485.my" className="text-primary-600 hover:text-primary-700 underline" rel="noopener">
                  iso13485.my
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
            <p className="text-gray-600 mb-8">
              AA Alive Sdn Bhd — Lot 1, Jalan Perusahaan 4, Pusat Industri Amari, Kawasan Industri
              Batu Caves, 68100 Batu Caves, Selangor, Malaysia
              <br />
              Phone:{' '}
              <a href="tel:+60102062070" className="text-primary-600 hover:text-primary-700 underline">
                +60 10-206 2070
              </a>{' '}
              · Email:{' '}
              <a href="mailto:contact@evin2u.com" className="text-primary-600 hover:text-primary-700 underline">
                contact@evin2u.com
              </a>
            </p>

            <WhatsAppLink className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              WhatsApp Us for a Free Consultation
            </WhatsAppLink>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
