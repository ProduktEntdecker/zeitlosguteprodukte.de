import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

// Allowed redirect domains for security
const ALLOWED_DOMAINS = ['www.amazon.de', 'amazon.de', 'amzn.to']

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const matches = products.filter((p) => p.slug === slug && p.affiliateUrl)
  if (matches.length !== 1) {
    return new NextResponse('Not Found', { status: 404 })
  }
  const product = matches[0]

  let url: URL
  try {
    url = new URL(product.affiliateUrl)
  } catch {
    return new NextResponse('Not Found', { status: 404 })
  }

  // Security: Only redirect to allowed HTTPS domains on standard port
  if (url.protocol !== 'https:' || !ALLOWED_DOMAINS.includes(url.hostname) || (url.port && url.port !== '443')) {
    console.error(`Blocked redirect: host=${url.hostname} protocol=${url.protocol} port=${url.port || 'default'}`)
    return new NextResponse('Not Found', { status: 404 })
  }

  url.searchParams.set('utm_source', 'zeitlosguteprodukte.de')
  url.searchParams.set('utm_medium', 'affiliate')
  url.searchParams.set('utm_campaign', slug)

  return NextResponse.redirect(url.toString(), 302)
}
