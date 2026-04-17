# GSMotorsinc — SEO Structure & Information Architecture

> Created: April 2026 | Status: Active Reference  
> Goal: Rank #1 for "used cars Newcastle ON", "used car dealership Durham Region", and high-volume make/model/city keyword clusters across the GTA.

---

## 1. Research Findings

### What rank-#1 used-car dealership sites do

- **Hub-and-spoke IA**: High-value "hubs" (inventory, financing, locations, guides) link down to SRPs/VDPs and back up. No orphan pages.
- **Clean hierarchical URLs** that mirror buyer intent — `/used-cars/{make}/{model}/{city}`, never `?id=123`.
- **Individual VDPs** indexed with `Vehicle` + `Product` + `Offer` schema; title pattern `{Year} {Make} {Model} {Trim} — {City} | GSMotorsinc`.
- **Local SEO** is the #1 winning lever. Dedicated city pages for every surrounding town — not one generic page.
- **Pillar + cluster content** beats random blogs. Each pillar (e.g. "Buying a Used Car in Ontario") links to 8–12 cluster posts and back.
- **Service pages** (financing, trade-in, warranty, inspection) must be standalone and locally targeted.
- **Canonical + filter discipline**: only SEO-blessed facets (make, model, body, price band, year band, city) get indexable URLs.
- **Two sitemaps**: main sitemap + dynamic vehicles sitemap rebuilt when inventory changes.

### Target keyword clusters

| Cluster | Example keywords | Volume |
|---|---|---|
| Local primary | "used cars Newcastle ON", "used car dealer Durham Region" | High intent |
| Make hubs | "used BMW for sale Ontario", "used Honda Civic GTA" | 5K–50K/mo |
| Body type | "used SUVs for sale Ontario" | 20K+/mo |
| Financing | "bad credit car loans Ontario", "car loan newcomers Canada" | 10K+/mo |
| Trade-in | "sell my car Newcastle", "trade in car Durham" | Local |
| City | "used cars Oshawa", "used cars Bowmanville" | Local high-intent |

---

## 2. Current Site Audit — Issues & Fixes

| Issue | Status | Fix |
|---|---|---|
| `/browse` and `/inventory` duplicate intent | Fix | 301 `/browse` → `/inventory` |
| `/vehicles/[slug]` VDP inconsistency | Acceptable | Keep at `/vehicles/[slug]`, canonicalize everywhere |
| No city pages | Missing | Add 15 city pages under `/locations/` |
| No make+model sub-hubs | Missing | Generate from `categories.ts` |
| No body-type, price-band, year-band hub pages | Missing | Generate from `categories.ts` |
| No compare pages | Missing | Add `/compare/{a}-vs-{b}` |
| Sitemap lists only 8 pages | Incomplete | Rebuild to enumerate all hubs + VDPs |
| Blog has no cluster structure | Unstructured | Reorganize into pillars |
| Financing is one page | Missing sub-pages | Split into 8 sub-pages |
| No schema markup | Missing | Add AutoDealer, Vehicle, FAQ, Breadcrumb schema |
| No services hub | Missing | Add `/services` with 6 sub-pages |
| Missing Locations nav | Missing | Add Locations to navbar |

---

## 3. Full URL Hierarchy

```
gsmotorsinc.com/
│
├── /                              Home
│
├── INVENTORY HUB
│   ├── /inventory                 All Vehicles
│   ├── /inventory/make/{slug}     Make Hub (x10 makes)
│   ├── /inventory/make/{make}/{model}   Model Hub (~50 pages)
│   ├── /inventory/body/{slug}     Body Type Hub (x5 types)
│   ├── /inventory/price/{slug}    Price Band Hub (x5 bands)
│   ├── /inventory/year/{year}     Year Band Hub (x8 years)
│   ├── /inventory/city/{slug}     City Inventory (x15 cities)
│   ├── /inventory/featured        Featured Vehicles
│   ├── /inventory/new-arrivals    New Arrivals
│   ├── /inventory/awd             AWD / 4WD Vehicles
│   ├── /inventory/fuel-efficient  Fuel Efficient Vehicles
│   ├── /inventory/certified       Certified Vehicles
│   └── /vehicles/{slug}           Vehicle Detail Page (VDP)
│
├── SPECIALTY CHANNELS
│   ├── /as-is                     As-Is Vehicles
│   ├── /export                    Export Vehicles
│   │   └── /export/destinations/{country}
│   ├── /wholesale                 Wholesale
│   │   └── /wholesale/dealer-signup
│   └── /insurance-certified       Insurance Certified
│
├── FINANCING HUB
│   ├── /financing                 Overview + CTA
│   ├── /financing/apply           Application Form
│   ├── /financing/calculator      Payment Calculator
│   ├── /financing/bad-credit      Bad Credit Financing
│   ├── /financing/no-credit       No Credit History
│   ├── /financing/first-time-buyer First-Time Buyer
│   ├── /financing/newcomers       Newcomers to Canada
│   ├── /financing/self-employed   Self-Employed
│   ├── /financing/bankruptcy      Bankruptcy Approval
│   └── /financing/lease-buyout    Lease Buyout
│
├── SELL / TRADE
│   ├── /sell-trade                Overview
│   ├── /sell-trade/valuation      Get a Valuation
│   ├── /sell-trade/sell-your-car  Sell Outright
│   ├── /sell-trade/process        How It Works
│   └── /sell-trade/trade-vs-sell  Trade vs Sell Guide
│
├── SERVICES
│   ├── /services                  Services Hub
│   ├── /services/inspection       Pre-Purchase Inspection
│   ├── /services/warranty         Warranty
│   ├── /services/extended-warranty Extended Warranty
│   ├── /services/detailing        Detailing
│   ├── /services/carfax-report    Vehicle History Report
│   └── /services/delivery         Vehicle Delivery
│
├── LOCATIONS HUB
│   ├── /locations                 All Service Areas
│   ├── /locations/newcastle       Newcastle (primary)
│   ├── /locations/bowmanville     Bowmanville
│   ├── /locations/clarington      Clarington
│   ├── /locations/courtice        Courtice
│   ├── /locations/oshawa          Oshawa
│   ├── /locations/whitby          Whitby
│   ├── /locations/ajax            Ajax
│   ├── /locations/pickering       Pickering
│   ├── /locations/port-hope       Port Hope
│   ├── /locations/cobourg         Cobourg
│   ├── /locations/peterborough    Peterborough
│   ├── /locations/scarborough     Scarborough
│   ├── /locations/toronto         Toronto
│   ├── /locations/markham         Markham
│   └── /locations/durham-region   Durham Region (hub)
│
├── COMPANY
│   ├── /about-us                  About Us
│   ├── /about-us/team             Our Team
│   ├── /why-choose-us             Why Choose Us
│   ├── /insurance-certified       Certified Quality
│   ├── /testimonials              Testimonials
│   ├── /careers                   Careers
│   └── /press                     Press / News
│
├── RESOURCES
│   ├── /guides                    Buying Guides Hub
│   │   ├── /guides/first-time-buyer
│   │   ├── /guides/buying-used-car-ontario
│   │   ├── /guides/pre-purchase-inspection
│   │   ├── /guides/how-to-negotiate
│   │   ├── /guides/financing-basics
│   │   ├── /guides/winter-driving-ontario
│   │   └── /guides/trade-in-guide
│   ├── /compare/{a}-vs-{b}        Model Comparisons
│   ├── /reviews/{make}-{model}-{year}  Model Reviews
│   ├── /glossary                  Automotive Glossary
│   └── /blog                      Blog
│       ├── /blog/{slug}           Blog Post
│       ├── /blog/category/{slug}  Category
│       └── /blog/tag/{slug}       Tag
│
├── SUPPORT
│   ├── /contact                   Contact
│   ├── /book-viewing              Book a Viewing
│   ├── /faq                       FAQ
│   ├── /faq/{category}            FAQ Category
│   ├── /directions                Directions
│   └── /hours                     Hours & Holiday
│
├── LEGAL
│   ├── /privacy                   Privacy Policy
│   ├── /terms                     Terms of Service
│   ├── /cookies                   Cookie Policy
│   ├── /accessibility             Accessibility
│   └── /disclaimer                Disclaimer
│
├── /admin/*                       Admin Portal (noindex)
└── /api/*                         API Routes (disallowed in robots)
```

---

## 4. URL Conventions

- Lowercase, hyphens only, no trailing slash
- Make & model slugs from `categories.ts` (single source of truth)
- VDP slug: `{year}-{make}-{model}-{trim}-{vinLast6}` e.g. `2020-bmw-330i-xdrive-a1b2c3`
- Canonical rules:
  - Filter combos → canonical to primary facet (make)
  - Pagination → `rel=next/prev` + canonical to page 1
  - Indexable facets whitelist: `make, model, body, price-band, year-band, city, drivetrain`
- 301 redirects: `/browse` → `/inventory`

---

## 5. Meta / Title Templates

| Page type | Title template |
|---|---|
| Home | `GSMotorsinc \| Used Cars in Newcastle, ON – Durham Region` |
| Inventory root | `Used Cars for Sale in Newcastle, ON \| GSMotorsinc` |
| Make hub | `Used {Make} for Sale in Ontario \| GSMotorsinc` |
| Make + Model | `Used {Make} {Model} for Sale \| GSMotorsinc Newcastle` |
| Body type | `Used {BodyType} for Sale in Durham Region \| GSMotorsinc` |
| Price band | `Used Cars {Label} in Ontario \| GSMotorsinc` |
| City | `Used Car Dealer in {City}, ON \| GSMotorsinc` |
| VDP | `{Year} {Make} {Model} {Trim} – ${price} \| GSMotorsinc Newcastle` |
| Financing | `Car Loans in Ontario – Apply in 60 Seconds \| GSMotorsinc` |
| Blog post | `{Title} \| GSMotorsinc Blog` |

---

## 6. Schema Markup Plan (JSON-LD)

| Page | Schema types |
|---|---|
| All pages | `Organization`, `WebSite` (with Sitelinks search box), `BreadcrumbList` |
| Home | + `AutoDealer` (LocalBusiness subtype, address, hours, geo, priceRange) |
| Location pages | `AutoDealer` with `areaServed` = that city |
| Inventory hubs | `ItemList` of `Vehicle` |
| VDP | `Vehicle` + `Product` + `Offer` (price, availability, itemCondition=UsedCondition) |
| FAQ pages | `FAQPage` |
| How-to guides | `HowTo` |
| Model reviews | `Review` |
| Testimonials | `AggregateRating` |

---

## 7. Internal Linking Rules

1. Every VDP links up to: make hub, model hub, body-type hub, price-band hub, nearest city page
2. Every make hub links to: all model sub-hubs, top 3 body types, financing hub
3. City pages cross-link 3 neighbouring cities
4. Blog posts cite the matching model/make hub
5. Footer carries SEO link map: makes, body types, cities, price bands
6. No orphan pages — every URL in sitemap has ≥1 contextual inbound link

---

## 8. Content Pillars

| Pillar | URL | Clusters |
|---|---|---|
| Buying Used in Ontario | `/guides/buying-used-car-ontario` | UVIP, safety cert, CarFax, HST, OMVIC, private vs dealer |
| Auto Financing Canada | `/guides/financing-basics` | Bad credit, newcomers, co-signers, APR, balloon payments |
| Trade-In Your Vehicle | `/guides/trade-in-guide` | Valuation, trade vs sell, tax savings, Black Book |
| Model Deep-Dives | `/reviews/{make}-{model}-{year}` | Top 50 models in inventory |
| Winter / Canadian Driving | `/guides/winter-driving-ontario` | AWD, winter tires, battery care, best winter cars |
| Export & Wholesale B2B | `/guides/export-guide` | Shipping, destinations, dealer wholesale terms |

---

## 9. Page Count Estimate

| Group | Count |
|---|---|
| Core / company / legal | ~20 |
| Specialty channels | ~8 |
| Financing sub-pages | ~10 |
| Services | ~7 |
| Locations (cities) | ~16 |
| Make hubs | 10 |
| Make + Model hubs | ~50 |
| Body-type hubs | 5 |
| Price-band hubs | 5 |
| Year-band hubs | ~8 |
| Compare pages | ~30 (curated) |
| Model reviews | ~50 |
| Guides (pillar + clusters) | ~40 |
| Blog posts (ongoing) | ∞ |
| VDPs | = inventory (dynamic) |
| **Static SEO pages at launch** | **≈ 260** |

---

## 10. Competitive Targets (GTA / Durham Region)

Sites to out-rank:
- markrainford.ca (Clarington / Durham)
- durhamautomotive.ca (Lincoln, ON)
- durhamautosales.ca
- nexcar.ca (North York)
- autoplanet.ca (Brampton / Durham)

Key advantage: GSMotorsinc is physically located in Newcastle (Clarington) — own the "Clarington used cars" cluster first, expand outward.
