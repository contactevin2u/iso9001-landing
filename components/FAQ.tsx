'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How much does ISO 9001 certification cost in Malaysia in 2026?',
    answer: 'Our ISO 9001 certification consulting packages start from RM 13,000 for SMEs (5-30 employees). The Professional package for medium businesses (30-100 employees) is RM 22,000, and Enterprise packages for larger organizations are custom-priced. These prices include everything — gap analysis, full documentation development, staff training, internal audit, and certification audit preparation. Certification body (CB) audit fees are separate and typically range from RM 3,000 - RM 8,000 depending on your organization size. We help you select the most cost-effective accredited CB (SIRIM, BSI, TUV, SGS, etc.).',
  },
  {
    question: 'How long does it take to get ISO 9001 certified in Malaysia?',
    answer: 'With our streamlined 30-day fast-track process, most SMEs achieve certification within 30 days. Medium-sized organizations typically take 30-45 days. This is significantly faster than the industry average of 6-12 months because we handle the heavy lifting — writing documentation, setting up processes, and preparing you thoroughly before the audit. Your team spends minimal time away from their daily operations. The exact timeline depends on your organization\'s size, complexity, and how quickly your team can review and approve the documents we prepare.',
  },
  {
    question: 'What is ISO 9001 certification and why does my Malaysian business need it?',
    answer: 'ISO 9001 is the world\'s most recognized Quality Management System (QMS) standard, published by the International Organization for Standardization. For Malaysian businesses, it\'s critical because: (1) Many government tenders, GLC contracts, and multinational supply chains require ISO 9001 as a prerequisite — without it, you\'re automatically disqualified. (2) It builds instant trust and credibility with customers who see the ISO 9001 certificate as proof of quality. (3) It actually improves your operations — documented processes reduce errors, rework, and waste by 15-25%. (4) It\'s required for CIDB G7 registration (construction), Petronas vendor registration (oil & gas), and various MITI incentives.',
  },
  {
    question: 'What are the key requirements of ISO 9001:2015?',
    answer: 'ISO 9001:2015 is organized into 10 clauses, with clauses 4-10 containing the certification requirements: Clause 4 (Context) — understand your organization, stakeholders, and scope. Clause 5 (Leadership) — top management commitment and quality policy. Clause 6 (Planning) — risk-based thinking, quality objectives. Clause 7 (Support) — resources, competence, awareness, documented information. Clause 8 (Operation) — planning, design, production, delivery controls. Clause 9 (Performance Evaluation) — monitoring, internal audits, management review. Clause 10 (Improvement) — corrective actions, continual improvement. The standard follows the Plan-Do-Check-Act (PDCA) cycle and emphasizes risk-based thinking. Don\'t worry — our consultants handle the complexity and translate these requirements into practical processes for your business.',
  },
  {
    question: 'Do I need any prerequisites before getting ISO 9001?',
    answer: 'No prerequisites are needed. ISO 9001 is a standalone certification open to any organization of any size in any industry. You don\'t need previous certifications, specific qualifications, or a minimum company age. However, if you plan to implement other standards like ISO 14001 (Environmental Management) or ISO 45001 (Occupational Health & Safety), the implementation is smoother because all modern ISO standards share the same High-Level Structure (Annex SL). Many of our clients choose to implement an Integrated Management System (IMS) covering multiple standards simultaneously — which we also support.',
  },
  {
    question: 'How often do I need to renew ISO 9001 certification?',
    answer: 'ISO 9001 certification is valid for 3 years. During this cycle: Year 1 — Surveillance audit (smaller scope audit to verify ongoing compliance). Year 2 — Surveillance audit. Year 3 — Recertification audit (comprehensive audit to renew your certificate for another 3 years). We provide ongoing support to help you maintain your QMS, prepare for surveillance audits, and ensure continuous improvement. Our post-certification support packages (included for 3-12 months depending on your package) cover management reviews, internal audits, and audit preparation.',
  },
  {
    question: 'What is the difference between ISO 9001 and other ISO standards like ISO 14001 and ISO 45001?',
    answer: 'ISO 9001 focuses on Quality Management — ensuring your products/services consistently meet customer requirements. ISO 14001 is for Environmental Management — managing your environmental impact and compliance. ISO 45001 covers Occupational Health & Safety — protecting your workers from hazards. All three share the same structure (Annex SL), making integration straightforward. Many Malaysian companies start with ISO 9001 as their foundation, then add ISO 14001 and ISO 45001 later. We support all three standards and can implement them as an Integrated Management System (IMS) for maximum efficiency.',
  },
  {
    question: 'Which certification bodies (CBs) do you work with in Malaysia?',
    answer: 'We work with all major accredited certification bodies in Malaysia including SIRIM QAS, BSI (British Standards Institution), TUV SUD, TUV Rheinland, SGS, Bureau Veritas, DNV, and Lloyd\'s Register. We help you choose the best CB based on your industry, budget, and whether you need international recognition. All our recommended CBs are accredited by recognized accreditation bodies (like DSM in Malaysia or UKAS in the UK), ensuring your ISO 9001 certificate is valid and recognized worldwide.',
  },
  {
    question: 'Can ISO 9001 help my company win government tenders in Malaysia?',
    answer: 'Yes, absolutely. ISO 9001 certification is increasingly required or given preference in Malaysian government procurement. Specifically: JKR (Public Works Department) tenders often require ISO 9001 for contractors. CIDB G7 registration requires a quality management system. Petronas and other GLCs list ISO 9001 as a mandatory vendor requirement. Ministry of Finance (MOF) registered companies with ISO certification score higher in tender evaluations. Many state government agencies also prefer ISO-certified suppliers. Our clients report winning 30-40% more tenders after getting certified because doors that were previously closed are now open.',
  },
  {
    question: 'What happens during the ISO 9001 certification audit?',
    answer: 'The certification audit has two stages: Stage 1 (Documentation Review) — The auditor reviews your QMS documentation (Quality Manual, procedures, policies) to verify completeness and alignment with ISO 9001:2015 requirements. This typically takes 1 day for SMEs. Stage 2 (Implementation Audit) — The auditor visits your premises to verify that your documented processes are actually being followed in practice. They interview staff, observe operations, and check records. This takes 1-3 days depending on organization size. If minor non-conformities are found, you have a set period (usually 90 days) to address them. Our 98% first-time pass rate means we prepare you thoroughly — most clients pass with zero or minimal findings.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 9001 Certification Malaysia — Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Everything Malaysian businesses need to know about ISO 9001 certification, costs, timeline, and process.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
