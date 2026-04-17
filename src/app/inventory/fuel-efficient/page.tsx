import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Fuel Efficient Used Cars in Ontario | GSMotorsinc Newcastle',
  description: 'Browse fuel efficient pre-owned vehicles at GSMotorsinc Newcastle, ON. Hybrids, small SUVs, hatchbacks, and sedans that save you at the pump every day.',
};

export default function FuelEfficientPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Fuel Efficient"
        badgeColor="green"
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Fuel Efficient</span> Vehicles</>}
        subtitle="Save at the pump every single day. Browse our selection of fuel-efficient sedans, hatchbacks, hybrids, and small SUVs."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: 'Fuel Efficient', href: '/inventory/fuel-efficient' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Save on Gas', desc: 'A fuel-efficient vehicle averaging 7L/100km vs 12L/100km saves over $1,200/year at current Ontario gas prices.', color: 'text-brand-accent' },
            { title: 'Lower Emissions', desc: 'Reduce your carbon footprint with hybrids and efficient 4-cylinders that meet modern emission standards.', color: 'text-brand-highlight' },
            { title: 'Great for Commuting', desc: 'From the 401 to city streets, fuel-efficient vehicles make daily commutes more affordable and less stressful.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Browse Fuel Efficient Inventory</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">Explore our full inventory and filter by fuel type to find hybrid, electric, or efficient gas-powered vehicles.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/inventory?fuelType=hybrid" className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105">
              Browse Hybrids →
            </Link>
            <Link href="/inventory/body/hatchback" className="btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105">
              View Hatchbacks
            </Link>
          </div>
        </div>
      </section>

      <PageCTA title="Lower Your Fuel Bill Starting Today" subtitle="Financing available on all vehicles. Trade-ins welcome." primaryLabel="Browse Inventory" secondaryHref="/financing" secondaryLabel="Get Financing" />
    </div>
  );
}
