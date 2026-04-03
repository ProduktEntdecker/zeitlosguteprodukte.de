/**
 * Environment Variable Configuration
 *
 * Provides type-safe access to environment variables with graceful fallbacks.
 * Does NOT throw during build - validation happens at runtime when values are needed.
 */

const optionalEnvVars = [
  'BREVO_API_KEY',
] as const

type OptionalEnvVar = (typeof optionalEnvVars)[number]

function getEnvVar(key: string): string | undefined {
  return process.env[key]
}

// Runtime warning for missing optional variables (only once per session)
let hasWarnedAboutBrevo = false
function warnMissingBrevo(): void {
  if (hasWarnedAboutBrevo) return
  if (process.env.NODE_ENV === 'production') {
    const missing = optionalEnvVars.filter((key) => !getEnvVar(key))
    if (missing.length > 0) {
      console.warn(
        `⚠️  Optional environment variables not set: ${missing.join(', ')}\n` +
          `   Newsletter signup will not work without Brevo credentials.`
      )
      hasWarnedAboutBrevo = true
    }
  }
}

/**
 * Type-safe environment configuration
 *
 * SITE_URL fallback order:
 * 1. SITE_URL env var
 * 2. VERCEL_URL (set automatically by Vercel)
 * 3. localhost for development
 */
function getSiteUrl(): string {
  const siteUrl = getEnvVar('SITE_URL')
  if (siteUrl) return siteUrl

  const vercelUrl = getEnvVar('VERCEL_URL')
  if (vercelUrl) return `https://${vercelUrl}`

  return 'http://localhost:3000'
}

export const env = {
  siteUrl: getSiteUrl(),
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  brevo: {
    get apiKey() {
      warnMissingBrevo()
      return getEnvVar('BREVO_API_KEY')
    },
    get listId() {
      const raw = getEnvVar('BREVO_LIST_ID')?.trim()
      const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN
      return Number.isInteger(parsed) && parsed > 0 ? parsed : 2
    },
    get isConfigured() {
      return Boolean(getEnvVar('BREVO_API_KEY'))
    },
  },
} as const

export type Env = typeof env
