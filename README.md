# PDL Build

The Product Design Labs strategy + marketing site, built from market research. This is PDL's own working plan (authored by the team), not a vendor pitch.

## Contents

| Path | What it is |
|---|---|
| `HARDWARE-MARKET-INTEL-BRIEF.md` | The combined market-intelligence brief — 7 research runs synthesized (June 2026 window) |
| `strategy/01-positioning-and-site-copy.md` | Positioning, category design (Open Product Development), and all site copy |
| `strategy/02-content-engine.md` | The four content pillars + 90-day plan |
| `strategy/03-product-thesis-backlog.md` | Product bets with cheap validation probes |
| `strategy/04-funding-ops.md` | The funding ladder + SBIR-as-a-service capability |
| `strategy/05-pitch-deck-design.md` | Internal strategy-deck spec (drives `site/deck.html`) |
| `site/` | The deployable static site (see `site/README.md`) |

## Run the site locally

No build step. From `site/`:

```bash
cd site
python3 -m http.server 8000      # or: npx serve
# open http://localhost:8000
```

- `index.html` — landing page
- `cost-calculator.html` — the Real Cost Calculator (lead magnet)
- `vet-your-partner.html` — the checklist content asset
- `deck.html` — the strategy deck (arrows / space / F for fullscreen)

## Deploy to a serviceghost.dev subdomain

Point Cloudflare Pages / Netlify / Vercel at the `site/` folder (build command: none, output dir: `site`), add the custom subdomain (e.g. `pdl.serviceghost.dev`), and add the CNAME to your serviceghost.dev DNS. Full notes in `site/README.md`.

## Open decisions (see strategy/01 Part 6)

1. **Category name** — copy uses "Open Product Development" (Jason's pick); "Glass-Box Product Development" is the alternative shown on deck slide 6. Switching is a find-and-replace.
2. **Openness tier** — site currently promises Tier 2 (published calculator, stage floors, deliverable manifest). Confirm with Reggie; the positioning depends on the practice matching the claim.

## Before external traffic

1. Wire the calculator email capture to a real endpoint (`site/calculator.js`, search `TODO on deploy`).
2. Fill the proof beat — a live devlog and 1–2 case studies with numbers from our own builds.
