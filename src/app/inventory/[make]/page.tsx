import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getMakeBySlug, getAllMakeSlugs } from '@/data/categories';

interface PageProps {
  params: {
    make: string;
  };
}

export async function generateStaticParams() {
  const makes = getAllMakeSlugs();
  return makes.map(make => ({
    make,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const make = getMakeBySlug(params.make);

  if (!make) {
    return {
      title: 'Make Not Found',
    };
  }

  return {
    title: `Pre-Owned ${make.name} Cars for Sale in Toronto | GS Motors`,
    description: `Quality affordable ${make.name} vehicles in Toronto. Browse our selection of used ${make.name} cars with transparent pricing and warranty protection.`,
    keywords: [
      `used ${make.name} cars Toronto`,
      `second hand ${make.name} GTA`,
      `affordable ${make.name} pre-owned`,
      `quality ${make.name} vehicles`
    ],
  };
}

export default function MakePage({ params }: PageProps) {
  const make = getMakeBySlug(params.make);

  if (!make) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-20 md:pt-28">
      {/* Breadcrumb */}
      <section className="container mx-auto px-4 py-4">
        <Breadcrumb 
          items={[
            { name: 'Home', href: '/' },
            { name: 'All Vehicles', href: '/inventory' },
            { name: make.name, href: `/inventory/${params.make}` }
          ]}
        />
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 section-padding text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          Pre-Owned <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">{make.name}</span> Cars
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          {make.description}
        </p>

        {/* Price Range */}
        <div className="flex items-center justify-center gap-4 text-lg">
          <span className="text-gray-300">Average Price Range:</span>
          <span className="font-bold text-brand-accent">
            ${(make.avgPriceRange.min / 1000).toFixed(0)}k - ${(make.avgPriceRange.max / 1000).toFixed(0)}k
          </span>
        </div>
      </section>

      {/* Popular Models */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Browse by Model
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {make.popularModels.map((model) => (
            <Link
              key={model}
              href={`/inventory/${make.slug}/${model}`}
              className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-accent/50 transition-all hover:bg-white/10 text-center group"
            >
              <p className="font-bold text-white group-hover:text-brand-accent transition-colors capitalize">
                {model.replace('-', ' ')}
              </p>
              <p className="text-xs text-gray-400 mt-2">View All →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Buy This Brand Section */}
      <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-transparent rounded-3xl border border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Why Choose {make.name}?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Reliability & Trust</h3>
            <p className="text-gray-400 leading-relaxed">
              {make.name} vehicles are known for durability and consistent performance. Whether you're commuting daily or taking weekend trips, you can count on reliable service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Value & Resale</h3>
            <p className="text-gray-400 leading-relaxed">
              {make.name} models hold their value well, meaning your investment maintains strong resale potential. Lower depreciation means better long-term value.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Parts & Service</h3>
            <p className="text-gray-400 leading-relaxed">
              {make.name} parts are widely available and competitively priced. Service is accessible at any independent shop or franchise dealership across the GTA.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Owner Community</h3>
            <p className="text-gray-400 leading-relaxed">
              Join thousands of {make.name} owners across Toronto. Active owner forums, clubs, and enthusiasts provide support, tips, and maintenance advice.
            </p>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Current {make.name} Inventory
        </h2>

        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-6xl mb-4">🚗</div>
          <h3 className="text-xl font-bold text-white mb-3">Browse Our {make.name} Selection</h3>
          <p className="text-gray-400 mb-6">
            Use our advanced filters to find the exact {make.name} model you're looking for. Filter by model, year, price, and features.
          </p>
          <Link
            href={`/inventory?make=${make.slug}`}
            className="btn-modern bg-brand-accent hover:bg-brand-highlight text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View All {make.name} Vehicles
          </Link>
        </div>
      </section>

      {/* Buying Guide CTA */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-center">
          Learn About Buying {make.name}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/blog/best-reliable-used-cars-buy"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
              Brand Reliability Guide
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Understand why {make.name} is trusted by thousands of buyers.
            </p>
            <span className="text-brand-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More →
            </span>
          </Link>

          <Link
            href="/blog/complete-guide-buying-used-car-toronto"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
              Complete Buying Guide
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Step-by-step guide to buying the perfect used vehicle.
            </p>
            <span className="text-brand-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More →
            </span>
          </Link>
        </div>
      </section>

      {/* Financing & Services CTA */}
      <section className="container mx-auto px-4 section-padding grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/30 text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="font-bold text-white mb-2">Easy Financing</h3>
          <p className="text-sm text-gray-400 mb-4">
            Competitive rates, flexible terms. Get approved for your {make.name} today.
          </p>
          <Link
            href="/financing"
            className="text-brand-accent font-semibold text-sm hover:text-brand-highlight transition-colors"
          >
            Learn About Financing →
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-highlight/20 to-transparent border border-brand-highlight/30 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="font-bold text-white mb-2">Certified Quality</h3>
          <p className="text-sm text-gray-400 mb-4">
            Every {make.name} passes our rigorous 150-point inspection.
          </p>
          <Link
            href="/insurance-certified"
            className="text-brand-highlight font-semibold text-sm hover:text-brand-accent transition-colors"
          >
            View Certification Details →
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="font-bold text-white mb-2">Trade-In Appraisal</h3>
          <p className="text-sm text-gray-400 mb-4">
            Have a trade-in? Get a fair valuation on your current vehicle.
          </p>
          <Link
            href="/sell-trade"
            className="text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors"
          >
            Get Your Appraisal →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Common {make.name} Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: `What's the average mileage for ${make.name} vehicles at GS Motors?`,
              a: `We typically stock ${make.name} vehicles from 60,000 to 150,000 km. Higher mileage vehicles are priced accordingly. Every ${make.name} passes our 150-point inspection regardless of age or mileage.`
            },
            {
              q: `How reliable are pre-owned ${make.name} cars?`,
              a: `${make.name} has a strong reputation for reliability. With proper maintenance, most models run reliably well past 200,000 km. We only sell ${make.name} vehicles we're confident will serve you well.`
            },
            {
              q: `What warranty coverage comes with a ${make.name} purchase?`,
              a: `Warranty depends on the vehicle's age and mileage. Most recent ${make.name} models come with our standard warranty plus extended options. Ask about specific coverage for your vehicle.`
            },
            {
              q: `Can I get financing for a ${make.name} vehicle?`,
              a: `Yes! We work with top lenders to secure competitive rates for ${make.name} purchases. Get pre-approved in minutes and drive home the same day.`
            },
          ].map((faq, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer items-center justify-between rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 px-6 py-4 transition-all">
                <h3 className="font-semibold text-white group-open:text-brand-accent transition-colors text-left pr-4">
                  {faq.q}
                </h3>
                <span className="flex-shrink-0 text-brand-accent transition-transform group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </summary>
              <div className="rounded-b-2xl bg-white/[0.02] border border-t-0 border-white/5 px-6 py-6">
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </details>
          ))}

          <Link
            href="/faq"
            className="text-brand-accent hover:text-brand-highlight transition-colors font-semibold text-center block mt-6"
          >
            View All FAQs →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 rounded-3xl border border-white/5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to Drive Your {make.name} Home?
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          Visit our showroom to test drive the perfect {make.name}. Our team is ready to help you find the right vehicle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={`/inventory?make=${make.slug}`}
            className="btn-modern bg-white text-brand-darker hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View All {make.name}
          </Link>
          <Link
            href="/contact"
            className="btn-modern bg-brand-darker text-white border border-white/20 hover:bg-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            Schedule Test Drive
          </Link>
        </div>
      </section>
    </div>
  );
}
