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

        <div className="mt-12 text-center space-y-4">
          <a
            href="https://wa.me/601124102070?text=Hi%2C%20I%20want%20to%20learn%20how%20ISO%209001%20can%20benefit%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-base sm:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Unlock These Benefits for Your Business
          </a>
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
