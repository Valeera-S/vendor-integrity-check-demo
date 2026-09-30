/* Vendor Integrity Check, static site behaviour.
   1. Simulated run: the form never submits; it lists the sources that would run for the
      subjects typed, ticks them off over about ten seconds, then opens the recorded case
      for that vendor (or the demo case). No findings are invented.
   2. Status chips: Source Status table cells get a class by their text.
   Pure functions live on window.VIC so tests/site_js can load this file in Node. */
(function () {
  "use strict";

  function canonicalKey(name, rules) {
    let s = String(name || "").toUpperCase().replace(/\s+/g, " ").trim().replace(/[ .,]+$/, "").trim();
    s = s.replace(/\bAND\b/g, "&").replace(/\./g, "").replace(/[^\w\s&]/g, " ");
    s = s.replace(/\s*&\s*/g, "&").replace(/\s+/g, " ").trim();
    if (!s) return "";
    const roman = rules.roman_to_arabic || {};
    const suffixes = new Set(rules.entity_suffixes || []);
    const tokens = s.split(" ").map((t) => (roman[t] !== undefined ? roman[t] : t));
    const merged = [];
    for (const tok of tokens) {
      const n = Number(tok);
      if (merged.length && /^\d+$/.test(tok) && n >= 1 && n <= 10) merged[merged.length - 1] += tok;
      else merged.push(tok);
    }
    while (merged.length && suffixes.has(merged[merged.length - 1])) merged.pop();
    return merged.join(" ");
  }

  function pickCase(manifest, typedName) {
    if (!String(typedName || "").trim()) return null;
    const key = canonicalKey(typedName, manifest.normalize || {});
    const hit = (manifest.cases || []).find((c) => c.vendor_key === key);
    return hit ? hit.case_id : manifest.demo_case;
  }

  function applicableSources(sources, subjects) {
    return sources.filter((s) => {
      const kindOk = (subjects.hasCompany && s.supports.includes("company")) ||
                     (subjects.hasPerson && s.supports.includes("person"));
      if (!kindOk) return false;
      if (s.trades && s.trades.length) return s.trades.some((t) => subjects.trades.includes(t));
      return true;
    });
  }

  function statusClass(text) {
    const t = text.trim().toLowerCase();
    if (t === "ok") return "ok";
    if (t.startsWith("failed") || t.startsWith("search failed")) return "bad";
    if (t.includes("review")) return "warn";
    return "info";
  }

  /* "ok" and "not found" become a chip. A long status such as
     "failed: DOB BIS returned Access Denied ..." keeps only its first word in the chip and the
     rest as text, so the cell can wrap instead of forcing the table wider than the page. */
  function splitStatus(raw) {
    const text = String(raw || "").trim();
    const cls = statusClass(text);
    if (text.length <= 24) return { cls: cls, label: text, rest: "" };
    const i = text.indexOf(":");
    if (i > 0 && i < 24) return { cls: cls, label: text.slice(0, i), rest: text.slice(i + 1).trim() };
    const sp = text.indexOf(" ");
    return { cls: cls, label: text.slice(0, sp), rest: text.slice(sp + 1).trim() };
  }

  function decorateStatusTables(root) {
    root.querySelectorAll(".report table").forEach((table) => {
      const heads = Array.from(table.querySelectorAll("th")).map((th) => th.textContent.trim());
      const col = heads.indexOf("Status");
      if (col < 0) return;
      table.querySelectorAll("tbody tr, tr").forEach((tr) => {
        const cell = tr.children[col];
        if (!cell || cell.tagName !== "TD") return;
        const parts = splitStatus(cell.textContent);
        const chip = document.createElement("span");
        chip.className = "chip " + parts.cls;
        chip.textContent = parts.label;
        cell.textContent = "";
        cell.appendChild(chip);
        if (parts.rest) cell.appendChild(document.createTextNode(" " + parts.rest));
      });
    });
  }

  /* Wide report tables scroll inside their own box instead of pushing past the article. */
  function wrapTables(root) {
    root.querySelectorAll(".report table").forEach((table) => {
      if (table.parentElement && table.parentElement.classList.contains("table-wrap")) return;
      const wrap = document.createElement("div");
      wrap.className = "table-wrap";
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    });
  }

  const timers = [];

  function wireForm() {
    const form = document.getElementById("check-form");
    if (!form) return;
    const root = document.body.dataset.root || "";
    // Timers are kept so a bfcache return (Back button) can cancel a run in progress.
    window.addEventListener("pageshow", (event) => {
      if (!event.persisted) return;
      timers.forEach(clearTimeout);
      timers.length = 0;
      form.querySelectorAll("input, textarea, button").forEach((el) => { el.disabled = false; });
      document.getElementById("progress").hidden = true;
    });
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const name = form.elements.name.value;
      let manifest = window.VIC_MANIFEST;
      try {
        if (!manifest) manifest = await (await fetch(root + "assets/manifest.json")).json();
      } catch (e) {
        window.location.href = root + "cases/" + form.dataset.demoCase + "/index.html";
        return;
      }
      const target = pickCase(manifest, name);
      if (!target) { form.elements.name.focus(); return; }
      const principals = form.elements.principals.value.split("\n").filter((l) => l.trim()).length;
      const trades = Array.from(form.querySelectorAll("input[name=trades]:checked")).map((i) => i.value);
      const rows = applicableSources(manifest.sources, { hasCompany: true, hasPerson: principals > 0, trades });
      const list = document.getElementById("progress-list");
      const status = document.getElementById("progress-status");
      const panel = document.getElementById("progress");
      list.innerHTML = "";
      rows.forEach((s) => {
        const li = document.createElement("li");
        li.className = "searching";
        li.innerHTML = "<span class=\"dot\"></span><span class=\"label\"></span><span class=\"state\">searching</span>";
        li.querySelector(".label").textContent = s.name;
        list.appendChild(li);
      });
      panel.hidden = false;
      form.querySelectorAll("input, textarea, button").forEach((el) => { el.disabled = true; });
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
      const total = 9000, step = rows.length ? total / rows.length : total;
      const chosen = manifest.cases.find((c) => c.case_id === target) || {};
      const when = chosen.created_at ? new Date(chosen.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : "";
      status.textContent = "Searching " + rows.length + " sources for " + (1 + principals) + " subject" + (principals ? "s" : "") + "...";
      rows.forEach((s, i) => {
        timers.push(setTimeout(() => {
          const li = list.children[i];
          li.className = "done";
          li.querySelector(".state").textContent = "done";
        }, step * (i + 1)));
      });
      timers.push(setTimeout(() => {
        status.textContent = "Opening recorded run from " + when;
        timers.push(setTimeout(() => { window.location.href = root + "cases/" + target + "/index.html"; }, 900));
      }, total + 200));
    });
  }

  window.VIC = { canonicalKey, pickCase, applicableSources, statusClass, splitStatus };
  document.addEventListener("DOMContentLoaded", () => {
    wireForm();
    decorateStatusTables(document);
    wrapTables(document);
  });
})();
