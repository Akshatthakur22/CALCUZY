#!/usr/bin/env node
/**
 * Converts SVG OG images to 1200x630 PNG for social crawlers.
 * Run: node scripts/generate-og-png.mjs
 */
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const ogDir = join(__dirname, '..', 'public', 'og')

const files = (await readdir(ogDir)).filter((f) => f.endsWith('.svg'))

for (const file of files) {
  const input = join(ogDir, file)
  const output = join(ogDir, file.replace('.svg', '.png'))
  const svg = await readFile(input)
  await sharp(svg, { density: 150 })
    .resize(1200, 630)
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(output)
  console.log(`Generated ${basename(output)}`)
}

console.log(`Done — ${files.length} PNG files in public/og/`)
