'use client';

import { useState, useEffect } from 'react';
import VehicleGrid from '@/components/VehicleGrid';

export default function ExportPage() {
    const [vehicles, setVehicles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVehicles = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/vehicles?isExport=true');
                const result = await response.json();
                if (result.success) {
                    setVehicles(result.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch export vehicles:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchVehicles();
    }, []);

    return (
        <>
            <title>Export Vehicles | GS Motors Inc</title>
            <meta name="description" content="Worldwide vehicle export services. Premium inventory ready for international shipping." />

            <main className="min-h-screen bg-brand-darker pt-24">
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-darker/80 to-brand-darker"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-wider uppercase mb-4 animate-fade-in">
                            Global Shipping
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight text-white animate-slide-up">
                            Export <span className="text-indigo-500">Solutions</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 animate-slide-up animation-delay-100">
                            We provide seamless international vehicle logistics. Browse our premium selection specifically curated for global markets and export requirements.
                        </p>
                    </div>
                </section>

                <section className="container mx-auto px-4 pb-24">
                    <VehicleGrid
                        vehicles={vehicles}
                        loading={loading}
                        emptyMessage="No vehicles for export currently available."
                    />
                </section>
            </main>
        </>
    );
}
