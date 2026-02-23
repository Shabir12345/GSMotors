'use client';

// New Vehicle Page - Modern SaaS Dashboard Revamp
import AdminLayout from '@/components/AdminLayout';
import VehicleForm from '@/components/VehicleForm';
import Link from 'next/link';
import {
  Plus,
  ChevronLeft,
  Car,
  Target
} from 'lucide-react';

export default function NewVehiclePage() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumbs & Navigation */}
        <div className="flex items-center gap-4 px-4">
          <Link
            href="/admin/vehicles"
            className="group p-3 bg-white/5 border border-white/5 rounded-xl text-gray-400 hover:text-white hover:border-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </Link>
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            <Target className="w-3 h-3" />
            Inventory Control
            <ChevronLeft className="w-3 h-3 rotate-180 opacity-30" />
            <span className="text-brand-accent">Deploy Listing</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none">
              LAUNCH <br />
              <span className="text-white/20">NEW UNIT</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
                <Car className="w-5 h-5 text-brand-accent" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">Listing Type</span>
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Premium Inventory</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end space-y-1 mb-2">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Step 01/02</span>
            <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-brand-accent shadow-[0_0_10px_rgba(var(--brand-accent-rgb),0.5)]" />
            </div>
          </div>
        </div>

        {/* Vehicle Form */}
        <div className="px-4">
          <VehicleForm />
        </div>
      </div>
    </AdminLayout>
  );
}

