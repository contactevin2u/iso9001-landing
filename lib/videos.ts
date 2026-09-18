/**
 * Founder video watch pages (/media/<slug>).
 *
 * Why these exist: Google only indexes a video on a page where the video is
 * the main content. Embedding both founder videos inline on /media (and
 * emitting them as full VideoObjects on /about + /media) makes those general
 * pages look like they host the videos, and the date-only uploadDate values
 * failed Search Console's Videos report ("uploadDate is missing a timezone").
 *
 * So each video gets ONE dedicated watch page carrying the full VideoObject;
 * /media links to it with a thumbnail, and the Person graph on /about + /media
 * points at the video only by @id.
 *
 * Upload times, durations and embed URLs are from each video's YouTube
 * metadata (MYT, +08:00). Descriptions and context reuse the facts already
 * published on /media and /about — do not add claims here.
 */

export const SITE_URL = 'https://isoconsultantmalaysia.com'
export const FOUNDER_ID = `${SITE_URL}/#person`

export interface FounderVideo {
  slug: string
  youTubeId: string
  name: string
  description: string
  publisher: string
  /** ISO 8601 date-time WITH timezone offset (Google rejects date-only / offset-less values). */
  uploadDate: string
  /** ISO 8601 duration, from the YouTube watch page. */
  duration: string
  /** Plain-language context shown under the player. Facts only. */
  context: string
}

export const FOUNDER_VIDEOS: FounderVideo[] = [
  {
    slug: 'bernama-ruang-bicara-aspirasi-ekonomi-2026',
    youTubeId: 'p0rcj7kaqpQ',
    name: 'Ruang Bicara: Aspirasi Ekonomi — BERNAMA TV (3 Julai 2026)',
    description:
      'Panel discussion on the direction of the Malaysian pharmaceutical and medical device industry, with Datuk Lau Tiam Kwee (ACCCIM) and Evin Lim, founder of AA Alive Sdn Bhd, as industry consultant.',
    publisher: 'BERNAMA TV',
    uploadDate: '2026-07-03T23:35:40+08:00',
    duration: 'PT49M54S',
    context:
      'Panel discussion on the direction of Malaysia’s pharmaceutical and medical device industry, broadcast 9–10 pm on 3 July 2026. Evin Lim appeared as an industry consultant alongside Datuk Lau Tiam Kwee, representing ACCCIM (the Associated Chinese Chambers of Commerce and Industry of Malaysia).',
  },
  {
    slug: 'superbrands-malaysia-ceo-interview-2025',
    youTubeId: '4Y7hNFsM3Jk',
    name: 'Superbrands Malaysia CEO Interviews 2025 — Evin Lim',
    description:
      'Superbrands Malaysia CEO Interviews 2025 with Evin Lim on the official Superbrands Limited channel. Superbrands Malaysia 2025 (Malaysia’s Choice) — awarded to AA Alive’s medical-support brand, Evin Limb Specialist.',
    publisher: 'Superbrands Limited',
    uploadDate: '2025-12-09T17:04:50+08:00',
    duration: 'PT2M2S',
    context:
      'Evin Lim was interviewed in the Superbrands Malaysia CEO Interviews 2025 series (December 2025) on the official Superbrands Limited channel. Superbrands Malaysia 2025 (Malaysia’s Choice) — awarded to AA Alive’s medical-support brand, Evin Limb Specialist.',
  },
]

export function getFounderVideo(slug: string): FounderVideo | undefined {
  return FOUNDER_VIDEOS.find((v) => v.slug === slug)
}

export function getFounderVideoByYouTubeId(id: string): FounderVideo {
  const video = FOUNDER_VIDEOS.find((v) => v.youTubeId === id)
  if (!video) throw new Error(`Unknown founder video ${id}`)
  return video
}

export const watchPath = (v: FounderVideo) => `/media/${v.slug}`
export const watchUrl = (v: FounderVideo) => `${SITE_URL}${watchPath(v)}`
export const youTubeUrl = (v: FounderVideo) => `https://www.youtube.com/watch?v=${v.youTubeId}`
export const embedUrl = (v: FounderVideo) => `https://www.youtube.com/embed/${v.youTubeId}`
/** 16:9 1280×720 still (verified to exist for both videos). */
export const thumbnailUrl = (v: FounderVideo) => `https://i.ytimg.com/vi/${v.youTubeId}/hq720.jpg`

const videoNodeId = (v: FounderVideo) => `${watchUrl(v)}#video`

/** '2026-07-03T23:35:40+08:00' → '3 July 2026' (calendar date as published, MYT). */
export function formatVideoDate(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/** 'PT49M54S' → '49:54' */
export function formatDuration(iso: string): string {
  const [, h = '0', m = '0', s = '0'] = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) ?? []
  const mm = h === '0' ? m : m.padStart(2, '0')
  return `${h === '0' ? '' : `${h}:`}${mm}:${s.padStart(2, '0')}`
}

/** Full VideoObject — emit ONLY on the video's own watch page. */
export function videoObjectSchema(v: FounderVideo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': videoNodeId(v),
    name: v.name,
    description: v.description,
    thumbnailUrl: [thumbnailUrl(v), `https://i.ytimg.com/vi/${v.youTubeId}/hqdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: embedUrl(v),
    url: youTubeUrl(v),
    mainEntityOfPage: watchUrl(v),
    publisher: { '@type': 'Organization', name: v.publisher },
    about: { '@id': FOUNDER_ID },
  }
}

/** Reference to a video from a non-watch page (/about, /media): @id only, never a full VideoObject. */
export function videoRef(v: FounderVideo) {
  return { '@id': videoNodeId(v) }
}
