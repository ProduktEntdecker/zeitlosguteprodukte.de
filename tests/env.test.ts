import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

describe('Environment Configuration', () => {
  const originalEnv = process.env

  beforeEach(() => {
    vi.resetModules()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('getSiteUrl', () => {
    it('returns SITE_URL when set', async () => {
      process.env.SITE_URL = 'https://example.com'
      const { env } = await import('@/lib/env')
      expect(env.siteUrl).toBe('https://example.com')
    })

    it('falls back to VERCEL_URL when SITE_URL is not set', async () => {
      delete process.env.SITE_URL
      process.env.VERCEL_URL = 'my-app.vercel.app'
      const { env } = await import('@/lib/env')
      expect(env.siteUrl).toBe('https://my-app.vercel.app')
    })

    it('falls back to localhost when neither SITE_URL nor VERCEL_URL is set', async () => {
      delete process.env.SITE_URL
      delete process.env.VERCEL_URL
      const { env } = await import('@/lib/env')
      expect(env.siteUrl).toBe('http://localhost:3000')
    })
  })

  describe('brevo configuration', () => {
    it('reports isConfigured=true when API key is set', async () => {
      process.env.BREVO_API_KEY = 'test-api-key'
      const { env } = await import('@/lib/env')
      expect(env.brevo.isConfigured).toBe(true)
    })

    it('reports isConfigured=false when API key is missing', async () => {
      delete process.env.BREVO_API_KEY
      const { env } = await import('@/lib/env')
      expect(env.brevo.isConfigured).toBe(false)
    })

    it('does not throw when accessing brevo config', async () => {
      delete process.env.BREVO_API_KEY
      const { env } = await import('@/lib/env')
      expect(() => env.brevo.isConfigured).not.toThrow()
      expect(() => env.brevo.apiKey).not.toThrow()
    })
  })

  describe('environment detection', () => {
    it('detects production environment', async () => {
      process.env.NODE_ENV = 'production'
      const { env } = await import('@/lib/env')
      expect(env.isProduction).toBe(true)
      expect(env.isDevelopment).toBe(false)
    })

    it('detects development environment', async () => {
      process.env.NODE_ENV = 'development'
      const { env } = await import('@/lib/env')
      expect(env.isProduction).toBe(false)
      expect(env.isDevelopment).toBe(true)
    })
  })

  describe('build resilience', () => {
    it('does not throw during module import without any env vars', async () => {
      delete process.env.SITE_URL
      delete process.env.VERCEL_URL
      delete process.env.BREVO_API_KEY

      await expect(import('@/lib/env')).resolves.toBeDefined()
    })
  })
})
