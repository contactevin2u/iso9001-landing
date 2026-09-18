/**
 * Shape of a homepage dictionary. Strings marked "rich" may contain **bold**
 * and [link text](/href) markup, rendered by components/Rich.tsx.
 *
 * Every translation must make the same claims as the English copy and follow
 * the Google Ads rules (no certification timelines, counts or ratings, and no
 * wording that says we issue the certificate) — run the claim sweep before pushing.
 */
export interface Package {
  name: string
  price: string
  description: string
  features: string[]
  popular: boolean
  /** Custom-quoted tier: its button reads "Contact us" instead of "Get started". */
  custom: boolean
}

export interface FaqItem {
  question: string
  summary: string
  bullets: string[]
  schemaAnswer: string
}

export interface QA {
  question: string
  answer: string
}

export interface HomeDict {
  meta: {
    title: string
    description: string
  }
  /** Prefilled WhatsApp messages for the CTAs on the page. */
  whatsappText: {
    hero: string
    process: string
    faq: string
  }
  hero: {
    eyebrow: string
    title: string
    lead: string
    cta: string
    secondaryCta: string
    note: string
    facts: { value: string; label: string }[]
    card: {
      title: string
      preparedBy: string
      standardLabel: string
      nextLabel: string
      clauses: { no: string; title: string }[]
      prepared: string
      stage1: string
      stage1Desc: string
      stage2: string
      stage2Desc: string
      caption: string
    }
  }
  trust: {
    intro: string
  }
  pain: {
    title: string
    intro: string
    withoutHeading: string
    withHeading: string
    withoutShort: string
    rows: { without: string; with: string }[]
    /** rich */
    footer: string
  }
  why: {
    title: string
    intro: string
    /** Six reasons; icons are assigned by position in WhyChooseUs. */
    reasons: { title: string; description: string }[]
  }
  benefits: {
    title: string
    intro: string
    items: { title: string; description: string; details: string }[]
    moreLink: string
  }
  industries: {
    title: string
    intro: string
    items: { name: string; description: string }[]
    /** rich */
    footer: string
  }
  process: {
    title: string
    intro: string
    steps: { title: string; description: string; details: string }[]
    cta: string
    moreLink: string
  }
  founder: {
    title: string
    intro: string
    subheading: string
    /** Four points; icons are assigned by position in Founder. */
    points: { title: string; text: string }[]
    role: string
    linkedin: string
    quote: string
    /** rich */
    media: string
    cta: string
  }
  whatIs: {
    title: string
    /** rich */
    intro: string
    structureTitle: string
    /** rich */
    structure: string
    pdcaTitle: string
    /** rich */
    pdcaIntro: string
    pdca: { label: string; text: string }[]
    clausesTitle: string
    clauses: { title: string; text: string }[]
    /** rich */
    closing: string
  }
  pricing: {
    title: string
    intro: string
    cbNote: string
    lastUpdated: string
    mostPopular: string
    getStarted: string
    contactUs: string
    packages: Package[]
    /** rich */
    payment: string
  }
  faq: {
    title: string
    intro: string
    items: FaqItem[]
    stillQuestions: string
    cta: string
  }
  answers: {
    title: string
    intro: string
    items: QA[]
    /** Extra block in another language (the English page carries a BM FAQ). */
    extra?: { heading: string; lang: string; items: QA[] }
  }
  guidesHeading: string
  contact: {
    title: string
    intro: string
    note: string
    email: string
    phone: string
    whatsapp: string
    chatWithUs: string
    form: {
      name: string
      namePlaceholder: string
      company: string
      companyPlaceholder: string
      email: string
      phone: string
      message: string
      messagePlaceholder: string
      submit: string
    }
  }
}
