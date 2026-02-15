import WhatsAppLink from '@/components/WhatsAppLink'

export default function Founder() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 text-sm font-medium rounded-full mb-4">
            Founder&apos;s Direct Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            You Work Directly With the Founder, Not a Junior Consultant
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlike large consulting firms that assign fresh graduates to your project,
            at AA Alive every client works directly with founder Evin Lim and our senior team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Malaysian Businesses Trust Evin Lim
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">8+ Years of ISO Certification Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Founded AA Alive Sdn Bhd in 2016. Personally guided hundreds of Malaysian businesses
                    through ISO 9001, ISO 14001, and ISO 45001 certification.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">500+ Companies Certified Successfully</h4>
                  <p className="text-gray-600 text-sm">
                    From 5-person workshops to 500-employee factories. Manufacturing, construction,
                    IT, healthcare, food processing, logistics — we&apos;ve done it all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">30-Day Fast-Track Certification</h4>
                  <p className="text-gray-600 text-sm">
                    Our streamlined methodology gets you certified in 30 days, not 6-12 months
                    like traditional consultants. We handle the heavy lifting so your team isn&apos;t disrupted.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Direct WhatsApp Access to the Founder</h4>
                  <p className="text-gray-600 text-sm">
                    No call centers, no ticket systems. You chat directly with Evin on WhatsApp.
                    Questions answered within hours, not days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-primary-100">
                <svg className="w-14 h-14 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Evin Lim</h3>
              <p className="text-primary-600 font-medium">Founder & Managing Director</p>
              <p className="text-sm text-gray-500 mb-2">AA Alive Sdn Bhd (1204108-D)</p>
              <a
                href="https://www.linkedin.com/in/evinlim/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <blockquote className="text-gray-600 italic mb-6 border-l-4 border-primary-300 pl-4">
              &ldquo;I started AA Alive because I saw Malaysian SMEs struggling with expensive, slow ISO
              consultants who overcomplicate the process. ISO 9001 doesn&apos;t have to take 6 months or
              cost RM 50,000. My team and I have proven that you can get certified properly in 30 days
              at a fair price — and actually improve your business in the process.&rdquo;
            </blockquote>

            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-100">
              <p className="text-sm text-gray-600 italic">
                &ldquo;Evin personally guided us through the entire process. His hands-on approach
                and deep knowledge made what seemed overwhelming feel manageable. We got certified
                in under 30 days.&rdquo;
              </p>
              <p className="text-xs text-gray-500 mt-2 font-medium">
                — Operations Director, Manufacturing Company (Selangor)
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-primary-600">8+</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary-600">500+</div>
                <div className="text-xs text-gray-500">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary-600">98%</div>
                <div className="text-xs text-gray-500">Pass Rate</div>
              </div>
            </div>

            <WhatsAppLink className="flex items-center justify-center gap-2 w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat With Evin Directly
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  )
}
