import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Used Car Warranty Options Ontario | GSMotorsinc',
  description: 'Learn about warranty options on pre-owned vehicles at GSMotorsinc Newcastle. Manufacturer remaining warranty, certified coverage, and extended warranty packages.',
};

const options = [
  {
    title: 'Manufacturer Remaining Warranty',
    desc: 'Many newer pre-owned vehicles still carry the original manufacturer\'s warranty. We\'ll confirm exactly how much factory coverage remains on any vehicle you\'re considering.',
    color: 'text-brand-accent',
    badge: 'Included Where Available',
  },
  {
    title: 'Certified Dealer Warranty',
    desc: 'Vehicles certified through GSMotorsinc\'s 150-point program come with eligibility for dealer-backed warranty coverage. Ask our team for details at time of purchase.',
    color: 'text-brand-highlight',
    badge: 'On Certified Vehicles',
  },
  {
    title: 'Extended Warranty',
    desc: 'Protect your investment beyond the standard warranty period. We offer extended coverage through trusted third-party providers for powertrain, electrical, and more.',
    color: 'text-purple-400',
    badge: 'Optional Add-On',
  },
];

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Peace of Mind"
        badgeColor="blue"
        title={<>Vehicle <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Warranty Options</span></>}
        subtitle="Buying a pre-owned vehicle doesn't mean going without coverage. Understand your warranty options at GSMotorsinc."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Warranty', href: '/services/warranty' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {options.map((opt) => (
            <div key={opt.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-3xl p-8 transition-all flex flex-col">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full border w-fit mb-5 ${opt.color.replace('text-', 'bg-').replace('400', '500/10')} border-current/20 ${opt.color}`}>
                {opt.badge}
              </span>
              <h3 className={`text-xl font-bold mb-3 ${opt.color}`}>{opt.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-4">Extended Warranty Coverage</h2>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-2xl">
            Extended warranty plans typically cover powertrain (engine, transmission, drivetrain), electrical systems, air conditioning, and more. Coverage terms range from 1 to 5 years and can be financed into your monthly payment.
          </p>
          <Link href="/services/extended-warranty" className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105">
            Learn About Extended Warranty →
          </Link>
        </div>
      </section>

      <PageCTA title="Questions About Coverage?" subtitle="Ask our team about warranty status before you purchase any vehicle." primaryHref="/contact" primaryLabel="Contact Us" secondaryHref="/inventory" secondaryLabel="Browse Inventory" />
    </div>
  );
}
