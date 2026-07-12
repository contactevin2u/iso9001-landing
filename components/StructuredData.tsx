import { testimonials } from '@/components/Testimonials'

export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://isoconsultantmalaysia.com/#organization',
        name: 'AA Alive Sdn Bhd',
        alternateName: 'ISO 9001 Malaysia',
        url: 'https://isoconsultantmalaysia.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://isoconsultantmalaysia.com/logo.png',
          width: 512,
          height: 512,
        },
        description: 'Expert ISO 9001 quality management system certification consultants in Malaysia. Trusted by 500+ businesses since 2016.',
        foundingDate: '2016-10-06',
        founder: {
          '@id': 'https://isoconsultantmalaysia.com/#person',
        },
        award: 'Superbrands Malaysia (2025)',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+60102062070',
          contactType: 'customer service',
          areaServed: 'MY',
          availableLanguage: ['English', 'Malay', 'Chinese'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Lot 1, Jalan Perusahaan 4, Pusat Industri Amari, Kawasan Industri Batu Caves',
          addressLocality: 'Batu Caves',
          addressRegion: 'Selangor',
          postalCode: '68100',
          addressCountry: 'MY',
        },
        sameAs: [
          'https://www.linkedin.com/company/aa-alive',
          'https://my.linkedin.com/in/evin-lim-362a84258',
        ],
      },
      {
        '@type': 'Person',
        '@id': 'https://isoconsultantmalaysia.com/#person',
        name: 'Evin Lim',
        jobTitle: 'Founder & Managing Director',
        description: 'Founder and Managing Director of AA Alive Sdn Bhd (est. 2016), leading ISO 9001, ISO 14001 and ISO 45001 certification consulting for Malaysian businesses.',
        worksFor: {
          '@id': 'https://isoconsultantmalaysia.com/#organization',
        },
        url: 'https://isoconsultantmalaysia.com/about',
        sameAs: [
          'https://my.linkedin.com/in/evin-lim-362a84258',
          'https://www.linkedin.com/company/aa-alive',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://isoconsultantmalaysia.com/#business',
        name: 'AA Alive Sdn Bhd - ISO 9001 Malaysia',
        image: 'https://isoconsultantmalaysia.com/opengraph-image',
        url: 'https://isoconsultantmalaysia.com',
        telephone: '+60102062070',
        email: 'contact@evin2u.com',
        founder: {
          '@id': 'https://isoconsultantmalaysia.com/#person',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Lot 1, Jalan Perusahaan 4, Pusat Industri Amari, Kawasan Industri Batu Caves',
          addressLocality: 'Batu Caves',
          addressRegion: 'Selangor',
          postalCode: '68100',
          addressCountry: 'MY',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 3.2374,
          longitude: 101.6831,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        priceRange: 'RM13,000 - RM50,000',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '156',
          bestRating: '5',
          worstRating: '1',
        },
        review: testimonials.map((testimonial) => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: testimonial.name,
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: testimonial.rating,
            bestRating: 5,
          },
          reviewBody: testimonial.content,
        })),
      },
      {
        '@type': 'Service',
        '@id': 'https://isoconsultantmalaysia.com/#service',
        name: 'ISO 9001 Certification Consulting Malaysia',
        provider: {
          '@id': 'https://isoconsultantmalaysia.com/#organization',
        },
        serviceType: 'ISO 9001 Certification Consulting',
        description: 'Complete ISO 9001:2015 quality management system certification consulting services including gap analysis, documentation, implementation, internal audit, and certification audit preparation.',
        areaServed: {
          '@type': 'Country',
          name: 'Malaysia',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'ISO 9001 Certification Packages 2026',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Complete ISO 9001 Certification Package',
              },
              price: '13000',
              priceCurrency: 'MYR',
              priceValidUntil: '2026-12-31',
              availability: 'https://schema.org/InStock',
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://isoconsultantmalaysia.com/#website',
        url: 'https://isoconsultantmalaysia.com',
        name: 'ISO 9001 Malaysia - AA Alive Sdn Bhd',
        publisher: {
          '@id': 'https://isoconsultantmalaysia.com/#organization',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
