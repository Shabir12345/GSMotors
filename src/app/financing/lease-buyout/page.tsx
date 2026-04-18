import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Lease Buyout Financing Ontario | Buy Your Leased Vehicle | GSMotorsinc',
  description: 'Financing to buy out your leased vehicle in Ontario. GSMotorsinc helps you secure competitive rates to purchase your lease-end car. Fast approval, no hassle.',
};

const benefits = [
  { title: 'Skip the Search', desc: 'You already know and love the car. A buyout skips the hunting process entirely.' },
  { title: 'Known History', desc: 'You know exactly how the vehicle was driven and maintained — no surprises.' },
  { title: 'Avoid Return Fees', desc: 'Excess mileage and wear charges add up fast. Buying out avoids those end-of-lease penalties.' },
  { title: 'Build Equity', desc: 'Instead of handing the car back, you start building ownership equity from day one.' },
];

const faqs = [
  {
    q: 'What is a lease buyout?',
    a: 'A lease buyout is when you purchase the vehicle at the end of your lease term, or in some cases mid-lease. The price is typically the residual value stated in your original lease agreement.',
  },
  {
    q: 'Can I finance a lease buyout?',
    a: 'Yes. A lease buyout loan works like a standard auto loan — we secure financing at a competitive rate, you pay out the residual to the leasing company, and the vehicle becomes yours.',
  },
  {
    q: 'Is the residual value negotiable?',
    a: 'Residual values are generally fixed in the lease contract, but it is always worth asking your leasing company. At end of term, if the market value is lower than the residual, you have leverage to negotiate.',
  },
  {
    q: 'What documents do I need?',
    a: 'Bring your lease agreement (showing residual value and buyout terms), proof of income, government ID, and your current insurance. We handle the rest.',
  },
];

export default function LeaseBuyoutPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Lease Buyout"
        badgeColor="blue"
        title={<>Finance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Lease Buyout</span></>}
        subtitle="Love your leased vehicle? Buy it out with competitive financing. We make the process simple and fast."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Lease Buyout', href: '/financing/lease-buyout' },
        ]}
      />

      {/* How it works */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">How a Lease Buyout Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Check Your Residual', desc: 'Find the buyout price in your lease agreement — this is the amount we need to finance.' },
            { step: '02', title: 'Apply for Financing', desc: 'Submit our short application. We shop our lender network for the best lease buyout rate.' },
            { step: '03', title: 'Get Approved', desc: 'Receive your approval with rate, term, and monthly payment — often within 24 hours.' },
            { step: '04', title: 'Transfer Ownership', desc: 'We fund the payout to your leasing company and the title transfers to your name.' },
          ].map((s) => (
            <div key={s.step} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-8">
              <div className="text-4xl font-black text-brand-accent/20 mb-4">{s.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Buy Out Your Lease?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="w-8 h-8 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-white text-sm mb-1.5">{b.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
              <h3 className="text-base font-bold text-white mb-3">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA
        title="Ready to Own Your Vehicle?"
        subtitle="Apply for lease buyout financing today — fast approval, competitive rates."
        primaryHref="/financing/apply"
        primaryLabel="Apply Now"
        secondaryHref="/contact"
        secondaryLabel="Talk to a Specialist"
      />
    </div>
  );
}
