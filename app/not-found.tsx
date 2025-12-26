import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-creme-100 py-32">
        <div className="container-editorial text-center">
          <span className="text-overline text-cognac-600 block mb-4">
            404 – Seite nicht gefunden
          </span>

          <h1 className="font-serif text-display text-navy-900 mb-6">
            Diese Seite existiert
            <br />
            leider nicht.
          </h1>

          <p className="text-body-lg text-navy-600 max-w-md mx-auto mb-10">
            Vielleicht wurde sie verschoben oder der Link war fehlerhaft.
            Entdecken Sie stattdessen unsere zeitlosen Produkte.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="btn-primary">
              <span>Zur Startseite</span>
            </Link>

            <Link href="/#produkte" className="btn-secondary">
              <span>Zu den Produkten</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
