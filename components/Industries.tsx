export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Metal fabrication, plastics, electronics, food processing, automotive parts. ISO 9001 is essential for Petronas vendor registration, MITI incentives, and export markets.',
      keywords: 'ISO 9001 manufacturing Malaysia',
    },
    {
      name: 'Construction & Engineering',
      description: 'Civil, mechanical, electrical engineering. Required for CIDB G7 registration and government infrastructure projects. Our clients report winning 40% more tenders post-certification.',
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
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 9001 Certification for Every Malaysian Industry
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          We&apos;ve certified companies across 50+ industries in Malaysia. Our consultants understand
          the unique requirements, regulations, and challenges of your specific sector.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://wa.me/60102062070?text=Hi%2C%20I%20need%20ISO%209001%20certification%20for%20my%20industry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-8 sm:py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-base sm:text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Get Certified for Your Industry
          </a>
        </div>

        <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Don&apos;t See Your Industry?</h3>
          <p className="text-primary-100 mb-4">
            ISO 9001 applies to any organization of any size in any industry. If your business has processes
            and customers, you can benefit from certification. Contact us to discuss your specific needs.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Discuss Your Industry
          </a>
        </div>
      </div>
    </section>
  )
}
