import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'ISO 9001 Requirements | Complete Checklist & Guide',
  description: 'Complete guide to ISO 9001:2015 requirements. Understand every clause, from context and leadership to operations and continuous improvement. Free checklist included.',
  keywords: ['ISO 9001 requirements', 'ISO 9001 checklist', 'ISO 9001:2015 clauses', 'QMS requirements'],
  openGraph: {
    title: 'ISO 9001 Requirements | Complete Checklist & Guide',
    description: 'Complete guide to ISO 9001:2015 requirements. Understand every clause and what you need for certification.',
    url: 'https://iso9001.my/iso-9001-requirements',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 9001 Requirements | Complete Checklist & Guide',
    description: 'Complete guide to ISO 9001:2015 requirements and clauses.',
  },
  alternates: {
    canonical: 'https://iso9001.my/iso-9001-requirements',
  },
}

export default function ISO9001Requirements() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 9001 Requirements', href: '/iso-9001-requirements' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 9001 Requirements
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive guide to the requirements of ISO 9001:2015. Understand what your organization
              needs to implement for successful Quality Management System certification.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Understanding ISO 9001:2015 Structure
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 9001:2015 follows the High-Level Structure (HLS) common to all modern ISO management
                system standards. The standard contains 10 clauses, with clauses 1-3 providing introduction
                and definitions, and clauses 4-10 containing the requirements for certification.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 4: Context of the Organization
              </h2>
              <p className="text-gray-600 mb-4">
                This clause requires you to understand your organization&apos;s context and stakeholder needs:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.1 Understanding the Organization and Its Context</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Identify external issues (market, regulatory, economic, technological)</li>
                  <li>Identify internal issues (organizational culture, capabilities, resources)</li>
                  <li>Monitor and review information about these issues</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.2 Understanding Needs and Expectations of Interested Parties</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Identify relevant interested parties (customers, suppliers, regulators, employees)</li>
                  <li>Determine their relevant requirements</li>
                  <li>Monitor and review this information</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.3 Determining the Scope of the QMS</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Define boundaries and applicability of the QMS</li>
                  <li>Consider external and internal issues, requirements of interested parties</li>
                  <li>Include all products and services within scope</li>
                  <li>Document and make available</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.4 Quality Management System and Its Processes</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Establish, implement, maintain, and continually improve the QMS</li>
                  <li>Determine processes needed and their interactions</li>
                  <li>Determine inputs, outputs, sequence, criteria, resources, and responsibilities</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 5: Leadership
              </h2>
              <p className="text-gray-600 mb-4">
                Leadership requirements ensure top management commitment and accountability:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">5.1 Leadership and Commitment</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Take accountability for QMS effectiveness</li>
                  <li>Ensure policy and objectives are established</li>
                  <li>Ensure integration of QMS requirements into business processes</li>
                  <li>Promote process approach and risk-based thinking</li>
                  <li>Ensure resources are available</li>
                  <li>Promote continual improvement</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">5.2 Quality Policy</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Appropriate to purpose and context of organization</li>
                  <li>Provides framework for setting quality objectives</li>
                  <li>Includes commitment to satisfy applicable requirements</li>
                  <li>Includes commitment to continual improvement</li>
                  <li>Documented, communicated, and available</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">5.3 Organizational Roles, Responsibilities and Authorities</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Assign and communicate responsibilities and authorities</li>
                  <li>Ensure QMS conforms to standard requirements</li>
                  <li>Ensure processes deliver intended outputs</li>
                  <li>Report on QMS performance to top management</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 6: Planning
              </h2>
              <p className="text-gray-600 mb-4">
                Planning requirements address risks, opportunities, and objectives:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">6.1 Actions to Address Risks and Opportunities</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Consider context and interested party requirements</li>
                  <li>Determine risks and opportunities to address</li>
                  <li>Plan actions to address them</li>
                  <li>Integrate actions into QMS processes</li>
                  <li>Evaluate effectiveness of actions</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">6.2 Quality Objectives and Planning to Achieve Them</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Establish objectives at relevant functions and levels</li>
                  <li>Objectives must be consistent with policy, measurable, monitored, communicated, and updated</li>
                  <li>Plan what will be done, resources required, responsibility, timeline, and evaluation method</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 7: Support
              </h2>
              <p className="text-gray-600 mb-4">
                Support requirements ensure adequate resources and documentation:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">7.1-7.4 Resources, Competence, Awareness, Communication</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Determine and provide necessary resources (people, infrastructure, environment, monitoring resources, knowledge)</li>
                  <li>Ensure competence of persons affecting quality performance</li>
                  <li>Ensure awareness of policy, objectives, contributions, and implications</li>
                  <li>Determine internal and external communications</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">7.5 Documented Information</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Include documented information required by the standard</li>
                  <li>Include documented information needed for QMS effectiveness</li>
                  <li>Control creation, updating, and control of documents</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 8: Operation
              </h2>
              <p className="text-gray-600 mb-4">
                This is the largest clause, covering operational planning and product/service realization:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">8.1-8.7 Operational Requirements</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>8.1:</strong> Operational planning and control</li>
                  <li><strong>8.2:</strong> Requirements for products and services (customer communication, determining and reviewing requirements)</li>
                  <li><strong>8.3:</strong> Design and development of products and services</li>
                  <li><strong>8.4:</strong> Control of externally provided processes, products and services</li>
                  <li><strong>8.5:</strong> Production and service provision (control, identification, property, preservation, post-delivery, change control)</li>
                  <li><strong>8.6:</strong> Release of products and services</li>
                  <li><strong>8.7:</strong> Control of nonconforming outputs</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 9: Performance Evaluation
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">9.1-9.3 Evaluation Requirements</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>9.1:</strong> Monitoring, measurement, analysis and evaluation (including customer satisfaction)</li>
                  <li><strong>9.2:</strong> Internal audit at planned intervals</li>
                  <li><strong>9.3:</strong> Management review of the QMS</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 10: Improvement
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">10.1-10.3 Improvement Requirements</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Determine and select opportunities for improvement</li>
                  <li>React to nonconformities, take corrective action</li>
                  <li>Continually improve QMS suitability, adequacy, and effectiveness</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Required Documented Information
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 9001:2015 requires the following documented information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Scope of the QMS (4.3)</li>
                <li>Quality policy (5.2)</li>
                <li>Quality objectives (6.2)</li>
                <li>Evidence of competence (7.2)</li>
                <li>Operational planning and control (8.1)</li>
                <li>Product/service requirements (8.2.3)</li>
                <li>Design and development outputs (8.3.5)</li>
                <li>Control of external providers (8.4)</li>
                <li>Production and service provision (8.5.1)</li>
                <li>Traceability (8.5.2)</li>
                <li>Customer/external provider property (8.5.3)</li>
                <li>Change control (8.5.6)</li>
                <li>Release of products and services (8.6)</li>
                <li>Nonconforming outputs (8.7)</li>
                <li>Monitoring and measurement results (9.1.1)</li>
                <li>Internal audit program and results (9.2)</li>
                <li>Management review outputs (9.3)</li>
                <li>Nonconformity and corrective action (10.2)</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Need Help Meeting ISO 9001 Requirements?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Our consultants will guide you through every requirement and help you build a compliant QMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Gap Analysis
                </a>
                <a
                  href="/iso-9001-certification-process"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  View Certification Process
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
