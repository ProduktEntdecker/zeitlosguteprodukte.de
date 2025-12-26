export interface Product {
  slug: string
  name: string
  brand: string
  tagline: string
  teaser: string
  description: string
  image: string
  price: string
  affiliateUrl: string
  category: string
  heritage: string
  warranty: string
  madeIn: string
  features: string[]
  relatedSlugs: string[]
  seo: {
    title: string
    description: string
  }
}

export const products: Product[] = [
  {
    slug: 'lamy-2000',
    name: 'Lamy 2000',
    brand: 'Lamy',
    tagline: 'Der Füllfederhalter für die Ewigkeit',
    teaser:
      'Seit 1966 unverändert. Der Lamy 2000 vereint Bauhaus-Design mit makelloser Ingenieurskunst – ein Schreibgerät, das Generationen überdauert.',
    description: `
Der Lamy 2000 ist mehr als ein Füllfederhalter – er ist ein Statement. 1966 vom legendären Designer Gerd A. Müller entworfen, gilt er bis heute als Meisterwerk des deutschen Industriedesigns.

## Warum der Lamy 2000?

**Zeitloses Bauhaus-Design**
Die klaren Linien und die nahtlose Konstruktion aus Makrolon (glasfaserverstärktem Polycarbonat) und gebürstetem Edelstahl machen den Lamy 2000 zu einem Objekt von zeitloser Eleganz. Keine sichtbaren Schrauben, keine überflüssigen Details – nur pure Funktion in perfekter Form.

**Deutsche Ingenieurskunst**
Die 14-Karat-Goldfeder mit Platinüberzug gleitet sanft über das Papier. Der patentierte Kolbenfüllmechanismus funktioniert präzise und zuverlässig. Jedes Detail wurde bis zur Perfektion durchdacht.

**Gebaut für Generationen**
Während andere Schreibgeräte nach Jahren ersetzt werden müssen, verbessert sich der Lamy 2000 mit der Zeit. Die Feder passt sich Ihrer Handschrift an, das Material entwickelt eine edle Patina. Viele Exemplare werden von Generation zu Generation weitergegeben.

## Die Investition, die sich lohnt

Mit einem Preis von etwa 200€ ist der Lamy 2000 keine Impulskaufentscheidung. Aber bedenken Sie: Über 20, 30 oder gar 50 Jahre gerechnet, kostet Sie dieses Schreibgerät weniger als ein Euro pro Monat. Was bekommen Sie dafür? Ein Werkzeug, das jeden Schreibmoment zu einem bewussten Akt macht.

## Für wen ist der Lamy 2000?

- Profis, die täglich schreiben und Qualität zu schätzen wissen
- Design-Enthusiasten, die Bauhaus-Ästhetik lieben
- Menschen, die bewusst konsumieren wollen
- Sammler und Liebhaber feiner Schreibgeräte
    `,
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    price: '199,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B000UZL04K',
    category: 'Schreibgeräte',
    heritage: 'Seit 1966',
    warranty: 'Lebenslange Garantie auf die Feder',
    madeIn: 'Deutschland',
    features: [
      '14-Karat-Goldfeder mit Platinüberzug',
      'Makrolon-Gehäuse mit Edelstahlakzenten',
      'Kolbenfüllsystem',
      'Bauhaus-Design von Gerd A. Müller',
    ],
    relatedSlugs: ['moccamaster', 'rimowa-original'],
    seo: {
      title: 'Lamy 2000 Füllfederhalter – Zeitloses Bauhaus-Design seit 1966',
      description:
        'Der Lamy 2000 ist ein Meisterwerk deutschen Designs. Entdecken Sie den legendären Füllfederhalter mit 14-Karat-Goldfeder und lebenslanger Qualität.',
    },
  },
  {
    slug: 'le-creuset-braeter',
    name: 'Le Creuset Signature Bräter',
    brand: 'Le Creuset',
    tagline: 'Der Bräter, der Familien verbindet',
    teaser:
      'Handgefertigt in Frankreich seit 1925. Der Le Creuset Bräter ist nicht nur ein Kochtopf – er ist ein Erbstück, das Geschichten erzählt.',
    description: `
In einer Küche in der Picardie, im Norden Frankreichs, wurde 1925 der erste Le Creuset Bräter gegossen. Fast 100 Jahre später wird jedes Exemplar noch immer am gleichen Ort gefertigt – von Handwerkern, die ihr Wissen von Generation zu Generation weitergeben.

## Warum Le Creuset?

**Unvergleichliche Wärmeleitung**
Das emaillierte Gusseisen verteilt die Wärme gleichmäßig und speichert sie länger als jedes andere Material. Ihr Schmorgericht wird perfekt, Ihr Brot bekommt eine unvergleichliche Kruste.

**Lebensmittelecht für immer**
Die dreischichtige Emaillierung ist säure- und kratzfest. Keine Beschichtung, die sich ablöst. Keine Chemikalien, die ins Essen übergehen. Nur reines, geschmackneutrales Kochen.

**Ein Farbakzent für die Ewigkeit**
Das charakteristische Flame Orange, eingeführt 1925, ist heute so ikonisch wie am ersten Tag. Aber ob Cerise, Marseille Blau oder klassisches Schwarz – jede Farbe wird zur Signatur Ihrer Küche.

## Die Rechnung, die aufgeht

Ein Le Creuset Bräter kostet zwischen 250€ und 400€. Das klingt nach viel – bis Sie rechnen. Bei einer Lebensdauer von 50+ Jahren und wöchentlicher Nutzung sind das weniger als 20 Cent pro Nutzung. Dazu: Kein Ersatzkauf, keine Beschichtung, die erneuert werden muss, keine Enttäuschungen.

## Von Generation zu Generation

Es gibt kaum ein anderes Küchenutensil, das so oft vererbt wird wie ein Le Creuset. In vielen Familien sind Bräter aus den 1950ern noch im täglichen Einsatz. Das ist nachhaltiger Konsum in seiner schönsten Form.
    `,
    image: 'https://images.unsplash.com/photo-1584990347449-a8f1d78f7fbc?w=800&q=80',
    price: '299,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B00005QFQ5',
    category: 'Küche',
    heritage: 'Seit 1925',
    warranty: 'Lebenslange Garantie',
    madeIn: 'Frankreich',
    features: [
      'Emailliertes Gusseisen',
      'Handgefertigt in Fresnoy-le-Grand',
      'Für alle Herdarten inkl. Induktion',
      'Ofenfest bis 260°C',
    ],
    relatedSlugs: ['moccamaster', 'lamy-2000'],
    seo: {
      title: 'Le Creuset Bräter – Französische Handwerkskunst seit 1925',
      description:
        'Der Le Creuset Signature Bräter ist ein Erbstück für Generationen. Handgefertigt in Frankreich, mit lebenslanger Garantie.',
    },
  },
  {
    slug: 'barbour-bedale',
    name: 'Barbour Bedale Wachsjacke',
    brand: 'Barbour',
    tagline: 'Die Jacke, die Geschichte schreibt',
    teaser:
      'Seit 1894 schützt Barbour vor Wind und Wetter. Die Bedale ist das Arbeitspferd der Kollektion – robust, zeitlos und unverwüstlich.',
    description: `
Als John Barbour 1894 seine erste Wachsjacke in South Shields fertigte, ahnte er nicht, dass er eine britische Ikone erschaffen würde. Heute, 130 Jahre später, ist Barbour das Synonym für wetterfeste Eleganz.

## Die Bedale: Ein britischer Klassiker

**Entwickelt für das Landleben**
Die Bedale wurde ursprünglich für Reiter entworfen. Die kürzere Schnittform, die Reitschlitze und die praktischen Taschen machen sie zum perfekten Begleiter für alle, die draußen aktiv sind – ob auf dem Land oder in der Stadt.

**Thornproof-Wachs: Natur trifft Funktion**
Das legendäre Thornproof-Wachs, eine Mischung aus Baumwolle und natürlichem Wachs, wurde entwickelt, um Dornen, Regen und Wind zu trotzen. Es atmet, schützt und entwickelt mit der Zeit eine einzigartige Patina.

**Reparieren statt Wegwerfen**
Barbour bietet einen Rewaxing-Service und Reparaturen an. Eine Jacke, die nach 20 Jahren Zeichen des Lebens zeigt, wird nicht ersetzt – sie wird aufgearbeitet. Das ist die Philosophie, die wir brauchen.

## Die königliche Verbindung

Barbour hält drei Royal Warrants – Hoflieferantenpatente von Queen Elizabeth II, dem Duke of Edinburgh und dem Prince of Wales. Aber man muss kein Royal sein, um die Qualität zu schätzen.

## Eine Jacke, viele Leben

Die Bedale passt zum Spaziergang mit dem Hund genauso wie zum Business-Casual im Büro. Mit einem guten Pullover darunter ist sie im Herbst perfekt, mit Innenfutter meistert sie den Winter. Sie ist nicht modisch – sie ist zeitlos.
    `,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    price: '319,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B008J3VTVW',
    category: 'Kleidung',
    heritage: 'Seit 1894',
    warranty: '2 Jahre + Rewaxing-Service',
    madeIn: 'England',
    features: [
      'Thornproof-Wachsbaumwolle',
      'Cord-Kragen',
      'Zwei-Wege-Reißverschluss mit Druckknöpfen',
      'Handwärmertaschen',
    ],
    relatedSlugs: ['rimowa-original', 'le-creuset-braeter'],
    seo: {
      title: 'Barbour Bedale Wachsjacke – Britische Qualität seit 1894',
      description:
        'Die Barbour Bedale ist ein Klassiker der britischen Herrenmode. Wetterfest, zeitlos und reparierbar – für ein Leben lang.',
    },
  },
  {
    slug: 'moccamaster',
    name: 'Moccamaster KBG Select',
    brand: 'Technivorm Moccamaster',
    tagline: 'Kaffee, wie er sein sollte',
    teaser:
      'Handgefertigt in den Niederlanden. Der Moccamaster brüht Kaffee bei perfekten 92-96°C – für Geschmack, den keine Kapselmaschine erreicht.',
    description: `
In einer Welt von Kapselmaschinen und Vollautomaten ist der Moccamaster eine Anomalie: Eine Filterkaffeemaschine, handgefertigt in den Niederlanden, die seit 1968 nahezu unverändert gebaut wird. Warum? Weil Perfektion keine Verbesserung braucht.

## Die Wissenschaft des perfekten Kaffees

**Das Geheimnis der Temperatur**
Der Moccamaster erreicht innerhalb von Sekunden die ideale Brühtemperatur von 92-96°C – und hält sie konstant. Die meisten günstigen Kaffeemaschinen schaffen das nicht. Das Ergebnis: Optimale Extraktion, voller Geschmack, keine Bitterkeit.

**Der 6-Minuten-Standard**
Die Specialty Coffee Association empfiehlt eine Brühzeit von 4-6 Minuten für Filterkaffee. Der Moccamaster ist darauf kalibriert und erfüllt als eine von wenigen Maschinen die SCA-Zertifizierung.

**Kupfer statt Kunststoff**
Das Heizelement aus Kupfer überträgt die Wärme effizienter als jedes andere Material. Es ist langlebiger, präziser und macht den Unterschied, den Sie schmecken können.

## Handarbeit aus Amerongen

Jeder Moccamaster wird von Hand montiert, getestet und signiert. Gerard-Clement Smit gründete Technivorm 1964 mit der Vision, die beste Kaffeemaschine der Welt zu bauen. 60 Jahre später hat sich daran nichts geändert.

## Die ehrliche Alternative

Ein Moccamaster kostet etwa 300€. Eine Kapselmaschine kostet 100€ – plus 30-50 Cent pro Kapsel. Nach 1.000 Tassen haben Sie mit dem Moccamaster über 200€ gespart. Nach 5.000 Tassen über 1.000€. Und der Moccamaster funktioniert dann immer noch.
    `,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    price: '299,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B07NQ7WKXH',
    category: 'Küche',
    heritage: 'Seit 1968',
    warranty: '5 Jahre',
    madeIn: 'Niederlande',
    features: [
      'SCA-zertifiziert',
      'Kupfer-Heizelement',
      'Brühtemperatur 92-96°C',
      'Handgefertigt in Amerongen',
    ],
    relatedSlugs: ['le-creuset-braeter', 'lamy-2000'],
    seo: {
      title: 'Moccamaster KBG Select – Die beste Filterkaffeemaschine',
      description:
        'Der Moccamaster KBG Select brüht Kaffee bei perfekter Temperatur. Handgefertigt in Holland, mit 5 Jahren Garantie.',
    },
  },
  {
    slug: 'rimowa-original',
    name: 'Rimowa Original Cabin',
    brand: 'Rimowa',
    tagline: 'Reisen mit Haltung',
    teaser:
      'Das geriffelte Aluminium ist zum Symbol für anspruchsvolles Reisen geworden. Seit 1898 baut Rimowa Koffer, die ein Leben lang halten.',
    description: `
1898 gründete Paul Morszeck eine Koffermanufaktur in Köln. 1937 entdeckte sein Sohn Richard das Potenzial von Aluminium – inspiriert von den Junkers-Flugzeugen der Zeit. Die charakteristischen Rillen, ursprünglich für Stabilität entwickelt, wurden zur Ikone des Reisens.

## Warum Rimowa?

**Aluminium der Luftfahrtklasse**
Rimovas Koffer werden aus dem gleichen Aluminium gefertigt, das im Flugzeugbau verwendet wird. Leicht, stabil und praktisch unzerstörbar. Dellen? Gehören dazu. Sie erzählen die Geschichte Ihrer Reisen.

**Made in Germany**
Jeder Rimowa-Koffer durchläuft über 90 Arbeitsschritte, viele davon in Handarbeit. Die Fertigung findet in Köln und Tschechien statt – nach deutschen Qualitätsstandards.

**Das Multiwheel-System**
Die vier Doppelrollen (8 Räder insgesamt) laufen auf Kugellagern. Das Ergebnis: Der Koffer gleitet mühelos, selbst vollgepackt. Kein Ziehen, kein Kämpfen.

## Ein Koffer fürs Leben

Rimowa bietet einen lebenslangen Funktionalitätsservice. Räder, Griffe, Schlösser – alles kann ersetzt werden. Ein Rimowa, der 1970 gekauft wurde, kann 2024 noch repariert werden. Das ist Nachhaltigkeit, die funktioniert.

## Die Investition

Mit Preisen ab 800€ ist ein Rimowa keine kleine Anschaffung. Aber rechnen wir: Bei 20 Jahren Nutzung und zwei Reisen pro Jahr sind das 20€ pro Reise. Für einen Koffer, der Ihre Sachen schützt, leicht zu manövrieren ist und jede Sicherheitskontrolle übersteht.
    `,
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80',
    price: '880,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B07PNMK8VG',
    category: 'Reisen',
    heritage: 'Seit 1898',
    warranty: 'Lebenslanger Funktionalitätsservice',
    madeIn: 'Deutschland',
    features: [
      'Aluminium-Magnesium-Legierung',
      'Multiwheel-System mit 8 Rädern',
      'TSA-Schlösser integriert',
      'Flex-Divider-System',
    ],
    relatedSlugs: ['barbour-bedale', 'lamy-2000'],
    seo: {
      title: 'Rimowa Original Cabin – Deutscher Luxuskoffer seit 1898',
      description:
        'Der Rimowa Original Cabin ist ein Meisterwerk deutscher Ingenieurskunst. Aluminium, Handarbeit, lebenslanger Service.',
    },
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
