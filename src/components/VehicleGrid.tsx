'use client';

import VehicleCard from './VehicleCard';
import { CarFront } from 'lucide-react';

type VehicleGridProps = {
    vehicles: any[];
    loading?: boolean;
    showPrice?: boolean;
    emptyMessage?: string;
};

export default function VehicleGrid({
    vehicles,
    loading = false,
    showPrice = true,
    emptyMessage = "No vehicles found matching your criteria."
}: VehicleGridProps) {
    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white/5 rounded-[2rem] h-[450px] border border-white/10 animate-pulse"></div>
                ))}
            </div>
        );
    }

    if (vehicles.length === 0) {
        return (
            <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-white/5 backdrop-blur-md">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                    <CarFront className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{emptyMessage}</h3>
                <p className="text-gray-500 max-w-sm mx-auto uppercase text-[10px] font-black tracking-widest">
                    The requested collection is currently empty. <br />
                    Please refine your search parameters.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
                <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    showPrice={showPrice}
                />
            ))}
        </div>
    );
}
