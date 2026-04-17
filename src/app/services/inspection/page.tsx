import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: '150-Point Pre-Purchase Inspection | GSMotorsinc Newcastle ON',
  description: 'Every GSMotorsinc vehicle undergoes a rigorous 150-point inspection before sale. Learn what our certified technicians check and why it matters.',
};

const categories = [
  'Engine & Drivetrain', 'Transmission & Gearbox', 'Brakes & Rotors', 'Suspension & Steering',
  'Electrical Systems', 'Interior & Upholstery', 'Exterior & Bodywork', 'Tires & Wheels',
  'HVAC / Climate Control', 'Safety & ADAS Systems', 'All Fluids & Seals', 'Lights & Signals',
];

export default function InspectionPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Certified Quality"
        badgeColor="green"
        title={<>150-Point <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Pre-Purchase Inspection</span></>}
        subtitle="Every vehicle we sell passes a rigorous 150-point inspection by certified technicians. Not a checklist — a real mechanical assessment."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Inspection', href: '/services/inspection' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">What We Inspect</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-3.5">
              <div className="w-2 h-2 rounded-full bg-brand-accent shrink-0" />
              <span className="text-gray-300 text-sm font-medium">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Detailed Report', desc: 'You receive a full inspection report with the vehicle. Know exactly what was assessed and the outcome.', color: 'text-brand-accent' },
            { title: 'CarFax Included', desc: 'Every inspected vehicle also comes with a full CarFax history report — accident history, service records, ownership.', color: 'text-brand-highlight' },
            { title: 'Certified Badge', desc: 'Vehicles that pass are awarded our certified badge. We don\'t sell vehicles that fail — period.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-8">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA title="Buy with Confidence" subtitle="Every vehicle in our inventory has passed our 150-point inspection." primaryHref="/inventory" primaryLabel="View Certified Inventory" secondaryHref="/services/carfax-report" secondaryLabel="About CarFax Reports" />
    </div>
  );
}
