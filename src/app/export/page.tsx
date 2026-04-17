'use client';

import { useState, useEffect } from 'react';
import VehicleGrid from '@/components/VehicleGrid';
import PageHero from '@/components/PageHero';
import { siteConfig } from '@/siteConfig';

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
        <main className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Global Shipping"
                badgeColor="indigo"
                title={<>Export <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-brand-accent">Solutions</span></>}
                subtitle="Seamless international vehicle logistics — quality pre-owned inventory available for global buyers. We handle documentation, shipping coordination, and compliance."
                breadcrumbs={[
                    { name: 'Home', href: '/' },
                    { name: 'Export', href: '/export' },
                ]}
            />

            <section className="container mx-auto px-4 md:px-6 pb-24">
                {/* Services Strip */}
                <div className="mb-10 grid sm:grid-cols-3 gap-4">
                    {[
                        { title: 'Global Shipping', desc: 'Coordination with international freight partners' },
                        { title: 'Full Documentation', desc: 'Export paperwork, customs, and compliance handled' },
                        { title: 'Direct Inquiries', desc: `Contact us at ${siteConfig.contact.phone}` },
                    ].map((item) => (
                        <div key={item.title} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-5">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-3">
                                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <VehicleGrid
                    vehicles={vehicles}
                    loading={loading}
                    emptyMessage="No export vehicles currently available. Contact us directly for custom export inquiries."
                />
            </section>
        </main>
    );
}
