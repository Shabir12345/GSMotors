import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';
import { cities } from '@/data/cities';
import { siteConfig } from '@/siteConfig';

export const metadata = {
  title: 'Used Car Dealer Serving Durham Region & GTA | GSMotorsinc',
  description: `GSMotorsinc in Newcastle, ON serves buyers across Durham Region, the GTA, and Northumberland. Quality pre-owned vehicles, financing, and trade-ins for ${cities.length} Ontario communities.`,
};

const primaryCities = ['newcastle', 'bowmanville', 'clarington', 'courtice', 'oshawa'];

export default function LocationsPage() {
  const featured = cities.filter((c) => primaryCities.includes(c.slug));
  const rest = cities.filter((c) => !primaryCities.includes(c.slug));

  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Service Areas"
        badgeColor="green"
        title={
          <>
            Serving{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">
              Durham Region & GTA
            </span>
          </>
        }
        subtitle={`Based in Newcastle, ON — GSMotorsinc delivers honest pre-owned vehicles and easy financing to buyers across ${cities.length} Ontario communities.`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Locations', href: '/locations' },
        ]}
      />

      {/* Primary Service Area */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Primary Service Area</h2>
        <p className="text-gray-400 text-sm mb-8">Closest communities to our Newcastle showroom</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/40 rounded-2xl p-6 transition-all hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-gray-500 text-xs">{city.region}, {city.province}</p>
                </div>
                {city.driveTimeMin === 0 ? (
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-brand-accent/15 text-brand-accent border border-brand-accent/20">
                    Our Location
                  </span>
                ) : (
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                    {city.driveTimeMin} min
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{city.description}</p>
              <div className="mt-4 flex items-center gap-1 text-brand-accent text-xs font-semibold">
                View Details
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Extended Service Area */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Extended Service Area</h2>
        <p className="text-gray-400 text-sm mb-8">We welcome buyers from across the GTA and beyond</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="group bg-white/[0.03] border border-white/[0.06] hover:border-brand-accent/30 rounded-xl p-5 transition-all hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-white text-sm group-hover:text-brand-accent transition-colors">
                  {city.name}
                </h3>
                {city.driveTimeMin > 0 && (
                  <span className="text-[10px] text-gray-500">{city.driveTimeMin} min</span>
                )}
              </div>
              <p className="text-gray-500 text-xs">{city.region}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Drive to Newcastle */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">
            Why Buyers Drive to Newcastle
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Honest Pricing',
                desc: 'No hidden fees, no surprise add-ons. The price you see is what you pay — always.',
                color: 'text-brand-accent',
              },
              {
                title: '150-Point Certified',
                desc: 'Every vehicle passes a rigorous inspection before it reaches our lot.',
                color: 'text-brand-highlight',
              },
              {
                title: 'Easy Financing',
                desc: 'All credit types welcome. We work with lenders across Ontario for fast approvals.',
                color: 'text-purple-400',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className={`text-xl font-bold mb-2 ${item.color}`}>{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
            >
              {siteConfig.contact.phone}
            </a>
            <Link
              href={siteConfig.contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline text-sm font-medium"
            >
              Get Directions →
            </Link>
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Find Your Next Vehicle?"
        subtitle="Visit our Newcastle showroom or browse our full inventory online."
        primaryLabel="Browse Inventory"
        secondaryLabel="Contact Us"
      />
    </div>
  );
}
