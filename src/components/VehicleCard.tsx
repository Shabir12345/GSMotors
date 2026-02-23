'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice, formatMileage, getStatusBadgeStyle } from '@/utils/formatters';
import { Calendar, Gauge, Fuel, Cog, Palette, CarFront, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type VehicleCardProps = {
    vehicle: any;
    showPrice?: boolean;
};

export default function VehicleCard({ vehicle, showPrice = true }: VehicleCardProps) {
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const statusStyle = getStatusBadgeStyle(vehicle.status);

    return (
        <Link
            href={`/vehicles/${vehicle.seoSlug}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col h-full bg-[#0A0A0B] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-brand-accent/30 hover:shadow-[0_0_50px_-12px_rgba(var(--brand-accent-rgb),0.3)]"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                <AnimatePresence mode="wait">
                    {vehicle.photos && vehicle.photos.length > 0 && !imageError ? (
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: isHovered ? 1.05 : 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full w-full"
                        >
                            <Image
                                src={vehicle.photos[0].url}
                                alt={vehicle.photos[0].altText || vehicle.title}
                                fill
                                className="object-cover transition-opacity duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority={false}
                                onError={() => setImageError(true)}
                            />
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-gray-900 to-black text-gray-700">
                            <CarFront className="w-12 h-12 mb-3 opacity-20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Media Pending</span>
                        </div>
                    )}
                </AnimatePresence>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                    <div className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border",
                        statusStyle.bgColor.replace('/10', '/20'),
                        statusStyle.textColor,
                        statusStyle.bgColor.replace('bg-', 'border-').replace('/10', '/30')
                    )}>
                        {statusStyle.label}
                    </div>
                    {vehicle.isFeatured && (
                        <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                            <Zap className="w-3 h-3 fill-current" />
                            Featured
                        </div>
                    )}
                    {vehicle.isWholesale && (
                        <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                            Wholesale
                        </div>
                    )}
                    {vehicle.isAsIs && (
                        <div className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md bg-orange-500/20 text-orange-400 border border-orange-500/30">
                            As-Is
                        </div>
                    )}
                </div>

                {/* Price Tag Overlay */}
                <div className="absolute bottom-4 right-4 z-10">
                    {showPrice ? (
                        <div className="bg-brand-accent text-white px-4 py-2 rounded-2xl font-black text-lg shadow-2xl shadow-brand-accent/40 border border-white/20">
                            {formatPrice(vehicle.priceCents).split('.')[0]}
                        </div>
                    ) : (
                        <div className="bg-white/10 backdrop-blur-md text-white/90 px-4 py-2 rounded-2xl font-bold text-xs uppercase tracking-widest border border-white/10">
                            Inquiry Only
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors duration-300 line-clamp-1">
                        {vehicle.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                        <span>{vehicle.make}</span>
                        <span className="w-1 h-1 bg-gray-700 rounded-full" />
                        <span>{vehicle.model}</span>
                    </div>
                </div>

                {/* Main Specs Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                        <Calendar className="w-4 h-4 text-brand-accent" />
                        <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Year</span>
                            <span className="text-xs text-gray-200 font-bold">{vehicle.year}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                        <Gauge className="w-4 h-4 text-emerald-400" />
                        <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Mileage</span>
                            <span className="text-xs text-gray-200 font-bold">{formatMileage(vehicle.odometerKm)}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                        <Fuel className="w-4 h-4 text-amber-400" />
                        <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Fuel</span>
                            <span className="text-xs text-gray-200 font-bold truncate">{vehicle.fuelType || 'Petrol'}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                        <Cog className="w-4 h-4 text-blue-400" />
                        <div className="flex flex-col">
                            <span className="text-[9px] text-gray-500 uppercase font-black tracking-tighter">Drive</span>
                            <span className="text-xs text-gray-200 font-bold truncate">{vehicle.transmission || 'Auto'}</span>
                        </div>
                    </div>
                </div>

                {/* Footer Action */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        <ShieldCheck className="w-3 h-3 text-emerald-500/50" />
                        <span>Verified Unit</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-accent font-black text-xs uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Subtle Hover Glow Line at Bottom */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-brand-accent w-0 transition-all duration-700 group-hover:w-full" />
        </Link>
    );
}

