import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Willkommen',
  description: 'Ihre Newsletter-Anmeldung wurde bestätigt. Willkommen bei Zeitlos Gute Produkte.',
  robots: { index: false, follow: false },
}

export default function WillkommenPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen flex items-center bg-creme-50">
        <div className="container-editorial py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-cognac-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-cognac-600"
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
              </div>
            </div>

            <h1 className="font-serif text-display text-navy-900 mb-6">
              Willkommen!
            </h1>

            <p className="text-body-lg text-navy-600 mb-4 text-pretty">
              Ihre E-Mail-Adresse wurde erfolgreich bestätigt.
              Ab jetzt erhalten Sie einmal pro Woche eine Empfehlung
              für ein zeitlos gutes Produkt.
            </p>

            <p className="text-body text-navy-500 mb-12">
              Kein Spam, keine Werbung &mdash; nur sorgfältig ausgewählte Klassiker
              mit Geschichte.
            </p>

            <Link
              href="/#produkte"
              className="btn-primary inline-flex"
            >
              <span>Produkte entdecken</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
