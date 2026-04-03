/** @type {import('next-sitemap').IConfig} */

// Static map of product slugs to their last modification dates.
// Keep in sync with lastmod values in lib/products.ts.
const productLastmod = {
  'le-creuset-braeter': '2026-02-27',
  'barbour-bedale': '2026-02-27',
  'rimowa-original': '2026-02-27',
  'opinel-no8': '2026-02-27',
  'bialetti-moka-express': '2026-02-27',
  'peugeot-pfeffermuehle-paris': '2026-02-27',
  'kitchenaid-artisan': '2026-02-27',
  'guede-brotmesser': '2026-02-27',
  'laguiole-steakmesser': '2026-02-27',
  'duralex-picardie': '2026-02-27',
  'riedel-veloce': '2026-02-27',
  'gmundner-keramik-fruehstueck': '2026-02-27',
}

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://zeitlosguteprodukte.de',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Exclude API routes and internal pages
  exclude: ['/api/*', '/404', '/500'],

  // Custom transform for URLs
  transform: async (config, path) => {
    // Higher priority for homepage
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    // Product pages use lastmod from product data
    if (path.startsWith('/produkte/')) {
      const slug = path.replace('/produkte/', '')
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: productLastmod[slug]
          ? new Date(productLastmod[slug]).toISOString()
          : new Date().toISOString(),
      }
    }

    // Default transformation
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  // robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
}
