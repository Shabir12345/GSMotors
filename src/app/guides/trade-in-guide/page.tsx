import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Ontario Trade-In Guide 2026 | How to Maximize Your Trade Value | GSMotorsinc',
  description: 'Learn how to get maximum trade-in value for your vehicle in Ontario. Timing, preparation, negotiation, and tax advantages — the complete guide. Updated 2026.',
};

const toc = [
  { id: 'how-it-works', label: 'How Trade-In Works' },
  { id: 'tax-advantage', label: 'The Ontario HST Tax Advantage' },
  { id: 'preparation', label: 'Preparing Your Vehicle' },
  { id: 'timing', label: 'Best Time to Trade' },
  { id: 'valuation', label: 'How Dealers Calculate Trade Value' },
  { id: 'negotiation', label: 'Negotiating Your Trade' },
  { id: 'trade-vs-sell', label: 'Trade-In vs. Private Sale' },
  { id: 'checklist', label: 'Trade-In Checklist' },
];

export default function TradeInGuidePage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Trade-In Guide"
        badgeColor="blue"
        title={<>Ontario Trade-In Guide — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Maximize Your Value</span></>}
        subtitle="Everything you need to know about trading in your vehicle in Ontario. From preparation to negotiation — get the most money for your trade."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Trade-In Guide', href: '/guides/trade-in-guide' },
        ]}
      />

      {/* TOC */}
      <section className="container mx-auto px-4 md:px-6 mb-12">
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">In This Guide</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {toc.map((item, i) => (
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2.5 text-sm text-gray-300 hover:text-brand-accent transition-colors">
                <span className="text-brand-accent/50 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">1. How Trade-In Works</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>A trade-in is when you sell your current vehicle directly to the dealership as part of purchasing a new one. The trade-in value is applied as a credit against the purchase price of your next vehicle.</p>
          <p>The process: you bring your vehicle in, the dealer appraises it, makes an offer, and if you accept, the value is deducted from what you owe on the new vehicle — reducing your financing amount, your monthly payment, and in Ontario, the HST you pay.</p>
        </div>
      </section>

      {/* HST advantage */}
      <section id="tax-advantage" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">2. The Ontario HST Tax Advantage</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>This is one of the most important and underappreciated aspects of trading in Ontario. <strong className="text-white">You pay HST (13%) only on the difference between the purchase price and your trade-in value</strong> — not on the full purchase price.</p>
          <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-xl p-5 my-4">
            <p className="text-white font-bold mb-3">Example:</p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-gray-400">Purchase price of new vehicle</span><span className="text-white">$25,000</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Your trade-in value</span><span className="text-white">$8,000</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Net amount subject to HST</span><span className="text-white">$17,000</span></div>
              <div className="flex justify-between border-t border-white/10 pt-2 mt-2"><span className="text-gray-400">HST savings vs. selling privately and paying full HST</span><span className="text-brand-accent font-bold">$1,040 saved</span></div>
            </div>
          </div>
          <p>This tax advantage often makes a dealer trade-in worth more in total than a slightly higher private sale offer — especially on vehicles valued $5,000+.</p>
        </div>
      </section>

      {/* Preparation */}
      <section id="preparation" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">3. Preparing Your Vehicle</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Do These',
              color: 'green',
              items: [
                'Wash and detail the interior and exterior thoroughly',
                'Fix obvious cosmetic issues (scratches, chips) cheaply',
                'Replace burned-out bulbs and worn wiper blades',
                'Ensure all fluid levels are correct',
                'Gather all service records — documented maintenance increases value',
                'Remove all personal belongings',
              ],
            },
            {
              title: "Don't Bother With These",
              color: 'red',
              items: [
                'Major mechanical repairs (dealer will discount labour anyway)',
                'New tires unless extremely worn — dealers buy in bulk',
                'New brakes unless metal-on-metal',
                'Engine detailing — dealers know this trick',
                'Expensive cosmetic repairs (bumper repaints, dent removal)',
              ],
            },
          ].map((section) => (
            <div key={section.title} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-400">
                    <span className={section.color === 'green' ? 'text-green-400' : 'text-red-400'}>
                      {section.color === 'green' ? '✓' : '✗'}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timing */}
      <section id="timing" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">4. Best Time to Trade</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Season', desc: 'Trade SUVs and trucks in fall/winter when demand is high. Convertibles and sports cars fetch more in spring/summer.' },
              { title: 'Market Conditions', desc: 'Used vehicle values fluctuate with supply/demand. Post-pandemic shortages drove values up significantly — monitor market trends.' },
              { title: 'Your Loan Position', desc: 'Trade when you have positive equity (vehicle worth more than you owe). Trading underwater means rolling negative equity into the new loan.' },
            ].map((t) => (
              <div key={t.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <h4 className="font-bold text-white text-sm mb-2">{t.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How dealers calculate */}
      <section id="valuation" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">5. How Dealers Calculate Trade Value</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>Dealers look at several data points to appraise your vehicle:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
            <li><strong className="text-gray-300">Black Book / Canadian Black Book (CBB)</strong> — the industry standard for used vehicle values in Canada</li>
            <li><strong className="text-gray-300">Recent auction results</strong> — what similar vehicles actually sold for at wholesale</li>
            <li><strong className="text-gray-300">Local market demand</strong> — is your vehicle selling well in this market right now?</li>
            <li><strong className="text-gray-300">Reconditioning cost estimate</strong> — what it will cost to safety, detail, and recondition before resale</li>
            <li><strong className="text-gray-300">Days to sell estimate</strong> — fast movers get better offers; slow movers get discounted</li>
          </ul>
          <p>Know what your vehicle is worth before you walk in. Check <strong className="text-white">Canadian Black Book</strong>, <strong className="text-white">AutoTrader listings</strong>, and recent auction data for comparable vehicles in your region.</p>
        </div>
      </section>

      {/* Negotiation */}
      <section id="negotiation" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">6. Negotiating Your Trade</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>The key negotiation insight: <strong className="text-white">negotiate the purchase price and trade-in value separately.</strong> If you bundle them, you lose visibility into where money is moving.</p>
          <div className="grid md:grid-cols-2 gap-4 my-4">
            {[
              { title: 'Get a standalone offer first', desc: 'Ask: "What would you pay for my vehicle if I was not buying today?" This is your baseline.' },
              { title: 'Come with competing offers', desc: 'Get quotes from CarGurus Instant Cash Offer, Kijiji Autos, or other dealers. These create leverage.' },
              { title: "Don't mention your trade too early", desc: "Negotiate the purchase price first, then introduce the trade. Prevents the dealer from giving with one hand and taking with the other." },
              { title: 'Know your walk-away number', desc: 'Set a minimum acceptable trade value before you sit down. Knowing your number prevents emotional decisions.' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <h4 className="font-bold text-white text-sm mb-2">{tip.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade vs sell */}
      <section id="trade-vs-sell" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">7. Trade-In vs. Private Sale</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>Private sale typically nets more gross money, but once you factor in the HST advantage, time, risk, and hassle, a dealer trade often wins on net value.</p>
          <p>See our full comparison: <Link href="/sell-trade/trade-vs-sell" className="text-brand-accent hover:underline">Trade-In vs. Private Sale — Which is Better?</Link></p>
        </div>
      </section>

      {/* Checklist */}
      <section id="checklist" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">8. Trade-In Checklist</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Research your vehicle value on Canadian Black Book before going in',
              'Wash and detail interior and exterior',
              'Gather all service records and receipts',
              'Get at least 2 competing trade-in offers',
              'Know your loan payoff amount if financed',
              'Negotiate purchase price before discussing trade',
              'Calculate the HST savings from the trade-in',
              'Remove all personal belongings and garage door openers',
              'Have your ownership document ready',
              'Get the trade-in value in writing before signing',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-400">
                <div className="w-4 h-4 rounded border border-white/20 mt-0.5 shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-sm bg-brand-accent/40" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Get Your Trade Value?"
        subtitle="Get a free, no-obligation trade-in appraisal at GSMotorsinc."
        primaryHref="/sell-trade/valuation"
        primaryLabel="Get Trade Value"
        secondaryHref="/sell-trade/trade-vs-sell"
        secondaryLabel="Trade vs. Private Sale"
      />
    </div>
  );
}
