'use client';

import { useState, useEffect } from 'react';
import VehicleGrid from '@/components/VehicleGrid';

export default function WholesalePage() {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/vehicles?isWholesale=true');
                const result = await response.json();
                if (result.success) {
                    setVehicles(result.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch wholesale vehicles:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchVehicles();
    }, []);

    return (
        <>
            <title>Wholesale Dealer Portal | GS Motors Inc</title>
            <meta name="description" content="Exclusive B2B wholesale vehicle inventory for certified dealers. Premium stock at competitive transfer rates." />

            <main className="min-h-screen bg-brand-darker pt-24">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-darker/80 to-brand-darker"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-wider uppercase mb-4 animate-fade-in">
                            B2B Partner Portal
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight text-white animate-slide-up">
                            Wholesale <span className="text-brand-accent">Direct</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 animate-slide-up animation-delay-100">
                            Join our exclusive network of certified dealers. Access premium inventory at wholesale pricing. Contact us directly for pricing details and bulk inquiries.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 pb-24">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 mb-12 backdrop-blur-sm">
                        <div>
                            <h2 className="text-xl font-bold text-white">Dealer Inventory List</h2>
                            <p className="text-sm text-gray-400">{vehicles.length} Units Ready for Unit Transfer</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/10 text-white">
                                Export CSV
                            </button>
                            <button className="px-6 py-2.5 bg-brand-accent hover:bg-brand-accent-glow text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-accent/20 transition-all">
                                Contact Fleet Manager
                            </button>
                        </div>
                    </div>

                    <VehicleGrid
                        vehicles={vehicles}
                        loading={loading}
                        showPrice={false}
                        emptyMessage="No wholesale units currently available."
                    />
                </section>
            </main>
        </>
    );
}
