# Generated website illustrations — 2026-10-04

Created with the built-in `image_gen` tool at the owner's request. These are AI-generated illustrations, not photographs of actual SKUs, company premises, customer installations, certifications or test results.

The visual direction starts with the buyer's questions: what the product category looks like, where access controls are used, and what needs to be identified or checked before ordering. Restrained gray and navy tones, diffuse natural light, matte plastic, ordinary buildings and realistic scale match the existing site. No invented company identity, branded models, product ratings, certificate marks or measured results appear in the prompts.

## Asset set

- Six product and packaging concepts: `remotes`, `receiver`, `learning`, `controller`, `accessories`, `oem-kit`.
- Seven application scenes: `sliding-gate`, `swing-gate`, `garage`, `shutter`, `access`, `commercial`, `warehouse`.
- Twelve editorial concepts: `inspection`, `components`, `matching`, `smart-home`, `car-window`, `comparison`, `diagnostics`, `rf-bench`, `documentation`, `battery`, `rf-module`, `concurrency`.

Each selected 1536×1024 original is resized without cropping or upscaling into 1280×853, 640×427 and 320×213 WebP files, using `sharp`, quality 86, effort 6. No compositing, retouching or fabricated measurement screens are added during conversion. Website captions distinguish illustrations from the separately retained production video and extracted frames. Actual product specifications and compatibility still require confirmation.

`prompts.json` contains the final prompt set, original filenames and source SHA-256 checksums. The selected originals remain in Codex's generated image directory; all images referenced by the site are saved in this project.

To recreate the responsive files from those originals:

```bash
node scripts/prepare-generated-images.mjs <original-image-directory>
```

The script verifies source checksums before conversion. The static export verifier checks every declared WebP size, file format and referenced image path. Existing media URLs are retained. This illustration set does not resolve the project's outstanding need for verified product and factory photography.

The six-step compatibility workflow reuses `matching`, `learning`, `rf-module`, `garage` and `oem-kit` in 96×64 CSS-pixel thumbnail areas; its engineering step retains a separately sourced video frame. No additional generated assets were needed. At the owner's request, generated-image badges were removed and customer-facing copy now uses neutral illustration descriptions. Video-frame labels remain. The export verifier rejects old generated-image badges and AI image annotations. Product and application grids use smaller mobile images and layout-specific responsive sizes. This asset provenance record remains accurate.
