const steps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'We assess your current operations and create a customized certification roadmap.',
    details: 'During this free consultation, our ISO consultants will review your existing quality practices, understand your business operations, and explain the certification journey. We\'ll provide a detailed proposal including timeline, investment, and expected outcomes.',
    timeline: 'Day 1',
  },
  {
    step: '2',
    title: 'Gap Analysis',
    description: 'We identify what you already have in place and what needs to be developed.',
    details: 'Our comprehensive gap analysis compares your current practices against ISO 9001:2015 requirements. We\'ll document existing quality controls, identify compliance gaps, assess your processes and controls, and prioritize actions needed for certification.',
    timeline: 'Days 2-4',
  },
  {
    step: '3',
    title: 'Documentation Development',
    description: 'We help you create all required QMS documentation tailored to your organization.',
    details: 'Working closely with your team, we develop essential documents including: Quality Policy, Quality Manual, Process Procedures, Work Instructions, Forms and Records, and Control of Documents procedures. All documentation is customized for your specific operations.',
    timeline: 'Days 5-12',
  },
  {
    step: '4',
    title: 'Implementation',
    description: 'We help you build and document your quality management system.',
    details: 'This phase involves putting your QMS into practice. We provide training for your staff on quality awareness and their roles, help establish monitoring and measurement systems, implement process controls, and ensure your team is ready to maintain the system independently.',
    timeline: 'Days 13-20',
  },
  {
    step: '5',
    title: 'Internal Audit & Review',
    description: 'We conduct internal audits and prepare you for the certification audit.',
    details: 'Our certified auditors perform a thorough internal audit to verify QMS effectiveness and identify any non-conformities. We train your internal audit team, facilitate management review meetings, and address any findings before the external certification audit.',
    timeline: 'Days 21-25',
  },
  {
    step: '6',
    title: 'Certification Audit',
    description: 'We prepare you for the external audit and support you through the process.',
    details: 'We help you select an accredited certification body (SIRIM, BSI, TUV, etc.) and prepare for the Stage 1 (documentation review) and Stage 2 (implementation audit) assessments. Our team is available to support you during the audits and help address any findings.',
    timeline: 'Days 26-30',
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
          A clear, step-by-step approach to get you certified. Most organizations achieve
          certification within 30 days.
        </p>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {item.timeline}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="text-sm text-gray-500">{item.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/iso-9001-certification-process"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            View detailed certification process
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
