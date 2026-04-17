import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';
import { bodyTypes, getBodyTypeBySlug, vehicleMakes } from '@/data/categories';

export function generateStaticParams() {
  return bodyTypes.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const bt = getBodyTypeBySlug(params.slug);
  if (!bt) return {};
  return {
    title: `Used ${bt.name} for Sale in Durham Region | GSMotorsinc`,
    description: `${bt.description} Shop pre-owned ${bt.name.toLowerCase()} at GSMotorsinc Newcastle, ON. Financing available. Serving Durham Region and the GTA.`,
  };
}

export default function BodyTypePage({ params }: { params: { slug: string } }) {
  const bt = getBodyTypeBySlug(params.slug);
  if (!bt) notFound();

  const relatedMakes = vehicleMakes.filter((m) =>
    bt.popularMakes.some((pm) => pm.toLowerCase() === m.name.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge={bt.name}
        badgeColor="green"
        title={
          <>
            Used{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">
              {bt.name}
            </span>{' '}
            for Sale in Ontario
          </>
        }
        subtitle={bt.description}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: bt.name, href: `/inventory/body/${bt.slug}` },
        ]}
      />

      {/* Benefits grid */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
          Why Choose a {bt.name.slice(0, -1)}?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bt.benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5"
            >
              <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular makes */}
      {relatedMakes.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Popular Makes in Our {bt.name} Inventory
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedMakes.map((make) => (
              <Link
                key={make.slug}
                href={`/inventory/make/${make.slug}`}
                className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/40 hover:text-brand-accent text-gray-300 text-sm font-semibold transition-all"
              >
                {make.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Browse CTA */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Browse {bt.name} in Stock Now
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">
            View our current {bt.name.toLowerCase()} inventory — updated weekly, every vehicle certified and fairly priced.
          </p>
          <Link
            href={`/inventory?bodyType=${bt.id}`}
            className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105"
          >
            See All {bt.name} in Stock →
          </Link>
        </div>
      </section>

      <PageCTA
        title={`Ready to Find Your ${bt.name.slice(0, -1)}?`}
        subtitle="Financing available for all credit types. Trade-ins welcome."
        primaryLabel={`Browse ${bt.name}`}
        primaryHref={`/inventory?bodyType=${bt.id}`}
        secondaryHref="/financing"
        secondaryLabel="Explore Financing"
      />
    </div>
  );
}
