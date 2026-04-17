import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Vehicle Detailing | Every Car Delivered Spotless | GSMotorsinc',
  description: 'Every GSMotorsinc vehicle is professionally detailed before delivery. Full interior and exterior detail included with every purchase. Newcastle, ON.',
};

export default function DetailingPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Professional Detailing"
        badgeColor="gray"
        title={<>Every Vehicle <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Detailed Before Delivery</span></>}
        subtitle="Your vehicle will be spotless when you pick up the keys. Full professional detail is included with every GSMotorsinc purchase."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Detailing', href: '/services/detailing' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Exterior Detail',
              items: ['Hand wash & dry', 'Clay bar treatment', 'Tire dressing & wheel clean', 'Glass cleaning (inside & out)', 'Paint protection spray'],
              color: 'text-brand-accent',
            },
            {
              title: 'Interior Detail',
              items: ['Full vacuum (seats, carpet, trunk)', 'Dashboard & console wipe-down', 'Leather conditioning (where applicable)', 'Air vent cleaning', 'Odour treatment'],
              color: 'text-brand-highlight',
            },
          ].map((section) => (
            <div key={section.title} className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8">
              <h3 className={`text-xl font-bold mb-5 ${section.color}`}>{section.title}</h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCTA title="Pick Up a Spotless Vehicle" subtitle="Every purchase includes a full professional detail. Ask about our premium enhancement packages." primaryHref="/inventory" primaryLabel="Browse Inventory" secondaryHref="/contact" secondaryLabel="Ask About Upgrades" />
    </div>
  );
}
