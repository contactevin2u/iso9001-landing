const answers: { question: string; answer: string }[] = [
  {
    question: 'How much does ISO 9001 certification cost in Malaysia?',
    answer:
      'ISO 9001 certification consulting in Malaysia costs from RM 13,000 for SMEs with 5–30 employees. The Professional package for organizations with 30–100 employees is RM 22,000, and Enterprise packages for 100+ employees are custom-quoted. These fees cover gap analysis, full QMS documentation, staff training, internal audit and certification audit preparation. Certification body audit fees are charged separately, typically RM 3,000 to RM 8,000 depending on organization size.',
  },
  {
    question: 'How long does ISO 9001 certification take in Malaysia?',
    answer:
      'ISO 9001 certification timelines in Malaysia depend on your organisation’s readiness, size and scope, and on the date the certification body schedules the audit. The timeline is agreed with you after the gap analysis. As consultants, we handle the documentation, process setup and audit preparation with your team.',
  },
  {
    question: 'What is the ISO 9001 certification process?',
    answer:
      'ISO 9001 certification in Malaysia follows five steps: (1) a free initial consultation, followed by a gap analysis of your current practices, (2) QMS documentation development, (3) implementation and staff training, (4) internal audit and management review, and (5) the certification body audit — Stage 1 reviews your documentation and Stage 2 verifies implementation on-site. Accredited certification bodies include SIRIM QAS, BSI, TUV, SGS, Bureau Veritas, DNV and Lloyd’s Register.',
  },
  {
    question: 'Who needs ISO 9001 certification in Malaysia?',
    answer:
      'ISO 9001 is often requested by larger buyers and in tenders, including government, GLC and MNC supply-chain procurement in Malaysia. Requirements vary by buyer and scheme, so check the specific tender or vendor registration you are targeting. There are no prerequisites: organizations of any size and industry can pursue certification.',
  },
]

const answersBm: { question: string; answer: string }[] = [
  {
    question: 'Berapakah kos pensijilan ISO 9001 di Malaysia?',
    answer:
      'Kos perundingan pensijilan ISO 9001 di Malaysia bermula dari RM 13,000 untuk PKS (5–30 pekerja). Pakej Professional untuk syarikat 30–100 pekerja ialah RM 22,000. Harga ini merangkumi analisis jurang, dokumentasi QMS lengkap, latihan kakitangan, audit dalaman dan persediaan audit pensijilan. Yuran badan pensijilan (SIRIM, BSI, TUV, SGS) dikenakan secara berasingan, biasanya RM 3,000 hingga RM 8,000.',
  },
  {
    question: 'Berapa lama tempoh untuk mendapatkan sijil ISO 9001?',
    answer:
      'Tempoh pensijilan bergantung pada tahap kesediaan syarikat anda dan tarikh audit yang ditetapkan oleh badan pensijilan. Jadual kerja dipersetujui bersama anda selepas analisis jurang. Konsultasi pertama adalah percuma: hubungi kami melalui WhatsApp di +60 10-206 2070.',
  },
]

export default function AnswerBlock() {
  return (
    <section id="quick-answers" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto [&>*]:max-w-3xl">
        <h2 className="text-3xl sm:text-4xl mb-4">
          ISO 9001 certification in Malaysia: quick answers
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Direct answers to the questions Malaysian businesses ask most before starting ISO 9001
          certification.
        </p>

        <div className="space-y-8">
          {answers.map((item) => (
            <div key={item.question}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-gray-200" lang="ms-MY">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Soalan Lazim dalam Bahasa Malaysia
          </h3>
          <div className="space-y-8">
            {answersBm.map((item) => (
              <div key={item.question}>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h4>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
