const steps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'We assess your current operations and create a customized certification roadmap.',
  },
  {
    step: '2',
    title: 'Gap Analysis',
    description: 'We identify what you already have in place and what needs to be developed.',
  },
  {
    step: '3',
    title: 'Implementation',
    description: 'We help you build and document your quality management system.',
  },
  {
    step: '4',
    title: 'Certification Audit',
    description: 'We prepare you for the external audit and support you through the process.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Certification Process
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          A clear, step-by-step approach to get you certified
        </p>

        <div className="space-y-6">
          {steps.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div className="flex-1 pb-6 border-b border-gray-200 last:border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
