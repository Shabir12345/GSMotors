'use client';

// Edit Vehicle Page - Modern SaaS Dashboard Revamp
import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/AdminLayout';
import VehicleForm from '@/components/VehicleForm';
import Link from 'next/link';
import {
  ChevronLeft,
  ExternalLink,
  Car,
  Settings,
  History,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EditVehiclePage() {
  const params = useParams();
  const router = useRouter();
  const vehicleId = params.id as string;

  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchVehicle = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (data.success) {
        setVehicle(data.data);
      } else {
        setError(data.error || 'Failed to load vehicle');
      }
    } catch (error) {
      console.error('Failed to fetch vehicle:', error);
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [vehicleId]);

  useEffect(() => {
    fetchVehicle();
  }, [fetchVehicle]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
          <Loader2 className="w-10 h-10 text-brand-accent animate-spin" />
          <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] animate-pulse">
            Configuring Interface...
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="max-w-4xl mx-auto py-20 px-6">
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-8 rounded-[2.5rem] flex flex-col items-center text-center space-y-6">
            <div className="p-4 bg-rose-500/20 rounded-2xl">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black">Interface Error</h2>
              <p className="text-rose-500/70 max-w-sm">{error}</p>
            </div>
            <Link
              href="/admin/vehicles"
              className="px-8 py-4 bg-rose-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-rose-600 transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Return to Fleet
            </Link>
          </div>
        </div>
      </AdminLayout>
    );
  }

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
            <Settings className="w-3 h-3" />
            Control Panel
            <ChevronLeft className="w-3 h-3 rotate-180 opacity-30" />
            <span className="text-brand-accent">Edit Entry</span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-4">
          <div className="space-y-4">
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none">
              REDEFINE <br />
              <span className="text-white/20">LISTING</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
                <Car className="w-5 h-5 text-brand-accent" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">Current Target</span>
                  <span className="text-sm font-bold text-white">{vehicle.year} {vehicle.make} {vehicle.model}</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
                <History className="w-5 h-5 text-emerald-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter">Identifier</span>
                  <span className="text-sm font-bold text-white font-mono">{vehicle.vin?.slice(-8).toUpperCase() || 'NO-VIN'}</span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={`/vehicles/${vehicle.seoSlug}`}
            target="_blank"
            className="flex items-center gap-3 text-[10px] font-black text-white/40 uppercase tracking-[0.3em] hover:text-brand-accent transition-colors group mb-2"
          >
            View Live Listing
            <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Vehicle Form */}
        <div className="px-4">
          <VehicleForm vehicle={vehicle} isEdit={true} />
        </div>
      </div>
    </AdminLayout>
  );
}
