import { products } from '../lib/products'
import { writeFileSync } from 'fs'
import { resolve } from 'path'

const lastmod: Record<string, string> = {}
for (const product of products) {
  lastmod[product.slug] = product.lastmod
}

writeFileSync(
  resolve(__dirname, '../lib/product-lastmod.json'),
  JSON.stringify(lastmod, null, 2) + '\n'
)

console.log(`Generated product-lastmod.json with ${Object.keys(lastmod).length} entries`)
