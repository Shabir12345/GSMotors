# GSMotorsinc Website — Claude Project Context

## Project Overview

**Client**: GSMotorsinc  
**Type**: Full-stack luxury/premium used car dealership website  
**Status**: Active development / production-deployed  
**Deployed at**: https://gs-motors.vercel.app  
**Location**: 3400 ON-115, Newcastle, ON L1B 0R6  
**Contact**: 647-801-2475 | concierge@gsmotorsinc.com

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL via Prisma ORM |
| Image Storage | Cloudflare R2 (S3-compatible) |
| Auth | JWT with bcryptjs |
| Deployment | Vercel |
| Animations | Framer Motion |
| Forms | React hooks + Zod validation |

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Admin portal (auth-protected)
│   │   ├── vehicles/[id]/  # Vehicle edit & photo management
│   │   └── page.tsx        # Admin login
│   ├── api/                # API routes (REST)
│   │   ├── auth/           # JWT auth
│   │   ├── vehicles/       # Public vehicle endpoints
│   │   └── admin/          # Protected admin endpoints
│   ├── inventory/          # Public inventory browsing
│   │   └── [make]/         # Filtered by make
│   ├── vehicles/           # Vehicle detail pages
│   ├── as-is/              # As-is vehicles section
│   ├── export/             # Export vehicles section
│   ├── wholesale/          # Wholesale section
│   ├── financing/          # Financing page + form
│   ├── sell-trade/         # Trade-in page + form
│   ├── contact/            # Contact page + form
│   ├── about-us/           # About page
│   ├── blog/               # Blog section
│   ├── faq/                # FAQ page
│   ├── testimonials/       # Testimonials page
│   ├── why-choose-us/      # Why choose us page
│   ├── insurance-certified/ # Insurance-certified vehicles
│   ├── browse/             # Browse vehicles
│   └── page.tsx            # Homepage
├── components/             # Shared React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHero.tsx        # Reusable hero section for inner pages
│   ├── PageCTA.tsx         # Reusable CTA section
│   ├── Breadcrumb.tsx      # Breadcrumb navigation
│   ├── VehicleCard.tsx
│   ├── VehicleForm.tsx
│   ├── VehicleGrid.tsx
│   ├── DynamicHeroText.tsx
│   ├── HeroScrollAnimation.tsx
│   └── ...
├── lib/                    # Core utilities
│   ├── prisma.ts           # Prisma client singleton
│   ├── auth.ts             # JWT helpers
│   ├── storage.ts          # R2/S3 image upload
│   └── validation.ts       # Zod schemas
├── data/                   # Static data files
│   ├── blog.ts
│   └── categories.ts
└── siteConfig.ts           # Dealership info, contact, social links
```

---

## Database Schema (Prisma)

Key models:
- **User** — admin users with roles: OWNER, STAFF, VIEWER
- **Vehicle** — inventory with: vin, year, make, model, trim, bodyType, priceCents, odometerKm, status, isFeatured, isAsIs, isExport, isWholesale, seoSlug
- **VehiclePhoto** — photos linked to vehicles, sortOrder, isPrimary
- **VehicleFeature** — features by category (Safety, Comfort, Technology, etc.)
- **ContactSubmission**, **FinancingApplication**, **TradeInRequest** — form submissions
- **ActivityLog** — admin audit trail

Vehicle statuses: AVAILABLE, PENDING, SOLD, DRAFT  
Prices stored in cents (priceCents) — always divide by 100 for display.

---

## Key Configuration

**siteConfig** (`src/siteConfig.ts`) — single source of truth for:
- Dealership name, description, URL
- Contact info (phone, email, address, mapUrl)
- Social links
- SEO metadata
- Analytics integration IDs

**Environment variables** (see `env.example`):
- `DATABASE_URL` — PostgreSQL connection string
- `JWT_SECRET` — Auth secret
- `R2_*` / `AWS_*` — Image storage credentials
- `NEXT_PUBLIC_APP_URL` — Public URL
- `NEXT_PUBLIC_GA_ID`, `GTM_ID`, `FACEBOOK_PIXEL_ID` — Analytics

---

## Admin Portal

- Login: `/admin`
- Vehicle CRUD: `/admin/vehicles`
- Photo management: `/admin/vehicles/[id]/photos`
- Protected by JWT middleware

---

## Common Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # prisma generate + next build
npm run db:studio    # Prisma Studio (GUI for DB)
npm run db:migrate   # Run migrations
npm run db:seed      # Seed initial data
npm run type-check   # TypeScript check (no emit)
```

---

## Coding Conventions

- **Prices**: Always stored as cents (`priceCents`), displayed as dollars
- **Slugs**: SEO-friendly, stored in `seoSlug` field
- **Images**: Uploaded to R2/S3, served via CDN URL
- **Styling**: Tailwind utility classes, dark theme, brand colors: red (`#dc2626`) and site-specific grays
- **API routes**: RESTful, validated with Zod, errors returned as `{ error: string }`
- **Components**: Functional React with TypeScript, hooks for state
- **No extra abstractions**: Don't add helpers or utilities unless needed for multiple uses

---

## Deployment

- **Platform**: Vercel
- **Branch**: `main` auto-deploys
- **Config**: `vercel.json` in root
- **Build command**: `prisma generate && next build`
