'use client';

// Admin Vehicles List - Modern SaaS Dashboard Revamp
import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice, formatMileage } from '@/utils/formatters';
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Image as ImageIcon,
  Edit3,
  Trash2,
  Star,
  ExternalLink,
  Car,
  ChevronRight,
  TrendingUp,
  Box,
  CheckCircle2,
  Gauge,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function VehiclesListPage() {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/admin/vehicles?perPage=1000', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      if (data.success) {
        setVehicles(data.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  const getNextStatus = (currentStatus: string): string => {
    switch (currentStatus) {
      case 'AVAILABLE': return 'PENDING';
      case 'PENDING': return 'SOLD';
      case 'SOLD': return 'AVAILABLE';
      case 'DRAFT': return 'AVAILABLE';
      default: return 'AVAILABLE';
    }
  };

  const handleStatusClick = async (vehicleId: string, currentStatus: string) => {
    const newStatus = getNextStatus(currentStatus);
    await handleStatusChange(vehicleId, newStatus);
  };

  const handleStatusChange = async (vehicleId: string, newStatus: string) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        fetchVehicles();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const handleFeaturedToggle = async (vehicleId: string, isFeatured: boolean) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isFeatured: !isFeatured }),
      });

      if (response.ok) {
        fetchVehicles();
      }
    } catch (error) {
      console.error('Failed to update featured status:', error);
    }
  };

  const handleDelete = async (vehicleId: string) => {
    if (!confirm('Are you sure you want to delete this vehicle permanently?')) return;

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchVehicles();
      }
    } catch (error) {
      console.error('Failed to delete vehicle:', error);
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'AVAILABLE':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'PENDING':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'SOLD':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const filteredVehicles = vehicles.filter(v =>
    v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.vin?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-6">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brand-accent font-black text-[10px] uppercase tracking-[0.3em]">
              <TrendingUp className="w-3 h-3" />
              Inventory Control
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter">
              Active Fleet <span className="text-white/20">({vehicles.length})</span>
            </h1>
          </div>
          <Link
            href="/admin/vehicles/new"
            className="group flex items-center gap-3 bg-brand-accent hover:bg-white text-white hover:text-brand-dark px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-brand-accent/20 active:scale-95"
          >
            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
            Launch New Listing
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
            <div className="p-4 bg-emerald-500/10 rounded-2xl">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-white text-2xl font-black">{vehicles.filter(v => v.status === 'AVAILABLE').length}</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Available Units</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4">
            <div className="p-4 bg-amber-500/10 rounded-2xl">
              <Box className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-white text-2xl font-black">{vehicles.filter(v => v.status === 'PENDING').length}</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Pending Deals</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-4 text-white/50">
            <div className="p-4 bg-white/5 rounded-2xl">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white text-2xl font-black">{vehicles.filter(v => v.isFeatured).length}</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Featured Slots</div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-4 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search by title, VIN, or make..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-brand-accent/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 rounded-2xl border border-white/5 hover:bg-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest transition-all">
            <Filter className="w-3 h-3" />
            All Filters
          </button>
        </div>

        {/* Main List */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="w-12 h-12 border-4 border-brand-accent/20 border-t-brand-accent rounded-full animate-spin"></div>
            <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest animate-pulse">Synchronizing Inventory...</div>
          </div>
        ) : filteredVehicles.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-[3rem] py-32 text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-8 bg-white/5 rounded-full border border-white/10">
                <Car className="w-16 h-16 text-gray-700" />
              </div>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-white">Empty Inventory</h2>
              <p className="text-gray-500 max-w-xs mx-auto text-sm">No vehicles found matching your criteria. Try adjusting your search or add a new unit.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Vehicle Unit</th>
                    <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Usage & Year</th>
                    <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Retail Price</th>
                    <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] text-center">Status</th>
                    <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] text-center">Featured</th>
                    <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] text-right text-white/20">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {filteredVehicles.map((vehicle) => (
                    <tr key={vehicle.id} className="group hover:bg-brand-accent/[0.02] transition-colors">
                      <td className="px-8 py-7">
                        <div className="flex items-center gap-5">
                          <div className="relative w-16 h-12 rounded-xl bg-gray-900 overflow-hidden border border-white/5">
                            {vehicle.photos?.[0]?.url ? (
                              <Image
                                src={vehicle.photos[0].url}
                                alt=""
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                              />
                            ) : (
                              <div className="flex items-center justify-center h-full text-white/10">
                                <Car className="w-6 h-6" />
                              </div>
                            )}
                          </div>
                          <div>
                            <Link href={`/vehicles/${vehicle.seoSlug}`} target="_blank" className="font-bold text-white group-hover:text-brand-accent transition-colors flex items-center gap-2">
                              {vehicle.title}
                              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <div className="text-[10px] font-mono text-gray-500 uppercase mt-1 tracking-tighter">VIN: {vehicle.vin || 'PENDING'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-7">
                        <div className="space-y-0.5">
                          <div className="text-white font-black">{vehicle.year}</div>
                          <div className="text-[10px] text-gray-500 font-bold flex items-center gap-1.5 uppercase tracking-tighter">
                            <Gauge className="w-3 h-3 text-brand-accent/50" />
                            {formatMileage(vehicle.odometerKm)}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-7">
                        <div className="text-xl font-black text-white tracking-tighter tabular-nums">
                          {formatPrice(vehicle.priceCents).split('.')[0]}
                          <span className="text-xs text-gray-500 opacity-50">.{formatPrice(vehicle.priceCents).split('.')[1]}</span>
                        </div>
                      </td>
                      <td className="px-8 py-7 text-center">
                        <button
                          onClick={() => handleStatusClick(vehicle.id, vehicle.status)}
                          className={cn(
                            "inline-flex items-center px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all hover:scale-105 active:scale-95",
                            getStatusStyles(vehicle.status)
                          )}
                        >
                          {vehicle.status}
                        </button>
                      </td>
                      <td className="px-8 py-7 text-center">
                        <button
                          onClick={() => handleFeaturedToggle(vehicle.id, vehicle.isFeatured || false)}
                          className={cn(
                            "p-2.5 rounded-xl transition-all border",
                            vehicle.isFeatured
                              ? 'text-amber-400 bg-amber-400/10 border-amber-400/20 shadow-[0_0_15px_-5px_theme(colors.amber.400)]'
                              : 'text-white/10 bg-white/5 border-white/5 hover:text-white/30 hover:bg-white/[0.08]'
                          )}
                        >
                          <Star className={cn("w-4 h-4", vehicle.isFeatured && "fill-current")} />
                        </button>
                      </td>
                      <td className="px-8 py-7">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={`/admin/vehicles/${vehicle.id}/photos`}
                            className="p-3 bg-white/5 border border-white/5 rounded-xl text-gray-500 hover:text-brand-accent hover:border-brand-accent/30 transition-all"
                            title="Gallery"
                          >
                            <ImageIcon className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/admin/vehicles/${vehicle.id}/edit`}
                            className="p-3 bg-white/5 border border-white/5 rounded-xl text-gray-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                            title="Quick Edit"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Link>
                          <div className="w-[1px] h-4 bg-white/10 mx-1" />
                          <button
                            onClick={() => handleDelete(vehicle.id)}
                            className="p-3 bg-rose-500/5 border border-rose-500/10 rounded-xl text-gray-500 hover:text-rose-400 hover:border-rose-500/30 transition-all"
                            title="Terminate Listing"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer Advice */}
        <div className="flex items-center gap-4 p-8 bg-brand-accent/5 rounded-[2.5rem] border border-brand-accent/10">
          <div className="p-4 bg-brand-accent/20 rounded-3xl">
            <Zap className="w-8 h-8 text-brand-accent" />
          </div>
          <div>
            <h4 className="text-white font-bold">Optimization Tip</h4>
            <p className="text-gray-500 text-sm">Vehicles with at least 15 photos sell 40% faster. Make sure your gallery is professionally shot.</p>
          </div>
          <button className="ml-auto hidden lg:flex items-center gap-2 text-brand-accent font-black text-[10px] uppercase tracking-widest hover:underline">
            View Performance Analytics
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}


