const comparison = [
  {
    without: 'Unable to respond when a tender or MNC supplier registration asks for ISO 9001',
    with: 'Able to respond to tenders and vendor registrations that ask for ISO 9001 certification',
  },
  {
    without: 'No independent evidence that your processes meet an international standard',
    with: 'A certificate from an accredited certification body that customers and auditors recognise',
  },
  {
    without: 'Rework, defects and inconsistent processes that quietly add cost',
    with: 'Documented processes and controls that reduce rework and repeat mistakes',
  },
  {
    without: 'Unclear roles and undocumented procedures when something goes wrong',
    with: 'Defined responsibilities, so every team member knows what is expected',
  },
  {
    without: 'Losing work to certified competitors, even with a better product or service',
    with: 'Competing on equal terms with certified companies in your industry',
  },
]

export default function PainPoints() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">
            What changes when your quality system is certified
          </h2>
          <p className="text-lg text-gray-600">
            For many Malaysian companies, ISO 9001 is what stands between them and the next tender,
            vendor registration or supply contract. Here is the practical difference.
          </p>
        </div>

        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="hidden md:grid grid-cols-2 bg-gray-50 border-b border-gray-200 text-sm font-semibold">
            <div className="px-6 py-3 text-gray-500">Without ISO 9001</div>
            <div className="px-6 py-3 text-ink border-l border-gray-200">With a certified QMS</div>
          </div>
          <ul className="divide-y divide-gray-200">
            {comparison.map((row) => (
              <li key={row.with} className="grid md:grid-cols-2">
                <div className="px-6 pt-5 md:py-5 text-gray-500 flex items-start gap-3">
                  <span className="md:hidden text-xs font-semibold text-gray-400 w-14 flex-shrink-0 pt-0.5">Without</span>
                  <span>{row.without}</span>
                </div>
                <div className="px-6 pt-3 pb-5 md:py-5 text-gray-900 flex items-start gap-3 md:border-l border-gray-200">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{row.with}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-gray-600">
          Not sure what ISO 9001 would take in your company?{' '}
          <a href="/#contact" className="font-medium text-primary-700 underline underline-offset-4 hover:text-primary-800">
            Tell us about your situation
          </a>
          .
        </p>
      </div>
    </section>
  )
}
