const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '98% First-Time Pass Rate',
    description: 'Our clients pass their certification audit on the first attempt. We don\'t submit you for audit until we\'re 100% confident you\'re ready — saving you money and time on re-audits.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '30-Day Fast Track',
    description: 'While other consultants take 6-12 months, our proven methodology gets you certified in 30 days. We handle the heavy lifting — your team spends minimal time away from their regular duties.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Founder-Led Consulting',
    description: 'Work directly with Evin Lim and our senior consultants — not junior staff. Your questions are answered within hours on WhatsApp, not buried in a ticketing system for days.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent, Fair Pricing',
    description: 'Full packages from RM 13,000 with no hidden costs. We tell you everything upfront — consulting fees, CB audit costs, what\'s included, what\'s extra. No surprises on invoice day.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Documentation Done For You',
    description: 'We don\'t just advise — we write your Quality Manual, SOPs, procedures, forms, and records. Customized to your actual operations, not generic templates copied from the internet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Post-Certification Support',
    description: 'Certification is the beginning, not the end. We support you through surveillance audits, management reviews, and continuous improvement — so you stay certified year after year.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why 500+ Malaysian Companies Choose AA Alive for ISO 9001
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We&apos;re not a generic consulting firm. We&apos;re ISO certification specialists
          who deliver results faster, at a fair price, with a personal touch.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/60102062070?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20ISO%209001%20certification."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-base sm:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Get Your Free Consultation
          </a>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            How We Compare to Other ISO Consultants in Malaysia
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900"></th>
                  <th className="text-center py-3 px-4 font-semibold text-primary-600">AA Alive</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">Typical Consultant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Timeline</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">30 days</td>
                  <td className="py-3 px-4 text-center text-gray-500">6-12 months</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Price (SME)</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">From RM 13,000</td>
                  <td className="py-3 px-4 text-center text-gray-500">RM 25,000 - 50,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Documentation</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">Done for you</td>
                  <td className="py-3 px-4 text-center text-gray-500">Templates only</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Communication</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">Direct WhatsApp</td>
                  <td className="py-3 px-4 text-center text-gray-500">Email / Ticket system</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">First-time pass rate</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">98%</td>
                  <td className="py-3 px-4 text-center text-gray-500">70-80%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Post-cert support</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">3-12 months included</td>
                  <td className="py-3 px-4 text-center text-gray-500">Extra charge</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              See the AA Alive Difference
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
