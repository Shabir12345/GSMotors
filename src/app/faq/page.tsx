import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'FAQ — Common Questions Answered | GS Motors',
    description: 'Answers to the most common questions about buying, financing, trade-ins, warranties, and more at GS Motors.',
};

const faqs = [
    {
        category: 'Buying & Quality',
        items: [
            { q: 'How do you inspect vehicles?', a: 'Every vehicle undergoes a rigorous 150-point inspection by certified technicians. We check engine, transmission, suspension, brakes, electrical systems, safety features, interior, and exterior condition. Each car is tested on road and in the shop before certification.' },
            { q: 'Are cars checked for accident history?', a: 'Yes. We provide a complete vehicle history report including accident records, title status, recalls, and service history. You\'ll receive this before purchase.' },
            { q: 'Do you have service history for all vehicles?', a: 'We obtain service records when available from previous owners and dealers. For vehicles without complete history, we still perform our own comprehensive inspection to verify condition.' },
            { q: 'What if a car doesn\'t pass inspection?', a: 'We repair any issues found during inspection or remove the vehicle from inventory. We don\'t sell cars we haven\'t verified as reliable.' },
            { q: 'Can I have an independent inspection?', a: 'Absolutely. You can bring your own mechanic for an inspection before purchase. We\'re confident in our inspection process.' },
        ],
    },
    {
        category: 'Pricing & Negotiation',
        items: [
            { q: 'Is your pricing negotiable?', a: 'We price our vehicles fairly based on market research, condition, and mileage. Our transparent pricing approach means no hidden markup. We\'re open to discussing flexible terms like extended warranties or trade-in offers, but pricing is set.' },
            { q: 'What fees apply beyond the listed price?', a: 'The listed price is the sale price. You\'ll pay HST (13%) and vehicle registration/licensing fees. No dealer markup, admin fees, or doc fees. We provide a detailed breakdown.' },
            { q: 'Is the price locked once I start paperwork?', a: 'Yes. Once you begin the purchasing process, your price is locked in and guaranteed. No surprises or last-minute price increases.' },
        ],
    },
    {
        category: 'Financing & Payments',
        items: [
            { q: 'Do you offer in-house financing?', a: 'We work with premium lenders to secure the best rates for you. We don\'t finance in-house, but we manage the application, approval, and payment process seamlessly.' },
            { q: 'What credit score is needed to get approved?', a: 'We work with lenders who have flexible credit requirements. Even if you\'ve had credit challenges, we can often find approval options. Talk to our finance manager about your situation.' },
            { q: 'How fast is financing approval?', a: 'Most approvals happen within hours. You can often get pre-approved before even visiting the showroom using our online application.' },
            { q: 'What are the typical interest rates?', a: 'Rates start at 2.9% APR depending on credit profile, vehicle age/mileage, and term length. We\'ll provide exact rates once you apply.' },
            { q: 'Do you charge pre-payment penalties?', a: 'No. Pay off your loan early anytime without penalties. We want you to save on interest.' },
        ],
    },
    {
        category: 'Trade-In & Selling',
        items: [
            { q: 'How do you value my trade-in?', a: 'We evaluate your vehicle in person, checking condition, mileage, service history, and current market value. The process takes about 30 minutes.' },
            { q: 'Can I trade a car toward a cheaper or more expensive vehicle?', a: 'Yes! Your trade-in value is applied as credit toward any vehicle. If your trade is worth $15k and you buy a $12k car, you have $3k in credit.' },
            { q: 'What condition must my trade-in be in?', a: 'We accept vehicles in various conditions. Even cars with mechanical issues, dents, or damage can be traded. The condition affects the valuation, but we buy almost everything.' },
            { q: 'Can I get cash for my car instead of trading?', a: 'Yes. We can purchase vehicles outright for cash, separate from any vehicle purchase.' },
            { q: 'How long does the trade-in process take?', a: 'Valuation takes 30 minutes. Full transaction processing typically takes 2–5 business days.' },
        ],
    },
    {
        category: 'Warranty & Service',
        items: [
            { q: 'Do all vehicles come with a warranty?', a: 'Yes. All certified vehicles include at least a 1-month powertrain warranty. Platinum and Gold certification include bumper-to-bumper coverage.' },
            { q: 'What does warranty cover?', a: 'Warranty covers mechanical failures and defects. It does NOT cover routine maintenance (oil changes, filters, brake pads, wiper blades).' },
            { q: 'Can I purchase extended warranty?', a: 'Yes. Extended warranties are available at purchase or anytime after. Option to extend coverage up to 7 years / 160,000 km.' },
            { q: 'Is the warranty transferable if I sell the car?', a: 'Yes. The warranty transfers to the next owner with reduced coverage terms. Details provided at purchase.' },
        ],
    },
    {
        category: 'General Information',
        items: [
            { q: 'Are you open weekends?', a: 'Yes. We\'re open Monday–Friday 9am–7pm and Saturday–Sunday 10am–6pm. By appointment for holidays.' },
            { q: 'What\'s your return policy?', a: 'We offer a 7-day / 1,000 km cooling-off period. If unsatisfied, you can return the vehicle for a full refund (minus licensing). Condition must be as-purchased.' },
            { q: 'Do you have delivery options?', a: 'We can arrange delivery within the GTA for an additional fee. Ask about this when discussing your purchase.' },
            { q: 'Do you have any loyalty rewards?', a: 'We offer referral bonuses for customers who recommend us. Previous customers also get priority treatment and loyalty discounts on service/warranties.' },
        ],
    },
];

export default function FAQPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.flatMap(cat =>
            cat.items.map(item => ({
                '@type': 'Question',
                name: item.q,
                acceptedAnswer: { '@type': 'Answer', text: item.a },
            }))
        ),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <div className="min-h-screen bg-brand-darker">
                <PageHero
                    badge="Got Questions?"
                    title={<>Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Questions</span></>}
                    subtitle="Can't find the answer you're looking for? Call us at 647-801-2475 or email concierge@gsmotorsinc.com — we typically respond within 1 hour."
                    breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]}
                />

                <div className="container mx-auto px-4 md:px-6 pb-10">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((section, sIdx) => (
                            <div key={sIdx}>
                                <h2 className="text-lg font-bold text-white mb-5 pb-3 border-b border-white/[0.07] tracking-tight">
                                    {section.category}
                                </h2>
                                <div className="space-y-3">
                                    {section.items.map((item, iIdx) => (
                                        <details key={iIdx} className="group">
                                            <summary className="flex cursor-pointer items-center justify-between bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] group-open:border-brand-accent/30 group-open:bg-brand-accent/5 px-6 py-4 rounded-2xl transition-all list-none">
                                                <span className="font-semibold text-white group-open:text-brand-accent transition-colors text-sm pr-4">{item.q}</span>
                                                <svg
                                                    className="w-4 h-4 text-brand-accent shrink-0 transition-transform duration-300 group-open:rotate-45"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pt-4 pb-5 bg-white/[0.02] border border-t-0 border-white/[0.07] rounded-b-2xl -mt-1">
                                                <p className="text-gray-400 leading-relaxed text-sm">{item.a}</p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Support CTA */}
                <section className="container mx-auto px-4 md:px-6 py-10">
                    <div className="max-w-4xl mx-auto bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8 md:p-10">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight text-center">Still Have Questions?</h2>
                        <p className="text-gray-400 text-center mb-8 text-sm">Our team is ready to help. Reach out through any channel below.</p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {[
                                { icon: '📞', label: 'Call Us', value: '647-801-2475', href: 'tel:647-801-2475', sub: 'Mon–Fri: 9am–7pm' },
                                { icon: '✉️', label: 'Email Us', value: 'concierge@gsmotorsinc.com', href: 'mailto:concierge@gsmotorsinc.com', sub: 'Response within 1 hour' },
                                { icon: '💬', label: 'Contact Form', value: 'Send a Message', href: '/contact', sub: 'We\'ll follow up shortly' },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="bg-white/5 hover:bg-white/[0.08] border border-white/[0.07] hover:border-brand-accent/30 rounded-2xl p-5 text-center transition-all block"
                                >
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <p className="text-white font-bold text-sm mb-1">{item.label}</p>
                                    <p className="text-brand-accent text-xs font-semibold mb-1 break-all">{item.value}</p>
                                    <p className="text-gray-500 text-xs">{item.sub}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <PageCTA
                    title="Ready to Find Your Next Vehicle?"
                    subtitle="Browse our certified inventory and experience the GS Motors difference."
                    primaryLabel="Browse Inventory"
                    secondaryLabel="Contact Us"
                />
            </div>
        </>
    );
}
