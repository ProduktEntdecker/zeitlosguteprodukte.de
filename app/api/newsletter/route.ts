import { NextRequest, NextResponse } from 'next/server'
import { env } from '@/lib/env'

/**
 * Newsletter Signup API Route
 *
 * Handles newsletter subscriptions via Brevo (DSGVO-konform, EU-basiert).
 *
 * Required Environment Variables:
 * - BREVO_API_KEY: Your Brevo API key
 *
 * Brevo API Documentation:
 * https://developers.brevo.com/reference/createcontact
 */

interface SubscriptionRequest {
  email: string
}

interface BrevoErrorResponse {
  code?: string
  message?: string
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
    if (!env.brevo.isConfigured) {
      console.error('Missing Brevo environment variables')

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

    const { apiKey } = env.brevo

    // Subscribe via Brevo Contacts API
    const brevoResponse = await fetch(
      'https://api.brevo.com/v3/contacts',
      {
        method: 'POST',
        headers: {
          'api-key': apiKey!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: normalizedEmail,
          listIds: [2],
          updateEnabled: true,
        }),
      }
    )

    if (!brevoResponse.ok) {
      const brevoData: BrevoErrorResponse = await brevoResponse.json()
      console.error('Brevo API error:', brevoData)

      // Handle duplicate contact (Brevo returns "duplicate_parameter")
      if (brevoData.code === 'duplicate_parameter') {
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
