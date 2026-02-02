'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Vehicle {
    id: string;
    title: string;
    priceCents: number;
    odometerKm: number;
    year: number;
    make: string;
    model: string;
    transmission?: string;
    exteriorColor?: string;
    status: string;
    seoSlug: string;
    photos: { url: string }[];
}

interface InventoryGridProps {
    vehicles: Vehicle[];
    loading: boolean;
    title?: string;
    subtitle?: string;
    showFilters?: boolean;
}

export default function InventoryGrid({ vehicles, loading, title, subtitle }: InventoryGridProps) {
    const formatPrice = (priceCents: number) => {
        return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 0 }).format(priceCents / 100);
    };

    const formatMileage = (km: number) => {
        return new Intl.NumberFormat('en-CA').format(km) + ' km';
    };

    return (
        <section className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && (
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[400px] bg-white/5 rounded-2xl animate-pulse"></div>
                        ))}
                    </div>
                ) : vehicles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vehicles.map((vehicle, index) => (
                            <div
                                key={vehicle.id}
                                className="group premium-card rounded-2xl overflow-hidden relative"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Area */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-gray-800">
                                    <Image
                                        src={vehicle.photos?.[0]?.url || 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800'}
                                        alt={vehicle.title || 'Vehicle image'}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4 bg-brand-accent/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        {vehicle.status === 'AVAILABLE' ? 'In Stock' : vehicle.status}
                                    </div>

                                    {/* Price Overlay on Image (Mobile/Compact) */}
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-2xl font-bold text-brand-highlight text-glow">{formatPrice(vehicle.priceCents)}</p>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors line-clamp-1">
                                        {vehicle.title || `${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                    </h3>

                                    {/* Specs Grid */}
                                    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-400 mb-6">
                                        <div className="flex items-center">
                                            <span className="mr-2">📅</span> {vehicle.year}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">🛣️</span> {formatMileage(vehicle.odometerKm)}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">⚙️</span> {vehicle.transmission || 'Auto'}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">🎨</span> {vehicle.exteriorColor || 'N/A'}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <Link
                                        href={`/vehicles/${vehicle.seoSlug}`}
                                        className="block w-full text-center bg-white/10 hover:bg-brand-accent text-white font-bold py-3 rounded-xl transition-all duration-300 border border-white/5 hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/20"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-3xl">
                        <p className="text-2xl text-gray-400">No vehicles found matching your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
