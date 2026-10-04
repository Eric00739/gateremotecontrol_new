import { readFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const sourceRoot = process.argv[2];
if (!sourceRoot) throw new Error('Usage: node scripts/prepare-generated-images.mjs <original-image-directory>');
const manifest = JSON.parse(await readFile(path.join(root, 'public/images/generated/prompts.json'), 'utf8'));
const destination = path.join(root, 'public/images/generated');
await mkdir(destination, { recursive: true });

for (const asset of manifest.assets) {
  if (!/^[a-z0-9-]+$/.test(asset.id) || path.basename(asset.sourceFile) !== asset.sourceFile) {
    throw new Error(`Invalid image manifest entry: ${asset.id}`);
  }
  const source = await readFile(path.join(sourceRoot, asset.sourceFile));
  const checksum = createHash('sha256').update(source).digest('hex');
  if (checksum !== asset.sourceSha256) throw new Error(`Source checksum mismatch: ${asset.id}`);
  for (const width of [1280, 640, 320]) {
    await sharp(source).resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .toFile(path.join(destination, `${asset.id}${width === 1280 ? '' : `-${width}`}.webp`));
  }
}

console.log(`Prepared ${manifest.assets.length} illustrations in three responsive WebP sizes.`);
