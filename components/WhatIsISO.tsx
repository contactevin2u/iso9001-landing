export default function WhatIsISO() {
  return (
    <section id="what-is-iso" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
          What is ISO 9001?
        </h2>

        <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
          <p>
            <strong className="text-gray-900">ISO 9001</strong> is the world&apos;s most recognized quality management standard,
            published by the International Organization for Standardization (ISO). It provides a systematic framework for organizations
            to consistently deliver products and services that meet customer expectations and regulatory requirements. The current version,
            <strong className="text-gray-900"> ISO 9001:2015</strong>, was updated to emphasize risk-based thinking, leadership commitment,
            and integration with business strategy.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The ISO 9001:2015 Standard Structure
            </h3>
            <p className="mb-4">
              ISO 9001:2015 follows the High-Level Structure (HLS) common to all ISO management system standards. This makes it
              easier to integrate with other certifications like <a href="/iso-9001-requirements" className="text-primary-600 hover:underline">ISO 14001 (Environmental)</a> and
              ISO 45001 (Occupational Health & Safety). The standard is organized into 10 clauses, with clauses 4-10 containing
              the requirements for certification.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              The Plan-Do-Check-Act (PDCA) Cycle
            </h3>
            <p className="mb-4">
              At the heart of ISO 9001 is the PDCA cycle, a continuous improvement methodology that ensures your Quality
              Management System (QMS) evolves and improves over time:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary-600 flex-shrink-0">Plan:</span>
                <span>Establish quality objectives and processes needed to deliver results in accordance with customer requirements and organizational policies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary-600 flex-shrink-0">Do:</span>
                <span>Implement the processes as planned, including resource allocation and operational controls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary-600 flex-shrink-0">Check:</span>
                <span>Monitor and measure processes and products against policies, objectives, and requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-semibold text-primary-600 flex-shrink-0">Act:</span>
                <span>Take actions to continually improve process performance based on audit findings, data analysis, and management reviews</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Key Clauses of ISO 9001:2015
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Clause 4: Context of the Organization</p>
                <p className="text-sm text-gray-600">Understanding internal/external issues and stakeholder needs</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Clause 5: Leadership</p>
                <p className="text-sm text-gray-600">Top management commitment and quality policy</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Clause 6: Planning</p>
                <p className="text-sm text-gray-600">Risk assessment, opportunities, and quality objectives</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Clause 7: Support</p>
                <p className="text-sm text-gray-600">Resources, competence, awareness, and documentation</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Clause 8: Operation</p>
                <p className="text-sm text-gray-600">Product/service planning, design, production, and delivery</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-medium text-gray-900">Clause 9: Performance Evaluation</p>
                <p className="text-sm text-gray-600">Monitoring, internal audits, and management review</p>
              </div>
            </div>
          </div>

          <p>
            Whether you&apos;re a small business, manufacturing company, or service provider in Malaysia, ISO 9001 helps you
            streamline operations, reduce errors, ensure customer satisfaction, and build lasting trust with customers and partners.
            Learn more about the <a href="/iso-9001-benefits" className="text-primary-600 hover:underline">benefits of ISO 9001 certification</a>.
          </p>
        </div>

        <div className="mt-10 p-6 bg-primary-50 rounded-xl border border-primary-100">
          <p className="text-primary-800 text-center font-medium">
            Over 1 million organizations worldwide are ISO 9001 certified, including thousands in Malaysia
          </p>
        </div>
      </div>
    </section>
  )
}
