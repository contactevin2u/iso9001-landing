'use client'

import { useState } from 'react'
import Link from 'next/link'
import WhatsAppLink from '@/components/WhatsAppLink'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { anchor, homePath, type Locale } from '@/lib/i18n/config'
import { chrome } from '@/lib/i18n/chrome'

export default function Header({ locale = 'en' }: { locale?: Locale }) {
  const t = chrome[locale].header
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href={homePath[locale]} className="flex flex-col" aria-label={t.homeAria}>
            <span className="font-serif text-2xl font-semibold text-ink leading-none tracking-tight">AA Alive</span>
            <span className="hidden sm:block text-xs text-gray-500 mt-1">{t.tagline}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5" aria-label={t.mainNavAria}>
            <a href={anchor(locale, 'what-is-iso')} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              {t.whatIs}
            </a>
            <a href={anchor(locale, 'benefits')} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              {t.benefits}
            </a>
            <a href={anchor(locale, 'process')} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              {t.process}
            </a>
            <a href={anchor(locale, 'pricing')} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              {t.pricing}
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
                {t.guides}
                <svg className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Always rendered (hidden via CSS when closed) so the guide links are in the server HTML for crawlers. */}
              <div
                id="resources-menu"
                role="menu"
                className={`${isResourcesOpen ? 'block' : 'hidden'} absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2`}
              >
                {t.guidesNote && <p className="px-4 pt-1 pb-2 text-xs text-gray-400">{t.guidesNote}</p>}
                <Link
                  href="/iso-9001-certification-malaysia"
                  role="menuitem"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                >
                  ISO 9001 Certification Malaysia
                </Link>
                <Link
                  href="/iso-9001-2026-transition"
                  role="menuitem"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                >
                  ISO 9001:2026 Transition
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
                <Link
                  href="/quality-management-system-malaysia"
                  role="menuitem"
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600"
                >
                  Quality Management System
                </Link>
              </div>
            </div>

            <a href={anchor(locale, 'contact')} className="text-gray-600 hover:text-primary-600 transition-colors text-sm">
              {t.contact}
            </a>

            <LanguageSwitcher locale={locale} label={t.languageAria} />

            <WhatsAppLink className="hidden xl:inline-flex items-center px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-md hover:bg-primary-700 transition-colors">
              {t.cta}
            </WhatsAppLink>
          </nav>

          <LanguageSwitcher locale={locale} label={t.languageAria} className="lg:hidden ml-auto mr-2" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5"
            aria-label={isOpen ? t.closeMenu : t.openMenu}
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
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4" aria-label={t.mobileNavAria}>
              <a href={anchor(locale, 'what-is-iso')} onClick={() => setIsOpen(false)} className="text-gray-600">{t.whatIs}</a>
              <a href={anchor(locale, 'benefits')} onClick={() => setIsOpen(false)} className="text-gray-600">{t.benefits}</a>
              <a href={anchor(locale, 'process')} onClick={() => setIsOpen(false)} className="text-gray-600">{t.process}</a>
              <a href={anchor(locale, 'pricing')} onClick={() => setIsOpen(false)} className="text-gray-600">{t.pricing}</a>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <div className="text-sm font-medium text-gray-900 mb-3">{t.guides}</div>
                {t.guidesNote && <p className="text-xs text-gray-400 -mt-2 mb-3">{t.guidesNote}</p>}
                <div className="flex flex-col gap-3 pl-2">
                  <Link href="/iso-9001-certification-malaysia" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    ISO 9001 Certification Malaysia
                  </Link>
                  <Link href="/iso-9001-2026-transition" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    ISO 9001:2026 Transition
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
                  <Link href="/quality-management-system-malaysia" onClick={() => setIsOpen(false)} className="text-gray-600 text-sm">
                    Quality Management System
                  </Link>
                </div>
              </div>

              <a href={anchor(locale, 'contact')} onClick={() => setIsOpen(false)} className="text-primary-600 font-medium mt-2">{t.contact}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
