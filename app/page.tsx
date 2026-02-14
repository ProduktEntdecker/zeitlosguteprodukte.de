import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import { generateItemListSchema } from '@/lib/schema'

export default function HomePage() {
  const itemListSchema = generateItemListSchema(
    products.map((p) => ({ name: p.name, slug: p.slug, description: p.teaser }))
  )

  return (
    <>
      {/* JSON-LD: ItemList mit allen kuratierten Produkten */}
      <Script
        id="itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

            {/* Subtle pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />

            {/* Radial glow */}
            <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-cognac-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-cognac-500/5 blur-[100px] rounded-full" />
          </div>

          {/* Content */}
          <div className="relative container-editorial py-32 lg:py-40">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8 animate-fade-in-down">
                <div className="w-12 h-px bg-cognac-500" />
                <span className="text-overline text-cognac-400">
                  Qualität, die ein Leben lang hält
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="font-serif text-display-lg lg:text-display-xl text-white mb-8 text-balance animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                Zeitlos Gute
                <br />
                <span className="text-cognac-400">Produkte</span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-body-lg lg:text-xl text-creme-300 max-w-xl mb-12 text-pretty opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Entdecken Sie handverlesene Produkte, die Generationen
                überdauern. Von Lamy über Le Creuset bis Rimowa – wir finden die
                zeitlosen Klassiker, die es wert sind.
              </p>

              {/* Newsletter Form */}
              <div
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <p className="text-sm text-creme-400 mb-4">
                  Erhalten Sie neue Entdeckungen direkt in Ihr Postfach:
                </p>
                <NewsletterForm variant="hero" />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a
              href="#produkte"
              className="flex flex-col items-center gap-2 text-creme-400 hover:text-white transition-colors"
              aria-label="Zu den Produkten scrollen"
            >
              <span className="text-xs uppercase tracking-widest">Entdecken</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 lg:py-32 bg-creme-100">
          <div className="container-editorial">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-display text-navy-900 mb-8">
                Weniger kaufen.
                <br />
                Besser kaufen.
              </h2>
              <p className="text-body-lg text-navy-600 text-pretty">
                In einer Welt des Überflusses setzen wir auf das Gegenteil:
                Produkte, die so gut gemacht sind, dass Sie sie ein Leben lang
                behalten wollen. Keine Trends, keine geplante Obsoleszenz – nur
                Qualität, Handwerk und zeitloses Design.
              </p>
              <div className="flex justify-center mt-8">
                <div className="line-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produkte" className="py-24 lg:py-32 bg-creme-50 scroll-mt-20">
          <div className="container-editorial">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <span className="text-overline text-cognac-600 block mb-4">
                  Unsere Empfehlungen
                </span>
                <h2 className="font-serif text-headline lg:text-display text-navy-900">
                  Zeitlose Klassiker
                </h2>
              </div>
              <p className="text-body text-navy-600 max-w-md lg:text-right">
                Jedes Produkt wird sorgfältig ausgewählt. Wir prüfen Qualität,
                Langlebigkeit und die Geschichte dahinter.
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 stagger-children">
              {products.map((product, index) => (
                <ProductCard key={product.slug} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-24 lg:py-32 bg-creme-200 scroll-mt-20">
          <div className="container-editorial">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-overline text-cognac-600 block mb-4">
                Newsletter
              </span>
              <h2 className="font-serif text-headline lg:text-display text-navy-900 mb-6">
                Neue Entdeckungen,
                <br />
                direkt zu Ihnen
              </h2>
              <p className="text-body-lg text-navy-600 mb-10 text-pretty">
                Einmal pro Woche stellen wir ein zeitloses Produkt vor – mit der
                Geschichte, den Details und dem Grund, warum es besonders ist.
              </p>

              <div className="flex justify-center">
                <NewsletterForm variant="section" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-navy-900">
          <div className="container-editorial">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-cognac-400 mb-2">
                  50+
                </p>
                <p className="text-sm text-creme-400">Jahre durchschnittliche Lebensdauer</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-cognac-400 mb-2">
                  100%
                </p>
                <p className="text-sm text-creme-400">Handverlesene Qualität</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-cognac-400 mb-2">
                  0
                </p>
                <p className="text-sm text-creme-400">Wegwerfprodukte</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-cognac-400 mb-2">
                  ∞
                </p>
                <p className="text-sm text-creme-400">Geschichten zu erzählen</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
