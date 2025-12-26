'use client'

import { ReactNode } from 'react'

interface AffiliateLinkProps {
  href: string
  productSlug: string
  productName: string
  children: ReactNode
  variant?: 'button' | 'text' | 'card'
  className?: string
}

/**
 * Affiliate Link Component with UTM tracking
 *
 * Adds UTM parameters to track affiliate link clicks:
 * - utm_source: zeitloseprodukte
 * - utm_medium: affiliate
 * - utm_campaign: product-{slug}
 * - utm_content: {variant}
 */
export default function AffiliateLink({
  href,
  productSlug,
  productName,
  children,
  variant = 'button',
  className = '',
}: AffiliateLinkProps) {
  // Build UTM parameters
  const utmParams = new URLSearchParams({
    utm_source: 'zeitloseprodukte',
    utm_medium: 'affiliate',
    utm_campaign: `product-${productSlug}`,
    utm_content: variant,
  })

  // Append UTM to URL
  const trackedUrl = `${href}${href.includes('?') ? '&' : '?'}${utmParams.toString()}`

  // Track click event (can be extended with analytics)
  const handleClick = () => {
    // Google Analytics event (if gtag is available)
    if (typeof window !== 'undefined' && 'gtag' in window) {
      ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: productName,
        product_slug: productSlug,
        link_variant: variant,
      })
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Affiliate click:', {
        product: productName,
        slug: productSlug,
        variant,
        url: trackedUrl,
      })
    }
  }

  // Style variants
  const variantStyles = {
    button: `
      relative inline-flex items-center justify-center gap-3 px-8 py-4
      bg-cognac-600 text-white font-medium tracking-wide
      overflow-hidden transition-all duration-500 ease-out-expo
      hover:bg-cognac-500 group
    `,
    text: `
      inline-flex items-center gap-2 text-cognac-600 font-medium
      hover:text-cognac-700 transition-colors duration-300
      border-b border-cognac-300 hover:border-cognac-500
    `,
    card: `
      block w-full p-6 bg-white border border-navy-100
      hover:border-cognac-300 hover:shadow-elegant-lg
      transition-all duration-500 ease-out-expo group
    `,
  }

  return (
    <a
      href={trackedUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${variantStyles[variant]} ${className}`}
      aria-label={`${productName} kaufen (öffnet in neuem Tab)`}
    >
      {variant === 'button' && (
        <>
          {/* Hover effect */}
          <span className="absolute inset-0 bg-cognac-500 origin-left scale-x-0 transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
          <span className="relative z-10 flex items-center gap-3">
            {children}
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </>
      )}

      {variant === 'text' && (
        <>
          {children}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </>
      )}

      {variant === 'card' && children}
    </a>
  )
}

// Price display component for affiliate sections
export function AffiliatePrice({
  price,
  originalPrice,
}: {
  price: string
  originalPrice?: string
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-2xl font-serif text-navy-900">{price}</span>
      {originalPrice && (
        <span className="text-sm text-navy-400 line-through">{originalPrice}</span>
      )}
      <span className="text-xs text-cognac-600 font-medium">*</span>
    </div>
  )
}

// Affiliate disclosure component
export function AffiliateDisclosure({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs text-navy-500 ${className}`}>
      * Affiliate-Link: Bei einem Kauf über diesen Link erhalten wir eine kleine
      Provision – für Sie entstehen keine Mehrkosten.
    </p>
  )
}
