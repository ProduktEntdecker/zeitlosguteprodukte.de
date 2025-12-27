import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const viewport: Viewport = {
  themeColor: '#1a2744',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Zeitlos Gute Produkte | Qualität, die ein Leben lang hält',
    template: '%s | Zeitlos Gute Produkte',
  },
  description:
    'Entdecke handverlesene Produkte, die Generationen überdauern. Von Lamy über Le Creuset bis Rimowa – wir finden die zeitlosen Klassiker.',
  keywords: [
    'zeitlose Produkte',
    'Qualitätsprodukte',
    'Buy it for life',
    'BIFL',
    'Lamy 2000',
    'Le Creuset',
    'Barbour',
    'Moccamaster',
    'Rimowa',
    'Langlebige Produkte',
  ],
  authors: [{ name: 'Zeitlos Gute Produkte' }],
  creator: 'Zeitlos Gute Produkte',
  publisher: 'Zeitlos Gute Produkte',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zeitlosguteprodukte.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://zeitlosguteprodukte.de',
    siteName: 'Zeitlos Gute Produkte',
    title: 'Zeitlos Gute Produkte | Qualität, die ein Leben lang hält',
    description:
      'Entdecke handverlesene Produkte, die Generationen überdauern. Von Lamy über Le Creuset bis Rimowa – wir finden die zeitlosen Klassiker.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zeitlos Gute Produkte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeitlos Gute Produkte | Qualität, die ein Leben lang hält',
    description:
      'Entdecke handverlesene Produkte, die Generationen überdauern.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen">
        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" aria-hidden="true" />

        {children}

        {/* Plausible Analytics - Privacy-friendly, no cookies */}
        <Script
          src="https://plausible.io/js/pa-D0PANXj48WoiZS7AH8G0H.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`}
        </Script>
      </body>
    </html>
  )
}
