/**
 * Chatbaby confirmed-lead beacon.
 *
 * The WhatsApp CTAs on this site navigate via gtag_report_conversion(url) /
 * window.open(url) with a locally-built URL, so a generic href-mutation beacon
 * can never tag the message. Instead the click handlers call
 * getWhatsAppUrlWithBeacon() so the [REF:xxxxxx] code travels inside the URL
 * the app itself opens. The REF lets Chatbaby match the WhatsApp conversation
 * back to the stored Google click id for offline conversion upload.
 *
 * gclid flows to Chatbaby/Google only — never to Meta.
 */

const ENDPOINT = 'https://chatbaby-api.onrender.com/api/v1/tracking/lead'
const CLICK_ID_KEYS = ['gclid', 'gbraid', 'wbraid'] as const

/** Store Google click ids from the landing URL. Call once on page load. */
export function captureClickIds(): void {
  try {
    const params = new URLSearchParams(window.location.search)
    for (const key of CLICK_ID_KEYS) {
      const value = params.get(key)
      if (value) {
        localStorage.setItem(key, value)
        localStorage.setItem('gclid_landing', window.location.pathname)
      }
    }
  } catch {
    /* storage blocked */
  }
}

function makeRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let ref = ''
  for (let i = 0; i < 6; i++) ref += chars.charAt(Math.floor(Math.random() * chars.length))
  return ref
}

/**
 * If a Google click id is stored, POST a tracking row to Chatbaby and return
 * the WhatsApp URL with [REF:xxxxxx] appended to the prefilled text.
 * Without a click id (organic visit) the URL is returned unchanged.
 */
export function getWhatsAppUrlWithBeacon(url: string): string {
  let gclid: string | null = null
  let gbraid: string | null = null
  let wbraid: string | null = null
  try {
    gclid = localStorage.getItem('gclid')
    gbraid = localStorage.getItem('gbraid')
    wbraid = localStorage.getItem('wbraid')
  } catch {
    return url
  }
  if (!gclid && !gbraid && !wbraid) return url

  const ref = makeRef()
  let landing = window.location.pathname
  try {
    landing = localStorage.getItem('gclid_landing') || landing
  } catch {
    /* keep pathname */
  }

  try {
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ref,
        gclid: gclid || undefined,
        gbraid: gbraid || undefined,
        wbraid: wbraid || undefined,
        page: window.location.pathname,
        landing,
        timestamp: Date.now(),
      }),
      mode: 'cors',
      keepalive: true,
    }).catch(() => {})
  } catch {
    /* ignore */
  }

  // Inject into the existing text= param; appending to the URL end would
  // corrupt any trailing query param instead of the message.
  if (/[?&]text=/.test(url)) {
    return url.replace(/([?&]text=[^&]*)/, `$1%20%5BREF:${ref}%5D`)
  }
  return url + (url.includes('?') ? '&' : '?') + `text=%5BREF:${ref}%5D`
}
