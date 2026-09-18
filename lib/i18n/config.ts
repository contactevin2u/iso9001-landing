/**
 * Homepage languages. English lives at `/`; Bahasa Malaysia and Chinese get
 * their own translated homepages so Google can index each language (hreflang).
 * Guide pages (/iso-9001-*, /about, /media) are English only.
 */
export const locales = ['en', 'ms', 'zh'] as const
export type Locale = (typeof locales)[number]

export const SITE_URL = 'https://isoconsultantmalaysia.com'

/** Homepage path for each language. */
export const homePath: Record<Locale, string> = {
  en: '/',
  ms: '/ms',
  zh: '/zh',
}

/** BCP 47 tag for lang="" attributes and hreflang. */
export const langTag: Record<Locale, string> = {
  en: 'en-MY',
  ms: 'ms-MY',
  zh: 'zh-MY',
}

/** Short label shown in the language switcher, in its own language. */
export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  ms: 'BM',
  zh: '中文',
}

/** Full name for screen readers and tooltips, in its own language. */
export const localeName: Record<Locale, string> = {
  en: 'English',
  ms: 'Bahasa Malaysia',
  zh: '中文',
}

/** Anchor on a language's homepage, e.g. anchor('ms', 'pricing') -> "/ms#pricing". */
export function anchor(locale: Locale, id: string): string {
  return `${homePath[locale] === '/' ? '/' : homePath[locale]}#${id}`
}

/** hreflang map for the three homepages (used by every homepage's metadata). */
export const homeAlternates = {
  'en-MY': SITE_URL,
  'ms-MY': `${SITE_URL}/ms`,
  'zh-MY': `${SITE_URL}/zh`,
  'x-default': SITE_URL,
}

/** Long-form date in the visitor's language, e.g. "18 September 2026" / "2026年9月18日". */
export function formatDate(locale: Locale, isoDate: string): string {
  return new Intl.DateTimeFormat(langTag[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kuala_Lumpur',
  }).format(new Date(`${isoDate}T12:00:00+08:00`))
}
