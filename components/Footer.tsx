import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold text-white leading-tight">ISO 9001</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Quality Management Begins Here</div>
            </div>
            <p className="text-sm">
              Your trusted partner for ISO 9001 certification in Malaysia.
              We help businesses achieve quality excellence.
            </p>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#what-is-iso" className="hover:text-white transition-colors">What is ISO 9001</a></li>
              <li><a href="/#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="/#process" className="hover:text-white transition-colors">Certification Process</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/iso-9001-certification-malaysia" className="hover:text-white transition-colors">
                  ISO 9001 Malaysia
                </Link>
              </li>
              <li>
                <Link href="/iso-9001-benefits" className="hover:text-white transition-colors">
                  ISO 9001 Benefits
                </Link>
              </li>
              <li>
                <Link href="/iso-9001-requirements" className="hover:text-white transition-colors">
                  ISO 9001 Requirements
                </Link>
              </li>
              <li>
                <Link href="/iso-9001-certification-process" className="hover:text-white transition-colors">
                  Certification Process
                </Link>
              </li>
              <li>
                <Link href="/iso-9001-cost-malaysia" className="hover:text-white transition-colors">
                  Certification Cost
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@evin2u.com" className="hover:text-white transition-colors">
                  contact@evin2u.com
                </a>
              </li>
              <li>
                <a href="tel:+601124102070" className="hover:text-white transition-colors">
                  +601124102070
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/601124102070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                1, Jalan Perusahaan 4,<br />
                Kawasan Industri Batu Caves,<br />
                68100 Batu Caves, Selangor
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ISO9001 Malaysia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
