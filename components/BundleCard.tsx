import Image from 'next/image'
import Link from 'next/link'
import { ProductBundle, getBundleProducts } from '@/lib/collections'
import { Product } from '@/lib/products'

interface BundleCardProps {
  bundle: ProductBundle
  index?: number
}

export default function BundleCard({ bundle, index = 0 }: BundleCardProps) {
  const products = getBundleProducts(bundle)

  // Calculate combined price
  const totalPrice = products.reduce((sum, product) => {
    const price = parseFloat(
      product.price.replace(/[^\d,]/g, '').replace(',', '.')
    )
    return sum + price
  }, 0)

  return (
    <article
      className="group bg-white border border-navy-100 overflow-hidden transition-all duration-500 hover:border-cognac-300 hover:shadow-elegant-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Product Images Grid */}
      <div className="relative aspect-[16/9] bg-creme-100">
        <div className="absolute inset-0 grid grid-cols-3 gap-0.5">
          {products.slice(0, 3).map((product, i) => (
            <div key={product.slug} className="relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bundle Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1.5 bg-cognac-600 text-white text-xs font-medium tracking-wide">
            {products.length} Produkte
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-navy-900 mb-2 group-hover:text-cognac-700 transition-colors">
          {bundle.name}
        </h3>

        <p className="text-body text-navy-600 mb-4 line-clamp-2">
          {bundle.description}
        </p>

        {/* Product List */}
        <ul className="space-y-2 mb-6">
          {products.map((product) => (
            <li key={product.slug} className="flex items-center gap-2 text-sm">
              <span className="w-1 h-1 rounded-full bg-cognac-500" />
              <span className="text-navy-700">{product.brand}</span>
              <span className="text-navy-400">·</span>
              <span className="text-navy-600">{product.name}</span>
            </li>
          ))}
        </ul>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-navy-100">
          <div>
            <p className="text-xs text-navy-400 mb-1">Gesamtwert</p>
            <p className="font-serif text-lg text-navy-900">
              {totalPrice.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </p>
          </div>

          <Link
            href={`#bundle-${bundle.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-cognac-600 hover:text-cognac-700 transition-colors"
          >
            Details ansehen
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
          </Link>
        </div>
      </div>
    </article>
  )
}
