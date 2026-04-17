import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'How Our Trade-In Process Works | GSMotorsinc Ontario',
  description: 'A simple, transparent 4-step trade-in and sell process at GSMotorsinc Newcastle. Submit details, get valued, visit us, and get paid. No pressure, no games.',
};

const steps = [
  {
    num: '01',
    title: 'Submit Your Vehicle Details',
    desc: 'Use our online valuation form to submit your vehicle\'s year, make, model, mileage, and condition. Takes under 2 minutes.',
    link: '/sell-trade/valuation',
    linkLabel: 'Start Valuation Form',
  },
  {
    num: '02',
    title: 'Receive Your Valuation',
    desc: 'Our team reviews your submission and contacts you within 24 hours with a preliminary market valuation based on current data.',
    link: null,
    linkLabel: null,
  },
  {
    num: '03',
    title: 'Visit or Virtual Assessment',
    desc: 'We confirm the valuation after a brief in-person inspection at our Newcastle lot. We may be able to do a virtual review in some cases.',
    link: '/contact',
    linkLabel: 'Book Your Assessment',
  },
  {
    num: '04',
    title: 'Get Paid or Apply to Purchase',
    desc: 'Accept a direct cash offer, or apply your vehicle\'s value toward a purchase from our inventory — potentially saving on HST.',
    link: '/sell-trade/trade-vs-sell',
    linkLabel: 'Trade vs Sell Guide',
  },
];

const bringItems = [
  'Vehicle keys (all sets)',
  'Vehicle ownership (signed)',
  'Safety certificate (if applicable)',
  'Valid government-issued ID',
  'Service records (if available — increases value)',
  'Lien release (if vehicle is financed)',
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Simple Process"
        badgeColor="blue"
        title={<>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Trade-In Process</span> — Simple & Fast</>}
        subtitle="Four steps from submission to payment. No pressure, no games — just a fair, transparent transaction."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Sell / Trade', href: '/sell-trade' },
          { name: 'How It Works', href: '/sell-trade/process' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="space-y-5">
          {steps.map((step, i) => (
            <div key={step.num} className="grid md:grid-cols-[80px_1fr] gap-6 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 items-start">
              <div className="text-5xl font-black text-brand-accent/20 leading-none">{step.num}</div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3">{step.desc}</p>
                {step.link && (
                  <Link href={step.link} className="text-brand-accent text-xs font-semibold hover:underline">
                    {step.linkLabel} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">What to Bring</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {bringItems.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/[0.04] rounded-xl px-4 py-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA title="Start with a Free Valuation" subtitle="No commitment needed. Know your number before you decide." primaryHref="/sell-trade/valuation" primaryLabel="Get My Valuation" secondaryHref="/sell-trade/trade-vs-sell" secondaryLabel="Trade vs Sell Guide" />
    </div>
  );
}
