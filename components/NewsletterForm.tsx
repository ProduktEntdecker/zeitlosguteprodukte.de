'use client'

import { useState, FormEvent } from 'react'

interface NewsletterFormProps {
  variant?: 'hero' | 'section'
  campaign?: string // Campaign identifier for tagging (e.g., 'valentinstag-2025')
  source?: string // Page source for tracking (e.g., 'homepage', 'product-page')
}

// Declare Plausible type for window
declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number> }
    ) => void
  }
}

export default function NewsletterForm({
  variant = 'section',
  campaign,
  source = 'homepage',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          tags: campaign ? [campaign] : [],
          referrer: source,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setMessage('Willkommen! Überprüfen Sie Ihren Posteingang.')
        setEmail('')

        // Track successful signup with Plausible
        if (typeof window !== 'undefined' && window.plausible) {
          window.plausible('newsletter_signup', {
            props: {
              source: source,
              campaign: campaign || 'organic',
              variant: variant,
            },
          })
        }
      } else {
        setStatus('error')
        setMessage(data.error || 'Ein Fehler ist aufgetreten.')
      }
    } catch {
      setStatus('error')
      setMessage('Verbindungsfehler. Bitte versuchen Sie es erneut.')
    }
  }

  const isHero = variant === 'hero'

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ihre E-Mail-Adresse"
            required
            disabled={status === 'loading'}
            className={`
              w-full px-5 py-4 text-base transition-all duration-300
              focus:outline-none focus:ring-0
              disabled:opacity-50 disabled:cursor-not-allowed
              ${
                isHero
                  ? 'bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:border-white/60 focus:bg-white/15'
                  : 'bg-white/60 border border-navy-200/50 text-navy-900 placeholder:text-navy-400 focus:border-cognac-400 focus:bg-white'
              }
            `}
            aria-label="E-Mail-Adresse für Newsletter"
          />

          {/* Animated border on focus */}
          <div
            className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 ease-out-expo ${
              isHero ? 'bg-cognac-400' : 'bg-cognac-500'
            }`}
            style={{ width: status === 'loading' ? '100%' : '0%' }}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`
            relative px-8 py-4 text-sm font-medium tracking-wide uppercase
            overflow-hidden transition-all duration-500 ease-out-expo
            disabled:opacity-50 disabled:cursor-not-allowed
            group
            ${
              isHero
                ? 'bg-cognac-600 text-white hover:bg-cognac-500'
                : 'bg-navy-900 text-creme-100 hover:bg-navy-800'
            }
          `}
        >
          {/* Hover effect */}
          <span
            className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out-expo group-hover:scale-x-100 ${
              isHero ? 'bg-cognac-500' : 'bg-cognac-600'
            }`}
          />

          <span className="relative z-10 flex items-center justify-center gap-2">
            {status === 'loading' ? (
              <>
                <svg
                  className="animate-spin h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Wird gesendet
              </>
            ) : (
              'Anmelden'
            )}
          </span>
        </button>
      </div>

      {/* Status Message */}
      {status !== 'idle' && status !== 'loading' && (
        <p
          className={`mt-3 text-sm transition-all duration-300 ${
            status === 'success'
              ? isHero
                ? 'text-green-300'
                : 'text-green-700'
              : isHero
              ? 'text-red-300'
              : 'text-red-600'
          }`}
          role="alert"
        >
          {message}
        </p>
      )}

      {/* Privacy note */}
      <p
        className={`mt-4 text-xs ${
          isHero ? 'text-white/50' : 'text-navy-500'
        }`}
      >
        Kein Spam. Jederzeit abmeldbar. Ihre Daten sind sicher.
      </p>
    </form>
  )
}
