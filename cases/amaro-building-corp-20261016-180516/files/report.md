# Vendor Integrity Check Report

**Subject:** Amaro Building Corp
**Address:** NY
**Variants searched:** AMARO BUILDING
**Run:** 2026-10-16T18:06:01.342376+00:00  ·  vic 0.1.0

Decision support only. All findings must be verified by staff; the responsibility determination is made by the ACCO.

## Subjects
| ID | Role | Name | Kind | Discovered Via | Trades |
| --- | --- | --- | --- | --- | --- |
| vendor | vendor | Amaro Building Corp | company |  |  |
| affiliate-1 | affiliate | KIRPA PROPERTIES LLC | company | same DOS process agent: GURPREET KAUR |  |

## Subject: Amaro Building Corp (vendor)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 2.3 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.3 |
| NYS Department of State UCC and federal tax lien search | ok | 4.8 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 2.5 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 1.1 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 1.1 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 3.4 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 20.7 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (AMARO BUILDING: HTTP 405); OSHA must be checked manually | 0.9 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.8 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.0 |
| Affiliate discovery (NYS DOS) | ok | 0.3 |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | ok | 0.0 |

### Summary
| Source | Result | Coverage |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | 1 records, 0 adverse, 0 open | All NYS DOS entities, active and inactive; details from Open Data monthly extract |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | No records | DOS electronic warrant notices since 2004-01-08; Open Data warrants filed on or after 2025-07-01 |
| NYS Department of State UCC and federal tax lien search | No records | NYS DOS UCC database, federal tax liens only; current through the date shown on the site |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | 1 records, 0 adverse, 0 open | NYS DOL 5-year prevailing wage debarments, WCB 1-year debarments, EO-192 non-responsible list, DOL contractor registry |
| NYC School Construction Authority disqualified, ineligible and suspended firms | 1 records, 1 adverse, 0 open | SCA Disqualified Firms list on NYC Open Data (krwf-eng6): Disqualified, Ineligible and Suspended vendors; empty 'to' date means indefinite |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | No records | ACRIS personal property documents recorded in the five boroughs, updated through good_through_date. |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 5 records, 5 adverse, 0 open | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (AMARO BUILDING: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| Affiliate discovery (NYS DOS) | No records |  |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC School Construction Authority disqualified, ineligible and suspended firms (nyc_sca)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-10-03 | Amaro Building Corp\|2025-10-03 | Amaro Building Corp | Disqualified |  | SCA Disqualified 2025-10-03 to 2030-10-03: Amaro Building Corp | [nyc_sca-001](evidence/nyc_sca/001_sca_vendor_name_like_any_1_variants.json) |

#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2023-04-28 | 0703241532 | AMARO BUILDING CORP | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0703241532, 2023-04-28, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2023-04-28 | 0703241550 | AMARO BUILDING CORP | PAID IN FULL | $2,250.00 | DEPT OF TRANSPORTATION summons 0703241550, 2023-04-28, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $2,250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2023-04-28 | 0703241560 | AMARO BUILDING CORP | PAID IN FULL | $2,250.00 | DEPT OF TRANSPORTATION summons 0703241560, 2023-04-28, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $2,250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2023-03-08 | 0703193307 | AMARO BUILDING CORP | PAID IN FULL | $250.00 | DEPT OF TRANSPORTATION summons 0703193307, 2023-03-08, CONSTR MATL EQUIP W O PROPER MARKING CAPABLE TO PRODUCE A WARNING GLOW, penalty $250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2023-02-21 | 0703180400 | AMARO BUILDING CORP | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0703180400, 2023-02-21, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2018-11-29 | 5450891 | AMARO BUILDING CORP | Active |  | DOMESTIC BUSINESS CORPORATION, Nassau County, filed 2018-11-29, Active; process agent GURPREET KAUR, 28 POWER ST, HICKSVILLE NY | [nys_dos-001](evidence/nys_dos/001_inquiry_amaro_building.json), [nys_dos-002](evidence/nys_dos/002_open_data_5450891.json), [nys_dos-003](evidence/nys_dos/003_status_history_5450891.json), [nys_dos-004](evidence/nys_dos/004_prior_names_5450891.json) |

#### NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry (nys_dol_debarment)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-04-23 | 25-65QHP-CR | Amaro Building Corp | Active, expires 2027-04-23 |  | DOL contractor registry certificate 25-65QHP-CR, Amaro Building Corp, Active, expires 2027-04-23; debarred No, outstanding wage assessments No, labor/tax law violation No, safety standard violation No | [nys_dol_debarment-004](evidence/nys_dol_debarment/004_dol_contractor_registry.json) |

## Subject: KIRPA PROPERTIES LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.9 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.1 |
| NYS Department of State UCC and federal tax lien search | ok | 4.0 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 1.4 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 15.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.1 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 8.6 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.4 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (KIRPA PROPERTIES: HTTP 405); OSHA must be checked manually | 0.8 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 0.1 |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | ok | 0.0 |

### Summary
| Source | Result | Coverage |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | 1 records, 0 adverse, 0 open | All NYS DOS entities, active and inactive; details from Open Data monthly extract |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | No records | DOS electronic warrant notices since 2004-01-08; Open Data warrants filed on or after 2025-07-01 |
| NYS Department of State UCC and federal tax lien search | No records | NYS DOS UCC database, federal tax liens only; current through the date shown on the site |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | No records | NYS DOL 5-year prevailing wage debarments, WCB 1-year debarments, EO-192 non-responsible list, DOL contractor registry |
| NYC School Construction Authority disqualified, ineligible and suspended firms | No records | SCA Disqualified Firms list on NYC Open Data (krwf-eng6): Disqualified, Ineligible and Suspended vendors; empty 'to' date means indefinite |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | No records | ACRIS personal property documents recorded in the five boroughs, updated through good_through_date. |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | No records | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (KIRPA PROPERTIES: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
_No findings at or above the include threshold._

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2025-11-07 | 7753782 | KIRPA PROPERTIES LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Nassau County, filed 2025-11-07, Active; process agent GURPREET KAUR, 31 KUHL AVE, HICKSVILLE NY | [nys_dos-005](evidence/nys_dos/005_inquiry_kirpa_properties.json), [nys_dos-006](evidence/nys_dos/006_open_data_7753782.json), [nys_dos-007](evidence/nys_dos/007_status_history_7753782.json), [nys_dos-008](evidence/nys_dos/008_prior_names_7753782.json) |

## Possible Affiliates
| Name | DOS ID | Reasons | Confidence | Ran As |
| --- | --- | --- | --- | --- |
| 77-19 252ND STREET LLC | 7804826 | same DOS process agent: GURPREET KAUR | weak | not run |
| ARTISTIC EYEPIECES LLC | 5801350 | same DOS process agent: GURPREET KAUR | weak | not run |
| DURABUILD CONSTRUCTION CORP. | 6378439 | same DOS process agent: GURPREET KAUR | weak | not run |
| EARTH DEVELOPMENT OF NY, INC. | 3900474 | same DOS process agent: GURPREET KAUR | weak | not run |
| FOUNTAIN FOX LLC | 6667354 | same DOS process agent: GURPREET KAUR | weak | not run |
| GKM CONSTRUCTION CORP | 4646612 | same DOS process agent: GURPREET KAUR | weak | not run |
| GURPREET KAUR LLC | 6616478 | same DOS process agent: GURPREET KAUR | weak | not run |
| KAUR NYC LLC | 6823681 | same DOS process agent: GURPREET KAUR | weak | not run |
| KIRPA PROPERTIES LLC | 7753782 | same DOS process agent: GURPREET KAUR | strong | affiliate-1 |
| NITU SINGH, INC. | 7414048 | same DOS process agent: GURPREET KAUR | weak | not run |
| PRIYA 410 INC. | 7857329 | same DOS process agent: GURPREET KAUR | weak | not run |
| PRIYA 61 INC. | 7858447 | same DOS process agent: GURPREET KAUR | weak | not run |
| PRIYA 721 INC. | 6387377 | same DOS process agent: GURPREET KAUR | weak | not run |
| RIGHT PRICE LIQUOR AND WINES, LLC | 5871080 | same DOS process agent: GURPREET KAUR | weak | not run |
| SGP 219 LLC | 6489711 | same DOS process agent: GURPREET KAUR | weak | not run |
| SIPANDSMOKE LLC | 8004965 | same DOS process agent: GURPREET KAUR | weak | not run |

## Companies Linked to Principals
_None found._

## Qualifications
_No trades entered; no qualification searches ran._

## Manual Steps Required
| Title | Subject | Instructions | Completed | Evidence |
| --- | --- | --- | --- | --- |
| NYS Courts County Filing / JDLS search (New York County) | Amaro Building Corp | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "Amaro Building Corp" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | KIRPA PROPERTIES LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "KIRPA PROPERTIES LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| News search | Amaro Building Corp | Search Google, Google News, The New York Times, The Daily News, The New York Post, and Crain's New York Business for adverse news about Amaro Building Corp, KIRPA PROPERTIES LLC. Also run a Google Advanced Search restricted to site:.gov. Save any relevant results and attach them here. | No |  |
| Lexis Accurint | Amaro Building Corp | Run a Lexis Nexis Accurint Comprehensive Business Report on Amaro Building Corp. Run a Comprehensive People Report on each principal using the home address recorded in PASSPort. Attach the reports here. | No |  |

## PASSPort Sources Table
| Information | Determination | Source |
| --- | --- | --- |
| Amaro Building Corp appears on the NYC SCA disqualified/ineligible/suspended list (1 listing(s)). | The contractor should be asked to explain the listing above; award may be precluded while an exclusion is active. [ACCO determination to be entered by staff.] | SCA |
| Outstanding ECB violations were found for Amaro Building Corp in 2023 (5 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| DDC performed searches on October 16, 2026 on Amaro Building Corp, and affiliate(s) KIRPA PROPERTIES LLC in the following databases: NYS DOS, NYS DTF Tax Warrants, NYS DOS UCC / Federal Tax Lien, NYS DOL / WCB Debarment, ACRIS, DOB, SAM, BIC Trade Waste Denied Companies, Affiliate discovery (NYS DOS). No adverse information was found. The following searches could not be completed and must be performed manually: OSHA. The following searches must be performed manually: NYS Courts County Filing / JDLS search (New York County), News search, Lexis Accurint. | N/A | Other Sources |

## Evidence Index
| Source | Description | Path | Captured At |
| --- | --- | --- | --- |
| nys_dos | inquiry AMARO BUILDING | evidence/nys_dos/001_inquiry_amaro_building.json | 2026-10-16T18:05:19.349063+00:00 |
| nys_dos | open data 5450891 | evidence/nys_dos/002_open_data_5450891.json | 2026-10-16T18:05:20.321864+00:00 |
| nys_dos | status history 5450891 | evidence/nys_dos/003_status_history_5450891.json | 2026-10-16T18:05:20.444510+00:00 |
| nys_dos | prior names 5450891 | evidence/nys_dos/004_prior_names_5450891.json | 2026-10-16T18:05:20.551446+00:00 |
| nys_dos | inquiry KIRPA PROPERTIES | evidence/nys_dos/005_inquiry_kirpa_properties.json | 2026-10-16T18:05:42.398531+00:00 |
| nys_dos | open data 7753782 | evidence/nys_dos/006_open_data_7753782.json | 2026-10-16T18:05:42.527449+00:00 |
| nys_dos | status history 7753782 | evidence/nys_dos/007_status_history_7753782.json | 2026-10-16T18:05:42.837683+00:00 |
| nys_dos | prior names 7753782 | evidence/nys_dos/008_prior_names_7753782.json | 2026-10-16T18:05:43.163117+00:00 |
| nys_tax_warrant | taxpayer names for 'AMARO BUILDING' (none) | evidence/nys_tax_warrant/001_taxpayer_names_for_amaro_building_none.html | 2026-10-16T18:05:20.718435+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/002_open_data_warrants_none.json | 2026-10-16T18:05:20.856632+00:00 |
| nys_tax_warrant | taxpayer names for 'KIRPA PROPERTIES' (none) | evidence/nys_tax_warrant/003_taxpayer_names_for_kirpa_properties_none.html | 2026-10-16T18:05:44.183691+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/004_open_data_warrants_none.json | 2026-10-16T18:05:44.307947+00:00 |
| nys_ucc | UCC federal tax lien search: AMARO BUILDING | evidence/nys_ucc/001_ucc_federal_tax_lien_search_amaro_buildi.png | 2026-10-16T18:05:41.595831+00:00 |
| nys_ucc | UCC federal tax lien search: AMARO BUILDING | evidence/nys_ucc/002_ucc_federal_tax_lien_search_amaro_buildi.html | 2026-10-16T18:05:41.597036+00:00 |
| nys_ucc | UCC federal tax lien search: KIRPA PROPERTIES | evidence/nys_ucc/003_ucc_federal_tax_lien_search_kirpa_proper.png | 2026-10-16T18:06:01.229371+00:00 |
| nys_ucc | UCC federal tax lien search: KIRPA PROPERTIES | evidence/nys_ucc/004_ucc_federal_tax_lien_search_kirpa_proper.html | 2026-10-16T18:06:01.230492+00:00 |
| nys_dol_debarment | dolSearch AMARO BUILDING | evidence/nys_dol_debarment/001_dolsearch_amaro_building.html | 2026-10-16T18:05:18.316282+00:00 |
| nys_dol_debarment | wcbSearch AMARO BUILDING | evidence/nys_dol_debarment/002_wcbsearch_amaro_building.html | 2026-10-16T18:05:18.480216+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/003_eo192_non_responsible_contractors.json | 2026-10-16T18:05:19.537297+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/004_dol_contractor_registry.json | 2026-10-16T18:05:19.736713+00:00 |
| nys_dol_debarment | dolSearch KIRPA PROPERTIES | evidence/nys_dol_debarment/005_dolsearch_kirpa_properties.html | 2026-10-16T18:05:42.975743+00:00 |
| nys_dol_debarment | wcbSearch KIRPA PROPERTIES | evidence/nys_dol_debarment/006_wcbsearch_kirpa_properties.html | 2026-10-16T18:05:43.030719+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/007_eo192_non_responsible_contractors.json | 2026-10-16T18:05:43.143663+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/008_dol_contractor_registry.json | 2026-10-16T18:05:43.413096+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/001_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:05:18.241060+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/002_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:05:48.753420+00:00 |
| nyc_sca | SCA vendor_name contains safety net (KIRPA) | evidence/nyc_sca/003_sca_vendor_name_contains_safety_net_kirp.json | 2026-10-16T18:05:57.190367+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/001_acris_personal_property_parties_search.json | 2026-10-16T18:05:17.274901+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/002_acris_personal_property_parties_search.json | 2026-10-16T18:05:42.018959+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:05:19.371623+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/002_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:05:19.523596+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/003_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:05:42.063710+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/004_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:05:50.491964+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/001_dob_disciplinary_no_results.json | 2026-10-16T18:05:17.288635+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'AMARO', no results | evidence/nyc_dob_disciplinary/002_dob_disciplinary_contains_fallback_on_am.json | 2026-10-16T18:05:36.825773+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/003_dob_disciplinary_no_results.json | 2026-10-16T18:05:42.118944+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'KIRPA', no results | evidence/nyc_dob_disciplinary/004_dob_disciplinary_contains_fallback_on_ki.json | 2026-10-16T18:05:42.274523+00:00 |
| sam | frontend search 'AMARO BUILDING' page 0 | evidence/sam/001_frontend_search_amaro_building_page_0.json | 2026-10-16T18:05:21.379970+00:00 |
| sam | frontend search 'KIRPA PROPERTIES' page 0 | evidence/sam/002_frontend_search_kirpa_properties_page_0.json | 2026-10-16T18:05:44.334248+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/001_get_denied_companies_page_status_200.html | 2026-10-16T18:05:17.056335+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/002_get_denied_companies_page_status_200.html | 2026-10-16T18:05:41.931278+00:00 |
| affiliates | same process agent: GURPREET KAUR | evidence/affiliates/001_same_process_agent_gurpreet_kaur.json | 2026-10-16T18:05:41.748488+00:00 |
| affiliates | same process address: 28 POWER ST | evidence/affiliates/002_same_process_address_28_power_st.json | 2026-10-16T18:05:41.880860+00:00 |
