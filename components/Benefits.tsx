const benefits = [
  {
    title: 'Build customer trust',
    description: 'Show customers and partners that quality is your priority with internationally recognized certification.',
    details: 'ISO 9001 certification provides independent verification that your organization consistently meets customer requirements. Many Malaysian buyers and procurement teams ask for it before they will shortlist a supplier.',
  },
  {
    title: 'Respond to tender requirements',
    description: 'ISO 9001 is often requested by larger buyers and in tenders. Certification lets you respond to those requests.',
    details: 'Larger buyers, including multinational companies and GLCs, often ask supply chain partners for ISO 9001 certification, and it is often requested in government tenders. Requirements vary by buyer and tender.',
  },
  {
    title: 'Improve efficiency',
    description: 'Streamline your processes, reduce waste, and eliminate errors through systematic quality management.',
    details: 'The standard requires you to document processes, identify bottlenecks, and implement controls that reduce rework and waste.',
  },
  {
    title: 'Reduce costs',
    description: 'Fewer mistakes mean lower costs. Efficient processes save time and resources across your organization.',
    details: 'A working QMS helps control cost through fewer defects, less rework and better use of resources.',
  },
  {
    title: 'Clearer roles for your team',
    description: 'Clear processes and responsibilities help your team work more effectively and with greater satisfaction.',
    details: 'ISO 9001 provides clear roles, responsibilities, and objectives for employees. Clear expectations make onboarding easier and reduce the friction that comes from unclear ownership.',
  },
  {
    title: 'Continual improvement',
    description: 'Build a culture of ongoing improvement that keeps your business competitive and adaptable.',
    details: 'The PDCA cycle embedded in ISO 9001 ensures your quality management system continuously evolves. Regular internal audits and management reviews identify opportunities for improvement, helping your organization adapt to customer and market changes.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-4">
          Why ISO 9001 matters
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          What a certified quality management system can do for your business, and why
          Malaysian companies pursue ISO 9001.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-3">{benefit.description}</p>
              <p className="text-sm text-gray-500">{benefit.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div>
            <a
              href="/iso-9001-benefits"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              Learn more about ISO 9001 benefits
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
