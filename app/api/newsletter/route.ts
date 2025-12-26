import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/lib/env'

/**
 * Newsletter Signup API Route
 *
 * Handles newsletter subscriptions via Beehiiv webhook.
 *
 * Required Environment Variables:
 * - BEEHIIV_API_KEY: Your Beehiiv API key
 * - BEEHIIV_PUBLICATION_ID: Your Beehiiv publication ID
 *
 * Beehiiv API Documentation:
 * https://developers.beehiiv.com/docs/v2/create-subscription
 */

interface SubscriptionRequest {
  email: string
}

interface BeehiivResponse {
  data?: {
    id: string
    email: string
    status: string
  }
  errors?: Array<{
    code: string
    message: string
  }>
}

// Rate limiting: Simple in-memory store (for production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body: SubscriptionRequest = await request.json()
    const { email } = body

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'E-Mail-Adresse ist erforderlich.' },
        { status: 400 }
      )
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json(
        { error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' },
        { status: 400 }
      )
    }

    // Check for required environment variables using env config
    if (!env.beehiiv.isConfigured) {
      console.error('Missing Beehiiv environment variables')

      // In development, log and return success
      if (env.isDevelopment) {
        console.log('Development mode: Simulating successful subscription for:', normalizedEmail)
        return NextResponse.json({
          success: true,
          message: 'Vielen Dank für Ihre Anmeldung!',
          email: normalizedEmail,
          dev: true,
        })
      }

      return NextResponse.json(
        { error: 'Newsletter-Dienst nicht konfiguriert.' },
        { status: 500 }
      )
    }

    const { apiKey, publicationId } = env.beehiiv

    // Subscribe to Beehiiv
    const beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: normalizedEmail,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'website',
          utm_medium: 'organic',
          utm_campaign: 'newsletter_signup',
          referring_site: 'zeitloseprodukte.de',
        }),
      }
    )

    const beehiivData: BeehiivResponse = await beehiivResponse.json()

    if (!beehiivResponse.ok) {
      console.error('Beehiiv API error:', beehiivData)

      // Handle specific error cases
      if (beehiivData.errors?.[0]?.code === 'duplicate_subscription') {
        return NextResponse.json({
          success: true,
          message: 'Sie sind bereits angemeldet!',
          email: normalizedEmail,
        })
      }

      return NextResponse.json(
        { error: 'Anmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Vielen Dank für Ihre Anmeldung!',
      email: normalizedEmail,
    })
  } catch (error) {
    console.error('Newsletter signup error:', error)

    return NextResponse.json(
      { error: 'Ein unerwarteter Fehler ist aufgetreten.' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
