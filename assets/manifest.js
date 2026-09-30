window.VIC_MANIFEST = {
  "generated_at": "2026-09-30T22:05:27.040275+00:00",
  "demo_case": "p-t-ii-contracting-corp-20260923-161405",
  "cases": [
    {
      "case_id": "p-t-ii-contracting-corp-20260923-161405",
      "vendor_name": "P & T II Contracting Corp.",
      "vendor_key": "P&T2 CONTRACTING",
      "created_at": "2026-09-23T16:16:15.499676+00:00"
    },
    {
      "case_id": "amaro-building-corp-20260907-153507",
      "vendor_name": "Amaro Building Corp",
      "vendor_key": "AMARO BUILDING",
      "created_at": "2026-09-07T15:37:20.555798+00:00"
    },
    {
      "case_id": "tully-construction-co-inc-20260903-055519",
      "vendor_name": "Tully Construction Co., Inc.",
      "vendor_key": "TULLY CONSTRUCTION",
      "created_at": "2026-09-03T05:55:25.500033+00:00"
    },
    {
      "case_id": "skanska-usa-civil-northeast-inc-20260903-054333",
      "vendor_name": "Skanska USA Civil Northeast Inc.",
      "vendor_key": "SKANSKA USA CIVIL NORTHEAST",
      "created_at": "2026-09-03T05:43:52.825686+00:00"
    }
  ],
  "sources": [
    {
      "id": "nys_dol_debarment",
      "name": "NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry",
      "url": "https://apps.labor.ny.gov/EDList/searchPage.do",
      "kind": "http",
      "coverage": "NYS DOL 5-year prevailing wage debarments, WCB 1-year debarments, EO-192 non-responsible list, DOL contractor registry",
      "group": "New York State",
      "supports": [
        "company"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nys_ucc",
      "name": "NYS Department of State UCC and federal tax lien search",
      "url": "https://ucc-efiling.dos.ny.gov/",
      "kind": "browser",
      "coverage": "NYS DOS UCC database, federal tax liens only; current through the date shown on the site",
      "group": "New York State",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nys_dos",
      "name": "NYS Department of State, Division of Corporations",
      "url": "https://apps.dos.ny.gov/publicInquiry/",
      "kind": "api",
      "coverage": "All NYS DOS entities, active and inactive; details from Open Data monthly extract",
      "group": "New York State",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nys_tax_warrant",
      "name": "NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data)",
      "url": "https://appext20.dos.ny.gov/stwarrants_public/st_search",
      "kind": "http",
      "coverage": "DOS electronic warrant notices since 2004-01-08; Open Data warrants filed on or after 2025-07-01",
      "group": "New York State",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nys_courts",
      "name": "NYS Unified Court System, County Clerk filing and JDLS search (New York County)",
      "url": "https://iapps.courts.state.ny.us/webccos/newyorkcc/countyFilingSearch",
      "kind": "manual",
      "coverage": "New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party",
      "group": "New York State",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "bic_denied",
      "name": "NYC Business Integrity Commission trade waste denied companies",
      "url": "https://www.nyc.gov/site/bic/industries/trade-waste-denied-companies.page",
      "kind": "http",
      "coverage": "BIC list of companies denied a trade waste licence or registration",
      "group": "New York City",
      "supports": [
        "company"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nyc_dob_disciplinary",
      "name": "NYC Department of Buildings disciplinary actions and voluntary surrenders",
      "url": "https://www.nyc.gov/site/buildings/industry/disciplinary-actions-surrenders.page",
      "kind": "api",
      "coverage": "DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list",
      "group": "New York City",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nyc_acris",
      "name": "NYC Department of Finance ACRIS personal property (UCC and federal liens)",
      "url": "https://a836-acris.nyc.gov/DS/DocumentSearch/PartyName",
      "kind": "api",
      "coverage": "ACRIS personal property documents recorded in the five boroughs, updated through good_through_date.",
      "group": "New York City",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nyc_oath_ecb",
      "name": "NYC OATH hearings (ECB) and DOB-issued ECB violations",
      "url": "https://a836-citypay.nyc.gov/citypay/ecb#!/name-address-form",
      "kind": "api",
      "coverage": "OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses",
      "group": "New York City",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nyc_sca",
      "name": "NYC School Construction Authority disqualified, ineligible and suspended firms",
      "url": "https://dobusiness.nycsca.org/Supplier/SearchDSISupplier.aspx?type=base&linkType=Contract",
      "kind": "api",
      "coverage": "SCA Disqualified Firms list on NYC Open Data (krwf-eng6): Disqualified, Ineligible and Suspended vendors; empty 'to' date means indefinite",
      "group": "New York City",
      "supports": [
        "company"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "sam",
      "name": "SAM.gov exclusions (federal debarment and suspension)",
      "url": "https://sam.gov/search/?index=ex",
      "kind": "api",
      "coverage": "SAM.gov active exclusions, all classifications (firm, individual, special entity)",
      "group": "Federal",
      "supports": [
        "company",
        "person"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "osha",
      "name": "US Department of Labor OSHA establishment inspections",
      "url": "https://www.osha.gov/ords/imis/establishment.html",
      "kind": "http",
      "coverage": "OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years)",
      "group": "Federal",
      "supports": [
        "company"
      ],
      "credential": false,
      "trades": []
    },
    {
      "id": "nyc_dob_bis",
      "name": "NYC Department of Buildings BIS skilled trades licence search",
      "url": "https://a810-bisweb.nyc.gov/bisweb/LicenseTypeServlet?vlfirst=N",
      "kind": "browser",
      "coverage": "NYC DOB BIS skilled-trade licensee/contractor roster; current as shown live on the site",
      "group": "Trade licences",
      "supports": [
        "company",
        "person"
      ],
      "credential": true,
      "trades": [
        "electrical",
        "elevator",
        "fire_suppression",
        "general_contractor",
        "hoisting",
        "plumbing",
        "rigging",
        "site_safety"
      ]
    },
    {
      "id": "fdny_tank_installers",
      "name": "NYC Fire Department approved companies, underground tank installers",
      "url": "https://www.nyc.gov/assets/fdny/downloads/pdf/business/approved-companies-motor-fueled-installer.pdf",
      "kind": "http",
      "coverage": "FDNY approved underground tank installer list (PDF, republished weekly)",
      "group": "Trade licences",
      "supports": [
        "company"
      ],
      "credential": true,
      "trades": [
        "tank_installer"
      ]
    },
    {
      "id": "nys_asbestos",
      "name": "NYS Department of Labor Asbestos Control Bureau, active asbestos contractors",
      "url": "https://biservices.labor.ny.gov/Reports/bi/?perspective=classicviewer&pathRef=.public_folders%2FWPS%20Reports%2FActive%20Asbestos%20Contractors&id=iEB741D9038A149129DCA85571AE53C50&ui_appbar=false&ui_navbar=false",
      "kind": "browser",
      "coverage": "NYS DOL report of active asbestos contractor licences",
      "group": "Trade licences",
      "supports": [
        "company"
      ],
      "credential": true,
      "trades": [
        "asbestos"
      ]
    },
    {
      "id": "nys_dos_licensing",
      "name": "NYS Department of State, Division of Licensing Services (security guard companies)",
      "url": "https://appext20.dos.ny.gov/lcns_public/chk_load",
      "kind": "http",
      "coverage": "NYS DOS licence status for security guard companies, with guard roster",
      "group": "Trade licences",
      "supports": [
        "company"
      ],
      "credential": true,
      "trades": [
        "security_guard"
      ]
    },
    {
      "id": "nysed_professions",
      "name": "NYS Education Department, Office of the Professions licence verification",
      "url": "https://eservices.nysed.gov/professions/verification-search",
      "kind": "api",
      "coverage": "NYSED Office of the Professions registration records for architecture, engineering, land surveying, landscape architecture, and geology business entities and individual licensees, as returned live by the site's search API",
      "group": "Trade licences",
      "supports": [
        "company",
        "person"
      ],
      "credential": true,
      "trades": [
        "architecture",
        "engineering",
        "geology",
        "land_surveying",
        "landscape_architecture"
      ]
    }
  ],
  "normalize": {
    "entity_suffixes": [
      "CO",
      "COMPANY",
      "CORP",
      "CORPORATION",
      "INC",
      "INCORPORATED",
      "LIMITED",
      "LLC",
      "LLP",
      "LP",
      "LTD",
      "PC",
      "PLLC"
    ],
    "roman_to_arabic": {
      "I": "1",
      "II": "2",
      "III": "3",
      "IV": "4",
      "V": "5",
      "VI": "6",
      "VII": "7",
      "VIII": "8",
      "IX": "9",
      "X": "10"
    }
  }
};
