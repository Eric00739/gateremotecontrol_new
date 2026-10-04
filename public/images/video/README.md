# Homepage video frames

Source selected by the site owner: `/videos/gateremote-hero.mp4`.
Source dimensions: 1280 × 726, 30 fps, 18.433 seconds.
SHA-256: `24b8390998f044887d9f056936e0e9ac3df428ba7ec64eb3d95ce365e19afcb2`.

| File stem | Time in source | Visible scene |
| --- | --- | --- |
| circuit-layout | 1.2 s | Circuit layout on a workstation monitor |
| board-assembly-machine | 4.4 s | Circuit-board assembly machine and component feeders |
| assembly-workstations | 8.8 s | Workstations along a workshop aisle |
| circuit-boards | 11.6 s | Populated circuit boards on a conveyor |
| board-handling | 14.2 s | Gloved operator handling a panel of boards |
| board-fixture | 16.3 s | Board held in a fixture with vertical probes |

Each scene has 1280, 640 and 320 pixel variants. The unsuffixed file preserves
the source dimensions. Processing: PNG frame decode with ffmpeg, downsampling
and WebP encoding with sharp (quality 88, effort 6). No generative editing,
retouching, sharpening, color filters, compositing or upscaling.

Reproduce from the repository root: `node scripts/extract-video-photos.mjs`.
Do not infer facility ownership, product specifications, RF test results,
certification or manufacturing capacity from these scenes. The video has no
finished remote product photos, gate installations, packaging or shipping scenes.
