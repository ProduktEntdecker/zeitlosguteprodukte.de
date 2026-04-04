import { products } from '../lib/products'
import { writeFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const lastmod: Record<string, string> = {}
for (const product of products) {
  if (lastmod[product.slug]) {
    throw new Error(`Duplicate product slug: ${product.slug}`)
  }
  if (Number.isNaN(Date.parse(product.lastmod))) {
    throw new Error(`Invalid lastmod date for ${product.slug}: ${product.lastmod}`)
  }
  lastmod[product.slug] = product.lastmod
}

writeFileSync(
  resolve(__dirname, '../lib/product-lastmod.json'),
  JSON.stringify(lastmod, null, 2) + '\n'
)

console.log(`Generated product-lastmod.json with ${Object.keys(lastmod).length} entries`)
