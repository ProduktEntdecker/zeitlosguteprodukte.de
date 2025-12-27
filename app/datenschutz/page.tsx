import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CONTACT_INFO } from '@/lib/contact-constants'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung – Zeitlos Gute Produkte',
  description: 'Datenschutzerklärung und Informationen zur Datenverarbeitung auf zeitlosguteprodukte.de',
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto">
            <span className="text-overline text-cognac-600 block mb-4">Rechtliches</span>
            <h1 className="font-serif text-display text-navy-900 mb-8">Datenschutzerklärung</h1>
            <div className="line-accent mb-12" />

            <div className="prose prose-lg max-w-none text-navy-700">
              <h2 className="font-serif text-headline text-navy-900 mt-0">
                1. Datenschutz auf einen Blick
              </h2>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                2. Verantwortliche Stelle
              </h2>
              <p>
                {CONTACT_INFO.name}<br />
                {CONTACT_INFO.street}<br />
                {CONTACT_INFO.postalCode} {CONTACT_INFO.city}<br />
                E-Mail: <a href={`mailto:${CONTACT_INFO.email}`} className="text-cognac-600">{CONTACT_INFO.email}</a>
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                3. Hosting
              </h2>
              <p>
                Wir hosten die Inhalte unserer Website bei Vercel Inc., 440 N Barranca Ave #4133,
                Covina, CA 91723, USA. Details entnehmen Sie der Datenschutzerklärung von Vercel:
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cognac-600"> vercel.com/legal/privacy-policy</a>
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                4. Plausible Analytics
              </h2>
              <p>
                Diese Website verwendet <a href="https://plausible.io" target="_blank" rel="noopener noreferrer" className="text-cognac-600">Plausible Analytics</a>,
                ein datenschutzfreundliches Analyse-Tool.
              </p>
              <p>
                <strong>Wichtig:</strong> Plausible verwendet keine Cookies und speichert keine
                personenbezogenen Daten. IP-Adressen werden nicht gespeichert. Die Nutzung erfolgt
                auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
                Eine Einwilligung ist nicht erforderlich.
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                5. Newsletter (Beehiiv)
              </h2>
              <p>
                Wenn Sie unseren Newsletter abonnieren, wird Ihre E-Mail-Adresse bei unserem
                Newsletter-Dienst Beehiiv gespeichert. Beehiiv ist ein Dienst der Beehiiv Inc.,
                USA.
              </p>
              <p>
                <strong>Erfasste Daten:</strong> E-Mail-Adresse, Zeitpunkt der Anmeldung,
                Öffnungs- und Klickraten (anonymisiert).<br />
                <strong>Rechtsgrundlage:</strong> Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).<br />
                <strong>Abmeldung:</strong> Jederzeit über den Link in jeder E-Mail oder per
                E-Mail an uns.
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                6. Affiliate-Links (Amazon)
              </h2>
              <p>
                Diese Website enthält Affiliate-Links zu Amazon. Wenn Sie auf diese Links klicken,
                werden Sie zu Amazon weitergeleitet. Amazon kann dabei Cookies setzen, um Ihren
                Besuch unserem Partner-Account zuzuordnen.
              </p>
              <p>
                Die Datenverarbeitung durch Amazon unterliegt der
                <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener noreferrer" className="text-cognac-600"> Amazon Datenschutzerklärung</a>.
                Wir erhalten von Amazon keine personenbezogenen Daten über Sie.
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                7. Ihre Rechte
              </h2>
              <p>
                Sie haben jederzeit das Recht auf:
              </p>
              <ul>
                <li>Auskunft über Ihre gespeicherten Daten</li>
                <li>Berichtigung unrichtiger Daten</li>
                <li>Löschung Ihrer Daten</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich an:
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-cognac-600"> {CONTACT_INFO.email}</a>
              </p>

              <h2 className="font-serif text-headline text-navy-900">
                8. Beschwerderecht
              </h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                Die für uns zuständige Behörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
              </p>

              <div className="mt-12 p-6 bg-creme-100 border border-navy-100">
                <p className="text-sm text-navy-600 m-0">
                  <strong>Stand:</strong> Dezember 2025<br />
                  Bei Fragen zum Datenschutz: <a href={`mailto:${CONTACT_INFO.email}`} className="text-cognac-600">{CONTACT_INFO.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
