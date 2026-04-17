import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Get Your Car Valued | Free Trade-In Valuation | GSMotorsinc',
  description: 'Get a free trade-in valuation for your vehicle at GSMotorsinc Newcastle. We offer top dollar for quality used cars in Ontario. No obligation, 24-hour response.',
};

const factors = [
  { title: 'Mileage', desc: 'Lower mileage vehicles command higher valuations. We consider mileage relative to the vehicle\'s age.' },
  { title: 'Condition', desc: 'Interior and exterior condition, including any damage, wear, and maintenance upkeep.' },
  { title: 'Service History', desc: 'A documented service history significantly increases a vehicle\'s value and buyer confidence.' },
  { title: 'Market Demand', desc: 'Current market conditions, local demand, and seasonal factors all influence fair market value.' },
];

export default function ValuationPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Free Valuation"
        badgeColor="green"
        title={<>Get a Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Vehicle Valuation</span></>}
        subtitle="Thinking of selling or trading? Submit your vehicle details and we'll give you a fair, no-obligation offer within 24 hours."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Sell / Trade', href: '/sell-trade' },
          { name: 'Get a Valuation', href: '/sell-trade/valuation' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-white mb-6">Vehicle Details</h2>
            <form action="#" method="POST" className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name *</label>
                  <input type="text" name="name" required placeholder="Your name" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Phone *</label>
                  <input type="tel" name="phone" required placeholder="647-000-0000" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email *</label>
                <input type="email" name="email" required placeholder="you@email.com" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Year *</label>
                  <input type="text" name="year" required placeholder="2019" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Make *</label>
                  <input type="text" name="make" required placeholder="Honda" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Model *</label>
                  <input type="text" name="model" required placeholder="Civic" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Mileage (km) *</label>
                  <input type="number" name="mileage" required placeholder="95000" className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Condition *</label>
                  <select name="condition" required className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-accent/50 transition-colors appearance-none">
                    <option value="" className="bg-gray-900">Select...</option>
                    <option value="excellent" className="bg-gray-900">Excellent</option>
                    <option value="good" className="bg-gray-900">Good</option>
                    <option value="fair" className="bg-gray-900">Fair</option>
                    <option value="poor" className="bg-gray-900">Poor</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Known Issues or Notes (optional)</label>
                <textarea name="notes" rows={3} placeholder="Any mechanical issues, cosmetic damage, recent repairs..." className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white py-4 rounded-xl font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-[1.01]">
                Request Valuation
              </button>
            </form>
          </div>

          {/* Factors */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">What Affects Your Valuation?</h2>
            <div className="space-y-4">
              {factors.map((f) => (
                <div key={f.title} className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA title="Ready for a Fast, Fair Offer?" subtitle="No obligation. We respond within 24 hours." primaryHref="/sell-trade" primaryLabel="Learn More" secondaryHref="/contact" secondaryLabel="Call Us" />
    </div>
  );
}
