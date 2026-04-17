import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'No Credit History Car Loans Ontario | First Vehicle | GSMotorsinc',
  description: 'No credit history? GSMotorsinc helps first-time buyers and newcomers to Canada get their first car loan in Ontario. Thin-file specialists in our lender network.',
};

export default function NoCreditPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="No Credit? We Help"
        badgeColor="blue"
        title={<>No Credit History? <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">We Can Help</span></>}
        subtitle="Whether you're a first-time buyer or new to Canada, we work with lenders who specialize in thin-file applications and no-credit-history approvals."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'No Credit', href: '/financing/no-credit' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Newcomers Welcome', desc: 'New to Canada with no Canadian credit history? Our international-friendly lenders evaluate your full financial picture.', color: 'text-brand-accent' },
            { title: 'First-Time Buyers', desc: 'Never had a loan before? That\'s fine. We help young buyers and students establish credit through auto financing.', color: 'text-brand-highlight' },
            { title: 'Co-Signer Option', desc: 'Adding a co-signer with established credit can significantly improve your approval odds and interest rate.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-2xl p-8 transition-all">
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Application Steps</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {['Apply Online', 'Lender Match', 'Approval', 'Drive Away'].map((step, i) => (
            <div key={step} className="flex flex-col items-center text-center bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 text-brand-accent font-black text-sm flex items-center justify-center mb-3">{i + 1}</div>
              <p className="font-bold text-white text-sm">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA
        title="Start Building Your Credit Today"
        subtitle="Auto financing is one of the best ways to establish Canadian credit history."
        primaryHref="/financing/apply"
        primaryLabel="Start Application"
        secondaryHref="/financing/newcomers"
        secondaryLabel="Newcomer Program"
      />
    </div>
  );
}
