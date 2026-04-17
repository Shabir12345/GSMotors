import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import { getPriceRangeBySlug, getAllPriceRangeSlugs } from '@/data/categories';

interface PageProps {
  params: {
    range: string;
  };
}

export async function generateStaticParams() {
  const ranges = getAllPriceRangeSlugs();
  return ranges.map(range => ({
    range,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const priceRange = getPriceRangeBySlug(params.range);

  if (!priceRange) {
    return {
      title: 'Price Range Not Found',
    };
  }

  return {
    title: `Affordable Used Cars ${priceRange.label} in Toronto | GS Motors`,
    description: `Quality pre-owned vehicles under ${priceRange.label} in the GTA. Find certified inspected used cars with transparent pricing and easy financing.`,
    keywords: [
      `used cars ${priceRange.label} Toronto`,
      `affordable vehicles ${priceRange.label}`,
      `budget friendly cars GTA`,
      `best value pre-owned vehicles`
    ],
  };
}

export default function PriceRangePage({ params }: PageProps) {
  const priceRange = getPriceRangeBySlug(params.range);

  if (!priceRange) {
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
            { name: `Vehicles ${priceRange.label}`, href: `/browse/price-range/${params.range}` }
          ]}
        />
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 section-padding text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          Quality Used Cars <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">{priceRange.label}</span>
        </h1>
        <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
          {priceRange.description}
        </p>
        <p className="text-2xl font-bold text-brand-accent mt-6">
          {priceRange.min.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} - {priceRange.max.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
        </p>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Best Value in This Price Range
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Transparent Pricing",
              desc: "No hidden fees or surprises. See the full price breakdown upfront.",
              icon: "💎"
            },
            {
              title: "150-Point Inspection",
              desc: "Every vehicle is thoroughly inspected for quality and safety.",
              icon: "✓"
            },
            {
              title: "Certified Warranty",
              desc: "Peace of mind with our comprehensive warranty options.",
              icon: "🛡️"
            },
            {
              title: "Easy Financing",
              desc: "Get approved quickly with competitive rates and flexible terms.",
              icon: "💰"
            },
            {
              title: "Trade-In Accepted",
              desc: "Trade your current vehicle for credit toward your purchase.",
              icon: "🔄"
            },
            {
              title: "Expert Service",
              desc: "Our non-commissioned team prioritizes your satisfaction.",
              icon: "👥"
            }
          ].map((benefit, i) => (
            <div key={i} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-brand-accent/30 transition-all group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-brand-accent transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Can Get */}
      <section className="container mx-auto px-4 section-padding bg-white/5 rounded-3xl border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          What You'll Find in This Price Range
        </h2>

        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">📅</div>
            <div className="flex-1">
              <p className="font-bold text-white text-lg mb-1">Recent Model Years</p>
              <p className="text-gray-400 text-sm">Vehicles with current technology and features for a modern driving experience.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">🎯</div>
            <div className="flex-1">
              <p className="font-bold text-white text-lg mb-1">Popular Brands & Models</p>
              <p className="text-gray-400 text-sm">Trusted makes like Honda, Toyota, Mazda, and more with proven reliability.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">⚡</div>
            <div className="flex-1">
              <p className="font-bold text-white text-lg mb-1">Reasonable Mileage</p>
              <p className="text-gray-400 text-sm">Well-maintained vehicles with moderate mileage for years of reliable driving ahead.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-accent/30 transition-all flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">🔧</div>
            <div className="flex-1">
              <p className="font-bold text-white text-lg mb-1">Full Service History</p>
              <p className="text-gray-400 text-sm">Complete maintenance records available so you know exactly what's been done.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Information */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Financing for {priceRange.label}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-brand-accent mb-2">
              ${Math.round((priceRange.min + priceRange.max) / 2 / 12000).toLocaleString()}
            </div>
            <p className="text-gray-400 mb-4">
              Estimated Monthly Payment*
            </p>
            <p className="text-xs text-gray-500">
              *Based on 60 months at 7.99% APR with 0% down. Example only.
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl font-bold text-brand-highlight mb-2">
              Fast Approval
            </div>
            <p className="text-gray-400">
              Get approved in as little as 24 hours with our partner lenders.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/financing"
            className="btn-modern bg-brand-accent hover:bg-brand-highlight text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            Check Financing Options
          </Link>
        </div>
      </section>

      {/* Browse Inventory */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Browse Our Inventory
        </h2>

        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-white mb-3">View Vehicles {priceRange.label}</h3>
          <p className="text-gray-400 mb-6">
            Filter by make, model, body type, year, and features to find your next vehicle.
          </p>
          <Link
            href={`/inventory?priceRange=${params.range}`}
            className="btn-modern bg-brand-accent hover:bg-brand-highlight text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View Vehicles {priceRange.label}
          </Link>
        </div>
      </section>

      {/* Buying Guide CTA */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Buying Tips for Your Budget
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Link
            href="/blog/complete-guide-buying-used-car-toronto"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
              Buying Guide
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Learn how to get the most value from your budget.
            </p>
            <span className="text-brand-accent font-semibold text-sm">Read Now →</span>
          </Link>

          <Link
            href="/blog/how-negotiate-best-price-used-car"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-bold text-white group-hover:text-brand-accent transition-colors mb-2">
              Negotiation Tips
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Strategies to get the best deal on your purchase.
            </p>
            <span className="text-brand-accent font-semibold text-sm">Read Now →</span>
          </Link>
        </div>
      </section>

      {/* Compare Price Ranges */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
          Other Price Ranges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { label: "Under $10k", slug: "under-10k" },
            { label: "$10-15k", slug: "10-15k" },
            { label: "$15-20k", slug: "15-20k" },
            { label: "$20-25k", slug: "20-25k" },
            { label: "$25k+", slug: "25k-plus" }
          ].map((range) => (
            <Link
              key={range.slug}
              href={`/browse/price-range/${range.slug}`}
              className={`p-4 rounded-2xl border transition-all text-center group ${
                params.range === range.slug
                  ? 'bg-brand-accent/20 border-brand-accent text-white'
                  : 'bg-white/5 border-white/5 hover:border-brand-accent/50 hover:bg-white/10 text-gray-400 group-hover:text-white'
              }`}
            >
              <p className="font-bold">{range.label}</p>
              <p className="text-xs mt-2">Browse →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight text-center">
          Budget Buying FAQs
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            {
              q: `Can I afford a vehicle in the ${priceRange.label} range?`,
              a: `Yes! With our flexible financing options and low monthly payments, you can own a quality vehicle within your budget. We work with multiple lenders to get you the best rate.`
            },
            {
              q: `Is there a down payment required?`,
              a: `We offer options ranging from 0% down to larger down payments. A larger down payment reduces your monthly payment and total interest paid.`
            },
            {
              q: `How much should I plan to spend on maintenance?`,
              a: `All our vehicles are inspected and certified. Budget $100-200/month for maintenance and repairs on average, though recent models may require less.`
            },
            {
              q: `What if I have bad credit?`,
              a: `We work with lenders who specialize in all credit situations. Apply online or visit us to discuss your financing options with no obligation.`
            },
            {
              q: `Do you have a trade-in program?`,
              a: `Yes! Trade in your current vehicle for credit toward your purchase. We'll appraise your vehicle and provide a fair offer.`
            }
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
        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent border border-brand-accent/30 text-center hover:border-brand-accent/50 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💳</div>
          <h3 className="font-bold text-white mb-2">Flexible Financing</h3>
          <p className="text-sm text-gray-400 mb-4">
            Multiple financing options tailored to your budget and credit situation.
          </p>
          <Link
            href="/financing"
            className="text-brand-accent font-semibold text-sm hover:text-brand-highlight transition-colors"
          >
            Get Pre-Approved →
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-highlight/20 to-transparent border border-brand-highlight/30 text-center hover:border-brand-highlight/50 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔍</div>
          <h3 className="font-bold text-white mb-2">Inspected Vehicles</h3>
          <p className="text-sm text-gray-400 mb-4">
            Every car inspected and certified for quality and safety.
          </p>
          <Link
            href="/insurance-certified"
            className="text-brand-highlight font-semibold text-sm hover:text-brand-accent transition-colors"
          >
            Our Process →
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 text-center hover:border-purple-500/50 transition-all group">
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
          <h3 className="font-bold text-white mb-2">Expert Support</h3>
          <p className="text-sm text-gray-400 mb-4">
            Our team is ready to help answer all your questions.
          </p>
          <Link
            href="/contact"
            className="text-purple-400 font-semibold text-sm hover:text-purple-300 transition-colors"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 rounded-3xl border border-white/5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Ready to Find Your Next Vehicle?
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
          Browse our quality selection {priceRange.label} with transparent pricing and flexible financing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href={`/inventory?priceRange=${params.range}`}
            className="btn-modern bg-white text-brand-darker hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            View Vehicles {priceRange.label}
          </Link>
          <Link
            href="/contact"
            className="btn-modern bg-brand-darker text-white border border-white/20 hover:bg-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            Request More Info
          </Link>
        </div>
      </section>
    </div>
  );
}
