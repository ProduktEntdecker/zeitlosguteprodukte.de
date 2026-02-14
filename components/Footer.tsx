import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-creme-100">
      {/* Main Footer */}
      <div className="container-editorial py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-white">
                Zeitlos Gute Produkte
              </span>
            </Link>
            <p className="text-creme-400 text-body max-w-md mb-6 text-pretty">
              Wir finden die Produkte, die Generationen überdauern. Qualität statt
              Quantität, Handwerk statt Massenware, Nachhaltigkeit statt
              Wegwerfkultur.
            </p>
            <div className="line-accent bg-cognac-500" />
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <h4 className="text-overline text-creme-300 mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-creme-400 hover:text-white transition-colors duration-300"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/#produkte"
                  className="text-creme-400 hover:text-white transition-colors duration-300"
                >
                  Produkte
                </Link>
              </li>
              <li>
                <Link
                  href="/#newsletter"
                  className="text-creme-400 hover:text-white transition-colors duration-300"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Rechtliche Informationen">
            <h4 className="text-overline text-creme-300 mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/impressum"
                  className="text-creme-400 hover:text-white transition-colors duration-300"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-creme-400 hover:text-white transition-colors duration-300"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <span className="text-creme-500 text-sm">
                  * Affiliate-Links
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="container-editorial py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-creme-500 text-sm">
            © {currentYear} Zeitlos Gute Produkte. Alle Rechte vorbehalten.
          </p>

          <p className="text-creme-600 text-xs">
            Mit Sorgfalt kuratiert für Menschen, die Qualität schätzen.
          </p>
        </div>
      </div>
    </footer>
  )
}
