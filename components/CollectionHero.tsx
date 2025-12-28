'use client'

import Image from 'next/image'
import { Collection } from '@/lib/collections'

interface CollectionHeroProps {
  collection: Collection
}

export default function CollectionHero({ collection }: CollectionHeroProps) {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('produkte')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={collection.heroImage}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-editorial py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Overline with campaign badge */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-overline text-cognac-400">Geschenkideen</span>
            {collection.campaign && (
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-cognac-600 text-white">
                Limitierte Auswahl
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-serif text-display text-white mb-6 leading-tight">
            {collection.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-creme-100/90 mb-8 leading-relaxed">
            {collection.tagline}
          </p>

          {/* Description */}
          <p className="text-body-lg text-creme-100/70 mb-10 max-w-xl whitespace-pre-line">
            {collection.description}
          </p>

          {/* CTA */}
          <button
            onClick={scrollToProducts}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-cognac-600 text-white font-medium tracking-wide overflow-hidden transition-all duration-500 ease-out-expo hover:bg-cognac-500"
          >
            <span className="absolute inset-0 bg-cognac-500 origin-left scale-x-0 transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
            <span className="relative z-10 flex items-center gap-3">
              {collection.campaign?.ctaText || 'Produkte entdecken'}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
