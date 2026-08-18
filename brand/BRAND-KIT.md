# Product Design Labs — Brand Kit

**Version 1.0 | 2026-08-18**
Derived from `strategy/01-positioning-and-site-copy.md` and `HARDWARE-MARKET-INTEL-BRIEF.md`.
This kit is the visual and verbal expression of one decision already made: **PDL practices Open Product Development.** Nothing here is decoration. Every rule below traces back to a positioning commitment.

---

## 0. The one-paragraph brief

PDL sells certainty in a category defined by its horror stories. The brand's job is therefore not to look impressive — it is to look **inspectable**. Impressive is what the black box sells: the beautiful render, the glossy studio site, the portfolio with no numbers. Our aesthetic is the opposite of a render. It is an engineering document: mono type, hairline rules, real measurements, visible corrections. If a design decision would look at home in a pitch deck for a consumer gadget, it is wrong for PDL.

**Internal rallying cry:** *Nothing behind the curtain.*

---

## 1. Brand platform

| Field | PDL |
|---|---|
| **Category** | Open Product Development *(Jason's pick; "Glass-Box Product Development" retained as supporting copy, not as the category)* |
| **Most Important Customer** | The burned-or-wary hardware founder — validated physical product, $50K–500K to deploy, #1 fear is paying for something that can't be manufactured |
| **The Enemy** | Black-box product development. Opacity itself — not a competitor |
| **The word we own** | **open** — open files, open costs, open process |
| **One-line narrative** | Hardware development you can actually see — open files, open costs, open process |
| **Hero line** | Hardware development with nothing to hide |
| **Three pillars** | Built to be manufactured · Yours at every milestone · Honest math, in writing |

### Brand architecture

PDL is the **studio/process brand**. Per the identity decision (2026-07-02), PDL's own products ship as **standalone brands from day one** so they can carry the company when the revenue mix shifts toward products.

- **PDL** — the studio, the process, the content engine. Uses this kit in full.
- **Product brands** — independent naming, colour, and type. Related to PDL only by an endorsement line, never by shared identity:
  > `Built in the open by Product Design Labs`
  set in mono, `--pdl-t-micro`, greyed. Never lock a product brand into the PDL mark.
- **Content properties** (devlogs, the calculator, Vet Your Partner) stay PDL-branded. They are the proof, and proof must be attributable.

---

## 2. Logo

### The mark — "The Open Box"

An enclosure whose right panel has swung open, with the contents plainly visible inside. It is the enemy and the answer in one figure: the same box the industry hides behind, opened.

Files in `brand/logo/`:

| File | Use |
|---|---|
| `pdl-mark.svg` | The mark alone. Inherits `currentColor` |
| `pdl-mark-redline.svg` | Mark with redline contents. Reserve for covers, decks, merch — one per surface, maximum |
| `pdl-lockup-horizontal.svg` | Mark + wordmark + category descriptor. The default for site headers, decks, documents |
| `pdl-lockup-compact.svg` | Mark + wordmark, no descriptor. Nav bars, email signatures, anywhere under 40px tall |
| `pdl-icon.svg` | Square app/social icon on ink |
| `pdl-favicon.svg` | 16px-optimised. Panel geometry simplified — do not substitute the full mark here |

All SVGs use `currentColor` for the mark (except icon/favicon, which are locked). Set the colour on the parent: `<span style="color: var(--pdl-ink)">`.

### Construction and clear space

- The mark is built on a 48-unit grid with a **3-unit stroke**. Stroke weight is optical, not scaled — below 24px, use `pdl-favicon.svg`, which is redrawn at 1.5.
- **Clear space** on all four sides = the width of the contents square (12 units at native size, i.e. **25% of the mark's height**). Nothing enters it — no type, no rule, no image edge.
- **Minimum sizes:** mark 20px · compact lockup 120px wide · horizontal lockup 200px wide (below this the descriptor stops being legible — drop to compact instead of shrinking).

### Correct use

- Ink on paper, or paper on ink. Those are the two lockups.
- On photography, only on a flat, unbusy region — or in a solid ink panel placed over the image.

### Never

- Never re-colour the mark to anything but ink, paper, or (contents only) redline.
- Never add a gradient, bevel, drop shadow, or glow. The brand has no shadows at all (§4).
- Never round the corners, outline the wordmark, or stretch either axis.
- Never rebuild the lockup by hand-setting the wordmark next to the mark — use the SVG.
- Never place the mark inside a circle or rounded "app bubble" of your own making.
- Never animate the panel closing. The box opens; it does not close.

---

## 3. Colour

Mono-first. **Colour is information, never decoration.** Tokens live in `brand/tokens.css`.

### Core

| Token | Hex | Role |
|---|---|---|
| `--pdl-ink` | `#111111` | Primary. Type, rules, the mark |
| `--pdl-paper` | `#FFFFFF` | Primary surface |
| `--pdl-black` | `#000000` | **Depicts the enemy only.** The black-box section, the "old way" slide. Never a general background |
| `--pdl-ink-line` / `--pdl-paper-line` | `#333333` / `#E4E4E4` | Hairlines |
| Grey scale | `#262626 → #EDEDED` | Drawing weights. `--pdl-grey-60` for muted body on paper, `--pdl-grey-40` on ink |

Note that `--pdl-black` and `--pdl-ink` are deliberately distinct. Pure black is the curtain; PDL's own surface is one step off it. In the deck, the enemy slide is the only `#000000` field, and that is the point.

### The accent: Redline

| Token | Hex | Role |
|---|---|---|
| `--pdl-redline` | `#D93A2B` | The DFM reviewer's pen |
| `--pdl-redline-deep` | `#A62A1E` | Redline as *text* on paper — passes AA at body sizes; `--pdl-redline` does not |
| `--pdl-redline-tint` | `#FBECEA` | Callout fill, on paper only |

PDL has exactly one accent and it is a correction mark. It appears where a black-box studio would have stayed quiet: a cost, a callout, a failure, a respin count, a number that hurts. **Target: under 3% of any surface.** If redline is doing the work of "brand colour on a button," delete it.

**Redline is for:** annotation leaders and callout numbers · the stat that indicts the old model (90%, 2.9×, $70K) · "what we quoted vs. what it cost" deltas · the underline on a damaging admission.
**Redline is never:** a section background · a hover state · a decorative rule · a chart's default series colour · the colour of a CTA that says "Get in touch."

### Status colours (product UI only, never marketing)

`--pdl-verified` `#0F7A6B` — gate passed, files transferred.
`--pdl-caution` `#B87503` — respin risk, estimate-not-a-quote.

### Contrast

Every ink/paper pairing in the token set clears **WCAG AA at 4.5:1**, and the core `#111111` on `#FFFFFF` clears AAA at 18.9:1. Two standing rules: use `--pdl-redline-deep` for redline text on paper, and never set `--pdl-grey-40` on paper (it is the on-ink muted value only).

### Migration note

`site/deck.css` still carries a teal `#14B8A6` accent and a warm `#F5F4EF` paper from an earlier round; `site/styles.css` has since gone pure mono. **The deck is the outlier and should move to these tokens** — teal is a generic SaaS signal and carries none of the redline's meaning. Tracked in §11.

---

## 4. Typography

| Role | Face | Setting |
|---|---|---|
| Display / headlines | **Inter Tight**, 700 | `letter-spacing: -0.02em` (`-0.03em` at hero size), `line-height: 1.12` |
| Body | **Inter**, 400/600 | 17px, `line-height: 1.55`, max 72ch |
| Data / eyebrow / caption | **JetBrains Mono**, 400/500 | `letter-spacing: 0.18em`, uppercase for eyebrows |

Both families are open-licensed (SIL OFL) — free to embed in the site, decks, and client documents with no licence exposure. Self-host them; do not hotlink a font CDN in client deliverables.

**Fallback stacks** are defined in `tokens.css` and resolve to the system UI face and system mono. The site currently ships on fallbacks alone and still reads correctly — that is by design, and it is the test any type decision must pass.

### The mono rule

**If it is a measurement, it is mono.** Costs, durations, respin counts, part numbers, dates, revision tags, file names, gate names (`EVT` / `DVT` / `PVT`), percentages. This is the single most identity-carrying typographic habit PDL has: it makes every page read like a document produced by people who measure things, and it visually separates claims from numbers — which is the entire positioning.

### Hierarchy rules

- One `h1` per page, and it states the problem or the promise. Never a feature.
- Eyebrows are mono, uppercase, tracked out, and name the *beat* ("The stakes", "The mechanism"), not the section's contents.
- Body copy never exceeds 72 characters per line (`--pdl-maxw-read`).
- No italics for emphasis in UI. Emphasis is weight (600) or a redline underline.
- No text over 3 lines in a stat block. If the caption needs a paragraph, it is not a stat.

---

## 5. Layout, grid, and geometry

- **Zero radius. Everywhere.** `--pdl-radius: 0`. Drawings have corners. Rounded corners are the visual grammar of the consumer-gadget render we argue against.
- **No shadows. Ever.** Elevation is a 1px hairline, not a blur. If a panel must sit above the page, give it a border.
- **8px base grid**, `--pdl-space-1` through `-7`. Section padding is `--pdl-space-7` (96px) on desktop.
- **Hairline is the default rule weight** (1px). 2px is reserved for a major section break or the mark's stroke.
- **Content max-width** 1080px; long-form reading column 760px.
- Tables get hairlines and left-aligned mono numerals — not zebra striping, not rounded cards.

### The signature device: the annotation

The one layout element that is uniquely PDL. A hairline leader from a redline callout number to the thing it explains — exactly as a drawing is marked up. Use it to expose the thing a black-box studio would leave unlabelled: a real cost inside a quote, a failure mode on a render, a gate on a timeline.

Rules: callout number in mono, redline, in a 1px redline square. Leader is a 1px redline line, orthogonal or 45° only — never a curve. **Maximum three annotations per figure.** More than three and it stops being emphasis.

---

## 6. Imagery

The brand's imagery position is a direct argument: **the render is the enemy's medium.** The industry's signature failure is the beautiful render that cannot be built. PDL therefore does not lead with renders.

**Shoot / source:**
- Real benches, real hands, real light. Sawdust, flux residue, a scuffed anodised part.
- PCBs with test points probed. Calipers on a dimension. Tooling and mould steel. Failed parts kept and photographed as evidence.
- Drawings and screens as they actually appear: CAD with the tree open, a marked-up PDF, a BOM in a spreadsheet.
- Process over product. Someone doing the work beats the object sitting on a seamless.

**Never:**
- Studio-lit hero renders on gradient seamless backgrounds. Ever.
- Stock "innovation" imagery: glowing circuit-board abstractions, hands holding light, blue tech gradients, robot hands.
- Anything that implies a factory or a facility PDL does not have.
- People pointing at a whiteboard.

**Treatment:** full colour, corrected but not graded warm or teal. No duotone filters. Crop hard and off-centre; a slightly awkward, documentary crop is more credible than a composed one. Any image may carry annotations (§5) — that is how a photo becomes a PDL asset.

**Captions are mandatory and are mono.** Every image says what it is, at what stage: `DVT2 enclosure, tool-marked — draft angle corrected after first shots`. An uncaptioned photo is decoration, and decoration is what the black box uses.

**AI-generated imagery:** allowed for *concept and texture* (the black-box/glass-box figure, backgrounds, pattern), never presented as a PDL build. Anything depicting our work is a real photograph of real work. See `brand/assets/README.md` for the generation prompts and this rule in enforceable form.

---

## 7. Voice and tone

**We sound like:** an engineer who respects you enough to tell you the bad news first.

### Six rules

1. **Numbers before adjectives.** Not "significant rework" — "2.9 respins, $28–70K each." A claim without a number is a claim the market has already heard.
2. **Name the failure mode.** Every promise is stated as the burn it prevents: "every file yours at every milestone" *because* withheld files are how founders get stranded.
3. **Say the expensive thing.** Law of Candor. "Your project will probably need three board revisions" is our best line precisely because no competitor will print it.
4. **Cite the source.** Stats carry a visible source chip. Uncited numbers are what the black box does.
5. **Short sentences. Plain words.** Expand every acronym on first use — DFM, EVT, DVT, PVT. The MIC is technical-enough, not an expert.
6. **No hype vocabulary.** Banned: *cutting-edge, seamless, world-class, passionate, innovative, revolutionary, end-to-end, turnkey, one-stop, unlock, elevate, supercharge, game-changing.* If a sentence survives deleting its adjectives, delete them.

### Vocabulary shifts (teach the market these)

| Don't say | Say |
|---|---|
| Get a quote | See the math |
| Trust our portfolio | Watch the process |
| Deliverables on completion | Yours at every milestone |
| Fast turnaround | Honest stage gates |
| Dev shop / agency | Open product development studio |
| Client | Founder / operator (or their name) |
| Solutions | The work, the build, the files |

### Tone by surface

| Surface | Tone |
|---|---|
| Site | Direct, problem-first, evidence-heavy. Leads with the enemy |
| Devlog | First-person, present tense, including what broke this week. A devlog with no failures is marketing, and reads as such |
| Proposal / SOW | Plainest register we have. Respin math on page one |
| Sales email | Short. One number, one artifact, one ask |
| Social | One idea per post. Screenshots of real artifacts beat graphics of quotes |

### Boilerplate

**One-liner (25 words):**
> Product Design Labs is an open product development studio for hardware founders — design-for-manufacturing from day one, every file yours at every milestone, real cost math in writing.

**Standard 50-word boilerplate:**
> Product Design Labs is an open product development studio. We design physical products to be manufactured, not just rendered: DFM from day one, schematics, BOM, firmware source and test fixtures delivered at every milestone gate, IP assigned by default, and the real cost math — including respin budget — stated before you sign.

**P.S. line (use on any long-form asset):**
> We publish our process because a process worth trusting is one you can watch.

---

## 8. Applications

**Site** — `site/styles.css` is already mono and on-brand. Adopt `tokens.css` as its variable source (§11).

**Deck** — dark-to-light progression stays: the enemy slides live on `--pdl-black`, the category reveal breaks to `--pdl-paper`. That progression *is* black-box-to-glass-box, and it is the deck's strongest structural idea. Drop the teal.

**Devlog post** — mono date/revision header, one real photograph, hard numbers, a "what broke" section. No hero graphic.

**Proposal / SOW** — paper, hairline tables, mono figures. The respin budget line is the only redline on the page.

**Social / OG card** — ink field, compact lockup top-left, one line of Inter Tight at hero scale, one mono stat line beneath, redline only if there is a number to indict. No photo behind type.

**Email signature** — compact lockup, mono descriptor line, no image banner.

**Merch / stickers** — the mark, ink on paper or paper on ink. The redline-contents variant is the one place a bit of colour earns itself.

---

## 9. Accessibility floor

Non-negotiable, because an "open" brand that can't be read is an oxymoron:
- 4.5:1 minimum on all text. `--pdl-redline-deep` for redline text on paper.
- Colour is never the sole carrier of meaning — a redline callout always has a number or a label.
- Focus states are a 2px ink (or paper, on ink) outline. Never remove the outline.
- Every image has real alt text describing the artifact and the stage, not "product photo."
- Respect `prefers-reduced-motion`; PDL has no motion that carries meaning, so honour it by disabling all of it.

---

## 10. Ten-second test

Before anything ships, ask:

1. Could this have come from any other product studio? If yes, it's wrong.
2. Is there a number on it? If not, why not?
3. Is the accent doing a job, or is it decoration?
4. Does it show the work, or the outcome? Show the work.
5. Would we be comfortable if the client saw this mid-stream? That is the whole brand.

---

## 11. Open items

1. **Deck retokenisation** — `site/deck.css` still uses teal `#14B8A6` and warm paper `#F5F4EF`. Migrate to `brand/tokens.css`; keep the black-box→glass-box light progression.
2. **Font hosting** — self-host Inter Tight + JetBrains Mono WOFF2 in `site/fonts/` and add `@font-face` blocks. The site is on fallbacks today and holds up, so this is an improvement, not a blocker.
3. **Nav mark swap** — `site/index.html` has an inline crossed-square SVG. Replace with `pdl-lockup-compact.svg`.
4. **Photography** — the imagery position (§6) is currently unenforceable: PDL has no first-party bench library. Shooting real work is a prerequisite for the proof beat, which `strategy/01` Part 6 already flags as the weakest part of the story.
5. **Redline vs. the pure-mono site** — the shipped site has no accent at all. Introducing redline is a deliberate addition; roll it out on the stat wall and the calculator first and see whether the candor numbers land harder.
