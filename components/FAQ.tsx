'use client'

import { useState } from 'react'

const faqs: { question: string; summary: string; bullets: string[]; schemaAnswer: string }[] = [
  {
    question: 'How much does ISO 9001 certification cost in Malaysia in 2026?',
    summary: 'ISO 9001 certification consulting in Malaysia starts from RM 13,000 for SMEs. Here is the full pricing breakdown:',
    bullets: [
      'SME Package (5-30 employees): From RM 13,000',
      'Professional Package (30-100 employees): RM 22,000',
      'Enterprise Package (100+ employees): Custom pricing',
      'Includes: gap analysis, full documentation, staff training, internal audit, and audit preparation',
      'Certification body (CB) audit fees are separate: RM 3,000 - RM 8,000 depending on organization size',
      'We help you select the most cost-effective accredited CB (SIRIM, BSI, TUV, SGS, etc.)',
    ],
    schemaAnswer: 'ISO 9001 certification consulting in Malaysia starts from RM 13,000 for SMEs (5-30 employees). The Professional package for medium businesses (30-100 employees) is RM 22,000, and Enterprise packages are custom-priced. Prices include gap analysis, full documentation, staff training, internal audit, and certification audit preparation. CB audit fees are separate (RM 3,000 - RM 8,000).',
  },
  {
    question: 'How long does it take to get ISO 9001 certified in Malaysia?',
    summary: 'Most SMEs achieve ISO 9001 certification within 30 days using our fast-track process. Timeline breakdown:',
    bullets: [
      'SMEs (under 30 employees): 30 days',
      'Medium businesses (30-100 employees): 30-45 days',
      'Industry average with other consultants: 6-12 months',
      'We handle the heavy lifting — documentation, process setup, and thorough audit preparation',
      'Your team spends minimal time away from daily operations',
      'Exact timeline depends on organization size, complexity, and document review speed',
    ],
    schemaAnswer: 'Most SMEs achieve ISO 9001 certification within 30 days using our fast-track process. Medium-sized organizations typically take 30-45 days. This is significantly faster than the industry average of 6-12 months because we handle documentation, process setup, and audit preparation.',
  },
  {
    question: 'What is ISO 9001 certification and why does my Malaysian business need it?',
    summary: 'ISO 9001 is the world\'s most recognized Quality Management System (QMS) standard. Malaysian businesses need it because:',
    bullets: [
      'Government tenders, GLC contracts, and MNC supply chains require ISO 9001 — without it, you\'re automatically disqualified',
      'Builds instant trust and credibility with customers as independent proof of quality',
      'Improves operations — documented processes reduce errors, rework, and waste by 15-25%',
      'Required for CIDB G7 registration (construction) and Petronas vendor registration (oil & gas)',
      'Qualifies you for various MITI incentives and MDEC grants',
      '84% of Malaysian buyers prefer to work with ISO 9001 certified suppliers',
    ],
    schemaAnswer: 'ISO 9001 is the world\'s most recognized Quality Management System (QMS) standard. Malaysian businesses need it because many government tenders and GLC contracts require it, it builds customer trust, improves operations by 15-25%, and is required for CIDB G7 and Petronas vendor registration.',
  },
  {
    question: 'What are the key requirements of ISO 9001:2015?',
    summary: 'ISO 9001:2015 has 10 clauses, with clauses 4-10 containing certification requirements:',
    bullets: [
      'Clause 4 (Context): Understand your organization, stakeholders, and QMS scope',
      'Clause 5 (Leadership): Top management commitment and quality policy',
      'Clause 6 (Planning): Risk-based thinking and quality objectives',
      'Clause 7 (Support): Resources, competence, awareness, and documented information',
      'Clause 8 (Operation): Planning, design, production, and delivery controls',
      'Clause 9 (Performance Evaluation): Monitoring, internal audits, and management review',
      'Clause 10 (Improvement): Corrective actions and continual improvement',
      'The standard follows the Plan-Do-Check-Act (PDCA) cycle with emphasis on risk-based thinking',
    ],
    schemaAnswer: 'ISO 9001:2015 has 10 clauses. Clauses 4-10 contain requirements: Context of the Organization, Leadership, Planning, Support, Operation, Performance Evaluation, and Improvement. The standard follows the Plan-Do-Check-Act (PDCA) cycle and emphasizes risk-based thinking.',
  },
  {
    question: 'Do I need any prerequisites before getting ISO 9001?',
    summary: 'No prerequisites are needed. ISO 9001 is open to any organization of any size in any industry.',
    bullets: [
      'No previous certifications required',
      'No specific qualifications or minimum company age needed',
      'Works for any industry — manufacturing, construction, IT, services, healthcare, etc.',
      'If you plan to add ISO 14001 or ISO 45001 later, implementation is smoother since all share the same structure',
      'We support Integrated Management System (IMS) implementation covering multiple standards simultaneously',
    ],
    schemaAnswer: 'No prerequisites are needed for ISO 9001 certification. It is open to any organization of any size in any industry. No previous certifications, specific qualifications, or minimum company age is required.',
  },
  {
    question: 'How often do I need to renew ISO 9001 certification?',
    summary: 'ISO 9001 certification is valid for 3 years with annual surveillance audits:',
    bullets: [
      'Year 1: Surveillance audit (smaller scope to verify ongoing compliance)',
      'Year 2: Surveillance audit',
      'Year 3: Recertification audit (comprehensive audit to renew for another 3 years)',
      'We provide ongoing support for maintaining your QMS and preparing for audits',
      'Post-certification support included for 3-12 months depending on your package',
    ],
    schemaAnswer: 'ISO 9001 certification is valid for 3 years. You need surveillance audits in Year 1 and Year 2, and a full recertification audit in Year 3 to renew for another 3-year cycle.',
  },
  {
    question: 'What is the difference between ISO 9001 and other ISO standards like ISO 14001 and ISO 45001?',
    summary: 'Each ISO standard focuses on a different management area. Here is how they compare:',
    bullets: [
      'ISO 9001: Quality Management — ensuring products/services consistently meet customer requirements',
      'ISO 14001: Environmental Management — managing environmental impact and compliance',
      'ISO 45001: Occupational Health & Safety — protecting workers from workplace hazards',
      'All three share the same Annex SL structure, making integration straightforward',
      'Most Malaysian companies start with ISO 9001 as their foundation, then add others',
      'We can implement all three as an Integrated Management System (IMS) for maximum efficiency',
    ],
    schemaAnswer: 'ISO 9001 covers Quality Management, ISO 14001 covers Environmental Management, and ISO 45001 covers Occupational Health & Safety. All three share the same Annex SL structure and can be integrated into a single management system.',
  },
  {
    question: 'Which certification bodies (CBs) do you work with in Malaysia?',
    summary: 'We work with all major accredited certification bodies in Malaysia:',
    bullets: [
      'SIRIM QAS International',
      'BSI (British Standards Institution)',
      'TUV SUD and TUV Rheinland',
      'SGS Malaysia',
      'Bureau Veritas',
      'DNV and Lloyd\'s Register',
      'All recommended CBs are accredited by recognized bodies (DSM Malaysia, UKAS UK)',
      'We help you choose the best CB based on your industry, budget, and international recognition needs',
    ],
    schemaAnswer: 'We work with all major accredited certification bodies in Malaysia including SIRIM QAS, BSI, TUV SUD, TUV Rheinland, SGS, Bureau Veritas, DNV, and Lloyd\'s Register. All are accredited by recognized accreditation bodies.',
  },
  {
    question: 'Can ISO 9001 help my company win government tenders in Malaysia?',
    summary: 'Yes. ISO 9001 is increasingly required or preferred in Malaysian government procurement:',
    bullets: [
      'JKR (Public Works Department) tenders often require ISO 9001 for contractors',
      'CIDB G7 registration requires a quality management system',
      'Petronas and other GLCs list ISO 9001 as a mandatory vendor requirement',
      'MOF-registered companies with ISO certification score higher in tender evaluations',
      'Many state government agencies prefer ISO-certified suppliers',
      'Our clients report winning 30-40% more tenders after certification',
    ],
    schemaAnswer: 'Yes, ISO 9001 certification helps win Malaysian government tenders. It is required for CIDB G7 registration, Petronas vendor registration, and preferred in JKR and MOF procurement. Our clients report winning 30-40% more tenders after certification.',
  },
  {
    question: 'What happens during the ISO 9001 certification audit?',
    summary: 'The certification audit has two stages conducted by an accredited certification body:',
    bullets: [
      'Stage 1 (Documentation Review): Auditor reviews your QMS documentation for completeness — typically 1 day for SMEs',
      'Stage 2 (Implementation Audit): On-site verification that processes are followed in practice — 1-3 days depending on size',
      'Auditors interview staff, observe operations, and check records',
      'Minor non-conformities: you get 90 days to address them',
      'Our 98% first-time pass rate means thorough preparation — most clients pass with zero or minimal findings',
    ],
    schemaAnswer: 'The ISO 9001 certification audit has two stages: Stage 1 is a documentation review (1 day for SMEs) and Stage 2 is an on-site implementation audit (1-3 days). Auditors verify documentation completeness and that processes are followed in practice.',
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
        text: faq.schemaAnswer,
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
                  <p className="text-gray-700 font-medium mb-3">{faq.summary}</p>
                  <ul className="space-y-2">
                    {faq.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions about ISO 9001 certification?</p>
          <a
            href="https://wa.me/601124102070?text=Hi%2C%20I%20have%20a%20question%20about%20ISO%209001%20certification."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
