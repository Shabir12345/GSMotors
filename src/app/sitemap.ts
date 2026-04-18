import { MetadataRoute } from 'next';
import { cities } from '@/data/cities';
import { vehicleMakes, bodyTypes, priceRanges } from '@/data/categories';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://gs-motors.vercel.app';
  const now = new Date();

  const url = (path: string, priority: number, changeFreq: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly') => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  });

  return [
    // Core
    url('/', 1.0, 'daily'),
    url('/inventory', 0.95, 'daily'),
    url('/contact', 0.85, 'monthly'),
    url('/financing', 0.8, 'monthly'),
    url('/sell-trade', 0.8, 'monthly'),
    url('/as-is', 0.75, 'weekly'),
    url('/export', 0.75, 'weekly'),
    url('/wholesale', 0.75, 'weekly'),

    // Locations hub + city pages
    url('/locations', 0.9, 'weekly'),
    ...cities.map(c => url(`/locations/${c.slug}`, 0.85, 'weekly')),

    // Inventory — makes
    ...vehicleMakes.map(m => url(`/inventory/${m.slug}`, 0.8, 'weekly')),

    // Inventory — body types
    url('/inventory/body/sedan', 0.75, 'weekly'),
    url('/inventory/body/suv', 0.75, 'weekly'),
    url('/inventory/body/coupe', 0.75, 'weekly'),
    url('/inventory/body/wagon', 0.75, 'weekly'),
    url('/inventory/body/hatchback', 0.75, 'weekly'),

    // Inventory — price bands
    ...priceRanges.map(p => url(`/inventory/price/${p.slug}`, 0.75, 'weekly')),

    // Inventory — years
    ...[2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022].map(y => url(`/inventory/year/${y}`, 0.7, 'weekly')),

    // Inventory — special collections
    url('/inventory/featured', 0.8, 'daily'),
    url('/inventory/new-arrivals', 0.8, 'daily'),
    url('/inventory/awd', 0.75, 'weekly'),
    url('/inventory/certified', 0.75, 'weekly'),
    url('/inventory/fuel-efficient', 0.7, 'weekly'),

    // Financing subpages
    url('/financing/apply', 0.8, 'monthly'),
    url('/financing/calculator', 0.75, 'monthly'),
    url('/financing/bad-credit', 0.8, 'monthly'),
    url('/financing/no-credit', 0.8, 'monthly'),
    url('/financing/first-time-buyer', 0.75, 'monthly'),
    url('/financing/newcomers', 0.75, 'monthly'),
    url('/financing/self-employed', 0.75, 'monthly'),

    // Services
    url('/services', 0.8, 'monthly'),
    url('/services/inspection', 0.7, 'monthly'),
    url('/services/warranty', 0.7, 'monthly'),
    url('/services/extended-warranty', 0.7, 'monthly'),
    url('/services/detailing', 0.65, 'monthly'),
    url('/services/carfax-report', 0.7, 'monthly'),
    url('/services/delivery', 0.7, 'monthly'),

    // Sell / Trade subpages
    url('/sell-trade/valuation', 0.75, 'monthly'),
    url('/sell-trade/process', 0.7, 'monthly'),
    url('/sell-trade/trade-vs-sell', 0.7, 'monthly'),

    // Financing — additional
    url('/financing/lease-buyout', 0.75, 'monthly'),
    url('/financing/bankruptcy', 0.75, 'monthly'),

    // Sell / Trade — additional
    url('/sell-trade/sell-your-car', 0.75, 'monthly'),

    // Guides
    url('/guides', 0.75, 'monthly'),
    url('/guides/buying-used-car-ontario', 0.75, 'monthly'),
    url('/guides/first-time-buyer', 0.75, 'monthly'),
    url('/guides/trade-in-guide', 0.75, 'monthly'),

    // Company pages
    url('/about-us', 0.7, 'monthly'),
    url('/why-choose-us', 0.7, 'monthly'),
    url('/insurance-certified', 0.7, 'monthly'),
    url('/testimonials', 0.65, 'monthly'),
    url('/blog', 0.7, 'weekly'),
    url('/faq', 0.65, 'monthly'),
    url('/careers', 0.6, 'monthly'),
    url('/privacy', 0.4, 'yearly'),
    url('/terms', 0.4, 'yearly'),
  ];
}
