import Link from 'next/link'
import type { HomeDict } from '@/lib/i18n/home-types'

/**
 * Homepage notice for the ISO 9001:2026 publication. Facts must stay in line
 * with /iso-9001-2026-transition (the source page for these dates).
 */
export default function Iso2026Notice({
  t,
  updated,
  updatedIso,
}: {
  t: HomeDict['iso2026']
  updated: string
  updatedIso: string
}) {
  return (
    <section aria-labelledby="iso-2026-heading" className="py-12 px-4 sm:px-6 bg-primary-50 border-y border-primary-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-2">{t.eyebrow}</p>
        <h2 id="iso-2026-heading" className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          {t.heading}
        </h2>
        <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {t.facts.map((f) => (
            <div key={f.label} className="bg-white rounded-lg border border-primary-100 p-5">
              <dt className="text-sm text-gray-500">{f.label}</dt>
              <dd className="text-lg font-semibold text-gray-900 mt-1">{f.value}</dd>
              <dd className="text-sm text-gray-600 mt-1">{f.note}</dd>
            </div>
          ))}
        </dl>
        <p className="text-gray-700 mb-4 max-w-3xl">{t.body}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <Link href="/iso-9001-2026-transition" className="font-medium text-primary-700 hover:text-primary-800 underline">
            {t.cta}
          </Link>
          <p className="text-sm text-gray-500">
            {t.updated} <time dateTime={updatedIso}>{updated}</time>
          </p>
        </div>
      </div>
    </section>
  )
}
