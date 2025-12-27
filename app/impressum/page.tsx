import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/lib/contact-constants'

export const metadata: Metadata = {
  title: 'Impressum – Zeitlos Gute Produkte',
  description: 'Impressum und rechtliche Angaben zu zeitlosguteprodukte.de',
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <span className="text-overline text-cognac-600 block mb-4">Rechtliches</span>
            <h1 className="font-serif text-display text-navy-900 mb-8">Impressum</h1>
            <div className="line-accent mb-12" />

            <div className="prose prose-lg max-w-none text-navy-700">
              <h2 className="font-serif text-headline text-navy-900 mt-0">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                {CONTACT_INFO.name}<br />
                {CONTACT_INFO.street}<br />
                {CONTACT_INFO.postalCode} {CONTACT_INFO.city}<br />
                {CONTACT_INFO.country}
              </p>

              <h2 className="font-serif text-headline text-navy-900">Kontakt</h2>
              <p>
                E-Mail: <a href={`mailto:${CONTACT_INFO.email}`} className="text-cognac-600 hover:text-cognac-700">{CONTACT_INFO.email}</a>
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                {CONTACT_INFO.name}<br />
                {CONTACT_INFO.street}<br />
                {CONTACT_INFO.postalCode} {CONTACT_INFO.city}
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                Hinweis zu Affiliate-Links
              </h2>
              <p>
                Diese Website enthält Affiliate-Links zu Produkten. Wenn Sie über diese Links
                einkaufen, erhalten wir eine kleine Provision. Für Sie entstehen dabei keine
                zusätzlichen Kosten. Die Provision beeinflusst nicht unsere redaktionelle
                Unabhängigkeit bei der Produktauswahl und -bewertung.
              </p>
              <p>
                Wir sind Teilnehmer am Amazon EU-Partnerprogramm, einem Affiliate-Programm,
                das es Webseiten ermöglicht, durch Werbung und Verlinkung zu Amazon.de
                Werbekostenerstattung zu verdienen.
              </p>

              <h2 className="font-serif text-headline text-navy-900">Haftungsausschluss</h2>

              <h3 className="text-title text-navy-800">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>

              <h3 className="text-title text-navy-800">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="text-title text-navy-800">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
