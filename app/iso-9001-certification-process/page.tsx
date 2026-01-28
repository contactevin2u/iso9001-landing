import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'ISO 9001 Certification Process | Step-by-Step Guide',
  description: 'Complete guide to the ISO 9001 certification process. Learn each step from gap analysis to certification audit, with timelines and what to expect at each stage.',
  keywords: ['ISO 9001 certification process', 'how to get ISO 9001', 'ISO 9001 steps', 'QMS implementation'],
  openGraph: {
    title: 'ISO 9001 Certification Process | Step-by-Step Guide',
    description: 'Complete guide to the ISO 9001 certification process. Learn each step from gap analysis to certification audit.',
    url: 'https://iso9001.my/iso-9001-certification-process',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 9001 Certification Process | Step-by-Step Guide',
    description: 'Complete guide to the ISO 9001 certification process.',
  },
  alternates: {
    canonical: 'https://iso9001.my/iso-9001-certification-process',
  },
}

export default function ISO9001CertificationProcess() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Certification Process', href: '/iso-9001-certification-process' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 9001 Certification Process
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive guide to achieving ISO 9001 certification. Understand every step of the journey,
              from initial assessment to successful certification and beyond.
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2 mt-0">Typical Timeline: 30 Days</h2>
                <p className="text-gray-600 mb-0">
                  With our streamlined process, most organizations achieve certification within 30 days.
                  Our efficient approach ensures you get certified quickly without compromising on quality.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Phase 1: Initial Assessment
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 1: Free Consultation (Day 1)
              </h3>
              <p className="text-gray-600 mb-4">
                The certification journey begins with a free initial consultation where our ISO consultants:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Understand your business operations and organizational context</li>
                <li>Review your current quality practices and documentation</li>
                <li>Explain the ISO 9001:2015 requirements and certification process</li>
                <li>Discuss your timeline expectations and business drivers</li>
                <li>Provide a detailed proposal including scope, timeline, and investment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 2: Gap Analysis (Days 2-4)
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive gap analysis compares your current practices against ISO 9001:2015 requirements:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Review existing quality documentation and records</li>
                <li>Interview key personnel about current practices</li>
                <li>Map your key processes and their interactions</li>
                <li>Identify quality controls already in place</li>
                <li>Document gaps and prioritize actions for closure</li>
                <li>Deliver gap analysis report with recommendations</li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-600 mb-0">
                  <strong>Deliverable:</strong> Gap Analysis Report detailing current status, gaps identified,
                  and recommended actions with priorities.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Phase 2: QMS Development
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 3: Quality Policy Development (Days 5-6)
              </h3>
              <p className="text-gray-600 mb-4">
                Develop a quality policy that reflects your organization&apos;s commitment:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Draft policy appropriate to your organization&apos;s purpose and context</li>
                <li>Include commitments to meeting requirements and continual improvement</li>
                <li>Ensure alignment with business strategy and customer expectations</li>
                <li>Obtain top management endorsement and approval</li>
                <li>Plan communication to all employees</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 4: Process Mapping (Days 7-8)
              </h3>
              <p className="text-gray-600 mb-4">
                Identify and document your key business processes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Map all processes needed for the QMS</li>
                <li>Determine inputs, outputs, and interactions</li>
                <li>Identify process owners and responsibilities</li>
                <li>Establish criteria and methods for process control</li>
                <li>Determine resources needed for each process</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 5: Risk Assessment (Days 9-10)
              </h3>
              <p className="text-gray-600 mb-4">
                Implement risk-based thinking across your organization:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Identify risks and opportunities for each key process</li>
                <li>Evaluate likelihood and impact of risks</li>
                <li>Determine actions to address significant risks</li>
                <li>Identify opportunities for improvement</li>
                <li>Integrate risk management into QMS processes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 6: Documentation Development (Days 11-15)
              </h3>
              <p className="text-gray-600 mb-4">
                Develop the required QMS documentation:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Quality Manual (optional but recommended)</li>
                <li>Documented procedures for key processes</li>
                <li>Work instructions where needed</li>
                <li>Forms, checklists, and records templates</li>
                <li>Training materials and competency records</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Phase 3: Implementation
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 7: Training and Awareness (Days 16-18)
              </h3>
              <p className="text-gray-600 mb-4">
                Ensure all personnel understand their quality responsibilities:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Quality awareness training for all employees</li>
                <li>Role-specific training for personnel affecting quality</li>
                <li>Internal auditor training for audit team members</li>
                <li>Management briefings on QMS requirements</li>
                <li>Process-specific training as needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 8: Operational Implementation (Days 19-22)
              </h3>
              <p className="text-gray-600 mb-4">
                Put the QMS into practice across the organization:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Implement documented processes and controls</li>
                <li>Establish monitoring and measurement systems</li>
                <li>Set up quality metrics and KPIs</li>
                <li>Begin collecting records and evidence of implementation</li>
                <li>Monitor progress against quality objectives</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Phase 4: Verification
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 9: Internal Audit (Days 23-25)
              </h3>
              <p className="text-gray-600 mb-4">
                Conduct a thorough internal audit to verify QMS effectiveness:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Plan and schedule audit activities covering all QMS elements</li>
                <li>Conduct audits using trained internal auditors</li>
                <li>Identify nonconformities and improvement opportunities</li>
                <li>Document audit findings and communicate to relevant managers</li>
                <li>Ensure corrective actions are implemented and verified</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 10: Management Review (Day 26)
              </h3>
              <p className="text-gray-600 mb-4">
                Top management reviews the QMS to ensure continuing suitability:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Review status of actions from previous reviews</li>
                <li>Evaluate changes affecting the QMS</li>
                <li>Review quality performance data and customer feedback</li>
                <li>Assess resource adequacy and improvement opportunities</li>
                <li>Make decisions and record actions for improvement</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Phase 5: Certification
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 11: Stage 1 Audit (Days 27-28)
              </h3>
              <p className="text-gray-600 mb-4">
                The certification body conducts a documentation review:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Review QMS documentation for conformance to ISO 9001</li>
                <li>Evaluate site conditions and readiness for Stage 2</li>
                <li>Review understanding of requirements and key processes</li>
                <li>Identify any areas requiring attention before Stage 2</li>
                <li>Schedule Stage 2 audit date</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 12: Stage 2 Audit (Days 29-30)
              </h3>
              <p className="text-gray-600 mb-4">
                The certification body verifies implementation effectiveness:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Verify QMS is effectively implemented and maintained</li>
                <li>Interview personnel at all levels</li>
                <li>Review records and evidence of conformance</li>
                <li>Verify process controls are in place and effective</li>
                <li>Assess internal audit and management review processes</li>
                <li>Issue audit report with findings and recommendation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 13: Certification Decision
              </h3>
              <p className="text-gray-600 mb-4">
                Following a successful Stage 2 audit:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Certification body reviews audit findings</li>
                <li>Any nonconformities must be addressed with corrective actions</li>
                <li>Certification decision made by independent reviewer</li>
                <li>ISO 9001 certificate issued (valid for 3 years)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                After Certification: Maintaining Your QMS
              </h2>
              <p className="text-gray-600 mb-4">
                Certification is just the beginning. To maintain your ISO 9001 certification:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Surveillance Audits:</strong> Annual audits by certification body (Years 1 & 2)</li>
                <li><strong>Recertification Audit:</strong> Full audit at end of 3-year cycle</li>
                <li><strong>Continual Improvement:</strong> Ongoing enhancement of quality performance</li>
                <li><strong>Internal Audits:</strong> Regular verification of QMS effectiveness</li>
                <li><strong>Management Reviews:</strong> Periodic top management evaluation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Common Challenges and How We Help
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Resource Constraints</h3>
                  <p className="text-sm text-gray-600">We provide practical, right-sized solutions that work within your available resources.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Complex Documentation</h3>
                  <p className="text-sm text-gray-600">Our consultants develop clear, usable documentation tailored to your operations.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Employee Buy-in</h3>
                  <p className="text-sm text-gray-600">We deliver engaging training that builds genuine quality awareness.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Process Complexity</h3>
                  <p className="text-sm text-gray-600">Experience across industries helps us simplify even complex processes.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Start Your Certification Journey Today
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Book a free consultation to discuss your certification timeline and get a customized proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/iso-9001-cost-malaysia"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  View Pricing
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
