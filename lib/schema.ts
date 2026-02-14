import { Product } from './products'
import { CONTACT_INFO, DOMAIN_INFO } from './contact-constants'

/**
 * JSON-LD Schema generators for SEO and AI visibility
 * Implements schema.org structured data for products, breadcrumbs, organization, and website
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
    additionalProperty: [
      ...product.features.map((feature) => ({
        '@type': 'PropertyValue' as const,
        name: 'Feature',
        value: feature,
      })),
      {
        '@type': 'PropertyValue' as const,
        name: 'Heritage',
        value: product.heritage,
      },
      {
        '@type': 'PropertyValue' as const,
        name: 'Warranty',
        value: product.warranty,
      },
    ],
    manufacturer: {
      '@type': 'Organization',
      name: product.brand,
    },
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
    url: DOMAIN_INFO.url,
    logo: `${DOMAIN_INFO.url}/logo.png`,
    description:
      'Kuratierte Auswahl zeitloser Qualitätsprodukte, die Generationen überdauern. Von Lamy über Le Creuset bis Rimowa – handverlesene Klassiker, die ein Leben lang halten.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: CONTACT_INFO.name,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.street,
      postalCode: CONTACT_INFO.postalCode,
      addressLocality: CONTACT_INFO.city,
      addressCountry: 'DE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_INFO.email,
      contactType: 'customer service',
      availableLanguage: 'German',
    },
    sameAs: [],
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zeitlos Gute Produkte',
    url: DOMAIN_INFO.url,
    description:
      'Entdecke handverlesene Produkte, die Generationen überdauern. Qualitätsprodukte von Traditionsmarken wie Le Creuset, Barbour, Rimowa und mehr.',
    inLanguage: 'de-DE',
    publisher: {
      '@type': 'Organization',
      name: 'Zeitlos Gute Produkte',
      url: DOMAIN_INFO.url,
    },
  }
}

/**
 * Generates an ItemList schema for the homepage product listing.
 * Helps AI systems understand the curated product catalog.
 */
export function generateItemListSchema(productItems: { name: string; slug: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Zeitlose Klassiker – Unsere Produktempfehlungen',
    description: 'Handverlesene Qualitätsprodukte, die Generationen überdauern. Kuratiert nach Langlebigkeit, Handwerkskunst und zeitlosem Design.',
    numberOfItems: productItems.length,
    itemListElement: productItems.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        url: `${DOMAIN_INFO.url}/produkte/${product.slug}`,
        description: product.description,
      },
    })),
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
