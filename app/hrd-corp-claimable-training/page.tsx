import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import WhatsAppLink from '@/components/WhatsAppLink'

// HIDDEN PAGE — HRD Corp RTP registration in progress (Jul 2026).
// noindex + not in sitemap + not linked from any nav/footer.
// TO ACTIVATE when RTP registration completes:
//   1. Remove the robots noindex below
//   2. Add the route to public/sitemap.xml
//   3. Link from Footer/services nav
//   4. Re-add "HRD Corp Claimable Training" headlines to the Google Ads RSAs
export const metadata: Metadata = {
  title: 'HRD Corp Claimable ISO Training Malaysia | AA Alive',
  description:
    'HRD Corp claimable ISO training for Malaysian companies — ISO 9001, 14001, 45001 & 13485 awareness and internal auditor courses, bundled with implementation.',
  robots: { index: false, follow: false },
}

export default function HrdCorpTrainingPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            HRD Corp Claimable ISO Training in Malaysia
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Your company already pays the HRD Corp levy — 1% of monthly wages for employers with 10
            or more Malaysian staff. Our ISO training programmes are designed to be{' '}
            <strong>HRD Corp claimable</strong>, which means the course fee is paid directly from
            your levy balance. Your net cash cost is effectively zero.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Training programmes we deliver
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>ISO 9001:2015 awareness &amp; internal auditor training</li>
            <li>ISO 14001:2015 environmental management system training</li>
            <li>ISO 45001:2018 occupational health &amp; safety training</li>
            <li>ISO 13485:2016 medical device QMS &amp; GDPMD training</li>
            <li>Integrated management system (IMS) training for multi-standard teams</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Training bundled into your implementation
          </h2>
          <p className="text-gray-700 mb-4">
            Unlike standalone course providers, we build competency-based training directly into
            your ISO implementation — your team learns on your own SOPs and documentation, not
            generic slides. The result: staff who can actually run the management system after
            certification, and training spend that comes from your levy instead of your budget.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How claiming works</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>We register the course and submit the grant application via HRD Corp e-TRiS.</li>
            <li>HRD Corp approves the grant (typical SLA: 48 hours).</li>
            <li>Training is delivered at your site or ours.</li>
            <li>HRD Corp pays us directly from your levy — no reimbursement paperwork for you.</li>
          </ol>
          <div className="mt-10 bg-primary-50 border border-primary-200 rounded-xl p-6">
            <p className="text-gray-800 font-medium mb-4">
              Want ISO training that costs you nothing net of levy? Chat with us about bundling HRD
              Corp claimable training into your certification project.
            </p>
            <WhatsAppLink className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
              WhatsApp Us About HRD Training
            </WhatsAppLink>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
