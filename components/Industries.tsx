import Rich from '@/components/Rich'
import type { HomeDict } from '@/lib/i18n/home-types'

export default function Industries({ t }: { t: HomeDict['industries'] }) {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-4">{t.title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">{t.intro}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-gray-600 max-w-3xl">
          <Rich text={t.footer} linkClassName="font-medium text-primary-700 underline underline-offset-4 hover:text-primary-800" />
        </p>
      </div>
    </section>
  )
}
