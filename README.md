# Zeitlos Gute Produkte

Eine kuratierte Plattform für zeitlose, hochwertige Produkte, die Generationen überdauern.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Newsletter**: Beehiiv Integration
- **SEO**: next-seo, next-sitemap
- **Deployment**: Vercel

## Features

- Responsive Landing Page mit Hero-Sektion
- Dynamische Produktseiten mit SEO-Optimierung
- Newsletter-Anmeldung via Beehiiv API
- Affiliate-Links mit UTM-Tracking
- Automatische Sitemap-Generierung
- Mobile-First Design

## Projektstruktur

```
zeitloseprodukte.de/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts        # Beehiiv Newsletter API
│   ├── produkte/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamische Produktseiten
│   ├── globals.css             # Globale Styles
│   ├── layout.tsx              # Root Layout mit Fonts
│   ├── not-found.tsx           # 404-Seite
│   └── page.tsx                # Landing Page
├── components/
│   ├── AffiliateLink.tsx       # Affiliate-Link mit UTM
│   ├── Footer.tsx              # Footer-Komponente
│   ├── Header.tsx              # Navigation
│   ├── NewsletterForm.tsx      # Newsletter-Formular
│   └── ProductCard.tsx         # Produkt-Karte
├── lib/
│   └── products.ts             # Produktdaten und Hilfsfunktionen
├── public/
│   └── robots.txt              # SEO robots.txt
├── .env.example                # Umgebungsvariablen Template
├── next-sitemap.config.js      # Sitemap-Konfiguration
├── next.config.js              # Next.js Konfiguration
├── package.json
├── postcss.config.js
├── tailwind.config.ts          # Tailwind mit Custom Theme
├── tsconfig.json
└── vercel.json                 # Vercel Deployment Config
```

## Setup

### 1. Repository klonen

```bash
git clone https://github.com/your-username/zeitloseprodukte.de.git
cd zeitloseprodukte.de
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. Umgebungsvariablen konfigurieren

```bash
cp .env.example .env.local
```

Bearbeiten Sie `.env.local` mit Ihren Credentials:

```env
BEEHIIV_API_KEY=your_api_key
BEEHIIV_PUBLICATION_ID=pub_xxxxx
SITE_URL=https://zeitloseprodukte.de
```

### 4. Development Server starten

```bash
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000).

### 5. Build für Production

```bash
npm run build
npm start
```

## Deployment auf Vercel

### Automatisches Deployment

1. Repository mit Vercel verbinden: [vercel.com/import](https://vercel.com/import)
2. Environment Variables in Vercel Dashboard hinzufügen
3. Deploy!

### Environment Variables auf Vercel

Fügen Sie folgende Variablen in den Vercel Project Settings hinzu:

| Variable                 | Description                        |
| ------------------------ | ---------------------------------- |
| `BEEHIIV_API_KEY`        | Ihr Beehiiv API Key                |
| `BEEHIIV_PUBLICATION_ID` | Ihre Beehiiv Publication ID        |
| `SITE_URL`               | `https://zeitloseprodukte.de`      |

## Produkte hinzufügen

Neue Produkte werden in `lib/products.ts` hinzugefügt:

```typescript
{
  slug: 'produkt-slug',
  name: 'Produktname',
  brand: 'Marke',
  tagline: 'Kurzer Slogan',
  teaser: 'Kurze Beschreibung (~100 Wörter)',
  description: `
    Ausführliche Beschreibung (600-1000 Wörter).
    Unterstützt Markdown-ähnliche Formatierung:
    ## Überschriften
    **Fettdruck**
    - Listen
  `,
  image: '/products/bild.jpg',
  price: '299,00 €',
  affiliateUrl: 'https://amazon.de/dp/XXXXX',
  category: 'Kategorie',
  heritage: 'Seit XXXX',
  warranty: 'Garantiebeschreibung',
  madeIn: 'Herstellungsland',
  features: ['Feature 1', 'Feature 2'],
  relatedSlugs: ['related-product-1', 'related-product-2'],
  seo: {
    title: 'SEO Title',
    description: 'SEO Description'
  }
}
```

## Design System

### Farben

| Name    | Hex       | Verwendung              |
| ------- | --------- | ----------------------- |
| Navy    | `#1a2744` | Primärfarbe, Text       |
| Cognac  | `#c66a34` | Akzente, CTAs           |
| Creme   | `#faf3e8` | Hintergründe            |

### Typografie

- **Headlines**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-Serif)

### Abstände

Das Design verwendet großzügige Margins und Paddings für ein magazinartiges, hochwertiges Erscheinungsbild.

## Newsletter (Beehiiv)

### API Setup

1. Beehiiv Account erstellen: [beehiiv.com](https://beehiiv.com)
2. API Key generieren unter Settings → Integrations
3. Publication ID aus Dashboard URL kopieren

### Webhook Response

```json
{
  "success": true,
  "message": "Vielen Dank für Ihre Anmeldung!",
  "email": "user@example.com"
}
```

## Affiliate Tracking

Alle Affiliate-Links werden automatisch mit UTM-Parametern versehen:

```
?utm_source=zeitloseprodukte
&utm_medium=affiliate
&utm_campaign=product-{slug}
&utm_content={variant}
```

## Performance

- Lighthouse Score: 95+ (angestrebt)
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## SEO

- Automatische Sitemap-Generierung
- Open Graph & Twitter Cards
- Strukturierte Daten (geplant)
- Optimierte Meta-Tags pro Seite

## Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.

---

Built with care for people who appreciate quality.
