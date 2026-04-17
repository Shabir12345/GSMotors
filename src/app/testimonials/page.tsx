import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'Customer Reviews & Testimonials | GS Motors',
    description: 'Read real reviews from satisfied GS Motors customers across the Greater Toronto Area. 5-star rated used car dealership in Newcastle, ON.',
};

const testimonials = [
    { name: 'Sarah M.', rating: 5, date: '2024-03-15', title: 'Best dealer experience ever!', text: 'I was nervous about buying a used car, but George and his team made it so easy. They answered every question honestly, the car passed inspection with flying colors, and the whole process took just one afternoon. Highly recommend!', vehicle: '2020 Honda Civic' },
    { name: 'Marcus T.', rating: 5, date: '2024-02-28', title: 'Fair pricing, no surprises', text: 'The price tag was exactly what I paid. No hidden fees disguised as "doc fees" or "admin charges." Just transparent, honest pricing. That\'s rare in the car business.', vehicle: '2019 Toyota Camry' },
    { name: 'Jennifer K.', rating: 5, date: '2024-02-10', title: 'Non-commissioned sales staff = stress free', text: 'I loved that the sales team weren\'t on commission. They weren\'t pushing me to buy more features or upgrade. They just helped me find the right car for my budget. That made all the difference.', vehicle: '2021 Mazda CX-5' },
    { name: 'David L.', rating: 5, date: '2024-01-22', title: 'Inspection report was detailed and honest', text: 'They provided a 150-point inspection report with photos. Everything they said about the car\'s condition matched reality. You can tell they actually care about quality, not just quick sales.', vehicle: '2018 Ford Escape' },
    { name: 'Lisa Y.', rating: 5, date: '2024-01-08', title: 'Great financing support', text: 'I was worried about getting approved, but the finance manager worked with me and found a great rate. The support continues months after purchase — that means something.', vehicle: '2020 Hyundai Elantra' },
    { name: 'Robert P.', rating: 5, date: '2023-12-20', title: 'Worth the drive from across the GTA', text: 'I drove an hour to visit their showroom. Absolutely worth it. The inventory is large, the cars are in genuinely good condition, and the experience was nothing like other dealerships.', vehicle: '2019 Nissan Rogue' },
    { name: 'Amanda B.', rating: 5, date: '2023-12-05', title: 'Warranty actually means something', text: 'Six months after buying, something came up with the transmission. They honoured the warranty immediately, no questions. That\'s peace of mind you don\'t get everywhere.', vehicle: '2019 Chevrolet Cruze' },
    { name: 'Chris H.', rating: 5, date: '2023-11-18', title: 'Test drove 5 cars, no pressure at all', text: 'I spent 2 hours test driving different vehicles. They never pressured me to buy anything or made me feel rushed. That confidence tells me they know their cars are quality.', vehicle: '2020 Subaru Outback' },
    { name: 'Ontario Family', rating: 5, date: '2023-11-01', title: 'Family business feel with professional service', text: 'George was incredibly personable and genuinely interested in helping us find the right vehicle. You feel like you\'re dealing with people who care, not a corporate chain.', vehicle: '2018 Hyundai Santa Fe' },
    { name: 'Tom V.', rating: 5, date: '2023-10-15', title: 'Trade-in valuation was fair', text: 'I traded in my old Honda. They appraised it fairly and the whole process was seamless. Paperwork was handled for me. No stress, got a great deal on the trade.', vehicle: '2020 VW Jetta' },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-3.5 h-3.5 ${i < count ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsPage() {
    const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'GS Motors',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: avgRating,
            reviewCount: testimonials.length,
            bestRating: '5',
            worstRating: '1',
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="min-h-screen bg-brand-darker">
                <PageHero
                    badge="Customer Reviews"
                    title={<>What Our Customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Say</span></>}
                    subtitle="Don't just take our word for it. Read real experiences from satisfied customers across the Greater Toronto Area."
                    breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Testimonials', href: '/testimonials' }]}
                >
                    {/* Rating Summary */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <div className="text-left">
                            <div className="text-3xl font-bold text-white">{avgRating}</div>
                            <p className="text-gray-400 text-xs">{testimonials.length}+ verified reviews</p>
                        </div>
                    </div>
                </PageHero>

                {/* Stats */}
                <section className="container mx-auto px-4 md:px-6 mb-14">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {[
                            { value: '2,000+', label: 'Vehicles Sold', color: 'text-brand-accent' },
                            { value: avgRating, label: 'Average Rating', color: 'text-yellow-400' },
                            { value: '10+', label: 'Years in Business', color: 'text-brand-highlight' },
                            { value: '98%', label: 'Satisfaction Rate', color: 'text-purple-400' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 text-center">
                                <div className={`text-2xl md:text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                                <p className="text-gray-400 text-xs font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Reviews Grid */}
                <section className="container mx-auto px-4 md:px-6 mb-14">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.07] hover:border-brand-accent/20 rounded-2xl p-6 transition-all duration-300 flex flex-col"
                            >
                                <StarRating count={t.rating} />
                                <h3 className="font-bold text-white text-base mt-4 mb-3">{t.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed flex-1">"{t.text}"</p>
                                <div className="mt-5 pt-4 border-t border-white/[0.07]">
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-brand-accent text-xs mt-0.5">{t.vehicle}</p>
                                    <p className="text-gray-500 text-xs mt-1">
                                        {new Date(t.date).toLocaleDateString('en-CA', { year: 'numeric', month: 'short', day: 'numeric' })}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Leave a Review */}
                <section className="container mx-auto px-4 md:px-6 mb-8">
                    <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8 md:p-10 text-center max-w-2xl mx-auto">
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">Want to Share Your Experience?</h2>
                        <p className="text-gray-400 text-sm mb-8">
                            If you've purchased from GS Motors and had a great experience, please share your review. It helps other buyers make confident decisions.
                        </p>
                        <a
                            href="https://www.google.com/search?q=gs+motors+inc+newcastle+ontario#lrd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-brand-accent/25 transition-all hover:scale-105 inline-block"
                        >
                            Write a Google Review
                        </a>
                    </div>
                </section>

                <PageCTA
                    title="Ready to Join Thousands of Happy Customers?"
                    subtitle="Browse our inventory and experience the GS Motors difference for yourself."
                    primaryLabel="Browse Inventory"
                    secondaryLabel="Contact Us"
                />
            </div>
        </>
    );
}
