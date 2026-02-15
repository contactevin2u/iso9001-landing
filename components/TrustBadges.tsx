const badges = [
  { name: 'SIRIM QAS', label: 'SIRIM QAS International' },
  { name: 'BSI', label: 'British Standards Institution' },
  { name: 'TUV SUD', label: 'TUV SUD Malaysia' },
  { name: 'Bureau Veritas', label: 'Bureau Veritas' },
  { name: 'SGS', label: 'SGS Malaysia' },
  { name: 'DNV', label: 'DNV GL' },
]

export default function TrustBadges() {
  return (
    <section className="py-8 px-4 sm:px-6 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
          We Prepare You for Audit by These Accredited Certification Bodies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200"
              title={badge.label}
            >
              <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
