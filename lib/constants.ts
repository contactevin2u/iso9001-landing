/**
 * Content-freshness date shown visibly on money/pricing/cost pages
 * (AI-citation formula: AI Overviews favor pages with an explicit,
 * recent "Last updated" date near the price claims).
 *
 * Update this ONE constant whenever pricing or cost figures materially
 * change — never hard-code the date in page files.
 */
export const CONTENT_LAST_UPDATED = '18 September 2026'

/**
 * Site-wide "last modified" date: shown in the footer and emitted as
 * WebSite.dateModified. Update both values together whenever the site
 * changes materially (and bump <lastmod> in public/sitemap.xml to match).
 */
export const SITE_LAST_UPDATED = '18 September 2026'
export const SITE_LAST_UPDATED_ISO = '2026-09-18'
