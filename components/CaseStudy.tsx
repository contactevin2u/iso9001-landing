export default function CaseStudy() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
            Client Success Story
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Zero Quality System to ISO 9001 Certified in 28 Days
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how a Malaysian manufacturing company transformed their operations and started
            winning government contracts within weeks of getting certified.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Precision Metal Works Sdn Bhd — Manufacturing (Selangor)
          </h3>
          <p className="text-gray-600 mb-8">
            A precision metal fabrication company with 45 employees. They were losing tender after tender to
            ISO-certified competitors despite having superior products and competitive pricing.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                Before Working With Us
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#x2022;</span>
                  <span>Lost 7 government tenders in 12 months due to no ISO certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#x2022;</span>
                  <span>12% defect rate causing costly rework and customer complaints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#x2022;</span>
                  <span>No documented processes — knowledge stuck in senior workers&apos; heads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">&#x2022;</span>
                  <span>Revenue stuck at RM 2.1M/year with no clear growth path</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-green-600 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                After 30 Days With Us
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">&#x2022;</span>
                  <span>Won first government tender worth RM 480,000 within 2 months of certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">&#x2022;</span>
                  <span>Defect rate dropped from 12% to 3% — saving RM 180,000/year in rework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">&#x2022;</span>
                  <span>All processes documented — new staff can be trained in days instead of months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">&#x2022;</span>
                  <span>Revenue grew to RM 3.8M within first year — 81% increase</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">28</div>
              <div className="text-sm text-gray-500">Days to Certify</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">81%</div>
              <div className="text-sm text-gray-500">Revenue Growth</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">RM 480K</div>
              <div className="text-sm text-gray-500">First Tender Won</div>
            </div>
            <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600">75%</div>
              <div className="text-sm text-gray-500">Less Defects</div>
            </div>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 sm:p-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Results Across Industries We&apos;ve Certified
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Manufacturing</h4>
              <p className="text-sm text-gray-600">
                Average 20% reduction in defects. Companies qualify for Petronas vendor registration
                and MITI incentives after certification.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">Construction & Engineering</h4>
              <p className="text-sm text-gray-600">
                ISO 9001 is mandatory for CIDB G7 registration. Our clients report winning
                40% more tenders post-certification.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-2">IT & Services</h4>
              <p className="text-sm text-gray-600">
                Service companies see improved SLA compliance and customer retention.
                Essential for government IT contracts and GLC partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
