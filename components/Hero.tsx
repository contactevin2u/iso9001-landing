'use client'

import { getWhatsAppUrlWithBeacon } from '@/lib/beacon'

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean
  }
}

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
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold rounded-full mb-4 animate-pulse">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Only Accepting 5 New Clients This Month — Limited Availability
        </div>

        <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-6">
          Trusted by 500+ Malaysian Businesses Since 2016
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Your Competitors Are Already ISO 9001 Certified.
          <span className="block text-primary-600 mt-2">We&apos;ll Get You There in 30 Days.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 leading-relaxed">
          Losing tenders because you lack ISO certification? Watching competitors win contracts that should be yours?
          We&apos;ve helped <strong className="text-gray-900">500+ Malaysian companies</strong> get ISO 9001 certified — from
          small workshops to large manufacturers — with a <strong className="text-gray-900">98% first-time audit success rate</strong>.
        </p>

        <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10">
          Founded by Evin Lim, AA Alive Sdn Bhd has been Malaysia&apos;s trusted ISO certification partner since 2016.
          We handle everything — gap analysis, documentation, training, audit prep — so you focus on running your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={waUrl}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-base sm:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Get Free Consultation Now
          </a>
          <a
            href="/#process"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors text-base sm:text-lg"
          >
            See How It Works
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">500+</div>
            <div className="text-sm text-gray-500">Companies Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">98%</div>
            <div className="text-sm text-gray-500">First-Time Pass Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">30</div>
            <div className="text-sm text-gray-500">Days to Certify</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">50+</div>
            <div className="text-sm text-gray-500">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}
