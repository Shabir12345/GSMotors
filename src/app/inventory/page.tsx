'use client';

// Public Inventory Page

import { useState, useEffect, useCallback, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings2,
  Car,
  Plus,
  Search,
  ArrowRight,
  TrendingUp,
  Filter,
  LayoutGrid,
  ChevronRight
} from 'lucide-react';
import VehicleGrid from '@/components/VehicleGrid';
import { useVehicleFilters } from '@/hooks/useVehicleFilters';
import FilterSidebar from '@/components/inventory/FilterSidebar';
import Select from '@/components/Select';
import Breadcrumb from '@/components/Breadcrumb';
import { cn } from '@/lib/utils';

function InventoryContent() {
  const { filters, setFilter, clearFilters, isInitialized, activeFilterCount } = useVehicleFilters();
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [loading, setLoading] = useState(true);
  const [availableMakes, setAvailableMakes] = useState<string[]>([]);
  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileFiltersOpen) {
        setIsMobileFiltersOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileFiltersOpen]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileFiltersOpen]);

  // Fetch unique makes from API on mount
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch('/api/vehicles/makes');
        const result = await response.json();
        if (result.success) {
          setAvailableMakes(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch makes:', error);
      }
    };
    fetchMakes();
  }, []);

  // Fetch models when make changes
  useEffect(() => {
    const fetchModels = async () => {
      if (!filters.make) {
        setAvailableModels([]);
        return;
      }
      try {
        const response = await fetch(`/api/vehicles/models?make=${filters.make}`);
        const result = await response.json();
        if (result.success) {
          setAvailableModels(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch models:', error);
      }
    };
    fetchModels();
  }, [filters.make]);

  // Fetch vehicles when filters change
  const fetchVehicles = useCallback(async () => {
    if (!isInitialized) return;

    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (filters.search) queryParams.set('search', filters.search);
      if (filters.make) queryParams.set('make', filters.make);
      if (filters.model) queryParams.set('model', filters.model);
      if (filters.minPrice) queryParams.set('minPrice', (parseInt(filters.minPrice) * 100).toString());
      if (filters.maxPrice) queryParams.set('maxPrice', (parseInt(filters.maxPrice) * 100).toString());
      if (filters.year) queryParams.set('year', filters.year);
      if (filters.maxMileage) queryParams.set('maxMileage', filters.maxMileage);
      if (filters.bodyType) queryParams.set('bodyType', filters.bodyType);
      if (filters.transmission) queryParams.set('transmission', filters.transmission);
      if (filters.fuelType) queryParams.set('fuelType', filters.fuelType);
      if (filters.sortBy) queryParams.set('sortBy', filters.sortBy);

      // Strict Retail Inventory: Hide wholesale, as-is, and export units
      queryParams.set('isWholesale', 'false');
      queryParams.set('isAsIs', 'false');
      queryParams.set('isExport', 'false');
      queryParams.set('status', 'AVAILABLE');

      const response = await fetch(`/api/vehicles?${queryParams.toString()}`);
      const result = await response.json();

      if (result.success) {
        setVehicles(result.data.data);
        setTotalVehicles(result.data.pagination.total);
      }
    } catch (error) {
      console.error('Failed to fetch vehicles:', error);
    } finally {
      setLoading(false);
    }
  }, [filters, isInitialized]);

  useEffect(() => {
    fetchVehicles();
  }, [fetchVehicles]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-accent/30 selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-accent/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-24">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' },
              { name: 'All Vehicles', href: '/inventory' }
            ]}
          />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-3 text-brand-accent font-black text-xs uppercase tracking-[0.4em]">
              <div className="w-12 h-[2px] bg-brand-accent rounded-full" />
              All Vehicles
            </div>
            <h1 className="text-6xl sm:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              Quality <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20">Pre-Owned</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl font-medium leading-relaxed">
              Browse our full selection of quality pre-owned vehicles. Reliable, inspected, and fairly priced.
            </p>
          </motion.div>

          {/* Sort Control */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 border-t border-white/5 pt-8 lg:border-t-0 lg:pt-0"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <Select
                value={filters.sortBy || 'newest'}
                onChange={(val) => setFilter('sortBy', val)}
                options={[
                  { value: 'newest', label: 'Newest Arrivals' },
                  { value: 'price_asc', label: 'Price: Low to High' },
                  { value: 'price_desc', label: 'Price: High to Low' },
                  { value: 'mileage_asc', label: 'Lowest Mileage' },
                  { value: 'year_desc', label: 'Latest Year' }
                ]}
                className="w-[200px] sm:w-[260px]"
              />
            </div>
            <button
              onClick={() => setIsMobileFiltersOpen(true)}
              className="lg:hidden flex items-center justify-center p-5 rounded-[2rem] bg-white/[0.03] border border-white/10 active:scale-95 transition-all hover:bg-white/[0.05]"
            >
              <Settings2 className="w-5 h-5 text-brand-accent" />
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Desktop Desktop Filters */}
          <aside className="hidden lg:block w-[360px] flex-shrink-0 sticky top-32 h-fit">
            <FilterSidebar
              filters={filters}
              setFilter={setFilter}
              clearFilters={clearFilters}
              availableMakes={availableMakes}
              availableModels={availableModels}
            />
          </aside>

          {/* Grid Area */}
          <main className="flex-grow min-w-0">
            {/* Meta Info */}
            <div className="flex items-center justify-between mb-10 px-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Status Check</span>
                <div className="flex items-center gap-2.5 px-4 py-1.5 bg-brand-accent/5 border border-brand-accent/20 rounded-full">
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(var(--brand-accent-rgb),0.5)]" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">{totalVehicles} Units Available</span>
                </div>
              </div>
            </div>

            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="aspect-[16/18] bg-white/[0.02] border border-white/5 rounded-[2.5rem] animate-pulse" />
                ))}
              </div>
            }>
              <div className="px-2">
                <VehicleGrid vehicles={vehicles} loading={loading} />
              </div>

              {/* No Results Illustration */}
              {!loading && vehicles.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-32 text-center space-y-10 bg-white/[0.01] border border-white/[0.03] rounded-[3.5rem] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.02] to-transparent pointer-events-none" />
                  <div className="relative">
                    <div className="p-10 bg-white/[0.03] rounded-full border border-white/5 mb-8">
                      <Car className="w-20 h-20 text-gray-800" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Zero Matches</h2>
                      <p className="text-gray-500 max-w-sm mx-auto text-lg">No vehicles match your current filters. Try adjusting your search criteria.</p>
                    </div>
                  </div>
                  <button
                    onClick={clearFilters}
                    className="group flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all shadow-2xl active:scale-95"
                  >
                    Reset Grid
                    <RotateCcw className="w-4 h-4 group-hover:rotate-[-180deg] transition-transform duration-700" />
                  </button>
                </motion.div>
              )}
            </Suspense>
          </main>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 350 }}
              className="fixed right-0 top-0 h-full w-full max-w-[360px] bg-[#0A0A0B] z-[101] shadow-2xl overflow-y-auto px-8 pt-8 pb-32"
            >
              <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-brand-accent uppercase tracking-[0.3em]">Filter Options</span>
                  <h2 className="text-xl font-black uppercase tracking-tight">Active Filters</h2>
                </div>
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="p-3 hover:bg-white/10 rounded-full transition-colors border border-white/5"
                >
                  <Plus className="w-6 h-6 rotate-45" />
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                setFilter={setFilter}
                clearFilters={clearFilters}
                availableMakes={availableMakes}
                availableModels={availableModels}
                hideHeader
              />
              <div className="fixed bottom-0 right-0 w-full max-w-[360px] p-6 bg-[#0A0A0B]/80 backdrop-blur-2xl border-t border-white/5">
                <button
                  onClick={() => setIsMobileFiltersOpen(false)}
                  className="w-full py-5 bg-brand-accent text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest shadow-xl shadow-brand-accent/20 active:scale-95 transition-all"
                >
                  Update Results ({totalVehicles})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const RotateCcw = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default function InventoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center space-y-6">
        <div className="relative">
          <div className="w-16 h-16 border-[3px] border-brand-accent/10 border-t-brand-accent rounded-full animate-spin" />
          <div className="absolute inset-0 bg-brand-accent/20 blur-2xl animate-pulse" />
        </div>
        <div className="text-[10px] font-black text-white uppercase tracking-[0.4em] animate-pulse">Loading Inventory...</div>
      </div>
    }>
      <InventoryContent />
    </Suspense>
  );
}
