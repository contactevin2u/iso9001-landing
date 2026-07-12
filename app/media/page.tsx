import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Media Coverage',
  description:
    'National media appearances by Evin Lim, founder of AA Alive Sdn Bhd (ISO 9001 Malaysia): BERNAMA TV panel, RTM news commentary and the Superbrands Malaysia CEO interview.',
  openGraph: {
    title: 'Media Coverage | ISO 9001 Malaysia',
    description:
      'National media appearances by Evin Lim, founder of AA Alive Sdn Bhd: BERNAMA TV, RTM and Superbrands Malaysia.',
    url: 'https://isoconsultantmalaysia.com/media',
    type: 'website',
  },
  alternates: {
    canonical: 'https://isoconsultantmalaysia.com/media',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://isoconsultantmalaysia.com/#person',
  name: 'Evin Lim',
  jobTitle: 'Founder & Managing Director',
  url: 'https://isoconsultantmalaysia.com/media',
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
        'Panel discussion on the Malaysian pharmaceutical and medical device industry featuring Evin Lim, founder of AA Alive Sdn Bhd.',
      thumbnailUrl: 'https://i.ytimg.com/vi/p0rcj7kaqpQ/hq720.jpg',
      uploadDate: '2026-07-03',
      url: 'https://www.youtube.com/watch?v=p0rcj7kaqpQ',
      publisher: { '@type': 'Organization', name: 'BERNAMA TV' },
    },
    {
      '@type': 'NewsArticle',
      headline: 'Krisis tenaga global, peraturan ketat beri kesan kos perubatan',
      datePublished: '2026-07-04',
      url: 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/krisis-tenaga-global-peraturan-ketat-beri-kesan-kos-perubatan/',
      publisher: { '@type': 'Organization', name: 'RTM' },
    },
    {
      '@type': 'VideoObject',
      name: 'Superbrands Malaysia CEO Interviews 2025 — Evin Lim',
      thumbnailUrl: 'https://i.ytimg.com/vi/4Y7hNFsM3Jk/hqdefault.jpg',
      uploadDate: '2025-12-09',
      url: 'https://www.youtube.com/watch?v=4Y7hNFsM3Jk',
      publisher: { '@type': 'Organization', name: 'Superbrands Limited' },
    },
  ],
}

export default function MediaPage() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Header />
      <main id="main-content" className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Media Coverage', href: '/media' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Media coverage</h1>
            <p className="text-xl text-gray-600 mb-12">
              Our founder,{' '}
              <Link href="/about" className="text-primary-600 hover:text-primary-700 underline">
                Evin Lim
              </Link>
              , is regularly consulted on Malaysian industry and compliance topics. Selected
              national media appearances:
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              BERNAMA TV — Ruang Bicara: Aspirasi Ekonomi (3 July 2026)
            </h2>
            <p className="text-gray-600 mb-6">
              Panel discussion on the direction of Malaysia&apos;s pharmaceutical and medical
              device industry, with Evin Lim appearing as an industry consultant.
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 mb-12">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/p0rcj7kaqpQ"
                title="Ruang Bicara Aspirasi Ekonomi — BERNAMA TV (3 Julai 2026)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              RTM — news commentary (July 2026)
            </h2>
            <p className="text-gray-600 mb-12">
              <em>&ldquo;Krisis tenaga global, peraturan ketat beri kesan kos perubatan&rdquo;</em>{' '}
              — RTM news coverage featuring Evin Lim on regulation and medical costs.{' '}
              <a
                href="https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/krisis-tenaga-global-peraturan-ketat-beri-kesan-kos-perubatan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Read the article on berita.rtm.gov.my
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Superbrands Malaysia — CEO Interviews 2025
            </h2>
            <p className="text-gray-600 mb-6">
              Superbrands Malaysia CEO interview series featuring Evin Lim.
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 mb-8">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/4Y7hNFsM3Jk"
                title="Superbrands Malaysia CEO Interviews 2025 — Evin Lim"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
