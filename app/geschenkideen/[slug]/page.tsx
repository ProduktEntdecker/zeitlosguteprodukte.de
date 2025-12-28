import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CollectionHero from '@/components/CollectionHero'
import BundleCard from '@/components/BundleCard'
import ProductCard from '@/components/ProductCard'
import NewsletterForm from '@/components/NewsletterForm'
import {
  getCollectionBySlug,
  getCollectionProducts,
  getAllCollectionSlugs,
} from '@/lib/collections'
import { generateCollectionSchema, generateBreadcrumbSchema } from '@/lib/schema'

interface CollectionPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all collections
export async function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    return {
      title: 'Geschenkideen nicht gefunden',
    }
  }

  return {
    title: collection.seo.title,
    description: collection.seo.description,
    openGraph: {
      title: collection.seo.title,
      description: collection.seo.description,
      type: 'website',
      url: `https://zeitlosguteprodukte.de/geschenkideen/${collection.slug}`,
      images: [
        {
          url: collection.heroImage,
          width: 1200,
          height: 630,
          alt: collection.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: collection.seo.title,
      description: collection.seo.description,
      images: [collection.heroImage],
    },
    alternates: {
      canonical: `/geschenkideen/${collection.slug}`,
    },
  }
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  const products = getCollectionProducts(collection)

  // Generate JSON-LD schemas
  const collectionSchema = generateCollectionSchema({
    name: collection.name,
    description: collection.tagline,
    products: products.map((p) => ({ name: p.name, slug: p.slug })),
  })
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://zeitlosguteprodukte.de' },
    { name: 'Geschenkideen', url: 'https://zeitlosguteprodukte.de/geschenkideen' },
    { name: collection.name, url: `https://zeitlosguteprodukte.de/geschenkideen/${collection.slug}` },
  ])

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <CollectionHero collection={collection} />

        {/* Bundles Section */}
        {collection.bundles && collection.bundles.length > 0 && (
          <section className="py-16 lg:py-24 bg-creme-50">
            <div className="container-editorial">
              <div className="text-center mb-12">
                <span className="text-overline text-cognac-600 block mb-4">
                  Kuratierte Sets
                </span>
                <h2 className="font-serif text-headline text-navy-900 mb-4">
                  Unsere Geschenk-Bundles
                </h2>
                <p className="text-body-lg text-navy-600 max-w-2xl mx-auto">
                  Sorgfältig zusammengestellte Produktkombinationen für
                  unvergessliche Momente zu zweit.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collection.bundles.map((bundle, index) => (
                  <BundleCard key={bundle.slug} bundle={bundle} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Products Section */}
        <section id="produkte" className="py-16 lg:py-24">
          <div className="container-editorial">
            <div className="text-center mb-12">
              <span className="text-overline text-cognac-600 block mb-4">
                Alle Produkte
              </span>
              <h2 className="font-serif text-headline text-navy-900 mb-4">
                Die vollständige Auswahl
              </h2>
              <p className="text-body-lg text-navy-600 max-w-2xl mx-auto">
                Jedes Produkt einzeln verfügbar – zeitlose Qualität,
                die Generationen überdauert.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 stagger-children">
              {products.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                  campaign={collection.campaign?.newsletterTag}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-navy-900">
          <div className="container-editorial">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-overline text-cognac-400 block mb-4">
                Keine Geschenkidee verpassen
              </span>
              <h2 className="font-serif text-headline text-white mb-6">
                Bleiben Sie inspiriert
              </h2>
              <p className="text-body-lg text-creme-100/80 mb-8">
                Erhalten Sie kuratierte Geschenkideen und exklusive Empfehlungen
                direkt in Ihr Postfach.
              </p>

              <div className="flex justify-center">
                <NewsletterForm
                  variant="hero"
                  campaign={collection.campaign?.newsletterTag}
                  source={`collection-${collection.slug}`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
