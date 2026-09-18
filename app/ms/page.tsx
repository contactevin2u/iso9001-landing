import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { SITE_URL, homeAlternates } from '@/lib/i18n/config'
import ms from '@/lib/i18n/home-ms'

export const metadata: Metadata = {
  title: { absolute: ms.meta.title },
  description: ms.meta.description,
  openGraph: {
    type: 'website',
    locale: 'ms_MY',
    url: `${SITE_URL}/ms`,
    siteName: 'ISO 9001 Malaysia',
    title: ms.meta.title,
    description: ms.meta.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: ms.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: ms.meta.title,
    description: ms.meta.description,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/ms`,
    languages: homeAlternates,
  },
}

export default function HomeMs() {
  return <HomePage locale="ms" t={ms} />
}
