import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'ISO 9001 Certification Malaysia | QMS Certification Experts',
  description: 'Get ISO 9001 certification in Malaysia with expert guidance. Our QMS consultants have helped 150+ Malaysian companies achieve quality management system certification.',
  keywords: ['ISO 9001 certification Malaysia', 'QMS certification Malaysia', 'quality management system Malaysia', 'ISO 9001 consultant Malaysia'],
  openGraph: {
    title: 'ISO 9001 Certification Malaysia | QMS Certification Experts',
    description: 'Get ISO 9001 certification in Malaysia with expert guidance. Our QMS consultants have helped 150+ Malaysian companies achieve quality management system certification.',
    url: 'https://iso9001.my/iso-9001-certification-malaysia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 9001 Certification Malaysia | QMS Certification Experts',
    description: 'Get ISO 9001 certification in Malaysia with expert guidance.',
  },
  alternates: {
    canonical: 'https://iso9001.my/iso-9001-certification-malaysia',
  },
}

export default function ISO9001CertificationMalaysia() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 9001 Certification Malaysia', href: '/iso-9001-certification-malaysia' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 9001 Certification in Malaysia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete guide to achieving ISO 9001 quality management system certification in Malaysia.
              Learn about requirements, process, costs, and how our expert consultants can help your organization.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why Malaysian Businesses Need ISO 9001 Certification
              </h2>
              <p className="text-gray-600 mb-4">
                In today&apos;s competitive business landscape, ISO 9001 certification has become
                essential for Malaysian companies looking to demonstrate their commitment to quality.
                As Malaysia continues its journey towards becoming a developed nation, quality management
                is no longer optional—it&apos;s a business imperative.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you&apos;re targeting government contracts, multinational supply chains, or simply
                want to improve your operations, ISO 9001 certification provides the framework and
                credibility you need to succeed.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What is ISO 9001 Certification?
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 9001 is an internationally recognized standard for Quality Management Systems (QMS).
                Published by the International Organization for Standardization (ISO), it provides a framework
                for organizations to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Consistently provide products and services that meet customer requirements</li>
                <li>Enhance customer satisfaction through effective system application</li>
                <li>Address risks and opportunities associated with context and objectives</li>
                <li>Demonstrate conformity to specified quality management system requirements</li>
              </ul>
              <p className="text-gray-600 mb-4">
                The current version, ISO 9001:2015, was updated to align with other management system standards
                and places greater emphasis on leadership commitment, risk-based thinking, and organizational context.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Industries in Malaysia Requiring ISO 9001
              </h2>
              <p className="text-gray-600 mb-4">
                While ISO 9001 is applicable to any organization regardless of size or industry, certain sectors
                in Malaysia particularly benefit from certification:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-600">Electronics, automotive, plastics, machinery, and food processing industries</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Construction</h3>
                  <p className="text-sm text-gray-600">Building contractors, civil engineering, and infrastructure projects</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">IT & Software</h3>
                  <p className="text-sm text-gray-600">Software development, IT services, and technology companies</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                  <p className="text-sm text-gray-600">Logistics, healthcare, education, and professional services</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The Certification Process in Malaysia
              </h2>
              <p className="text-gray-600 mb-4">
                Achieving ISO 9001 certification in Malaysia typically follows these steps:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-3 mb-4">
                <li><strong>Gap Analysis:</strong> Assess current quality practices against ISO 9001 requirements</li>
                <li><strong>QMS Development:</strong> Create quality policy, identify processes, set objectives</li>
                <li><strong>Documentation:</strong> Develop required procedures and records</li>
                <li><strong>Implementation:</strong> Put the QMS into practice across the organization</li>
                <li><strong>Internal Audit:</strong> Verify system effectiveness and identify improvements</li>
                <li><strong>Management Review:</strong> Top management evaluates QMS performance</li>
                <li><strong>Certification Audit:</strong> External audit by accredited certification body</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Accredited Certification Bodies in Malaysia
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 9001 certification must be issued by an accredited certification body. In Malaysia,
                organizations can choose from various certification bodies accredited by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>SIRIM QAS:</strong> Malaysia&apos;s national certification body</li>
                <li><strong>BSI (British Standards Institution):</strong> Internationally recognized</li>
                <li><strong>TUV:</strong> German certification body with global presence</li>
                <li><strong>Bureau Veritas:</strong> French certification and inspection company</li>
                <li><strong>SGS:</strong> Swiss multinational certification company</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Benefits for Malaysian Companies
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 9001 certification provides numerous benefits for Malaysian businesses:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Qualify for government tenders and procurement programs</li>
                <li>Access contracts with multinational corporations requiring certified suppliers</li>
                <li>Improve operational efficiency and reduce costs</li>
                <li>Enhance customer satisfaction and loyalty</li>
                <li>Build credibility and competitive advantage</li>
                <li>Prepare for other certifications (ISO 14001, ISO 45001)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Investment and Timeline
              </h2>
              <p className="text-gray-600 mb-4">
                The investment for ISO 9001 certification in Malaysia varies based on organization size and complexity.
                Our consulting packages start from <strong>RM 13,000</strong>, which includes gap analysis, documentation
                development, implementation support, and audit preparation. Most organizations achieve certification
                within 30 days.
              </p>
              <p className="text-gray-600 mb-4">
                Learn more about <a href="/iso-9001-cost-malaysia" className="text-primary-600 hover:underline">ISO 9001 certification costs in Malaysia</a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why Choose Our Consulting Services
              </h2>
              <p className="text-gray-600 mb-4">
                With over a decade of experience helping Malaysian companies achieve ISO 9001 certification,
                our team of certified consultants brings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Deep understanding of Malaysian business requirements</li>
                <li>Practical, business-focused approach to QMS implementation</li>
                <li>100% success rate in certification audits</li>
                <li>Ongoing support for surveillance audits and continuous improvement</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Ready to Get ISO 9001 Certified?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Contact us today for a free consultation and customized proposal for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://wa.me/60112410207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
