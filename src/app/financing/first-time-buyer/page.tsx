import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'First Time Car Buyer Financing Ontario | GSMotorsinc',
  description: 'Buying your first car in Ontario? GSMotorsinc guides first-time buyers through financing, insurance, and the full purchase process. No-pressure team. Newcastle, ON.',
};

const tips = [
  { title: 'Get Pre-Approved First', desc: 'Knowing your budget before you shop eliminates stress and gives you stronger negotiating power. Our pre-approval is soft-check only.' },
  { title: 'Know Your Total Budget', desc: 'Factor in insurance, gas, maintenance, and parking — not just the monthly payment. We\'ll walk you through the full cost of ownership.' },
  { title: 'Choose Reliability', desc: 'For first cars, prioritize reliability and low maintenance costs over luxury features. Our team can point you to the best value picks for your situation.' },
  { title: 'Inspect Before You Buy', desc: 'Every vehicle at GSMotorsinc comes with a 150-point inspection report and CarFax — so you know exactly what you\'re getting.' },
];

export default function FirstTimeBuyerPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="First-Time Buyers"
        badgeColor="purple"
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">First-Time Buyer</span> Car Financing</>}
        subtitle="Buying your first car is exciting. Our non-commissioned team walks you through every step so there are zero surprises."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'First-Time Buyer', href: '/financing/first-time-buyer' },
        ]}
      />

      {/* What to expect */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">What to Expect</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { num: '01', title: 'Browse Online', desc: 'Explore our full inventory from your phone or laptop.' },
            { num: '02', title: 'Apply for Pre-Approval', desc: 'Soft check, no obligation. Know your budget before visiting.' },
            { num: '03', title: 'Visit the Showroom', desc: 'Test drive shortlisted vehicles with zero pressure.' },
            { num: '04', title: 'Drive Away', desc: 'Sign your paperwork and hit the road — usually within 48 hours.' },
          ].map((s) => (
            <div key={s.num} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <div className="text-3xl font-black text-brand-accent/20 mb-3">{s.num}</div>
              <h3 className="font-bold text-white text-sm mb-1.5">{s.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Tips for First-Time Buyers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip) => (
            <div key={tip.title} className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{tip.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides/buying-used-car-ontario" className="text-brand-accent hover:underline text-sm font-medium">
            Read our full Ontario Buying Guide →
          </Link>
        </div>
      </section>

      <PageCTA
        title="Ready to Buy Your First Car?"
        subtitle="Apply for pre-approval today — soft check only, no obligation."
        primaryHref="/financing/apply"
        primaryLabel="Apply for Financing"
        secondaryHref="/inventory"
        secondaryLabel="Browse Inventory"
      />
    </div>
  );
}
