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

        <div className="mt-12 text-center space-y-4">
          <a
            href="https://wa.me/601124102070?text=Hi%2C%20I%20would%20like%20to%20start%20the%20ISO%209001%20certification%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Your Certification Today
          </a>
          <div>
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
      </div>
    </section>
  )
}
