import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Vehicle History Report | CarFax on Every Vehicle | GSMotorsinc',
  description: 'GSMotorsinc provides a full CarFax vehicle history report on every pre-owned vehicle. Know accident history, service records, ownership, and odometer readings before you buy.',
};

const reportItems = [
  { title: 'Accident History', desc: 'See any reported collisions, severity, and whether airbags deployed. Know exactly what the vehicle has been through.', color: 'text-brand-accent' },
  { title: 'Service Records', desc: 'Documented oil changes, recalls, inspections, and repairs. A full service history is a major indicator of vehicle health.', color: 'text-brand-highlight' },
  { title: 'Ownership History', desc: 'Number of previous owners and usage type — personal, fleet, rental, or lease. One-owner vehicles with local history are ideal.', color: 'text-purple-400' },
  { title: 'Odometer Readings', desc: 'Verified odometer readings from multiple sources protect against rollback fraud. Our CarFax report cross-checks every reading.', color: 'text-cyan-400' },
];

export default function CarfaxPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Full Transparency"
        badgeColor="blue"
        title={<>Vehicle History Reports <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">on Every Car</span></>}
        subtitle="We believe in complete transparency. Every vehicle at GSMotorsinc comes with a full CarFax report — no surprises, no secrets."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Vehicle History', href: '/services/carfax-report' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportItems.map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-lg font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Why We Provide CarFax on Every Vehicle</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>In the used car market, information is power. We started providing CarFax on every vehicle because we believe buyers deserve to know exactly what they&apos;re purchasing — not find out later.</p>
            <p>Some dealers charge extra for vehicle history reports, or only provide them upon request. At GSMotorsinc, it&apos;s standard. Ask to see the CarFax for any vehicle before your test drive.</p>
          </div>
        </div>
      </section>

      <PageCTA title="Know Before You Buy" subtitle="Every vehicle in our inventory comes with a full history report. No exceptions." primaryHref="/inventory" primaryLabel="Browse Inventory" secondaryHref="/services/inspection" secondaryLabel="About Our Inspection" />
    </div>
  );
}
