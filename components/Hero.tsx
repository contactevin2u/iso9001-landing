export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          ISO 9001 Certification
          <span className="block text-primary-600">Made Simple</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          We guide your business through every step of ISO 9001 certification.
          Build customer trust and improve your operations with a proven quality management system.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Speak to an ISO Consultant
        </a>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">500+</div>
            <div className="text-sm text-gray-500">Clients Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">98%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600">50+</div>
            <div className="text-sm text-gray-500">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  )
}
