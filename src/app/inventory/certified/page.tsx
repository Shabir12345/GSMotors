import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Certified Pre-Owned Vehicles | 150-Point Inspected | GSMotorsinc',
  description: 'Every GSMotorsinc vehicle is 150-point certified. Clean CarFax, warranty eligible, and sold with full transparency. Used cars in Newcastle, ON you can trust.',
};

const certFeatures = [
  { title: '150-Point Inspection', desc: 'Every vehicle is inspected by certified technicians covering engine, transmission, brakes, suspension, electrical, interior, and more.', color: 'text-brand-accent' },
  { title: 'Clean CarFax Report', desc: 'We provide a full CarFax vehicle history report on every vehicle — no accident surprises, no odometer rollbacks.', color: 'text-brand-highlight' },
  { title: 'Warranty Eligible', desc: 'Many certified vehicles qualify for extended warranty coverage. Ask our team about protection options at time of purchase.', color: 'text-purple-400' },
];

const inspectionAreas = [
  'Engine & Drivetrain', 'Transmission', 'Brakes & Rotors', 'Suspension & Steering',
  'Electrical Systems', 'Interior & Comfort', 'Exterior & Body', 'Tires & Wheels',
  'HVAC / Climate', 'Safety Systems', 'All Fluids', 'Lights & Signals',
];

export default function CertifiedPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="150-Point Certified"
        badgeColor="green"
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Certified</span> Pre-Owned Vehicles</>}
        subtitle="Every vehicle we sell passes our rigorous 150-point inspection. Not a checkbox — a real assessment by certified technicians."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Inventory', href: '/inventory' },
          { name: 'Certified', href: '/inventory/certified' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {certFeatures.map((f) => (
            <div key={f.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${f.color}`}>{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What We Inspect</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {inspectionAreas.map((area) => (
              <div key={area} className="flex items-center gap-2.5 bg-white/[0.04] rounded-xl px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="text-center">
          <Link href="/inventory" className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105">
            View Certified Inventory →
          </Link>
        </div>
      </section>

      <PageCTA title="Every Vehicle Certified. No Exceptions." subtitle="Visit our Newcastle showroom to see any vehicle's inspection report." primaryLabel="Browse Inventory" secondaryHref="/services/inspection" secondaryLabel="About Our Inspection" />
    </div>
  );
}
