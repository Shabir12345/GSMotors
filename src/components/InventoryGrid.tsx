import VehicleCard from './VehicleCard';

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
    isAsIs?: boolean;
    isExport?: boolean;
    isWholesale?: boolean;
    isFeatured?: boolean;
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
    return (
        <section className="section-padding bg-brand-dark">
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <div className="text-center mb-10 md:mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-white">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-[450px] bg-white/5 rounded-[2rem] animate-pulse border border-white/5"></div>
                        ))}
                    </div>
                ) : vehicles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id}
                                vehicle={vehicle}
                                showPrice={!vehicle.isWholesale}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
                        <p className="text-2xl text-gray-400">No vehicles found matching your criteria.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
