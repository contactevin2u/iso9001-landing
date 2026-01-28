'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is ISO 9001 certification and why is it important for Malaysian businesses?',
    answer: 'ISO 9001 is an internationally recognized standard for Quality Management Systems (QMS). For Malaysian businesses, it demonstrates commitment to quality, helps meet customer requirements, and opens doors to international markets and government procurement opportunities. Many multinational corporations and government agencies require suppliers to be ISO 9001 certified.',
  },
  {
    question: 'How long does it take to get ISO 9001 certified in Malaysia?',
    answer: 'With our streamlined process, most organizations achieve certification within 30 days. The exact timeline depends on your organization\'s size, complexity, and current quality practices. Our efficient approach ensures you get certified quickly without compromising on quality.',
  },
  {
    question: 'What is the cost of ISO 9001 certification in Malaysia?',
    answer: 'Our ISO 9001 certification consulting packages start from RM 13,000 for small to medium enterprises. This includes gap analysis, documentation development, implementation support, internal audit training, and audit preparation. The final cost depends on your organization\'s size, number of sites, and complexity of operations. Certification body audit fees are separate.',
  },
  {
    question: 'What are the key requirements of ISO 9001:2015?',
    answer: 'ISO 9001:2015 requires organizations to: establish a quality policy, understand customer requirements, set quality objectives, implement process controls, conduct monitoring and measurement, perform internal audits, and undergo management review. The standard follows the Plan-Do-Check-Act (PDCA) cycle for continuous improvement and emphasizes risk-based thinking.',
  },
  {
    question: 'Do I need any prerequisites before getting ISO 9001?',
    answer: 'No, ISO 9001 is a standalone certification and does not require any prerequisites. However, if you plan to implement other standards like ISO 14001 (Environmental) or ISO 45001 (Health & Safety), the implementation will be smoother as all these standards share similar management system structures (Annex SL). Many organizations choose to implement an Integrated Management System (IMS).',
  },
  {
    question: 'How often do I need to renew ISO 9001 certification?',
    answer: 'ISO 9001 certification is valid for 3 years. During this period, you\'ll have annual surveillance audits (usually in years 1 and 2) to verify ongoing compliance. At the end of the 3-year cycle, a recertification audit is required. We provide ongoing support to help you maintain certification and prepare for each audit.',
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
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Everything you need to know about ISO 9001 certification in Malaysia
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
