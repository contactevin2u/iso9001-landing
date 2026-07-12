const answers: { question: string; answer: string }[] = [
  {
    question: 'How much does ISO 9001 certification cost in Malaysia?',
    answer:
      'ISO 9001 certification consulting in Malaysia costs from RM 13,000 for SMEs with 5–30 employees. The Professional package for organizations with 30–100 employees is RM 22,000, and Enterprise packages for 100+ employees are custom-quoted. These fees cover gap analysis, full QMS documentation, staff training, internal audit and certification audit preparation. Certification body audit fees are charged separately, typically RM 3,000 to RM 8,000 depending on organization size.',
  },
  {
    question: 'How long does ISO 9001 certification take in Malaysia?',
    answer:
      'Most Malaysian SMEs achieve ISO 9001 certification within 30 days using our fast-track process; medium-sized organizations typically take 30–45 days. The industry average with traditional consultants is 6–12 months. The difference comes from consultants handling the documentation, process setup and audit preparation rather than leaving it to your team.',
  },
  {
    question: 'What is the ISO 9001 certification process?',
    answer:
      'ISO 9001 certification in Malaysia follows five steps: (1) a free consultation and gap analysis of your current practices, (2) QMS documentation development, (3) implementation and staff training, (4) internal audit and management review, and (5) the certification body audit — Stage 1 reviews your documentation and Stage 2 verifies implementation on-site. Accredited certification bodies include SIRIM QAS, BSI, TUV, SGS, Bureau Veritas, DNV and Lloyd’s Register.',
  },
  {
    question: 'Who needs ISO 9001 certification in Malaysia?',
    answer:
      'Any Malaysian company bidding for government tenders, GLC contracts or MNC supply-chain work benefits from ISO 9001 — many procurements require it outright. It is required for CIDB G7 registration in construction and for Petronas vendor registration in oil and gas. There are no prerequisites: organizations of any size and industry can be certified.',
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
      'Melalui proses fast-track kami, kebanyakan PKS di Malaysia boleh disahkan dalam tempoh 30 hari — jauh lebih pantas berbanding purata industri 6 hingga 12 bulan. Konsultasi pertama adalah percuma: hubungi kami melalui WhatsApp di +60 10-206 2070.',
  },
]

export default function AnswerBlock() {
  return (
    <section id="quick-answers" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 9001 Certification Malaysia — Quick Answers
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
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
