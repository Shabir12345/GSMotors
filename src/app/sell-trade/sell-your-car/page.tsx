import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Sell Your Car in Ontario | Fast & Fair Offers | GSMotorsinc',
  description: 'Sell your car to GSMotorsinc in Newcastle, ON. Get a fast, fair cash offer with no obligation. We buy all makes, models, and conditions across Durham Region.',
};

const whyUs = [
  { title: 'Fair Market Offers', desc: 'We use real market data to make offers you can actually compare — no low-ball tactics.' },
  { title: 'Fast Payment', desc: 'Accept our offer and receive payment the same day. Cash, bank draft, or EFT — your choice.' },
  { title: 'We Buy Anything', desc: 'Running or not, financed or clear title, any make or model. We buy them all.' },
  { title: 'No Obligation', desc: 'Our offer is free with no pressure to accept. Walk away anytime.' },
];

const faqs = [
  {
    q: 'Do I need to buy a car from you to sell to you?',
    a: 'No. We buy vehicles outright with no requirement to purchase anything from us. If you do want to buy a replacement vehicle, we can combine both transactions for maximum convenience.',
  },
  {
    q: 'What if my car has a lien or outstanding loan?',
    a: 'We handle financed vehicles regularly. We will contact your lender directly, pay out the remaining balance, and provide you with the equity difference — or pay it out of your proceeds.',
  },
  {
    q: 'How do you determine the offer price?',
    a: 'We assess your vehicle based on year, make, model, trim, mileage, condition (mechanical and cosmetic), and current market demand. We check live auction data and private market comparables.',
  },
  {
    q: 'What documents do I need?',
    a: 'You need the vehicle ownership (or a lien payout letter if financed), your driver\'s licence, and any service records you have available. We handle the transfer paperwork.',
  },
  {
    q: 'How long does the process take?',
    a: 'Most sell transactions complete in under 2 hours. This includes inspection, offer, paperwork, and payment.',
  },
];

export default function SellYourCarPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Sell Your Car"
        badgeColor="red"
        title={<>Sell Your Car — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Fast & Fair</span></>}
        subtitle="Get a competitive cash offer for your vehicle today. No haggling, no waiting weeks for a private buyer — just a fair price and same-day payment."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Sell / Trade-In', href: '/sell-trade' },
          { name: 'Sell Your Car', href: '/sell-trade/sell-your-car' },
        ]}
      />

      {/* Steps */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">How to Sell Your Car to Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Get a Quote', desc: 'Fill out our valuation form or call us. Tell us about your vehicle — year, make, model, mileage, and condition.' },
            { step: '02', title: 'Bring It In', desc: 'Drive to our Newcastle dealership for a quick physical inspection. No appointment needed during business hours.' },
            { step: '03', title: 'Review Your Offer', desc: 'We present a written offer with no hidden deductions. Take your time to review — there is no pressure.' },
            { step: '04', title: 'Get Paid', desc: 'Accept and receive payment same day. Bank draft, EFT, or cash for smaller amounts.' },
          ].map((s) => (
            <div key={s.step} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-8">
              <div className="text-4xl font-black text-brand-accent/20 mb-4">{s.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Sell to GSMotorsinc?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUs.map((w) => (
            <div key={w.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="w-8 h-8 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-white text-sm mb-1.5">{w.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vs private sale comparison */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Selling to Us vs. Private Sale</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.04] border-b border-white/[0.07] p-4">
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider"></div>
            <div className="text-brand-accent text-xs font-bold uppercase tracking-wider text-center">GSMotorsinc</div>
            <div className="text-gray-400 text-xs font-bold uppercase tracking-wider text-center">Private Sale</div>
          </div>
          {[
            ['Time to payment', 'Same day', 'Weeks to months'],
            ['Paperwork', 'We handle it', 'You handle it'],
            ['Safety concerns', 'None', 'Strangers at your home'],
            ['Financed vehicles', 'Yes, we manage it', 'Complicated'],
            ['Negotiation', 'One fair offer', 'Ongoing haggling'],
            ['Price', 'Market-based', 'Potentially higher (but slower)'],
          ].map(([feature, us, them]) => (
            <div key={feature} className="grid grid-cols-3 p-4 border-b border-white/[0.04] last:border-0">
              <div className="text-gray-400 text-sm">{feature}</div>
              <div className="text-white text-sm font-medium text-center">{us}</div>
              <div className="text-gray-500 text-sm text-center">{them}</div>
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
        title="Ready to Sell?"
        subtitle="Get your free valuation today — no obligation, no pressure."
        primaryHref="/sell-trade/valuation"
        primaryLabel="Get My Offer"
        secondaryHref="/contact"
        secondaryLabel="Call Us"
      />
    </div>
  );
}
