import type { MouseEvent } from 'react'
import { getWhatsAppUrlWithBeacon } from '@/lib/beacon'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const WHATSAPP_CONVERSION = 'AW-795120559/_Jh2CNeQw-ADEK-nkvsC'

/**
 * Report the Google Ads WhatsApp conversion without holding up the visitor.
 *
 * This replaces gtag_report_conversion(url), whose event_callback did
 * `window.location = url`: navigation waited on the Ads request, so taps were
 * lost or repeated (duplicate beacon rows per tap and far fewer taps becoming
 * chats than on the plain-link device site; google-ads-analysis FINDINGS, Sep 18 2026).
 */
export function reportWhatsAppConversion(): void {
  try {
    window.gtag?.('event', 'conversion', { send_to: WHATSAPP_CONVERSION, value: 1.0, currency: 'MYR' })
  } catch {
    /* tracking must never block the chat */
  }
}

/**
 * onClick for every WhatsApp link. The link stays a plain
 * `<a href="https://wa.me/..." target="_blank">` and navigates by itself; this
 * only swaps in the beacon-tagged URL before the browser follows the href, and
 * fires the conversion. The original href is kept in data-wa-base so a second
 * tap gets one fresh [REF], not two stacked ones.
 */
export function onWhatsAppClick(e: MouseEvent<HTMLAnchorElement>): void {
  const link = e.currentTarget
  const base = link.dataset.waBase ?? (link.dataset.waBase = link.href)
  link.href = getWhatsAppUrlWithBeacon(base)
  reportWhatsAppConversion()
}

/** For code paths without a link (the contact form): open WhatsApp in a new tab. */
export function openWhatsApp(url: string): void {
  reportWhatsAppConversion()
  window.open(getWhatsAppUrlWithBeacon(url), '_blank', 'noopener,noreferrer')
}
