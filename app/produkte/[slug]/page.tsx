import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AffiliateLink, {
  AffiliatePrice,
  AffiliateDisclosure,
} from '@/components/AffiliateLink'
import ProductCard from '@/components/ProductCard'
import {
  products,
  getProductBySlug,
  getRelatedProducts,
  getAllProductSlugs,
} from '@/lib/products'
import {
  generateProductSchema,
  generateBreadcrumbSchema,
} from '@/lib/schema'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all products
export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produkt nicht gefunden',
    }
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      type: 'article',
      url: `https://zeitloseprodukte.de/produkte/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.description,
      images: [product.image],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  // Parse markdown-style content to HTML-like sections
  const contentSections = product.description.split('\n\n').filter(Boolean)

  // Generate JSON-LD schemas for SEO
  const productUrl = `https://zeitlosguteprodukte.de/produkte/${product.slug}`
  const productSchema = generateProductSchema(product, productUrl)
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://zeitlosguteprodukte.de' },
    { name: 'Produkte', url: 'https://zeitlosguteprodukte.de/#produkte' },
    { name: product.name, url: productUrl },
  ])

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-creme-100 border-b border-navy-100">
          <div className="container-editorial py-4">
            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-navy-500 hover:text-cognac-600 transition-colors"
              >
                Startseite
              </Link>
              <span className="text-navy-300">/</span>
              <Link
                href="/#produkte"
                className="text-navy-500 hover:text-cognac-600 transition-colors"
              >
                Produkte
              </Link>
              <span className="text-navy-300">/</span>
              <span className="text-navy-700">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-creme-100 py-16 lg:py-24">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Image */}
              <div className="relative aspect-[4/5] lg:aspect-square bg-creme-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Heritage badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm text-overline text-navy-700">
                    {product.heritage}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-overline text-cognac-600 mb-4">
                  {product.brand}
                </span>

                <h1 className="font-serif text-display text-navy-900 mb-4">
                  {product.name}
                </h1>

                <p className="text-title text-navy-600 mb-8 text-pretty">
                  {product.tagline}
                </p>

                <div className="line-accent mb-8" />

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-overline text-navy-400 mb-1">Hergestellt in</p>
                    <p className="text-body font-medium text-navy-800">
                      {product.madeIn}
                    </p>
                  </div>
                  <div>
                    <p className="text-overline text-navy-400 mb-1">Kategorie</p>
                    <p className="text-body font-medium text-navy-800">
                      {product.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-overline text-navy-400 mb-1">Garantie</p>
                    <p className="text-body font-medium text-navy-800">
                      {product.warranty}
                    </p>
                  </div>
                  <div>
                    <p className="text-overline text-navy-400 mb-1">Tradition</p>
                    <p className="text-body font-medium text-navy-800">
                      {product.heritage}
                    </p>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="bg-white p-6 border border-navy-100">
                  <AffiliatePrice price={product.price} />

                  <div className="mt-6">
                    <AffiliateLink
                      href={product.affiliateUrl}
                      productSlug={product.slug}
                      productName={product.name}
                      variant="button"
                      className="w-full justify-center"
                    >
                      Jetzt kaufen bei Amazon
                    </AffiliateLink>
                  </div>

                  <AffiliateDisclosure className="mt-4" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-24">
          <div className="container-editorial">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Article Content */}
              <article className="lg:col-span-2 prose prose-lg max-w-none">
                {contentSections.map((section, index) => {
                  // Check if it's a heading
                  if (section.startsWith('## ')) {
                    return (
                      <h2
                        key={index}
                        className="font-serif text-headline text-navy-900 mt-12 mb-6 first:mt-0"
                      >
                        {section.replace('## ', '')}
                      </h2>
                    )
                  }

                  // Check if it's a subheading (bold line)
                  if (section.startsWith('**') && section.endsWith('**')) {
                    return (
                      <h3
                        key={index}
                        className="font-serif text-title text-navy-800 mt-8 mb-4"
                      >
                        {section.replace(/\*\*/g, '')}
                      </h3>
                    )
                  }

                  // Check if it's a list
                  if (section.startsWith('- ')) {
                    const items = section.split('\n').filter((line) => line.startsWith('- '))
                    return (
                      <ul key={index} className="my-6 space-y-3">
                        {items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-body text-navy-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cognac-500 mt-2.5 flex-shrink-0" />
                            <span>{item.replace('- ', '')}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  // Regular paragraph
                  return (
                    <p
                      key={index}
                      className="text-body-lg text-navy-700 my-6 text-pretty leading-relaxed"
                    >
                      {section.split('**').map((part, i) =>
                        i % 2 === 1 ? (
                          <strong key={i} className="font-semibold text-navy-800">
                            {part}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  )
                })}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                  {/* Features Card */}
                  <div className="bg-white p-6 border border-navy-100">
                    <h3 className="font-serif text-title text-navy-900 mb-6">
                      Highlights
                    </h3>
                    <ul className="space-y-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-cognac-600 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-body text-navy-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buy Card */}
                  <div className="bg-navy-900 p-6 text-white">
                    <p className="text-overline text-cognac-400 mb-2">
                      Überzeugt?
                    </p>
                    <p className="font-serif text-xl text-white mb-4">
                      {product.price}
                    </p>
                    <AffiliateLink
                      href={product.affiliateUrl}
                      productSlug={product.slug}
                      productName={product.name}
                      variant="button"
                      className="w-full justify-center bg-cognac-600 hover:bg-cognac-500"
                    >
                      Bei Amazon kaufen
                    </AffiliateLink>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-creme-50">
            <div className="container-editorial">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-overline text-cognac-600 block mb-4">
                    Das könnte Sie auch interessieren
                  </span>
                  <h2 className="font-serif text-headline text-navy-900">
                    Verwandte Produkte
                  </h2>
                </div>
                <Link
                  href="/#produkte"
                  className="hidden sm:flex items-center gap-2 text-sm font-medium text-cognac-600 hover:text-cognac-700 transition-colors"
                >
                  Alle Produkte
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.slug}
                    product={relatedProduct}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  )
}
