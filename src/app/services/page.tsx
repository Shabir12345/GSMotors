import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
  title: 'Dealership Services | Inspection, Warranty & Delivery | GSMotorsinc',
  description: 'GSMotorsinc offers 150-point pre-purchase inspections, warranty packages, extended coverage, vehicle detailing, CarFax reports, and delivery across Ontario.',
};

const services = [
  {
    title: 'Pre-Purchase Inspection',
    desc: 'Every vehicle passes our rigorous 150-point inspection by certified technicians before it\'s listed for sale.',
    href: '/services/inspection',
    icon: (
      <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Warranty',
    desc: 'Understand your warranty coverage — from manufacturer remaining warranty to certified dealer warranty options.',
    href: '/services/warranty',
    icon: (
      <svg className="w-6 h-6 text-brand-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Extended Warranty',
    desc: 'Protect your investment beyond the standard warranty. Ask us about extended coverage at time of purchase.',
    href: '/services/extended-warranty',
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Detailing',
    desc: 'Every vehicle on our lot is professionally detailed before delivery. Ask about enhanced detailing packages.',
    href: '/services/detailing',
    icon: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle History Report',
    desc: 'We provide a full CarFax report on every vehicle. Know the accident, service, and ownership history upfront.',
    href: '/services/carfax-report',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Delivery',
    desc: 'Can\'t make it to Newcastle? We deliver vehicles across Durham Region, the GTA, and beyond Ontario.',
    href: '/services/delivery',
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-brand-darker">
      <PageHero
        badge="Our Services"
        badgeColor="blue"
        title={<><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Premium Services</span> at GSMotorsinc</>}
        subtitle="Everything you need for a smooth, confident purchase — from inspection to delivery."
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
        ]}
      />

      <section className="container mx-auto px-4 md:px-6 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group bg-white/[0.04] border border-white/[0.07] hover:border-brand-accent/30 rounded-3xl p-8 transition-all hover:bg-white/[0.07]"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{svc.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{svc.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-brand-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PageCTA title="Ready to Experience GSMotorsinc?" subtitle="Visit our Newcastle showroom or browse inventory online." primaryLabel="Browse Inventory" secondaryLabel="Contact Us" />
    </div>
  );
}
