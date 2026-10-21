# Vendor Integrity Check Report

**Subject:** Skanska USA Civil Northeast Inc.
**Address:** NY
**Variants searched:** SKANSKA USA CIVIL NORTHEAST
**Run:** 2026-10-16T18:07:31.921668+00:00  ·  vic 0.1.0

Decision support only. All findings must be verified by staff; the responsibility determination is made by the ACCO.

## Subjects
| ID | Role | Name | Kind | Discovered Via | Trades |
| --- | --- | --- | --- | --- | --- |
| vendor | vendor | Skanska USA Civil Northeast Inc. | company |  |  |

## Subject: Skanska USA Civil Northeast Inc. (vendor)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 2.2 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.2 |
| NYS Department of State UCC and federal tax lien search | ok | 5.2 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 2.1 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 1.1 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 1.1 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 39.3 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 23.1 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (SKANSKA USA CIVIL NORTHEAST: HTTP 405); OSHA must be checked manually | 0.8 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.8 |
| NYC Business Integrity Commission trade waste denied companies | ok | 0.9 |
| Affiliate discovery (NYS DOS) | ok | 0.2 |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | ok | 0.0 |

### Summary
| Source | Result | Coverage |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | 1 records, 0 adverse, 0 open | All NYS DOS entities, active and inactive; details from Open Data monthly extract |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | No records | DOS electronic warrant notices since 2004-01-08; Open Data warrants filed on or after 2025-07-01 |
| NYS Department of State UCC and federal tax lien search | No records | NYS DOS UCC database, federal tax liens only; current through the date shown on the site |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | 1 records, 0 adverse, 0 open | NYS DOL 5-year prevailing wage debarments, WCB 1-year debarments, EO-192 non-responsible list, DOL contractor registry |
| NYC School Construction Authority disqualified, ineligible and suspended firms | No records | SCA Disqualified Firms list on NYC Open Data (krwf-eng6): Disqualified, Ineligible and Suspended vendors; empty 'to' date means indefinite |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | No records | ACRIS personal property documents recorded in the five boroughs, updated through good_through_date. |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 385 records, 370 adverse, 1 open (2 awaiting hearing, not counted, 13 to review) | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (SKANSKA USA CIVIL NORTHEAST: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| Affiliate discovery (NYS DOS) | No records |  |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-07-12 | 0704261690 | SKANSKA USA CIVIL NORTHEAST IN |  |  | DEPT OF TRANSPORTATION summons 0704261690, 2026-07-12, FAILED TO COMPLY W HIGHWAY RULES STANDARD SPECS. DETAIL DRAWINGS LAWS, penalty not yet assessed, no hearing status recorded | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-08-27 | 0704313895 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0704313895, 2026-08-27, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-08-21 | 0704308780 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,500.00 | DEPT OF TRANSPORTATION summons 0704308780, 2026-08-21, USE OPENING OF STREET W O PERMIT, penalty $1,500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-08-21 | 0704308761 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,000.00 | DEPT OF TRANSPORTATION summons 0704308761, 2026-08-21, FAILURE TO USE SKID RESISTANCE PLATING OR DECKING ENTIRETY ON ROADWAY, penalty $1,000.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-08-21 | 0704308752 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,200.00 | DEPT OF TRANSPORTATION summons 0704308752, 2026-08-21, FAILURE TO PROPERLY FASTEN PLATING AND DECKING, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-07-03 | 0704255164 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $500.00 | agency not stated summons 0704255164, 2026-07-03, charge not stated, penalty $500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-06-27 | 0704246979 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $250.00 | DEPT OF TRANSPORTATION summons 0704246979, 2026-06-27, FAILURE TO PROPERLY SEAL AND MAINTAIN THE WEARING COURSE, penalty $250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-05-31 | 0704221156 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $500.00 | DEPT OF TRANSPORTATION summons 0704221156, 2026-05-31, FAIL TO OBTAIN PROPER PERMIT TO REPAIR CONDITION REPORTED ON CAR, penalty $500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-05-24 | 0704212850 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $500.00 | DEPT OF TRANSPORTATION summons 0704212850, 2026-05-24, FAIL TO OBTAIN PROPER PERMIT TO REPAIR CONDITION REPORTED ON CAR, penalty $500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-05-20 | 0704209330 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,200.00 | DEPT OF TRANSPORTATION summons 0704209330, 2026-05-20, FAILURE TO PROPERLY FASTEN PLATING AND DECKING, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-05-17 | 0704209276 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $250.00 | DEPT OF TRANSPORTATION summons 0704209276, 2026-05-17, FAILURE TO PROPERLY SEAL AND MAINTAIN THE WEARING COURSE, penalty $250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-04-18 | 0704175991 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $500.00 | DEPT OF TRANSPORTATION summons 0704175991, 2026-04-18, FAIL TO OBTAIN PROPER PERMIT TO REPAIR CONDITION REPORTED ON CAR, penalty $500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-04-10 | 0704164634 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $250.00 | DEPT OF TRANSPORTATION summons 0704164634, 2026-04-10, FAILURE TO PROPERLY SEAL AND MAINTAIN THE WEARING COURSE, penalty $250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-04-04 | 0704159868 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $250.00 | DEPT OF TRANSPORTATION summons 0704159868, 2026-04-04, FAILURE TO PROPERLY SEAL AND MAINTAIN THE WEARING COURSE, penalty $250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-02-22 | 0704126868 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0704126868, 2026-02-22, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-02-13 | 0704123310 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,500.00 | DEPT OF TRANSPORTATION summons 0704123310, 2026-02-13, USE OPENING OF STREET W O PERMIT, penalty $1,500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-01-22 | 0704107920 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0704107920, 2026-01-22, BINDER BASE OR TEMPORARY RESTORATION NOT FLUSH WITH SURROUNDING AREA, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-12-31 | 0704096746 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,200.00 | DEPT OF TRANSPORTATION summons 0704096746, 2025-12-31, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-12-16 | 0704084298 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0704084298, 2025-12-16, FAIL TO HAVE NECESSARY ID MARKINGS ON DOT REQUIRED SIGNS, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-12-16 | 0704084289 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $750.00 | DEPT OF TRANSPORTATION summons 0704084289, 2025-12-16, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-12-16 | 0704084307 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,200.00 | DEPT OF TRANSPORTATION summons 0704084307, 2025-12-16, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-11-07 | 0704050427 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,000.00 | DEPT OF TRANSPORTATION summons 0704050427, 2025-11-07, FAILURE TO USE SKID RESISTANCE PLATING OR DECKING ENTIRETY ON ROADWAY, penalty $1,000.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-11-05 | 0704048272 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $250.00 | DEPT OF TRANSPORTATION summons 0704048272, 2025-11-05, CONSTR MATL EQUIP W O PROPER MARKING CAPABLE TO PRODUCE A WARNING GLOW, penalty $250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-11-02 | 0221053040 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $750.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0221053040, 2025-11-02, OBSTRUCTION OF STREET W CONSTRUCTION MATERIALS EQUIPMENT W O PERMIT, penalty $750.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-10-27 | 0704044550 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,200.00 | DEPT OF TRANSPORTATION summons 0704044550, 2025-10-27, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2025-10-22 | 0704038336 | SKANSKA USA CIVIL NORTHEAST IN | PAID IN FULL | $1,500.00 | DEPT OF TRANSPORTATION summons 0704038336, 2025-10-22, FAILURE TO RESTORE IN KIND ALL ROADWAY PAVEMENT MARKINGS, penalty $1,500.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |

_291 more row(s) not shown; every record is in run.json and the evidence files._

##### Awaiting hearing (not counted against the vendor)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-10-04 | 0704356209 | SKANSKA USA CIVIL NORTHEAST IN | NEW ISSUANCE | $1,500.00 | DEPT OF TRANSPORTATION summons 0704356209, 2026-10-04, USE OPENING OF STREET W O PERMIT, penalty $1,500.00, NEW ISSUANCE | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2026-10-01 | 0704347793 | SKANSKA USA CIVIL NORTHEAST IN | NEW ISSUANCE | $750.00 | DEPT OF TRANSPORTATION summons 0704347793, 2026-10-01, FAIL TO HAVE NECESSARY ID MARKINGS ON DOT REQUIRED SIGNS, penalty $750.00, NEW ISSUANCE | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

_53 older records (2007 to 2016) not shown under the ten-year rule; see run.json_

### Needs Review
| Source | Date | Record ID | Matched Name | Score | Reasons |
| --- | --- | --- | --- | --- | --- |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-02-12 | 000928607M | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-01-17 | 000928995N | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2024-10-03 | 000928886Y | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2023-06-08 | 0217145767 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2018-02-26 | 0202910703 | SKANSKA USA CIVIL NORTHEAST NY | 0.60 | record name extends the subject: 'NY' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2011-10-24 | 0180015624 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2011-01-20 | 0179348768 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2011-01-11 | 0179085226 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2011-01-09 | 0179085372 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2011-01-06 | 0179085345 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2011-01-03 | 0179085033 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2010-04-07 | 0177244798 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2009-12-09 | 0176496990 | SKANSKA USA CIVIL NORTHEAST I | 0.70 | equal except an ordinal present in only one name |

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1958-01-06 | 169574 | SKANSKA USA CIVIL NORTHEAST INC. | Active |  | DOMESTIC BUSINESS CORPORATION, Queens County, filed 1958-01-06, Active; process agent SKANSKA USA CIVIL NORTHEAST INC., 75-20 Astoria Blvd, East Elmhurst NJ | [nys_dos-001](evidence/nys_dos/001_inquiry_skanska_usa_civil_northeast.json), [nys_dos-002](evidence/nys_dos/002_open_data_169574.json), [nys_dos-003](evidence/nys_dos/003_status_history_169574.json), [nys_dos-004](evidence/nys_dos/004_prior_names_169574.json) |

#### NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry (nys_dol_debarment)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-10 | 26-64RQS-CR | SKANSKA USA CIVIL NORTHEAST INC. | Active, expires 2028-12-29 |  | DOL contractor registry certificate 26-64RQS-CR, SKANSKA USA CIVIL NORTHEAST INC., Active, expires 2028-12-29; debarred No, outstanding wage assessments No, labor/tax law violation No, safety standard violation No | [nys_dol_debarment-004](evidence/nys_dol_debarment/004_dol_contractor_registry.json) |

## Possible Affiliates
| Name | DOS ID | Reasons | Confidence | Ran As |
| --- | --- | --- | --- | --- |
| BYMERCADONYC LLC | 8010834 | same process address: 75-20 Astoria Blvd, 11370 | weak | not run |
| PARK FOR U JFK INC. | 7557601 | same process address: 75-20 Astoria Blvd, 11370 | weak | not run |
| SWEET HOME FUNDING SOLUTIONS, INC. | 3299600 | same process address: 75-20 Astoria Blvd, 11370 | weak | not run |

## Companies Linked to Principals
_None found._

## Qualifications
_No trades entered; no qualification searches ran._

## Manual Steps Required
| Title | Subject | Instructions | Completed | Evidence |
| --- | --- | --- | --- | --- |
| NYS Courts County Filing / JDLS search (New York County) | Skanska USA Civil Northeast Inc. | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "Skanska USA Civil Northeast Inc." as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| News search | Skanska USA Civil Northeast Inc. | Search Google, Google News, The New York Times, The Daily News, The New York Post, and Crain's New York Business for adverse news about Skanska USA Civil Northeast Inc.. Also run a Google Advanced Search restricted to site:.gov. Save any relevant results and attach them here. | No |  |
| Lexis Accurint | Skanska USA Civil Northeast Inc. | Run a Lexis Nexis Accurint Comprehensive Business Report on Skanska USA Civil Northeast Inc.. Run a Comprehensive People Report on each principal using the home address recorded in PASSPort. Attach the reports here. | No |  |

## PASSPort Sources Table
| Information | Determination | Source |
| --- | --- | --- |
| Outstanding ECB violations were found for Skanska USA Civil Northeast Inc. between 2016 – 2026 (317 summonses; 1 open; balance due $0.00); 2 more awaiting a hearing (not counted). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| DDC performed searches on October 16, 2026 in the following databases: NYS DOS, NYS DTF Tax Warrants, NYS DOS UCC / Federal Tax Lien, NYS DOL / WCB Debarment, SCA, ACRIS, DOB, SAM, BIC Trade Waste Denied Companies, Affiliate discovery (NYS DOS). No adverse information was found. The following searches could not be completed and must be performed manually: OSHA. The following searches must be performed manually: NYS Courts County Filing / JDLS search (New York County), News search, Lexis Accurint. | N/A | Other Sources |

## Evidence Index
| Source | Description | Path | Captured At |
| --- | --- | --- | --- |
| nys_dos | inquiry SKANSKA USA CIVIL NORTHEAST | evidence/nys_dos/001_inquiry_skanska_usa_civil_northeast.json | 2026-10-16T18:06:49.939221+00:00 |
| nys_dos | open data 169574 | evidence/nys_dos/002_open_data_169574.json | 2026-10-16T18:06:50.938404+00:00 |
| nys_dos | status history 169574 | evidence/nys_dos/003_status_history_169574.json | 2026-10-16T18:06:51.125245+00:00 |
| nys_dos | prior names 169574 | evidence/nys_dos/004_prior_names_169574.json | 2026-10-16T18:06:51.277102+00:00 |
| nys_tax_warrant | taxpayer names for 'SKANSKA USA CIVIL NORTHEAST' (none) | evidence/nys_tax_warrant/001_taxpayer_names_for_skanska_usa_civil_nor.html | 2026-10-16T18:06:51.316186+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/002_open_data_warrants_none.json | 2026-10-16T18:06:51.511115+00:00 |
| nys_ucc | UCC federal tax lien search: SKANSKA USA CIVIL NORTHEAST | evidence/nys_ucc/001_ucc_federal_tax_lien_search_skanska_usa.png | 2026-10-16T18:07:31.590261+00:00 |
| nys_ucc | UCC federal tax lien search: SKANSKA USA CIVIL NORTHEAST | evidence/nys_ucc/002_ucc_federal_tax_lien_search_skanska_usa.html | 2026-10-16T18:07:31.591458+00:00 |
| nys_dol_debarment | dolSearch SKANSKA USA CIVIL NORTHEAST | evidence/nys_dol_debarment/001_dolsearch_skanska_usa_civil_northeast.html | 2026-10-16T18:06:49.173052+00:00 |
| nys_dol_debarment | wcbSearch SKANSKA USA CIVIL NORTHEAST | evidence/nys_dol_debarment/002_wcbsearch_skanska_usa_civil_northeast.html | 2026-10-16T18:06:49.239400+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/003_eo192_non_responsible_contractors.json | 2026-10-16T18:06:50.209200+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/004_dol_contractor_registry.json | 2026-10-16T18:06:50.350424+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/001_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:06:48.905389+00:00 |
| nyc_sca | SCA vendor_name contains safety net (SKANSKA) | evidence/nyc_sca/002_sca_vendor_name_contains_safety_net_skan.json | 2026-10-16T18:06:49.033757+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/001_acris_personal_property_parties_search.json | 2026-10-16T18:06:48.200566+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:06:48.291948+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/002_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:07:26.367310+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/001_dob_disciplinary_no_results.json | 2026-10-16T18:07:04.470445+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'SKANSKA', no results | evidence/nyc_dob_disciplinary/002_dob_disciplinary_contains_fallback_on_sk.json | 2026-10-16T18:07:10.195452+00:00 |
| sam | frontend search 'SKANSKA USA CIVIL NORTHEAST' page 0 | evidence/sam/001_frontend_search_skanska_usa_civil_northe.json | 2026-10-16T18:06:52.326693+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/001_get_denied_companies_page_status_200.html | 2026-10-16T18:06:47.916035+00:00 |
| affiliates | same process address: 75-20 Astoria Blvd | evidence/affiliates/001_same_process_address_75_20_astoria_blvd.json | 2026-10-16T18:07:31.758943+00:00 |
