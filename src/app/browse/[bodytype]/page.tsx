import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getBodyTypeBySlug, getAllBodyTypeSlugs } from '@/data/categories';

interface PageProps {
  params: {
    bodytype: string;
  };
}

export async function generateStaticParams() {
  const types = getAllBodyTypeSlugs();
  return types.map(type => ({
    bodytype: type,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const bodyType = getBodyTypeBySlug(params.bodytype);

  if (!bodyType) {
    return {
      title: 'Body Type Not Found',
    };
  }

  return {
    title: `Pre-Owned ${bodyType.name} for Sale in Toronto | GS Motors`,
    description: `Quality pre-owned ${bodyType.name} in the GTA. Browse our selection of used ${bodyType.name} with certified inspections and affordable prices.`,
    keywords: [
      `used ${bodyType.name.toLowerCase()} Toronto`,
      `affordable ${bodyType.name.toLowerCase()} GTA`,
      `buy ${bodyType.name.toLowerCase()} second hand`,
      `quality pre-owned ${bodyType.name.toLowerCase()}`
    ],
  };
}

export default function BodyTypePage({ params }: PageProps) {
  const bodyType = getBodyTypeBySlug(params.bodytype);

  if (!bodyType) {
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
            { name: bodyType.name, href: `/browse/${params.bodytype}` }
          ]}
        />
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 section-padding text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          Quality Used <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">{bodyType.name}</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          {bodyType.description}
        </p>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Why Choose a {bodyType.name.slice(0, -1)}?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {bodyType.benefits.map((benefit, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group">
              <div className="text-2xl group-hover:scale-125 transition-transform flex-shrink-0">✓</div>
              <div>
                <p className="text-white font-semibold group-hover:text-brand-accent transition-colors">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Makes */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Popular {bodyType.name} Makes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bodyType.popularMakes.map((make) => (
            <Link
              key={make}
              href={`/inventory/${make.toLowerCase().replace(/\s+/g, '-')}`}
              className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-accent/50 transition-all hover:bg-white/10 text-center group"
            >
              <p className="font-bold text-white group-hover:text-brand-accent transition-colors">
                {make}
              </p>
              <p className="text-xs text-gray-400 mt-2">Browse →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          {bodyType.name} vs. Other Body Types
        </h2>

        <div className="overflow-x-auto rounded-3xl border border-white/5">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 md:p-6 text-left font-bold text-white">{bodyType.name}</th>
                <th className="p-4 md:p-6 text-left font-bold text-gray-400">Cargo Space</th>
                <th className="p-4 md:p-6 text-left font-bold text-gray-400">Fuel Economy</th>
                <th className="p-4 md:p-6 text-left font-bold text-gray-400">Comfort</th>
                <th className="p-4 md:p-6 text-left font-bold text-gray-400">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02]">
                <td className="p-4 md:p-6 font-bold text-brand-accent">{bodyType.name}</td>
                <td className="p-4 md:p-6 text-gray-300">⭐⭐⭐⭐</td>
                <td className="p-4 md:p-6 text-gray-300">⭐⭐⭐⭐</td>
                <td className="p-4 md:p-6 text-gray-300">⭐⭐⭐⭐</td>
                <td className="p-4 md:p-6 text-gray-300">Optimal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Browse by Make & Price */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Browse {bodyType.name}
        </h2>

        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-white mb-3">View All {bodyType.name}</h3>
          <p className="text-gray-400 mb-6">
            Filter by make, year, price, and features to find the perfect {bodyType.name.slice(0, -1)} for your needs.
          </p>
          <Link
            href={`/inventory?bodytype=${params.bodytype}`}
            className="btn-modern bg-brand-accent hover:bg-brand-highlight text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View All {bodyType.name}
          </Link>
        </div>
      </section>

      {/* Buying Guide CTA */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Guide to Buying {bodyType.name}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/blog/complete-guide-buying-used-car-toronto"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
              Buying Guide for {bodyType.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Everything you need to know about choosing the right {bodyType.name.slice(0, -1)}.
            </p>
            <span className="text-brand-accent font-semibold text-sm">Learn More →</span>
          </Link>

          <Link
            href="/blog/best-reliable-used-cars-buy"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
              Most Reliable {bodyType.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Discover which {bodyType.name.slice(0, -1)} models offer the best reliability.
            </p>
            <span className="text-brand-accent font-semibold text-sm">Learn More →</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Common {bodyType.name} Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: `What's the average price for a used ${bodyType.name.slice(0, -1)} in Toronto?`,
              a: `Prices vary based on make, model, year, and mileage. ${bodyType.name} typically range from $8,000 to $25,000+ depending on the specific vehicle. Browse our inventory to see current pricing.`
            },
            {
              q: `Are ${bodyType.name.slice(0, -1)}s fuel-efficient?`,
              a: `Most ${bodyType.name.slice(0, -1)}s offer good fuel economy, especially newer models. Specific MPG varies by make/model. We provide detailed specs for every vehicle in our inventory.`
            },
            {
              q: `Which ${bodyType.name.slice(0, -1)} is best for winter driving in Toronto?`,
              a: `${bodyType.name} with All-Wheel Drive (AWD) are ideal for Canadian winters. Popular choices include Subaru Outback, Honda CR-V, Toyota RAV4, and Mazda CX-5.`
            },
            {
              q: `What warranty coverage comes with ${bodyType.name}?`,
              a: `Warranty depends on age and mileage. Most recent vehicles include our standard warranty plus extended options. Ask about specific coverage for your vehicle.`
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

      {/* Services CTA */}
      <section className="container mx-auto px-4 section-padding grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/30 text-center">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="font-bold text-white mb-2">Easy Financing</h3>
          <p className="text-sm text-gray-400 mb-4">
            Competitive rates and flexible terms for your {bodyType.name.slice(0, -1)}.
          </p>
          <Link
            href="/financing"
            className="text-brand-accent font-semibold text-sm hover:text-brand-highlight transition-colors"
          >
            Learn More →
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-highlight/20 to-transparent border border-brand-highlight/30 text-center">
          <div className="text-4xl mb-4">✓</div>
          <h3 className="font-bold text-white mb-2">Certified Quality</h3>
          <p className="text-sm text-gray-400 mb-4">
            Every {bodyType.name.slice(0, -1)} passes our 150-point inspection.
          </p>
          <Link
            href="/insurance-certified"
            className="text-brand-highlight font-semibold text-sm hover:text-brand-accent transition-colors"
          >
            View Details →
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="font-bold text-white mb-2">Trade-In Appraisal</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get a fair valuation on your current vehicle.
          </p>
          <Link
            href="/sell-trade"
            className="text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors"
          >
            Get Appraisal →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 rounded-3xl border border-white/5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to Find Your Perfect {bodyType.name.slice(0, -1)}?
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          Browse our selection of quality {bodyType.name.slice(0, -1)}s with transparent pricing and honest service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={`/inventory?bodytype=${params.bodytype}`}
            className="btn-modern bg-white text-brand-darker hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View All {bodyType.name}
          </Link>
          <Link
            href="/contact"
            className="btn-modern bg-brand-darker text-white border border-white/20 hover:bg-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
