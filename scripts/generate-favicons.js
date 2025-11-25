import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

// Read the SVG file
const svgBuffer = readFileSync(join(publicDir, 'favicon.svg'));

// Sizes for different use cases
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' }, // Apple touch icon
];

console.log('Generating favicon PNGs...');

// Generate PNGs for each size
await Promise.all(
  sizes.map(async ({ size, name }) => {
    const pngBuffer = await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
      })
      .png()
      .toBuffer();

    writeFileSync(join(publicDir, name), pngBuffer);
    console.log(`✓ Generated ${name} (${size}x${size})`);
  })
);

console.log('All favicons generated successfully!');

