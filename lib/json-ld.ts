/**
 * Safely serialize JSON-LD data for use in dangerouslySetInnerHTML.
 * Escapes "</script>" sequences to prevent XSS in inline script tags.
 */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
