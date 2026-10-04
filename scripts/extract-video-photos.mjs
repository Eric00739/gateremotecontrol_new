import { spawnSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = 'public/videos/gateremote-hero.mp4';
const destination = 'public/images/video';
// Times were reviewed against the homepage video, away from cuts and dissolves.
const frames = [
  ['circuit-layout', 1.2],
  ['board-assembly-machine', 4.4],
  ['assembly-workstations', 8.8],
  ['circuit-boards', 11.6],
  ['board-handling', 14.2],
  ['board-fixture', 16.3],
];

mkdirSync(`${root}${destination}`, { recursive: true });
for (const [name, seconds] of frames) {
  const result = spawnSync('ffmpeg', [
    '-hide_banner', '-loglevel', 'error', '-i', source,
    '-ss', String(seconds), '-frames:v', '1', '-f', 'image2pipe', '-c:v', 'png', '-',
  ], { cwd: root, maxBuffer: 10 * 1024 * 1024 });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`Frame extraction failed: ${name}: ${result.stderr}`);
  for (const width of [1280, 640, 320]) {
    await sharp(result.stdout).resize({ width, withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toFile(`${root}${destination}/${name}${width === 1280 ? '' : `-${width}`}.webp`);
  }
}
