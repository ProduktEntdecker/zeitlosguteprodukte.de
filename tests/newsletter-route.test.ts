import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { NextRequest } from 'next/server'

// Mock the env module
vi.mock('@/lib/env', () => ({
  env: {
    siteUrl: 'https://test.com',
    isProduction: false,
    isDevelopment: true,
    beehiiv: {
      apiKey: undefined,
      publicationId: undefined,
      isConfigured: false,
    },
  },
}))

describe('Newsletter API Route', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('POST /api/newsletter', () => {
    it('rejects requests without email', async () => {
      const { POST } = await import('@/app/api/newsletter/route')

      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toContain('E-Mail')
    })

    it('rejects invalid email formats', async () => {
      const { POST } = await import('@/app/api/newsletter/route')

      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: 'invalid-email' }),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.error).toContain('gültige')
    })

    it('returns success in development mode without Beehiiv config', async () => {
      const { POST } = await import('@/app/api/newsletter/route')

      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: 'test@example.com' }),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.dev).toBe(true)
    })

    it('normalizes email to lowercase', async () => {
      const { POST } = await import('@/app/api/newsletter/route')

      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: 'Test@EXAMPLE.com' }),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.email).toBe('test@example.com')
    })

    it('trims whitespace from email', async () => {
      const { POST } = await import('@/app/api/newsletter/route')

      const request = new NextRequest('http://localhost:3000/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email: '  test@example.com  ' }),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.email).toBe('test@example.com')
    })
  })

  describe('GET /api/newsletter', () => {
    it('returns 405 Method Not Allowed', async () => {
      const { GET } = await import('@/app/api/newsletter/route')

      const response = await GET()
      const data = await response.json()

      expect(response.status).toBe(405)
      expect(data.error).toBe('Method not allowed')
    })
  })
})
