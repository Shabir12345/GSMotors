'use client';

import { useState, useEffect } from 'react';
import VehicleGrid from '@/components/VehicleGrid';
import PageHero from '@/components/PageHero';

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
        <main className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Value Inventory"
                badgeColor="amber"
                title={<><span className="text-amber-400">'As-Is'</span> Specials</>}
                subtitle="Our 'As-Is' inventory offers exceptional value. These vehicles are sold in their current condition — perfect for enthusiasts and budget-conscious buyers looking for the best deal."
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'As-Is Inventory', href: '/as-is' },
                ]}
            />

            <section className="container mx-auto px-4 md:px-6 pb-24">
                {/* Disclosure Banner */}
                <div className="mb-8 flex items-start gap-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5">
                    <svg className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-amber-300/80 text-sm leading-relaxed">
                        <strong className="text-amber-300">As-Is Notice:</strong> These vehicles are sold in their current condition without warranty. We encourage independent inspection before purchase. Contact us for full vehicle details.
                    </p>
                </div>

                <VehicleGrid
                    vehicles={vehicles}
                    loading={loading}
                    emptyMessage="No 'As Is' vehicles currently available. Check back soon or browse our certified inventory."
                />
            </section>
        </main>
    );
}
