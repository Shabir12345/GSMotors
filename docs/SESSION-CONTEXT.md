# GSMotorsinc — Session Context (Handoff)

> Use this file at the start of a new Claude session to resume where we left off.

---

## Project

**Client**: GSMotorsinc  
**Site**: Used car dealership, Newcastle ON  
**Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, Prisma/PostgreSQL, Cloudflare R2  
**Deployed**: https://gs-motors.vercel.app  
**Address**: 3400 ON-115, Newcastle, ON L1B 0R6 | 647-801-2475

---

## What We Did This Session

Built out a full SEO page architecture from scratch. The goal is to rank #1 for "used cars Newcastle ON", "used car dealer Durham Region", and dozens of make/model/city/price keyword clusters.

### Docs created (in `/docs/`)
- `SEO-STRUCTURE.md` — full IA, URL conventions, schema plan, meta templates, content pillars
- `SEO-CHECKLIST.md` — phased todo checklist for everything
- `SEO-BUILD-STATUS.md` — detailed tracker: built vs remaining, with code snippets for next steps

### New data file
- `src/data/cities.ts` — 15 Ontario cities (Newcastle → Toronto) with slug, driveTime, keywords, nearbyCities, description, localLandmarks. Exports: `cities`, `getCityBySlug`, `getAllCitySlugs`, `getNearbyCities`

### Pages built (~65 new files)
1. **Locations** — `/locations` hub + `/locations/[city]` for 15 cities (dynamic, generateStaticParams, AutoDealer JSON-LD schema per city)
2. **Inventory hubs** — `/inventory/body/[slug]`, `/inventory/price/[slug]`, `/inventory/year/[year]` (all dynamic + generateStaticParams) + `/inventory/featured`, `/inventory/new-arrivals`, `/inventory/awd`, `/inventory/certified`, `/inventory/fuel-efficient`
3. **Financing** — `/financing/apply`, `/financing/calculator`, `/financing/bad-credit`, `/financing/no-credit`, `/financing/first-time-buyer`, `/financing/newcomers`, `/financing/self-employed`
4. **Services** — `/services` hub, `/services/inspection`, `/services/warranty`, `/services/extended-warranty`, `/services/detailing`, `/services/carfax-report`, `/services/delivery`
5. **Sell/Trade** — `/sell-trade/valuation`, `/sell-trade/process`, `/sell-trade/trade-vs-sell`
6. **Guides** — `/guides` hub, `/guides/buying-used-car-ontario` (full pillar page)

---

## Immediate Next Tasks (start here next session)

### 1. Sitemap rebuild — `src/app/sitemap.ts`
Replace the existing 8-entry file. Import from `@/data/categories` and `@/data/cities`. See `docs/SEO-BUILD-STATUS.md` → "Proposed Sitemap Content" section for the full priority map.

### 2. Browse redirect — `src/app/browse/page.tsx`
The existing file needs to redirect to `/inventory`. Replace content with:
```tsx
import { redirect } from 'next/navigation';
export const metadata = { robots: { index: false, follow: false } };
export default function BrowsePage() { redirect('/inventory'); }
```

### 3. Navbar updates — `src/components/Navbar.tsx`
Add to the `navLinks` array:
- **Locations** submenu: link to `/locations` + top 5 cities
- **Services** link (currently buried in Services submenu — should be top-level)
- **Guides** link under Company submenu

### 4. Schema on homepage — `src/app/page.tsx`
Add `AutoDealer` JSON-LD script in the root layout or homepage. Template:
```json
{
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "GSMotorsinc",
  "url": "https://gsmotorsinc.com",
  "telephone": "647-801-2475",
  "email": "concierge@gsmotorsinc.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3400 ON-115",
    "addressLocality": "Newcastle",
    "addressRegion": "ON",
    "postalCode": "L1B 0R6",
    "addressCountry": "CA"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 43.942, "longitude": -78.603 },
  "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00"],
  "priceRange": "$$"
}
```

### 5. Footer SEO link map — `src/components/Footer.tsx`
Add a "Browse by" section with links to:
- Top makes: Mercedes, BMW, Honda, Toyota, Mazda, Hyundai, Nissan, Subaru, Kia, Ford
- Body types: Sedans, SUVs, Coupes, Hatchbacks, Wagons
- Price bands: Under $10k, $10k–$15k, $15k–$20k, $20k–$25k, $25k+
- Cities: Newcastle, Bowmanville, Oshawa, Whitby, Ajax, Pickering, Toronto, Durham Region

### 6. Remaining pages to build
- `/financing/lease-buyout`
- `/financing/bankruptcy`
- `/sell-trade/sell-your-car`
- `/guides/first-time-buyer` (full pillar)
- `/guides/trade-in-guide`
- `/privacy`, `/terms` (legal pages)
- `/careers`

---

## Code Conventions (follow these exactly)

- **All page components**: server components (no `'use client'`) unless they use hooks/interactivity
- **Metadata**: `export const metadata = { title, description }` for static pages; `export async function generateMetadata({ params })` for dynamic pages
- **Dynamic routes**: always include `export function generateStaticParams()` returning the full set
- **Page structure**: `PageHero` → content sections → `PageCTA` — match `src/app/about-us/page.tsx` pattern
- **Cards**: `bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-6 md:p-8`
- **Section spacing**: `mb-16` per section, `container mx-auto px-4 md:px-6`
- **Gradient text**: `text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight`
- **Buttons (primary)**: `btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105`
- **Buttons (secondary)**: `btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105`
- **No comments** unless WHY is non-obvious
- **No extra abstractions** — inline content, don't over-engineer

---

## File Tree of New Pages (this session)

```
src/
├── data/
│   └── cities.ts                          ← NEW
├── app/
│   ├── locations/
│   │   ├── page.tsx                       ← NEW
│   │   └── [city]/
│   │       ├── layout.tsx                 ← NEW
│   │       └── page.tsx                   ← NEW (15 cities via generateStaticParams)
│   ├── inventory/
│   │   ├── body/[slug]/
│   │   │   ├── layout.tsx                 ← NEW
│   │   │   └── page.tsx                   ← NEW (5 body types)
│   │   ├── price/[slug]/
│   │   │   ├── layout.tsx                 ← NEW
│   │   │   └── page.tsx                   ← NEW (5 price bands)
│   │   ├── year/[year]/
│   │   │   ├── layout.tsx                 ← NEW
│   │   │   └── page.tsx                   ← NEW (2015–2022)
│   │   ├── featured/page.tsx              ← NEW
│   │   ├── new-arrivals/page.tsx          ← NEW
│   │   ├── awd/page.tsx                   ← NEW
│   │   ├── certified/page.tsx             ← NEW
│   │   └── fuel-efficient/page.tsx        ← NEW
│   ├── financing/
│   │   ├── apply/page.tsx                 ← NEW
│   │   ├── calculator/page.tsx            ← NEW
│   │   ├── bad-credit/page.tsx            ← NEW
│   │   ├── no-credit/page.tsx             ← NEW
│   │   ├── first-time-buyer/page.tsx      ← NEW
│   │   ├── newcomers/page.tsx             ← NEW
│   │   └── self-employed/page.tsx         ← NEW
│   ├── services/
│   │   ├── page.tsx                       ← NEW
│   │   ├── inspection/page.tsx            ← NEW
│   │   ├── warranty/page.tsx              ← NEW
│   │   ├── extended-warranty/page.tsx     ← NEW
│   │   ├── detailing/page.tsx             ← NEW
│   │   ├── carfax-report/page.tsx         ← NEW
│   │   └── delivery/page.tsx              ← NEW
│   ├── sell-trade/
│   │   ├── valuation/page.tsx             ← NEW
│   │   ├── process/page.tsx               ← NEW
│   │   └── trade-vs-sell/page.tsx         ← NEW
│   └── guides/
│       ├── page.tsx                       ← NEW
│       └── buying-used-car-ontario/
│           └── page.tsx                   ← NEW
docs/
├── SEO-STRUCTURE.md                       ← NEW
├── SEO-CHECKLIST.md                       ← NEW
├── SEO-BUILD-STATUS.md                    ← NEW
└── SESSION-CONTEXT.md                     ← THIS FILE
```
