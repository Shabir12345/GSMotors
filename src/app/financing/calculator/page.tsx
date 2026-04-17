import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Car Payment Calculator | Estimate Monthly Payments | GSMotorsinc',
  description: 'Use our free car payment calculator to estimate monthly payments. Sample payment tables for $10k–$30k vehicles over 48, 60, and 72 months. GSMotorsinc Newcastle, ON.',
};

const RATE = 6.99;

function calcPayment(principal: number, annualRate: number, months: number): string {
  const r = annualRate / 100 / 12;
  const payment = (principal * r) / (1 - Math.pow(1 + r, -months));
  return payment.toFixed(0);
}

const prices = [10000, 15000, 20000, 25000, 30000];
const terms = [48, 60, 72];

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Payment Calculator"
        badgeColor="amber"
        title={<>Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Monthly Payment</span></>}
        subtitle={`Use our sample payment table to plan your budget. Rates from 4.99% OAC. Sample below uses ${RATE}% APR.`}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Calculator', href: '/financing/calculator' },
        ]}
      />

      {/* Payment table */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-6 md:p-10 overflow-x-auto">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-xl font-bold text-white">Sample Monthly Payments</h2>
            <span className="text-xs px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold">
              Based on {RATE}% APR · 0% down · OAC
            </span>
          </div>
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-white/[0.07]">
                <th className="text-left text-xs font-bold uppercase tracking-widest text-gray-500 pb-4 pr-6">Vehicle Price</th>
                {terms.map((t) => (
                  <th key={t} className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 pb-4 px-4">
                    {t} months
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prices.map((price, i) => (
                <tr key={price} className={`border-b ${i < prices.length - 1 ? 'border-white/[0.05]' : 'border-transparent'}`}>
                  <td className="py-4 pr-6">
                    <span className="font-bold text-white">${price.toLocaleString()}</span>
                  </td>
                  {terms.map((term) => (
                    <td key={term} className="text-center py-4 px-4">
                      <span className="text-brand-accent font-bold text-lg">
                        ${calcPayment(price, RATE, term)}
                      </span>
                      <span className="text-gray-500 text-xs">/mo</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-gray-500 text-xs mt-6">
            * Sample payments for illustrative purposes only. Actual rate depends on credit profile, vehicle, and lender. HST and fees not included. Get your personalized rate by applying below.
          </p>
        </div>
      </section>

      {/* CTA to apply */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Rates from 4.99%', desc: 'Our lender network offers competitive rates for qualified buyers. The rate you see above may be lower for you.', color: 'text-brand-accent' },
            { title: 'Down Payment Reduces Cost', desc: 'A down payment or trade-in directly reduces your financed amount, lowering your monthly payment.', color: 'text-brand-highlight' },
            { title: 'Flexible Terms', desc: 'Choose 24–84 month terms to balance monthly affordability against total interest paid.', color: 'text-purple-400' },
          ].map((item) => (
            <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <h3 className={`text-lg font-bold mb-2 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <PageCTA
        title="Get Your Actual Rate"
        subtitle="Apply in 60 seconds. Soft check only — won't affect your credit."
        primaryHref="/financing/apply"
        primaryLabel="Get My Rate"
        secondaryHref="/financing/bad-credit"
        secondaryLabel="Bad Credit Options"
      />
    </div>
  );
}
