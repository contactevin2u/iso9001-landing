'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex flex-col">
            <span className="text-xl font-bold text-primary-700 leading-tight">ISO 9001</span>
            <span className="text-[8px] uppercase tracking-widest text-gray-500">Quality Management Begins Here</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#what-is-iso" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              What is ISO 9001
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Benefits
            </a>
            <a href="#process" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Process
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              Pricing
            </a>
            <a href="#contact" className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium">
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
              <a href="#what-is-iso" onClick={() => setIsOpen(false)} className="text-gray-600">What is ISO 9001</a>
              <a href="#benefits" onClick={() => setIsOpen(false)} className="text-gray-600">Benefits</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-gray-600">Process</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="text-gray-600">Pricing</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-primary-600 font-medium">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
