'use client';

import { useState, useEffect } from 'react';
import VehicleGrid from '@/components/VehicleGrid';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/siteConfig';

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
        <main className="min-h-screen bg-brand-darker">
            <PageHero
                badge="B2B Partner Portal"
                badgeColor="blue"
                title={<>Wholesale <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Direct</span></>}
                subtitle="Licensed dealers can access our wholesale inventory at competitive transfer pricing. Contact us to get started."
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Wholesale', href: '/wholesale' },
                ]}
            />

            <section className="container mx-auto px-4 md:px-6 pb-24">
                {/* Dealer Toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5 mb-10">
                    <div>
                        <h2 className="text-white font-bold text-lg">Dealer Inventory List</h2>
                        <p className="text-gray-400 text-sm mt-0.5">
                            {loading ? 'Loading units...' : `${vehicles.length} unit${vehicles.length !== 1 ? 's' : ''} ready for transfer`}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium border border-white/10 text-white transition-colors">
                            Export CSV
                        </button>
                        <a
                            href={`tel:${siteConfig.contact.phone}`}
                            className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-glow text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-accent/20 transition-all"
                        >
                            Contact Fleet Manager
                        </a>
                    </div>
                </div>

                <VehicleGrid
                    vehicles={vehicles}
                    loading={loading}
                    showPrice={false}
                    emptyMessage="No wholesale units currently available. Contact our fleet manager directly for availability."
                />
            </section>
        </main>
    );
}
