/**
 * Centralized contact and legal information constants
 * Used across legal pages (Impressum, Datenschutz) and communications
 */

export const CONTACT_INFO = {
  name: 'Dr. Florian Steiner',
  street: 'St.-Ingbert-Str. 9',
  postalCode: '81541',
  city: 'München',
  country: 'Deutschland',
  email: 'info@zeitlosguteprodukte.de',
} as const

export const DOMAIN_INFO = {
  name: 'zeitlosguteprodukte.de',
  url: 'https://zeitlosguteprodukte.de',
} as const

export function formatPostalAddress(separator: string = '\n'): string {
  return [
    CONTACT_INFO.name,
    CONTACT_INFO.street,
    `${CONTACT_INFO.postalCode} ${CONTACT_INFO.city}`,
    CONTACT_INFO.country,
  ].join(separator)
}
