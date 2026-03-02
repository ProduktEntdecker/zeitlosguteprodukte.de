export interface ImageCredit {
  slug: string
  source: 'wikimedia' | 'unsplash' | 'own'
  author: string
  license: string
  licenseUrl: string
  sourceUrl: string
  description: string
}

export const imageCredits: ImageCredit[] = [
  {
    slug: 'le-creuset-braeter',
    source: 'wikimedia',
    author: 'Jeremy-Gunther-Heinz Jahnick',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Cocotte_en_fonte_%C3%A9maill%C3%A9e_Le_Creuset,_d%27un_diam%C3%A8tre_de_vingt_centim%C3%A8tres.JPG',
    description: 'Le Creuset Cocotte en fonte emailliert, 20 cm',
  },
  {
    slug: 'opinel-no8',
    source: 'wikimedia',
    author: 'Kuroczynski',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Opinel_knife_No._08.jpg',
    description: 'Opinel Messer Nr. 08',
  },
  {
    slug: 'bialetti-moka-express',
    source: 'wikimedia',
    author: 'EBonBia',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Moka_Express_Bialetti.png',
    description: 'Bialetti Moka Express',
  },
  {
    slug: 'kitchenaid-artisan',
    source: 'wikimedia',
    author: 'BenFrantzDale',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Red_KitchenAid_Artisan.jpg',
    description: 'KitchenAid Artisan in Rot',
  },
  {
    slug: 'rimowa-original',
    source: 'wikimedia',
    author: '1971markus',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Rimowa_Koffer_(Topas).jpg',
    description: 'Rimowa Koffer Topas-Serie',
  },
  {
    slug: 'duralex-picardie',
    source: 'wikimedia',
    author: 'Denkhenk',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Picardie_glass.jpg',
    description: 'Duralex Picardie Glas',
  },
  {
    slug: 'peugeot-pfeffermuehle-paris',
    source: 'wikimedia',
    author: 'Sebastian Koppehel',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Peugeot_pepper_mill.jpg',
    description: 'Peugeot Pfeffermühle',
  },
  {
    slug: 'barbour-bedale',
    source: 'wikimedia',
    author: 'Steven Lilley',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Barbour_jacket_02.jpg',
    description: 'Barbour Wachsjacke',
  },
  {
    slug: 'laguiole-steakmesser',
    source: 'wikimedia',
    author: 'Tim Chambers',
    license: 'CC BY-SA 2.5',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.5/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Laguiole_steak_knife.jpeg',
    description: 'Laguiole Steakmesser',
  },
  {
    slug: 'gmundner-keramik-fruehstueck',
    source: 'wikimedia',
    author: 'Naturpuur',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.de',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Geflammte_Keramik,_Manufaktur_%22Gmundner_Keramik%22_aus_Ober%C3%B6sterreich.jpg',
    description: 'Gmundner Keramik, Geflammte Serie',
  },
  {
    slug: 'riedel-veloce',
    source: 'unsplash',
    author: 'Unsplash',
    license: 'Unsplash License',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl:
      'https://unsplash.com/photos/wXuzS9xR49M',
    description: 'Weinglas (Platzhalterbild)',
  },
  {
    slug: 'guede-brotmesser',
    source: 'unsplash',
    author: 'Unsplash',
    license: 'Unsplash License',
    licenseUrl: 'https://unsplash.com/license',
    sourceUrl:
      'https://unsplash.com/photos/iy_MT2ifklc',
    description: 'Messer (Platzhalterbild)',
  },
]

export function getImageCredit(slug: string): ImageCredit | undefined {
  return imageCredits.find((c) => c.slug === slug)
}
