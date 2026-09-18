'use client'

import { getWhatsAppUrlWithBeacon } from '@/lib/beacon'

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean
  }
}

// The clauses a certification body audits (ISO 9001 clauses 4-10).
const clauses = [
  { no: '4', title: 'Context of the organization' },
  { no: '5', title: 'Leadership' },
  { no: '6', title: 'Planning' },
  { no: '7', title: 'Support' },
  { no: '8', title: 'Operation' },
  { no: '9', title: 'Performance evaluation' },
  { no: '10', title: 'Improvement' },
]

const facts = [
  { value: 'Since 2016', label: 'Consulting for Malaysian companies' },
  { value: 'From RM 13,000', label: 'Full consultancy packages' },
  { value: 'Nationwide', label: 'Site visits across Malaysia' },
  { value: 'ISO 9001:2015', label: 'Ready for the 2026 revision' },
]

export default function Hero() {
  const waUrl = 'https://wa.me/60102062070?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20ISO%209001%20certification.'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const taggedUrl = getWhatsAppUrlWithBeacon(waUrl)
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(taggedUrl)
    } else {
      window.open(taggedUrl, '_blank')
    }
  }

  return (
    <section className="pt-32 pb-20 sm:pt-36 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-16 items-center">
        <div>
          <p className="text-sm font-medium text-primary-700 mb-5">
            ISO 9001 consultants in Malaysia since 2016
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] mb-6 max-w-[16ch]">
            ISO 9001 certification for Malaysian businesses
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-[34rem]">
            We build your quality management system, write the documentation, train your team and
            prepare you for the certification body audit. Every project is led by founder Evin Lim.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href={waUrl}
              onClick={handleClick}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors text-base sm:text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get a free consultation
            </a>
            <a
              href="/#process"
              className="inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-4 border border-gray-300 text-gray-900 font-semibold rounded-md hover:border-primary-600 hover:text-primary-700 transition-colors text-base sm:text-lg"
            >
              See how it works
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-12">
            Free initial consultation. Site visits anywhere in Malaysia.
          </p>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gray-200 pt-6 max-w-xl">
            {facts.map((fact) => (
              <div key={fact.value}>
                <dt className="font-serif text-xl font-semibold text-ink">{fact.value}</dt>
                <dd className="text-sm text-gray-500 mt-0.5">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative">
          <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-primary-50 border border-primary-100" />
          <div className="relative bg-white border border-gray-300 rounded-md shadow-[0_1px_2px_rgba(14,34,56,0.06),0_12px_32px_-12px_rgba(14,34,56,0.18)]">
            <div className="flex items-baseline justify-between gap-4 px-5 sm:px-6 pt-5 pb-4 border-b border-gray-200">
              <span className="font-serif text-lg font-semibold text-ink">QMS readiness file</span>
              <span className="text-xs text-gray-500">Prepared by AA Alive</span>
            </div>
            <div className="grid grid-cols-2 text-xs border-b border-gray-200">
              <div className="px-5 sm:px-6 py-2.5 border-r border-gray-200">
                <span className="block text-gray-500">Standard</span>
                <span className="font-medium text-gray-900">ISO 9001:2015</span>
              </div>
              <div className="px-5 sm:px-6 py-2.5">
                <span className="block text-gray-500">Next revision</span>
                <span className="font-medium text-gray-900">ISO 9001:2026</span>
              </div>
            </div>

            <ol className="divide-y divide-gray-100">
              {clauses.map((clause, i) => (
                <li key={clause.no} className="flex items-center gap-4 px-5 sm:px-6 py-2.5">
                  <span className="w-6 text-sm font-semibold text-primary-700 tabular-nums">{clause.no}</span>
                  <span className="flex-1 text-sm text-gray-800">{clause.title}</span>
                  <span className="clause-tick flex items-center gap-1.5 text-xs font-medium text-emerald-700" style={{ '--i': i } as React.CSSProperties}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M5 13l4 4L19 7" />
                    </svg>
                    Prepared
                  </span>
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-2 text-xs border-t border-gray-200 bg-gray-50 rounded-b-md">
              <div className="px-5 sm:px-6 py-3 border-r border-gray-200">
                <span className="block font-medium text-gray-900">Stage 1 audit</span>
                <span className="text-gray-500">Document review</span>
              </div>
              <div className="px-5 sm:px-6 py-3">
                <span className="block font-medium text-gray-900">Stage 2 audit</span>
                <span className="text-gray-500">On-site implementation</span>
              </div>
            </div>
          </div>
          <figcaption className="relative mt-6 text-sm text-gray-500">
            What we prepare with you, clause by clause, before the certification body audits your system.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
