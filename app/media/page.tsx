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
              device industry, broadcast 9&ndash;10 pm on 3 July 2026. Evin Lim appeared as an
              industry consultant alongside Datuk Lau Tiam Kwee, representing ACCCIM (the
              Associated Chinese Chambers of Commerce and Industry of Malaysia).
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
              RTM — Selamat Pagi Malaysia &amp; Portal Berita RTM (July 2026)
            </h2>
            <p className="text-gray-600 mb-12">
              Evin Lim was quoted in the Portal Berita RTM article{' '}
              <em>&ldquo;Krisis tenaga global, peraturan ketat beri kesan kos perubatan&rdquo;</em>{' '}
              (published 4 July 2026), in conjunction with RTM&apos;s <em>Selamat Pagi
              Malaysia</em> coverage at Angkasapuri — on how the global energy crisis and
              tighter regulation affect medical equipment costs in Malaysia.{' '}
              <a
                href="https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/krisis-tenaga-global-peraturan-ketat-beri-kesan-kos-perubatan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Read the full article on berita.rtm.gov.my
              </a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Superbrands Malaysia — CEO Interviews 2025
            </h2>
            <p className="text-gray-600 mb-6">
              Evin Lim was interviewed in the <em>Superbrands Malaysia CEO Interviews 2025</em>{' '}
              series (December 2025) on the official Superbrands Limited channel. AA Alive Sdn
              Bhd is a <strong className="text-gray-900">Superbrands Malaysia 2025
              (Malaysia&apos;s Choice)</strong> award recipient.{' '}
              <a
                href="https://www.instagram.com/superbrandsmalaysiaofficial/reel/DSRAd5fCIXl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Watch the Superbrands reel on Instagram
              </a>
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
