/* Vendor Integrity Check, static site behaviour.
   1. Simulated run: the form never submits; it lists the sources that would run for the
      subjects typed, ticks them off over about ten seconds, then opens the recorded case
      for that vendor (or the demo case). No findings are invented.
   2. Status chips: Source Status table cells get a class by their text.
   3. Protected cases (protected/index.html): decrypt AES-GCM files in the browser with WebCrypto.
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

  /* Protected cases. The export encrypts them with AES-256-GCM; the key comes from the access
     code with PBKDF2-HMAC-SHA256 (parameters in assets/protect.json). Nothing here sends the
     code anywhere: it is turned into a NON-extractable CryptoKey that lives in memory only (never in
     sessionStorage or localStorage), so a refresh or a new tab asks for the code again.
     Every ciphertext is bound to its published path through the GCM additional data. */
  const KEY_CHECK = "vic-site-access-ok";
  const CHECK_AAD = "vic-site-key-check";
  const LISTING_AAD = "assets/protected.json.enc";
  const NEEDS_HTTPS = "This page needs HTTPS (or localhost) to decrypt.";
  /* No html entry on purpose: decrypted HTML is never given a document MIME type. JSON and
     Markdown are shown as plain text so nothing in them can run. */
  const MIME = {
    json: "text/plain; charset=utf-8", md: "text/plain; charset=utf-8",
    txt: "text/plain; charset=utf-8", csv: "text/plain; charset=utf-8", png: "image/png",
    jpg: "image/jpeg", jpeg: "image/jpeg", gif: "image/gif", pdf: "application/pdf",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };
  const FRAME_CSP = "default-src 'none'; img-src data: blob:; style-src 'unsafe-inline'";

  function mimeFor(path) {
    const m = /\.([A-Za-z0-9]+)$/.exec(String(path));
    return (m && MIME[m[1].toLowerCase()]) || "application/octet-stream";
  }

  /* How a decrypted file is shown. HTML (saved third-party pages with scripts) goes into a
     sandboxed iframe with no allow-scripts and no allow-same-origin, so it has an opaque
     origin and cannot run or reach the unlock key. Everything else is a blob URL with a
     non-HTML type in a new tab. */
  function viewPlan(path) {
    if (/\.html?$/i.test(String(path))) return { kind: "frame", sandbox: "" };
    return { kind: "blob", mime: mimeFor(path) };
  }

  function frameDocument(html) {
    return '<meta http-equiv="Content-Security-Policy" content="' + FRAME_CSP + '">' + html;
  }

  function requireSubtle(c) {
    if (!c || !c.subtle) throw new Error(NEEDS_HTTPS);
  }

  function b64decode(text) {
    const bin = atob(text);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function b64encode(bytes) {
    let s = "";
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  }

  async function deriveKey(code, params) {
    requireSubtle(typeof crypto === "undefined" ? null : crypto);
    const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(code), "PBKDF2", false, ["deriveKey"]);
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", hash: "SHA-256", salt: b64decode(params.salt), iterations: params.iterations },
      base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
  }

  /* File layout: 12-byte IV, then ciphertext with the GCM tag. aad is the file's published
     relative path (or CHECK_AAD). Rejects when the key is wrong or the file is in the wrong place. */
  async function decryptBlob(key, bytes, aad) {
    const opts = { name: "AES-GCM", iv: bytes.slice(0, 12), additionalData: new TextEncoder().encode(aad) };
    const plain = await crypto.subtle.decrypt(opts, key, bytes.slice(12));
    return new Uint8Array(plain);
  }

  async function checkKey(key, params) {
    try {
      return new TextDecoder().decode(await decryptBlob(key, b64decode(params.check), CHECK_AAD)) === KEY_CHECK;
    } catch (e) {
      return false;
    }
  }

  function wireProtected() {
    const app = document.getElementById("protected-app");
    if (!app) return;
    const root = app.dataset.root || "";
    const $ = (id) => document.getElementById(id);
    const panels = { lock: $("lock-panel"), list: $("list-panel"), kase: $("case-panel") };
    let key = null, params = null, listing = null;
    const blobUrls = new Set();
    let frame = null;

    function show(name) {
      Object.keys(panels).forEach((k) => { panels[k].hidden = k !== name; });
    }

    async function fetchBytes(path) {
      let res;
      try {
        res = await fetch(root + path);
      } catch (e) {
        throw new Error("This browser cannot read the protected files when the site is opened from a folder (file://). Open the published site, or serve the folder with a web server.");
      }
      if (!res.ok) throw new Error("Could not load " + path + " (" + res.status + ").");
      return new Uint8Array(await res.arrayBuffer());
    }

    async function loadParams() {
      return JSON.parse(new TextDecoder().decode(await fetchBytes("assets/protect.json")));
    }

    function lock() {
      key = null; listing = null;
      closeViewer();
      blobUrls.forEach((u) => URL.revokeObjectURL(u));
      blobUrls.clear();
      $("case-view").textContent = "";
      $("protected-cases").textContent = "";
      if (window.location.search) window.history.replaceState(null, "", window.location.pathname);
      show("lock");
      $("access-code").focus();
    }

    function cell(tr, text) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
      return td;
    }

    async function showList() {
      listing = JSON.parse(new TextDecoder().decode(await decryptBlob(key, await fetchBytes("assets/protected.json.enc"), LISTING_AAD)));
      const body = $("protected-cases");
      body.textContent = "";
      listing.cases.forEach((c) => {
        const tr = document.createElement("tr");
        const first = document.createElement("td");
        const a = document.createElement("a");
        a.href = "index.html";
        a.addEventListener("click", (event) => { event.preventDefault(); openCase(c); });
        a.textContent = c.vendor_name;
        first.appendChild(a);
        tr.appendChild(first);
        cell(tr, new Date(c.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
        cell(tr, String(c.subjects));
        cell(tr, String(c.source_count));
        cell(tr, String(c.adverse_count));
        cell(tr, c.manual_steps ? c.manual_outstanding + " outstanding" : "—");
        body.appendChild(tr);
      });
      show("list");
    }

    function closeViewer() {
      if (frame) { frame.remove(); frame = null; }
      $("viewer-panel").hidden = true;
    }

    function showFrame(html, title) {
      closeViewer();
      frame = document.createElement("iframe");
      frame.setAttribute("sandbox", "");  // no scripts, no same-origin: an opaque origin
      frame.setAttribute("referrerpolicy", "no-referrer");
      frame.title = title;
      frame.srcdoc = frameDocument(html);
      $("viewer-frame-host").appendChild(frame);
      $("viewer-title").textContent = title;
      $("viewer-panel").hidden = false;
      $("viewer-panel").scrollIntoView();
    }

    function openBlob(bytes, mime) {
      const url = URL.createObjectURL(new Blob([bytes], { type: mime }));
      blobUrls.add(url);
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
    }

    async function openFile(entry, href) {
      const rel = decodeURIComponent(href.replace(/^files\//, "").split("#")[0].split("?")[0]);
      const name = entry.files[rel];
      if (!name) return;
      const path = "protected/" + entry.token + "/" + name;
      const bytes = await decryptBlob(key, await fetchBytes(path), path);
      const plan = viewPlan(rel);
      if (plan.kind === "frame") showFrame(new TextDecoder().decode(bytes), rel);
      else openBlob(bytes, plan.mime);
    }

    async function openCase(entry) {
      show("kase");
      const status = $("case-status");
      status.textContent = "Decrypting...";
      status.hidden = false;
      try {
        const html = new TextDecoder().decode(await decryptBlob(key, await fetchBytes("protected/" + entry.token + "/" + entry.page), "protected/" + entry.token + "/" + entry.page));
        const layout = new DOMParser().parseFromString(html, "text/html").querySelector(".case-layout");
        const view = $("case-view");
        view.textContent = "";
        view.appendChild(document.importNode(layout, true));
        decorateStatusTables(view);
        wrapTables(view);
        view.querySelectorAll("a[href^='files/']").forEach((a) => {
          a.addEventListener("click", (event) => {
            event.preventDefault();
            openFile(entry, a.getAttribute("href")).catch((err) => {
              status.textContent = err.message;
              status.hidden = false;
            });
          });
        });
        status.hidden = true;
      } catch (err) {
        status.textContent = err.message;
      }
    }

    $("unlock-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = $("access-code");
      const error = $("unlock-error");
      const button = event.target.querySelector("button");
      error.hidden = true;
      button.disabled = true;
      button.textContent = "Checking...";
      try {
        params = await loadParams();
        const candidate = await deriveKey(input.value, params);
        if (!(await checkKey(candidate, params))) {
          error.textContent = "Wrong access code.";
          error.hidden = false;
          input.focus();
          input.select();
          return;
        }
        key = candidate;
        input.value = "";
        await showList();
      } catch (err) {
        error.textContent = err.message;
        error.hidden = false;
      } finally {
        button.disabled = false;
        button.textContent = "Unlock";
      }
    });
    $("lock-button").addEventListener("click", lock);
    $("lock-button-case").addEventListener("click", lock);

    $("back-link").addEventListener("click", (event) => { event.preventDefault(); closeViewer(); show("list"); });
    $("viewer-close").addEventListener("click", closeViewer);
    window.addEventListener("pagehide", () => { blobUrls.forEach((u) => URL.revokeObjectURL(u)); });
    show("lock");
    try {
      requireSubtle(typeof crypto === "undefined" ? null : crypto);
    } catch (err) {
      $("unlock-error").textContent = err.message;
      $("unlock-error").hidden = false;
      $("unlock-form").querySelector("button").disabled = true;
    }
  }

  window.VIC = {
    canonicalKey, pickCase, applicableSources, statusClass, splitStatus,
    deriveKey, decryptBlob, checkKey, b64decode, b64encode, mimeFor, viewPlan, frameDocument,
    requireSubtle, CHECK_AAD, NEEDS_HTTPS, FRAME_CSP,
  };
  document.addEventListener("DOMContentLoaded", () => {
    // The classic theme reuses the functions above but keeps the live tool's plain markup.
    if (document.body.dataset.theme === "classic") return;
    wireForm();
    decorateStatusTables(document);
    wrapTables(document);
    wireProtected();
  });
})();
