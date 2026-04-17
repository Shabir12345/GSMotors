import Link from 'next/link';
import { siteConfig } from '@/siteConfig';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'About GS Motors | Quality Pre-Owned Vehicles Since 2014',
    description: 'Meet the team at GS Motors. Serving the Greater Toronto Area with honest, reliable pre-owned vehicles and transparent pricing for over a decade.',
};

const stats = [
    { value: '2,000+', label: 'Vehicles Sold', color: 'text-brand-accent' },
    { value: '10+', label: 'Years in Business', color: 'text-brand-highlight' },
    { value: '98%', label: 'Customer Satisfaction', color: 'text-purple-400' },
    { value: '150+', label: 'Point Inspection', color: 'text-cyan-400' },
];

const values = [
    {
        title: 'Quality First',
        desc: 'Every vehicle passes our rigorous 150-point inspection. We only sell cars we\'d drive ourselves.',
        icon: (
            <svg className="w-6 h-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: 'Full Transparency',
        desc: 'No hidden fees, no surprise add-ons. The price you see is the price you pay. Period.',
        icon: (
            <svg className="w-6 h-6 text-brand-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        title: 'Customer Focus',
        desc: 'Our non-commissioned team is here to help you find the right car, not just sell you one.',
        icon: (
            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
];

const commitments = [
    { title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. What you see is what you pay.' },
    { title: 'Certified Inspections', desc: 'Every vehicle undergoes a comprehensive 150-point inspection.' },
    { title: 'Warranty Options', desc: 'Extended warranty coverage available for peace of mind.' },
    { title: 'Easy Financing', desc: 'Flexible financing options with competitive rates.' },
    { title: 'Expert Support', desc: 'Non-commissioned sales team focused on helping you find the right car.' },
    { title: 'Fast Process', desc: 'From selection to ownership in just a few days.' },
];

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="About GS Motors"
                title={<>Quality Used Cars <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">You Can Trust</span></>}
                subtitle="Founded in 2014, GS Motors has become the trusted choice for affordable, reliable pre-owned vehicles across the Greater Toronto Area. Our commitment to honesty and quality sets us apart."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about-us' }]}
            />

            {/* Stats Bar */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 text-center">
                            <div className={`text-3xl md:text-4xl font-bold mb-1.5 ${stat.color}`}>{stat.value}</div>
                            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Story */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight">Our Story</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                            <p>
                                GS Motors started with a simple idea: prove that buying a quality pre-owned car doesn't require luxury pricing or compromised reliability. We found too many Toronto buyers faced a choice between expensive dealerships and risky private sales.
                            </p>
                            <p>
                                Today, we've sold over 2,000 vehicles to happy customers across the GTA — built on a foundation of transparent pricing, honest descriptions, and genuine respect for our customers.
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/inventory"
                                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105 text-center"
                            >
                                Browse Inventory
                            </Link>
                            <Link
                                href="/why-choose-us"
                                className="btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 text-center"
                            >
                                Why Choose Us
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[340px] md:h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-brand-accent/10 to-brand-highlight/10">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <div className="text-7xl md:text-8xl font-black text-white/10">2,000+</div>
                            <div className="text-center">
                                <p className="text-white text-xl font-bold">Happy Customers</p>
                                <p className="text-gray-400 text-sm mt-1">Served across the GTA since 2014</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight">Our Values</h2>
                    <p className="text-gray-400 text-sm md:text-base">What drives every decision we make</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {values.map((val) => (
                        <div key={val.title} className="bg-white/[0.04] border border-white/[0.07] hover:border-white/15 rounded-3xl p-8 transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service Commitment */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight text-center">Our Service Commitment</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {commitments.map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PageCTA
                title="Ready to Experience the GS Motors Difference?"
                subtitle="Visit our showroom in Newcastle or browse our inventory online."
                primaryLabel="Browse Inventory"
                secondaryLabel="Contact Us"
            />
        </div>
    );
}
