import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Extended Warranty for Used Cars | GSMotorsinc Ontario',
  description: 'Protect your pre-owned vehicle purchase with extended warranty coverage at GSMotorsinc. Powertrain, electrical, A/C, and more. Finance the cost into your monthly payment.',
};

const covered = ['Engine & Powertrain', 'Transmission', 'Differential', 'Transfer Case', 'Electrical Systems', 'Air Conditioning', 'Fuel System', 'Cooling System', 'Turbocharger / Supercharger', 'Seals & Gaskets'];

export default function ExtendedWarrantyPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Extended Protection"
        badgeColor="purple"
        title={<>Extended Warranty <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Coverage</span></>}
        subtitle="Drive with confidence for years to come. Extended warranty plans protect the parts that matter most — and can be financed into your monthly payment."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Extended Warranty', href: '/services/extended-warranty' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Covers What Matters', desc: 'Engine, transmission, electrical, A/C — the expensive repairs. Extended warranty absorbs costs that would otherwise come out of pocket.', color: 'text-brand-accent' },
            { title: 'Finance It In', desc: 'Add extended warranty cost to your monthly payment. Protect your investment without a large upfront expense.', color: 'text-brand-highlight' },
            { title: '1 to 5 Year Terms', desc: 'Choose the coverage term that suits your ownership plans — 1, 2, 3, or 5 years from date of purchase.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">Commonly Covered Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {covered.map((item) => (
              <div key={item} className="flex items-center gap-2.5 bg-white/[0.04] rounded-xl px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="text-gray-300 text-xs font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-5">Exact coverage varies by plan. Ask our team for the full coverage schedule before purchase.</p>
        </div>
      </section>

      <PageCTA title="Protect Your Investment" subtitle="Ask about extended warranty options when you visit our showroom." primaryHref="/contact" primaryLabel="Ask About Coverage" secondaryHref="/inventory" secondaryLabel="Browse Inventory" />
    </div>
  );
}
