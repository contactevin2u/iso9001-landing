'use client'

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean
  }
}

export default function WhatsAppLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const waUrl = 'https://wa.me/60102062070'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(waUrl)
    } else {
      window.open(waUrl, '_blank')
    }
  }

  return (
    <a
      href={waUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
