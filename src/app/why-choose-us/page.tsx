import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'Why Choose GS Motors | Trusted Used Car Dealer in Toronto GTA',
    description: 'Discover what makes GS Motors the trusted choice: transparent pricing, 150-point inspections, non-commissioned staff, and flexible financing.',
};

const differentiators = [
    {
        number: '01',
        title: 'Comprehensive Quality Inspections',
        desc: 'Every vehicle undergoes a rigorous 150-point inspection by certified technicians. We check engine, transmission, suspension, brakes, electrical, and safety — nothing is skipped.',
        points: ['Engine and mechanical systems certified', 'Full diagnostic check on all electronics', 'Safety features verified and tested', 'Service history documented'],
        color: 'from-brand-accent/20',
        accentClass: 'text-brand-accent',
    },
    {
        number: '02',
        title: 'Transparent, Honest Pricing',
        desc: 'The price you see is the price you pay. No hidden dealer markups, no surprise fees, no "admin charges." We believe you deserve to know exactly what you\'re paying for.',
        points: ['Clear, upfront pricing on all vehicles', 'No hidden dealership fees or add-ons', 'Price locked when you start paperwork', 'Full breakdown of licensing and taxes'],
        color: 'from-brand-highlight/20',
        accentClass: 'text-brand-highlight',
    },
    {
        number: '03',
        title: 'Non-Commissioned Sales Team',
        desc: 'Our sales staff are NOT on commission. They have zero incentive to pressure you. We\'re here to help you find the right car within YOUR budget, not maximize a sale.',
        points: ['Expert guidance without sales pressure', 'Honest recommendations for your needs', 'Years of automotive knowledge available', 'Real conversations, not sales pitches'],
        color: 'from-purple-500/20',
        accentClass: 'text-purple-400',
    },
    {
        number: '04',
        title: 'Flexible Financing Options',
        desc: 'We work with premium lenders to secure competitive rates and flexible terms. Whether you need quick approval or have unique credit situations, we have options.',
        points: ['Competitive rates from 2.9% and up', 'Flexible terms up to 84 months', 'Fast pre-approval process', 'Digital, paperless application'],
        color: 'from-cyan-500/20',
        accentClass: 'text-cyan-400',
    },
    {
        number: '05',
        title: 'Fast, Hassle-Free Process',
        desc: 'From inventory browsing to keys in hand — we make it fast and simple. No runaround, no endless paperwork, no waiting around for approvals.',
        points: ['Large inventory browsable online anytime', 'Detailed photos and specs for every car', 'Financing approval in minutes', 'Complete purchase in just a few days'],
        color: 'from-orange-500/20',
        accentClass: 'text-orange-400',
    },
    {
        number: '06',
        title: 'Warranty & Protection',
        desc: 'Your peace of mind matters. Comprehensive warranty options and protection plans cover unexpected repairs and give you confidence in your purchase.',
        points: ['Basic warranty included on all vehicles', 'Extended warranty options available', 'Gap insurance and protection plans', 'All terms clearly explained upfront'],
        color: 'from-green-500/20',
        accentClass: 'text-green-400',
    },
    {
        number: '07',
        title: 'Local, Personable Service',
        desc: 'We\'re a family business serving the GTA since 2014. You\'re not a number — you\'re a customer we want to help for life.',
        points: ['Local business with deep GTA roots', 'Personal follow-up and customer service', 'Showroom open 7 days a week', 'Easy to reach for post-purchase support'],
        color: 'from-pink-500/20',
        accentClass: 'text-pink-400',
    },
];

const tableRows = [
    { feature: 'Quality Inspection', us: true, other: '50/50', private: false },
    { feature: 'Warranty Included', us: true, other: false, private: false },
    { feature: 'Transparent Pricing', us: true, other: false, private: true },
    { feature: 'Financing Available', us: true, other: true, private: false },
    { feature: 'Non-Commissioned Staff', us: true, other: false, private: true },
    { feature: 'Legal Paperwork Handled', us: true, other: true, private: false },
    { feature: 'Post-Sale Support', us: true, other: '50/50', private: false },
];

function CellValue({ value }: { value: boolean | string }) {
    if (value === true) return <span className="text-green-400 font-bold">✓</span>;
    if (value === false) return <span className="text-red-400/70">✗</span>;
    return <span className="text-yellow-400 text-xs font-medium">{value}</span>;
}

export default function WhyChooseUsPage() {
    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Why Choose GS Motors"
                title={<>What Makes Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Different</span></>}
                subtitle="In a crowded used car market, GS Motors stands out. Here's exactly what sets us apart — backed by real customer experiences."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Why Choose Us', href: '/why-choose-us' }]}
            />

            {/* Differentiators */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="space-y-6">
                    {differentiators.map((item, idx) => (
                        <div
                            key={item.number}
                            className={`grid lg:grid-cols-2 gap-6 md:gap-10 items-center bg-gradient-to-br ${item.color} to-transparent border border-white/[0.07] rounded-3xl p-8 md:p-10`}
                        >
                            <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className={`text-xs font-black uppercase tracking-widest mb-3 ${item.accentClass}`}>{item.number}</div>
                                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <ul className="space-y-2.5">
                                    {item.points.map((point) => (
                                        <li key={point} className="flex items-center gap-3 text-gray-300 text-sm">
                                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 bg-current ${item.accentClass}`} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`h-40 md:h-56 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className={`text-7xl md:text-8xl font-black ${item.accentClass} opacity-20`}>{item.number}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">How We Compare</h2>
                    <p className="text-gray-400 text-sm">Side-by-side comparison with typical dealers and private sales</p>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-white/[0.07]">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-4 md:p-5 text-left text-sm font-bold text-gray-400 bg-white/[0.03]">Feature</th>
                                <th className="p-4 md:p-5 text-center text-sm font-bold text-brand-accent bg-brand-accent/5">GS Motors</th>
                                <th className="p-4 md:p-5 text-center text-sm font-bold text-gray-400 bg-white/[0.03]">Typical Dealer</th>
                                <th className="p-4 md:p-5 text-center text-sm font-bold text-gray-400 bg-white/[0.03]">Private Sale</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableRows.map((row, i) => (
                                <tr key={i} className="border-b border-white/[0.05] hover:bg-white/[0.02] transition-colors">
                                    <td className="p-4 md:p-5 text-gray-300 text-sm font-medium">{row.feature}</td>
                                    <td className="p-4 md:p-5 text-center"><CellValue value={row.us} /></td>
                                    <td className="p-4 md:p-5 text-center"><CellValue value={row.other} /></td>
                                    <td className="p-4 md:p-5 text-center"><CellValue value={row.private} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Testimonials CTA */}
            <section className="container mx-auto px-4 md:px-6 mb-8">
                <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8 md:p-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Hear From Our Customers</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
                        Don't just take our word for it. Read real testimonials from thousands of satisfied customers.
                    </p>
                    <Link
                        href="/testimonials"
                        className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105 inline-block"
                    >
                        Read Customer Reviews
                    </Link>
                </div>
            </section>

            <PageCTA
                title="Ready to Experience the Difference?"
                subtitle="Visit our showroom or explore our inventory online. Let us show you why thousands choose GS Motors."
                primaryLabel="Browse Inventory"
                secondaryLabel="Contact Sales"
            />
        </div>
    );
}
