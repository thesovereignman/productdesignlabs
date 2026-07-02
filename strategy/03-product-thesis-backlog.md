# PDL Product Thesis Backlog

**Workstream D | Draft for review | 2026-07-02**
Format: one thesis card per candidate. Each ends with a cheap validation probe - no thesis graduates to a build without its probe passing.

---

## Thesis 1: Scan-to-Print Discontinued Parts (working name: "Relic")

**Problem:** Owners of classic cars, discontinued appliances, and legacy equipment can't buy replacement parts that no longer exist. Current options: junkyard hunting, forums, or paying an engineering firm to reverse-engineer.

**30-day evidence:** Scan-to-clone of a lost fender bracket demoed "in minutes" (Revopoint); Jeep gas cap fixed in under an hour; restorers printing Miata headlight buckets, door handles, intake manifolds; Creaform rebuilt a 1952 Ferrari engine in 8 weeks; automotive 3D printing $6.7B → $23.2B by 2035. No dominant consumer brand exists in the gap between "DIY with a $600 scanner" and "$10K engineering firm."

**ICP:** Classic car restorers first (highest willingness to pay, parts literally unbuyable), then appliance/equipment owners.

**Wedge:** A service, not software: mail or scan the broken part → receive a printed part + own the CAD file forever. The file library compounds into a defensible catalog (network effect: every order enriches the catalog).

**Business model:** Per-part service fee → catalog subscription for shops → license the file library.

**Named risks:** Safety/liability line (never structural/safety parts - the community consensus envelope is clips/trim/brackets/ducts/housings); OEM IP claims on some parts; unit economics of one-off service work.

**Validation probe (2 weeks, <$500):** Landing page + $99 "part resurrection" offer posted to 3 classic-car forums and r/functionalprint. Pass = 10 paid orders or 100 waitlist emails.

**Fit with PDL:** Uses existing scan/CAD/print capability; feeds the devlog content engine; made-in-America micro-production story.

---

## Thesis 2: Micro-Factory Small-Batch Production

**Problem:** The prototype-to-production leap is where founders die ($20K + 6 months + wrong-tooling risk). Offshore minimums and 30-45 day shipping make small first batches brutal; domestic quotes run 2-6x.

**30-day evidence:** The month's most viral manufacturing post (3,013 likes) was a machine-powered micro-operation doing $4,441/day that "almost nobody would call a factory"; automation is collapsing factory startup costs; reshoring works at 8-14% landed-cost improvement in the right categories; consumer premium tolerance caps at ~10% - which small-batch speed can justify where patriotism can't.

**ICP:** Hardware founders needing 50-500 unit first runs (exactly PDL's client base), then niche brands with steady small-batch demand.

**Wedge:** "First batch, fast, domestic, no tooling gamble" - printed/machined/soft-tooled small runs with the DFM path to real tooling designed in from the start.

**Business model:** Per-batch production revenue + it de-risks PDL's own studio products + captures clients at the exact moment they'd otherwise churn to a contract manufacturer.

**Named risks:** Capex; operations is a different muscle than design; category-dependent economics (works for enclosures/assemblies, not for high-volume commodity electronics).

**Validation probe (4 weeks, no capex):** Broker 3 small-batch runs through partner shops at PDL margin. Pass = margin holds and clients say yes at the quoted premium.

**Fit with PDL:** Completes the design→build→produce ladder; the strongest possible proof artifact for Open Product Development.

---

## Thesis 3: The Real Cost Calculator as a Product (working name: "BOMcheck")

**Problem:** Founders cannot sanity-check dev-shop quotes or their own budgets; the information asymmetry is the root of the burn stories.

**30-day evidence:** Every cost-related thread in the research was founders discovering numbers too late (2.9 respins, $70K true cost, tooling/cert categories they didn't know existed). The vet-your-partner and cost-math content pillars target the same documented anxiety.

**ICP:** Pre-build hardware founders; hardware-curious VCs doing diligence.

**Wedge:** Free calculator (content engine asset) → paid tier: quote-review ("upload the dev shop's proposal, get a risk report"), budget export for investor decks.

**Business model:** Freemium SaaS or productized service ($250-500 quote reviews). Honest expectation: this is a lead-gen asset that might be a product, not the reverse.

**Named risks:** Small standalone market; the real value may be captured as PDL deal flow rather than SaaS revenue - that's an acceptable outcome and should be measured as one.

**Validation probe:** Ship the free calculator (already in the 90-day content plan - zero marginal cost). Pass for the paid tier = 20+ organic requests for "can you look at my actual quote."

---

## Thesis 4: Open Hardware Flagship (audience-first product)

**Problem/opportunity:** The highest-engagement hardware post of the research window was an open-source oscilloscope module (FRAMEOSCOPE) - open design files are the most efficient audience-builder in hardware right now.

**Wedge:** One PDL-designed open-source product in a category adjacent to the studio's expertise, built fully in public. Revenue from kits/assembled units; the real return is audience, credibility, and proof-of-process.

**Named risks:** Opportunity cost; open-source hardware margins are thin; must be genuinely useful, not a marketing prop (the community detects props instantly).

**Validation probe:** Pick 3 candidate products; post concept devlogs for each; let engagement pick the winner before any engineering spend.

**Priority note:** This is a marketing investment wearing a product costume. Sequence it behind Theses 1-2 unless the content engine needs a flagship sooner.

---

## Prioritization (recommended)

| Thesis | Evidence strength | Cost to validate | Strategic fit | Verdict |
|---|---|---|---|---|
| 1. Relic (scan-to-print) | Strong | Very low | High | **Probe now** |
| 3. BOMcheck (calculator) | Strong | ~Zero (already planned) | Very high | **Probe now (free tier ships anyway)** |
| 2. Micro-factory | Medium-strong | Low (broker model) | Very high | **Probe in parallel, brokered** |
| 4. Open flagship | Medium | Low probe / high build | High (marketing) | **Hold until content engine is live** |

Rule: each probe gets one owner, one deadline, one pre-written pass/fail line. Kill without ceremony on fail - the research's studio critique ("70% of studio ventures fail because they're built in isolation from real customer problems") is the standing warning.
