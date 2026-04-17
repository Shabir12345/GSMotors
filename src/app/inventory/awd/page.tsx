import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'AWD & 4WD Used Cars for Sale | Ontario Winters | GSMotorsinc',
  description: 'Browse all-wheel drive and 4WD pre-owned vehicles at GSMotorsinc Newcastle, ON. Perfect for Ontario winters. Subaru, Toyota, Honda, BMW, and more in stock.',
};

const benefits = [
  { title: 'Built for Ontario Winters', desc: 'AWD systems automatically distribute power to wheels with the most traction — critical on Ontario snow and ice.', color: 'text-brand-accent' },
  { title: 'Better Traction Everywhere', desc: 'Whether it\'s rain, mud, or light off-road, AWD delivers confident grip year-round — not just in winter.', color: 'text-brand-highlight' },
  { title: 'Proven Reliability', desc: 'Modern AWD systems are low-maintenance and built to last. Many of our top-value Subaru and Toyota AWD vehicles have 100,000+ km with zero drivetrain issues.', color: 'text-purple-400' },
];

const popularAwd = [
  { name: 'Subaru Outback', link: '/inventory/make/subaru' },
  { name: 'Toyota RAV4', link: '/inventory/make/toyota' },
  { name: 'Honda CR-V AWD', link: '/inventory/make/honda' },
  { name: 'BMW xDrive', link: '/inventory/make/bmw' },
  { name: 'Mazda CX-5 AWD', link: '/inventory/make/mazda' },
  { name: 'Subaru Forester', link: '/inventory/make/subaru' },
];

export default function AwdPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="All-Wheel Drive"
        badgeColor="blue"
        title={<>AWD & 4WD <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Vehicles</span></>}
        subtitle="Perfect for Ontario winters. Browse our selection of all-wheel and four-wheel drive vehicles — inspected, certified, and fairly priced."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: 'AWD / 4WD', href: '/inventory/awd' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${b.color}`}>{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Popular AWD Models in Our Inventory</h2>
        <div className="flex flex-wrap gap-3">
          {popularAwd.map((m) => (
            <Link key={m.name} href={m.link} className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/40 hover:text-brand-accent text-gray-300 text-sm font-semibold transition-all">
              {m.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Browse AWD Inventory</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">Filter our full inventory to show all-wheel drive vehicles currently in stock.</p>
          <Link href="/inventory?drivetrain=awd" className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105">
            See All AWD Vehicles →
          </Link>
        </div>
      </section>

      <PageCTA title="Ready for Winter?" subtitle="Financing available on all AWD vehicles. Trade-ins welcome." primaryHref="/inventory?drivetrain=awd" primaryLabel="Browse AWD Vehicles" secondaryHref="/financing" secondaryLabel="Get Financing" />
    </div>
  );
}
