import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Car Loans for Newcomers to Canada | Ontario | GSMotorsinc',
  description: 'New to Canada and need a car loan? GSMotorsinc works with newcomers and new permanent residents in Ontario. No Canadian credit history required.',
};

const docs = [
  'Work permit, PR card, or study permit',
  'Proof of Canadian employment or offer letter',
  '3 months Canadian bank statements',
  'Government-issued photo ID (passport accepted)',
  'Proof of address (utility bill or lease)',
];

export default function NewcomersPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Newcomers to Canada"
        badgeColor="indigo"
        title={<>Car Loans for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Newcomers to Canada</span></>}
        subtitle="New to Canada with limited credit history? Our lenders understand your situation and offer tailored financing programs for new permanent residents and workers."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Newcomers', href: '/financing/newcomers' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'International Credit Considered', desc: 'Some lenders accept international credit history. Ask our team what documents to bring from your home country.', color: 'text-brand-accent' },
            { title: 'Fast Processing', desc: 'We understand you need transportation quickly when settling into Canada. Our process is designed for speed.', color: 'text-brand-highlight' },
            { title: 'Flexible Terms', desc: 'Loan terms from 24–84 months. Choose a payment schedule that fits your new Canadian income.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">What to Bring</h2>
            <p className="text-gray-400 text-sm mb-6">Having these documents ready speeds up the approval process significantly.</p>
            <div className="space-y-3">
              {docs.map((doc) => (
                <div key={doc} className="flex items-center gap-3 bg-white/[0.04] border border-white/[0.07] rounded-xl px-5 py-3.5">
                  <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-4">Also Useful to Know</h3>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>A down payment of $1,000–$3,000 greatly improves your approval chances and reduces your interest rate when you have no Canadian credit history.</p>
              <p>Auto financing is one of the fastest ways to build Canadian credit. Consistent on-time payments are reported to the credit bureaus monthly.</p>
              <p>We work with buyers from all countries — no matter how recently you arrived in Canada.</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Welcome to Canada — Let's Get You on the Road"
        subtitle="Apply today. No Canadian credit history required."
        primaryHref="/financing/apply"
        primaryLabel="Start Application"
        secondaryHref="/contact"
        secondaryLabel="Call Us"
      />
    </div>
  );
}
