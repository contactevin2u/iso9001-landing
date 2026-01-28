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

          <nav className="hidden md:flex items-center gap-6">
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
              >
                Resources
                <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    href="/iso-9001-certification-malaysia"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    ISO 9001 Certification Malaysia
                  </Link>
                  <Link
                    href="/iso-9001-benefits"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Benefits of ISO 9001
                  </Link>
                  <Link
                    href="/iso-9001-requirements"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    ISO 9001 Requirements
                  </Link>
                  <Link
                    href="/iso-9001-certification-process"
                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Certification Process
                  </Link>
                  <Link
                    href="/iso-9001-cost-malaysia"
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
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
