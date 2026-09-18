import type { HomeDict } from '@/lib/i18n/home-types'

export default function AnswerBlock({ t }: { t: HomeDict['answers'] }) {
  return (
    <section id="quick-answers" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto [&>*]:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl mb-4">{t.title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">{t.intro}</p>

        <div className="space-y-8">
          {t.items.map((item) => (
            <div key={item.question}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        {t.extra && (
          <div className="mt-12 pt-10 border-t border-gray-200" lang={t.extra.lang}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.extra.heading}</h3>
            <div className="space-y-8">
              {t.extra.items.map((item) => (
                <div key={item.question}>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
