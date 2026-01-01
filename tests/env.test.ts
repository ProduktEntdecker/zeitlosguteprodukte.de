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

  describe('beehiiv configuration', () => {
    it('reports isConfigured=true when both keys are set', async () => {
      process.env.BEEHIIV_API_KEY = 'test-api-key'
      process.env.BEEHIIV_PUBLICATION_ID = 'test-pub-id'
      const { env } = await import('@/lib/env')
      expect(env.beehiiv.isConfigured).toBe(true)
    })

    it('reports isConfigured=false when API key is missing', async () => {
      delete process.env.BEEHIIV_API_KEY
      process.env.BEEHIIV_PUBLICATION_ID = 'test-pub-id'
      const { env } = await import('@/lib/env')
      expect(env.beehiiv.isConfigured).toBe(false)
    })

    it('reports isConfigured=false when publication ID is missing', async () => {
      process.env.BEEHIIV_API_KEY = 'test-api-key'
      delete process.env.BEEHIIV_PUBLICATION_ID
      const { env } = await import('@/lib/env')
      expect(env.beehiiv.isConfigured).toBe(false)
    })

    it('does not throw when accessing beehiiv config', async () => {
      delete process.env.BEEHIIV_API_KEY
      delete process.env.BEEHIIV_PUBLICATION_ID
      const { env } = await import('@/lib/env')
      expect(() => env.beehiiv.isConfigured).not.toThrow()
      expect(() => env.beehiiv.apiKey).not.toThrow()
      expect(() => env.beehiiv.publicationId).not.toThrow()
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
      delete process.env.BEEHIIV_API_KEY
      delete process.env.BEEHIIV_PUBLICATION_ID

      await expect(import('@/lib/env')).resolves.toBeDefined()
    })
  })
})
