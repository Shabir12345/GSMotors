import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Vehicle Delivery Across Ontario | GSMotorsinc Newcastle',
  description: "Can't make it to Newcastle? GSMotorsinc offers vehicle delivery across Ontario. Durham Region, GTA, Kawarthas, and beyond. Ask us about delivery when you purchase.",
};

const steps = [
  { num: '01', title: 'Browse Online', desc: 'Find your vehicle on our website. View photos, specs, CarFax, and inspection report from home.' },
  { num: '02', title: 'Reserve It', desc: 'Contact us to hold the vehicle with a deposit. We\'ll confirm delivery logistics and timing.' },
  { num: '03', title: 'Arrange Delivery', desc: 'Agree on a delivery location and date. We coordinate the transport and paperwork.' },
  { num: '04', title: 'Sign & Drive', desc: 'We bring the vehicle to you. Review the paperwork, sign, and the keys are yours.' },
];

const areas = [
  { region: 'Durham Region', cities: 'Newcastle, Bowmanville, Oshawa, Whitby, Ajax, Pickering, Courtice' },
  { region: 'GTA', cities: 'Toronto, Scarborough, Markham, Mississauga, Brampton' },
  { region: 'Kawarthas', cities: 'Peterborough, Lindsay, Bancroft, Campbellford' },
  { region: 'Northumberland', cities: 'Cobourg, Port Hope, Brighton, Trenton' },
];

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Doorstep Delivery"
        badgeColor="indigo"
        title={<>Vehicle Delivery <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Across Ontario</span></>}
        subtitle="Can't make it to Newcastle? We bring the vehicle to you. Delivery available across Durham Region, the GTA, Kawarthas, and beyond."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Delivery', href: '/services/delivery' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s) => (
            <div key={s.num} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <div className="text-3xl font-black text-brand-accent/20 mb-3">{s.num}</div>
              <h3 className="font-bold text-white text-sm mb-1.5">{s.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Delivery Areas</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {areas.map((a) => (
            <div key={a.region} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="font-bold text-brand-accent mb-2">{a.region}</h3>
              <p className="text-gray-400 text-sm">{a.cities}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-4">Don&apos;t see your city? Contact us — we evaluate delivery requests case by case. Delivery fees may apply based on distance.</p>
      </section>

      <PageCTA title="Ask About Delivery" subtitle="Contact us to discuss delivery for any vehicle in our inventory." primaryHref="/contact" primaryLabel="Ask About Delivery" secondaryHref="/inventory" secondaryLabel="Browse Inventory" />
    </div>
  );
}
