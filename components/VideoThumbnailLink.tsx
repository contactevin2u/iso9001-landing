import Link from 'next/link'
import { formatDuration, thumbnailUrl, watchPath, type FounderVideo } from '@/lib/videos'

/**
 * Thumbnail link to a video's watch page. Used on general pages instead of an
 * inline player so Google treats the watch page as the video's home.
 */
export default function VideoThumbnailLink({ video, className = '' }: { video: FounderVideo; className?: string }) {
  return (
    <Link
      href={watchPath(video)}
      className={`group relative block w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-900 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnailUrl(video)}
        alt={`Watch: ${video.name}`}
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/95 text-gray-900 font-semibold shadow-lg">
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch the video · {formatDuration(video.duration)}
        </span>
      </span>
    </Link>
  )
}
