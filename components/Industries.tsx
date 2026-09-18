export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Metal fabrication, plastics, electronics, food processing, automotive parts. ISO 9001 is essential for Petronas vendor registration, MITI incentives, and export markets.',
      keywords: 'ISO 9001 manufacturing Malaysia',
    },
    {
      name: 'Construction & Engineering',
      description: 'Civil, mechanical, electrical engineering. Required for CIDB G7 registration and commonly requested for government infrastructure projects.',
      keywords: 'ISO 9001 construction Malaysia',
    },
    {
      name: 'IT & Technology',
      description: 'Software development, IT services, system integrators. Essential for MDEC grants, government IT contracts, and GLC partnerships across Malaysia.',
      keywords: 'ISO 9001 IT company Malaysia',
    },
    {
      name: 'Healthcare & Medical',
      description: 'Clinics, medical device suppliers, pharmaceutical distributors. Complements KKM and MDA requirements. Builds patient and partner confidence.',
      keywords: 'ISO 9001 healthcare Malaysia',
    },
    {
      name: 'Oil & Gas',
      description: 'Upstream, downstream, and support services. Petronas SWEC license and vendor registration require quality management systems aligned with ISO 9001.',
      keywords: 'ISO 9001 oil gas Malaysia',
    },
    {
      name: 'Logistics & Warehousing',
      description: 'Freight forwarding, 3PL, cold chain, distribution. Certified quality processes reduce damage, delays, and customer complaints significantly.',
      keywords: 'ISO 9001 logistics Malaysia',
    },
    {
      name: 'Education & Training',
      description: 'Private colleges, training providers, education groups. MQA and JPT increasingly value ISO 9001 for institutional quality assurance.',
      keywords: 'ISO 9001 education Malaysia',
    },
    {
      name: 'Professional Services',
      description: 'Consulting, legal, accounting, recruitment firms. Differentiate your firm from competitors and win larger corporate clients who require certified partners.',
      keywords: 'ISO 9001 professional services Malaysia',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl mb-4">
          ISO 9001 for every Malaysian industry
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-12">
          We&apos;ve certified companies across 50+ industries in Malaysia. Our consultants understand
          the unique requirements, regulations, and challenges of your specific sector.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>


        <p className="mt-10 text-gray-600 max-w-3xl">
          Don&apos;t see your industry? ISO 9001 applies to any organization with processes and customers,
          whatever its size or sector.{' '}
          <a href="/#contact" className="font-medium text-primary-700 underline underline-offset-4 hover:text-primary-800">
            Discuss your industry with us
          </a>
          .
        </p>
      </div>
    </section>
  )
}
