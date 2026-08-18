# Brand imagery library — generation manifest

Generated **2026-08-18** with the Higgsfield MCP server (`nano_banana_2`, 2K, 2 credits each, 20 credits total).
Every prompt here is written to satisfy **BRAND-KIT.md §6 Imagery** — documentary bench realism, and an explicit refusal of the render aesthetic.

## The rule that governs this whole directory

> AI-generated imagery is allowed for **concept and texture**. It is never presented as a PDL build.

Assets 1, 8 and 9 are concept/texture and may ship as-is. Assets 2–7 and 10 are **reference plates**: they define the look for a real shoot, and they may be used as generic editorial imagery, but the moment an image is placed next to a claim about our work, it must be a photograph of our work. Publishing a generated bench shot as a PDL project would be a black-box behaviour, which is the one thing the brand cannot do.

## Retrieving the files

The renders live in the Higgsfield workspace this session generated them in. The session that made them ran behind an egress policy that blocks the delivery CDN, so they were **not** committed to this repo. To land them:

1. Open the generation in Higgsfield (or fetch the `rawUrl` below from an unrestricted machine).
2. Save to `site/img/brand/<slug>.png` using the slugs in the table.
3. Run them through an optimiser (`squoosh`/`cwebp`) and commit the WebP alongside — these are 2.5K-wide PNGs and are far too heavy to ship raw.
4. Reference them from `site/brand.html` §Imagery, replacing the placeholder frames.

`brand.html` is deliberately self-contained and does not depend on any of these files, so the kit stands up whether or not this step happens.

## Manifest

| # | Slug | Ratio | Job ID | Role |
|---|---|---|---|---|
| 1 | `01-black-box-glass-box` | 16:9 | `fde54fc9-f352-40a1-b161-9f4587c4a688` | **Concept, ships.** The category figure: sealed enclosure vs. opened enclosure. Site hero, deck slide 5, OG image |
| 2 | `02-bench-probe` | 3:2 | `1f55a2a6-c1dd-44fd-9b6d-d49da0d42111` | Reference plate — electronics work, respin/EVT content |
| 3 | `03-redline-drawing` | 3:2 | `05c94dc6-8d19-4fef-a0f4-490aeb0b4dff` | Reference plate — the redline accent's origin story. DFM content |
| 4 | `04-tooling-steel` | 3:2 | `bc03f5ec-5584-46d5-af24-db04e112f021` | Reference plate — tooling, PVT, the cost calculator |
| 5 | `05-caliper-part` | 3:2 | `b1aee29c-6b6c-4d06-a167-32b39afc10a8` | Reference plate — "honest math" pillar, measurement macro |
| 6 | `06-failed-parts` | 16:9 | `39c0e8b9-198f-4e2c-900d-76a9250309dd` | Reference plate — the candor asset. Failure archive for devlogs |
| 7 | `07-cad-bom-desk` | 3:2 | `5920d8dd-32b8-46da-8cdb-ea361bb89740` | Reference plate — "yours at every milestone", deliverable manifest |
| 8 | `08-grid-texture` | 16:9 | `5142a843-c6a7-45e1-84ec-c1e8e87f2030` | **Texture, ships.** Drafting-grid background for dark sections |
| 9 | `09-og-card-plate` | 16:9 | `26b0266b-21f2-4900-9aec-03a1c1a0b391` | **Texture, ships.** Social/OG plate: empty upper-left for headline, one redline callout lower-right |
| 10 | `10-review-bench` | 3:2 | `c1c87b40-2eb7-4cf9-95ae-7d7513c27c31` | Reference plate — how to shoot people. Work is the subject, faces are not |

CDN base (files expire; re-fetch from the workspace if a link is dead):
`https://d8j0ntlcm91z4.cloudfront.net/user_3Dy7PYQVVFkVoVTjl7BMjITCYXD/hf_20260818_110114_<job-id>.png`

## Prompts

Each prompt carries an explicit exclusion clause. That clause is the important part — without it these models default to exactly the glossy blue-gradient tech render §6 bans. Reuse the pattern when generating anything new: **describe the real thing, then name the stock cliché you are refusing.**

**1 · black-box-glass-box** — Documentary photograph, flat overhead daylight. Two identical matte-anodized aluminum electronics enclosures sit side by side on a scratched steel workbench. The left enclosure is completely sealed and opaque black, no seams visible, telling you nothing. The right enclosure has its side panel removed and set beside it, revealing the real populated circuit board inside, ribbon cable, brass standoffs, a small heatsink. Honest available light, no studio gradient, no seamless backdrop, no glow, no lens flare, no glossy CGI render look. Slightly off-center documentary crop, visible bench clutter at the frame edges. Photojournalism, not advertising.

**2 · bench-probe** — Real electronics workbench photograph. A populated printed circuit board clamped in a bench vise, two oscilloscope probes hooked onto test points, dried flux residue around the solder joints, a hand-soldered bodge wire in place. A multimeter and a spool of solder in the shallow background. Fluorescent shop lighting, honest color, no teal-and-orange grade. Hard tight crop. No glowing traces, no blue technology gradient, no abstract circuit art, no CGI.

**3 · redline-drawing** — Overhead photograph of a printed mechanical engineering drawing lying flat on a wooden desk. Orthographic views, dimension lines with arrowheads, section marks and a title block in the lower right. The drawing has been marked up by hand in red ballpoint pen: circled dimensions, correction arrows, a crossed-out value with a new one written beside it. A pair of digital calipers rests on the corner of the paper. Natural window light, slight paper texture and a crease. Real desk, not a styled flatlay.

**4 · tooling-steel** — Machine shop photograph of one half of a steel injection mold tool resting on a bench. Polished cavity surface, ejector pin holes, cooling channel ports drilled into the block edge, machining marks and a film of cutting oil. Metal chips scattered on the bench beside it. Plain overhead fluorescent shop light. Industrial, unglamorous, real. No render, no dramatic rim lighting, no dark moody studio background.

**5 · caliper-part** — Macro photograph: a digital caliper measuring the wall thickness of a machined anodized aluminum part. Visible tool marks and a faint anodize color variation across the surface, a small burr on one edge. A hand steadies the part. Shallow depth of field, honest workshop light, slight dust. Documentary macro, no product-shot styling, no seamless white sweep, no CGI perfection.

**6 · failed-parts** — Overhead documentary photograph of six rejected prototype enclosures laid out in a row on a plain workbench, kept as evidence. Each has a small handwritten paper tag taped to it. The parts show visible real defects: a warped 3D print, a short shot with an incomplete corner, a sink mark, a discolored batch, a cracked snap fit, a part with heavy flash along the parting line. Plain even overhead light, no styling, no hero lighting. This is a failure archive, not a portfolio shot.

**7 · cad-bom-desk** — Photograph of a laptop screen on a cluttered engineering desk showing CAD software with an assembly open and the feature tree expanded down the left side, mid-edit with a sketch in progress. Beside the laptop, a printed bill of materials spreadsheet with rows highlighted and a coffee ring on it. Ordinary office light, reflections on the screen, real mess. Not a staged tech advertisement, no glowing holographic interface, no futuristic UI.

**8 · grid-texture** — Flat abstract background texture, no subject. Near-black charcoal surface, color value approximately hex 111111, overlaid with a very faint precise drafting grid of thin lighter hairlines forming even squares, like engineering graph paper seen in low light. Subtle paper grain. Completely even edge to edge with no vignette, no glow, no center hotspot, no gradient, no perspective. Flat and uniform so text can be placed anywhere over it.

**9 · og-card-plate** — Flat minimal background plate for a social share card. Near-black charcoal field, hex 111111, with a barely visible drafting grid. The upper left two thirds of the frame is completely empty and clean, reserved for headline text. In the lower right corner only, a single thin bright red annotation leader line at a 45 degree angle ending in a small empty red square outline, like a callout marker on an engineering drawing. Nothing else. No glow, no gradient, no vignette, no text, no logo.

**10 · review-bench** — Documentary photograph of two people at a workbench reviewing hardware together, shot from slightly behind and to the side so the work is the subject and not their faces. On the bench between them: a partially disassembled product, a printed drawing marked in red pen, a laptop showing a spreadsheet. One person points at a specific feature on the part while the other takes notes on the printout. Ordinary workshop light, real clothes, real clutter. No whiteboard, no conference room, no stock-photo smiling, no staged handshake.

## Regenerating

Via the Higgsfield MCP server: `generate_image_batch` with `model: "nano_banana_2"`, `resolution: "2k"`, the aspect ratio from the table, and the prompt verbatim. Then `jobs_wait`, then `show_generation_by_ids`.
Note that requesting `nano_banana_pro` currently routes to `nano_banana_2` server-side — no action needed, but do not be surprised by the model name on the returned job.
