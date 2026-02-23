'use client';

import React from 'react';
import Select from '@/components/Select';
import { FilterState } from '@/hooks/useVehicleFilters';
import {
  Search,
  Car,
  Settings2,
  RotateCcw,
  DollarSign,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  LayoutGrid,
  ChevronDown
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterSidebarProps {
  filters: FilterState;
  setFilter: (name: keyof FilterState, value: string) => void;
  clearFilters: () => void;
  availableMakes: string[];
  availableModels: string[];
  className?: string;
  hideHeader?: boolean;
}

export default function FilterSidebar({
  filters,
  setFilter,
  clearFilters,
  availableMakes,
  availableModels,
  className = '',
  hideHeader = false,
}: FilterSidebarProps) {

  const transmissionOptions = [
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },
    { value: 'CVT', label: 'CVT' },
  ];

  const fuelTypeOptions = [
    { value: 'Gasoline', label: 'Gasoline' },
    { value: 'Diesel', label: 'Diesel' },
    { value: 'Hybrid', label: 'Hybrid' },
    { value: 'Electric', label: 'Electric' },
  ];

  const bodyTypeOptions = [
    { value: 'SEDAN', label: 'Sedan' },
    { value: 'SUV', label: 'SUV' },
    { value: 'TRUCK', label: 'Truck' },
    { value: 'COUPE', label: 'Coupe' },
    { value: 'HATCHBACK', label: 'Hatchback' },
    { value: 'VAN', label: 'Van' },
    { value: 'WAGON', label: 'Wagon' },
    { value: 'CONVERTIBLE', label: 'Convertible' },
  ];

  const activeFilterCount = Object.values(filters).filter(v => v && v !== 'newest').length;

  return (
    <div className={cn(
      "flex flex-col space-y-8",
      !hideHeader && "bg-[#0A0A0B] border border-white/5 rounded-[2.5rem] p-8 shadow-2xl",
      className
    )}>
      {/* Header */}
      {!hideHeader && (
        <div className="flex items-center justify-between pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-accent/10 rounded-xl border border-brand-accent/20">
              <Settings2 className="w-5 h-5 text-brand-accent" />
            </div>
            <h2 className="text-sm font-black text-white uppercase tracking-[0.2em]">Refine</h2>
            {activeFilterCount > 0 && (
              <span className="bg-brand-accent text-white text-[10px] font-black px-2 py-0.5 rounded-full min-w-[18px] text-center shadow-lg shadow-brand-accent/20">
                {activeFilterCount}
              </span>
            )}
          </div>
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all flex items-center gap-2 group"
            >
              <RotateCcw className="w-3 h-3 group-hover:rotate-[-180deg] transition-transform duration-500" />
              Reset
            </button>
          )}
        </div>
      )}

      <div className="space-y-8">
        {/* Text Search */}
        <div className="space-y-3">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Search className="w-3 h-3 text-brand-accent" />
            Keyword
          </label>
          <div className="relative group">
            <input
              type="text"
              value={filters.search || ''}
              onChange={(e) => setFilter('search', e.target.value)}
              placeholder="Search by name..."
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 pl-4 pr-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-brand-accent/50 focus:border-brand-accent/50 transition-all group-hover:bg-white/[0.05]"
            />
          </div>
        </div>

        {/* Identification */}
        <div className="space-y-4">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <Car className="w-3 h-3 text-emerald-400" />
            Selection
          </label>
          <div className="space-y-3">
            <Select
              value={filters.make}
              onChange={(val) => setFilter('make', val)}
              options={availableMakes.map(m => ({ value: m, label: m }))}
              placeholder="Brands"
              className="w-full"
            />
            <Select
              value={filters.model}
              onChange={(val) => setFilter('model', val)}
              options={availableModels.map(m => ({ value: m, label: m }))}
              placeholder="Series"
              className="w-full"
            />
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-4">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <DollarSign className="w-3 h-3 text-brand-accent" />
            Budget Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative group">
              <input
                type="number"
                value={filters.minPrice}
                onChange={(e) => setFilter('minPrice', e.target.value)}
                placeholder="Min"
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-brand-accent/50 transition-all group-hover:bg-white/[0.05]"
              />
            </div>
            <div className="relative group">
              <input
                type="number"
                value={filters.maxPrice}
                onChange={(e) => setFilter('maxPrice', e.target.value)}
                placeholder="Max"
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-brand-accent/50 transition-all group-hover:bg-white/[0.05]"
              />
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <Calendar className="w-3 h-3 text-blue-400" />
              Year
            </label>
            <input
              type="number"
              value={filters.year}
              onChange={(e) => setFilter('year', e.target.value)}
              placeholder="From"
              className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-brand-accent/50 transition-all"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <Gauge className="w-3 h-3 text-amber-400" />
              Distance
            </label>
            <div className="relative">
              <input
                type="number"
                value={filters.maxMileage}
                onChange={(e) => setFilter('maxMileage', e.target.value)}
                placeholder="Max km"
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-4 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-brand-accent/50 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Technical Specification */}
        <div className="space-y-4 pt-6 mt-6 border-t border-white/5">
          <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] flex items-center gap-2">
            <LayoutGrid className="w-3 h-3 text-purple-400" />
            Configuration
          </label>
          <div className="space-y-3">
            <Select
              value={filters.bodyType}
              onChange={(val) => setFilter('bodyType', val)}
              options={bodyTypeOptions}
              placeholder="Architecture"
            />
            <Select
              value={filters.transmission}
              onChange={(val) => setFilter('transmission', val)}
              options={transmissionOptions}
              placeholder="Drivetrain"
            />
            <Select
              value={filters.fuelType}
              onChange={(val) => setFilter('fuelType', val)}
              options={fuelTypeOptions}
              placeholder="Energy Source"
            />
          </div>
        </div>
      </div>

      {/* Footer Support Callout */}
      {!hideHeader && (
        <div className="pt-6 border-t border-white/5">
          <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl space-y-2">
            <div className="text-[8px] font-black text-brand-accent uppercase tracking-widest">Expert Advice</div>
            <div className="text-[10px] text-gray-400 font-medium leading-relaxed">Need help choosing? Contact our advisors for a personalized consultation.</div>
          </div>
        </div>
      )}
    </div>
  );
}
