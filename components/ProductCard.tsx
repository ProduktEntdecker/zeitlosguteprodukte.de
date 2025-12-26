import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <article
      className="group relative"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        href={`/produkte/${product.slug}`}
        className="block"
        aria-label={`${product.name} von ${product.brand} ansehen`}
      >
        {/* Image Container */}
        <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-creme-200">
          {/* Placeholder gradient while image loads */}
          <div className="absolute inset-0 bg-gradient-to-br from-creme-200 to-creme-300" />

          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/10" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1.5 text-overline bg-white/90 backdrop-blur-sm text-navy-700">
              {product.category}
            </span>
          </div>

          {/* Heritage Badge */}
          <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 transition-all duration-500 ease-out-expo group-hover:opacity-100 group-hover:translate-y-0">
            <span className="inline-block px-3 py-1.5 text-xs font-medium bg-cognac-600 text-white">
              {product.heritage}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Brand */}
          <p className="text-overline text-cognac-600">{product.brand}</p>

          {/* Product Name */}
          <h3 className="font-serif text-title text-navy-900 group-hover:text-cognac-700 transition-colors duration-300">
            {product.name}
          </h3>

          {/* Teaser */}
          <p className="text-body text-navy-600 line-clamp-3 text-pretty">
            {product.teaser}
          </p>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-navy-100">
            <span className="text-body-lg font-medium text-navy-900">
              {product.price}
            </span>

            {/* Arrow indicator */}
            <span className="flex items-center gap-2 text-sm font-medium text-cognac-600 group-hover:gap-3 transition-all duration-300">
              Mehr erfahren
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
