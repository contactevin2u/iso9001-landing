import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'
import { BLOG_POSTS, formatPostDate } from '@/lib/blog'

const PATH = '/blog'
const URL = `https://isoconsultantmalaysia.com${PATH}`
const TITLE = 'ISO 9001 Blog: Practical QMS Guides for Malaysia'
const DESCRIPTION =
  'Practical articles on running an ISO 9001 quality management system: documents and records, internal audits, management review, corrective action and quality objectives.'

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  alternates: { canonical: URL },
}

const posts = [...BLOG_POSTS].sort((a, b) => b.published.localeCompare(a.published))

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ISO 9001 Malaysia Blog',
  url: URL,
  publisher: { '@type': 'Organization', name: 'AA Alive Sdn Bhd', url: 'https://isoconsultantmalaysia.com' },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `https://isoconsultantmalaysia.com/blog/${p.slug}`,
    datePublished: p.published,
    dateModified: p.updated,
  })),
}

export default function BlogIndexPage() {
  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: PATH },
          ]}
        />
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">ISO 9001 blog</h1>
            <p className="text-xl text-gray-600 mb-12">
              Practical guides to building and running an ISO 9001 quality management system in Malaysia, written by our
              consultants.
            </p>
            <ul className="space-y-6">
              {posts.map((p) => (
                <li key={p.slug} className="border border-gray-200 rounded-xl p-6 hover:border-primary-300 transition-colors">
                  <p className="text-sm text-gray-500 mb-2">
                    <time dateTime={p.published}>{formatPostDate(p.published)}</time>
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${p.slug}`} className="hover:text-primary-700">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600">{p.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <RelatedGuides current={PATH} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
