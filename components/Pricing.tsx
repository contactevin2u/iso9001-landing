import WhatsAppLink from '@/components/WhatsAppLink'
import { CONTENT_LAST_UPDATED } from '@/lib/constants'

const packages = [
  {
    name: 'SME Package',
    price: 'RM 13,000',
    description: 'For small businesses with 5-30 employees',
    features: [
      'Complete gap analysis assessment',
      'Full QMS documentation (Quality Manual, SOPs, Forms)',
      '2 on-site consultation visits',
      'Staff quality awareness training',
      'Internal audit support',
      'Certification audit preparation',
      'Audit day support',
      '3 months post-certification guidance',
    ],
    timeline: '30 days',
    popular: false,
  },
  {
    name: 'Professional Package',
    price: 'RM 22,000',
    description: 'For medium businesses with 30-100 employees',
    features: [
      'Everything in SME Package, plus:',
      'Advanced process mapping and optimization',
      '4 on-site consultation visits',
      'Departmental-level training workshops',
      'Risk assessment & mitigation planning',
      'KPI framework development',
      'Management review facilitation',
      '6 months post-certification support',
      'Surveillance audit preparation (Year 1)',
    ],
    timeline: '30-45 days',
    popular: true,
  },
  {
    name: 'Enterprise Package',
    price: 'Custom',
    description: 'For large organizations with 100+ employees or multi-site',
    features: [
      'Everything in Professional Package, plus:',
      'Multi-site coordination and harmonization',
      'Unlimited on-site consultation visits',
      'Executive leadership workshops',
      'Integrated Management System (ISO 14001, ISO 45001)',
      'Supplier quality management setup',
      'Digital QMS platform implementation',
      '12 months ongoing support',
      'Full recertification cycle management',
    ],
    timeline: 'Custom timeline',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 9001 Certification Packages & Pricing
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-4">
          Transparent pricing with everything included. No hidden fees, no surprise charges.
          Every package includes full certification support from gap analysis to audit day.
        </p>
        <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto mb-4">
          Certification body (CB) audit fees are separate and typically range from RM 3,000 - RM 8,000
          depending on organization size. We help you choose the most cost-effective accredited CB.
        </p>
        <p className="text-sm text-gray-500 text-center mb-12">Last updated: {CONTENT_LAST_UPDATED}</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 sm:p-8 border-2 ${
                pkg.popular ? 'border-primary-600 shadow-xl relative' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{pkg.description}</p>
                <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
                <p className="text-sm text-gray-500 mt-1">Timeline: {pkg.timeline}</p>
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
                <WhatsAppLink className="block w-full text-center py-3.5 px-6 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                  Get Started
                </WhatsAppLink>
              ) : (
                <a
                  href="/#contact"
                  className="block w-full text-center py-3.5 px-6 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
                >
                  {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            What&apos;s the True Cost of NOT Getting ISO 9001 Certified?
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-red-600 mb-1">RM 50K - 500K+</div>
              <p className="text-sm text-gray-600">Lost tenders per year from not having ISO certification as a prerequisite</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600 mb-1">10-20%</div>
              <p className="text-sm text-gray-600">Higher operational costs due to undocumented processes, rework, and waste</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600 mb-1">Unlimited</div>
              <p className="text-sm text-gray-600">Lost trust from customers who see competitors with ISO 9001 certificates</p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Flexible payment plans available. Contact us to discuss a plan that works for your budget.
          </p>
        </div>
      </div>
    </section>
  )
}
