import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://iso9001.my'),
  title: {
    default: 'ISO 9001 Certification Malaysia | Quality Management System',
    template: '%s | ISO 9001 Malaysia'
  },
  description: 'Get ISO 9001 certified in Malaysia from RM 12,000. Expert QMS consultants help you achieve quality management certification. Free consultation available.',
  keywords: [
    'ISO 9001 certification Malaysia',
    'ISO 9001 Malaysia',
    'quality management system',
    'QMS certification',
    'ISO 9001 consultant Malaysia',
    'ISO 9001 cost Malaysia',
    'quality certification',
    'ISO 9001:2015',
    'quality management certification Malaysia'
  ],
  authors: [{ name: 'ISO 9001 Malaysia' }],
  creator: 'ISO 9001 Malaysia',
  publisher: 'ISO 9001 Malaysia',
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
    url: 'https://iso9001.my',
    siteName: 'ISO 9001 Malaysia',
    title: 'ISO 9001 Certification Malaysia | Quality Management System',
    description: 'Get ISO 9001 certified in Malaysia from RM 12,000. Expert QMS consultants help you achieve quality management certification.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISO 9001 Certification Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 9001 Certification Malaysia | Quality Management System',
    description: 'Get ISO 9001 certified in Malaysia from RM 12,000. Expert QMS consultants help you achieve quality management certification.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://iso9001.my',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'theme-color': '#2563eb',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
