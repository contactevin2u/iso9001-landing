'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold text-primary-700 leading-tight">ISO 9001</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500">Quality Management Begins Here</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <a href="/#what-is-iso" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              What is ISO 9001
            </a>
            <a href="/#benefits" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Benefits
            </a>
            <a href="/#process" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Process
            </a>
            <a href="/#pricing" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Pricing
            </a>

            <div className="relative">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onBlur={() => setTimeout(() => setIsResourcesOpen(false), 200)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors text-sm"
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                aria-controls="resources-menu"
              >
                Resources
                <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div id="resources-menu" role="menu" className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    href="/iso-9001-certification-malaysia"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    ISO 9001 Certification Malaysia
                  </Link>
                  <Link
                    href="/iso-9001-benefits"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Benefits of ISO 9001
                  </Link>
                  <Link
                    href="/iso-9001-requirements"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    ISO 9001 Requirements
                  </Link>
                  <Link
                    href="/iso-9001-certification-process"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Certification Process
                  </Link>
                  <Link
                    href="/iso-9001-cost-malaysia"
                    role="menuitem"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Certification Cost
                  </Link>
                </div>
              )}
            </div>

            <a href="/#contact" className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://wa.me/601124102070?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20ISO%209001%20certification."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Free Consultation
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              <a href="/#what-is-iso" onClick={() => setIsOpen(false)} className="text-gray-600">What is ISO 9001</a>
              <a href="/#benefits" onClick={() => setIsOpen(false)} className="text-gray-600">Benefits</a>
              <a href="/#process" onClick={() => setIsOpen(false)} className="text-gray-600">Process</a>
              <a href="/#pricing" onClick={() => setIsOpen(false)} className="text-gray-600">Pricing</a>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-3">Resources</div>
                <div className="flex flex-col gap-3 pl-2">
                  <Link href="/iso-9001-certification-malaysia" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    ISO 9001 Certification Malaysia
                  </Link>
                  <Link href="/iso-9001-benefits" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    Benefits of ISO 9001
                  </Link>
                  <Link href="/iso-9001-requirements" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    ISO 9001 Requirements
                  </Link>
                  <Link href="/iso-9001-certification-process" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    Certification Process
                  </Link>
                  <Link href="/iso-9001-cost-malaysia" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    Certification Cost
                  </Link>
                </div>
              </div>

              <a href="/#contact" onClick={() => setIsOpen(false)} className="text-primary-600 font-medium mt-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
