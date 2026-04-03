import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import {
  categories,
  getCategoryBySlug,
  getProductsByCategory,
} from '@/lib/products'
import type { CategorySlug } from '@/lib/products'
import { generateBreadcrumbSchema, generateItemListSchema } from '@/lib/schema'
import { safeJsonLd } from '@/lib/json-ld'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return { title: 'Kategorie nicht gefunden' }
  }

  return {
    title: category.seo.title,
    description: category.seo.description,
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      type: 'website',
      url: `https://zeitlosguteprodukte.de/kategorie/${category.slug}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category.slug as CategorySlug)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://zeitlosguteprodukte.de' },
    { name: 'Kategorien', url: 'https://zeitlosguteprodukte.de/kategorie' },
    {
      name: category.name,
      url: `https://zeitlosguteprodukte.de/kategorie/${category.slug}`,
    },
  ])

  const itemListSchema = generateItemListSchema(
    categoryProducts.map((p) => ({
      name: p.name,
      slug: p.slug,
      description: p.teaser,
    }))
  )

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(itemListSchema) }}
      />

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-creme-100 border-b border-navy-100">
          <div className="container-editorial py-4">
            <nav
              className="flex items-center gap-2 text-sm"
              aria-label="Brotkrümelnavigation"
            >
              <Link
                href="/"
                className="text-navy-500 hover:text-cognac-600 transition-colors"
              >
                Startseite
              </Link>
              <span className="text-navy-300">/</span>
              <Link
                href="/kategorie"
                className="text-navy-500 hover:text-cognac-600 transition-colors"
              >
                Kategorien
              </Link>
              <span className="text-navy-300">/</span>
              <span className="text-navy-700">{category.name}</span>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-creme-100">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="text-overline text-cognac-600 block mb-4">
                {categoryProducts.length}{' '}
                {categoryProducts.length === 1 ? 'Produkt' : 'Produkte'}
              </span>
              <h1 className="font-serif text-display lg:text-display-lg text-navy-900 mb-6">
                {category.name}
              </h1>
              <p className="text-body-lg text-navy-600 text-pretty">
                {category.description}
              </p>
              <div className="flex mt-8">
                <div className="line-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 lg:py-24 bg-creme-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 stagger-children">
              {categoryProducts.map((product, index) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
