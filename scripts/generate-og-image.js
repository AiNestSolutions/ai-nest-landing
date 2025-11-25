import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const publicDir = join(rootDir, "public");

// Colors matching Tailwind CSS
const slate100 = "#f1f5f9";
const emerald400 = "#34d399";
const slate900 = "#0f172a"; // Background color (slate-900)

// Open Graph image dimensions (standard: 1200x630px)
const width = 1200;
const height = 630;
const logoFontSize = 72;
const taglineFontSize = 32;

// Create SVG with the logo and tagline
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${slate900}"/>
  <text x="${width / 2}" y="${height / 2 - 40}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="${logoFontSize}px" fill="${slate100}">AI Nest <tspan fill="${emerald400}">Solutions</tspan></text>
  <text x="${width / 2}" y="${height / 2 + 60}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="400" font-size="${taglineFontSize}px" fill="${slate100}" opacity="0.8">Custom Web &amp; Mobile Applications</text>
</svg>`;

// Convert SVG to PNG
const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

const outputPath = join(publicDir, "og-image.png");
writeFileSync(outputPath, pngBuffer);

console.log("✓ Generated og-image.png");
console.log(`  Size: ${width}x${height}px (Open Graph standard)`);
console.log(`  Background: ${slate900}`);
console.log(`  Saved to: ${outputPath}`);

