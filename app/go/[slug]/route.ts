import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

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
  url.searchParams.set('utm_source', 'zeitlosguteprodukte.de')
  url.searchParams.set('utm_medium', 'affiliate')
  url.searchParams.set('utm_campaign', slug)

  return NextResponse.redirect(url.toString(), 302)
}
