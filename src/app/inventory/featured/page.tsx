import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Featured Vehicles | Hand-Selected Pre-Owned Cars | GSMotorsinc',
  description: 'Browse our hand-selected featured vehicles at GSMotorsinc Newcastle, ON. Exceptional value, condition, and history — every one certified and fairly priced.',
};

const highlights = [
  { title: 'Exceptional Condition', desc: 'Every featured vehicle is in top cosmetic and mechanical condition — inside and out.', color: 'text-brand-accent' },
  { title: 'Outstanding Value', desc: 'Featured picks offer the best combination of mileage, age, and price on our lot.', color: 'text-brand-highlight' },
  { title: 'Full Certification', desc: 'Passed our 150-point inspection and comes with a complete CarFax history report.', color: 'text-purple-400' },
];

export default function FeaturedPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Editor's Choice"
        badgeColor="purple"
        title={<>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Featured</span> Vehicles</>}
        subtitle="Hand-selected vehicles that offer exceptional value, condition, and history. Updated regularly as new standouts arrive."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: 'Featured', href: '/inventory/featured' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${h.color}`}>{h.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Browse Featured Vehicles</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">Our featured selection changes regularly — check back often or contact us to be notified of new arrivals.</p>
          <Link href="/inventory?featured=true" className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105">
            View Featured Vehicles →
          </Link>
        </div>
      </section>

      <PageCTA title="Like What You See?" subtitle="Contact us or visit our Newcastle showroom to view any featured vehicle in person." secondaryLabel="Contact Us" />
    </div>
  );
}
