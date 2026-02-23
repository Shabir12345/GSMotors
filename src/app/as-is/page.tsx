'use client';

import { useState, useEffect } from 'react';
import VehicleGrid from '@/components/VehicleGrid';

export default function AsIsPage() {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/vehicles?isAsIs=true');
                const result = await response.json();
                if (result.success) {
                    setVehicles(result.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch as-is vehicles:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchVehicles();
    }, []);

    return (
        <>
            <title>Sold 'As Is' | GS Motors Inc</title>
            <meta name="description" content="Browse our special selection of vehicles sold 'As Is'. Great value for projects and budget-conscious buyers." />

            <main className="min-h-screen bg-brand-darker pt-24">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2766&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-darker/80 to-brand-darker"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-wider uppercase mb-4 animate-fade-in">
                            Value Inventory
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight text-white animate-slide-up">
                            'As Is' <span className="text-amber-500">Specials</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 animate-slide-up animation-delay-100">
                            Our 'As Is' inventory offers exceptional value. These vehicles are sold in their current condition, perfect for enthusiasts and those looking for the best price.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 pb-24">
                    <VehicleGrid
                        vehicles={vehicles}
                        loading={loading}
                        emptyMessage="No 'As Is' vehicles currently available."
                    />
                </section>
            </main>
        </>
    );
}
