const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Audit-ready before you apply',
    description: 'We prepare your quality system, your records and your team for the certification audit. We don\'t put you forward until the documentation and objective evidence are actually in place.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'A structured, staged method',
    description: 'A structured, staged methodology with a timeline agreed upfront. We handle the heavy lifting — your team spends minimal time away from their regular duties.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Founder-led consulting',
    description: 'Work directly with Evin Lim and our senior consultants — not junior staff. Your questions are answered within hours on WhatsApp, not buried in a ticketing system for days.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent, fair pricing',
    description: 'Full packages from RM 13,000 with no hidden costs. We tell you everything upfront — consulting fees, CB audit costs, what\'s included, what\'s extra. No surprises on invoice day.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Documentation written for you',
    description: 'We don\'t just advise — we write your Quality Manual, SOPs, procedures, forms, and records. Customized to your actual operations, not generic templates copied from the internet.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Support after certification',
    description: 'Certification is the beginning, not the end. We support you through surveillance audits, management reviews, and continuous improvement — so you stay certified year after year.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-4">
          Why Malaysian companies choose AA Alive
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          We are ISO certification specialists, not a generic consulting firm: a clear
          method, a fair price, and direct access to the people doing the work.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-11 h-11 bg-primary-50 border border-primary-100 text-primary-700 rounded-md flex items-center justify-center flex-shrink-0">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            How we compare with typical ISO consultants in Malaysia
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900"></th>
                  <th className="text-center py-3 px-4 font-semibold text-primary-600">AA Alive</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">Typical consultant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-700">Timeline</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">Fast-tracked</td>
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
                  <td className="py-3 pr-4 text-gray-700">Post-cert support</td>
                  <td className="py-3 px-4 text-center font-semibold text-primary-600">3-12 months included</td>
                  <td className="py-3 px-4 text-center text-gray-500">Extra charge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
