import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'
import Rich from '@/components/Rich'
import WhatsAppLink from '@/components/WhatsAppLink'
import { BLOG_AUTHOR, BLOG_POSTS, type Block, formatPostDate, getPost } from '@/lib/blog'

type Props = { params: { slug: string } }

const SITE = 'https://isoconsultantmalaysia.com'

export const dynamicParams = false

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  const url = `${SITE}/blog/${post.slug}`
  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: BLOG_AUTHOR.name, url: BLOG_AUTHOR.url }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [BLOG_AUTHOR.name],
    },
    twitter: { card: 'summary_large_image', title: post.seoTitle, description: post.description },
    alternates: { canonical: url },
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function renderBlock(block: Block, i: number) {
  if ('h2' in block) {
    return (
      <h2 key={i} id={slugify(block.h2)} className="text-2xl font-bold text-gray-900 mt-12 mb-4 scroll-mt-24">
        {block.h2}
      </h2>
    )
  }
  if ('h3' in block) {
    return (
      <h3 key={i} className="text-lg font-semibold text-gray-900 mt-6 mb-2">
        {block.h3}
      </h3>
    )
  }
  if ('p' in block) {
    return (
      <p key={i} className="text-gray-600 mb-4 leading-relaxed">
        <Rich text={block.p} />
      </p>
    )
  }
  if ('ul' in block) {
    return (
      <ul key={i} className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
        {block.ul.map((item) => (
          <li key={item}>
            <Rich text={item} />
          </li>
        ))}
      </ul>
    )
  }
  if ('ol' in block) {
    return (
      <ol key={i} className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
        {block.ol.map((item) => (
          <li key={item}>
            <Rich text={item} />
          </li>
        ))}
      </ol>
    )
  }
  if ('table' in block) {
    return (
      <div key={i} className="overflow-x-auto mb-6 border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-900">
            <tr>
              {block.table.head.map((h, j) => (
                <th key={j} scope="col" className="px-4 py-3 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-600">
            {block.table.rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c} className={`px-4 py-3 align-top ${c === 0 ? 'font-medium text-gray-900' : ''}`}>
                    <Rich text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div key={i} className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded-r-lg text-gray-700 mb-6">
      <Rich text={block.note} />
    </div>
  )
}

export default function BlogPostPage({ params }: Props) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const path = `/blog/${post.slug}`
  const url = `${SITE}${path}`
  const toc = post.body.filter((b): b is { h2: string } => 'h2' in b).map((b) => b.h2)
  const related = post.related.map(getPost).filter((p): p is NonNullable<typeof p> => Boolean(p))

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    mainEntityOfPage: url,
    url,
    inLanguage: 'en-MY',
    keywords: post.keywords.join(', '),
    image: `${SITE}/og-image.png`,
    author: { '@type': 'Person', name: BLOG_AUTHOR.name, jobTitle: BLOG_AUTHOR.role, url: BLOG_AUTHOR.url },
    publisher: {
      '@type': 'Organization',
      name: 'AA Alive Sdn Bhd',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` },
    },
    abstract: post.summary.join(' '),
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.seoTitle, href: path },
          ]}
        />

        <article className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-8">
              By{' '}
              <Link href="/about" className="text-primary-600 hover:underline">
                {BLOG_AUTHOR.name}
              </Link>
              , {BLOG_AUTHOR.role} · Published <time dateTime={post.published}>{formatPostDate(post.published)}</time>
              {post.updated !== post.published && (
                <>
                  {' '}
                  · Updated <time dateTime={post.updated}>{formatPostDate(post.updated)}</time>
                </>
              )}
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Key points</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {post.summary.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <nav aria-label="Contents" className="mb-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Contents</h2>
              <ol className="list-decimal pl-6 space-y-1 text-sm">
                {toc.map((h) => (
                  <li key={h}>
                    <a href={`#${slugify(h)}`} className="text-primary-600 hover:underline">
                      {h}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {post.body.map(renderBlock)}

            <h2 id="faq" className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((f) => (
                <div key={f.q} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.q}</h3>
                  <p className="text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">Need help with your ISO 9001 system?</h2>
              <p className="text-gray-600 text-center mb-6">
                We prepare Malaysian companies for ISO 9001 certification by an accredited certification body. The first
                consultation is free.
              </p>
              <div className="flex justify-center">
                <WhatsAppLink
                  text={`Hi, I read your article "${post.seoTitle}" and would like to ask about ISO 9001.`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  WhatsApp us
                </WhatsAppLink>
              </div>
            </div>

            {related.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">More from the blog</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/blog/${r.slug}`}
                        className="block h-full p-5 bg-white rounded-lg border border-gray-200 hover:border-primary-300 transition-colors"
                      >
                        <span className="font-semibold text-primary-700">{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </article>
        <RelatedGuides current={path} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
