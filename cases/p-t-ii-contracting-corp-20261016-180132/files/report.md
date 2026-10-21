# Vendor Integrity Check Report

**Subject:** P & T II Contracting Corp.
**Address:** 106-17 153rd St, Jamaica, NY
**Variants searched:** P & T II CONTRACTING, P AND T II CONTRACTING, P&T II CONTRACTING, P & T 2 CONTRACTING, P AND T 2 CONTRACTING, P&T2 CONTRACTING
**Run:** 2026-10-16T18:05:13.745436+00:00  ·  vic 0.1.0

Decision support only. All findings must be verified by staff; the responsibility determination is made by the ACCO.

## Subjects
| ID | Role | Name | Kind | Discovered Via | Trades |
| --- | --- | --- | --- | --- | --- |
| vendor | vendor | P & T II Contracting Corp. | company |  | general_contractor |
| principal-1 | principal | Lenny Pereira | person |  |  |
| affiliate-1 | affiliate | 105 148TH ST., LLC | company | same DOS process agent: LENNY PEREIRA |  |
| affiliate-2 | affiliate | 1203 148TH ST., LLC | company | same DOS process agent: LENNY PEREIRA |  |
| affiliate-3 | affiliate | 155-22 COHANCY STREET LLC | company | same DOS process agent: LENNY PEREIRA |  |
| affiliate-4 | affiliate | 5 REMSEN LANE, LLC | company | same DOS process agent: LENNY PEREIRA |  |
| affiliate-5 | affiliate | JLL 93 SOUTH COUNTRY LLC | company | same DOS process agent: LENNY PEREIRA |  |
| affiliate-6 | affiliate | JLL RING ROAD LLC | company | same DOS process agent: LENNY PEREIRA |  |
| affiliate-7 | affiliate | LIFETIME CONCRETE, INC. | company | chairman matches principal Lenny Pereira |  |
| affiliate-8 | affiliate | P & T CONTRACTING CORP. | company | chairman matches principal Lenny Pereira |  |

## Subject: P & T II Contracting Corp. (vendor)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 2.9 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 3.8 |
| NYS Department of State UCC and federal tax lien search | ok | 8.8 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 2.9 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 14.9 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.5 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 1.4 |
| US Department of Labor OSHA establishment inspections | failed: 5 of 5 OSHA searches failed (P&T2 CONTRACTING: HTTP 405; P&T II CONTRACTING: HTTP 405; P & T II CONTRACTING: HTTP 405; P AND T II CONTRACTING: HTTP 405; P & T 2 CONTRACTING: HTTP 405); OSHA must be checked manually | 1.0 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 1.0 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.2 |
| Affiliate discovery (NYS DOS) | ok | 0.5 |
| NYC Department of Buildings BIS skilled trades licence search | failed: DOB BIS returned Access Denied (Akamai bot protection); licence status must be verified manually | 49.0 |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | ok | 0.0 |

### Summary
| Source | Result | Coverage |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | 1 records, 0 adverse, 0 open | All NYS DOS entities, active and inactive; details from Open Data monthly extract |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | No records | DOS electronic warrant notices since 2004-01-08; Open Data warrants filed on or after 2025-07-01 |
| NYS Department of State UCC and federal tax lien search | 5 records, 5 adverse, 4 open | NYS DOS UCC database, federal tax liens only; current through the date shown on the site |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | 1 records, 0 adverse, 0 open | NYS DOL 5-year prevailing wage debarments, WCB 1-year debarments, EO-192 non-responsible list, DOL contractor registry |
| NYC School Construction Authority disqualified, ineligible and suspended firms | No records | SCA Disqualified Firms list on NYC Open Data (krwf-eng6): Disqualified, Ineligible and Suspended vendors; empty 'to' date means indefinite |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | 1 records, 1 adverse, 1 open | ACRIS personal property documents recorded in the five boroughs, updated through good_through_date. |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 36 records, 36 adverse, 1 open | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 5 of 5 OSHA searches failed (P&T2 CONTRACTING: HTTP 405; P&T II CONTRACTING: HTTP 405; P & T II CONTRACTING: HTTP 405; P AND T II CONTRACTING: HTTP 405; P & T 2 CONTRACTING: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| Affiliate discovery (NYS DOS) | No records |  |
| NYC Department of Buildings BIS skilled trades licence search | Search failed: DOB BIS returned Access Denied (Akamai bot protection); licence status must be verified manually | NYC DOB BIS skilled-trade licensee/contractor roster; current as shown live on the site |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYS Department of State UCC and federal tax lien search (nys_ucc)

##### Open
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-08-27 | 21260828067976-5 | P & T II CONTRACTING CORP | Active |  | Federal tax lien 21260828067976-5 filed 2026-08-27, lapses 2036-05-27, Active; debtor 10617 153RD ST, JAMAICA, NY | [nys_ucc-001](evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png), [nys_ucc-002](evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html), [nys_ucc-003](evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png), [nys_ucc-004](evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html) |
| 2019-09-06 | 201909060411482 | P & T II CONTRACTING CORP | Active |  | Federal tax lien 201909060411482 filed 2019-09-06, lapses 2029-07-24, Active; debtor 10617 153RD ST, JAMAICA, NY | [nys_ucc-001](evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png), [nys_ucc-002](evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html), [nys_ucc-003](evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png), [nys_ucc-004](evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html) |
| 2019-09-06 | 201909060411862 | P & T II CONTRACTING CORP | Active |  | Federal tax lien 201909060411862 filed 2019-09-06, lapses 2029-09-11, Active; debtor 10617 153RD ST, JAMAICA, NY | [nys_ucc-001](evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png), [nys_ucc-002](evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html), [nys_ucc-003](evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png), [nys_ucc-004](evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html) |
| 2017-11-03 | 201711030540783 | P & T II CONTRACTING CORP | Active |  | Federal tax lien 201711030540783 filed 2017-11-03, lapses 2027-06-21, Active; debtor 2417 JERICHO TPKE SUITE 315, GARDEN CITY PARK, NY | [nys_ucc-001](evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png), [nys_ucc-002](evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html), [nys_ucc-003](evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png), [nys_ucc-004](evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html) |

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2014-08-22 | 201408220475553 | P & T II CONTRACTING CORP | Inactive |  | Federal tax lien 201408220475553 filed 2014-08-22, lapses 2024-06-25, Inactive; debtor 2417 JERICHO TPKE, STE 315, GARDEN CITY PARK | [nys_ucc-001](evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png), [nys_ucc-002](evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html), [nys_ucc-003](evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png), [nys_ucc-004](evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html) |

#### NYC Department of Finance ACRIS personal property (UCC and federal liens) (nyc_acris)

##### Open
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2019-09-05 | 2019083000098003 | P & T II CONTRACTING CORP , A CORPORATION | FEDERAL LIEN-IRS | $42,799.55 | FEDERAL LIEN-IRS recorded 2019-09-05, $42,799.55, serial 377905819; parties: P & T II CONTRACTING CORP , A CORPORATION (debtor) / INTERNAL REVENUE SERVICE (secured party) | [nyc_acris-001](evidence/nyc_acris/001_acris_personal_property_parties_search.json), [nyc_acris-002](evidence/nyc_acris/002_acris_master_records_for_matched_documen.json), [nyc_acris-003](evidence/nyc_acris/003_acris_all_parties_for_matched_documents.json) |

##### Resolved
_None._

#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-07-26 | 0704279759 | P & T II CONTRACTING CORP. |  |  | agency not stated summons 0704279759, 2026-07-26, charge not stated, penalty not yet assessed, no hearing status recorded | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2017-05-24 | 0191530058 | P AND T II CONTRACTING CORP | PAID IN FULL | $3,600.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0191530058, 2017-05-24, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $3,600.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2017-04-17 | 0191543606 | P AND T II CONTRACTING CORP | PAID IN FULL | $2,250.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0191543606, 2017-04-17, CONSTRUCTION MATERIALS EQUIPMENT STORED ON STREET W 0 PERMIT, penalty $2,250.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2017-04-17 | 0191543597 | P AND T II CONTRACTING CORP | PAID IN FULL | $5,000.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0191543597, 2017-04-17, STREET CLOSING WITHOUT PERMIT, penalty $5,000.00, PAID IN FULL | [nyc_oath_ecb-001](evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

_32 older records (2011 to 2013) not shown under the ten-year rule; see run.json_

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2006-01-13 | 3305836 | P & T II CONTRACTING CORP. | Active |  | DOMESTIC BUSINESS CORPORATION, Nassau County, filed 2006-01-13, Active; process agent LENNY PEREIRA, 10617 153rd Street, Jamaica NY | [nys_dos-001](evidence/nys_dos/001_inquiry_p_t_ii_contracting.json), [nys_dos-005](evidence/nys_dos/005_open_data_3305836.json), [nys_dos-006](evidence/nys_dos/006_status_history_3305836.json), [nys_dos-007](evidence/nys_dos/007_prior_names_3305836.json) |

#### NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry (nys_dol_debarment)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-09 | 26-64YJ8-CR | P & T II CONTRACTING CORP. | Active, expires 2028-12-29 |  | DOL contractor registry certificate 26-64YJ8-CR, P & T II CONTRACTING CORP., Active, expires 2028-12-29; debarred No, outstanding wage assessments No, labor/tax law violation No, safety standard violation No | [nys_dol_debarment-008](evidence/nys_dol_debarment/008_dol_contractor_registry.json) |

## Subject: Lenny Pereira (principal)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 5.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.6 |
| NYS Department of State UCC and federal tax lien search | ok | 4.5 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 10.7 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 14.0 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 12.6 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 1.0 |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | ok | 0.0 |

### Summary
| Source | Result | Coverage |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | 10 records, 0 adverse, 0 open | All NYS DOS entities, active and inactive; details from Open Data monthly extract |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | No records | DOS electronic warrant notices since 2004-01-08; Open Data warrants filed on or after 2025-07-01 |
| NYS Department of State UCC and federal tax lien search | No records | NYS DOS UCC database, federal tax liens only; current through the date shown on the site |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | No records | ACRIS personal property documents recorded in the five boroughs, updated through good_through_date. |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 11 records, 11 adverse, 0 open | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2017-01-28 | 35230658H | LENNY PEREIRA | RESOLVE | $2,430.00 | DOB ECB violation 35230658H issued 2017-01-28, Construction, 28-201.1 UNLAWFUL ACTS. FAILURE TO COMPLY WITH AN ORDER OF THE COMMISSIONER, penalty $2,430.00, RESOLVE | [nyc_oath_ecb-003](evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json) |
| 2017-01-06 | 35229628Z | LENNY PEREIRA | RESOLVE | $800.00 | DOB ECB violation 35229628Z issued 2017-01-06, Construction, AC 28-204.4 FAIL TO COMPLY W/COMMISSIONER ORDER TO FILE CERT OF CORRECTION W/DOB, penalty $800.00, RESOLVE | [nyc_oath_ecb-003](evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json) |
| 2017-01-06 | 35229627R | LENNY PEREIRA | RESOLVE | $2,400.00 | DOB ECB violation 35229627R issued 2017-01-06, Construction, 28-201.1 UNLAWFUL ACTS. FAILURE TO COMPLY WITH AN ORDER OF THE COMMISSIONER, penalty $2,400.00, RESOLVE | [nyc_oath_ecb-003](evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json) |
| 2016-12-05 | 35190502H | LENNY PEREIRA | RESOLVE | $2,400.00 | DOB ECB violation 35190502H issued 2016-12-05, Construction, 28-201.1 UNLAWFUL ACTS. FAILURE TO COMPLY WITH AN ORDER OF THE COMMISSIONER, penalty $2,400.00, RESOLVE | [nyc_oath_ecb-003](evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json) |
| 2016-12-05 | 35190501X | LENNY PEREIRA | RESOLVE | $0.00 | DOB ECB violation 35190501X issued 2016-12-05, Construction, AC 28-204.4 FAIL TO COMPLY W/COMMISSIONER ORDER TO FILE CERT OF CORRECTION W/DOB, penalty $0.00, RESOLVE | [nyc_oath_ecb-003](evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

_6 older records (2016 to 2016) not shown under the ten-year rule; see run.json_

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2019-01-10 | 5472481 | 105 148TH ST., LLC | Active |  | Officer-of record: DOS process agent for 105 148TH ST., LLC (DOS 5472481), 106-17 153RD STREET, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2018-11-15 | 5443980 | 5 REMSEN LANE, LLC | Active |  | Officer-of record: DOS process agent for 5 REMSEN LANE, LLC (DOS 5443980), 106-17 153RD STREET, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2018-09-06 | 5405252 | 1203 148TH ST., LLC | Active |  | Officer-of record: DOS process agent for 1203 148TH ST., LLC (DOS 5405252), 106-17 153 STREET, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2018-05-01 | 5332681 | JLL 93 SOUTH COUNTRY LLC | Active |  | Officer-of record: DOS process agent for JLL 93 SOUTH COUNTRY LLC (DOS 5332681), 106-17 153RD STREET, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2018-05-01 | 5332686 | JLL RING ROAD LLC | Active |  | Officer-of record: DOS process agent for JLL RING ROAD LLC (DOS 5332686), 106-17 153RD STREET, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2016-05-05 | 4942163 | SOUTH 153RD LLC | Active |  | Officer-of record: DOS process agent for SOUTH 153RD LLC (DOS 4942163), 106-17 153 STREET, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2014-12-17 | 4681307 | 155-22 COHANCY STREET LLC | Active |  | Officer-of record: DOS process agent for 155-22 COHANCY STREET LLC (DOS 4681307), 6 TIMBER CROFT WAY, SMITHTOWN NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2006-01-13 | 3305836 | P & T II CONTRACTING CORP. | Active |  | Officer-of record: DOS process agent for P & T II CONTRACTING CORP. (DOS 3305836), 10617 153rd Street, Jamaica NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 2003-06-03 | 2914250 | LIFETIME CONCRETE, INC. | Active |  | Officer-of record: chairman for LIFETIME CONCRETE, INC. (DOS 2914250), LENNY PEREIRA, JAMAICA NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |
| 1997-11-21 | 2201426 | P & T CONTRACTING CORP. | Active |  | Officer-of record: chairman for P & T CONTRACTING CORP. (DOS 2201426), LENNY PEREIRA, COLLEGE POINT NY | [nys_dos-008](evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json) |

## Subject: 105 148TH ST., LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 1.4 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.1 |
| NYS Department of State UCC and federal tax lien search | ok | 11.8 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 1.5 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.1 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 1.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 3.6 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.1 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (105 148TH ST: HTTP 405); OSHA must be checked manually | 0.8 |
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
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 5 records, 2 adverse, 0 open (3 to review) | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (105 148TH ST: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2019-09-20 | 046483455M | 105 148TH ST LLC | PAID IN FULL | $100.00 | DOS - ENFORCEMENT AGENTS summons 046483455M, 2019-09-20, DIRTY SIDEWALK DIRTY AREA VACANT LOT, penalty $100.00, PAID IN FULL | [nyc_oath_ecb-004](evidence/nyc_oath_ecb/004_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2019-06-16 | 046739130K | 105 148TH ST LLC | PAID IN FULL | $100.00 | SANITATION RECYCLING summons 046739130K, 2019-06-16, STORAGE OF RECEPTACLES, penalty $100.00, PAID IN FULL | [nyc_oath_ecb-004](evidence/nyc_oath_ecb/004_oath_hearings_jz4z_kudi_respondent_last.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

### Needs Review
| Source | Date | Record ID | Matched Name | Score | Reasons |
| --- | --- | --- | --- | --- | --- |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 039158973J | 105 148TH ST LLC ATTN GIL G | 0.60 | record name extends the subject: 'LLC ATTN GIL G' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 039158974L | 105 148TH ST LLC ATTN GIL G | 0.60 | record name extends the subject: 'LLC ATTN GIL G' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 039158994Z | 105 148TH ST LLC ATTN GIL G | 0.60 | record name extends the subject: 'LLC ATTN GIL G' |

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2019-01-10 | 5472481 | 105 148TH ST., LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2019-01-10, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-009](evidence/nys_dos/009_inquiry_105_148th_st.json), [nys_dos-010](evidence/nys_dos/010_open_data_5472481.json), [nys_dos-012](evidence/nys_dos/012_status_history_5472481.json), [nys_dos-013](evidence/nys_dos/013_prior_names_5472481.json) |

## Subject: 1203 148TH ST., LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 2.1 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.1 |
| NYS Department of State UCC and federal tax lien search | ok | 4.3 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.5 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 15.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 1.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.4 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 12.2 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (1203 148TH ST: HTTP 405); OSHA must be checked manually | 0.7 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 0.9 |
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
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2 records, 1 adverse, 0 open (1 awaiting hearing, not counted) | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (1203 148TH ST: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2020-01-02 | 046395587Y | 1203 148TH ST LLC | PAID IN FULL | $100.00 | DOS - ENFORCEMENT AGENTS summons 046395587Y, 2020-01-02, LOOSE RUBBISH, penalty $100.00, PAID IN FULL | [nyc_oath_ecb-006](evidence/nyc_oath_ecb/006_oath_hearings_jz4z_kudi_respondent_last.json) |

##### Awaiting hearing (not counted against the vendor)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-03 | 046995862Z | 1203 148TH ST LLC | NEW ISSUANCE | $50.00 | SANITATION OTHERS summons 046995862Z, 2026-09-03, IMPROPER RECEPTACLE FAILURE TO CONTAINERIZE - RESIDENTIAL 1ST, penalty $50.00, NEW ISSUANCE | [nyc_oath_ecb-006](evidence/nyc_oath_ecb/006_oath_hearings_jz4z_kudi_respondent_last.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2018-09-06 | 5405252 | 1203 148TH ST., LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-09-06, Active; process agent LENNY PEREIRA, 106-17 153 STREET, JAMAICA NY | [nys_dos-011](evidence/nys_dos/011_inquiry_1203_148th_st.json), [nys_dos-018](evidence/nys_dos/018_open_data_5405252.json), [nys_dos-020](evidence/nys_dos/020_status_history_5405252.json), [nys_dos-022](evidence/nys_dos/022_prior_names_5405252.json) |

## Subject: 155-22 COHANCY STREET LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.4 |
| NYS Department of State UCC and federal tax lien search | ok | 4.1 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.5 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.3 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 3.6 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 71.8 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 28.7 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (155-22 COHANCY STREET: HTTP 405); OSHA must be checked manually | 0.9 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.0 |
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
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (155-22 COHANCY STREET: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2014-12-17 | 4681307 | 155-22 COHANCY STREET LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Suffolk County, filed 2014-12-17, Active; process agent LENNY PEREIRA, 6 TIMBER CROFT WAY, SMITHTOWN NY | [nys_dos-014](evidence/nys_dos/014_inquiry_155_22_cohancy_street.json), [nys_dos-015](evidence/nys_dos/015_open_data_4681307.json), [nys_dos-016](evidence/nys_dos/016_status_history_4681307.json), [nys_dos-017](evidence/nys_dos/017_prior_names_4681307.json) |

## Subject: 5 REMSEN LANE, LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.6 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.5 |
| NYS Department of State UCC and federal tax lien search | ok | 3.9 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.5 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.1 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 1.0 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 2.5 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 7.5 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (5 REMSEN LANE: HTTP 405); OSHA must be checked manually | 0.8 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.0 |
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
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (5 REMSEN LANE: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2018-11-15 | 5443980 | 5 REMSEN LANE, LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-11-15, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-019](evidence/nys_dos/019_inquiry_5_remsen_lane.json), [nys_dos-021](evidence/nys_dos/021_open_data_5443980.json), [nys_dos-023](evidence/nys_dos/023_status_history_5443980.json), [nys_dos-025](evidence/nys_dos/025_prior_names_5443980.json) |

## Subject: JLL 93 SOUTH COUNTRY LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.4 |
| NYS Department of State UCC and federal tax lien search | ok | 4.7 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.6 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.3 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 11.6 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 9.2 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 10.6 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (JLL 93 SOUTH COUNTRY: HTTP 405); OSHA must be checked manually | 0.8 |
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
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (JLL 93 SOUTH COUNTRY: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2018-05-01 | 5332681 | JLL 93 SOUTH COUNTRY LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-05-01, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-024](evidence/nys_dos/024_inquiry_jll_93_south_country.json), [nys_dos-026](evidence/nys_dos/026_open_data_5332681.json), [nys_dos-028](evidence/nys_dos/028_status_history_5332681.json), [nys_dos-030](evidence/nys_dos/030_prior_names_5332681.json) |

## Subject: JLL RING ROAD LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.3 |
| NYS Department of State UCC and federal tax lien search | ok | 3.9 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.6 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 15.0 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.1 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 7.9 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (JLL RING ROAD: HTTP 405); OSHA must be checked manually | 0.8 |
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
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (JLL RING ROAD: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2018-05-01 | 5332686 | JLL RING ROAD LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-05-01, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-027](evidence/nys_dos/027_inquiry_jll_ring_road.json), [nys_dos-029](evidence/nys_dos/029_open_data_5332686.json), [nys_dos-031](evidence/nys_dos/031_status_history_5332686.json), [nys_dos-034](evidence/nys_dos/034_prior_names_5332686.json) |

## Subject: LIFETIME CONCRETE, INC. (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.6 |
| NYS Department of State UCC and federal tax lien search | ok | 4.2 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.5 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 8.7 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 9.8 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 8.0 |
| US Department of Labor OSHA establishment inspections | failed: 1 of 1 OSHA searches failed (LIFETIME CONCRETE: HTTP 405); OSHA must be checked manually | 0.8 |
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
| US Department of Labor OSHA establishment inspections | Search failed: 1 of 1 OSHA searches failed (LIFETIME CONCRETE: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2003-06-03 | 2914250 | LIFETIME CONCRETE, INC. | Active |  | DOMESTIC BUSINESS CORPORATION, Queens County, filed 2003-06-03, Active; process agent LIFETIME CONCRETE, INC., 106-17 153RD STREET, JAMAICA NY | [nys_dos-032](evidence/nys_dos/032_inquiry_lifetime_concrete.json), [nys_dos-033](evidence/nys_dos/033_open_data_2914250.json), [nys_dos-035](evidence/nys_dos/035_status_history_2914250.json), [nys_dos-037](evidence/nys_dos/037_prior_names_2914250.json) |

## Subject: P & T CONTRACTING CORP. (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.8 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 3.5 |
| NYS Department of State UCC and federal tax lien search | ok | 7.2 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.7 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 3.7 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.6 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 32.5 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.4 |
| US Department of Labor OSHA establishment inspections | failed: 2 of 2 OSHA searches failed (P&T CONTRACTING: HTTP 405; P & T CONTRACTING: HTTP 405); OSHA must be checked manually | 0.8 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.2 |
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
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | 3 records, 0 adverse, 0 open | ACRIS personal property documents recorded in the five boroughs, updated through good_through_date. |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 8 records, 8 adverse, 0 open | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | 1 records, 0 adverse, 0 open (1 unrelated dropped) | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | Search failed: 2 of 2 OSHA searches failed (P&T CONTRACTING: HTTP 405; P & T CONTRACTING: HTTP 405); OSHA must be checked manually | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2017-06-19 | 0196156878 | P AND T CONTRACTING CORP | PAID IN FULL | $1,200.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0196156878, 2017-06-19, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-013](evidence/nyc_oath_ecb/013_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2017-06-15 | 0196156804 | P AND T CONTRACTING CORP | PAID IN FULL | $3,600.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0196156804, 2017-06-15, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $3,600.00, PAID IN FULL | [nyc_oath_ecb-013](evidence/nyc_oath_ecb/013_oath_hearings_jz4z_kudi_respondent_last.json) |

_The form's ECB "In compliance" is the compliance status with the NYC Department of Finance as shown in PASSPort, which staff must confirm; the OATH records are supporting evidence._

_6 older records (2001 to 2009) not shown under the ten-year rule; see run.json_

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1997-11-21 | 2201426 | P & T CONTRACTING CORP. | Active |  | DOMESTIC BUSINESS CORPORATION, Queens County, filed 1997-11-21, Active; process agent P & T CONTRACTING CORP., POST OFFICE BOX 560215, COLLEGE POINT NY | [nys_dos-036](evidence/nys_dos/036_inquiry_p_t_contracting.json), [nys_dos-040](evidence/nys_dos/040_open_data_2201426.json), [nys_dos-041](evidence/nys_dos/041_status_history_2201426.json), [nys_dos-042](evidence/nys_dos/042_prior_names_2201426.json) |

#### NYC Department of Finance ACRIS personal property (UCC and federal liens) (nyc_acris)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2001-05-16 | FT_4660007659966 | P & T CONTRACTING CORP | INITIAL UCC1 |  | INITIAL UCC1 recorded 2001-05-16; parties: P & T CONTRACTING CORP (debtor) / H.O. PENN MACHINERYCOMPANY, INC (secured party) / CATERPILLAR FINANCIAL SERVICES CORPORATION (assignee) | [nyc_acris-010](evidence/nyc_acris/010_acris_personal_property_parties_search.json), [nyc_acris-011](evidence/nyc_acris/011_acris_master_records_for_matched_documen.json), [nyc_acris-012](evidence/nyc_acris/012_acris_all_parties_for_matched_documents.json) |
| 2001-04-11 | FT_4030007604403 | P & T CONTRACTING CORP. | INITIAL UCC1 |  | INITIAL UCC1 recorded 2001-04-11; parties: P & T CONTRACTING CORP. (debtor) / NORTH FORK BANK (secured party) | [nyc_acris-010](evidence/nyc_acris/010_acris_personal_property_parties_search.json), [nyc_acris-011](evidence/nyc_acris/011_acris_master_records_for_matched_documen.json), [nyc_acris-012](evidence/nyc_acris/012_acris_all_parties_for_matched_documents.json) |
| 2000-07-26 | FT_4400007267540 | P & T CONTRACTING CORP | INITIAL UCC1 |  | INITIAL UCC1 recorded 2000-07-26; parties: P & T CONTRACTING CORP (debtor) / H.O. PENN MACHINERYCO INC (secured party) / CATERPILLAR FINANCIAL SERVICES CORP (assignee) | [nyc_acris-010](evidence/nyc_acris/010_acris_personal_property_parties_search.json), [nyc_acris-011](evidence/nyc_acris/011_acris_master_records_for_matched_documen.json), [nyc_acris-012](evidence/nyc_acris/012_acris_all_parties_for_matched_documents.json) |

### Notes
- NYC Department of Buildings disciplinary actions and voluntary surrenders: 1 hit(s) scored below 0.5 and were dropped as likely false positives: TPG CONTRACTING CORP (0.30).

## Possible Affiliates
| Name | DOS ID | Reasons | Confidence | Ran As |
| --- | --- | --- | --- | --- |
| 105 148TH ST., LLC | 5472481 | same DOS process agent: LENNY PEREIRA; process agent matches principal Lenny Pereira | strong | affiliate-1 |
| 1203 148TH ST., LLC | 5405252 | same DOS process agent: LENNY PEREIRA; process agent matches principal Lenny Pereira | strong | affiliate-2 |
| 155-22 COHANCY STREET LLC | 4681307 | same DOS process agent: LENNY PEREIRA; process agent matches principal Lenny Pereira | strong | affiliate-3 |
| 5 REMSEN LANE, LLC | 5443980 | same DOS process agent: LENNY PEREIRA; process agent matches principal Lenny Pereira | strong | affiliate-4 |
| JLL 93 SOUTH COUNTRY LLC | 5332681 | same DOS process agent: LENNY PEREIRA; process agent matches principal Lenny Pereira | strong | affiliate-5 |
| JLL RING ROAD LLC | 5332686 | same DOS process agent: LENNY PEREIRA; process agent matches principal Lenny Pereira | strong | affiliate-6 |
| LIFETIME CONCRETE, INC. | 2914250 | chairman matches principal Lenny Pereira | strong | affiliate-7 |
| P & T CONTRACTING CORP. | 2201426 | chairman matches principal Lenny Pereira | strong | affiliate-8 |

## Companies Linked to Principals
| Principal | Entity | DOS ID | Role Field | Status |
| --- | --- | --- | --- | --- |
| Lenny Pereira | 105 148TH ST., LLC | 5472481 | dos_process_name | Active |
| Lenny Pereira | 1203 148TH ST., LLC | 5405252 | dos_process_name | Active |
| Lenny Pereira | 155-22 COHANCY STREET LLC | 4681307 | dos_process_name | Active |
| Lenny Pereira | 5 REMSEN LANE, LLC | 5443980 | dos_process_name | Active |
| Lenny Pereira | JLL 93 SOUTH COUNTRY LLC | 5332681 | dos_process_name | Active |
| Lenny Pereira | JLL RING ROAD LLC | 5332686 | dos_process_name | Active |
| Lenny Pereira | LIFETIME CONCRETE, INC. | 2914250 | chairman_name | Active |
| Lenny Pereira | P & T CONTRACTING CORP. | 2201426 | chairman_name | Active |
| Lenny Pereira | P & T II CONTRACTING CORP. | 3305836 | dos_process_name | Active |
| Lenny Pereira | SOUTH 153RD LLC | 4942163 | dos_process_name | Active |

## Qualifications
| Subject | Source | Found | Licence Number | Status | Expiry | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| P & T II Contracting Corp. | NYC DOB BIS Licensing | **SEARCH FAILED** (DOB BIS returned Access Denied (Akamai bot protection); licence status must be verified manually) |  |  |  |  |

## Manual Steps Required
| Title | Subject | Instructions | Completed | Evidence |
| --- | --- | --- | --- | --- |
| NYS UCC: check each Active federal tax lien for a Notice of Release | P & T II Contracting Corp. | The search results list these federal tax liens as Active, but a Notice of Release shows only on each lien's detail page, which the site protects with a human check. Open the UCC site, choose Lien Search, search the debtor name with Lien Type "Federal Tax Lien", and open each lien: 201711030540783 (IRS serial 283322517, filed 2017-11-03); 201909060411482 (IRS serial 378009719, filed 2019-09-06); 201909060411862 (IRS serial 377905719, filed 2019-09-06); 21260828067976-5 (IRS serial 548154526, filed 2026-08-27). A lien with a Notice of Release (or Withdrawal) was satisfied: save its detail page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | P & T II Contracting Corp. | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "P & T II Contracting Corp." as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | Lenny Pereira | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "Lenny Pereira" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | 105 148TH ST., LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "105 148TH ST., LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | 1203 148TH ST., LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "1203 148TH ST., LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | 155-22 COHANCY STREET LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "155-22 COHANCY STREET LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | 5 REMSEN LANE, LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "5 REMSEN LANE, LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | JLL 93 SOUTH COUNTRY LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "JLL 93 SOUTH COUNTRY LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | JLL RING ROAD LLC | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "JLL RING ROAD LLC" as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | LIFETIME CONCRETE, INC. | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "LIFETIME CONCRETE, INC." as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| NYS Courts County Filing / JDLS search (New York County) | P & T CONTRACTING CORP. | Go to the County Filing Search. Choose Book "Judgment" and Name Type "Either". Enter "P & T CONTRACTING CORP." as the name and search as a guest (no login required). Look for judgments where the NYS Commissioner of Labor is a party. Save the results page as a PDF and attach it here. | No |  |
| News search | P & T II Contracting Corp. | Search Google, Google News, The New York Times, The Daily News, The New York Post, and Crain's New York Business for adverse news about P & T II Contracting Corp., Lenny Pereira, 105 148TH ST., LLC, 1203 148TH ST., LLC, 155-22 COHANCY STREET LLC, 5 REMSEN LANE, LLC, JLL 93 SOUTH COUNTRY LLC, JLL RING ROAD LLC, LIFETIME CONCRETE, INC., P & T CONTRACTING CORP.. Also run a Google Advanced Search restricted to site:.gov. Save any relevant results and attach them here. | No |  |
| Lexis Accurint | P & T II Contracting Corp. | Run a Lexis Nexis Accurint Comprehensive Business Report on P & T II Contracting Corp.. Run a Comprehensive People Report on Lenny Pereira using the home address recorded in PASSPort. Attach the reports here. | No |  |

## PASSPort Sources Table
| Information | Determination | Source |
| --- | --- | --- |
| Federal tax liens were found for P & T II Contracting Corp. between 2014 – 2026 (4 active, 1 inactive/lapsed). | The contractor should be asked to provide proof of satisfaction or a payment/settlement agreement for the liens listed above. [ACCO determination to be entered by staff.] | NYS DOS UCC / Federal Tax Lien |
| Federal tax lien(s) recorded in ACRIS were found for P & T II Contracting Corp. (1, total $42,799.55). | The contractor should be asked to provide proof of satisfaction or a payment/settlement agreement for the liens listed above. [ACCO determination to be entered by staff.] | ACRIS |
| Outstanding ECB violations were found for P & T II Contracting Corp. between 2017 – 2026 (4 summonses; 1 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for principal Lenny Pereira between 2016 – 2017 (5 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for affiliate 105 148TH ST., LLC in 2019 (2 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for affiliate 1203 148TH ST., LLC in 2020 (1 summonses; 0 open; balance due $0.00); 1 more awaiting a hearing (not counted). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for affiliate P & T CONTRACTING CORP. in 2017 (2 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Licence status could not be verified automatically for: P & T II Contracting Corp. (NYC DOB BIS Licensing); the search failed and must be repeated by staff. | The contractor should be asked to provide proof of current licensure for the trade(s) listed above. [ACCO determination to be entered by staff.] | Licence verification |
| DDC performed searches on October 16, 2026 on P & T II Contracting Corp., its principal(s) Lenny Pereira, and affiliate(s) 105 148TH ST., LLC, 1203 148TH ST., LLC, 155-22 COHANCY STREET LLC, 5 REMSEN LANE, LLC, JLL 93 SOUTH COUNTRY LLC, JLL RING ROAD LLC, LIFETIME CONCRETE, INC., P & T CONTRACTING CORP. in the following databases: NYS DOS, NYS DTF Tax Warrants, NYS DOL / WCB Debarment, SCA, DOB, SAM, BIC Trade Waste Denied Companies, Affiliate discovery (NYS DOS). No adverse information was found. The following searches could not be completed and must be performed manually: OSHA, NYC DOB BIS Licensing. The following searches must be performed manually: NYS UCC: check each Active federal tax lien for a Notice of Release, NYS Courts County Filing / JDLS search (New York County), News search, Lexis Accurint. | N/A | Other Sources |

## Evidence Index
| Source | Description | Path | Captured At |
| --- | --- | --- | --- |
| nys_dos | inquiry P & T II CONTRACTING | evidence/nys_dos/001_inquiry_p_t_ii_contracting.json | 2026-10-16T18:01:47.408572+00:00 |
| nys_dos | inquiry P AND T II CONTRACTING | evidence/nys_dos/002_inquiry_p_and_t_ii_contracting.json | 2026-10-16T18:01:47.608688+00:00 |
| nys_dos | inquiry P&T II CONTRACTING | evidence/nys_dos/003_inquiry_p_t_ii_contracting.json | 2026-10-16T18:01:47.786378+00:00 |
| nys_dos | inquiry P & T 2 CONTRACTING | evidence/nys_dos/004_inquiry_p_t_2_contracting.json | 2026-10-16T18:01:47.978325+00:00 |
| nys_dos | open data 3305836 | evidence/nys_dos/005_open_data_3305836.json | 2026-10-16T18:01:48.892737+00:00 |
| nys_dos | status history 3305836 | evidence/nys_dos/006_status_history_3305836.json | 2026-10-16T18:01:49.098773+00:00 |
| nys_dos | prior names 3305836 | evidence/nys_dos/007_prior_names_3305836.json | 2026-10-16T18:01:49.217606+00:00 |
| nys_dos | officer-of reverse lookup for PEREIRA | evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json | 2026-10-16T18:01:51.872457+00:00 |
| nys_dos | inquiry 105 148TH ST | evidence/nys_dos/009_inquiry_105_148th_st.json | 2026-10-16T18:03:54.063917+00:00 |
| nys_dos | open data 5472481 | evidence/nys_dos/010_open_data_5472481.json | 2026-10-16T18:03:54.187111+00:00 |
| nys_dos | status history 5472481 | evidence/nys_dos/012_status_history_5472481.json | 2026-10-16T18:03:54.316361+00:00 |
| nys_dos | prior names 5472481 | evidence/nys_dos/013_prior_names_5472481.json | 2026-10-16T18:03:54.486070+00:00 |
| nys_dos | inquiry 1203 148TH ST | evidence/nys_dos/011_inquiry_1203_148th_st.json | 2026-10-16T18:03:54.195467+00:00 |
| nys_dos | open data 5405252 | evidence/nys_dos/018_open_data_5405252.json | 2026-10-16T18:03:55.102642+00:00 |
| nys_dos | status history 5405252 | evidence/nys_dos/020_status_history_5405252.json | 2026-10-16T18:03:55.219195+00:00 |
| nys_dos | prior names 5405252 | evidence/nys_dos/022_prior_names_5405252.json | 2026-10-16T18:03:55.332733+00:00 |
| nys_dos | inquiry 155-22 COHANCY STREET | evidence/nys_dos/014_inquiry_155_22_cohancy_street.json | 2026-10-16T18:03:54.606848+00:00 |
| nys_dos | open data 4681307 | evidence/nys_dos/015_open_data_4681307.json | 2026-10-16T18:03:54.737742+00:00 |
| nys_dos | status history 4681307 | evidence/nys_dos/016_status_history_4681307.json | 2026-10-16T18:03:54.908439+00:00 |
| nys_dos | prior names 4681307 | evidence/nys_dos/017_prior_names_4681307.json | 2026-10-16T18:03:55.013043+00:00 |
| nys_dos | inquiry 5 REMSEN LANE | evidence/nys_dos/019_inquiry_5_remsen_lane.json | 2026-10-16T18:03:55.136437+00:00 |
| nys_dos | open data 5443980 | evidence/nys_dos/021_open_data_5443980.json | 2026-10-16T18:03:55.310455+00:00 |
| nys_dos | status history 5443980 | evidence/nys_dos/023_status_history_5443980.json | 2026-10-16T18:03:55.444420+00:00 |
| nys_dos | prior names 5443980 | evidence/nys_dos/025_prior_names_5443980.json | 2026-10-16T18:03:55.576443+00:00 |
| nys_dos | inquiry JLL 93 SOUTH COUNTRY | evidence/nys_dos/024_inquiry_jll_93_south_country.json | 2026-10-16T18:03:55.469070+00:00 |
| nys_dos | open data 5332681 | evidence/nys_dos/026_open_data_5332681.json | 2026-10-16T18:03:55.613569+00:00 |
| nys_dos | status history 5332681 | evidence/nys_dos/028_status_history_5332681.json | 2026-10-16T18:03:55.732870+00:00 |
| nys_dos | prior names 5332681 | evidence/nys_dos/030_prior_names_5332681.json | 2026-10-16T18:03:55.850255+00:00 |
| nys_dos | inquiry JLL RING ROAD | evidence/nys_dos/027_inquiry_jll_ring_road.json | 2026-10-16T18:03:55.696761+00:00 |
| nys_dos | open data 5332686 | evidence/nys_dos/029_open_data_5332686.json | 2026-10-16T18:03:55.826091+00:00 |
| nys_dos | status history 5332686 | evidence/nys_dos/031_status_history_5332686.json | 2026-10-16T18:03:55.945369+00:00 |
| nys_dos | prior names 5332686 | evidence/nys_dos/034_prior_names_5332686.json | 2026-10-16T18:03:56.111218+00:00 |
| nys_dos | inquiry LIFETIME CONCRETE | evidence/nys_dos/032_inquiry_lifetime_concrete.json | 2026-10-16T18:03:55.976955+00:00 |
| nys_dos | open data 2914250 | evidence/nys_dos/033_open_data_2914250.json | 2026-10-16T18:03:56.086358+00:00 |
| nys_dos | status history 2914250 | evidence/nys_dos/035_status_history_2914250.json | 2026-10-16T18:03:56.201080+00:00 |
| nys_dos | prior names 2914250 | evidence/nys_dos/037_prior_names_2914250.json | 2026-10-16T18:03:56.325353+00:00 |
| nys_dos | inquiry P & T CONTRACTING | evidence/nys_dos/036_inquiry_p_t_contracting.json | 2026-10-16T18:03:56.238766+00:00 |
| nys_dos | inquiry P AND T CONTRACTING | evidence/nys_dos/038_inquiry_p_and_t_contracting.json | 2026-10-16T18:03:56.359535+00:00 |
| nys_dos | inquiry P&T CONTRACTING | evidence/nys_dos/039_inquiry_p_t_contracting.json | 2026-10-16T18:03:56.575974+00:00 |
| nys_dos | open data 2201426 | evidence/nys_dos/040_open_data_2201426.json | 2026-10-16T18:03:56.701972+00:00 |
| nys_dos | status history 2201426 | evidence/nys_dos/041_status_history_2201426.json | 2026-10-16T18:03:56.826224+00:00 |
| nys_dos | prior names 2201426 | evidence/nys_dos/042_prior_names_2201426.json | 2026-10-16T18:03:56.942040+00:00 |
| nys_tax_warrant | taxpayer names for 'P & T II CONTRACTING' (none) | evidence/nys_tax_warrant/001_taxpayer_names_for_p_t_ii_contracting_no.html | 2026-10-16T18:01:48.415851+00:00 |
| nys_tax_warrant | taxpayer names for 'P AND T II CONTRACTING' (none) | evidence/nys_tax_warrant/005_taxpayer_names_for_p_and_t_ii_contractin.html | 2026-10-16T18:01:50.857763+00:00 |
| nys_tax_warrant | taxpayer names for 'P&T II CONTRACTING' (none) | evidence/nys_tax_warrant/006_taxpayer_names_for_p_t_ii_contracting_no.html | 2026-10-16T18:01:51.159992+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/007_open_data_warrants_none.json | 2026-10-16T18:01:51.310720+00:00 |
| nys_tax_warrant | taxpayer names for 'PEREIRA, LENNY' (none) | evidence/nys_tax_warrant/002_taxpayer_names_for_pereira_lenny_none.html | 2026-10-16T18:01:49.735464+00:00 |
| nys_tax_warrant | taxpayer names for 'PEREIRA LENNY' (none) | evidence/nys_tax_warrant/003_taxpayer_names_for_pereira_lenny_none.html | 2026-10-16T18:01:49.803379+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/004_open_data_warrants_none.json | 2026-10-16T18:01:50.031770+00:00 |
| nys_tax_warrant | taxpayer names for '105 148TH ST' (none) | evidence/nys_tax_warrant/008_taxpayer_names_for_105_148th_st_none.html | 2026-10-16T18:03:57.250604+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/009_open_data_warrants_none.json | 2026-10-16T18:03:57.435320+00:00 |
| nys_tax_warrant | taxpayer names for '1203 148TH ST' (none) | evidence/nys_tax_warrant/012_taxpayer_names_for_1203_148th_st_none.html | 2026-10-16T18:03:57.860107+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/013_open_data_warrants_none.json | 2026-10-16T18:03:58.027995+00:00 |
| nys_tax_warrant | taxpayer names for '155-22 COHANCY STREET' (none) | evidence/nys_tax_warrant/010_taxpayer_names_for_155_22_cohancy_street.html | 2026-10-16T18:03:57.585493+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/011_open_data_warrants_none.json | 2026-10-16T18:03:57.819431+00:00 |
| nys_tax_warrant | taxpayer names for '5 REMSEN LANE' (none) | evidence/nys_tax_warrant/014_taxpayer_names_for_5_remsen_lane_none.html | 2026-10-16T18:03:58.129999+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/016_open_data_warrants_none.json | 2026-10-16T18:03:58.292830+00:00 |
| nys_tax_warrant | taxpayer names for 'JLL 93 SOUTH COUNTRY' (none) | evidence/nys_tax_warrant/015_taxpayer_names_for_jll_93_south_country.html | 2026-10-16T18:03:58.202308+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/017_open_data_warrants_none.json | 2026-10-16T18:03:58.381895+00:00 |
| nys_tax_warrant | taxpayer names for 'JLL RING ROAD' (none) | evidence/nys_tax_warrant/018_taxpayer_names_for_jll_ring_road_none.html | 2026-10-16T18:03:58.441579+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/019_open_data_warrants_none.json | 2026-10-16T18:03:58.620948+00:00 |
| nys_tax_warrant | taxpayer names for 'LIFETIME CONCRETE' (none) | evidence/nys_tax_warrant/020_taxpayer_names_for_lifetime_concrete_non.html | 2026-10-16T18:03:58.701163+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/022_open_data_warrants_none.json | 2026-10-16T18:03:58.939177+00:00 |
| nys_tax_warrant | taxpayer names for 'P & T CONTRACTING' (none) | evidence/nys_tax_warrant/021_taxpayer_names_for_p_t_contracting_none.html | 2026-10-16T18:03:58.763997+00:00 |
| nys_tax_warrant | taxpayer names for 'P AND T CONTRACTING' | evidence/nys_tax_warrant/023_taxpayer_names_for_p_and_t_contracting.html | 2026-10-16T18:04:01.643002+00:00 |
| nys_tax_warrant | taxpayer names for 'P&T CONTRACTING' | evidence/nys_tax_warrant/024_taxpayer_names_for_p_t_contracting.html | 2026-10-16T18:04:01.946763+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/025_open_data_warrants_none.json | 2026-10-16T18:04:02.144194+00:00 |
| nys_ucc | UCC federal tax lien search: P & T II CONTRACTING | evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png | 2026-10-16T18:02:46.670787+00:00 |
| nys_ucc | UCC federal tax lien search: P & T II CONTRACTING | evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html | 2026-10-16T18:02:46.671849+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T II CONTRACTING | evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png | 2026-10-16T18:02:49.684138+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T II CONTRACTING | evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html | 2026-10-16T18:02:49.685285+00:00 |
| nys_ucc | UCC federal tax lien search: PEREIRA, LENNY | evidence/nys_ucc/005_ucc_federal_tax_lien_search_pereira_lenn.png | 2026-10-16T18:02:54.215384+00:00 |
| nys_ucc | UCC federal tax lien search: PEREIRA, LENNY | evidence/nys_ucc/006_ucc_federal_tax_lien_search_pereira_lenn.html | 2026-10-16T18:02:54.216426+00:00 |
| nys_ucc | UCC federal tax lien search: 105 148TH ST | evidence/nys_ucc/007_ucc_federal_tax_lien_search_105_148th_st.png | 2026-10-16T18:04:41.009628+00:00 |
| nys_ucc | UCC federal tax lien search: 105 148TH ST | evidence/nys_ucc/008_ucc_federal_tax_lien_search_105_148th_st.html | 2026-10-16T18:04:41.010900+00:00 |
| nys_ucc | UCC federal tax lien search: 1203 148TH ST | evidence/nys_ucc/009_ucc_federal_tax_lien_search_1203_148th_s.png | 2026-10-16T18:04:45.296578+00:00 |
| nys_ucc | UCC federal tax lien search: 1203 148TH ST | evidence/nys_ucc/010_ucc_federal_tax_lien_search_1203_148th_s.html | 2026-10-16T18:04:45.297665+00:00 |
| nys_ucc | UCC federal tax lien search: 155-22 COHANCY STREET | evidence/nys_ucc/011_ucc_federal_tax_lien_search_155_22_cohan.png | 2026-10-16T18:04:49.413139+00:00 |
| nys_ucc | UCC federal tax lien search: 155-22 COHANCY STREET | evidence/nys_ucc/012_ucc_federal_tax_lien_search_155_22_cohan.html | 2026-10-16T18:04:49.414179+00:00 |
| nys_ucc | UCC federal tax lien search: 5 REMSEN LANE | evidence/nys_ucc/013_ucc_federal_tax_lien_search_5_remsen_lan.png | 2026-10-16T18:04:53.364163+00:00 |
| nys_ucc | UCC federal tax lien search: 5 REMSEN LANE | evidence/nys_ucc/014_ucc_federal_tax_lien_search_5_remsen_lan.html | 2026-10-16T18:04:53.366339+00:00 |
| nys_ucc | UCC federal tax lien search: JLL 93 SOUTH COUNTRY | evidence/nys_ucc/015_ucc_federal_tax_lien_search_jll_93_south.png | 2026-10-16T18:04:58.080102+00:00 |
| nys_ucc | UCC federal tax lien search: JLL 93 SOUTH COUNTRY | evidence/nys_ucc/016_ucc_federal_tax_lien_search_jll_93_south.html | 2026-10-16T18:04:58.081140+00:00 |
| nys_ucc | UCC federal tax lien search: JLL RING ROAD | evidence/nys_ucc/017_ucc_federal_tax_lien_search_jll_ring_roa.png | 2026-10-16T18:05:01.961909+00:00 |
| nys_ucc | UCC federal tax lien search: JLL RING ROAD | evidence/nys_ucc/018_ucc_federal_tax_lien_search_jll_ring_roa.html | 2026-10-16T18:05:01.962951+00:00 |
| nys_ucc | UCC federal tax lien search: LIFETIME CONCRETE | evidence/nys_ucc/019_ucc_federal_tax_lien_search_lifetime_con.png | 2026-10-16T18:05:06.196745+00:00 |
| nys_ucc | UCC federal tax lien search: LIFETIME CONCRETE | evidence/nys_ucc/020_ucc_federal_tax_lien_search_lifetime_con.html | 2026-10-16T18:05:06.197955+00:00 |
| nys_ucc | UCC federal tax lien search: P & T CONTRACTING | evidence/nys_ucc/021_ucc_federal_tax_lien_search_p_t_contract.png | 2026-10-16T18:05:10.161403+00:00 |
| nys_ucc | UCC federal tax lien search: P & T CONTRACTING | evidence/nys_ucc/022_ucc_federal_tax_lien_search_p_t_contract.html | 2026-10-16T18:05:10.162492+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T CONTRACTING | evidence/nys_ucc/023_ucc_federal_tax_lien_search_p_and_t_cont.png | 2026-10-16T18:05:13.378384+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T CONTRACTING | evidence/nys_ucc/024_ucc_federal_tax_lien_search_p_and_t_cont.html | 2026-10-16T18:05:13.379750+00:00 |
| nys_dol_debarment | dolSearch P & T II CONTRACTING | evidence/nys_dol_debarment/001_dolsearch_p_t_ii_contracting.html | 2026-10-16T18:01:44.606927+00:00 |
| nys_dol_debarment | wcbSearch P & T II CONTRACTING | evidence/nys_dol_debarment/002_wcbsearch_p_t_ii_contracting.html | 2026-10-16T18:01:44.740838+00:00 |
| nys_dol_debarment | dolSearch P AND T II CONTRACTING | evidence/nys_dol_debarment/003_dolsearch_p_and_t_ii_contracting.html | 2026-10-16T18:01:44.812704+00:00 |
| nys_dol_debarment | wcbSearch P AND T II CONTRACTING | evidence/nys_dol_debarment/004_wcbsearch_p_and_t_ii_contracting.html | 2026-10-16T18:01:44.868795+00:00 |
| nys_dol_debarment | dolSearch P&T II CONTRACTING | evidence/nys_dol_debarment/005_dolsearch_p_t_ii_contracting.html | 2026-10-16T18:01:45.016990+00:00 |
| nys_dol_debarment | wcbSearch P&T II CONTRACTING | evidence/nys_dol_debarment/006_wcbsearch_p_t_ii_contracting.html | 2026-10-16T18:01:45.072340+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/007_eo192_non_responsible_contractors.json | 2026-10-16T18:01:46.184209+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/008_dol_contractor_registry.json | 2026-10-16T18:01:46.377540+00:00 |
| nys_dol_debarment | dolSearch 105 148TH ST | evidence/nys_dol_debarment/009_dolsearch_105_148th_st.html | 2026-10-16T18:03:48.869007+00:00 |
| nys_dol_debarment | wcbSearch 105 148TH ST | evidence/nys_dol_debarment/010_wcbsearch_105_148th_st.html | 2026-10-16T18:03:48.926071+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/011_eo192_non_responsible_contractors.json | 2026-10-16T18:03:49.032469+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/012_dol_contractor_registry.json | 2026-10-16T18:03:49.235880+00:00 |
| nys_dol_debarment | dolSearch 1203 148TH ST | evidence/nys_dol_debarment/013_dolsearch_1203_148th_st.html | 2026-10-16T18:03:49.367984+00:00 |
| nys_dol_debarment | wcbSearch 1203 148TH ST | evidence/nys_dol_debarment/014_wcbsearch_1203_148th_st.html | 2026-10-16T18:03:49.427160+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/015_eo192_non_responsible_contractors.json | 2026-10-16T18:03:49.634168+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/016_dol_contractor_registry.json | 2026-10-16T18:03:49.778783+00:00 |
| nys_dol_debarment | dolSearch 155-22 COHANCY STREET | evidence/nys_dol_debarment/017_dolsearch_155_22_cohancy_street.html | 2026-10-16T18:03:49.981426+00:00 |
| nys_dol_debarment | wcbSearch 155-22 COHANCY STREET | evidence/nys_dol_debarment/018_wcbsearch_155_22_cohancy_street.html | 2026-10-16T18:03:50.038231+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/019_eo192_non_responsible_contractors.json | 2026-10-16T18:03:50.151128+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/020_dol_contractor_registry.json | 2026-10-16T18:03:50.269917+00:00 |
| nys_dol_debarment | dolSearch 5 REMSEN LANE | evidence/nys_dol_debarment/021_dolsearch_5_remsen_lane.html | 2026-10-16T18:03:50.403598+00:00 |
| nys_dol_debarment | wcbSearch 5 REMSEN LANE | evidence/nys_dol_debarment/022_wcbsearch_5_remsen_lane.html | 2026-10-16T18:03:50.461602+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/023_eo192_non_responsible_contractors.json | 2026-10-16T18:03:50.627869+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/024_dol_contractor_registry.json | 2026-10-16T18:03:50.746099+00:00 |
| nys_dol_debarment | dolSearch JLL 93 SOUTH COUNTRY | evidence/nys_dol_debarment/025_dolsearch_jll_93_south_country.html | 2026-10-16T18:03:50.959517+00:00 |
| nys_dol_debarment | wcbSearch JLL 93 SOUTH COUNTRY | evidence/nys_dol_debarment/026_wcbsearch_jll_93_south_country.html | 2026-10-16T18:03:51.016235+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/027_eo192_non_responsible_contractors.json | 2026-10-16T18:03:51.151060+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/028_dol_contractor_registry.json | 2026-10-16T18:03:51.318044+00:00 |
| nys_dol_debarment | dolSearch JLL RING ROAD | evidence/nys_dol_debarment/029_dolsearch_jll_ring_road.html | 2026-10-16T18:03:51.450757+00:00 |
| nys_dol_debarment | wcbSearch JLL RING ROAD | evidence/nys_dol_debarment/030_wcbsearch_jll_ring_road.html | 2026-10-16T18:03:51.511768+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/031_eo192_non_responsible_contractors.json | 2026-10-16T18:03:51.770001+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/032_dol_contractor_registry.json | 2026-10-16T18:03:51.938429+00:00 |
| nys_dol_debarment | dolSearch LIFETIME CONCRETE | evidence/nys_dol_debarment/033_dolsearch_lifetime_concrete.html | 2026-10-16T18:03:52.067952+00:00 |
| nys_dol_debarment | wcbSearch LIFETIME CONCRETE | evidence/nys_dol_debarment/034_wcbsearch_lifetime_concrete.html | 2026-10-16T18:03:52.124706+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/035_eo192_non_responsible_contractors.json | 2026-10-16T18:03:52.242564+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/036_dol_contractor_registry.json | 2026-10-16T18:03:52.427324+00:00 |
| nys_dol_debarment | dolSearch P & T CONTRACTING | evidence/nys_dol_debarment/037_dolsearch_p_t_contracting.html | 2026-10-16T18:03:52.563816+00:00 |
| nys_dol_debarment | wcbSearch P & T CONTRACTING | evidence/nys_dol_debarment/038_wcbsearch_p_t_contracting.html | 2026-10-16T18:03:52.621938+00:00 |
| nys_dol_debarment | dolSearch P AND T CONTRACTING | evidence/nys_dol_debarment/039_dolsearch_p_and_t_contracting.html | 2026-10-16T18:03:52.696693+00:00 |
| nys_dol_debarment | wcbSearch P AND T CONTRACTING | evidence/nys_dol_debarment/040_wcbsearch_p_and_t_contracting.html | 2026-10-16T18:03:52.754660+00:00 |
| nys_dol_debarment | dolSearch P&T CONTRACTING | evidence/nys_dol_debarment/041_dolsearch_p_t_contracting.html | 2026-10-16T18:03:52.825392+00:00 |
| nys_dol_debarment | wcbSearch P&T CONTRACTING | evidence/nys_dol_debarment/042_wcbsearch_p_t_contracting.html | 2026-10-16T18:03:52.882699+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/043_eo192_non_responsible_contractors.json | 2026-10-16T18:03:53.013481+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/044_dol_contractor_registry.json | 2026-10-16T18:03:53.127212+00:00 |
| nyc_sca | SCA vendor_name like_any (6 variants) | evidence/nyc_sca/001_sca_vendor_name_like_any_6_variants.json | 2026-10-16T18:01:43.517704+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/002_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:28.638326+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/006_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:43.812072+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/003_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:37.811255+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/004_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:37.955891+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/005_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:38.244677+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/010_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:53.236526+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/007_sca_vendor_name_like_any_1_variants.json | 2026-10-16T18:03:43.934394+00:00 |
| nyc_sca | SCA vendor_name contains safety net (LIFETIME) | evidence/nyc_sca/008_sca_vendor_name_contains_safety_net_life.json | 2026-10-16T18:03:44.052014+00:00 |
| nyc_sca | SCA vendor_name like_any (3 variants) | evidence/nyc_sca/009_sca_vendor_name_like_any_3_variants.json | 2026-10-16T18:03:47.721191+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/001_acris_personal_property_parties_search.json | 2026-10-16T18:01:33.897614+00:00 |
| nyc_acris | acris master records for matched documents | evidence/nyc_acris/002_acris_master_records_for_matched_documen.json | 2026-10-16T18:01:34.228073+00:00 |
| nyc_acris | acris all parties for matched documents | evidence/nyc_acris/003_acris_all_parties_for_matched_documents.json | 2026-10-16T18:01:34.437208+00:00 |
| nyc_acris | acris document type code table | evidence/nyc_acris/005_acris_document_type_code_table.json | 2026-10-16T18:01:47.476905+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/004_acris_personal_property_parties_search.json | 2026-10-16T18:01:43.274469+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/006_acris_personal_property_parties_search.json | 2026-10-16T18:02:56.339683+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/008_acris_personal_property_parties_search.json | 2026-10-16T18:02:56.818889+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/013_acris_personal_property_parties_search.json | 2026-10-16T18:02:59.347194+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/007_acris_personal_property_parties_search.json | 2026-10-16T18:02:56.768308+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/015_acris_personal_property_parties_search.json | 2026-10-16T18:03:07.980694+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/009_acris_personal_property_parties_search.json | 2026-10-16T18:02:56.898799+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/014_acris_personal_property_parties_search.json | 2026-10-16T18:03:05.485576+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/010_acris_personal_property_parties_search.json | 2026-10-16T18:02:57.102835+00:00 |
| nyc_acris | acris master records for matched documents | evidence/nyc_acris/011_acris_master_records_for_matched_documen.json | 2026-10-16T18:02:57.288891+00:00 |
| nyc_acris | acris all parties for matched documents | evidence/nyc_acris/012_acris_all_parties_for_matched_documents.json | 2026-10-16T18:02:57.515414+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (6 variants) | evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:01:34.230273+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (6 variants) | evidence/nyc_oath_ecb/002_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:01:34.504219+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (3 variants) | evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:01:48.464221+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/004_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:13.593832+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/005_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:03:17.010577+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/006_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:17.199588+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/007_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:03:17.404797+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/018_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:04:29.078856+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/019_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:04:29.222914+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/008_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:18.245851+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/009_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:03:20.566727+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/010_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:23.763672+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/011_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:03:27.687611+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/014_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:28.303859+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/015_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:03:28.494624+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/012_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:27.854349+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/016_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:03:37.475073+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (3 variants) | evidence/nyc_oath_ecb/013_oath_hearings_jz4z_kudi_respondent_last.json | 2026-10-16T18:03:28.249352+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (3 variants) | evidence/nyc_oath_ecb/017_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-10-16T18:04:00.572920+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/001_dob_disciplinary_no_results.json | 2026-10-16T18:01:33.843575+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'CONTRACTING' | evidence/nyc_dob_disciplinary/002_dob_disciplinary_contains_fallback_on_co.json | 2026-10-16T18:01:34.006276+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/003_dob_disciplinary_no_results.json | 2026-10-16T18:01:46.183983+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'PEREIRA', no results | evidence/nyc_dob_disciplinary/004_dob_disciplinary_contains_fallback_on_pe.json | 2026-10-16T18:01:46.354829+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/005_dob_disciplinary_no_results.json | 2026-10-16T18:02:57.648886+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/008_dob_disciplinary_no_results.json | 2026-10-16T18:03:09.801840+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/015_dob_disciplinary_no_results.json | 2026-10-16T18:03:15.016998+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'COHANCY', no results | evidence/nyc_dob_disciplinary/018_dob_disciplinary_contains_fallback_on_co.json | 2026-10-16T18:03:28.062261+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/006_dob_disciplinary_no_results.json | 2026-10-16T18:03:05.708081+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'REMSEN', no results | evidence/nyc_dob_disciplinary/012_dob_disciplinary_contains_fallback_on_re.json | 2026-10-16T18:03:12.998660+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/007_dob_disciplinary_no_results.json | 2026-10-16T18:03:08.160038+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'SOUTH', no results | evidence/nyc_dob_disciplinary/017_dob_disciplinary_contains_fallback_on_so.json | 2026-10-16T18:03:18.534583+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/009_dob_disciplinary_no_results.json | 2026-10-16T18:03:09.945769+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'RING' | evidence/nyc_dob_disciplinary/010_dob_disciplinary_contains_fallback_on_ri.json | 2026-10-16T18:03:10.091336+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/011_dob_disciplinary_no_results.json | 2026-10-16T18:03:10.229444+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'LIFETIME', no results | evidence/nyc_dob_disciplinary/016_dob_disciplinary_contains_fallback_on_li.json | 2026-10-16T18:03:18.052914+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/013_dob_disciplinary_no_results.json | 2026-10-16T18:03:13.147870+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'CONTRACTING' | evidence/nyc_dob_disciplinary/014_dob_disciplinary_contains_fallback_on_co.json | 2026-10-16T18:03:13.404329+00:00 |
| sam | frontend search 'P & T II CONTRACTING' page 0 | evidence/sam/001_frontend_search_p_t_ii_contracting_page.json | 2026-10-16T18:01:50.874828+00:00 |
| sam | frontend search 'P AND T II CONTRACTING' page 0 | evidence/sam/002_frontend_search_p_and_t_ii_contracting_p.json | 2026-10-16T18:01:50.965296+00:00 |
| sam | frontend search 'P&T II CONTRACTING' page 0 | evidence/sam/004_frontend_search_p_t_ii_contracting_page.json | 2026-10-16T18:01:51.041434+00:00 |
| sam | frontend search 'PEREIRA, LENNY' page 0 | evidence/sam/003_frontend_search_pereira_lenny_page_0.json | 2026-10-16T18:01:51.005051+00:00 |
| sam | frontend search 'PEREIRA LENNY' page 0 | evidence/sam/005_frontend_search_pereira_lenny_page_0.json | 2026-10-16T18:01:51.089684+00:00 |
| sam | frontend search 'LENNY PEREIRA' page 0 | evidence/sam/006_frontend_search_lenny_pereira_page_0.json | 2026-10-16T18:01:51.170788+00:00 |
| sam | frontend search '105 148TH ST' page 0 | evidence/sam/007_frontend_search_105_148th_st_page_0.json | 2026-10-16T18:04:02.272106+00:00 |
| sam | frontend search '1203 148TH ST' page 0 | evidence/sam/008_frontend_search_1203_148th_st_page_0.json | 2026-10-16T18:04:02.349814+00:00 |
| sam | frontend search '155-22 COHANCY STREET' page 0 | evidence/sam/009_frontend_search_155_22_cohancy_street_pa.json | 2026-10-16T18:04:02.430425+00:00 |
| sam | frontend search '5 REMSEN LANE' page 0 | evidence/sam/010_frontend_search_5_remsen_lane_page_0.json | 2026-10-16T18:04:02.508209+00:00 |
| sam | frontend search 'JLL 93 SOUTH COUNTRY' page 0 | evidence/sam/011_frontend_search_jll_93_south_country_pag.json | 2026-10-16T18:04:02.585466+00:00 |
| sam | frontend search 'JLL RING ROAD' page 0 | evidence/sam/012_frontend_search_jll_ring_road_page_0.json | 2026-10-16T18:04:02.689096+00:00 |
| sam | frontend search 'LIFETIME CONCRETE' page 0 | evidence/sam/013_frontend_search_lifetime_concrete_page_0.json | 2026-10-16T18:04:02.770562+00:00 |
| sam | frontend search 'P & T CONTRACTING' page 0 | evidence/sam/014_frontend_search_p_t_contracting_page_0.json | 2026-10-16T18:04:02.860234+00:00 |
| sam | frontend search 'P AND T CONTRACTING' page 0 | evidence/sam/015_frontend_search_p_and_t_contracting_page.json | 2026-10-16T18:04:02.940522+00:00 |
| sam | frontend search 'P&T CONTRACTING' page 0 | evidence/sam/016_frontend_search_p_t_contracting_page_0.json | 2026-10-16T18:04:03.019345+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/001_get_denied_companies_page_status_200.html | 2026-10-16T18:01:33.721622+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/002_get_denied_companies_page_status_200.html | 2026-10-16T18:02:54.810553+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/007_get_denied_companies_page_status_200.html | 2026-10-16T18:02:55.624623+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/008_get_denied_companies_page_status_200.html | 2026-10-16T18:02:55.624820+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/009_get_denied_companies_page_status_200.html | 2026-10-16T18:02:55.676779+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/003_get_denied_companies_page_status_200.html | 2026-10-16T18:02:54.899321+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/004_get_denied_companies_page_status_200.html | 2026-10-16T18:02:54.981060+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/005_get_denied_companies_page_status_200.html | 2026-10-16T18:02:55.063069+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/006_get_denied_companies_page_status_200.html | 2026-10-16T18:02:55.149978+00:00 |
| affiliates | same process agent: LENNY PEREIRA | evidence/affiliates/001_same_process_agent_lenny_pereira.json | 2026-10-16T18:02:54.354060+00:00 |
| affiliates | same process address: 10617 153rd Street | evidence/affiliates/002_same_process_address_10617_153rd_street.json | 2026-10-16T18:02:54.607923+00:00 |
| affiliates | principal Lenny Pereira | evidence/affiliates/003_principal_lenny_pereira.json | 2026-10-16T18:02:54.755567+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/001_dob_bis_general_contractor_search_busine.png | 2026-10-16T18:01:58.417507+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/002_dob_bis_general_contractor_search_busine.html | 2026-10-16T18:01:58.419046+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/003_dob_bis_general_contractor_search_busine.png | 2026-10-16T18:02:25.727453+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/004_dob_bis_general_contractor_search_busine.html | 2026-10-16T18:02:25.728386+00:00 |
