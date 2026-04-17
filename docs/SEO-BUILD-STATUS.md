# GSMotorsinc SEO Build — Status Tracker

> Last updated: April 2026  
> Reference docs: `docs/SEO-STRUCTURE.md`, `docs/SEO-CHECKLIST.md`

---

## What Has Been Built (This Session)

### Data Files
| File | Status |
|---|---|
| `src/data/categories.ts` | ✅ Existed — makes, bodyTypes, priceRanges |
| `src/data/cities.ts` | ✅ Created — 15 Ontario cities with slug, driveTime, keywords, nearbyCities |

### Documentation
| File | Status |
|---|---|
| `docs/SEO-STRUCTURE.md` | ✅ Created — full IA, URL rules, schema plan, content pillars |
| `docs/SEO-CHECKLIST.md` | ✅ Created — phased checklist, all pages listed |
| `docs/SEO-BUILD-STATUS.md` | ✅ This file |

### Locations (15 city pages)
| Page | URL | Status |
|---|---|---|
| Locations Hub | `/locations` | ✅ Built |
| City layout | `/locations/[city]/layout.tsx` | ✅ Built |
| All 15 city pages | `/locations/newcastle` … `/locations/durham-region` | ✅ Built (dynamic, generateStaticParams) |

### Inventory Hubs
| Page | URL | Status |
|---|---|---|
| Body type hub | `/inventory/body/[slug]` | ✅ Built (sedan, suv, coupe, wagon, hatchback) |
| Price band hub | `/inventory/price/[slug]` | ✅ Built (under-10k, 10k-15k, 15k-20k, 20k-25k, 25k-plus) |
| Year band hub | `/inventory/year/[year]` | ✅ Built (2015–2022) |
| Featured | `/inventory/featured` | ✅ Built |
| New Arrivals | `/inventory/new-arrivals` | ✅ Built |
| AWD / 4WD | `/inventory/awd` | ✅ Built |
| Certified | `/inventory/certified` | ✅ Built |
| Fuel Efficient | `/inventory/fuel-efficient` | ✅ Built |
| Make hubs | `/inventory/make/[make]` | ✅ Existed (`/inventory/[make]`) — verify metadata |

### Financing Sub-Pages
| Page | URL | Status |
|---|---|---|
| Apply | `/financing/apply` | ✅ Built |
| Calculator | `/financing/calculator` | ✅ Built (static payment table) |
| Bad Credit | `/financing/bad-credit` | ✅ Built |
| No Credit | `/financing/no-credit` | ✅ Built |
| First-Time Buyer | `/financing/first-time-buyer` | ✅ Built |
| Newcomers | `/financing/newcomers` | ✅ Built |
| Self-Employed | `/financing/self-employed` | ✅ Built |

### Services Pages
| Page | URL | Status |
|---|---|---|
| Services Hub | `/services` | ✅ Built |
| Inspection | `/services/inspection` | ✅ Built |
| Warranty | `/services/warranty` | ✅ Built |
| Extended Warranty | `/services/extended-warranty` | ✅ Built |
| Detailing | `/services/detailing` | ✅ Built |
| CarFax Report | `/services/carfax-report` | ✅ Built |
| Delivery | `/services/delivery` | ✅ Built |

### Sell / Trade Sub-Pages
| Page | URL | Status |
|---|---|---|
| Valuation Form | `/sell-trade/valuation` | ✅ Built |
| Process / How It Works | `/sell-trade/process` | ✅ Built |
| Trade vs Sell | `/sell-trade/trade-vs-sell` | ✅ Built |

### Guides / Content Hub
| Page | URL | Status |
|---|---|---|
| Guides Hub | `/guides` | ✅ Built |
| Ontario Buying Guide | `/guides/buying-used-car-ontario` | ✅ Built (pillar page) |

---

## What Still Needs To Be Done

### Phase 1 — Infrastructure (Incomplete)
| Task | Status | Notes |
|---|---|---|
| Rebuild `src/app/sitemap.ts` | ❌ TODO | User stopped session before this completed. New sitemap is fully designed — see below |
| Redirect `/browse` → `/inventory` | ❌ TODO | User stopped before this was written |
| Verify `/inventory/[make]` metadata & schema | ❌ TODO | Existing page needs SEO metadata audit |

### Phase 2 — Navigation Updates
| Task | Status |
|---|---|
| Add "Locations" dropdown to Navbar | ❌ TODO |
| Add "Services" top-level link (currently in submenu) | ❌ TODO |
| Add "Guides" to Company submenu | ❌ TODO |
| Footer SEO link map (makes, body types, cities, price bands) | ❌ TODO |

### Phase 3 — Schema Markup
| Task | Status |
|---|---|
| `AutoDealer` JSON-LD on homepage | ❌ TODO |
| `Organization` + `WebSite` in root layout | ❌ TODO |
| `Vehicle` + `Product` + `Offer` schema on VDP pages | ❌ TODO |
| `FAQPage` schema on `/faq` | ❌ TODO |
| `BreadcrumbList` verification on all pages | ❌ TODO |

### Phase 4 — Remaining Pages
| Page | URL | Status |
|---|---|---|
| Financing: Lease Buyout | `/financing/lease-buyout` | ❌ TODO |
| Financing: Bankruptcy Approval | `/financing/bankruptcy` | ❌ TODO |
| Sell / Trade: Sell Your Car | `/sell-trade/sell-your-car` | ❌ TODO |
| Wholesale: Dealer Sign-up | `/wholesale/dealer-signup` | ❌ TODO |
| Export: Destinations | `/export/destinations/[country]` | ❌ TODO |
| Careers | `/careers` | ❌ TODO |
| Privacy Policy | `/privacy` | ❌ TODO |
| Terms of Service | `/terms` | ❌ TODO |
| About Us: Our Team | `/about-us/team` | ❌ TODO |
| Book a Viewing | `/book-viewing` | ❌ TODO |
| Directions | `/directions` | ❌ TODO |

### Phase 5 — Content (Ongoing)
| Page | URL | Status |
|---|---|---|
| Guides: First-Time Buyer (full pillar) | `/guides/first-time-buyer` | ❌ TODO |
| Guides: Financing Basics | `/guides/financing-basics` | ❌ TODO |
| Guides: How to Negotiate | `/guides/how-to-negotiate` | ❌ TODO |
| Guides: Winter Driving Ontario | `/guides/winter-driving-ontario` | ❌ TODO |
| Guides: Trade-In Guide | `/guides/trade-in-guide` | ❌ TODO |
| Compare pages | `/compare/{a}-vs-{b}` | ❌ TODO — template first |
| Model reviews | `/reviews/{make}-{model}-{year}` | ❌ TODO — template first |
| Blog restructure | `/blog/category/{slug}` | ❌ TODO |

---

## Proposed Sitemap Content (for next session)

The new `sitemap.ts` should replace the existing 8-entry file with ~80+ static entries.
Key groups and their priorities:

```
Priority 1.0: /
Priority 0.9: /inventory, /financing, /sell-trade, /contact
Priority 0.85: /locations, /locations/newcastle, /locations/durham-region
Priority 0.8: /locations/{13 other cities}
Priority 0.8: /inventory/make/{10 makes}
Priority 0.75: /inventory/body/{5 types}, /inventory/price/{5 bands}
Priority 0.75: /financing/apply, /financing/bad-credit
Priority 0.7: /inventory/year/{8 years}, /inventory/featured, /inventory/awd, etc.
Priority 0.7: /services, /sell-trade/valuation, /guides/buying-used-car-ontario
Priority 0.65: /as-is, /export, /wholesale, /insurance-certified, /about-us
Priority 0.6: /guides, /blog, /faq, /testimonials
Priority 0.5: /privacy, /terms, /contact
```

Import `getAllMakeSlugs`, `getAllBodyTypeSlugs`, `getAllPriceRangeSlugs` from `@/data/categories` and `getAllCitySlugs` from `@/data/cities`.

---

## Browse Redirect (for next session)

Replace `src/app/browse/page.tsx` content with:
```tsx
import { redirect } from 'next/navigation';
export const metadata = { robots: { index: false, follow: false } };
export default function BrowsePage() { redirect('/inventory'); }
```

---

## Page Count Summary

| Category | Built | Remaining |
|---|---|---|
| Data files | 1 (cities.ts) | 0 |
| Docs | 3 | 0 |
| Locations | 16 (hub + 15 cities) | 0 |
| Inventory hubs | 8 special + 5 body + 5 price + 8 year = 26 | make+model sub-hubs |
| Financing | 7 sub-pages | 2 (lease-buyout, bankruptcy) |
| Services | 7 pages | 0 |
| Sell / Trade | 3 sub-pages | 1 (sell-your-car) |
| Guides | 2 pages | 5 more pillars |
| **Total this session** | **~65 pages/files** | **~30+ remaining** |
