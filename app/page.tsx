import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { SITE_URL, homeAlternates } from '@/lib/i18n/config'
import en from '@/lib/i18n/home-en'

// Title/description come from the root layout; add the language alternates.
export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
    languages: homeAlternates,
  },
}

export default function Home() {
  return <HomePage locale="en" t={en} />
}
