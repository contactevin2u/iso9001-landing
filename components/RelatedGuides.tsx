import Link from 'next/link'

/**
 * Crawlable in-body links between the site's guide pages. The header's
 * Resources menu is a client dropdown, so without this block most guides were
 * only reachable through the footer.
 */
const GUIDES = [
  { href: '/iso-9001-certification-malaysia', title: 'ISO 9001 Certification Malaysia' },
  { href: '/iso-9001-2026-transition', title: 'ISO 9001:2026 Transition' },
  { href: '/quality-management-system-malaysia', title: 'Quality Management System (QMS) Malaysia' },
  { href: '/iso-9001-requirements', title: 'ISO 9001 Requirements' },
  { href: '/iso-9001-certification-process', title: 'ISO 9001 Certification Process' },
  { href: '/iso-9001-cost-malaysia', title: 'ISO 9001 Certification Cost in Malaysia' },
  { href: '/iso-9001-certification-body-malaysia', title: 'ISO 9001 Certification Bodies in Malaysia' },
  { href: '/iso-9001-benefits', title: 'Benefits of ISO 9001' },
  { href: '/about', title: 'About AA Alive Sdn Bhd' },
]

export default function RelatedGuides({
  current,
  heading = 'Related ISO 9001 guides',
}: {
  current?: string
  heading?: string
}) {
  const links = GUIDES.filter((g) => g.href !== current)
  return (
    <section aria-labelledby="related-guides-heading" className="py-12 px-4 sm:px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 id="related-guides-heading" className="text-2xl font-bold text-gray-900 mb-6">
          {heading}
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {links.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="flex items-center justify-between gap-3 h-full px-4 py-3 bg-white rounded-lg border border-gray-200 text-primary-700 font-medium hover:border-primary-300 hover:text-primary-800 transition-colors"
              >
                {g.title}
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
