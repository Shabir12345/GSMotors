import TradeInForm from '@/components/TradeInForm';

export const metadata = {
    title: 'Sell or Trade Your Vehicle - GS Motors Luxury',
    description: 'Get top dollar for your luxury vehicle. Instant trade-in valuations.',
};

export default function SellTradePage() {
    return (
        <div className="min-h-screen bg-brand-dark pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-brand-accent font-bold tracking-wider uppercase">Upgrade Your Garage</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
                        Sell or Trade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Vehicle</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Skip the hassle of private sales. We offer effortless transactions and immediate payment for premium vehicles.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <TradeInForm />

                    <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-2">Fast Process</h3>
                            <p className="text-sm text-gray-400">Get an offer in minutes, not days.</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-bold text-white mb-2">Top Value</h3>
                            <p className="text-sm text-gray-400">We pay aggressive market prices for quality examples.</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold text-white mb-2">We Handle Everything</h3>
                            <p className="text-sm text-gray-400">We take care of title transfer and payoffs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
