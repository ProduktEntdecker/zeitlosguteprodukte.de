/**
 * Environment Variable Validation
 *
 * Validates required environment variables at build time
 * to prevent broken deployments to Vercel.
 */

const requiredEnvVars = ['SITE_URL'] as const
const optionalEnvVars = [
  'BEEHIIV_API_KEY',
  'BEEHIIV_PUBLICATION_ID',
] as const

type RequiredEnvVar = (typeof requiredEnvVars)[number]
type OptionalEnvVar = (typeof optionalEnvVars)[number]

function getEnvVar(key: RequiredEnvVar | OptionalEnvVar): string | undefined {
  return process.env[key]
}

function validateEnv(): void {
  const missing = requiredEnvVars.filter((key) => !getEnvVar(key))

  if (missing.length > 0) {
    throw new Error(
      `❌ Missing required environment variables: ${missing.join(', ')}\n` +
        `   Please add them to .env.local or Vercel environment settings.`
    )
  }

  // Warn about optional but recommended variables
  const missingOptional = optionalEnvVars.filter((key) => !getEnvVar(key))
  if (missingOptional.length > 0 && process.env.NODE_ENV === 'production') {
    console.warn(
      `⚠️  Optional environment variables not set: ${missingOptional.join(', ')}\n` +
        `   Newsletter signup will not work without Beehiiv credentials.`
    )
  }
}

// Only validate in production builds
if (process.env.NODE_ENV === 'production') {
  validateEnv()
}

/**
 * Type-safe environment configuration
 */
export const env = {
  siteUrl: getEnvVar('SITE_URL') || 'http://localhost:3000',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  beehiiv: {
    apiKey: getEnvVar('BEEHIIV_API_KEY'),
    publicationId: getEnvVar('BEEHIIV_PUBLICATION_ID'),
    isConfigured: Boolean(
      getEnvVar('BEEHIIV_API_KEY') && getEnvVar('BEEHIIV_PUBLICATION_ID')
    ),
  },
} as const

export type Env = typeof env
