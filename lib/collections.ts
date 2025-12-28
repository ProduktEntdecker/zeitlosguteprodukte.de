import { Product, getProductBySlug } from './products'

/**
 * Collections and Campaign data structures
 * Used for curated product collections and seasonal campaigns
 */

export interface ProductBundle {
  slug: string
  name: string
  description: string
  productSlugs: string[]
  theme: 'valentines' | 'christmas' | 'general'
}

export interface Collection {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  productSlugs: string[]
  bundles?: ProductBundle[]
  seo: {
    title: string
    description: string
  }
  campaign?: {
    startDate: string // ISO date
    endDate: string
    ctaText: string
    newsletterTag?: string // For Beehiiv tagging
  }
}

export const collections: Collection[] = [
  {
    slug: 'valentinstag',
    name: 'Valentinstag 2025',
    tagline: 'Geschenke, die von Herzen kommen – und ein Leben lang halten',
    description: `
Vergessen Sie Rosen, die verwelken, und Pralinen, die verschwinden.
Schenken Sie etwas, das bleibt: Zeitlose Qualitätsprodukte,
die jeden Tag an Ihre Liebe erinnern.

Unsere handverlesene Auswahl für Paare vereint Genuss,
Handwerkskunst und gemeinsame Momente – für ein Leben lang.
    `.trim(),
    heroImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1600&q=80',
    productSlugs: [
      'le-creuset-braeter',
      'kitchenaid-artisan',
      'bialetti-moka-express',
      'gmundner-keramik-fruehstueck',
      'riedel-veloce',
      'laguiole-steakmesser',
      'duralex-picardie',
      'peugeot-pfeffermuehle-paris',
    ],
    bundles: [
      {
        slug: 'kaffee-liebhaber',
        name: 'Für Kaffee-Liebhaber',
        description: 'Perfekter Kaffeegenuss zu zweit – vom ersten Espresso bis zum letzten Schluck.',
        productSlugs: ['bialetti-moka-express', 'gmundner-keramik-fruehstueck', 'duralex-picardie'],
        theme: 'valentines',
      },
      {
        slug: 'romantisches-dinner',
        name: 'Romantisches Dinner',
        description: 'Für unvergessliche Abende zu zweit – kochen, genießen, lieben.',
        productSlugs: ['le-creuset-braeter', 'riedel-veloce', 'laguiole-steakmesser'],
        theme: 'valentines',
      },
      {
        slug: 'gemeinsam-kochen',
        name: 'Gemeinsam kochen',
        description: 'Die schönsten Momente entstehen in der Küche – mit dem richtigen Werkzeug.',
        productSlugs: ['kitchenaid-artisan', 'guede-brotmesser', 'peugeot-pfeffermuehle-paris'],
        theme: 'valentines',
      },
    ],
    seo: {
      title: 'Valentinstag Geschenke 2025 – Zeitlose Ideen für die Liebe',
      description:
        'Entdecken Sie unsere handverlesenen Valentinstag-Geschenke. Qualitätsprodukte, die ein Leben lang halten – so wie die Liebe.',
    },
    campaign: {
      startDate: '2025-01-20',
      endDate: '2025-02-15',
      ctaText: 'Jetzt Valentinstag-Geschenk finden',
      newsletterTag: 'valentinstag-2025',
    },
  },
]

// Helper functions

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug)
}

export function getCollectionProducts(collection: Collection): Product[] {
  return collection.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined)
}

export function getBundleProducts(bundle: ProductBundle): Product[] {
  return bundle.productSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined)
}

export function getAllCollectionSlugs(): string[] {
  return collections.map((c) => c.slug)
}

export function isCollectionActive(collection: Collection): boolean {
  if (!collection.campaign) return true

  const now = new Date()
  const start = new Date(collection.campaign.startDate)
  const end = new Date(collection.campaign.endDate)

  return now >= start && now <= end
}

export function getActiveCollections(): Collection[] {
  return collections.filter(isCollectionActive)
}
