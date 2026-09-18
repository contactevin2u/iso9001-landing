import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import {
  FOUNDER_VIDEOS,
  embedUrl,
  formatDuration,
  formatVideoDate,
  getFounderVideo,
  thumbnailUrl,
  videoObjectSchema,
  watchPath,
  watchUrl,
  youTubeUrl,
} from '@/lib/videos'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return FOUNDER_VIDEOS.map((v) => ({ slug: v.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const video = getFounderVideo(params.slug)
  if (!video) return {}
  return {
    title: `${video.name} (Video)`,
    description: video.description,
    alternates: { canonical: watchUrl(video) },
    openGraph: {
      type: 'video.other',
      url: watchUrl(video),
      title: video.name,
      description: video.description,
      images: [{ url: thumbnailUrl(video), width: 1280, height: 720, alt: video.name }],
    },
  }
}

export default function FounderVideoWatchPage({ params }: Props) {
  const video = getFounderVideo(params.slug)
  if (!video) notFound()

  const others = FOUNDER_VIDEOS.filter((v) => v.slug !== video.slug)

  return (
    <>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema(video)) }}
      />
      <Header />
      <main id="main-content" className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Media Coverage', href: '/media' },
            { name: video.name, href: watchPath(video) },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium uppercase tracking-wider text-primary-600 mb-3">
              Video · {video.publisher} · {formatVideoDate(video.uploadDate)}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">{video.name}</h1>

            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 mb-6 bg-gray-900">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={embedUrl(video)}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-gray-600 mb-6">
              <strong className="text-gray-900">{video.publisher}</strong> ·{' '}
              <time dateTime={video.uploadDate}>{formatVideoDate(video.uploadDate)}</time> ·{' '}
              {formatDuration(video.duration)} ·{' '}
              <a
                href={youTubeUrl(video)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                Watch on YouTube
              </a>
            </p>
            <p className="text-lg text-gray-600 mb-4">{video.description}</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">About this appearance</h2>
            <p className="text-gray-600 mb-4">{video.context}</p>
            <p className="text-gray-600 mb-4">
              ISO 9001 Malaysia is the ISO consulting service of AA Alive Sdn Bhd (SSM 1204108-D),
              founded in 2016 by Evin Lim. Read more{' '}
              <Link href="/about" className="text-primary-600 hover:text-primary-700 underline">
                about us
              </Link>
              , or see{' '}
              <Link href="/media" className="text-primary-600 hover:text-primary-700 underline">
                all media coverage
              </Link>
              .
            </p>

            {others.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">More from our founder</h2>
                <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
                  {others.map((v) => (
                    <li key={v.slug}>
                      <Link href={watchPath(v)} className="text-primary-600 hover:text-primary-700 underline">
                        {v.name}
                      </Link>{' '}
                      — {v.publisher}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
