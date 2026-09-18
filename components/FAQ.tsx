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
      'We help you compare quotes from accredited CBs (SIRIM, BSI, TUV, SGS, etc.)',
    ],
    schemaAnswer: 'ISO 9001 certification consulting in Malaysia starts from RM 13,000 for SMEs (5-30 employees). The Professional package for medium businesses (30-100 employees) is RM 22,000, and Enterprise packages are custom-priced. Prices include gap analysis, full documentation, staff training, internal audit, and certification audit preparation. CB audit fees are separate (RM 3,000 - RM 8,000).',
  },
  {
    question: 'How long does it take to get ISO 9001 certified in Malaysia?',
    summary: 'There is no fixed timeline. It depends on your readiness and on the certification body’s audit date:',
    bullets: [
      'Your starting point: which quality processes and records are already in place',
      'Organization size, scope and number of sites',
      'How quickly your team reviews and approves documentation',
      'The dates the certification body schedules for the Stage 1 and Stage 2 audits',
      'We agree the project timeline with you after the gap analysis',
      'We handle the documentation, process setup and audit preparation with your team',
    ],
    schemaAnswer: 'ISO 9001 certification timelines in Malaysia depend on your organisation’s readiness, size and scope, and on the dates the certification body schedules the audits. We agree the project timeline with you after the gap analysis, and handle documentation, process setup and audit preparation with your team.',
  },
  {
    question: 'What is ISO 9001 certification and why do Malaysian businesses pursue it?',
    summary: 'ISO 9001 is the world\'s most recognized Quality Management System (QMS) standard. Malaysian businesses pursue it because:',
    bullets: [
      'It is often requested by larger buyers and in tenders, including government, GLC and MNC supply-chain procurement',
      'It gives customers independent, accredited evidence of how you manage quality',
      'Documented processes help reduce errors, rework and waste',
      'Requirements vary by buyer and tender, so check the specific tender or vendor registration you are targeting',
    ],
    schemaAnswer: 'ISO 9001 is the world\'s most recognized Quality Management System (QMS) standard. Malaysian businesses pursue it because it is often requested by larger buyers and in tenders, it gives customers independent evidence of how quality is managed, and documented processes help reduce errors and rework.',
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
    question: 'What about ISO 9001:2026 — should I certify to 2015 or 2026?',
    summary: 'ISO published ISO 9001:2026 in September 2026, but certification today is still to ISO 9001:2015. Here is what that means for you:',
    bullets: [
      'ISO 9001:2026 replaces ISO 9001:2015 after a three-year transition period (to around September 2029)',
      'Certification bodies must first be accredited to audit the new version, so 2026 certificates are expected from around mid-2027',
      'An ISO 9001:2015 certificate remains valid during the transition period',
      'The 2026 revision keeps the same 10-clause structure, so a well-built 2015 QMS carries over',
      'We build your QMS to ISO 9001:2015 and prepare it for the 2026 transition',
    ],
    schemaAnswer: 'ISO published ISO 9001:2026 in September 2026, with a three-year transition period (to around September 2029). Certification bodies must first be accredited to audit the new version, so certification today is still to ISO 9001:2015, and 2015 certificates remain valid during the transition. The 2026 revision keeps the same 10-clause structure, so a well-built ISO 9001:2015 QMS carries over to 2026.',
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
      'We can support you in maintaining your QMS and preparing for surveillance audits',
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
      'Many Malaysian companies start with ISO 9001 as their foundation, then add others',
      'We can implement all three as a single Integrated Management System (IMS)',
    ],
    schemaAnswer: 'ISO 9001 covers Quality Management, ISO 14001 covers Environmental Management, and ISO 45001 covers Occupational Health & Safety. All three share the same Annex SL structure and can be integrated into a single management system.',
  },
  {
    question: 'Which certification bodies (CBs) do you work with in Malaysia?',
    summary: 'We prepare clients for audits by the major accredited certification bodies in Malaysia, including:',
    bullets: [
      'SIRIM QAS International',
      'BSI (British Standards Institution)',
      'TUV SUD and TUV Rheinland',
      'SGS Malaysia',
      'Bureau Veritas',
      'DNV and Lloyd\'s Register',
      'All recommended CBs are accredited by recognized bodies (DSM Malaysia, UKAS UK)',
      'We help you choose a CB based on your industry, budget, and international recognition needs',
    ],
    schemaAnswer: 'We prepare clients for audits by the major accredited certification bodies in Malaysia, including SIRIM QAS, BSI, TUV SUD, TUV Rheinland, SGS, Bureau Veritas, DNV, and Lloyd\'s Register. All are accredited by recognized accreditation bodies.',
  },
  {
    question: 'Does ISO 9001 help with government tenders in Malaysia?',
    summary: 'ISO 9001 is often requested in Malaysian government and GLC procurement, but requirements vary by tender:',
    bullets: [
      'Public works and infrastructure tenders often ask contractors for ISO 9001',
      'GLCs and larger buyers often ask vendors for ISO 9001 certification',
      'Always check the specific tender document or vendor registration requirements',
      'Certification helps you meet a tender requirement; the award decision rests with the buyer',
    ],
    schemaAnswer: 'ISO 9001 certification is often requested in Malaysian government and GLC tenders and by larger buyers. Requirements vary by tender, so check the specific tender document or vendor registration. Certification helps you meet that requirement; the award decision rests with the buyer.',
  },
  {
    question: 'What happens during the ISO 9001 certification audit?',
    summary: 'The certification audit has two stages conducted by an accredited certification body:',
    bullets: [
      'Stage 1 (Documentation Review): Auditor reviews your QMS documentation for completeness — typically 1 day for SMEs',
      'Stage 2 (Implementation Audit): On-site verification that processes are followed in practice — 1-3 days depending on size',
      'Auditors interview staff, observe operations, and check records',
      'Minor non-conformities: you get 90 days to address them',
      'Preparation beforehand helps reduce audit findings',
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
      <div className="max-w-6xl mx-auto [&>*]:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl mb-4">
          ISO 9001 certification in Malaysia: frequently asked questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Everything Malaysian businesses need to know about ISO 9001 certification, costs, timeline, and process.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-5 sm:px-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
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

        <div className="mt-10">
          <p className="text-gray-600 mb-4">Still have questions about ISO 9001 certification?</p>
          <a
            href="https://wa.me/60102062070?text=Hi%2C%20I%20have%20a%20question%20about%20ISO%209001%20certification."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
