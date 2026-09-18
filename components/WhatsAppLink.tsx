'use client'

import { onWhatsAppClick } from '@/lib/whatsapp'

export default function WhatsAppLink({
  className,
  children,
  text,
}: {
  className?: string
  children: React.ReactNode
  /** Optional prefilled message. */
  text?: string
}) {
  const waUrl = text ? `https://wa.me/60102062070?text=${encodeURIComponent(text)}` : 'https://wa.me/60102062070'

  return (
    <a
      href={waUrl}
      onClick={onWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}
