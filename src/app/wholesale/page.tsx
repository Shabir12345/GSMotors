'use client';

import { useState } from 'react';
import { MOCK_VEHICLES } from '@/data/mockData';
import WholesaleTable from '@/components/wholesale/WholesaleTable';
import DealerRegistrationForm from '@/components/wholesale/DealerRegistrationForm';

export default function WholesalePage() {
    // Determine initial access state. For demo purposes, we start as false (locked).
    // In a real app, this would check session/auth status.
    const [hasAccess, setHasAccess] = useState(false);

    // Filter vehicles to show only relevant ones (e.g., typically all vehicles might be wholesale available, 
    // or just specific 'SOLD' ones might be excluded, or all inclusive. Let's show all for now, 
    // maybe emphasizing those with wholesalePrice set in mockData creation step).
    // Since we added wholesalePrice to only a few, let's just use the featured ones + extras for demo.
    const wholesaleVehicles = MOCK_VEHICLES.filter(v => v.wholesalePrice !== undefined);

    return (
        <main className="min-h-screen bg-brand-darker text-white pt-20">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-darker/80 to-brand-darker"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-wider uppercase mb-4 animate-fade-in">
                        B2B Partner Portal
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight animate-slide-up">
                        Wholesale <span className="text-brand-accent">Direct</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 animate-slide-up animation-delay-100">
                        Join our exclusive network of certified dealers. Access premium inventory at wholesale pricing with detailed condition reports.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-24 px-4 container mx-auto">
                {!hasAccess ? (
                    <div className="animate-fade-in-up">
                        <DealerRegistrationForm onSuccess={() => setHasAccess(true)} />
                    </div>
                ) : (
                    <div className="animate-fade-in space-y-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                            <div>
                                <h2 className="text-xl font-bold">Available Inventory</h2>
                                <p className="text-sm text-gray-400">{wholesaleVehicles.length} Vehicles Ready for Transfer</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors border border-white/10">
                                    Export CSV
                                </button>
                                <button className="px-4 py-2 bg-brand-accent hover:bg-brand-accent-glow text-white rounded-lg text-sm font-bold shadow-lg shadow-brand-accent/20 transition-all">
                                    Bulk Inquiry
                                </button>
                            </div>
                        </div>

                        <WholesaleTable vehicles={wholesaleVehicles} />
                    </div>
                )}
            </section>
        </main>
    );
}
