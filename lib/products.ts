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
    image: '/images/products/le-creuset-braeter.webp',
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
    relatedSlugs: ['kitchenaid-artisan', 'peugeot-pfeffermuehle-paris'],
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
    image: '/images/products/barbour-bedale.webp',
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
    image: '/images/products/rimowa-original.webp',
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
    relatedSlugs: ['barbour-bedale', 'le-creuset-braeter'],
    seo: {
      title: 'Rimowa Original Cabin – Deutscher Luxuskoffer seit 1898',
      description:
        'Der Rimowa Original Cabin ist ein Meisterwerk deutscher Ingenieurskunst. Aluminium, Handarbeit, lebenslanger Service.',
    },
  },
  {
    slug: 'opinel-no8',
    name: 'Opinel No. 8',
    brand: 'Opinel',
    tagline: 'Das französische Taschenmesser mit Seele',
    teaser:
      'Seit 1890 unverändert. Das Opinel No. 8 vereint französische Handwerkskunst mit schlichter Eleganz – ein Messer, das Generationen begleitet.',
    description: `
In den französischen Alpen, im kleinen Dorf Chambéry, begann Joseph Opinel 1890 damit, Messer zu fertigen. 134 Jahre später wird das Opinel No. 8 noch immer in der gleichen Weise hergestellt – und ist zum meistverkauften Taschenmesser Frankreichs geworden.

## Warum das Opinel No. 8?

**Perfekte Einfachheit**
Ein Griff aus Buchenholz. Eine Klinge aus Kohlenstoffstahl. Ein genialer Sicherheitsmechanismus. Das Opinel beweist, dass großartiges Design nicht kompliziert sein muss. Es tut genau das, was es soll – und das perfekt.

**Die Virobloc-Sicherung**
1955 erfunden, verhindert der drehbare Ring am Griffansatz, dass sich die Klinge unbeabsichtigt öffnet oder schließt. Ein simples, aber geniales Detail, das bis heute unverändert funktioniert.

**Ein Messer, das Patina erzählt**
Anders als polierter Edelstahl entwickelt der Buchenholzgriff mit der Zeit eine einzigartige Maserung. Die Kohlenstoffstahlklinge nimmt Gebrauchsspuren auf. Jedes Opinel wird zu einem Unikat mit Geschichte.

## Für Kenner

Pablo Picasso nutzte ein Opinel zum Skulpturieren. Alain Ducasse empfiehlt es in seiner Küche. Das Victoria and Albert Museum zeigt es als Designikone. Und doch kostet es weniger als ein Restaurantbesuch.

## Die ehrliche Wahl

Für etwa 15€ bekommen Sie ein Messer, das ein Leben lang hält. Kein Marketing-Budget, keine Star-Designer, keine Gimmicks. Nur über 130 Jahre Erfahrung in der Kunst, ein perfektes Messer zu fertigen.
    `,
    image: '/images/products/opinel-no8.webp',
    price: '16,90 €',
    affiliateUrl: 'https://www.amazon.de/dp/B002SCUO04',
    category: 'Küche',
    heritage: 'Seit 1890',
    warranty: 'Lebenslange Garantie auf die Klinge',
    madeIn: 'Frankreich',
    features: [
      'Kohlenstoffstahl-Klinge (12C27)',
      'Buchenholz-Griff',
      'Virobloc-Sicherheitsring',
      'Handgefertigt in Chambéry',
    ],
    relatedSlugs: ['guede-brotmesser', 'laguiole-steakmesser'],
    seo: {
      title: 'Opinel No. 8 – Das legendäre französische Taschenmesser seit 1890',
      description:
        'Das Opinel No. 8 ist ein Klassiker französischer Messerschmiedekunst. Handgefertigt in Savoyen, Buchenholzgriff, lebenslange Qualität.',
    },
  },
  {
    slug: 'bialetti-moka-express',
    name: 'Bialetti Moka Express',
    brand: 'Bialetti',
    tagline: 'Der Espressokocher, der Italien eroberte',
    teaser:
      'Seit 1933 steht der kleine Mann mit Schnurrbart auf fast jedem italienischen Herd. Die Moka Express ist mehr als eine Kaffeekanne – sie ist italienische Lebensart.',
    description: `
1933 hatte Alfonso Bialetti eine Idee: Espresso für zu Hause, ohne teure Maschinen. Er beobachtete seine Frau beim Wäschewaschen mit einer Lisciveuse – einem Kessel, der heißes Wasser durch die Wäsche drückt – und übertrug das Prinzip auf Kaffee. Die Moka Express war geboren.

## Warum die Bialetti?

**Physik, die funktioniert**
Das Prinzip ist genial einfach: Wasser im unteren Behälter wird erhitzt, der entstehende Dampfdruck presst es durch das Kaffeepulver nach oben. Keine Elektronik, keine Verschleißteile, keine Schwachstellen. Nur Aluminium, Druck und Hitze.

**Design für die Ewigkeit**
Das Art-Déco-Design mit dem ikonischen achteckigen Körper hat sich seit 1933 nicht verändert. Warum auch? Es funktioniert, es sieht gut aus, es liegt perfekt in der Hand. Der kleine Mann mit Schnurrbart – „l'omino con i baffi" – ist zum Symbol italienischer Kaffeekultur geworden.

**In 90% aller italienischen Haushalte**
Das ist keine Marketing-Übertreibung, sondern Statistik. Die Moka Express ist so selbstverständlich wie der Kühlschrank. Sie gehört zur Familie.

## Die Rechnung, die aufgeht

Eine Moka Express für 6 Tassen kostet etwa 35€. Ein Espresso im Café kostet 1,50€. Nach 24 Espressi hat sich die Moka bezahlt – und funktioniert dann noch jahrzehntelang weiter. Ersatzteile gibt es überall, und sie kosten Centbeträge.

## Das Ritual zählt

Morgens den unteren Behälter mit Wasser füllen, das Kaffeepulver einfüllen, die Kanne auf den Herd stellen und warten, bis sie zu blubbern beginnt. Das ist kein Zeitverlust – das ist der Moment, in dem der Tag beginnt.
    `,
    image: '/images/products/bialetti-moka-express.webp',
    price: '34,90 €',
    affiliateUrl: 'https://www.amazon.de/dp/B0000AN3QI',
    category: 'Küche',
    heritage: 'Seit 1933',
    warranty: '2 Jahre',
    madeIn: 'Italien',
    features: [
      'Aluminium-Guss',
      'Für alle Herdarten (nicht Induktion)',
      'Patentiertes Sicherheitsventil',
      'Ergonomischer Griff',
    ],
    relatedSlugs: ['gmundner-keramik-fruehstueck', 'duralex-picardie'],
    seo: {
      title: 'Bialetti Moka Express – Der originale italienische Espressokocher',
      description:
        'Die Bialetti Moka Express ist seit 1933 das Symbol italienischer Kaffeekultur. Aluminium-Guss, zeitloses Design, perfekter Espresso.',
    },
  },
  {
    slug: 'peugeot-pfeffermuehle-paris',
    name: 'Peugeot Paris Pfeffermühle',
    brand: 'Peugeot',
    tagline: 'Das Original seit 1874',
    teaser:
      'Bevor Peugeot Autos baute, perfektionierten sie Mahlwerke. Die Paris-Mühle ist die Urform aller modernen Pfeffermühlen – und noch immer unübertroffen.',
    description: `
1810 begann die Familie Peugeot mit der Herstellung von Sägeblättern und Federn. 1840 erkannten sie, dass ihr gehärteter Stahl perfekt für Kaffeemühlen geeignet war. 1874 entstand die erste Pfeffermühle – und revolutionierte die Küche für immer.

## Warum Peugeot?

**Das Mahlwerk, das alles veränderte**
Das doppelte Helix-Mahlwerk aus gehärtetem Stahl zerreibt Pfefferkörner, statt sie zu zerquetschen. Das Ergebnis: Die ätherischen Öle bleiben erhalten, das Aroma entfaltet sich voll. Kein anderes Mahlwerk kommt der Präzision eines Peugeot gleich.

**Lebenslange Garantie auf das Mahlwerk**
Peugeot gibt lebenslange Garantie auf das Mahlwerk – nicht weil sie großzügig sind, sondern weil sie wissen, dass es nicht kaputt geht. Viele Peugeot-Mühlen aus den 1950ern funktionieren heute noch tadellos.

**Die schwarze Eleganz**
Das Paris u'Select Modell in mattem Schwarz ist die zeitlose Wahl. Der Mahlgrad lässt sich stufenlos einstellen – von grob für Steaks bis fein für Saucen. Ein Detail, das günstige Mühlen nicht bieten.

## Das Werkzeug der Profis

In Sterneküchen stehen Peugeot-Mühlen. Nicht als Dekoration, sondern als Arbeitswerkzeug. Wenn jede Sekunde zählt und jedes Detail schmeckt, vertraut man auf das Beste.

## Salz und Pfeffer – ein System

Peugeot bietet passende Salz- und Pfeffermühlen im gleichen Design. Das Salzmahlwerk ist speziell für die korrosive Eigenschaft von Salz angepasst – ein Detail, das bei günstigeren Mühlen oft übersehen wird.
    `,
    image: '/images/products/peugeot-pfeffermuehle-paris.webp',
    price: '44,90 €',
    affiliateUrl: 'https://www.amazon.de/dp/B001E5E0Y2',
    category: 'Küche',
    heritage: 'Seit 1874',
    warranty: 'Lebenslange Garantie auf das Mahlwerk',
    madeIn: 'Frankreich',
    features: [
      'Gehärtetes Stahlmahlwerk',
      'u\'Select Mahlgradeinstellung',
      'Buchenholz lackiert',
      '18 cm Höhe',
    ],
    relatedSlugs: ['le-creuset-braeter', 'opinel-no8'],
    seo: {
      title: 'Peugeot Paris Pfeffermühle – Das Original seit 1874',
      description:
        'Die Peugeot Paris Pfeffermühle setzt seit 1874 den Standard. Gehärtetes Stahlmahlwerk mit lebenslanger Garantie, handgefertigt in Frankreich.',
    },
  },
  {
    slug: 'kitchenaid-artisan',
    name: 'KitchenAid Artisan Küchenmaschine',
    brand: 'KitchenAid',
    tagline: 'Die Ikone der amerikanischen Küche',
    teaser:
      'Seit 1919 der Traum jeder Hobbyküche. Die Artisan ist keine Maschine – sie ist ein Statement. Empire Red ist die Farbe, die Küchen seit Jahrzehnten definiert.',
    description: `
1919 stellte Herbert Johnson die erste KitchenAid vor. Sein Ziel: Eine Maschine, die das mühsame Kneten von Hand überflüssig macht. Die Reaktion seiner Frau: „I don't care what you call it, it's the best kitchen aid I've ever had." Der Name war geboren.

## Warum die KitchenAid Artisan?

**Der Planetenrührwerk-Mechanismus**
Das Rührwerk rotiert nicht nur um die eigene Achse, sondern kreist gleichzeitig um die Schüssel – wie ein Planet um die Sonne. Das Ergebnis: 67 Berührungspunkte pro Umdrehung, perfekt vermischte Teige ohne tote Winkel.

**Gussmetall, kein Plastik**
Das Gehäuse aus Zinkdruckguss wiegt über 10 kg. Das ist keine Verschwendung – es ist Stabilität. Keine Vibration beim Kneten schwerer Teige, keine Bewegung auf der Arbeitsfläche.

**Ein Ökosystem an Zubehör**
Die Artisan ist erweiterbar: Fleischwolf, Nudelaufsatz, Eisbereiter, Zitruspresse – über 15 optionale Aufsätze machen sie zum Universalwerkzeug. Einmal kaufen, immer erweitern.

## Empire Red – Die Farbe, die bleibt

Seit den 1950ern ist Empire Red die Signaturfarbe von KitchenAid. Ein kräftiges, selbstbewusstes Rot, das in jeder Küche zum Blickfang wird. Während Modefarben kommen und gehen, bleibt Empire Red zeitlos.

## Die Investition in Ihre Küche

Mit etwa 500€ ist die Artisan keine Spontankaufentscheidung. Aber sie hält 20, 30, oft 50 Jahre. In manchen Familien werden KitchenAids vererbt – mit allen Geschichten von Geburtstagskuchen, Weihnachtsplätzchen und Sonntagsbroten.
    `,
    image: '/images/products/kitchenaid-artisan.webp',
    price: '499,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B00CPLGFTO',
    category: 'Küche',
    heritage: 'Seit 1919',
    warranty: '5 Jahre (EU), optional 10 Jahre',
    madeIn: 'USA',
    features: [
      'Planetenrührwerk',
      'Zinkdruckguss-Gehäuse',
      '4,8 Liter Edelstahlschüssel',
      '10 Geschwindigkeitsstufen',
    ],
    relatedSlugs: ['le-creuset-braeter', 'guede-brotmesser'],
    seo: {
      title: 'KitchenAid Artisan Empire Red – Die legendäre Küchenmaschine',
      description:
        'Die KitchenAid Artisan in Empire Red ist seit 1919 das Herzstück amerikanischer Küchen. Planetenrührwerk, Gussmetall, 5 Jahre Garantie.',
    },
  },
  {
    slug: 'guede-brotmesser',
    name: 'Güde Alpha Olive Brotmesser',
    brand: 'Güde',
    tagline: 'Solinger Schärfe trifft mediterranes Holz',
    teaser:
      'Handgeschmiedet in Solingen seit 1910. Das Güde Brotmesser mit Olivenholzgriff verbindet deutsche Klingenkunst mit der Wärme des Mittelmeers.',
    description: `
In Solingen, der Klingenstadt, schmiedet die Familie Güde seit 1910 Messer nach alter Tradition. Jedes Messer durchläuft über 60 Arbeitsschritte – die meisten davon von Hand. Das Alpha Olive Brotmesser ist die Krönung dieser Handwerkskunst.

## Warum Güde?

**Handgeschmiedet, nicht gestanzt**
Während Industriemesser aus Stahlplatten gestanzt werden, wird jede Güde-Klinge einzeln geschmiedet. Der Unterschied: Die Molekularstruktur des Stahls verdichtet sich, die Klinge wird härter, die Schärfe hält länger.

**Die Wellenschliff-Perfektion**
Der Wellenschliff eines Güde-Brotmessers ist nicht einfach „gezackt" – jede Welle ist präzise geschliffen, um Brotkruste zu durchdringen, ohne die weiche Krume zu zerdrücken. Das Ergebnis: Saubere Scheiben, kein Zerbröseln.

**Olivenholz aus Kalabrien**
Der Griff aus kalabrischem Olivenholz ist nicht nur schön – er ist funktional. Olivenholz ist dichter als andere Hölzer, nimmt weniger Feuchtigkeit auf und entwickelt mit der Zeit eine einzigartige Maserung.

## Das Messer fürs Leben

Ein Güde-Messer wird mit einem Echtheitszertifikat geliefert. Jedes trägt die Signatur des Schmieds. Bei sachgemäßer Pflege hält es mehrere Generationen – und wird dabei immer besser, weil es sich Ihrer Hand anpasst.

## Die Solinger Tradition

Solingen ist seit dem Mittelalter das Zentrum der deutschen Klingenproduktion. „Made in Solingen" ist ein geschütztes Qualitätssiegel, das nur Messer tragen dürfen, die vollständig in der Stadt gefertigt wurden.
    `,
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800&q=80',  // Platzhalterbild - Herstelleranfrage nötig
    price: '189,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B001RIYR78',
    category: 'Küche',
    heritage: 'Seit 1910',
    warranty: '3 Jahre + lebenslanger Nachschleifservice',
    madeIn: 'Deutschland (Solingen)',
    features: [
      'Handgeschmiedete Klinge',
      'Olivenholzgriff aus Kalabrien',
      'Wellenschliff',
      '32 cm Gesamtlänge',
    ],
    relatedSlugs: ['opinel-no8', 'laguiole-steakmesser'],
    seo: {
      title: 'Güde Alpha Olive Brotmesser – Handgeschmiedet in Solingen',
      description:
        'Das Güde Alpha Olive Brotmesser vereint Solinger Schmiedekunst mit kalabrischem Olivenholz. Handgeschmiedet, wellenschliff, ein Leben lang.',
    },
  },
  {
    slug: 'laguiole-steakmesser',
    name: 'Laguiole en Aubrac Steakmesser',
    brand: 'Forge de Laguiole',
    tagline: 'Das Messer aus dem Herzen Frankreichs',
    teaser:
      'Handgefertigt im Aveyron. Jedes Laguiole-Steakmesser mit Olivenholzgriff ist ein Unikat – geschmiedet von Meistern, die ihr Handwerk seit 1829 perfektionieren.',
    description: `
Im Hochland des Aubrac, im französischen Zentralmassiv, liegt das Dorf Laguiole. Hier, wo die Winter hart und die Sommer kurz sind, entwickelten Hirten im 19. Jahrhundert ein Messer, das allen Bedingungen standhält. Heute ist „Laguiole" weltweit ein Synonym für französische Messerkunst.

## Warum Laguiole en Aubrac?

**Die Biene als Zeichen**
Das charakteristische Bienenmotiv auf dem Griffrücken ist das Erkennungszeichen echter Laguiole-Messer. Die Biene – eigentlich eine stilisierte Fliege – symbolisiert Fleiß und Ausdauer der Handwerker.

**Olivenholz: Jedes Stück ein Unikat**
Das Olivenholz für die Griffe stammt aus der Provence. Jeder Griff zeigt eine einzigartige Maserung – kein Messer gleicht dem anderen. Mit der Zeit dunkelt das Holz nach und entwickelt eine warme Patina.

**Handarbeit vom Schmied bis zur Politur**
Ein echtes Laguiole en Aubrac durchläuft über 100 Arbeitsschritte. Vom Schmieden der Klinge über das Feilen der Biene bis zur finalen Politur – alles geschieht in Handarbeit, im Dorf Laguiole selbst.

## Das perfekte Steakmesser

Die Klinge aus französischem Sandvik-Stahl ist hart genug, um scharf zu bleiben, und weich genug, um nachgeschliffen zu werden. Sie gleitet durch ein Entrecôte wie durch Butter – und hinterlässt saubere Schnitte, die das Fleisch nicht zerreißen.

## Ein Geschenk mit Bedeutung

In Frankreich schenkt man Laguiole-Messer traditionell zu besonderen Anlässen. Zur Hochzeit, zum Berufseinstieg, zur Pensionierung. Das 6er-Set ist die klassische Wahl für den gedeckten Tisch.
    `,
    image: '/images/products/laguiole-steakmesser.webp',
    price: '289,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B07D4BQRJ9',
    category: 'Küche',
    heritage: 'Seit 1829',
    warranty: '5 Jahre',
    madeIn: 'Frankreich (Aubrac)',
    features: [
      'Sandvik-Stahlklinge',
      'Olivenholzgriff',
      'Bienen-Intarsie',
      '6er-Set mit Holzkassette',
    ],
    relatedSlugs: ['guede-brotmesser', 'opinel-no8'],
    seo: {
      title: 'Laguiole en Aubrac Steakmesser – Französische Handwerkskunst',
      description:
        'Laguiole en Aubrac Steakmesser mit Olivenholzgriff. Handgeschmiedet in Frankreich, 6er-Set in Holzkassette, für Genießer.',
    },
  },
  {
    slug: 'duralex-picardie',
    name: 'Duralex Picardie Gläser',
    brand: 'Duralex',
    tagline: '80 Jahre französische Glaskunst',
    teaser:
      'Das Glas aus der Schulkantine, das zum Designklassiker wurde. Duralex Picardie ist unzerbrechlich, stapelbar und zeitlos – seit 1945.',
    description: `
1945, kurz nach Ende des Zweiten Weltkriegs, begann Duralex in La Chapelle-Saint-Mesmin mit der Produktion von gehärtetem Glas. Das Ziel: Gläser, die nicht zerbrechen. Die Picardie-Serie wurde zum Inbegriff französischer Alltagskultur.

## Warum Duralex?

**Gehärtetes Glas: Fast unzerbrechlich**
Das Tempern-Verfahren macht Duralex-Gläser 2,5-mal stärker als normales Glas. Sie widerstehen Stößen, Stürzen und extremen Temperaturschwankungen. Falls sie doch einmal brechen, zerfallen sie in stumpfe Stücke statt scharfe Splitter.

**Das Design, das bleibt**
Die charakteristische Form mit den feinen Rillen und der nach oben verjüngten Silhouette wurde nie verändert. Sie liegt perfekt in der Hand, stapelt sich platzsparend und sieht auf jedem Tisch gut aus – vom Bistro bis zum Fine Dining.

**Made in France, nicht in China**
Während viele Glashersteller die Produktion nach Asien verlagert haben, fertigt Duralex noch immer in Frankreich. 2022 wurde das Unternehmen von der Belegschaft übernommen – ein Bekenntnis zur lokalen Produktion.

## Das Glas für alles

Wasser, Wein, Kaffee, Saft – die Picardie funktioniert für alles. In französischen Cafés ist sie Standard. In skandinavischen Designmagazinen wird sie gefeiert. Auf Ihrem Tisch macht sie einfach Sinn.

## 80 Jahre Jubiläum

Die Picardie-Gläser zum 80. Jubiläum sind eine Hommage an die ursprüngliche Version. Das 25cl-Format ist das vielseitigste – groß genug für ein Glas Wein, klein genug für einen Espresso mit Wasser.
    `,
    image: '/images/products/duralex-picardie.webp',
    price: '24,90 €',
    affiliateUrl: 'https://www.amazon.de/dp/B00004S1CQ',
    category: 'Küche',
    heritage: 'Seit 1945',
    warranty: '10 Jahre gegen Produktionsfehler',
    madeIn: 'Frankreich',
    features: [
      'Gehärtetes Glas (Temperglas)',
      '25cl Fassungsvermögen',
      'Stapelbar',
      '6er-Set',
    ],
    relatedSlugs: ['riedel-veloce', 'bialetti-moka-express'],
    seo: {
      title: 'Duralex Picardie Gläser – Französischer Klassiker seit 1945',
      description:
        'Duralex Picardie 25cl: Das ikonische französische Trinkglas. Gehärtet, stapelbar, zeitlos. 6er-Set, Made in France.',
    },
  },
  {
    slug: 'riedel-veloce',
    name: 'Riedel Veloce Pinot Noir Gläser',
    brand: 'Riedel',
    tagline: 'Glas für Kenner, nicht für Angeber',
    teaser:
      'Die 11. Generation einer österreichischen Glasmacherfamilie. Riedel Veloce bringt das Beste aus jedem Pinot Noir – durch Form, die Wissenschaft ist.',
    description: `
1756 gründete Johann Christoph Riedel eine Glashütte in Böhmen. Seitdem hat die Familie Riedel die Kunst des Weinglases perfektioniert. Die 11. Generation, Georg Riedel, revolutionierte in den 1970ern die Branche mit der Erkenntnis: Die Form des Glases verändert den Geschmack des Weins.

## Warum Riedel Veloce?

**Die Wissenschaft der Form**
Die bauchige Form des Veloce Pinot Noir ist nicht zufällig. Sie sammelt die flüchtigen Aromen, lenkt den Wein auf die richtige Stelle der Zunge und lässt ihn optimal atmen. Das ist keine Marketing-Behauptung – es ist durch Blindverkostungen belegt.

**Maschinengeblasen, aber exzellent**
Anders als die mundgeblasene Sommeliers-Serie wird die Veloce-Serie maschinell gefertigt. Das macht sie erschwinglicher – ohne Kompromisse bei der Glasqualität. Das kristallklare Material ist bleifrei und spülmaschinenfest.

**Für Pinot Noir optimiert**
Pinot Noir ist eine anspruchsvolle Rebsorte. Zu kleine Gläser ersticken die feinen Aromen. Zu große lassen sie verfliegen. Der Veloce Pinot Noir ist exakt auf die Charakteristik dieser Traube abgestimmt.

## Die Investition in Genuss

Ein 2er-Set Riedel Veloce kostet etwa 60€. Das klingt nach viel für Weingläser. Aber wenn Sie eine Flasche Burgunder für 40€ öffnen, ist das richtige Glas keine Ausgabe – es ist Respekt vor dem Wein.

## Für Einsteiger und Kenner

Die Veloce-Serie ist Riedels Empfehlung für Menschen, die guten Wein trinken, aber nicht in die Sommeliers-Preisklasse investieren möchten. Die Qualität ist professionell, der Preis vernünftig.
    `,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',  // Platzhalterbild - Herstelleranfrage nötig
    price: '59,90 €',
    affiliateUrl: 'https://www.amazon.de/dp/B07YQKP91Q',
    category: 'Küche',
    heritage: 'Seit 1756',
    warranty: '2 Jahre',
    madeIn: 'Österreich',
    features: [
      'Bleifreies Kristallglas',
      'Maschinengeblasen',
      'Spülmaschinenfest',
      '2er-Set, 763ml',
    ],
    relatedSlugs: ['duralex-picardie', 'laguiole-steakmesser'],
    seo: {
      title: 'Riedel Veloce Pinot Noir Gläser – Österreichische Glaskunst',
      description:
        'Riedel Veloce Pinot Noir: Weingläser, die Wissenschaft und Genuss verbinden. Bleifreies Kristall, 2er-Set, seit 1756.',
    },
  },
  {
    slug: 'gmundner-keramik-fruehstueck',
    name: 'Gmundner Keramik Frühstücksbecher',
    brand: 'Gmundner Keramik',
    tagline: 'Österreichische Handarbeit für den perfekten Morgen',
    teaser:
      'Der bordeauxrote Hirsch auf weißer Keramik – handgemalt in Gmunden seit 1492. Ein Frühstücksbecher, der Tradition und Gemütlichkeit vereint.',
    description: `
Am Traunsee in Oberösterreich liegt Gmunden – und hier wird seit über 500 Jahren Keramik gefertigt. Die Gmundner Keramik ist keine Fabrikware, sondern echte Handarbeit: Jedes Stück wird von Hand gedreht, bemalt und glasiert.

## Warum Gmundner Keramik?

**Handarbeit seit 1492**
Jeder Frühstücksbecher durchläuft 30 Arbeitsschritte. Von der Tonaufbereitung über das Drehen auf der Scheibe bis zum finalen Brennen bei 1.100°C – alles geschieht in der Manufaktur am Traunsee.

**Der Hirsch: Symbol der Alpen**
Das Dekor „Roter Hirsch" ist ein Klassiker der Gmundner Keramik. Der bordeauxrote Hirsch auf cremefarbenem Grund verbindet alpine Tradition mit zeitloser Eleganz. In österreichischen Bauernhäusern genauso zu Hause wie in modernen Stadtküchen.

**Jeden Tag ein bisschen Luxus**
Ein Frühstück aus dem Gmundner Becher ist anders. Das Gewicht der Keramik in der Hand, die Wärme, die sie speichert, der Anblick des handgemalten Dekors – das verwandelt den Kaffee am Morgen in ein kleines Ritual.

## Für zwei

Das klassische Set für zwei Personen macht den Morgen zu einem gemeinsamen Moment. Ob Kaffee, Tee oder heiße Schokolade – der großzügige Becher fasst 300ml und hält den Inhalt lange warm.

## Ein Stück Österreich

Gmundner Keramik wird nicht exportiert, um billig verkauft zu werden. Sie ist ein österreichisches Qualitätsprodukt, das seinen Preis wert ist. Die handgemalten Dekore machen jedes Stück zum Unikat – kleine Unterschiede sind keine Fehler, sondern Zeichen echter Handarbeit.
    `,
    image: '/images/products/gmundner-keramik-fruehstueck.webp',
    price: '39,00 €',
    affiliateUrl: 'https://www.amazon.de/dp/B009MP04ZK',
    category: 'Küche',
    heritage: 'Seit 1492',
    warranty: '2 Jahre',
    madeIn: 'Österreich (Gmunden)',
    features: [
      'Handgedreht und handbemalt',
      'Dekor: Roter Hirsch',
      '300ml Fassungsvermögen',
      'Spülmaschinen- und mikrowellengeeignet',
    ],
    relatedSlugs: ['bialetti-moka-express', 'duralex-picardie'],
    seo: {
      title: 'Gmundner Keramik Frühstücksbecher Roter Hirsch – Handarbeit aus Österreich',
      description:
        'Gmundner Keramik Frühstücksbecher mit Roter Hirsch Dekor. Handgedreht und handbemalt am Traunsee, österreichische Tradition seit 1492.',
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
