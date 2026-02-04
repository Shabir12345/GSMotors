'use client';

import Link from 'next/link';

export default function TradeInSection() {
    return (
        <section id="sell-trade" className="py-24 bg-brand-darker relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[120px] rounded-full"></div>
                <div className="absolute -bottom-[25%] -right-[10%] w-[50%] h-[50%] bg-brand-highlight/5 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-4 block animate-slide-up">
                        Upgrade Your Ride
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        We Buy Exceptional Cars. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Fair. Fast. Effortless.
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Ready for something new? We offer top market value for premium trade-ins and consignments. Skip the tire kickers and get an instant offer today.
                    </p>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl gpu-layer">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    📸
                                </div>
                                <h3 className="text-white font-bold mb-2">1. Share Details</h3>
                                <p className="text-sm text-gray-400">Submit photos and basic info about your vehicle.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    💎
                                </div>
                                <h3 className="text-white font-bold mb-2">2. Get Offer</h3>
                                <p className="text-sm text-gray-400">Receive a competitive, no-obligation valuation.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                    🤝
                                </div>
                                <h3 className="text-white font-bold mb-2">3. Get Paid</h3>
                                <p className="text-sm text-gray-400">Receive payment instantly or apply towards a trade.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/sell-trade"
                                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3 rounded-xl font-bold text-lg w-full sm:w-auto"
                            >
                                Get Instant Offer
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-modern bg-transparent border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-xl font-bold text-lg w-full sm:w-auto"
                            >
                                Speak to an Appraiser
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
