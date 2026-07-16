'use client'

import { useEffect } from 'react'
import { captureClickIds } from '@/lib/beacon'

/** Stores gclid/gbraid/wbraid from the landing URL for the Chatbaby beacon. */
export default function GclidTracker() {
  useEffect(() => {
    captureClickIds()
  }, [])
  return null
}
