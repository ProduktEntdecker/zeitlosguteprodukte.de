import { Product } from './products'

/**
 * JSON-LD Schema generators for SEO
 * Implements schema.org structured data for products, breadcrumbs, and organization
 */

export function generateProductSchema(product: Product, url: string) {
  // Parse price string like "199,00 €" to number
  const priceValue = product.price
    .replace(/[^\d,]/g, '')
    .replace(',', '.')

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.teaser,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: url,
      priceCurrency: 'EUR',
      price: priceValue,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Amazon',
      },
    },
    countryOfOrigin: {
      '@type': 'Country',
      name: product.madeIn,
    },
    category: product.category,
    additionalProperty: product.features.map((feature) => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature,
    })),
  }
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zeitlos Gute Produkte',
    url: 'https://zeitlosguteprodukte.de',
    logo: 'https://zeitlosguteprodukte.de/logo.png',
    description:
      'Kuratierte Auswahl zeitloser Qualitätsprodukte, die Generationen überdauern.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@zeitlosguteprodukte.de',
      contactType: 'customer service',
      availableLanguage: 'German',
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zeitlos Gute Produkte',
    url: 'https://zeitlosguteprodukte.de',
    description:
      'Entdecke handverlesene Produkte, die Generationen überdauern.',
    inLanguage: 'de-DE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zeitlosguteprodukte.de/?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export interface CollectionSchemaInput {
  name: string
  description: string
  products: { name: string; slug: string }[]
}

export function generateCollectionSchema(collection: CollectionSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: collection.name,
    description: collection.description,
    numberOfItems: collection.products.length,
    itemListElement: collection.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: `https://zeitlosguteprodukte.de/produkte/${product.slug}`,
      },
    })),
  }
}
