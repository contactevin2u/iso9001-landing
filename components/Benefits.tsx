const benefits = [
  {
    title: 'Build Customer Trust',
    description: 'Show customers and partners that quality is your priority with internationally recognized certification.',
  },
  {
    title: 'Win More Contracts',
    description: 'Many organizations require ISO 9001 certification from their suppliers. Open doors to new business opportunities.',
  },
  {
    title: 'Improve Efficiency',
    description: 'Streamline your processes, reduce waste, and eliminate errors through systematic quality management.',
  },
  {
    title: 'Reduce Costs',
    description: 'Fewer mistakes mean lower costs. Efficient processes save time and resources across your organization.',
  },
  {
    title: 'Boost Employee Engagement',
    description: 'Clear processes and responsibilities help your team work more effectively and with greater satisfaction.',
  },
  {
    title: 'Drive Continuous Improvement',
    description: 'Build a culture of ongoing improvement that keeps your business competitive and adaptable.',
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
          Certification delivers real, measurable benefits for your business
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
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
