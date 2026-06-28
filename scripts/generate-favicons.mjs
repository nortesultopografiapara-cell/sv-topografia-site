import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "scripts", "globe-source.png");
const publicDir = path.join(root, "public");

const outputs = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

async function resizePng(size) {
  return sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toBuffer();
}

for (const [filename, size] of Object.entries(outputs)) {
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(path.join(publicDir, filename));
  console.log(`Created ${filename}`);
}

const icon16 = await resizePng(16);
const icon32 = await resizePng(32);
const ico = await toIco([icon16, icon32]);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
console.log("Created favicon.ico");

await sharp(source)
  .resize(32, 32, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(path.join(root, "src", "app", "icon.png"));
console.log("Updated src/app/icon.png");

fs.copyFileSync(
  path.join(publicDir, "favicon.ico"),
  path.join(root, "src", "app", "favicon.ico")
);
console.log("Updated src/app/favicon.ico");
