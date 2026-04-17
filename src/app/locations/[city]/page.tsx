import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';
import { cities, getCityBySlug, getNearbyCities } from '@/data/cities';
import { siteConfig } from '@/siteConfig';

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};
  return {
    title: `Used Car Dealer Serving ${city.name}, ON | GSMotorsinc`,
    description: `Looking for quality used cars near ${city.name}? GSMotorsinc in Newcastle serves ${city.name} drivers with certified pre-owned vehicles, flexible financing, and trade-ins. ${city.driveTimeDesc}.`,
    keywords: city.keywords.join(', '),
  };
}

const whyDriveItems = [
  {
    title: 'Wide Selection',
    desc: '10+ makes and dozens of models in stock. Updated regularly with new arrivals.',
    color: 'text-brand-accent',
  },
  {
    title: '150-Point Certified',
    desc: 'Every vehicle passes our rigorous inspection before it reaches our showroom floor.',
    color: 'text-brand-highlight',
  },
  {
    title: 'Easy Financing',
    desc: 'All credit types welcome. Fast approvals with competitive rates across Ontario lenders.',
    color: 'text-purple-400',
  },
];

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const nearby = getNearbyCities(city);
  const isDurhamHub = city.slug === 'durham-region';

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3400 ON-115',
      addressLocality: 'Newcastle',
      addressRegion: 'ON',
      postalCode: 'L1B 0R6',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Ontario',
      },
    },
    priceRange: '$$',
  };

  return (
    <div className="min-h-screen bg-brand-darker">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <PageHero
        badge={`${city.name}, ${city.province}`}
        badgeColor="blue"
        title={
          <>
            Used Cars Near{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">
              {city.name}
            </span>
            , ON
          </>
        }
        subtitle={`${city.driveTimeDesc}. GSMotorsinc brings honest pricing and certified pre-owned vehicles to ${city.name} drivers without the big-city markup.`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Locations', href: '/locations' },
          { name: city.name, href: `/locations/${city.slug}` },
        ]}
      />

      {/* Stats bar */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              value: city.driveTimeMin === 0 ? 'Here' : `${city.driveTimeMin} min`,
              label: 'From Newcastle',
              color: 'text-brand-accent',
            },
            { value: city.population, label: 'Population', color: 'text-brand-highlight' },
            { value: '10+', label: 'Years Serving ON', color: 'text-purple-400' },
            { value: '150+', label: 'Point Inspection', color: 'text-cyan-400' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 text-center"
            >
              <div className={`text-3xl font-bold mb-1.5 ${stat.color}`}>{stat.value}</div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
              Serving {city.name} Drivers Since 2014
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>{city.description}</p>
              {!isDurhamHub && (
                <p>
                  Whether you&apos;re looking for a reliable sedan, family SUV, or fuel-efficient
                  hatchback — our inventory is updated weekly and every vehicle comes with a full
                  CarFax report and 150-point inspection certificate.
                </p>
              )}
              {isDurhamHub && (
                <p>
                  As Durham Region&apos;s independent pre-owned dealer, we proudly serve Clarington,
                  Oshawa, Whitby, Ajax, Pickering, and every community in between. Visit us at
                  3400 ON-115, Newcastle.
                </p>
              )}
            </div>
            {city.localLandmarks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {city.localLandmarks.map((lm) => (
                  <span
                    key={lm}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400"
                  >
                    {lm}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/inventory"
                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105 text-center"
              >
                Browse Inventory
              </Link>
              <Link
                href="/financing"
                className="btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 text-center"
              >
                Financing Options
              </Link>
            </div>
          </div>

          {/* Contact card */}
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8 space-y-5">
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 transition-colors">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-9 h-9 rounded-xl bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">{siteConfig.contact.address}</span>
              </div>
            </div>
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold transition-colors"
            >
              Get Directions →
            </Link>
          </div>
        </div>
      </section>

      {/* Why drive to Newcastle */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">
          Why {city.name} Buyers Choose GSMotorsinc
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {whyDriveItems.map((item) => (
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

      {/* Nearby cities */}
      {nearby.length > 0 && (
        <section className="container mx-auto px-4 md:px-6 mb-16">
          <h3 className="text-lg font-bold text-white mb-4">Also Serving Nearby Areas</h3>
          <div className="flex flex-wrap gap-3">
            {nearby.map((nc) => (
              <Link
                key={nc.slug}
                href={`/locations/${nc.slug}`}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-brand-accent/30 hover:text-brand-accent text-gray-300 text-sm font-medium transition-all"
              >
                {nc.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      <PageCTA
        title={`Ready to Find Your Next Car, ${city.name}?`}
        subtitle="Browse our certified inventory online or visit our Newcastle showroom."
        primaryLabel="Browse Inventory"
        secondaryHref="/contact"
        secondaryLabel="Get Directions"
      />
    </div>
  );
}
