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

// High resolution dimensions (4x the original)
const width = 1600;
const height = 480;
const fontSize = 192; // 4x the original 48px

// Create SVG with the logo text and background
// Using system fonts similar to Inter
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="${slate900}"/>
  <text x="${width / 2}" y="${
  height / 2 + fontSize / 3
}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="${fontSize}px" fill="${slate100}">AI Nest <tspan fill="${emerald400}">Solutions</tspan></text>
</svg>`;

// Convert SVG to PNG at high resolution
const pngBuffer = await sharp(Buffer.from(svg)).png().toBuffer();

const outputPath = join(publicDir, "logo.png");
writeFileSync(outputPath, pngBuffer);

console.log("✓ Generated logo.png");
console.log(`  Size: ${width}x${height}px (high resolution)`);
console.log(`  Background: ${slate900}`);
console.log(`  Saved to: ${outputPath}`);
