const badges = [
  { name: 'SIRIM QAS', label: 'SIRIM QAS International' },
  { name: 'BSI', label: 'British Standards Institution' },
  { name: 'TUV SUD', label: 'TUV SUD Malaysia' },
  { name: 'Bureau Veritas', label: 'Bureau Veritas' },
  { name: 'SGS', label: 'SGS Malaysia' },
  { name: 'DNV', label: 'DNV GL' },
]

export default function TrustBadges({ intro }: { intro: string }) {
  return (
    <section className="py-8 px-4 sm:px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <p className="text-sm text-gray-600 md:max-w-[15rem] flex-shrink-0">{intro}</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {badges.map((badge) => (
            <li key={badge.name} title={badge.label} className="text-base font-semibold text-gray-700 tracking-tight">
              {badge.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
