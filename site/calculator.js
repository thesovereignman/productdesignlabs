/* Real Cost Calculator — honest planning ranges from field data.
   All base numbers sourced from HARDWARE-MARKET-INTEL-BRIEF.md.
   Ranges are deliberately conservative-honest, not sales-optimistic. */

(function () {
  // Base prototyping+engineering ranges [low, high] in USD, by category.
  var PROTO = {
    accessory: [2000, 15000],
    consumer:  [15000, 60000],
    wearable:  [20000, 70000],
    iot:       [30000, 90000],
    robotics:  [40000, 150000],
    medical:   [60000, 180000]
  };
  // Per-respin cost band [low, high] by complexity (EMA-EDA: ~$28-44K typical, up to $70K true cost).
  var RESPIN = {
    low:  [10000, 25000],
    med:  [28000, 44000],
    high: [50000, 70000]
  };
  // Respin count baseline (industry avg 2.9), nudged by complexity.
  var RESPIN_COUNT = { low: 2, med: 2.9, high: 3.5 };
  // Tooling [low, high] (Promwad: mech/tooling ~$50-150K), scaled by complexity + volume.
  var TOOLING = {
    accessory: [8000, 40000],
    consumer:  [50000, 150000],
    wearable:  [50000, 140000],
    iot:       [50000, 150000],
    robotics:  [70000, 200000],
    medical:   [80000, 220000]
  };
  // Certification [low, high] (Promwad: $30-100K; medical/regulated higher).
  var CERT = {
    accessory: [3000, 20000],
    consumer:  [30000, 100000],
    wearable:  [30000, 90000],
    iot:       [30000, 100000],
    robotics:  [40000, 120000],
    medical:   [120000, 400000]
  };
  // Timeline floor by complexity (Instrumental: EVT 4-5 + DVT 8 + PVT 4 = ~16-17wk eng;
  // Tektos: simple 9-14mo, moderate 14-20mo, complex 20-36mo to manufacturing-ready).
  var TIMELINE = {
    low:  { eng: "16–17 weeks", real: "9–14 months to manufacturing-ready" },
    med:  { eng: "20–24 weeks", real: "14–20 months to manufacturing-ready" },
    high: { eng: "24–36 weeks", real: "20–36 months to manufacturing-ready" }
  };

  var COMPLEX_MULT = { low: 0.85, med: 1.0, high: 1.25 };

  var state = { category: "consumer", complexity: "med", volume: 250 };

  function fmt(n) {
    if (n >= 1000) return "$" + Math.round(n / 1000) + "K";
    return "$" + n;
  }
  function range(arr, mult) {
    return fmt(arr[0] * mult) + "–" + fmt(arr[1] * mult);
  }

  function volumeToolingMult(v) {
    // Higher first-run volume pushes toward the top of the tooling band (real tooling vs soft tooling).
    if (v <= 250) return 0.6;
    if (v <= 1000) return 0.85;
    return 1.1;
  }

  function compute() {
    var cat = state.category, cx = state.complexity, vol = state.volume;
    var cm = COMPLEX_MULT[cx];

    // Prototyping & engineering
    var proto = [PROTO[cat][0] * cm, PROTO[cat][1] * cm];

    // Respins
    var rc = RESPIN_COUNT[cx];
    var respinLow = RESPIN[cx][0] * rc;
    var respinHigh = RESPIN[cx][1] * rc;

    // Tooling (scaled by volume)
    var tm = volumeToolingMult(vol);
    var toolLow = TOOLING[cat][0] * tm;
    var toolHigh = TOOLING[cat][1] * tm;

    // Certification
    var certLow = CERT[cat][0], certHigh = CERT[cat][1];

    // Totals
    var totalLow = proto[0] + respinLow + toolLow + certLow;
    var totalHigh = proto[1] + respinHigh + toolHigh + certHigh;

    // Render
    set("proto", fmt(proto[0]) + "–" + fmt(proto[1]));
    set("respinCount", rc + "×");
    set("respin", fmt(respinLow) + "–" + fmt(respinHigh));
    set("tooling", fmt(toolLow) + "–" + fmt(toolHigh));
    set("cert", fmt(certLow) + "–" + fmt(certHigh));
    set("total", fmt(totalLow) + "–" + fmt(totalHigh));

    var tl = TIMELINE[cx];
    set("timeline", tl.eng + " engineering");
    set("timelineNote", tl.real + ". Compressing a stage costs more than the stage.");

    // Funding context
    var fn = document.getElementById("fundingNote");
    var vcCats = { robotics: 1, iot: 1, medical: 1 };
    if (vcCats[cat]) {
      fn.innerHTML = "Funding note: this category attracts VC right now. Hardware seeds run <b style='color:#fff'>$5–10M</b> (2–3× software). A non-dilutive SBIR Phase I ($200–305K) can cover the EVT-stage effort before you raise.";
    } else if (cat === "accessory") {
      fn.innerHTML = "Funding note: likely too small for VC — and that can be a strength. Bootstrap-friendly economics, or fund the build with a non-dilutive SBIR Phase I ($200–305K).";
    } else {
      fn.innerHTML = "Funding note: consumer hardware is currently light on VC interest. Consider SBIR Phase I ($200–305K, non-dilutive), Reg CF, or revenue-funded batches. Design the BOM for it from day one.";
    }
  }

  function set(id, val) {
    var el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  // Wire inputs
  document.getElementById("category").addEventListener("change", function (e) {
    state.category = e.target.value; compute();
  });
  var seg = document.getElementById("complexity");
  seg.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    seg.querySelectorAll("button").forEach(function (x) { x.classList.remove("active"); });
    b.classList.add("active");
    state.complexity = b.getAttribute("data-v"); compute();
  });
  var vol = document.getElementById("volume");
  vol.addEventListener("input", function (e) {
    state.volume = parseInt(e.target.value, 10);
    document.getElementById("volLabel").textContent = state.volume.toLocaleString();
    compute();
  });

  // Email capture (front-end stub — wire to your ESP / form endpoint on deploy)
  document.getElementById("emailBtn").addEventListener("click", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value.trim();
    if (!email || email.indexOf("@") === -1) {
      alert("Enter a valid email and we'll send the detailed, source-linked breakdown.");
      return;
    }
    // TODO on deploy: POST to form endpoint (Formspree / ConvertKit / etc.)
    this.textContent = "Sent — check your inbox ✓";
    this.style.background = "#0E8C7E";
  });

  compute();
})();
