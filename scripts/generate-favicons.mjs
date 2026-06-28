import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "scripts", "globe-source.png");
const publicDir = path.join(root, "public");

const GLOBE_FILL = 0.88;

const outputs = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

function keyWhiteToAlpha(data, width, height) {
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (min > 235 && max - min < 18) {
      data[i + 3] = 0;
      continue;
    }

    if (min > 220) {
      const fade = Math.min(255, (min - 220) * 10);
      data[i + 3] = Math.max(0, data[i + 3] - fade);
    }

    if (b > r + 8 && b > g + 4) {
      data[i] = Math.max(0, Math.round(r * 0.72));
      data[i + 1] = Math.max(0, Math.round(g * 0.82));
      data[i + 2] = Math.min(255, Math.round(b * 1.18));
    }

    if (r > 150 && g > 150 && b > 150 && b - r < 35) {
      const lift = 28;
      data[i] = Math.min(255, data[i] + lift);
      data[i + 1] = Math.min(255, data[i + 1] + lift);
      data[i + 2] = Math.min(255, data[i + 2] + lift);
    }
  }

  return data;
}

async function createGlobeMaster() {
  const { width, height } = await sharp(source).metadata();
  const side = Math.min(width, height);
  const left = Math.floor((width - side) / 2);
  const top = Math.floor((height - side) / 2);

  const { data, info } = await sharp(source)
    .extract({ left, top, width: side, height: side })
    .resize(1024, 1024, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const processed = keyWhiteToAlpha(
    Buffer.from(data),
    info.width,
    info.height
  );

  return sharp(processed, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

async function renderIcon(master, size) {
  const globeSize = Math.round(size * GLOBE_FILL);
  const offset = Math.round((size - globeSize) / 2);

  let globe = sharp(master).resize(globeSize, globeSize, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
    kernel: size <= 32 ? sharp.kernel.lanczos3 : sharp.kernel.mitchell,
  });

  if (size <= 16) {
    globe = globe.median(1);
  }

  globe = globe
    .modulate({ saturation: 1.45, brightness: 1.06 })
    .linear(1.12, -(128 * 0.08))
    .sharpen({
      sigma: size <= 16 ? 1.6 : size <= 32 ? 1.25 : 0.9,
      m1: 1.1,
      m2: 0.45,
    });

  const globeBuffer = await globe.png().toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: globeBuffer, left: offset, top: offset }])
    .png()
    .toBuffer();
}

const master = await createGlobeMaster();
await sharp(master)
  .toFile(path.join(root, "scripts", "globe-favicon-master.png"));
console.log("Created globe-favicon-master.png");

for (const [filename, size] of Object.entries(outputs)) {
  const buffer = await renderIcon(master, size);
  await fs.promises.writeFile(path.join(publicDir, filename), buffer);
  console.log(`Created ${filename}`);
}

const icon16 = await renderIcon(master, 16);
const icon32 = await renderIcon(master, 32);
const icon48 = await renderIcon(master, 48);
const ico = await toIco([icon16, icon32, icon48]);
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);
console.log("Created favicon.ico");

const appIcon = await renderIcon(master, 32);
await fs.promises.writeFile(path.join(root, "src", "app", "icon.png"), appIcon);
fs.copyFileSync(
  path.join(publicDir, "favicon.ico"),
  path.join(root, "src", "app", "favicon.ico")
);
console.log("Updated src/app/icon.png and src/app/favicon.ico");
