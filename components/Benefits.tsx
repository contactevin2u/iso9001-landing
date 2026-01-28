const benefits = [
  {
    title: 'Build Customer Trust',
    description: 'Show customers and partners that quality is your priority with internationally recognized certification.',
    details: 'ISO 9001 certification provides independent verification that your organization consistently meets customer requirements. Studies show 84% of customers prefer to work with certified suppliers, giving you a significant competitive advantage in the Malaysian market.',
  },
  {
    title: 'Win More Contracts',
    description: 'Many organizations require ISO 9001 certification from their suppliers. Open doors to new business opportunities.',
    details: 'Major corporations like Petronas, Tenaga Nasional, and multinational companies increasingly require ISO 9001 certification from their supply chain partners. Government procurement policies also favor certified organizations for tender qualifications.',
  },
  {
    title: 'Improve Efficiency',
    description: 'Streamline your processes, reduce waste, and eliminate errors through systematic quality management.',
    details: 'Organizations implementing ISO 9001 typically achieve 15-25% improvement in operational efficiency. The standard requires you to document processes, identify bottlenecks, and implement controls that reduce rework and waste.',
  },
  {
    title: 'Reduce Costs',
    description: 'Fewer mistakes mean lower costs. Efficient processes save time and resources across your organization.',
    details: 'Studies show ISO 9001 certified organizations save an average of 10-20% on operational costs through reduced defects, less rework, and improved resource utilization. The return on investment typically occurs within 12-18 months.',
  },
  {
    title: 'Boost Employee Engagement',
    description: 'Clear processes and responsibilities help your team work more effectively and with greater satisfaction.',
    details: 'ISO 9001 provides clear roles, responsibilities, and objectives for employees. Research indicates organizations with QMS experience 20% higher employee engagement and lower turnover rates due to improved clarity and job satisfaction.',
  },
  {
    title: 'Drive Continuous Improvement',
    description: 'Build a culture of ongoing improvement that keeps your business competitive and adaptable.',
    details: 'The PDCA cycle embedded in ISO 9001 ensures your quality management system continuously evolves. Regular internal audits and management reviews identify opportunities for improvement, keeping your organization ahead of competitors and market changes.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why ISO 9001 Matters
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Certification delivers real, measurable benefits for your business.
          Discover why leading Malaysian companies choose ISO 9001.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
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

        <div className="mt-12 text-center">
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
    </section>
  )
}
