import type { Locale } from './config'

/**
 * Strings for the site chrome (header, footer, floating WhatsApp button).
 * Kept separate from the homepage dictionaries because these components are
 * shared with the English-only guide pages and ship to the client.
 */
export interface ChromeDict {
  skipToContent: string
  header: {
    homeAria: string
    tagline: string
    whatIs: string
    benefits: string
    process: string
    pricing: string
    guides: string
    guidesNote?: string
    contact: string
    cta: string
    mainNavAria: string
    mobileNavAria: string
    languageAria: string
    openMenu: string
    closeMenu: string
  }
  footer: {
    tagline: string
    description: string
    serviceBy: string
    foundedBy: string
    quickLinks: string
    whatIs: string
    benefits: string
    process: string
    pricing: string
    faq: string
    contactUs: string
    about: string
    media: string
    guides: string
    contact: string
    whatsapp: string
    otherServices: string
    esgService: string
    mdcService: string
    rights: string
    lastUpdated: string
  }
  whatsapp: {
    floatingLabel: string
    floatingAria: string
    /** Prefilled WhatsApp message, in the visitor's language. */
    enquiry: string
  }
}

export const chrome: Record<Locale, ChromeDict> = {
  en: {
    skipToContent: 'Skip to main content',
    header: {
      homeAria: 'AA Alive, ISO certification consultants in Malaysia, home',
      tagline: 'ISO certification consultants, Malaysia',
      whatIs: 'What is ISO 9001',
      benefits: 'Benefits',
      process: 'Process',
      pricing: 'Pricing',
      guides: 'Resources',
      contact: 'Contact',
      cta: 'Free consultation',
      mainNavAria: 'Main navigation',
      mobileNavAria: 'Mobile navigation',
      languageAria: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    footer: {
      tagline: 'ISO certification consultants, Malaysia',
      description:
        'ISO 9001 consulting for Malaysian companies: gap analysis, documentation, training and certification audit preparation.',
      serviceBy: 'A service by',
      foundedBy: 'Founded by Evin Lim',
      quickLinks: 'Quick Links',
      whatIs: 'What is ISO 9001',
      benefits: 'Benefits',
      process: 'Certification Process',
      pricing: 'Pricing',
      faq: 'FAQ',
      contactUs: 'Contact Us',
      about: 'About Us',
      media: 'Media Coverage',
      guides: 'Resources',
      contact: 'Contact',
      whatsapp: 'WhatsApp Us',
      otherServices: 'Our other services:',
      esgService: 'ISO 14001 & ESG certification Malaysia (esgiso.com)',
      mdcService: 'ISO 13485 & medical device consulting (iso13485.my)',
      rights: 'All rights reserved.',
      lastUpdated: 'Last updated',
    },
    whatsapp: {
      floatingLabel: 'WhatsApp Us',
      floatingAria: 'Chat on WhatsApp',
      enquiry: 'Hi, I would like to enquire about ISO 9001 certification.',
    },
  },

  ms: {
    skipToContent: 'Langkau ke kandungan utama',
    header: {
      homeAria: 'AA Alive, perunding pensijilan ISO di Malaysia, laman utama',
      tagline: 'Perunding pensijilan ISO, Malaysia',
      whatIs: 'Apa itu ISO 9001',
      benefits: 'Manfaat',
      process: 'Proses',
      pricing: 'Harga',
      guides: 'Panduan',
      guidesNote: 'Panduan dalam Bahasa Inggeris',
      contact: 'Hubungi',
      cta: 'Konsultasi percuma',
      mainNavAria: 'Navigasi utama',
      mobileNavAria: 'Navigasi mudah alih',
      languageAria: 'Bahasa',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
    },
    footer: {
      tagline: 'Perunding pensijilan ISO, Malaysia',
      description:
        'Perundingan ISO 9001 untuk syarikat Malaysia: analisis jurang, dokumentasi, latihan dan persediaan audit pensijilan.',
      serviceBy: 'Perkhidmatan oleh',
      foundedBy: 'Diasaskan oleh Evin Lim',
      quickLinks: 'Pautan Utama',
      whatIs: 'Apa itu ISO 9001',
      benefits: 'Manfaat',
      process: 'Proses Pensijilan',
      pricing: 'Harga',
      faq: 'Soalan Lazim',
      contactUs: 'Hubungi Kami',
      about: 'Tentang Kami (EN)',
      media: 'Liputan Media (EN)',
      guides: 'Panduan (Bahasa Inggeris)',
      contact: 'Hubungi',
      whatsapp: 'WhatsApp Kami',
      otherServices: 'Perkhidmatan kami yang lain:',
      esgService: 'Pensijilan ISO 14001 & ESG Malaysia (esgiso.com)',
      mdcService: 'Perundingan ISO 13485 & peranti perubatan (iso13485.my)',
      rights: 'Hak cipta terpelihara.',
      lastUpdated: 'Kemas kini terakhir',
    },
    whatsapp: {
      floatingLabel: 'WhatsApp Kami',
      floatingAria: 'Sembang di WhatsApp',
      enquiry: 'Hai, saya ingin bertanya tentang pensijilan ISO 9001.',
    },
  },

  zh: {
    skipToContent: '跳至主要内容',
    header: {
      homeAria: 'AA Alive，马来西亚 ISO 认证顾问，首页',
      tagline: '马来西亚 ISO 认证顾问',
      whatIs: '什么是 ISO 9001',
      benefits: '好处',
      process: '流程',
      pricing: '价格',
      guides: '指南',
      guidesNote: '以下指南为英文内容',
      contact: '联系我们',
      cta: '免费咨询',
      mainNavAria: '主导航',
      mobileNavAria: '移动端导航',
      languageAria: '语言',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
    },
    footer: {
      tagline: '马来西亚 ISO 认证顾问',
      description: '为马来西亚企业提供 ISO 9001 咨询：差距分析、文件编写、培训及认证审核准备。',
      serviceBy: '服务提供方',
      foundedBy: '创办人 Evin Lim',
      quickLinks: '快速链接',
      whatIs: '什么是 ISO 9001',
      benefits: '好处',
      process: '认证流程',
      pricing: '价格',
      faq: '常见问题',
      contactUs: '联系我们',
      about: '关于我们（英文）',
      media: '媒体报道（英文）',
      guides: '指南（英文）',
      contact: '联系方式',
      whatsapp: 'WhatsApp 联系我们',
      otherServices: '我们的其他服务：',
      esgService: 'ISO 14001 与 ESG 认证（esgiso.com）',
      mdcService: 'ISO 13485 与医疗器械咨询（iso13485.my）',
      rights: '版权所有。',
      lastUpdated: '最后更新',
    },
    whatsapp: {
      floatingLabel: 'WhatsApp 咨询',
      floatingAria: '通过 WhatsApp 咨询',
      enquiry: '您好，我想咨询 ISO 9001 认证。',
    },
  },
}
