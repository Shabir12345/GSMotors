import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Bad Credit Car Loans Ontario | Guaranteed Consideration | GSMotorsinc',
  description: 'Bad credit car loans in Ontario with guaranteed approval consideration. GSMotorsinc works with all credit scores through our network of lenders. Apply today.',
};

const trustItems = [
  { title: 'All Credit Welcome', desc: 'Whether your score is 500 or 750, our lender network has a program for you.' },
  { title: 'Fast Approval', desc: 'Pre-approval decisions within 24 hours. Drive away in days, not weeks.' },
  { title: 'Multiple Lenders', desc: 'We work with 10+ lenders specializing in second-chance financing.' },
  { title: 'No Hidden Fees', desc: 'Transparent terms from day one. The rate you approve is the rate you pay.' },
];

const faqs = [
  {
    q: 'Do I qualify with bad credit?',
    a: 'Yes. Our lender network specializes in non-prime and sub-prime auto financing. We evaluate your full financial picture — not just your credit score. Employment history, income, and down payment all factor positively.',
  },
  {
    q: 'Will applying affect my credit score?',
    a: 'Our pre-approval process uses a soft credit inquiry which does not affect your score. A hard check only occurs once you formally accept a financing offer.',
  },
  {
    q: 'How much of a down payment do I need?',
    a: 'Down payment requirements vary by lender and credit profile. Some programs require as little as $500 down. A larger down payment generally improves your rate and approval chances.',
  },
];

export default function BadCreditPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Bad Credit? No Problem"
        badgeColor="green"
        title={<>Bad Credit <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Car Loans</span> Ontario</>}
        subtitle="We work with ALL credit scores. Our lender network specializes in second-chance financing — get behind the wheel today."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Bad Credit', href: '/financing/bad-credit' },
        ]}
      />

      {/* How it works */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Apply Online', desc: 'Complete our short financing application — takes under 3 minutes. No obligation.' },
            { step: '02', title: 'Get Matched', desc: 'We match your application to lenders in our network who specialize in your credit profile.' },
            { step: '03', title: 'Drive Away', desc: 'Select your vehicle, finalize terms, and drive away — often within 48–72 hours.' },
          ].map((s) => (
            <div key={s.step} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-8">
              <div className="text-4xl font-black text-brand-accent/20 mb-4">{s.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustItems.map((t) => (
            <div key={t.title} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
              <div className="w-8 h-8 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-white text-sm mb-1.5">{t.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{t.desc}</p>
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
        title="Ready to Get Approved?"
        subtitle="Apply now — soft check only, no obligation."
        primaryHref="/financing/apply"
        primaryLabel="Apply Now"
        secondaryHref="/contact"
        secondaryLabel="Speak to an Advisor"
      />
    </div>
  );
}
