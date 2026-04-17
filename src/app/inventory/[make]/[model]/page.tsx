import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getMakeBySlug, getAllMakeSlugs } from '@/data/categories';

interface PageProps {
  params: {
    make: string;
    model: string;
  };
}

export async function generateStaticParams() {
  const makes = getAllMakeSlugs();
  const params = [];

  for (const make of makes) {
    const makeData = getMakeBySlug(make);
    if (makeData) {
      for (const model of makeData.popularModels) {
        params.push({
          make,
          model,
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const make = getMakeBySlug(params.make);

  if (!make) {
    return {
      title: 'Vehicle Not Found',
    };
  }

  const modelName = params.model.replace('-', ' ');

  return {
    title: `Pre-Owned ${make.name} ${modelName} for Sale in Toronto | GS Motors`,
    description: `Quality used ${make.name} ${modelName} vehicles in Toronto. Certified inspection, transparent pricing, warranty protection. Find your ${modelName} today.`,
    keywords: [
      `used ${make.name} ${modelName} Toronto`,
      `affordable ${make.name} ${modelName} GTA`,
      `certified pre-owned ${modelName}`,
      `${modelName} vehicle price Toronto`
    ],
  };
}

export default function ModelPage({ params }: PageProps) {
  const make = getMakeBySlug(params.make);

  if (!make) {
    notFound();
  }

  const modelName = params.model.replace(/-/g, ' ');
  const modelCapital = modelName.charAt(0).toUpperCase() + modelName.slice(1);

  return (
    <div className="min-h-screen bg-brand-dark pt-20 md:pt-28">
      {/* Breadcrumb */}
      <section className="container mx-auto px-4 py-4">
        <Breadcrumb 
          items={[
            { name: 'Home', href: '/' },
            { name: 'All Vehicles', href: '/inventory' },
            { name: make.name, href: `/inventory/${params.make}` },
            { name: modelCapital, href: `/inventory/${params.make}/${params.model}` }
          ]}
        />
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 section-padding text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          Pre-Owned <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">{make.name} {modelCapital}</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
          Quality {make.name} {modelCapital} vehicles with certified inspection and transparent pricing. Find reliability and value in Toronto.
        </p>
      </section>

      {/* Key Facts Grid */}
      <section className="container mx-auto px-4 section-padding">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/30 text-center">
            <div className="text-4xl mb-3">📊</div>
            <p className="text-gray-300 font-semibold mb-1">Popular Model</p>
            <p className="text-sm text-gray-400">Best-selling in its class</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-highlight/20 to-transparent border border-brand-highlight/30 text-center">
            <div className="text-4xl mb-3">✓</div>
            <p className="text-gray-300 font-semibold mb-1">Reliable Platform</p>
            <p className="text-sm text-gray-400">Proven longevity</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 text-center">
            <div className="text-4xl mb-3">💰</div>
            <p className="text-gray-300 font-semibold mb-1">Great Value</p>
            <p className="text-sm text-gray-400">Affordable pricing</p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-transparent border border-cyan-500/30 text-center">
            <div className="text-4xl mb-3">🔧</div>
            <p className="text-gray-300 font-semibold mb-1">Easy Service</p>
            <p className="text-sm text-gray-400">Affordable maintenance</p>
          </div>
        </div>
      </section>

      {/* What to Know Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          About the {make.name} {modelCapital}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
            <ul className="space-y-3">
              {[
                'Reliable and proven platform',
                'Good fuel economy',
                'Comfortable interior for daily commuting',
                'Strong resale value',
                'Widely available parts and service',
                'Popular model means plenty of community support'
              ].map((feature, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-brand-accent">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">Potential Considerations</h3>
            <ul className="space-y-3">
              {[
                'Check service records for maintenance history',
                'Verify transmission condition (automatic vs. manual)',
                'Inspect for common wear items (brakes, tires)',
                'Test all electronic features',
                'Confirm accident history from vehicle report',
                'Review mileage and overall body condition'
              ].map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-orange-400">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-center">
          {make.name} {modelCapital} Now in Stock
        </h2>

        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-white mb-3">Browse Our {modelCapital} Selection</h3>
          <p className="text-gray-400 mb-6">
            View all available {make.name} {modelCapital} models with photos, details, and pricing.
          </p>
          <Link
            href={`/inventory?make=${make.slug}&model=${params.model}`}
            className="btn-modern bg-brand-accent hover:bg-brand-highlight text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View All {modelCapital} Vehicles
          </Link>
        </div>
      </section>

      {/* Year & Generation Overview */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Which Year Should You Buy?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-white mb-3">Most Recent (2020+)</h3>
            <p className="text-gray-400 text-sm mb-4">
              Latest features, newest technology, warranty coverage. Higher price but maximum modern convenience.
            </p>
            <div className="text-sm text-brand-accent font-semibold">Higher price range</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-brand-accent/30 border-2">
            <div className="inline-block px-2 py-1 bg-brand-accent/20 text-brand-accent text-xs font-bold rounded mb-3">
              BEST VALUE
            </div>
            <h3 className="font-bold text-white mb-3">Mid-Range (2015-2019)</h3>
            <p className="text-gray-400 text-sm mb-4">
              Great balance of price and features. Modern tech, good warranty options, reliable performance.
            </p>
            <div className="text-sm text-brand-accent font-semibold">Optimal balance</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-bold text-white mb-3">Previous Gen (2010-2014)</h3>
            <p className="text-gray-400 text-sm mb-4">
              Deep value pricing. Proven reliability, excellent for budget buyers, minimal technology.
            </p>
            <div className="text-sm text-brand-accent font-semibold">Budget-friendly</div>
          </div>
        </div>
      </section>

      {/* Why This Model Section */}
      <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-transparent rounded-3xl border border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight text-center">
          Why {make.name} {modelCapital} Owners Love Their Cars
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">❤️</div>
            <div>
              <h3 className="font-bold text-white mb-1">Reliability</h3>
              <p className="text-gray-400 text-sm">Owners report years of dependable service and minimal major repairs.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <h3 className="font-bold text-white mb-1">Fuel Economy</h3>
              <p className="text-gray-400 text-sm">Great MPG ratings mean lower fuel costs over the vehicle's lifetime.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">🛠️</div>
            <div>
              <h3 className="font-bold text-white mb-1">Easy Maintenance</h3>
              <p className="text-gray-400 text-sm">Affordable parts, simpler servicing, available at any shop.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-3xl flex-shrink-0">💰</div>
            <div>
              <h3 className="font-bold text-white mb-1">Resale Value</h3>
              <p className="text-gray-400 text-sm">Strong resale value means your investment holds up over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Next Steps */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Your Next Steps
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              step: '1',
              title: 'Browse Our Inventory',
              desc: `Check out our current selection of ${make.name} ${modelCapital} vehicles. View photos, specs, and pricing.`
            },
            {
              step: '2',
              title: 'Get Pre-Approved for Financing',
              desc: 'Apply for financing in minutes. Know your budget and drive home the same day.'
            },
            {
              step: '3',
              title: 'Schedule a Test Drive',
              desc: 'Contact us to schedule a test drive. Experience the ${modelCapital} yourself.'
            },
            {
              step: '4',
              title: 'Complete Your Purchase',
              desc: 'Finalize your purchase with transparent pricing and no hidden fees. Our team handles everything.'
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all">
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services CTA */}
      <section className="container mx-auto px-4 section-padding grid md:grid-cols-3 gap-6">
        <Link
          href="/financing"
          className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/30 hover:border-brand-accent/60 transition-all text-center group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💳</div>
          <h3 className="font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">Flexible Financing</h3>
          <p className="text-sm text-gray-400">Get approved with competitive rates</p>
        </Link>

        <Link
          href="/sell-trade"
          className="p-6 rounded-2xl bg-gradient-to-br from-brand-highlight/20 to-transparent border border-brand-highlight/30 hover:border-brand-highlight/60 transition-all text-center group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔄</div>
          <h3 className="font-bold text-white mb-2 group-hover:text-brand-highlight transition-colors">Trade-In Appraisal</h3>
          <p className="text-sm text-gray-400">Get value for your current vehicle</p>
        </Link>

        <Link
          href="/insurance-certified"
          className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 hover:border-purple-500/60 transition-all text-center group"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✅</div>
          <h3 className="font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Certified Quality</h3>
          <p className="text-sm text-gray-400">Every car passes 150-point inspection</p>
        </Link>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 rounded-3xl border border-white/5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Find Your Perfect {make.name} {modelCapital}
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          Quality vehicles, transparent pricing, honest service. Visit GS Motors today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={`/inventory?make=${make.slug}&model=${params.model}`}
            className="btn-modern bg-white text-brand-darker hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View Available {modelCapital} Vehicles
          </Link>
          <Link
            href="/contact"
            className="btn-modern bg-brand-darker text-white border border-white/20 hover:bg-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
