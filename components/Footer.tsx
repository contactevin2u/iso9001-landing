export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-xl font-bold text-white leading-tight">ISO 9001</div>
              <div className="text-[8px] uppercase tracking-widest text-gray-500">Quality Management Begins Here</div>
            </div>
            <p className="text-sm">
              Your trusted partner for ISO 9001 certification.
              We help businesses achieve quality excellence.
            </p>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#what-is-iso" className="hover:text-white transition-colors">What is ISO 9001</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Certification Process</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@iso9001pro.com" className="hover:text-white transition-colors">
                  info@iso9001pro.com
                </a>
              </li>
              <li>
                <a href="tel:+60123456789" className="hover:text-white transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ISO9001. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
