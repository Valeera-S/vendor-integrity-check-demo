# Vendor Integrity Check, demo site

A static copy of the Vendor Integrity Check web form, built by the Vanderbilt AI-CPS Lab for the NYC Department of Design and Construction's Responsibility Determination process.

Every case on the site is a recorded run of the research tool against public NYS, NYC and federal records on the date shown. Nothing is searched live here. This is a research prototype and not an official City of New York service.

Site: https://valeera-s.github.io/vendor-integrity-check-demo/

This repository holds only the generated files; it is rebuilt from the tool's source repository with `scripts/publish_site.ps1`.

## Protected cases

A few recorded cases contain personal information. They are not readable on the public site. At export time every file of such a case (page, report, run.json, evidence, screenshots) is encrypted with AES-256-GCM, with a key derived from an access code by PBKDF2-HMAC-SHA256 (600,000 iterations, random salt per export). The files in this repository are opaque `.enc` blobs with random names, and the public list of cases does not mention them. On the Past cases page, "Protected cases" asks for the code, decrypts in the browser, and shows the cases in the same layout. The code never leaves the browser; the derived key is non-extractable and lives in the page's memory only (never in session or local storage), so a refresh or a new tab asks for the code again. The Lock button drops it. Each encrypted file is also bound to its own path in the repository (AES-GCM additional data), so swapping two files makes them undecryptable. Saved evidence pages (HTML) are shown in a sandboxed frame with scripts disabled; PNG, PDF, JSON and Markdown open as inert blob URLs. The page needs HTTPS or localhost for the browser's crypto to be available.

The protection rests entirely on the strength of the access code. Anyone holding the repository can try codes offline, so the code is a random 5-word passphrase (about 56 bits, `python -m vic.site.passphrase`), and must be shared out of band (in person, by phone or a password manager), never through this site or its repository. Changing the code means exporting again. The protected pages need a web server or GitHub Pages: a browser cannot fetch the encrypted files when the site is opened from a folder (file://).

Known limits. Metadata is not hidden: anyone with the repository can see that protected cases exist, how many there are, and the approximate size of each file. The file names are random, but the folder layout reveals the number of files per case. Publishing uses `scripts/publish_site.ps1`, which runs `python -m vic.site.check` with every `-Protect` id (and any strings listed, one per line, in the file named by `VIC_SITE_FORBID`) before `git add`, and refuses to publish if one appears in a path or file in the clear.
