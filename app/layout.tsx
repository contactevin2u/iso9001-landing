import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import GclidTracker from '@/components/GclidTracker'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-serif',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f559c' },
    { media: '(prefers-color-scheme: dark)', color: '#0e2238' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://isoconsultantmalaysia.com'),
  title: {
    default: 'ISO 9001 Consultant Malaysia | Certification from RM 13,000',
    template: '%s | ISO 9001 Malaysia'
  },
  description: 'ISO 9001 consultancy in Malaysia from RM 13,000. Our QMS consultants prepare you for certification by an accredited certification body. Free first consultation.',
  keywords: [
    'ISO 9001 certification Malaysia',
    'ISO 9001 Malaysia',
    'quality management system',
    'QMS certification',
    'ISO 9001 consultant Malaysia',
    'ISO 9001 cost Malaysia',
    'quality certification',
    'ISO 9001:2015',
    'ISO 9001:2026',
    'quality management certification Malaysia'
  ],
  authors: [{ name: 'Evin Lim', url: 'https://my.linkedin.com/in/evin-lim-362a84258' }],
  creator: 'AA Alive Sdn Bhd',
  publisher: 'AA Alive Sdn Bhd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://isoconsultantmalaysia.com',
    siteName: 'ISO 9001 Malaysia',
    title: 'ISO 9001 Consultant Malaysia | Certification from RM 13,000',
    description: 'ISO 9001 consultancy in Malaysia from RM 13,000. Our QMS consultants prepare you for certification by an accredited certification body. Free first consultation.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ISO 9001 Certification Malaysia - AA Alive Sdn Bhd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 9001 Consultant Malaysia | Certification from RM 13,000',
    description: 'ISO 9001 consultancy in Malaysia from RM 13,000. Our QMS consultants prepare you for certification by an accredited certification body. Free first consultation.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://isoconsultantmalaysia.com',
    languages: {
      'en-MY': 'https://isoconsultantmalaysia.com',
    },
  },
  other: {
    'format-detection': 'telephone=no',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-MY" className={`${plexSans.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-795120559"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-795120559');
            gtag('config', 'G-CZ31QYXLKK'); // GA4 (provisioned 2026-07-12)
          `}
        </Script>
      </head>
      <body className={`${plexSans.className} bg-white text-gray-900`}>
        <StructuredData />
        <GclidTracker />
        {children}
      </body>
    </html>
  )
}
