# GSMotorsinc — SEO Build Checklist

> Reference: `docs/SEO-STRUCTURE.md`  
> Priority order: P1 = do first (biggest SEO impact), P2 = next sprint, P3 = ongoing

---

## PHASE 1 — Infrastructure & Quick Wins

### 1.1 Redirects & Deduplication
- [ ] 301 redirect `/browse` → `/inventory` (or replace page with redirect component)
- [ ] Confirm `/vehicles/[slug]` is the canonical VDP URL (used consistently everywhere)
- [ ] Audit all internal links — no references to `/browse`

### 1.2 Data Files
- [x] `src/data/categories.ts` — makes, body types, price ranges (exists)
- [ ] `src/data/cities.ts` — 15 target cities with metadata, driveTime, nearby cities
- [ ] `src/data/years.ts` — year bands 2015–2022 with descriptions

### 1.3 Sitemap Rebuild
- [ ] Split into `sitemap.ts` (static pages) + `sitemap-vehicles.ts` (dynamic VDPs)
- [ ] Add all inventory hubs: make, body, price, year, city
- [ ] Add all specialty, financing, services, locations pages
- [ ] Set correct `priority` and `changeFrequency` per page type
- [ ] Register both sitemaps in `robots.ts`

### 1.4 Robots.txt
- [ ] Disallow `/admin/`, `/api/`, `/_next/`
- [ ] Allow all SEO pages
- [ ] Reference both sitemaps

---

## PHASE 2 — Inventory Hub Pages (P1 — biggest traffic)

### 2.1 Make Hubs (`/inventory/make/[make]`)
- [x] Mercedes `/inventory/make/mercedes`
- [x] BMW `/inventory/make/bmw`
- [x] Honda `/inventory/make/honda`
- [x] Toyota `/inventory/make/toyota`
- [x] Mazda `/inventory/make/mazda`
- [x] Hyundai `/inventory/make/hyundai`
- [x] Nissan `/inventory/make/nissan`
- [x] Subaru `/inventory/make/subaru`
- [x] Kia `/inventory/make/kia`
- [x] Ford `/inventory/make/ford`
> Note: `/inventory/[make]` already exists — verify metadata & schema are optimised

### 2.2 Body Type Hubs (`/inventory/body/[slug]`)
- [ ] Sedans `/inventory/body/sedan`
- [ ] SUVs `/inventory/body/suv`
- [ ] Coupes `/inventory/body/coupe`
- [ ] Wagons `/inventory/body/wagon`
- [ ] Hatchbacks `/inventory/body/hatchback`
- [ ] Trucks `/inventory/body/truck` (add to categories.ts)
- [ ] Minivans `/inventory/body/minivan` (add to categories.ts)

### 2.3 Price Band Hubs (`/inventory/price/[slug]`)
- [ ] Under $10k `/inventory/price/under-10k`
- [ ] $10k–$15k `/inventory/price/10k-15k`
- [ ] $15k–$20k `/inventory/price/15k-20k`
- [ ] $20k–$25k `/inventory/price/20k-25k`
- [ ] $25k+ `/inventory/price/25k-plus`

### 2.4 Year Band Hubs (`/inventory/year/[year]`)
- [ ] 2015 and older `/inventory/year/2015`
- [ ] 2016 `/inventory/year/2016`
- [ ] 2017 `/inventory/year/2017`
- [ ] 2018 `/inventory/year/2018`
- [ ] 2019 `/inventory/year/2019`
- [ ] 2020 `/inventory/year/2020`
- [ ] 2021 `/inventory/year/2021`
- [ ] 2022+ `/inventory/year/2022`

### 2.5 Special Inventory Pages
- [ ] `/inventory/featured` — Featured Vehicles
- [ ] `/inventory/new-arrivals` — New Arrivals
- [ ] `/inventory/awd` — AWD / 4WD Vehicles
- [ ] `/inventory/fuel-efficient` — Fuel Efficient
- [ ] `/inventory/certified` — Certified Vehicles

### 2.6 City Inventory (`/inventory/city/[slug]`)
- [ ] `/inventory/city/newcastle`
- [ ] `/inventory/city/bowmanville`
- [ ] `/inventory/city/oshawa`
- [ ] `/inventory/city/whitby`
- [ ] `/inventory/city/ajax`
- [ ] `/inventory/city/pickering`
- [ ] `/inventory/city/toronto`
(These redirect to `/inventory` with pre-applied location filter + city-specific content above)

---

## PHASE 3 — City / Location Pages (P1 — local SEO)

### 3.1 Locations Hub
- [ ] `/locations` — All service areas hub page

### 3.2 City Pages (`/locations/[city]`)
- [ ] `/locations/newcastle` (primary — most detailed)
- [ ] `/locations/bowmanville`
- [ ] `/locations/clarington`
- [ ] `/locations/courtice`
- [ ] `/locations/oshawa`
- [ ] `/locations/whitby`
- [ ] `/locations/ajax`
- [ ] `/locations/pickering`
- [ ] `/locations/port-hope`
- [ ] `/locations/cobourg`
- [ ] `/locations/peterborough`
- [ ] `/locations/scarborough`
- [ ] `/locations/toronto`
- [ ] `/locations/markham`
- [ ] `/locations/durham-region` (regional hub)

---

## PHASE 4 — Financing Sub-Pages (P1 — high-intent traffic)

- [ ] `/financing` — hub page (improve existing)
- [ ] `/financing/apply` — application form
- [ ] `/financing/calculator` — payment calculator (interactive)
- [ ] `/financing/bad-credit` — bad credit financing
- [ ] `/financing/no-credit` — no credit history
- [ ] `/financing/first-time-buyer` — first-time buyer
- [ ] `/financing/newcomers` — newcomers to Canada
- [ ] `/financing/self-employed` — self-employed
- [ ] `/financing/bankruptcy` — bankruptcy approval
- [ ] `/financing/lease-buyout` — lease buyout

---

## PHASE 5 — Services Pages (P2)

- [ ] `/services` — services hub
- [ ] `/services/inspection` — pre-purchase inspection
- [ ] `/services/warranty` — warranty overview
- [ ] `/services/extended-warranty` — extended warranty
- [ ] `/services/detailing` — detailing
- [ ] `/services/carfax-report` — vehicle history / CarFax
- [ ] `/services/delivery` — vehicle delivery

---

## PHASE 6 — Schema Markup (P1 — alongside pages)

- [ ] `AutoDealer` schema on `/` home page
- [ ] `AutoDealer` schema on all `/locations/` city pages (with areaServed)
- [ ] `BreadcrumbList` schema on all inner pages (use layout or component)
- [ ] `Vehicle` + `Product` + `Offer` schema on `/vehicles/[slug]` VDPs
- [ ] `FAQPage` schema on `/faq`
- [ ] `ItemList` schema on inventory hub pages
- [ ] `Organization` + `WebSite` schema in root layout

---

## PHASE 7 — Sell/Trade Sub-Pages (P2)

- [ ] `/sell-trade` — improve existing page
- [ ] `/sell-trade/valuation` — get a valuation
- [ ] `/sell-trade/sell-your-car` — sell outright
- [ ] `/sell-trade/process` — how it works step-by-step
- [ ] `/sell-trade/trade-vs-sell` — trade vs sell guide

---

## PHASE 8 — Content Hub (P2)

### 8.1 Buying Guides
- [ ] `/guides` — guides hub page
- [ ] `/guides/buying-used-car-ontario` — pillar (Ontario buying guide)
- [ ] `/guides/first-time-buyer` — first-time car buyer guide
- [ ] `/guides/pre-purchase-inspection` — inspection checklist
- [ ] `/guides/how-to-negotiate` — negotiation tips
- [ ] `/guides/financing-basics` — financing pillar
- [ ] `/guides/winter-driving-ontario` — winter / AWD guide
- [ ] `/guides/trade-in-guide` — trade-in pillar

### 8.2 Compare Pages
- [ ] `/compare/honda-civic-vs-toyota-corolla`
- [ ] `/compare/bmw-3-series-vs-mercedes-c-class`
- [ ] `/compare/honda-crv-vs-toyota-rav4`
- [ ] `/compare/subaru-outback-vs-toyota-rav4`
- [ ] Add 25+ more (create template page)

### 8.3 Model Reviews
- [ ] `/reviews/honda-civic-2019`
- [ ] `/reviews/toyota-corolla-2020`
- [ ] `/reviews/bmw-3-series-2019`
- [ ] `/reviews/honda-crv-2020`
- [ ] Add 45+ more (create template page)

### 8.4 Blog Restructure
- [ ] `/blog` — hub with pillar categories
- [ ] `/blog/category/buying-guides`
- [ ] `/blog/category/financing`
- [ ] `/blog/category/maintenance`
- [ ] `/blog/category/model-reviews`
- [ ] `/blog/category/news`

---

## PHASE 9 — Navigation Updates (P2)

- [ ] Add **Locations** dropdown to Navbar (alongside Services, Company)
- [ ] Add **Resources** / Guides dropdown
- [ ] Footer: add SEO link map section (makes, body types, top cities, price bands)
- [ ] Breadcrumbs on ALL inner pages (verify complete)

---

## PHASE 10 — Legal / Support Pages (P3)

- [ ] `/privacy` — Privacy Policy
- [ ] `/terms` — Terms of Service
- [ ] `/cookies` — Cookie Policy
- [ ] `/accessibility` — Accessibility Statement
- [ ] `/disclaimer` — Disclaimer
- [ ] `/careers` — Careers page
- [ ] `/book-viewing` — Book a Viewing standalone
- [ ] `/directions` — Directions page
- [ ] `/hours` — Hours & Holidays

---

## PHASE 11 — Technical SEO (P2)

- [ ] Canonical tags: add `<link rel="canonical">` to all hub pages
- [ ] `hreflang` not needed (English CA only)
- [ ] Open Graph + Twitter Card meta on all pages
- [ ] Image alt text audit on all vehicle photos
- [ ] PageSpeed ≥80 mobile (run Lighthouse, fix CLS issues)
- [ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
- [ ] Structured data testing (Google Rich Results Test)
- [ ] Google Search Console setup & submit sitemaps
- [ ] Google Business Profile optimization

---

## PHASE 12 — Ongoing / Content Velocity (P3)

- [ ] Publish 2+ blog posts/month (use pillar + cluster framework)
- [ ] Model review for every make/model in current inventory
- [ ] Monthly inventory update triggers sitemap rebuild
- [ ] Review schema on testimonials page → `AggregateRating`
- [ ] Monthly: check Search Console for crawl errors

---

## Progress Tracking

| Phase | Status | Priority |
|---|---|---|
| Phase 1 — Infrastructure | In Progress | P1 |
| Phase 2 — Inventory Hubs | Pending | P1 |
| Phase 3 — City Pages | Pending | P1 |
| Phase 4 — Financing Sub-pages | Pending | P1 |
| Phase 5 — Services Pages | Pending | P2 |
| Phase 6 — Schema | Pending | P1 |
| Phase 7 — Sell/Trade Sub-pages | Pending | P2 |
| Phase 8 — Content Hub | Pending | P2 |
| Phase 9 — Nav Updates | Pending | P2 |
| Phase 10 — Legal/Support | Pending | P3 |
| Phase 11 — Technical SEO | Pending | P2 |
| Phase 12 — Ongoing Content | Pending | P3 |
