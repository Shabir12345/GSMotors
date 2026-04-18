import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Car Loans After Bankruptcy Ontario | Fresh Start Financing | GSMotorsinc',
  description: 'Get approved for a car loan after bankruptcy or consumer proposal in Ontario. GSMotorsinc works with lenders who specialize in post-bankruptcy auto financing.',
};

const trustItems = [
  { title: 'Post-Bankruptcy Specialists', desc: 'Our lender partners specifically serve customers who have discharged bankruptcy or completed a consumer proposal.' },
  { title: 'Rebuild Your Credit', desc: 'An auto loan is one of the fastest ways to rebuild your credit score after bankruptcy. On-time payments report monthly.' },
  { title: 'No Judgment', desc: 'Our team understands financial hardship. We focus on your current situation and future ability to pay, not your past.' },
  { title: 'Quick Decision', desc: 'Pre-approval decisions within 24 hours. Provide proof of discharge and income — we handle the rest.' },
];

const faqs = [
  {
    q: 'Can I get a car loan after bankruptcy in Ontario?',
    a: 'Yes. Many lenders specialize in post-bankruptcy auto financing. You typically need to be discharged from bankruptcy (or have a signed consumer proposal), show stable employment, and have a reasonable income-to-loan ratio.',
  },
  {
    q: 'How long after discharge can I apply?',
    a: 'You can apply immediately after discharge. Some lenders require 30–90 days post-discharge. We will match you to lenders based on your specific timeline.',
  },
  {
    q: 'Will my rate be higher after bankruptcy?',
    a: 'Initially, yes. Post-bankruptcy rates are typically higher to reflect the added risk. However, after 12–18 months of consistent on-time payments, many customers refinance at significantly lower rates.',
  },
  {
    q: 'What documents do I need?',
    a: 'You will need your discharge papers or certificate of full performance (consumer proposal), two recent pay stubs or a letter of employment, a void cheque, and government-issued photo ID.',
  },
  {
    q: 'What about a consumer proposal?',
    a: 'Yes, consumer proposals are treated similarly to bankruptcy by most specialty lenders. You can often apply during an active proposal with a trustee letter — ask us about options.',
  },
];

export default function BankruptcyFinancingPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Fresh Start Financing"
        badgeColor="green"
        title={<>Car Loans After <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Bankruptcy</span> Ontario</>}
        subtitle="Bankruptcy doesn't define your future. We work with lenders who specialize in post-bankruptcy and consumer proposal financing — get approved today."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Financing', href: '/financing' },
          { name: 'Bankruptcy Financing', href: '/financing/bankruptcy' },
        ]}
      />

      {/* How it works */}
      <section className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center tracking-tight">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Apply Online', desc: 'Complete our short application. Tell us about your discharge date, employment, and income — takes under 5 minutes.' },
            { step: '02', title: 'Get Matched', desc: 'We submit to our network of post-bankruptcy specialist lenders and bring you the best available offer.' },
            { step: '03', title: 'Drive & Rebuild', desc: 'Drive your vehicle and rebuild your credit with every on-time payment. Many customers refinance at better rates within 2 years.' },
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
        title="Ready for a Fresh Start?"
        subtitle="Apply now — soft check only. Decisions within 24 hours."
        primaryHref="/financing/apply"
        primaryLabel="Apply Now"
        secondaryHref="/contact"
        secondaryLabel="Speak to an Advisor"
      />
    </div>
  );
}
