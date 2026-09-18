import { homePath, langTag, localeLabel, localeName, locales, type Locale } from '@/lib/i18n/config'

/**
 * EN | BM | 中文 switcher. Each option links to that language's homepage;
 * guide pages are English only, so from a guide page BM/中文 open the
 * translated homepage.
 */
export default function LanguageSwitcher({
  locale,
  label,
  className = '',
}: {
  locale: Locale
  label: string
  className?: string
}) {
  return (
    <nav aria-label={label} className={`flex items-center rounded-md border border-gray-200 p-0.5 ${className}`}>
      {locales.map((l) => {
        const active = l === locale
        return (
          <a
            key={l}
            href={homePath[l]}
            hrefLang={langTag[l]}
            lang={langTag[l]}
            title={localeName[l]}
            aria-current={active ? 'page' : undefined}
            className={`inline-flex items-center px-2.5 py-1.5 text-xs font-semibold rounded leading-none transition-colors ${
              active ? 'bg-primary-600 text-white' : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
            }`}
          >
            {localeLabel[l]}
          </a>
        )
      })}
    </nav>
  )
}
