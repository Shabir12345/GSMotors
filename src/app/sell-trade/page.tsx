import TradeInForm from '@/components/TradeInForm';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'Sell or Trade-In Your Vehicle | Fast & Fair Valuations — GS Motors',
    description: 'Get a fair market valuation for your vehicle. Trade it toward any car in our inventory or sell outright for cash. Fast, transparent, hassle-free.',
};

const highlights = [
    {
        title: 'Fast Offer',
        desc: 'Get a valuation in under 30 minutes at our showroom.',
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'Top Dollar Paid',
        desc: 'We use live market data to pay aggressive prices for quality vehicles.',
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'We Handle Everything',
        desc: 'Paperwork, title transfer, and loan payoffs — all taken care of.',
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Any Condition Accepted',
        desc: 'High mileage, damage, or still financed — we evaluate everything.',
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

export default function SellTradePage() {
    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Upgrade Your Car"
                title={<>Trade or <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Sell Your Car</span></>}
                subtitle="Get a fair market valuation and instant payment for your vehicle. Trade toward any car in our inventory or sell outright — fast, transparent, and hassle-free."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Sell / Trade-In', href: '/sell-trade' }]}
            />

            <div className="container mx-auto px-4 md:px-6 pb-10">
                {/* Highlights */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-7xl mx-auto">
                    {highlights.map((item) => (
                        <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                            <div className="w-10 h-10 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Form */}
                <div className="max-w-4xl mx-auto">
                    <TradeInForm />
                </div>
            </div>

            <PageCTA
                title="Or Browse Our Inventory First"
                subtitle="Find your next vehicle and trade your current one — we'll handle the difference."
                primaryLabel="Browse Inventory"
                secondaryLabel="Contact Sales"
            />
        </div>
    );
}
