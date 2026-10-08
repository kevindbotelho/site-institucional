// Derive web assets from Kevin's selected artwork, preserving pixels and colors.
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = (n) => path.join(root, 'docs/design/asoka/references', `${n}.png`);

async function crop(n) {
  const { data, info } = await sharp(source(n)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let left = info.width, top = info.height, right = -1, bottom = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 0) {
        left = Math.min(left, x); top = Math.min(top, y);
        right = Math.max(right, x); bottom = Math.max(bottom, y);
      }
    }
  }
  if (right < left) throw new Error(`Empty artwork: ${n}`);
  return sharp(source(n)).extract({ left, top, width: right - left + 1, height: bottom - top + 1 }).png().toBuffer();
}

async function main() {
  const lockup = await crop(2);
  await sharp(lockup).toFile(path.join(root, 'public/brand/asoka-lockup-dark.png'));
  const symbol = await crop(1);
  const exportDir = path.join(root, 'docs/design/asoka/exports');
  await mkdir(exportDir, { recursive: true });
  for (const [name, artwork, maxSize] of [
    ['asoka-whatsapp-logo-1024.png', lockup, 820],
    ['asoka-whatsapp-symbol-1024.png', symbol, 700],
  ]) {
    const mark = await sharp(artwork).resize(maxSize, maxSize, { fit: 'inside' }).png().toBuffer();
    await sharp({ create: { width: 1024, height: 1024, channels: 4, background: '#f8fafc' } })
      .composite([{ input: mark, gravity: 'centre' }]).png().toFile(path.join(exportDir, name));
  }
  for (const [size, filename] of [[512, 'icon.png'], [180, 'apple-icon.png']]) {
    const mark = await sharp(symbol).resize(Math.round(size * 0.72), Math.round(size * 0.72), { fit: 'inside' }).png().toBuffer();
    await sharp({ create: { width: size, height: size, channels: 4, background: '#f8fafc' } })
      .composite([{ input: mark, gravity: 'centre' }]).png().toFile(path.join(root, 'src/app', filename));
  }
  console.log('Asoka: cropped wordmark and 512/180px icons generated.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
