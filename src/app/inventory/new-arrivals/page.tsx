import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'New Arrivals | Latest Used Cars in Stock | GSMotorsinc',
  description: 'See the latest pre-owned vehicle arrivals at GSMotorsinc Newcastle, ON. Fresh inventory added weekly. All makes, all body types, fairly priced.',
};

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Just In"
        badgeColor="green"
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">New Arrivals</span> — Fresh Stock</>}
        subtitle="We add new vehicles to our inventory every week. Be the first to see the latest pre-owned arrivals before they're gone."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: 'New Arrivals', href: '/inventory/new-arrivals' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Updated Weekly', desc: 'New vehicles arrive every week — check back or follow us to stay updated on fresh stock.', color: 'text-brand-accent' },
            { title: 'All Makes Welcome', desc: 'From Honda to BMW, our arrivals span every make and price range to suit any buyer.', color: 'text-brand-highlight' },
            { title: 'Certified on Arrival', desc: 'Every new arrival passes our 150-point inspection before being listed for sale.', color: 'text-purple-400' },
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">See What Just Arrived</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-xl mx-auto">Sorted by newest arrival so you never miss the latest additions to our lot.</p>
          <Link href="/inventory?sortBy=newest" className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105">
            View Newest Arrivals →
          </Link>
        </div>
      </section>

      <PageCTA title="Don't Miss Out" subtitle="Popular vehicles sell fast. Contact us to reserve one before your visit." primaryLabel="Browse All Inventory" secondaryLabel="Contact Us" />
    </div>
  );
}
