import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';
import { priceRanges, getPriceRangeBySlug } from '@/data/categories';

export function generateStaticParams() {
  return priceRanges.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const range = getPriceRangeBySlug(params.slug);
  if (!range) return {};
  return {
    title: `Used Cars ${range.label} in Ontario | GSMotorsinc`,
    description: `${range.description} Shop pre-owned vehicles priced ${range.label} at GSMotorsinc Newcastle, ON. Financing available OAC.`,
  };
}

const whatYouGet = [
  {
    title: 'What to Expect',
    desc: 'Quality inspected vehicles at this price point. Every car passes our 150-point certification process.',
    color: 'text-brand-accent',
  },
  {
    title: 'Financing Available',
    desc: 'Spread your payments over 24–84 months. All credit types considered. Rates from 4.99% OAC.',
    color: 'text-brand-highlight',
  },
  {
    title: 'Trade-In Welcome',
    desc: 'Apply your current vehicle\'s value toward your purchase and potentially save on HST.',
    color: 'text-purple-400',
  },
];

export default function PriceBandPage({ params }: { params: { slug: string } }) {
  const range = getPriceRangeBySlug(params.slug);
  if (!range) notFound();

  const otherRanges = priceRanges.filter((r) => r.slug !== range.slug);

  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Price Range"
        badgeColor="amber"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">
              Quality Used Cars
            </span>{' '}
            {range.label}
          </>
        }
        subtitle={range.description}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: range.label, href: `/inventory/price/${range.slug}` },
        ]}
      />

      {/* What you get */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {whatYouGet.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all"
            >
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browse CTA */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Browse Vehicles Priced {range.label}
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
            View all certified pre-owned vehicles in the {range.label} price range — inventory updated weekly.
          </p>
          <Link
            href={
              range.max >= 100000
                ? `/inventory?minPrice=${range.min}`
                : `/inventory?minPrice=${range.min}&maxPrice=${range.max}`
            }
            className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105"
          >
            Browse Vehicles {range.label} →
          </Link>
        </div>
      </section>

      {/* Other price ranges */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h3 className="text-lg font-bold text-white mb-5">Explore Other Price Ranges</h3>
        <div className="flex flex-wrap gap-3">
          {otherRanges.map((r) => (
            <Link
              key={r.slug}
              href={`/inventory/price/${r.slug}`}
              className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/40 hover:text-brand-accent text-gray-300 text-sm font-semibold transition-all"
            >
              {r.label}
            </Link>
          ))}
        </div>
      </section>

      <PageCTA
        title="Flexible Financing Available"
        subtitle="All credit types welcome. Get pre-approved in minutes."
        primaryHref="/financing"
        primaryLabel="See Financing Options"
        secondaryHref="/sell-trade"
        secondaryLabel="Trade In Your Car"
      />
    </div>
  );
}
