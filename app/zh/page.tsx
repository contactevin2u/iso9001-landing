import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { SITE_URL, homeAlternates } from '@/lib/i18n/config'
import zh from '@/lib/i18n/home-zh'

export const metadata: Metadata = {
  title: { absolute: zh.meta.title },
  description: zh.meta.description,
  openGraph: {
    type: 'website',
    locale: 'zh_MY',
    url: `${SITE_URL}/zh`,
    siteName: 'ISO 9001 Malaysia',
    title: zh.meta.title,
    description: zh.meta.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: zh.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: zh.meta.title,
    description: zh.meta.description,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: `${SITE_URL}/zh`,
    languages: homeAlternates,
  },
}

export default function HomeZh() {
  return <HomePage locale="zh" t={zh} />
}
