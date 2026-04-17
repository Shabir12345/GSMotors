import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Self-Employed Car Loans Ontario | GSMotorsinc Newcastle',
  description: 'Self-employed and need a car loan in Ontario? GSMotorsinc works with contractors, freelancers, and business owners to secure fast auto financing approval.',
};

const docs = [
  '2 most recent T1 Generals (Notice of Assessment)',
  '6 months business or personal bank statements',
  'Business registration or incorporation documents',
  'Government-issued photo ID',
  'Proof of address',
];

export default function SelfEmployedPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Self-Employed"
        badgeColor="amber"
        title={<>Self-Employed <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Car Loans</span></>}
        subtitle="Contractors, freelancers, and business owners deserve great rates too. We work with lenders who understand variable income and self-employment."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Self-Employed', href: '/financing/self-employed' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Variable Income Understood', desc: 'Our lenders look at your average income across 2 years — not just your most recent paystub. Business owners are well-served.', color: 'text-brand-accent' },
            { title: 'Fast Turnaround', desc: 'With the right documents in hand, self-employed approvals can happen within 24–48 hours.', color: 'text-brand-highlight' },
            { title: 'Business Vehicle Options', desc: 'Looking to finance a vehicle for business use? We can structure the loan to suit both personal and business needs.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Documents to Prepare</h2>
        <div className="space-y-3">
          {docs.map((doc) => (
            <div key={doc} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl px-5 py-4">
              <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300 text-sm">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      <PageCTA
        title="Apply as a Self-Employed Buyer"
        subtitle="Bring your NOAs and bank statements — we'll handle the rest."
        primaryHref="/financing/apply"
        primaryLabel="Apply Now"
        secondaryHref="/contact"
        secondaryLabel="Speak to Our Team"
      />
    </div>
  );
}
