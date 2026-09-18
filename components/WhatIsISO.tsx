import Rich from '@/components/Rich'
import type { HomeDict } from '@/lib/i18n/home-types'

export default function WhatIsISO({ t }: { t: HomeDict['whatIs'] }) {
  return (
    <section id="what-is-iso" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto [&>*]:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl mb-6">{t.title}</h2>

        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <p>
            <Rich text={t.intro} />
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.structureTitle}</h3>
            <p className="mb-4">
              <Rich text={t.structure} />
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.pdcaTitle}</h3>
            <p className="mb-4">
              <Rich text={t.pdcaIntro} />
            </p>
            <ul className="space-y-3 ml-6">
              {t.pdca.map((step) => (
                <li key={step.label} className="flex items-start gap-3">
                  <span className="font-semibold text-primary-600 flex-shrink-0">{step.label}</span>
                  <span>{step.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{t.clausesTitle}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {t.clauses.map((clause) => (
                <div key={clause.title} className="p-4 sm:p-5 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{clause.title}</p>
                  <p className="text-sm text-gray-600">{clause.text}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            <Rich text={t.closing} />
          </p>
        </div>
      </div>
    </section>
  )
}
