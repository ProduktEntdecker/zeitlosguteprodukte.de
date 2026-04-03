import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

// Allowed redirect domains for security
const ALLOWED_DOMAINS = ['www.amazon.de', 'amazon.de', 'amzn.to']

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product || !product.affiliateUrl) {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }

  const url = new URL(product.affiliateUrl)

  // Security: Only redirect to allowed domains
  if (!ALLOWED_DOMAINS.includes(url.hostname)) {
    console.error(`Blocked redirect to unauthorized domain: ${url.hostname}`)
    return NextResponse.redirect(new URL('/', request.url), 302)
  }

  url.searchParams.set('utm_source', 'zeitlosguteprodukte.de')
  url.searchParams.set('utm_medium', 'affiliate')
  url.searchParams.set('utm_campaign', slug)

  return NextResponse.redirect(url.toString(), 302)
}
