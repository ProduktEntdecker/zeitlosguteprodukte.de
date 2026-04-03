import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getProductsByCategory } from '@/lib/products'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { safeJsonLd } from '@/lib/json-ld'

export const metadata: Metadata = {
  title: 'Kategorien — Zeitlos Gute Produkte',
  description:
    'Entdecken Sie unsere kuratierten Kategorien: Küche, Tischkultur und Outdoor & Reisen. Zeitlose Qualitätsprodukte, die Generationen überdauern.',
}

export default function KategorienPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Startseite', url: 'https://zeitlosguteprodukte.de' },
    { name: 'Kategorien', url: 'https://zeitlosguteprodukte.de/kategorie' },
  ])

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="bg-creme-100 border-b border-navy-100">
          <div className="container-editorial py-4">
            <nav className="flex items-center gap-2 text-sm" aria-label="Brotkrümelnavigation">
              <Link
                href="/"
                className="text-navy-500 hover:text-cognac-600 transition-colors"
              >
                Startseite
              </Link>
              <span className="text-navy-300">/</span>
              <span className="text-navy-700">Kategorien</span>
            </nav>
          </div>
        </div>

        {/* Header Section */}
        <section className="py-16 lg:py-24 bg-creme-100">
          <div className="container-editorial">
            <div className="max-w-3xl">
              <span className="text-overline text-cognac-600 block mb-4">
                Unsere Kategorien
              </span>
              <h1 className="font-serif text-display lg:text-display-lg text-navy-900 mb-6">
                Zeitlose Qualität,
                <br />
                sortiert für Sie
              </h1>
              <p className="text-body-lg text-navy-600 text-pretty">
                Jedes Produkt gehört in eine Welt für sich. Entdecken Sie unsere
                handverlesenen Kategorien — von der Küche bis zum Reisegepäck.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16 lg:py-24 bg-creme-50">
          <div className="container-editorial">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {categories.map((category) => {
                const productCount = getProductsByCategory(category.slug).length
                return (
                  <Link
                    key={category.slug}
                    href={`/kategorie/${category.slug}`}
                    className="group block bg-white border border-navy-100 p-8 hover:border-cognac-400 transition-colors duration-300"
                  >
                    <span className="text-overline text-cognac-600 block mb-4">
                      {productCount} {productCount === 1 ? 'Produkt' : 'Produkte'}
                    </span>
                    <h2 className="font-serif text-headline text-navy-900 mb-4 group-hover:text-cognac-700 transition-colors duration-300">
                      {category.name}
                    </h2>
                    <p className="text-body text-navy-600 mb-6 text-pretty">
                      {category.description}
                    </p>
                    <span className="flex items-center gap-2 text-sm font-medium text-cognac-600 group-hover:gap-3 transition-all duration-300">
                      Kategorie entdecken
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
