import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Trade In vs Sell Privately | Ontario HST Savings | GSMotorsinc',
  description: 'Compare trading in your car vs selling privately in Ontario. Understand the HST savings on trade-ins, convenience factors, and which option puts more money in your pocket.',
};

const comparison = [
  { factor: 'Ontario HST Savings', tradeIn: '✓ HST only on the net purchase price', private: '✗ No tax savings', tradeWins: true },
  { factor: 'Speed of Sale', tradeIn: '✓ Same day decision', private: '✗ Weeks or months', tradeWins: true },
  { factor: 'Effort Required', tradeIn: '✓ We handle everything', private: '✗ Photos, ads, showings, test drives', tradeWins: true },
  { factor: 'Sale Price', tradeIn: 'Fair market value', private: 'Potentially higher price', tradeWins: false },
  { factor: 'Personal Safety', tradeIn: '✓ Safe, professional transaction', private: '✗ Strangers visiting your home', tradeWins: true },
  { factor: 'Payment Application', tradeIn: '✓ Instantly applies toward purchase', private: '✗ Separate transactions', tradeWins: true },
  { factor: 'Paperwork', tradeIn: '✓ We handle all documentation', private: '✗ UVIP, bill of sale, ownership transfer', tradeWins: true },
];

export default function TradeVsSellPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Comparison Guide"
        badgeColor="amber"
        title={<>Trade In vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Sell Privately</span> — What&apos;s Better?</>}
        subtitle="In Ontario, trading in your vehicle can save you hundreds in HST. Here's an honest side-by-side breakdown to help you decide."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Sell / Trade', href: '/sell-trade' },
          { name: 'Trade vs Sell', href: '/sell-trade/trade-vs-sell' },
        ]}
      />

      {/* Comparison table */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-6 md:p-10 overflow-x-auto">
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="text-left text-xs font-bold uppercase tracking-widest text-gray-500 pb-4 pr-6 w-1/3">Factor</th>
                <th className="text-center text-xs font-bold uppercase tracking-widest text-brand-accent pb-4 px-4 w-1/3">Trade-In at Dealer</th>
                <th className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 pb-4 px-4 w-1/3">Private Sale</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.factor} className={`border-b ${i < comparison.length - 1 ? 'border-white/[0.05]' : 'border-transparent'}`}>
                  <td className="py-4 pr-6 font-medium text-white text-sm">{row.factor}</td>
                  <td className={`text-center py-4 px-4 text-sm ${row.tradeWins ? 'text-emerald-400' : 'text-gray-400'}`}>{row.tradeIn}</td>
                  <td className={`text-center py-4 px-4 text-sm ${!row.tradeWins ? 'text-emerald-400' : 'text-gray-500'}`}>{row.private}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* HST savings callout */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-brand-accent/10 border border-brand-accent/20 rounded-3xl p-8 md:p-10">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">The Ontario HST Savings Example</h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed max-w-2xl">
            <p>In Ontario, when you trade in your vehicle at a licensed dealer, HST is only charged on the <strong className="text-white">difference</strong> between the purchase price and trade-in value — not the full vehicle price.</p>
            <div className="bg-white/5 rounded-xl p-5 space-y-2 font-mono text-xs">
              <div className="flex justify-between"><span className="text-gray-400">New vehicle price:</span><span className="text-white">$25,000</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Trade-in value:</span><span className="text-brand-accent">- $10,000</span></div>
              <div className="flex justify-between border-t border-white/10 pt-2"><span className="text-gray-400">HST calculated on:</span><span className="text-white">$15,000</span></div>
              <div className="flex justify-between"><span className="text-gray-400">HST (13%):</span><span className="text-white">$1,950</span></div>
              <div className="flex justify-between border-t border-white/10 pt-2 font-bold"><span className="text-brand-accent">vs. private sale HST:</span><span className="text-brand-accent">$3,250</span></div>
              <div className="flex justify-between font-bold"><span className="text-emerald-400">HST savings by trading:</span><span className="text-emerald-400">$1,300</span></div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Get Your Valuation?"
        subtitle="Know what your car is worth before you decide to trade or sell."
        primaryHref="/sell-trade/valuation"
        primaryLabel="Get My Valuation"
        secondaryHref="/sell-trade/process"
        secondaryLabel="How It Works"
      />
    </div>
  );
}
