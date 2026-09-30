# Vendor Integrity Check Report

**Subject:** P & T II Contracting Corp.
**Address:** 106-17 153rd St, Jamaica, NY
**Variants searched:** P & T II CONTRACTING, P AND T II CONTRACTING, P&T II CONTRACTING, P & T 2 CONTRACTING, P AND T 2 CONTRACTING, P&T2 CONTRACTING
**Run:** 2026-09-23T16:16:15.499676+00:00  ·  vic 0.1.0

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
| NYS Department of State, Division of Corporations | ok | 3.1 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 3.7 |
| NYS Department of State UCC and federal tax lien search | ok | 16.5 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 3.7 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.3 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 3.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.6 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 2.3 |
| US Department of Labor OSHA establishment inspections | ok | 1.7 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 1.5 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.6 |
| Affiliate discovery (NYS DOS) | ok | 0.4 |
| NYC Department of Buildings BIS skilled trades licence search | failed: DOB BIS returned Access Denied (Akamai bot protection); licence status must be verified manually | 32.5 |
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
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| NYS Department of State, Division of Corporations | ok | 5.1 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.6 |
| NYS Department of State UCC and federal tax lien search | ok | 4.7 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 3.0 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.2 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 1.4 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 1.2 |
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
| 2016-10-08 | 35188614J | LENNY PEREIRA | RESOLVE | $800.00 | DOB ECB violation 35188614J issued 2016-10-08, Construction, AC 28-204.4 FAIL TO COMPLY W/COMMISSIONER ORDER TO FILE CERT OF CORRECTION W/DOB, penalty $800.00, RESOLVE | [nyc_oath_ecb-003](evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json) |

_5 older records (2016 to 2016) not shown under the ten-year rule; see run.json_

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
| NYS Department of State, Division of Corporations | ok | 0.7 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.6 |
| NYS Department of State UCC and federal tax lien search | ok | 11.8 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 2.0 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.3 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | ok | 1.4 |
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
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 8 records, 2 adverse, 0 open (6 to review) | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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

### Needs Review
| Source | Date | Record ID | Matched Name | Score | Reasons |
| --- | --- | --- | --- | --- | --- |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 039158973J | 105 148TH ST LLC ATTN GIL G | 0.60 | record name extends the subject: 'LLC ATTN GIL G' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 039158994Z | 105 148TH ST LLC ATTN GIL G | 0.60 | record name extends the subject: 'LLC ATTN GIL G' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 039158974L | 105 148TH ST LLC ATTN GIL G | 0.60 | record name extends the subject: 'LLC ATTN GIL G' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 39158994Z | 105 148TH ST LLC ATTN GIL | 0.60 | record name extends the subject: 'LLC ATTN GIL' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 39158973J | 105 148TH ST LLC ATTN GIL | 0.60 | record name extends the subject: 'LLC ATTN GIL' |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2025-09-02 | 39158974L | 105 148TH ST LLC ATTN GIL | 0.60 | record name extends the subject: 'LLC ATTN GIL' |

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2019-01-10 | 5472481 | 105 148TH ST., LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2019-01-10, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-009](evidence/nys_dos/009_inquiry_105_148th_st.json), [nys_dos-010](evidence/nys_dos/010_open_data_5472481.json), [nys_dos-011](evidence/nys_dos/011_status_history_5472481.json), [nys_dos-012](evidence/nys_dos/012_prior_names_5472481.json) |

## Subject: 1203 148TH ST., LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 1.6 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.6 |
| NYS Department of State UCC and federal tax lien search | ok | 3.9 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 2.0 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.4 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.4 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | ok | 1.4 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.3 |
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
| NYC OATH hearings (ECB) and DOB-issued ECB violations | 2 records, 2 adverse, 1 open | OATH Hearings Division case status (all agencies) and DOB-issued ECB summonses |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | No records | DOB Disciplinary Actions dataset on NYC Open Data (ndq3-kuef), mirrors the DOB web list |
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### NYC OATH hearings (ECB) and DOB-issued ECB violations (nyc_oath_ecb)

##### Open
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2026-09-03 | 046995862Z | 1203 148TH ST LLC | NEW ISSUANCE | $50.00 | SANITATION OTHERS summons 046995862Z, 2026-09-03, IMPROPER RECEPTACLE FAILURE TO CONTAINERIZE - RESIDENTIAL 1ST, penalty $50.00, NEW ISSUANCE | [nyc_oath_ecb-006](evidence/nyc_oath_ecb/006_oath_hearings_jz4z_kudi_respondent_last.json) |

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2020-01-02 | 046395587Y | 1203 148TH ST LLC | PAID IN FULL | $100.00 | DOS - ENFORCEMENT AGENTS summons 046395587Y, 2020-01-02, LOOSE RUBBISH, penalty $100.00, PAID IN FULL | [nyc_oath_ecb-006](evidence/nyc_oath_ecb/006_oath_hearings_jz4z_kudi_respondent_last.json) |

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2018-09-06 | 5405252 | 1203 148TH ST., LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-09-06, Active; process agent LENNY PEREIRA, 106-17 153 STREET, JAMAICA NY | [nys_dos-016](evidence/nys_dos/016_inquiry_1203_148th_st.json), [nys_dos-018](evidence/nys_dos/018_open_data_5405252.json), [nys_dos-020](evidence/nys_dos/020_status_history_5405252.json), [nys_dos-023](evidence/nys_dos/023_prior_names_5405252.json) |

## Subject: 155-22 COHANCY STREET LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.7 |
| NYS Department of State UCC and federal tax lien search | ok | 4.3 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 1.8 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.1 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.6 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.4 |
| US Department of Labor OSHA establishment inspections | ok | 1.2 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.4 |
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
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2014-12-17 | 4681307 | 155-22 COHANCY STREET LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Suffolk County, filed 2014-12-17, Active; process agent LENNY PEREIRA, 6 TIMBER CROFT WAY, SMITHTOWN NY | [nys_dos-013](evidence/nys_dos/013_inquiry_155_22_cohancy_street.json), [nys_dos-014](evidence/nys_dos/014_open_data_4681307.json), [nys_dos-015](evidence/nys_dos/015_status_history_4681307.json), [nys_dos-017](evidence/nys_dos/017_prior_names_4681307.json) |

## Subject: 5 REMSEN LANE, LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 1.6 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 1.6 |
| NYS Department of State UCC and federal tax lien search | ok | 3.9 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 3.0 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.3 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.3 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.4 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | ok | 1.2 |
| SAM.gov exclusions (federal debarment and suspension) | ok | 0.1 |
| NYC Business Integrity Commission trade waste denied companies | ok | 1.4 |
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
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2018-11-15 | 5443980 | 5 REMSEN LANE, LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-11-15, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-027](evidence/nys_dos/027_inquiry_5_remsen_lane.json), [nys_dos-032](evidence/nys_dos/032_open_data_5443980.json), [nys_dos-036](evidence/nys_dos/036_status_history_5443980.json), [nys_dos-040](evidence/nys_dos/040_prior_names_5443980.json) |

## Subject: JLL 93 SOUTH COUNTRY LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 1.6 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.3 |
| NYS Department of State UCC and federal tax lien search | ok | 4.4 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.6 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.4 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | ok | 1.3 |
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
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2018-05-01 | 5332681 | JLL 93 SOUTH COUNTRY LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-05-01, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-031](evidence/nys_dos/031_inquiry_jll_93_south_country.json), [nys_dos-034](evidence/nys_dos/034_open_data_5332681.json), [nys_dos-037](evidence/nys_dos/037_status_history_5332681.json), [nys_dos-039](evidence/nys_dos/039_prior_names_5332681.json) |

## Subject: JLL RING ROAD LLC (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.5 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.3 |
| NYS Department of State UCC and federal tax lien search | ok | 11.8 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.6 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.2 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.3 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.2 |
| US Department of Labor OSHA establishment inspections | ok | 1.3 |
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
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2018-05-01 | 5332686 | JLL RING ROAD LLC | Active |  | DOMESTIC LIMITED LIABILITY COMPANY, Queens County, filed 2018-05-01, Active; process agent LENNY PEREIRA, 106-17 153RD STREET, JAMAICA NY | [nys_dos-019](evidence/nys_dos/019_inquiry_jll_ring_road.json), [nys_dos-021](evidence/nys_dos/021_open_data_5332686.json), [nys_dos-022](evidence/nys_dos/022_status_history_5332686.json), [nys_dos-024](evidence/nys_dos/024_prior_names_5332686.json) |

## Subject: LIFETIME CONCRETE, INC. (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 0.6 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 0.5 |
| NYS Department of State UCC and federal tax lien search | ok | 4.1 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.6 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.4 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.2 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.3 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | ok | 2.8 |
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
| US Department of Labor OSHA establishment inspections | 1 records, 1 adverse, 0 open | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
| SAM.gov exclusions (federal debarment and suspension) | No records | SAM.gov active exclusions, all classifications (firm, individual, special entity) |
| NYC Business Integrity Commission trade waste denied companies | No records | BIC list of companies denied a trade waste licence or registration |
| NYS Unified Court System, County Clerk filing and JDLS search (New York County) | No records | New York County Clerk civil filing index and JDLS judgment search, including judgments where the NYS Commissioner of Labor is a party |

### Findings
#### US Department of Labor OSHA establishment inspections (osha)

##### Open
_None._

##### Resolved
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2021-10-29 | 1561038.015 | Lifetime Concrete, Llc | CLOSED | $1,641.00 | Inspection 1561038.015 opened 2021-10-29, Allentown Area Office, Referral, 1 serious violations, current penalty $1,641, CLOSED 2022-01-28 | [osha-012](evidence/osha/012_search_lifetime_concrete.html), [osha-015](evidence/osha/015_detail_1561038_015.html) |

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2003-06-03 | 2914250 | LIFETIME CONCRETE, INC. | Active |  | DOMESTIC BUSINESS CORPORATION, Queens County, filed 2003-06-03, Active; process agent LIFETIME CONCRETE, INC., 106-17 153RD STREET, JAMAICA NY | [nys_dos-025](evidence/nys_dos/025_inquiry_lifetime_concrete.json), [nys_dos-028](evidence/nys_dos/028_open_data_2914250.json), [nys_dos-030](evidence/nys_dos/030_status_history_2914250.json), [nys_dos-035](evidence/nys_dos/035_prior_names_2914250.json) |

## Subject: P & T CONTRACTING CORP. (affiliate)

### Source Status
| Source | Status | Elapsed (s) |
| --- | --- | --- |
| NYS Department of State, Division of Corporations | ok | 1.0 |
| NYS Department of Taxation and Finance tax warrants (DOS notice system and Open Data) | ok | 2.1 |
| NYS Department of State UCC and federal tax lien search | ok | 7.3 |
| NYS DOL and WCB debarment lists, EO-192 non-responsible entities, DOL contractor registry | ok | 0.9 |
| NYC School Construction Authority disqualified, ineligible and suspended firms | ok | 0.1 |
| NYC Department of Finance ACRIS personal property (UCC and federal liens) | ok | 0.9 |
| NYC OATH hearings (ECB) and DOB-issued ECB violations | ok | 0.4 |
| NYC Department of Buildings disciplinary actions and voluntary surrenders | ok | 0.3 |
| US Department of Labor OSHA establishment inspections | ok | 1.3 |
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
| US Department of Labor OSHA establishment inspections | No records | OSHA IMIS establishment search, all states, inspections opened within the configured look-back window (default 5 years) |
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
| 2017-06-19 | 0196156878 | P AND T CONTRACTING CORP | PAID IN FULL | $1,200.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0196156878, 2017-06-19, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $1,200.00, PAID IN FULL | [nyc_oath_ecb-016](evidence/nyc_oath_ecb/016_oath_hearings_jz4z_kudi_respondent_last.json) |
| 2017-06-15 | 0196156804 | P AND T CONTRACTING CORP | PAID IN FULL | $3,600.00 | NYPD TRANSPORT INTELLIGENCE DI summons 0196156804, 2017-06-15, FAILURE TO COMPLY WITH THE TERMS AND CONDITIONS OF DOT PERMITS, penalty $3,600.00, PAID IN FULL | [nyc_oath_ecb-016](evidence/nyc_oath_ecb/016_oath_hearings_jz4z_kudi_respondent_last.json) |

_6 older records (2001 to 2009) not shown under the ten-year rule; see run.json_

### Needs Review
_None._

### Related Non-Adverse Filings
#### NYS Department of State, Division of Corporations (nys_dos)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 1997-11-21 | 2201426 | P & T CONTRACTING CORP. | Active |  | DOMESTIC BUSINESS CORPORATION, Queens County, filed 1997-11-21, Active; process agent P & T CONTRACTING CORP., POST OFFICE BOX 560215, COLLEGE POINT NY | [nys_dos-026](evidence/nys_dos/026_inquiry_p_t_contracting.json), [nys_dos-038](evidence/nys_dos/038_open_data_2201426.json), [nys_dos-041](evidence/nys_dos/041_status_history_2201426.json), [nys_dos-042](evidence/nys_dos/042_prior_names_2201426.json) |

#### NYC Department of Finance ACRIS personal property (UCC and federal liens) (nyc_acris)
| Date | Record ID | Matched Name | Status | Amount | Summary | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| 2001-05-16 | FT_4660007659966 | P & T CONTRACTING CORP | INITIAL UCC1 |  | INITIAL UCC1 recorded 2001-05-16; parties: P & T CONTRACTING CORP (debtor) / H.O. PENN MACHINERYCOMPANY, INC (secured party) / CATERPILLAR FINANCIAL SERVICES CORPORATION (assignee) | [nyc_acris-013](evidence/nyc_acris/013_acris_personal_property_parties_search.json), [nyc_acris-014](evidence/nyc_acris/014_acris_master_records_for_matched_documen.json), [nyc_acris-015](evidence/nyc_acris/015_acris_all_parties_for_matched_documents.json) |
| 2001-04-11 | FT_4030007604403 | P & T CONTRACTING CORP. | INITIAL UCC1 |  | INITIAL UCC1 recorded 2001-04-11; parties: P & T CONTRACTING CORP. (debtor) / NORTH FORK BANK (secured party) | [nyc_acris-013](evidence/nyc_acris/013_acris_personal_property_parties_search.json), [nyc_acris-014](evidence/nyc_acris/014_acris_master_records_for_matched_documen.json), [nyc_acris-015](evidence/nyc_acris/015_acris_all_parties_for_matched_documents.json) |
| 2000-07-26 | FT_4400007267540 | P & T CONTRACTING CORP | INITIAL UCC1 |  | INITIAL UCC1 recorded 2000-07-26; parties: P & T CONTRACTING CORP (debtor) / H.O. PENN MACHINERYCO INC (secured party) / CATERPILLAR FINANCIAL SERVICES CORP (assignee) | [nyc_acris-013](evidence/nyc_acris/013_acris_personal_property_parties_search.json), [nyc_acris-014](evidence/nyc_acris/014_acris_master_records_for_matched_documen.json), [nyc_acris-015](evidence/nyc_acris/015_acris_all_parties_for_matched_documents.json) |

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
| Outstanding federal tax liens were found for P & T II Contracting Corp. between 2014 – 2026 (4 active, 1 inactive/lapsed). | The contractor should be asked to provide proof of satisfaction or a payment/settlement agreement for the liens listed above. [ACCO determination to be entered by staff.] | NYS DOS UCC / Federal Tax Lien |
| Federal tax lien(s) recorded in ACRIS were found for P & T II Contracting Corp. (1, total $42,799.55). | The contractor should be asked to provide proof of satisfaction or a payment/settlement agreement for the liens listed above. [ACCO determination to be entered by staff.] | ACRIS |
| Outstanding ECB violations were found for P & T II Contracting Corp. between 2017 – 2026 (4 summonses; 1 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for principal Lenny Pereira between 2016 – 2017 (6 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for affiliate 105 148TH ST., LLC between 2019 – 2019 (2 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Outstanding ECB violations were found for affiliate 1203 148TH ST., LLC between 2020 – 2026 (2 summonses; 1 open; balance due $50.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| An OSHA inspection dated 2021-10-29 against affiliate LIFETIME CONCRETE, INC. was found (violations, current penalty $1,641.00, CLOSED). | The contractor should be asked to describe the outcome of the inspection and any abatement. [ACCO determination to be entered by staff.] | OSHA |
| Outstanding ECB violations were found for affiliate P & T CONTRACTING CORP. between 2017 – 2017 (2 summonses; 0 open; balance due $0.00). | The contractor should be asked to provide status updates and proof of payment for the violations listed above. [ACCO determination to be entered by staff.] | ECB / OATH |
| Licence status could not be verified automatically for: P & T II Contracting Corp. (NYC DOB BIS Licensing); the search failed and must be repeated by staff. | The contractor should be asked to provide proof of current licensure for the trade(s) listed above. [ACCO determination to be entered by staff.] | Licence verification |
| DDC performed searches on September 23, 2026 on P & T II Contracting Corp., its principal(s) Lenny Pereira, and affiliate(s) 105 148TH ST., LLC, 1203 148TH ST., LLC, 155-22 COHANCY STREET LLC, 5 REMSEN LANE, LLC, JLL 93 SOUTH COUNTRY LLC, JLL RING ROAD LLC, LIFETIME CONCRETE, INC., P & T CONTRACTING CORP. in the following databases: NYS DOS, NYS DTF Tax Warrants, NYS DOL / WCB Debarment, SCA, DOB, SAM, BIC Trade Waste Denied Companies, Affiliate discovery (NYS DOS). No adverse information was found. The following searches could not be completed and must be performed manually: NYC DOB BIS Licensing. The following searches must be performed manually: NYS Courts County Filing / JDLS search (New York County), News search, Lexis Accurint. | N/A | Other Sources |

## Evidence Index
| Source | Description | Path | Captured At |
| --- | --- | --- | --- |
| nys_dos | inquiry P & T II CONTRACTING | evidence/nys_dos/001_inquiry_p_t_ii_contracting.json | 2026-09-23T16:14:09.641492+00:00 |
| nys_dos | inquiry P AND T II CONTRACTING | evidence/nys_dos/002_inquiry_p_and_t_ii_contracting.json | 2026-09-23T16:14:09.764780+00:00 |
| nys_dos | inquiry P&T II CONTRACTING | evidence/nys_dos/003_inquiry_p_t_ii_contracting.json | 2026-09-23T16:14:09.888656+00:00 |
| nys_dos | inquiry P & T 2 CONTRACTING | evidence/nys_dos/004_inquiry_p_t_2_contracting.json | 2026-09-23T16:14:10.011222+00:00 |
| nys_dos | open data 3305836 | evidence/nys_dos/005_open_data_3305836.json | 2026-09-23T16:14:11.050961+00:00 |
| nys_dos | status history 3305836 | evidence/nys_dos/006_status_history_3305836.json | 2026-09-23T16:14:11.161873+00:00 |
| nys_dos | prior names 3305836 | evidence/nys_dos/007_prior_names_3305836.json | 2026-09-23T16:14:11.270463+00:00 |
| nys_dos | officer-of reverse lookup for PEREIRA | evidence/nys_dos/008_officer_of_reverse_lookup_for_pereira.json | 2026-09-23T16:14:13.391623+00:00 |
| nys_dos | inquiry 105 148TH ST | evidence/nys_dos/009_inquiry_105_148th_st.json | 2026-09-23T16:15:14.296422+00:00 |
| nys_dos | open data 5472481 | evidence/nys_dos/010_open_data_5472481.json | 2026-09-23T16:15:14.555527+00:00 |
| nys_dos | status history 5472481 | evidence/nys_dos/011_status_history_5472481.json | 2026-09-23T16:15:14.731233+00:00 |
| nys_dos | prior names 5472481 | evidence/nys_dos/012_prior_names_5472481.json | 2026-09-23T16:15:14.903828+00:00 |
| nys_dos | inquiry 1203 148TH ST | evidence/nys_dos/016_inquiry_1203_148th_st.json | 2026-09-23T16:15:15.238495+00:00 |
| nys_dos | open data 5405252 | evidence/nys_dos/018_open_data_5405252.json | 2026-09-23T16:15:15.399856+00:00 |
| nys_dos | status history 5405252 | evidence/nys_dos/020_status_history_5405252.json | 2026-09-23T16:15:15.575607+00:00 |
| nys_dos | prior names 5405252 | evidence/nys_dos/023_prior_names_5405252.json | 2026-09-23T16:15:15.775280+00:00 |
| nys_dos | inquiry 155-22 COHANCY STREET | evidence/nys_dos/013_inquiry_155_22_cohancy_street.json | 2026-09-23T16:15:14.959424+00:00 |
| nys_dos | open data 4681307 | evidence/nys_dos/014_open_data_4681307.json | 2026-09-23T16:15:15.091477+00:00 |
| nys_dos | status history 4681307 | evidence/nys_dos/015_status_history_4681307.json | 2026-09-23T16:15:15.196728+00:00 |
| nys_dos | prior names 4681307 | evidence/nys_dos/017_prior_names_4681307.json | 2026-09-23T16:15:15.373132+00:00 |
| nys_dos | inquiry 5 REMSEN LANE | evidence/nys_dos/027_inquiry_5_remsen_lane.json | 2026-09-23T16:15:16.011096+00:00 |
| nys_dos | open data 5443980 | evidence/nys_dos/032_open_data_5443980.json | 2026-09-23T16:15:16.160533+00:00 |
| nys_dos | status history 5443980 | evidence/nys_dos/036_status_history_5443980.json | 2026-09-23T16:15:16.384208+00:00 |
| nys_dos | prior names 5443980 | evidence/nys_dos/040_prior_names_5443980.json | 2026-09-23T16:15:16.546343+00:00 |
| nys_dos | inquiry JLL 93 SOUTH COUNTRY | evidence/nys_dos/031_inquiry_jll_93_south_country.json | 2026-09-23T16:15:16.158265+00:00 |
| nys_dos | open data 5332681 | evidence/nys_dos/034_open_data_5332681.json | 2026-09-23T16:15:16.301611+00:00 |
| nys_dos | status history 5332681 | evidence/nys_dos/037_status_history_5332681.json | 2026-09-23T16:15:16.436238+00:00 |
| nys_dos | prior names 5332681 | evidence/nys_dos/039_prior_names_5332681.json | 2026-09-23T16:15:16.541244+00:00 |
| nys_dos | inquiry JLL RING ROAD | evidence/nys_dos/019_inquiry_jll_ring_road.json | 2026-09-23T16:15:15.491003+00:00 |
| nys_dos | open data 5332686 | evidence/nys_dos/021_open_data_5332686.json | 2026-09-23T16:15:15.635718+00:00 |
| nys_dos | status history 5332686 | evidence/nys_dos/022_status_history_5332686.json | 2026-09-23T16:15:15.748662+00:00 |
| nys_dos | prior names 5332686 | evidence/nys_dos/024_prior_names_5332686.json | 2026-09-23T16:15:15.880859+00:00 |
| nys_dos | inquiry LIFETIME CONCRETE | evidence/nys_dos/025_inquiry_lifetime_concrete.json | 2026-09-23T16:15:15.895820+00:00 |
| nys_dos | open data 2914250 | evidence/nys_dos/028_open_data_2914250.json | 2026-09-23T16:15:16.038017+00:00 |
| nys_dos | status history 2914250 | evidence/nys_dos/030_status_history_2914250.json | 2026-09-23T16:15:16.157014+00:00 |
| nys_dos | prior names 2914250 | evidence/nys_dos/035_prior_names_2914250.json | 2026-09-23T16:15:16.359659+00:00 |
| nys_dos | inquiry P & T CONTRACTING | evidence/nys_dos/026_inquiry_p_t_contracting.json | 2026-09-23T16:15:16.009793+00:00 |
| nys_dos | inquiry P AND T CONTRACTING | evidence/nys_dos/029_inquiry_p_and_t_contracting.json | 2026-09-23T16:15:16.132130+00:00 |
| nys_dos | inquiry P&T CONTRACTING | evidence/nys_dos/033_inquiry_p_t_contracting.json | 2026-09-23T16:15:16.255869+00:00 |
| nys_dos | open data 2201426 | evidence/nys_dos/038_open_data_2201426.json | 2026-09-23T16:15:16.441368+00:00 |
| nys_dos | status history 2201426 | evidence/nys_dos/041_status_history_2201426.json | 2026-09-23T16:15:16.605654+00:00 |
| nys_dos | prior names 2201426 | evidence/nys_dos/042_prior_names_2201426.json | 2026-09-23T16:15:16.838366+00:00 |
| nys_tax_warrant | taxpayer names for 'P & T II CONTRACTING' (none) | evidence/nys_tax_warrant/001_taxpayer_names_for_p_t_ii_contracting_no.html | 2026-09-23T16:14:09.880837+00:00 |
| nys_tax_warrant | taxpayer names for 'P AND T II CONTRACTING' (none) | evidence/nys_tax_warrant/002_taxpayer_names_for_p_and_t_ii_contractin.html | 2026-09-23T16:14:11.686723+00:00 |
| nys_tax_warrant | taxpayer names for 'P&T II CONTRACTING' (none) | evidence/nys_tax_warrant/003_taxpayer_names_for_p_t_ii_contracting_no.html | 2026-09-23T16:14:11.976125+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/004_open_data_warrants_none.json | 2026-09-23T16:14:12.147022+00:00 |
| nys_tax_warrant | taxpayer names for 'PEREIRA, LENNY' (none) | evidence/nys_tax_warrant/005_taxpayer_names_for_pereira_lenny_none.html | 2026-09-23T16:14:12.501572+00:00 |
| nys_tax_warrant | taxpayer names for 'PEREIRA LENNY' (none) | evidence/nys_tax_warrant/006_taxpayer_names_for_pereira_lenny_none.html | 2026-09-23T16:14:12.572794+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/007_open_data_warrants_none.json | 2026-09-23T16:14:12.868099+00:00 |
| nys_tax_warrant | taxpayer names for '105 148TH ST' (none) | evidence/nys_tax_warrant/008_taxpayer_names_for_105_148th_st_none.html | 2026-09-23T16:15:17.755321+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/009_open_data_warrants_none.json | 2026-09-23T16:15:17.917489+00:00 |
| nys_tax_warrant | taxpayer names for '1203 148TH ST' (none) | evidence/nys_tax_warrant/010_taxpayer_names_for_1203_148th_st_none.html | 2026-09-23T16:15:17.969032+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/013_open_data_warrants_none.json | 2026-09-23T16:15:18.117005+00:00 |
| nys_tax_warrant | taxpayer names for '155-22 COHANCY STREET' (none) | evidence/nys_tax_warrant/011_taxpayer_names_for_155_22_cohancy_street.html | 2026-09-23T16:15:18.059312+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/015_open_data_warrants_none.json | 2026-09-23T16:15:18.238981+00:00 |
| nys_tax_warrant | taxpayer names for '5 REMSEN LANE' (none) | evidence/nys_tax_warrant/017_taxpayer_names_for_5_remsen_lane_none.html | 2026-09-23T16:15:18.340828+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/020_open_data_warrants_none.json | 2026-09-23T16:15:18.452812+00:00 |
| nys_tax_warrant | taxpayer names for 'JLL 93 SOUTH COUNTRY' (none) | evidence/nys_tax_warrant/012_taxpayer_names_for_jll_93_south_country.html | 2026-09-23T16:15:18.074684+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/014_open_data_warrants_none.json | 2026-09-23T16:15:18.237733+00:00 |
| nys_tax_warrant | taxpayer names for 'JLL RING ROAD' (none) | evidence/nys_tax_warrant/016_taxpayer_names_for_jll_ring_road_none.html | 2026-09-23T16:15:18.257652+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/019_open_data_warrants_none.json | 2026-09-23T16:15:18.431766+00:00 |
| nys_tax_warrant | taxpayer names for 'LIFETIME CONCRETE' (none) | evidence/nys_tax_warrant/021_taxpayer_names_for_lifetime_concrete_non.html | 2026-09-23T16:15:18.530310+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/022_open_data_warrants_none.json | 2026-09-23T16:15:18.722942+00:00 |
| nys_tax_warrant | taxpayer names for 'P & T CONTRACTING' (none) | evidence/nys_tax_warrant/018_taxpayer_names_for_p_t_contracting_none.html | 2026-09-23T16:15:18.385299+00:00 |
| nys_tax_warrant | taxpayer names for 'P AND T CONTRACTING' | evidence/nys_tax_warrant/023_taxpayer_names_for_p_and_t_contracting.html | 2026-09-23T16:15:20.039940+00:00 |
| nys_tax_warrant | taxpayer names for 'P&T CONTRACTING' | evidence/nys_tax_warrant/024_taxpayer_names_for_p_t_contracting.html | 2026-09-23T16:15:20.146320+00:00 |
| nys_tax_warrant | open data warrants (none) | evidence/nys_tax_warrant/025_open_data_warrants_none.json | 2026-09-23T16:15:20.308993+00:00 |
| nys_ucc | UCC federal tax lien search: P & T II CONTRACTING | evidence/nys_ucc/001_ucc_federal_tax_lien_search_p_t_ii_contr.png | 2026-09-23T16:14:51.722061+00:00 |
| nys_ucc | UCC federal tax lien search: P & T II CONTRACTING | evidence/nys_ucc/002_ucc_federal_tax_lien_search_p_t_ii_contr.html | 2026-09-23T16:14:51.723566+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T II CONTRACTING | evidence/nys_ucc/003_ucc_federal_tax_lien_search_p_and_t_ii_c.png | 2026-09-23T16:15:03.022321+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T II CONTRACTING | evidence/nys_ucc/004_ucc_federal_tax_lien_search_p_and_t_ii_c.html | 2026-09-23T16:15:03.023483+00:00 |
| nys_ucc | UCC federal tax lien search: PEREIRA, LENNY | evidence/nys_ucc/005_ucc_federal_tax_lien_search_pereira_lenn.png | 2026-09-23T16:15:07.707422+00:00 |
| nys_ucc | UCC federal tax lien search: PEREIRA, LENNY | evidence/nys_ucc/006_ucc_federal_tax_lien_search_pereira_lenn.html | 2026-09-23T16:15:07.709228+00:00 |
| nys_ucc | UCC federal tax lien search: 105 148TH ST | evidence/nys_ucc/007_ucc_federal_tax_lien_search_105_148th_st.png | 2026-09-23T16:15:34.864549+00:00 |
| nys_ucc | UCC federal tax lien search: 105 148TH ST | evidence/nys_ucc/008_ucc_federal_tax_lien_search_105_148th_st.html | 2026-09-23T16:15:34.865748+00:00 |
| nys_ucc | UCC federal tax lien search: 1203 148TH ST | evidence/nys_ucc/009_ucc_federal_tax_lien_search_1203_148th_s.png | 2026-09-23T16:15:38.752676+00:00 |
| nys_ucc | UCC federal tax lien search: 1203 148TH ST | evidence/nys_ucc/010_ucc_federal_tax_lien_search_1203_148th_s.html | 2026-09-23T16:15:38.754143+00:00 |
| nys_ucc | UCC federal tax lien search: 155-22 COHANCY STREET | evidence/nys_ucc/011_ucc_federal_tax_lien_search_155_22_cohan.png | 2026-09-23T16:15:43.019491+00:00 |
| nys_ucc | UCC federal tax lien search: 155-22 COHANCY STREET | evidence/nys_ucc/012_ucc_federal_tax_lien_search_155_22_cohan.html | 2026-09-23T16:15:43.020762+00:00 |
| nys_ucc | UCC federal tax lien search: 5 REMSEN LANE | evidence/nys_ucc/013_ucc_federal_tax_lien_search_5_remsen_lan.png | 2026-09-23T16:15:46.892683+00:00 |
| nys_ucc | UCC federal tax lien search: 5 REMSEN LANE | evidence/nys_ucc/014_ucc_federal_tax_lien_search_5_remsen_lan.html | 2026-09-23T16:15:46.903408+00:00 |
| nys_ucc | UCC federal tax lien search: JLL 93 SOUTH COUNTRY | evidence/nys_ucc/015_ucc_federal_tax_lien_search_jll_93_south.png | 2026-09-23T16:15:51.297999+00:00 |
| nys_ucc | UCC federal tax lien search: JLL 93 SOUTH COUNTRY | evidence/nys_ucc/016_ucc_federal_tax_lien_search_jll_93_south.html | 2026-09-23T16:15:51.299413+00:00 |
| nys_ucc | UCC federal tax lien search: JLL RING ROAD | evidence/nys_ucc/017_ucc_federal_tax_lien_search_jll_ring_roa.png | 2026-09-23T16:16:03.067847+00:00 |
| nys_ucc | UCC federal tax lien search: JLL RING ROAD | evidence/nys_ucc/018_ucc_federal_tax_lien_search_jll_ring_roa.html | 2026-09-23T16:16:03.069218+00:00 |
| nys_ucc | UCC federal tax lien search: LIFETIME CONCRETE | evidence/nys_ucc/019_ucc_federal_tax_lien_search_lifetime_con.png | 2026-09-23T16:16:07.146808+00:00 |
| nys_ucc | UCC federal tax lien search: LIFETIME CONCRETE | evidence/nys_ucc/020_ucc_federal_tax_lien_search_lifetime_con.html | 2026-09-23T16:16:07.148260+00:00 |
| nys_ucc | UCC federal tax lien search: P & T CONTRACTING | evidence/nys_ucc/021_ucc_federal_tax_lien_search_p_t_contract.png | 2026-09-23T16:16:11.202508+00:00 |
| nys_ucc | UCC federal tax lien search: P & T CONTRACTING | evidence/nys_ucc/022_ucc_federal_tax_lien_search_p_t_contract.html | 2026-09-23T16:16:11.204126+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T CONTRACTING | evidence/nys_ucc/023_ucc_federal_tax_lien_search_p_and_t_cont.png | 2026-09-23T16:16:14.473429+00:00 |
| nys_ucc | UCC federal tax lien search: P AND T CONTRACTING | evidence/nys_ucc/024_ucc_federal_tax_lien_search_p_and_t_cont.html | 2026-09-23T16:16:14.474778+00:00 |
| nys_dol_debarment | dolSearch P & T II CONTRACTING | evidence/nys_dol_debarment/001_dolsearch_p_t_ii_contracting.html | 2026-09-23T16:14:09.862398+00:00 |
| nys_dol_debarment | wcbSearch P & T II CONTRACTING | evidence/nys_dol_debarment/002_wcbsearch_p_t_ii_contracting.html | 2026-09-23T16:14:09.918816+00:00 |
| nys_dol_debarment | dolSearch P AND T II CONTRACTING | evidence/nys_dol_debarment/003_dolsearch_p_and_t_ii_contracting.html | 2026-09-23T16:14:10.083330+00:00 |
| nys_dol_debarment | wcbSearch P AND T II CONTRACTING | evidence/nys_dol_debarment/004_wcbsearch_p_and_t_ii_contracting.html | 2026-09-23T16:14:10.141661+00:00 |
| nys_dol_debarment | dolSearch P&T II CONTRACTING | evidence/nys_dol_debarment/005_dolsearch_p_t_ii_contracting.html | 2026-09-23T16:14:10.312474+00:00 |
| nys_dol_debarment | wcbSearch P&T II CONTRACTING | evidence/nys_dol_debarment/006_wcbsearch_p_t_ii_contracting.html | 2026-09-23T16:14:10.370506+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/007_eo192_non_responsible_contractors.json | 2026-09-23T16:14:11.598088+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/008_dol_contractor_registry.json | 2026-09-23T16:14:11.777028+00:00 |
| nys_dol_debarment | dolSearch 105 148TH ST | evidence/nys_dol_debarment/011_dolsearch_105_148th_st.html | 2026-09-23T16:15:13.212472+00:00 |
| nys_dol_debarment | wcbSearch 105 148TH ST | evidence/nys_dol_debarment/013_wcbsearch_105_148th_st.html | 2026-09-23T16:15:13.266943+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/019_eo192_non_responsible_contractors.json | 2026-09-23T16:15:13.441178+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/021_dol_contractor_registry.json | 2026-09-23T16:15:13.616439+00:00 |
| nys_dol_debarment | dolSearch 1203 148TH ST | evidence/nys_dol_debarment/009_dolsearch_1203_148th_st.html | 2026-09-23T16:15:13.119765+00:00 |
| nys_dol_debarment | wcbSearch 1203 148TH ST | evidence/nys_dol_debarment/010_wcbsearch_1203_148th_st.html | 2026-09-23T16:15:13.176152+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/018_eo192_non_responsible_contractors.json | 2026-09-23T16:15:13.428826+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/022_dol_contractor_registry.json | 2026-09-23T16:15:13.621963+00:00 |
| nys_dol_debarment | dolSearch 155-22 COHANCY STREET | evidence/nys_dol_debarment/012_dolsearch_155_22_cohancy_street.html | 2026-09-23T16:15:13.227142+00:00 |
| nys_dol_debarment | wcbSearch 155-22 COHANCY STREET | evidence/nys_dol_debarment/015_wcbsearch_155_22_cohancy_street.html | 2026-09-23T16:15:13.292849+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/017_eo192_non_responsible_contractors.json | 2026-09-23T16:15:13.412943+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/020_dol_contractor_registry.json | 2026-09-23T16:15:13.529751+00:00 |
| nys_dol_debarment | dolSearch 5 REMSEN LANE | evidence/nys_dol_debarment/014_dolsearch_5_remsen_lane.html | 2026-09-23T16:15:13.278676+00:00 |
| nys_dol_debarment | wcbSearch 5 REMSEN LANE | evidence/nys_dol_debarment/016_wcbsearch_5_remsen_lane.html | 2026-09-23T16:15:13.336587+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/041_eo192_non_responsible_contractors.json | 2026-09-23T16:15:14.656759+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/043_dol_contractor_registry.json | 2026-09-23T16:15:14.838452+00:00 |
| nys_dol_debarment | dolSearch JLL 93 SOUTH COUNTRY | evidence/nys_dol_debarment/023_dolsearch_jll_93_south_country.html | 2026-09-23T16:15:13.654514+00:00 |
| nys_dol_debarment | wcbSearch JLL 93 SOUTH COUNTRY | evidence/nys_dol_debarment/024_wcbsearch_jll_93_south_country.html | 2026-09-23T16:15:13.710237+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/027_eo192_non_responsible_contractors.json | 2026-09-23T16:15:13.847465+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/032_dol_contractor_registry.json | 2026-09-23T16:15:14.099316+00:00 |
| nys_dol_debarment | dolSearch JLL RING ROAD | evidence/nys_dol_debarment/025_dolsearch_jll_ring_road.html | 2026-09-23T16:15:13.829496+00:00 |
| nys_dol_debarment | wcbSearch JLL RING ROAD | evidence/nys_dol_debarment/028_wcbsearch_jll_ring_road.html | 2026-09-23T16:15:13.885449+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/030_eo192_non_responsible_contractors.json | 2026-09-23T16:15:14.033083+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/034_dol_contractor_registry.json | 2026-09-23T16:15:14.204200+00:00 |
| nys_dol_debarment | dolSearch LIFETIME CONCRETE | evidence/nys_dol_debarment/026_dolsearch_lifetime_concrete.html | 2026-09-23T16:15:13.838859+00:00 |
| nys_dol_debarment | wcbSearch LIFETIME CONCRETE | evidence/nys_dol_debarment/029_wcbsearch_lifetime_concrete.html | 2026-09-23T16:15:13.893460+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/031_eo192_non_responsible_contractors.json | 2026-09-23T16:15:14.060617+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/033_dol_contractor_registry.json | 2026-09-23T16:15:14.175904+00:00 |
| nys_dol_debarment | dolSearch P & T CONTRACTING | evidence/nys_dol_debarment/035_dolsearch_p_t_contracting.html | 2026-09-23T16:15:14.301923+00:00 |
| nys_dol_debarment | wcbSearch P & T CONTRACTING | evidence/nys_dol_debarment/036_wcbsearch_p_t_contracting.html | 2026-09-23T16:15:14.359128+00:00 |
| nys_dol_debarment | dolSearch P AND T CONTRACTING | evidence/nys_dol_debarment/037_dolsearch_p_and_t_contracting.html | 2026-09-23T16:15:14.431061+00:00 |
| nys_dol_debarment | wcbSearch P AND T CONTRACTING | evidence/nys_dol_debarment/038_wcbsearch_p_and_t_contracting.html | 2026-09-23T16:15:14.498530+00:00 |
| nys_dol_debarment | dolSearch P&T CONTRACTING | evidence/nys_dol_debarment/039_dolsearch_p_t_contracting.html | 2026-09-23T16:15:14.568436+00:00 |
| nys_dol_debarment | wcbSearch P&T CONTRACTING | evidence/nys_dol_debarment/040_wcbsearch_p_t_contracting.html | 2026-09-23T16:15:14.628668+00:00 |
| nys_dol_debarment | eo192 non-responsible contractors | evidence/nys_dol_debarment/042_eo192_non_responsible_contractors.json | 2026-09-23T16:15:14.761746+00:00 |
| nys_dol_debarment | dol contractor registry | evidence/nys_dol_debarment/044_dol_contractor_registry.json | 2026-09-23T16:15:14.954255+00:00 |
| nyc_sca | SCA vendor_name like_any (6 variants) | evidence/nyc_sca/001_sca_vendor_name_like_any_6_variants.json | 2026-09-23T16:14:08.415689+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/002_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.374142+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/004_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.469021+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/003_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.442663+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/007_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.650986+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/005_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.634230+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/006_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.644425+00:00 |
| nyc_sca | SCA vendor_name like_any (1 variants) | evidence/nyc_sca/008_sca_vendor_name_like_any_1_variants.json | 2026-09-23T16:15:11.669724+00:00 |
| nyc_sca | SCA vendor_name contains safety net (LIFETIME) | evidence/nyc_sca/010_sca_vendor_name_contains_safety_net_life.json | 2026-09-23T16:15:11.845160+00:00 |
| nyc_sca | SCA vendor_name like_any (3 variants) | evidence/nyc_sca/009_sca_vendor_name_like_any_3_variants.json | 2026-09-23T16:15:11.751746+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/001_acris_personal_property_parties_search.json | 2026-09-23T16:14:07.075772+00:00 |
| nyc_acris | acris master records for matched documents | evidence/nyc_acris/002_acris_master_records_for_matched_documen.json | 2026-09-23T16:14:07.298958+00:00 |
| nyc_acris | acris all parties for matched documents | evidence/nyc_acris/003_acris_all_parties_for_matched_documents.json | 2026-09-23T16:14:08.029892+00:00 |
| nyc_acris | acris document type code table | evidence/nyc_acris/005_acris_document_type_code_table.json | 2026-09-23T16:14:08.262615+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/004_acris_personal_property_parties_search.json | 2026-09-23T16:14:08.070370+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/006_acris_personal_property_parties_search.json | 2026-09-23T16:15:08.868034+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/007_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.259720+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/008_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.424180+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/010_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.677446+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/009_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.652502+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/012_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.767477+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/011_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.766391+00:00 |
| nyc_acris | acris personal property parties search | evidence/nyc_acris/013_acris_personal_property_parties_search.json | 2026-09-23T16:15:09.799310+00:00 |
| nyc_acris | acris master records for matched documents | evidence/nyc_acris/014_acris_master_records_for_matched_documen.json | 2026-09-23T16:15:10.408622+00:00 |
| nyc_acris | acris all parties for matched documents | evidence/nyc_acris/015_acris_all_parties_for_matched_documents.json | 2026-09-23T16:15:10.587552+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (6 variants) | evidence/nyc_oath_ecb/001_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:14:07.853624+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (6 variants) | evidence/nyc_oath_ecb/002_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:14:08.013940+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (3 variants) | evidence/nyc_oath_ecb/003_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:14:08.166719+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/004_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:10.585640+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/005_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:10.703277+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/006_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:10.782787+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/010_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.030586+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/009_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:10.956866+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/014_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.179554+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/007_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:10.896063+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/012_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.075148+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/008_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:10.922841+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/011_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.069148+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/013_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:11.160669+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/017_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.301227+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (1 variants) | evidence/nyc_oath_ecb/015_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:11.203754+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (1 variants) | evidence/nyc_oath_ecb/018_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.333046+00:00 |
| nyc_oath_ecb | OATH hearings jz4z-kudi respondent_last_name like_any (3 variants) | evidence/nyc_oath_ecb/016_oath_hearings_jz4z_kudi_respondent_last.json | 2026-09-23T16:15:11.297422+00:00 |
| nyc_oath_ecb | DOB ECB 6bgk-3dad respondent_name like_any (3 variants) | evidence/nyc_oath_ecb/019_dob_ecb_6bgk_3dad_respondent_name_like_a.json | 2026-09-23T16:15:11.475167+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/001_dob_disciplinary_no_results.json | 2026-09-23T16:14:06.914480+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'CONTRACTING' | evidence/nyc_dob_disciplinary/002_dob_disciplinary_contains_fallback_on_co.json | 2026-09-23T16:14:07.450326+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/003_dob_disciplinary_no_results.json | 2026-09-23T16:14:07.914479+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'PEREIRA', no results | evidence/nyc_dob_disciplinary/004_dob_disciplinary_contains_fallback_on_pe.json | 2026-09-23T16:14:08.095350+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/006_dob_disciplinary_no_results.json | 2026-09-23T16:15:09.940009+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/007_dob_disciplinary_no_results.json | 2026-09-23T16:15:10.031098+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/005_dob_disciplinary_no_results.json | 2026-09-23T16:15:09.937113+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'COHANCY', no results | evidence/nyc_dob_disciplinary/009_dob_disciplinary_contains_fallback_on_co.json | 2026-09-23T16:15:10.123605+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/008_dob_disciplinary_no_results.json | 2026-09-23T16:15:10.112266+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'REMSEN', no results | evidence/nyc_dob_disciplinary/012_dob_disciplinary_contains_fallback_on_re.json | 2026-09-23T16:15:10.261274+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/010_dob_disciplinary_no_results.json | 2026-09-23T16:15:10.180733+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'SOUTH', no results | evidence/nyc_dob_disciplinary/014_dob_disciplinary_contains_fallback_on_so.json | 2026-09-23T16:15:10.371135+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/011_dob_disciplinary_no_results.json | 2026-09-23T16:15:10.235991+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'RING' | evidence/nyc_dob_disciplinary/013_dob_disciplinary_contains_fallback_on_ri.json | 2026-09-23T16:15:10.354933+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/015_dob_disciplinary_no_results.json | 2026-09-23T16:15:10.436696+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'LIFETIME', no results | evidence/nyc_dob_disciplinary/017_dob_disciplinary_contains_fallback_on_li.json | 2026-09-23T16:15:10.587259+00:00 |
| nyc_dob_disciplinary | dob disciplinary no results | evidence/nyc_dob_disciplinary/016_dob_disciplinary_no_results.json | 2026-09-23T16:15:10.506942+00:00 |
| nyc_dob_disciplinary | dob disciplinary contains fallback on 'CONTRACTING' | evidence/nyc_dob_disciplinary/018_dob_disciplinary_contains_fallback_on_co.json | 2026-09-23T16:15:10.648584+00:00 |
| osha | search P&T2 CONTRACTING no results | evidence/osha/001_search_p_t2_contracting_no_results.html | 2026-09-23T16:14:13.452611+00:00 |
| osha | search P&T II CONTRACTING no results | evidence/osha/002_search_p_t_ii_contracting_no_results.html | 2026-09-23T16:14:13.454530+00:00 |
| osha | search P & T II CONTRACTING no results | evidence/osha/003_search_p_t_ii_contracting_no_results.html | 2026-09-23T16:14:13.465427+00:00 |
| osha | search P AND T II CONTRACTING no results | evidence/osha/004_search_p_and_t_ii_contracting_no_results.html | 2026-09-23T16:14:13.467348+00:00 |
| osha | search P & T 2 CONTRACTING no results | evidence/osha/005_search_p_t_2_contracting_no_results.html | 2026-09-23T16:14:13.469097+00:00 |
| osha | search 105 148TH ST no results | evidence/osha/006_search_105_148th_st_no_results.html | 2026-09-23T16:15:19.843339+00:00 |
| osha | search 1203 148TH ST no results | evidence/osha/007_search_1203_148th_st_no_results.html | 2026-09-23T16:15:19.843622+00:00 |
| osha | search 155-22 COHANCY STREET no results | evidence/osha/008_search_155_22_cohancy_street_no_results.html | 2026-09-23T16:15:19.939620+00:00 |
| osha | search 5 REMSEN LANE no results | evidence/osha/009_search_5_remsen_lane_no_results.html | 2026-09-23T16:15:21.062178+00:00 |
| osha | search JLL 93 SOUTH COUNTRY no results | evidence/osha/010_search_jll_93_south_country_no_results.html | 2026-09-23T16:15:21.113714+00:00 |
| osha | search JLL RING ROAD no results | evidence/osha/011_search_jll_ring_road_no_results.html | 2026-09-23T16:15:21.193216+00:00 |
| osha | search LIFETIME CONCRETE | evidence/osha/012_search_lifetime_concrete.html | 2026-09-23T16:15:22.218209+00:00 |
| osha | detail 1561038.015 | evidence/osha/015_detail_1561038_015.html | 2026-09-23T16:15:23.084373+00:00 |
| osha | search P&T CONTRACTING | evidence/osha/013_search_p_t_contracting.html | 2026-09-23T16:15:22.370349+00:00 |
| osha | search P & T CONTRACTING | evidence/osha/014_search_p_t_contracting.html | 2026-09-23T16:15:22.375602+00:00 |
| sam | frontend search 'P & T II CONTRACTING' page 0 | evidence/sam/001_frontend_search_p_t_ii_contracting_page.json | 2026-09-23T16:14:13.511692+00:00 |
| sam | frontend search 'P AND T II CONTRACTING' page 0 | evidence/sam/002_frontend_search_p_and_t_ii_contracting_p.json | 2026-09-23T16:14:13.585013+00:00 |
| sam | frontend search 'P&T II CONTRACTING' page 0 | evidence/sam/003_frontend_search_p_t_ii_contracting_page.json | 2026-09-23T16:14:13.662921+00:00 |
| sam | frontend search 'PEREIRA, LENNY' page 0 | evidence/sam/004_frontend_search_pereira_lenny_page_0.json | 2026-09-23T16:14:13.907713+00:00 |
| sam | frontend search 'PEREIRA LENNY' page 0 | evidence/sam/005_frontend_search_pereira_lenny_page_0.json | 2026-09-23T16:14:13.985106+00:00 |
| sam | frontend search 'LENNY PEREIRA' page 0 | evidence/sam/006_frontend_search_lenny_pereira_page_0.json | 2026-09-23T16:14:14.060720+00:00 |
| sam | frontend search '105 148TH ST' page 0 | evidence/sam/007_frontend_search_105_148th_st_page_0.json | 2026-09-23T16:15:21.187482+00:00 |
| sam | frontend search '1203 148TH ST' page 0 | evidence/sam/008_frontend_search_1203_148th_st_page_0.json | 2026-09-23T16:15:21.266800+00:00 |
| sam | frontend search '155-22 COHANCY STREET' page 0 | evidence/sam/009_frontend_search_155_22_cohancy_street_pa.json | 2026-09-23T16:15:21.276345+00:00 |
| sam | frontend search '5 REMSEN LANE' page 0 | evidence/sam/010_frontend_search_5_remsen_lane_page_0.json | 2026-09-23T16:15:21.342485+00:00 |
| sam | frontend search 'JLL 93 SOUTH COUNTRY' page 0 | evidence/sam/011_frontend_search_jll_93_south_country_pag.json | 2026-09-23T16:15:21.355142+00:00 |
| sam | frontend search 'JLL RING ROAD' page 0 | evidence/sam/012_frontend_search_jll_ring_road_page_0.json | 2026-09-23T16:15:21.418528+00:00 |
| sam | frontend search 'LIFETIME CONCRETE' page 0 | evidence/sam/013_frontend_search_lifetime_concrete_page_0.json | 2026-09-23T16:15:21.437353+00:00 |
| sam | frontend search 'P & T CONTRACTING' page 0 | evidence/sam/014_frontend_search_p_t_contracting_page_0.json | 2026-09-23T16:15:21.502682+00:00 |
| sam | frontend search 'P AND T CONTRACTING' page 0 | evidence/sam/015_frontend_search_p_and_t_contracting_page.json | 2026-09-23T16:15:21.575875+00:00 |
| sam | frontend search 'P&T CONTRACTING' page 0 | evidence/sam/016_frontend_search_p_t_contracting_page_0.json | 2026-09-23T16:15:21.649346+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/001_get_denied_companies_page_status_200.html | 2026-09-23T16:14:06.675307+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/002_get_denied_companies_page_status_200.html | 2026-09-23T16:15:08.224341+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/007_get_denied_companies_page_status_200.html | 2026-09-23T16:15:09.428814+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/008_get_denied_companies_page_status_200.html | 2026-09-23T16:15:09.433294+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/009_get_denied_companies_page_status_200.html | 2026-09-23T16:15:09.533899+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/003_get_denied_companies_page_status_200.html | 2026-09-23T16:15:08.317085+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/004_get_denied_companies_page_status_200.html | 2026-09-23T16:15:08.420627+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/005_get_denied_companies_page_status_200.html | 2026-09-23T16:15:08.502956+00:00 |
| bic_denied | GET denied companies page (status 200) | evidence/bic_denied/006_get_denied_companies_page_status_200.html | 2026-09-23T16:15:08.593353+00:00 |
| affiliates | same process agent: LENNY PEREIRA | evidence/affiliates/001_same_process_agent_lenny_pereira.json | 2026-09-23T16:15:07.854306+00:00 |
| affiliates | same process address: 10617 153rd Street | evidence/affiliates/002_same_process_address_10617_153rd_street.json | 2026-09-23T16:15:07.990608+00:00 |
| affiliates | principal Lenny Pereira | evidence/affiliates/003_principal_lenny_pereira.json | 2026-09-23T16:15:08.156655+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/001_dob_bis_general_contractor_search_busine.png | 2026-09-23T16:14:18.540451+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/002_dob_bis_general_contractor_search_busine.html | 2026-09-23T16:14:18.541816+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/003_dob_bis_general_contractor_search_busine.png | 2026-09-23T16:14:31.369906+00:00 |
| nyc_dob_bis | DOB BIS GENERAL CONTRACTOR search (business): P & T II CONTRACTING | evidence/nyc_dob_bis/004_dob_bis_general_contractor_search_busine.html | 2026-09-23T16:14:31.371182+00:00 |
