const features = [
  'Complete gap analysis assessment',
  'Full QMS documentation',
  'On-site consultation visits',
  'Staff training workshop',
  'Internal audit support',
  'Certification audit preparation',
  'Audit day support',
  'Post-certification guidance',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Simple, All-Inclusive Pricing
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          One package. Everything you need to get ISO 9001 certified.
        </p>

        <div className="bg-white rounded-2xl p-8 sm:p-12 border-2 border-primary-600 shadow-xl">
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-primary-600 mb-2">Complete Package</div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl sm:text-6xl font-bold text-gray-900">RM 13,000</span>
            </div>
            <p className="text-gray-500 mt-2">Full ISO 9001 certification support</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="block w-full text-center py-4 px-8 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
          >
            Get Started Today
          </a>

          <p className="text-center text-gray-500 text-sm mt-6">
            Flexible payment plans available. Contact us to discuss.
          </p>
        </div>
      </div>
    </section>
  )
}
