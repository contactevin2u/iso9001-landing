import Link from 'next/link'
import WhatsAppLink from '@/components/WhatsAppLink'
import { SITE_LAST_UPDATED, SITE_LAST_UPDATED_ISO } from '@/lib/constants'
import { anchor, formatDate, type Locale } from '@/lib/i18n/config'
import { chrome } from '@/lib/i18n/chrome'

export default function Footer({ locale = 'en' }: { locale?: Locale }) {
  const t = chrome[locale].footer
  return (
    <footer className="bg-ink text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="font-serif text-2xl font-semibold text-white leading-none">AA Alive</div>
              <div className="text-xs text-gray-500 mt-1">{t.tagline}</div>
            </div>
            <p className="text-sm mb-3">{t.description}</p>
            <p className="text-xs text-gray-500">
              {t.serviceBy} <strong className="text-gray-400">AA Alive Sdn Bhd</strong> (1204108-D)
            </p>
            <p className="text-xs text-gray-500">{t.foundedBy}</p>
          </div>

          <div>
            <div className="font-medium text-white mb-4">{t.quickLinks}</div>
            <ul className="space-y-2 text-sm">
              <li><a href={anchor(locale, 'what-is-iso')} className="hover:text-white transition-colors">{t.whatIs}</a></li>
              <li><a href={anchor(locale, 'benefits')} className="hover:text-white transition-colors">{t.benefits}</a></li>
              <li><a href={anchor(locale, 'process')} className="hover:text-white transition-colors">{t.process}</a></li>
              <li><a href={anchor(locale, 'pricing')} className="hover:text-white transition-colors">{t.pricing}</a></li>
              <li><a href={anchor(locale, 'faq')} className="hover:text-white transition-colors">{t.faq}</a></li>
              <li><a href={anchor(locale, 'contact')} className="hover:text-white transition-colors">{t.contactUs}</a></li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  {t.media}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">{t.guides}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/iso-9001-certification-malaysia" className="hover:text-white transition-colors">
                  ISO 9001 Certification Malaysia
                </Link>
              </li>
              <li>
                <Link href="/iso-9001-2026-transition" className="hover:text-white transition-colors">
                  ISO 9001:2026 Transition
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
                <Link href="/iso-9001-certification-body-malaysia" className="hover:text-white transition-colors">
                  Certification Bodies
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
              <li>
                <Link href="/quality-management-system-malaysia" className="hover:text-white transition-colors">
                  Quality Management System
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">{t.contact}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:ylim@gdpmd.my" className="hover:text-white transition-colors">
                  ylim@gdpmd.my
                </a>
              </li>
              <li>
                <a href="tel:+60102062070" className="hover:text-white transition-colors">
                  +60 10-206 2070
                </a>
              </li>
              <li>
                <WhatsAppLink className="hover:text-white transition-colors">
                  {t.whatsapp}
                </WhatsAppLink>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                Lot 1, Jalan Perusahaan 4,<br />
                Pusat Industri Amari,<br />
                Kawasan Industri Batu Caves,<br />
                68100 Batu Caves, Selangor
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 text-sm">
          <span className="font-medium text-white">{t.otherServices} </span>
          <a
            href="https://esgiso.com"
            rel="noopener"
            className="hover:text-white transition-colors underline decoration-gray-700"
          >
            {t.esgService}
          </a>
          <span className="mx-2 text-gray-600">&middot;</span>
          <a
            href="https://iso13485.my"
            rel="noopener"
            className="hover:text-white transition-colors underline decoration-gray-700"
          >
            {t.mdcService}
          </a>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm flex flex-col sm:flex-row sm:justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} AA Alive Sdn Bhd (1204108-D). {t.rights}</p>
          <p className="text-gray-500">
            {t.lastUpdated} <time dateTime={SITE_LAST_UPDATED_ISO}>{locale === 'en' ? SITE_LAST_UPDATED : formatDate(locale, SITE_LAST_UPDATED_ISO)}</time>
          </p>
        </div>
      </div>
    </footer>
  )
}
