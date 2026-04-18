import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'First-Time Car Buyer Guide Ontario 2026 | Everything You Need to Know | GSMotorsinc',
  description: 'A complete guide for first-time car buyers in Ontario. Learn about budgeting, financing, insurance, safety certificates, and what to inspect before you buy. Updated 2026.',
};

const toc = [
  { id: 'budget', label: 'Setting Your Budget' },
  { id: 'new-vs-used', label: 'New vs. Used' },
  { id: 'financing', label: 'Financing Your First Car' },
  { id: 'insurance', label: 'Getting Insurance' },
  { id: 'inspection', label: 'What to Inspect' },
  { id: 'safety-cert', label: 'Safety Certificate' },
  { id: 'test-drive', label: 'Test Drive Checklist' },
  { id: 'paperwork', label: 'The Paperwork' },
];

export default function FirstTimeBuyerGuidePage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="First-Time Buyer Guide"
        badgeColor="blue"
        title={<>First-Time Car Buyer <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Guide Ontario</span></>}
        subtitle="Everything you need to know before buying your first car in Ontario. Budget, financing, insurance, inspections, and paperwork — all in one place."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'First-Time Buyer Guide', href: '/guides/first-time-buyer' },
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

      {/* Budget */}
      <section id="budget" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">1. Setting Your Budget</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>Before you fall in love with a specific car, establish your total monthly transportation budget. As a rule of thumb, keep total vehicle costs (payment + insurance + fuel + maintenance) under 15–20% of your take-home pay.</p>
          <p><strong className="text-white">Total cost of ownership breakdown:</strong></p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
            <li><strong className="text-gray-300">Purchase price or monthly payment</strong> — the obvious one</li>
            <li><strong className="text-gray-300">Insurance</strong> — first-time drivers in Ontario often pay $2,000–$4,000/year</li>
            <li><strong className="text-gray-300">Fuel</strong> — estimate based on your commute and the vehicle's L/100km rating</li>
            <li><strong className="text-gray-300">Maintenance</strong> — budget $50–$100/month for oil changes, tires, brakes</li>
            <li><strong className="text-gray-300">Registration & plates</strong> — one-time and annual fees in Ontario</li>
          </ul>
          <p>A good starting point: if you can afford a $400/month payment, your total budget including insurance and fuel is likely $700–$900/month.</p>
        </div>
      </section>

      {/* New vs Used */}
      <section id="new-vs-used" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">2. New vs. Used — What's Better for First-Timers?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-4">New Car</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-green-400">+</span> Full manufacturer warranty</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Latest safety features</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> No hidden history</li>
              <li className="flex gap-2"><span className="text-red-400">–</span> Significant depreciation in year 1</li>
              <li className="flex gap-2"><span className="text-red-400">–</span> Higher purchase price</li>
              <li className="flex gap-2"><span className="text-red-400">–</span> Higher insurance premiums</li>
            </ul>
          </div>
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold text-white mb-4">Used Car (Recommended for Most First-Timers)</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2"><span className="text-green-400">+</span> Someone else absorbed the depreciation</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Lower purchase price = lower monthly payment</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> Lower insurance costs on older vehicles</li>
              <li className="flex gap-2"><span className="text-green-400">+</span> More car for your budget</li>
              <li className="flex gap-2"><span className="text-red-400">–</span> Warranty may be expired</li>
              <li className="flex gap-2"><span className="text-red-400">–</span> Requires more due diligence</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-sm mt-4 leading-relaxed">For most first-time buyers, a 2–4 year old certified pre-owned vehicle offers the best balance of price, reliability, and peace of mind.</p>
      </section>

      {/* Financing */}
      <section id="financing" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">3. Financing Your First Car</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>As a first-time buyer, you may not have a long credit history. Here's what you need to know:</p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            {[
              { title: 'Check Your Credit', desc: 'Pull your free credit report from Equifax or TransUnion before shopping. Know your score going in.' },
              { title: 'Get Pre-Approved', desc: 'Pre-approval tells you exactly how much you can borrow and at what rate — before you fall in love with a vehicle.' },
              { title: 'Consider a Co-Signer', desc: 'A parent or guardian with good credit as co-signer can dramatically improve your rate and approval chances.' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5">
                <h4 className="font-bold text-white text-sm mb-2">{tip.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
          <p>At GSMotorsinc, we have dedicated <Link href="/financing/first-time-buyer" className="text-brand-accent hover:underline">first-time buyer financing programs</Link> with flexible requirements. Apply online in minutes.</p>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">4. Getting Insurance in Ontario</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>You cannot legally drive off the lot without valid insurance. In Ontario, minimum required coverage is:</p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-400 ml-2">
            <li>Third-party liability — minimum $200,000 (most lenders require $1,000,000+)</li>
            <li>Accident benefits (SABS)</li>
            <li>Uninsured automobile coverage</li>
            <li>Direct compensation — property damage (DCPD)</li>
          </ul>
          <p className="mt-4"><strong className="text-white">Tips to lower your premium:</strong></p>
          <ul className="list-disc list-inside space-y-1.5 text-gray-400 ml-2">
            <li>Choose a vehicle on the insurance company's low-risk list</li>
            <li>Complete an accredited driver training course</li>
            <li>Increase your deductible</li>
            <li>Stay on a parent's policy temporarily if permitted</li>
            <li>Shop at least 3 insurers — rates vary dramatically</li>
          </ul>
        </div>
      </section>

      {/* What to inspect */}
      <section id="inspection" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">5. What to Inspect Before Buying</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Exterior Check',
              items: ['Look for rust, especially wheel wells, rockers, and undercarriage', 'Check for paint colour mismatches — sign of accident repair', 'Inspect gaps between panels — should be even', 'Check all glass for chips and cracks'],
            },
            {
              title: 'Interior Check',
              items: ['Test all windows, locks, and mirrors', 'Check A/C, heat, and all fan speeds', 'Test all infotainment and technology features', 'Look for water stains on carpet or headliner (flood damage)'],
            },
            {
              title: 'Under the Hood',
              items: ['Check oil level and colour — dark and dirty is a red flag', 'Look for coolant leaks or white residue', 'Check belts for cracking or fraying', 'Look for rust or corrosion on battery terminals'],
            },
            {
              title: 'Mechanical',
              items: ['Listen for unusual engine noises at idle and under load', 'Test brakes — should not pull, squeal, or vibrate', 'Check for transmission hesitation or rough shifting', 'Look for exhaust smoke (white = coolant, blue = oil, black = fuel)'],
            },
          ].map((section) => (
            <div key={section.title} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-400">
                    <span className="text-brand-accent mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Safety cert */}
      <section id="safety-cert" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">6. Safety Certificate</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>In Ontario, a <strong className="text-white">Safety Standards Certificate (SSC)</strong> is required to register and license a used vehicle. It confirms the vehicle meets minimum safety standards at the time of inspection.</p>
          <p>At GSMotorsinc, all retail vehicles come with a valid safety certificate included. Never buy a used vehicle without one — the seller is required by law to provide it for road-use vehicles.</p>
          <p className="text-yellow-400/80">A safety certificate is not a warranty. It only confirms the vehicle was roadworthy on the inspection date. Always get a pre-purchase inspection from an independent mechanic for added peace of mind.</p>
        </div>
      </section>

      {/* Test drive */}
      <section id="test-drive" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">7. Test Drive Checklist</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Cold start — any hesitation or unusual noise?',
              'Acceleration — smooth with no jerks or hesitation?',
              'Highway speed — any vibration or pulling?',
              'Hard braking — straight stop, no pull or grinding?',
              'Turns — steering is light and responsive?',
              'Reverse — smooth, no clunking?',
              'Dashboard warning lights — all clear after warm-up?',
              'A/C and heat — both functional at all speeds?',
              'Parking sensors or camera — working correctly?',
              'Volume and infotainment — test Bluetooth pairing',
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

      {/* Paperwork */}
      <section id="paperwork" className="container mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">8. The Paperwork</h2>
        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>When purchasing from a licensed dealer in Ontario, you should receive:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 ml-2">
            <li><strong className="text-gray-300">Bill of Sale</strong> — itemizes purchase price, HST, fees, and trade-in credit</li>
            <li><strong className="text-gray-300">Safety Standards Certificate</strong> — required for registration</li>
            <li><strong className="text-gray-300">Used Vehicle Information Package (UVIP)</strong> — lien and history disclosure</li>
            <li><strong className="text-gray-300">Financing agreement</strong> — if applicable</li>
            <li><strong className="text-gray-300">Warranty documents</strong> — remaining manufacturer warranty or dealer warranty</li>
          </ul>
          <p>After purchase, visit a ServiceOntario location with your bill of sale, safety certificate, insurance slip, and ID to register the vehicle and receive plates.</p>
        </div>
      </section>

      <PageCTA
        title="Ready to Buy Your First Car?"
        subtitle="Browse our inventory or talk to our team — we make first-time buying easy."
        primaryHref="/inventory"
        primaryLabel="Browse Vehicles"
        secondaryHref="/financing/first-time-buyer"
        secondaryLabel="First-Time Financing"
      />
    </div>
  );
}
