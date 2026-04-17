import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Car Buying Guides | Ontario Used Car Resources | GSMotorsinc',
  description: 'Free expert guides for buying, financing, and trading used cars in Ontario. Written by the GSMotorsinc team to help you make confident decisions.',
};

const guides = [
  {
    title: 'Buying a Used Car in Ontario',
    desc: 'The complete guide — UVIP, safety certificates, CarFax, HST, and your OMVIC rights as a buyer.',
    href: '/guides/buying-used-car-ontario',
    badge: 'Most Popular',
    badgeColor: 'text-brand-accent bg-brand-accent/10 border-brand-accent/20',
    icon: '📋',
  },
  {
    title: 'First-Time Buyer Guide',
    desc: 'Never bought a car before? We walk you through every step — from budgeting to signing the papers.',
    href: '/financing/first-time-buyer',
    badge: 'Beginner',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    icon: '🚗',
  },
  {
    title: 'Auto Financing Basics',
    desc: 'Understand interest rates, loan terms, down payments, and how to get the best financing deal.',
    href: '/financing',
    badge: 'Finance',
    badgeColor: 'text-brand-highlight bg-cyan-500/10 border-cyan-500/20',
    icon: '💳',
  },
  {
    title: 'Pre-Purchase Inspection',
    desc: 'What our 150-point inspection covers and what to look for when buying any used vehicle.',
    href: '/services/inspection',
    badge: 'Safety',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    icon: '🔍',
  },
  {
    title: 'Trade In vs Sell Privately',
    desc: 'Ontario HST savings, convenience, and value — a real comparison to help you decide.',
    href: '/sell-trade/trade-vs-sell',
    badge: 'Ontario Specific',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    icon: '⚖️',
  },
  {
    title: 'AWD & Winter Driving Ontario',
    desc: 'Which vehicles handle Ontario winters best? AWD vs FWD, winter tires, and what to prioritize.',
    href: '/inventory/awd',
    badge: 'Seasonal',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    icon: '❄️',
  },
  {
    title: 'Bad Credit Car Buying',
    desc: 'Everything you need to know about getting approved for auto financing with bruised credit in Ontario.',
    href: '/financing/bad-credit',
    badge: 'Finance',
    badgeColor: 'text-brand-highlight bg-cyan-500/10 border-cyan-500/20',
    icon: '🤝',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Free Resources"
        badgeColor="indigo"
        title={<>Car Buying <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Guides & Resources</span></>}
        subtitle="Everything you need to know about buying, financing, and trading used cars in Ontario — written honestly, without the sales pitch."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/30 rounded-3xl p-8 transition-all hover:bg-white/[0.07] flex flex-col"
            >
              <div className="text-3xl mb-4">{guide.icon}</div>
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full border w-fit mb-4 ${guide.badgeColor}`}>
                {guide.badge}
              </span>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{guide.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{guide.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-brand-accent text-xs font-semibold">
                Read Guide <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PageCTA title="Need Personal Advice?" subtitle="Our non-commissioned team is happy to answer any questions — no pressure." primaryHref="/contact" primaryLabel="Talk to Our Team" secondaryHref="/inventory" secondaryLabel="Browse Inventory" />
    </div>
  );
}
