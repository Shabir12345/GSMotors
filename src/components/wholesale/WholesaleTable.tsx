'use client';

import Image from 'next/image';
import { Vehicle } from '@/data/mockData';
import { formatPrice } from '@/utils/formatters';

interface WholesaleTableProps {
    vehicles: Vehicle[];
}

export default function WholesaleTable({ vehicles }: WholesaleTableProps) {
    return (
        <div className="bg-gray-800/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-900/50 text-gray-400 text-xs uppercase tracking-wider border-b border-white/5">
                            <th className="p-4 font-semibold">Vehicle</th>
                            <th className="p-4 font-semibold">VIN</th>
                            <th className="p-4 font-semibold text-right">Mileage</th>
                            <th className="p-4 font-semibold text-center">Grade</th>
                            <th className="p-4 font-semibold">Location</th>
                            <th className="p-4 font-semibold text-right">Wholesale Price</th>
                            <th className="p-4 font-semibold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {vehicles.map((vehicle) => (
                            <tr key={vehicle.id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-gray-700 flex-shrink-0 border border-white/10">
                                            {vehicle.photos?.[0] ? (
                                                <Image
                                                    src={vehicle.photos[0].url}
                                                    alt={vehicle.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">No Img</div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm group-hover:text-brand-accent transition-colors">
                                                {vehicle.year} {vehicle.make} {vehicle.model}
                                            </div>
                                            <div className="text-xs text-gray-500">{vehicle.exteriorColor} / {vehicle.interiorColor}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 text-sm text-gray-300 font-mono">
                                    {vehicle.vin || 'N/A'}
                                </td>
                                <td className="p-4 text-sm text-gray-300 text-right font-mono">
                                    {vehicle.odometerKm.toLocaleString()} km
                                </td>
                                <td className="p-4 text-center">
                                    <span className={`inline-block px-2 py-1 rounded text-xs font-bold ${(vehicle.conditionGrade || 0) >= 4.8 ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                            (vehicle.conditionGrade || 0) >= 4.0 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                                'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                        }`}>
                                        {vehicle.conditionGrade?.toFixed(1) || '-'}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-gray-400">
                                    {vehicle.location || 'Main Warehouse'}
                                </td>
                                <td className="p-4 text-right">
                                    <div className="text-white font-bold font-mono">
                                        {vehicle.wholesalePrice ? formatPrice(vehicle.wholesalePrice) : '-'}
                                    </div>
                                    {vehicle.wholesalePrice && vehicle.priceCents > vehicle.wholesalePrice && (
                                        <div className="text-xs text-green-500">
                                            {Math.round(((vehicle.priceCents - vehicle.wholesalePrice) / vehicle.priceCents) * 100)}% margin
                                        </div>
                                    )}
                                </td>
                                <td className="p-4 text-right">
                                    <button className="px-3 py-1.5 bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-white rounded-lg text-xs font-bold transition-all border border-brand-accent/20">
                                        Bid / Buy
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Mobile View (Card List) could be added here or via responsive classes above */}
        </div>
    );
}
