const plans = [
  {
    name: 'Starter',
    description: 'For small businesses getting started',
    price: 'RM 4,500',
    period: 'one-time',
    features: [
      'Gap analysis assessment',
      'QMS documentation templates',
      'Implementation guidance',
      'Email support',
      '1 internal audit',
      'Certification preparation',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'Most popular for growing businesses',
    price: 'RM 8,500',
    period: 'one-time',
    features: [
      'Everything in Starter',
      'Custom QMS documentation',
      'On-site consultation (3 visits)',
      'Staff training workshop',
      '2 internal audits',
      'Audit day support',
      '3 months post-certification support',
    ],
    highlighted: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: 'contact us',
    features: [
      'Everything in Professional',
      'Multi-site implementation',
      'Unlimited on-site visits',
      'Executive training',
      'Integrated management systems',
      'Dedicated consultant',
      '12 months ongoing support',
    ],
    highlighted: false,
    cta: 'Contact Us',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Clear, Transparent Pricing
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          No hidden fees. Choose the package that fits your business needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-primary-600 text-white ring-4 ring-primary-600 ring-offset-2'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="text-sm font-medium text-primary-100 mb-2">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-primary-200' : 'text-primary-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-primary-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          All prices exclude SST. Payment plans available upon request.
        </p>
      </div>
    </section>
  )
}
