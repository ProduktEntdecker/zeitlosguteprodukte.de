import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, getProductsByCategory } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Kategorien — Zeitlose Produkte nach Bereich',
  description:
    'Entdecken Sie unsere kuratierten Kategorien: Küche, Tischkultur und Outdoor & Reisen. Handverlesene Qualitätsprodukte, die ein Leben lang halten.',
  alternates: {
    canonical: '/kategorie',
  },
}

export default function CategoriesOverviewPage() {
  return (
    <>
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

        {/* Page Header */}
        <section className="py-16 lg:py-24 bg-creme-100">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-overline text-cognac-600 block mb-4">
                Unsere Kategorien
              </span>
              <h1 className="font-serif text-display text-navy-900 mb-6">
                Zeitlose Qualität,
                <br />
                nach Bereich
              </h1>
              <p className="text-body-lg text-navy-600 text-pretty">
                Jedes Produkt wird sorgfältig ausgewählt und einer passenden
                Kategorie zugeordnet. Finden Sie genau das, was Ihren Ansprüchen
                entspricht.
              </p>
              <div className="flex justify-center mt-8">
                <div className="line-accent" />
              </div>
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
                    className="group block bg-white border border-navy-100 p-8 lg:p-10 hover:border-cognac-300 transition-all duration-300"
                  >
                    <span className="text-overline text-cognac-600 block mb-3">
                      {productCount} {productCount === 1 ? 'Produkt' : 'Produkte'}
                    </span>

                    <h2 className="font-serif text-headline text-navy-900 mb-4 group-hover:text-cognac-700 transition-colors duration-300">
                      {category.name}
                    </h2>

                    <p className="text-body text-navy-600 mb-6 text-pretty">
                      {category.description}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-cognac-600 group-hover:gap-3 transition-all duration-300">
                      Entdecken
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
