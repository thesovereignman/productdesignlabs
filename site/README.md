# PDL Site — Open Product Development

A self-contained static site for Product Design Labs, built from the strategy in `../strategy/`. **Zero build step, zero dependencies** — plain HTML/CSS/JS. It runs from any static host and works on any subdomain (e.g. `pdl.serviceghost.dev`) with no path changes, because every link is relative.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Landing page — the full Open Product Development positioning flow |
| `cost-calculator.html` + `calculator.js` | The Real Cost Calculator (primary lead magnet) |
| `vet-your-partner.html` | "How to Vet a Hardware Development Partner" checklist (content asset) |
| `deck.html` + `deck.css` + `deck.js` | The pitch deck as a keyboard-navigable HTML deck (`?` → arrows, space, F for fullscreen) |
| `styles.css` | Shared design system for the marketing pages |

## Preview locally

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to a serviceghost.dev subdomain

Pick whichever host you already use. All three serve this folder as-is.

**Option 1 — Cloudflare Pages / Netlify / Vercel (static):**
1. Point the tool at this `site/` directory (build command: none; output dir: `site`).
2. In the project's domain settings, add a custom domain: `pdl.serviceghost.dev` (or `studio.`, `open.`, etc.).
3. In your serviceghost.dev DNS, add the `CNAME` record the host gives you for that subdomain.

**Option 2 — any web server / S3 + CloudFront:**
Upload the contents of `site/` to the docroot for the subdomain. No server-side runtime required.

## Before it goes live — wire two things

1. **Email capture** (`calculator.js`, `emailBtn` handler): currently a front-end stub. Point it at your form endpoint (Formspree, ConvertKit, Beehiiv, etc.) — one `fetch` POST. Search for `TODO on deploy`.
2. **The proof beat:** `index.html` and `deck.html` reference case studies / a live devlog that don't exist yet. Fill these before external traffic (see `strategy/01` Part 6, open item 4).

## Decisions still baked in as placeholders

- **Category name:** copy uses "Open Product Development" (Jason's pick). If the team ratifies "Glass-Box Product Development," it's a find-and-replace — the deck already shows both on slide 6.
- **Openness tier:** the site currently promises Tier 2 (published process — calculator, stage floors, deliverable manifest). Confirm with Reggie before launch; the positioning depends on the practice matching the claim.

## Design system notes

- Metaphor: **black box → glass box.** Dark, gridded panels for the problem/enemy; light paper for the PDL model. The page literally lightens as the story resolves.
- Every statistic carries a **source chip** — the site practices the transparency it sells.
- Monospace numerals + engineering-document grid = the anti-render aesthetic. No stock photos, no gradients-as-decoration.
- One accent (teal `#14B8A6`) = "signal / open / go." Amber (`#D9922B`) only for source chips and warnings.
