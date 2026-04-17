import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'How to Buy a Used Car in Ontario: The Complete 2026 Guide | GSMotorsinc',
  description: 'A complete guide to buying a used car in Ontario: safety certificates, UVIP, CarFax, HST rules, OMVIC rights, inspection checklist, and financing tips. Updated 2026.',
};

const toc = [
  { id: 'safety-cert', label: 'Safety Certificate' },
  { id: 'uvip', label: 'UVIP (Used Vehicle Information Package)' },
  { id: 'carfax', label: 'Vehicle History (CarFax)' },
  { id: 'inspection', label: 'Pre-Purchase Inspection' },
  { id: 'hst', label: 'HST on Used Cars in Ontario' },
  { id: 'omvic', label: 'Your OMVIC Rights' },
  { id: 'financing', label: 'Financing Options' },
  { id: 'checklist', label: 'Final Checklist' },
];

const finalChecklist = [
  'Confirm vehicle has a valid safety certificate',
  'Review the UVIP for lien, stolen flag, or write-off history',
  'Read the CarFax report — check accident and service history',
  'Complete or review a 150-point pre-purchase inspection',
  'Verify odometer reading matches CarFax records',
  'Understand your financing terms (APR, total cost of borrowing)',
  'Confirm warranty status (remaining manufacturer, dealer, extended)',
  'Test drive and confirm all features / A/C / heat work correctly',
];

export default function BuyingGuideOntarioPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Ontario Buying Guide"
        badgeColor="blue"
        title={<>How to Buy a Used Car <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">in Ontario</span></>}
        subtitle="The complete 2026 guide — from finding the right vehicle to driving it home. Everything a Ontario buyer needs to know."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Buying a Used Car in Ontario', href: '/guides/buying-used-car-ontario' },
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

      {/* Content sections */}
      <div className="container mx-auto px-4 md:px-6 space-y-16 mb-16">
        <section id="safety-cert">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">1. Safety Certificate</h2>
          <div className="prose-custom space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>In Ontario, a <strong className="text-white">Safety Standards Certificate</strong> is required when transferring ownership of a used vehicle purchased from a private seller, or from a dealer when the vehicle is being registered for the first time by the buyer.</p>
            <p>A licensed mechanic at an accredited inspection station performs the safety inspection. It covers brakes, steering, suspension, lighting, windshield wipers, tires, and structural integrity. Cost is typically $50–$100.</p>
            <p>When you buy from a registered OMVIC dealer like GSMotorsinc, you have additional protections — and our vehicles go through a 150-point inspection that exceeds the ministry safety standard.</p>
          </div>
        </section>

        <section id="uvip">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">2. UVIP (Used Vehicle Information Package)</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>The <strong className="text-white">UVIP</strong> is a mandatory document when selling a used vehicle privately in Ontario. It costs approximately $20 and is ordered through ServiceOntario by the seller.</p>
            <p>It contains: vehicle registration history, current and outstanding liens, written-off or stolen vehicle status, and the fair market value range for the vehicle. Always request a UVIP from a private seller before purchasing.</p>
            <p>When buying from a licensed dealer, the UVIP is handled differently — but you should still ask about lien status and write-off history, both of which appear on the CarFax report we provide with every vehicle.</p>
          </div>
        </section>

        <section id="carfax">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">3. Vehicle History (CarFax)</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>A <strong className="text-white">CarFax report</strong> shows accident history, number of previous owners, service records, odometer readings at each service event, and whether the vehicle was used as a rental, taxi, or fleet unit.</p>
            <p>Red flags to look for: salvage/rebuilt title, multiple accidents, odometer rollback indicators, or gaps in service history with high mileage between entries.</p>
            <p>At GSMotorsinc, we provide a CarFax report with every vehicle as a standard part of the buying process — ask to see it before your test drive.</p>
          </div>
          <div className="mt-4">
            <Link href="/services/carfax-report" className="text-brand-accent text-sm font-semibold hover:underline">Learn about our CarFax policy →</Link>
          </div>
        </section>

        <section id="inspection">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">4. Pre-Purchase Inspection</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>A pre-purchase inspection (PPI) is a thorough mechanical assessment of the vehicle by a qualified technician. For a private purchase, take the car to an independent mechanic before signing — typically costs $100–$150 and is always worth it.</p>
            <p>When buying from GSMotorsinc, our 150-point inspection covers engine, drivetrain, brakes, suspension, electrical, HVAC, safety systems, interior, and exterior. You receive a copy of the report with every vehicle.</p>
          </div>
          <div className="mt-4">
            <Link href="/services/inspection" className="text-brand-accent text-sm font-semibold hover:underline">About our 150-point inspection →</Link>
          </div>
        </section>

        <section id="hst">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">5. HST on Used Cars in Ontario</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>When buying from a <strong className="text-white">registered dealer</strong>, HST (13%) is charged on the purchase price. However, when you have a trade-in, HST is only charged on the <em>net difference</em> — saving you money.</p>
            <p>When buying <strong className="text-white">privately</strong>, no HST is charged on the transaction. However, when you register the vehicle, you pay RST (Retail Sales Tax) at 13% of the higher of the purchase price or the average wholesale value from UVIP — so you can't under-declare a private sale price.</p>
            <p>Buying from a dealer with a trade-in often results in more HST savings than buying privately — especially on higher-value vehicles. See our <Link href="/sell-trade/trade-vs-sell" className="text-brand-accent hover:underline">Trade vs Sell guide</Link> for a detailed example.</p>
          </div>
        </section>

        <section id="omvic">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">6. Your OMVIC Rights</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p><strong className="text-white">OMVIC</strong> (Ontario Motor Vehicle Industry Council) regulates all registered motor vehicle dealers in Ontario. When you buy from an OMVIC-registered dealer, you have important consumer protections under the Motor Vehicle Dealers Act (MVDA).</p>
            <p>Key rights: the dealer must disclose if a vehicle was previously used as a daily rental, taxi, police vehicle, or had structural damage. They must provide accurate information about the vehicle's history. Misrepresentation can be grounds for unwinding the transaction.</p>
            <p>If you have a dispute with a registered dealer, you can file a complaint with OMVIC at <span className="text-brand-accent">omvic.on.ca</span>. Private sales have no such protection — another reason to buy from a registered dealer.</p>
          </div>
        </section>

        <section id="financing">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">7. Financing Options</h2>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed max-w-3xl">
            <p>Most buyers finance their vehicle purchase. Key things to understand: <strong className="text-white">APR (Annual Percentage Rate)</strong> is the true cost of borrowing including fees; the <strong className="text-white">loan term</strong> affects monthly payments and total interest paid; and your <strong className="text-white">down payment</strong> reduces both.</p>
            <p>We work with a network of lenders for all credit types — from prime rates for strong credit to second-chance financing for buyers with past credit challenges. Use our <Link href="/financing/calculator" className="text-brand-accent hover:underline">payment calculator</Link> to estimate your monthly cost.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/financing" className="text-brand-accent text-sm font-semibold hover:underline">Financing Options →</Link>
            <Link href="/financing/bad-credit" className="text-brand-accent text-sm font-semibold hover:underline">Bad Credit Financing →</Link>
            <Link href="/financing/newcomers" className="text-brand-accent text-sm font-semibold hover:underline">Newcomer Programs →</Link>
          </div>
        </section>

        <section id="checklist">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">8. Final Checklist Before Signing</h2>
          <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 md:p-8 max-w-2xl">
            <div className="space-y-3">
              {finalChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <PageCTA
        title="Ready to Buy with Confidence?"
        subtitle="Browse our certified inventory — every vehicle comes with inspection report and CarFax."
        primaryHref="/inventory"
        primaryLabel="Browse Inventory"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
      />
    </div>
  );
}
