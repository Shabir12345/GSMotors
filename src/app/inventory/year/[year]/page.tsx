import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

const YEARS = ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

const yearCopy: Record<string, { headline: string; body: string; tech: string[] }> = {
  '2015': {
    headline: 'A Reliable Vintage',
    body: '2015 model year vehicles offer proven reliability at entry-level prices. These are well-understood platforms with widely available parts and strong owner satisfaction records.',
    tech: ['Bluetooth connectivity standard', 'Backup cameras on many models', 'Fuel-efficient 4-cylinder options', 'Well-proven drivetrains'],
  },
  '2016': {
    headline: 'Feature-Rich & Affordable',
    body: '2016 vehicles introduced improved infotainment systems and safety features across most brands. A sweet spot for value buyers seeking technology without premium pricing.',
    tech: ['Apple CarPlay / Android Auto on select models', 'Improved safety ratings', 'Turbocharged engines widely available', 'Lane departure warnings on premium trims'],
  },
  '2017': {
    headline: 'Safety Standards Elevated',
    body: '2017 models saw widespread adoption of automatic emergency braking and updated collision avoidance systems. Strong build quality across Japanese and European makes.',
    tech: ['Automatic emergency braking (AEB) expanding', 'Adaptive cruise control on more trims', 'Updated 8" touchscreens', 'Improved fuel economy across lineups'],
  },
  '2018': {
    headline: 'Modern Tech at Great Value',
    body: '2018 vehicles represent the beginning of the modern era for most brands — updated platforms, digital dashboards, and advanced safety suites. Excellent value in today\'s market.',
    tech: ['CarPlay / Android Auto near-universal', 'Digital instrument clusters', 'Wireless charging on select models', 'Multi-zone climate control widespread'],
  },
  '2019': {
    headline: 'Near-New at Used Prices',
    body: '2019 models deliver near-new quality at used car prices. Most manufacturers were mid-generation, meaning thoroughly refined platforms with manufacturer updates already applied.',
    tech: ['Standard 7–10" touchscreens', 'Advanced driver assistance systems (ADAS)', 'Remote start on most trims', 'USB-C charging ports'],
  },
  '2020': {
    headline: 'Latest Generation Refinement',
    body: '2020 model years represent fully modernized platforms with the latest safety, connectivity, and efficiency standards. These vehicles command respect on the road and at resale.',
    tech: ['Wi-Fi hotspot standard on many models', 'Automatic high beams', 'Traffic sign recognition', 'Over-the-air update capable (select brands)'],
  },
  '2021': {
    headline: 'Almost New',
    body: '2021 vehicles are nearly new — with the latest generation technology, warranty considerations, and extremely low depreciation compared to brand new. Smart money.',
    tech: ['HD surround-view cameras', 'Wireless CarPlay standard (many brands)', 'Hybrid options widely available', 'Updated interior designs'],
  },
  '2022': {
    headline: 'Virtually New',
    body: '2022 model year vehicles are the closest you get to new without paying new prices. Latest safety ratings, current generation features, and manufacturer refinements throughout.',
    tech: ['Digital cockpits and heads-up displays', 'Semi-autonomous driving features', 'EV and plug-in hybrid options', 'Latest generation powertrains'],
  },
};

export function generateStaticParams() {
  return YEARS.map((year) => ({ year }));
}

export async function generateMetadata({
  params,
}: {
  params: { year: string };
}): Promise<Metadata> {
  if (!YEARS.includes(params.year)) return {};
  return {
    title: `Used ${params.year} Vehicles for Sale in Ontario | GSMotorsinc`,
    description: `Shop certified ${params.year} model year pre-owned vehicles at GSMotorsinc Newcastle, ON. All makes, multiple body styles. Financing available. Serving Durham Region & GTA.`,
  };
}

export default function YearPage({ params }: { params: { year: string } }) {
  if (!YEARS.includes(params.year)) notFound();

  const copy = yearCopy[params.year];
  const otherYears = YEARS.filter((y) => y !== params.year);

  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge={`Model Year ${params.year}`}
        badgeColor="indigo"
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">
              {params.year}
            </span>{' '}
            Pre-Owned Vehicles
          </>
        }
        subtitle={`Quality ${params.year} model year vehicles at transparent prices. Certified, inspected, and ready to drive.`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: params.year, href: `/inventory/year/${params.year}` },
        ]}
      />

      {/* About this year */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              {copy.headline}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{copy.body}</p>
            <div className="mt-8">
              <Link
                href={`/inventory?year=${params.year}`}
                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105"
              >
                Browse {params.year} Vehicles →
              </Link>
            </div>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-5">Notable Features in {params.year}</h3>
            <div className="space-y-3">
              {copy.tech.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other years */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h3 className="text-lg font-bold text-white mb-5">Browse Other Model Years</h3>
        <div className="flex flex-wrap gap-3">
          {otherYears.map((y) => (
            <Link
              key={y}
              href={`/inventory/year/${y}`}
              className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/40 hover:text-brand-accent text-gray-300 text-sm font-semibold transition-all"
            >
              {y}
            </Link>
          ))}
        </div>
      </section>

      <PageCTA
        title={`Find Your ${params.year} Vehicle`}
        subtitle="Certified pre-owned. Financing available for all credit types."
        primaryHref={`/inventory?year=${params.year}`}
        primaryLabel={`Browse ${params.year} Inventory`}
        secondaryHref="/financing"
        secondaryLabel="Get Financing"
      />
    </div>
  );
}
