import WhatsAppLink from '@/components/WhatsAppLink'
import Rich from '@/components/Rich'
import { CONTENT_LAST_UPDATED } from '@/lib/constants'
import en from '@/lib/i18n/home-en'
import type { HomeDict } from '@/lib/i18n/home-types'

// Single source of truth for package tiers (lib/i18n/home-en.ts); also rendered on /iso-9001-cost-malaysia.
export const packages = en.pricing.packages

export default function Pricing({
  t = en.pricing,
  lastUpdated = CONTENT_LAST_UPDATED,
}: {
  t?: HomeDict['pricing']
  lastUpdated?: string
}) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-4">{t.title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-4">{t.intro}</p>
        <p className="text-sm text-gray-500 max-w-3xl mb-4">{t.cbNote}</p>
        <p className="text-sm text-gray-500 mb-12">
          {t.lastUpdated} {lastUpdated}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {t.packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 sm:p-8 border-2 ${
                pkg.popular ? 'border-primary-600 shadow-xl relative' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    {t.mostPopular}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{pkg.description}</p>
                <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {pkg.popular ? (
                <WhatsAppLink className="block w-full text-center py-3.5 px-6 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors">
                  {t.getStarted}
                </WhatsAppLink>
              ) : (
                <a
                  href="/#contact"
                  className="block w-full text-center py-3.5 px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {pkg.custom ? t.contactUs : t.getStarted}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-gray-600">
          <Rich text={t.payment} linkClassName="font-medium text-primary-700 underline underline-offset-4 hover:text-primary-800" />
        </p>
      </div>
    </section>
  )
}
