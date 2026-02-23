'use client';

// Modern Admin Dashboard

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import Link from 'next/link';

interface DashboardStats {
  totalVehicles: number;
  availableVehicles: number;
  pendingVehicles: number;
  soldVehicles: number;
  draftVehicles: number;
  totalValue: number;
  averagePrice: number;
  recentVehicles: any[];
  recentActivity: any[];
  asIsVehicles: number;
  exportVehicles: number;
  wholesaleVehicles: number;
  featuredVehicles: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem('authToken');

      // Fetch vehicles
      const vehiclesResponse = await fetch('/api/admin/vehicles?perPage=1000', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const vehiclesData = await vehiclesResponse.json();

      if (!vehiclesData.success) {
        throw new Error('Failed to fetch vehicles');
      }

      const vehicles = vehiclesData.data.data;

      // Calculate stats
      const totalVehicles = vehicles.length;
      const availableVehicles = vehicles.filter((v: any) => v.status === 'AVAILABLE').length;
      const pendingVehicles = vehicles.filter((v: any) => v.status === 'PENDING').length;
      const soldVehicles = vehicles.filter((v: any) => v.status === 'SOLD').length;
      const draftVehicles = vehicles.filter((v: any) => v.status === 'DRAFT').length;

      const asIsVehicles = vehicles.filter((v: any) => v.isAsIs).length;
      const exportVehicles = vehicles.filter((v: any) => v.isExport).length;
      const wholesaleVehicles = vehicles.filter((v: any) => v.isWholesale).length;
      const featuredVehicles = vehicles.filter((v: any) => v.isFeatured).length;

      const totalValue = vehicles.reduce((sum: number, v: any) => sum + v.priceCents, 0);
      const averagePrice = totalVehicles > 0 ? totalValue / totalVehicles : 0;

      // Recent vehicles (last 5)
      const recentVehicles = vehicles
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 5);

      // Derive recent activity from vehicles
      const recentActivity = recentVehicles.map((v: any) => ({
        id: `activity-${v.id}`,
        type: 'listing-created',
        title: 'New Listing Created',
        description: `${v.year} ${v.make} ${v.model} added to inventory`,
        timestamp: v.createdAt,
        user: 'Admin',
      }));

      // Add a few placeholder/system activities if none exist to keep the UI looking alive
      if (recentActivity.length < 3) {
        recentActivity.push({
          id: 'sys-1',
          type: 'system',
          title: 'System Initialized',
          description: 'Premium Admin Panel successfully deployed',
          timestamp: new Date().toISOString(),
          user: 'System',
        });
      }

      setStats({
        totalVehicles,
        availableVehicles,
        pendingVehicles,
        soldVehicles,
        draftVehicles,
        asIsVehicles,
        exportVehicles,
        wholesaleVehicles,
        featuredVehicles,
        totalValue,
        averagePrice,
        recentVehicles,
        recentActivity: recentActivity.sort((a: any) => new Date(a.timestamp).getTime()),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load dashboard');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (cents: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="text-white">Loading dashboard...</div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded">
          {error}
        </div>
      </AdminLayout>
    );
  }

  if (!stats) return null;

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-2">Welcome back! Here's what's happening with your inventory.</p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/admin/vehicles/new"
              className="btn-modern flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Vehicle
            </Link>
            <Link
              href="/admin/vehicles"
              className="btn-outline-modern"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-blue-100 text-[10px] uppercase tracking-widest font-bold mb-1">Total Inventory</p>
                <p className="text-4xl font-black">{stats.totalVehicles}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-xl shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-emerald-100 text-[10px] uppercase tracking-widest font-bold mb-1">Available</p>
                <p className="text-4xl font-black">{stats.availableVehicles}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-6 text-white shadow-xl shadow-amber-900/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-amber-100 text-[10px] uppercase tracking-widest font-bold mb-1">Pending Deals</p>
                <p className="text-4xl font-black">{stats.pendingVehicles}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden bg-gradient-to-br from-rose-600 to-rose-800 rounded-2xl p-6 text-white shadow-xl shadow-rose-900/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-rose-100 text-[10px] uppercase tracking-widest font-bold mb-1">Sold Total</p>
                <p className="text-4xl font-black">{stats.soldVehicles}</p>
              </div>
              <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Special Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Featured Units</p>
                <p className="text-3xl font-black text-amber-400">{stats.featuredVehicles}</p>
              </div>
              <div className="text-2xl opacity-50 transition-transform group-hover:scale-110">⭐</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">'As Is' Units</p>
                <p className="text-3xl font-black text-amber-500">{stats.asIsVehicles}</p>
              </div>
              <div className="text-2xl opacity-50 transition-transform group-hover:scale-110">🛠️</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Export Ready</p>
                <p className="text-3xl font-black text-indigo-400">{stats.exportVehicles}</p>
              </div>
              <div className="text-2xl opacity-50 transition-transform group-hover:scale-110">🚢</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/10 group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-1">Wholesale Only</p>
                <p className="text-3xl font-black text-brand-accent">{stats.wholesaleVehicles}</p>
              </div>
              <div className="text-2xl opacity-50 transition-transform group-hover:scale-110">🏢</div>
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <svg className="w-24 h-24 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Inventory Value</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-5xl font-black text-white tracking-tighter tabular-nums">
                  {formatPrice(stats.totalValue).split('.')[0]}
                  <span className="text-xl text-emerald-400 opacity-80">.{formatPrice(stats.totalValue).split('.')[1]}</span>
                </p>
                <p className="text-gray-500 text-sm mt-3 font-medium">Estimated asset value of current stock</p>
              </div>
              <div className="bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/20">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <svg className="w-24 h-24 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Average Listing</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-5xl font-black text-white tracking-tighter tabular-nums">
                  {formatPrice(stats.averagePrice).split('.')[0]}
                  <span className="text-xl text-blue-400 opacity-80">.{formatPrice(stats.averagePrice).split('.')[1]}</span>
                </p>
                <p className="text-gray-500 text-sm mt-3 font-medium">Average price per vehicle in stock</p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Vehicles & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Recent Vehicles</h3>
                <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mt-1">Latest inventory updates</p>
              </div>
              <Link href="/admin/vehicles" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-brand-accent text-sm font-bold border border-white/5 transition-all">
                View all
              </Link>
            </div>

            {stats.recentVehicles.length === 0 ? (
              <div className="text-center py-12 bg-white/5 rounded-2xl border border-dashed border-white/10">
                <div className="text-gray-600 mb-4 flex justify-center">
                  <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-gray-400 font-medium">No vehicles in inventory yet</p>
                <Link href="/admin/vehicles/new" className="text-brand-accent hover:text-brand-accent-glow text-sm font-bold mt-2 inline-block">
                  Add your first vehicle
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {stats.recentVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xl group-hover:scale-110 transition-transform">
                        🚗
                      </div>
                      <div>
                        <p className="text-white font-bold group-hover:text-brand-accent transition-colors">{vehicle.title}</p>
                        <p className="text-gray-500 text-xs font-mono tracking-tighter uppercase">{vehicle.year} • {vehicle.make} • {vehicle.model}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-black tabular-nums">{formatPrice(vehicle.priceCents)}</p>
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest mt-1 ${vehicle.status === 'AVAILABLE' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                        vehicle.status === 'PENDING' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
                          vehicle.status === 'SOLD' ? 'bg-rose-500/10 text-rose-500 border border-rose-500/20' :
                            'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                        {vehicle.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-white tracking-tight mb-8">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link
                href="/admin/vehicles/new"
                className="flex items-center gap-4 p-5 bg-brand-accent/10 hover:bg-brand-accent/20 border border-brand-accent/20 rounded-2xl transition-all duration-300 group shadow-lg shadow-brand-accent/5"
              >
                <div className="bg-brand-accent rounded-xl p-3 text-white shadow-lg shadow-brand-accent/20 transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Add New Listing</p>
                  <p className="text-gray-500 text-sm">List a new vehicle in your inventory</p>
                </div>
                <svg className="w-5 h-5 text-brand-accent ml-auto transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/admin/vehicles"
                className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group"
              >
                <div className="bg-white/10 rounded-xl p-3 text-white transition-transform group-hover:scale-110 border border-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Inventory Manager</p>
                  <p className="text-gray-500 text-sm">View and manage all existing listings</p>
                </div>
                <svg className="w-5 h-5 text-gray-600 ml-auto transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                href="/"
                className="flex items-center gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 group"
              >
                <div className="bg-white/10 rounded-xl p-3 text-white transition-transform group-hover:scale-110 border border-white/5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Public Showcase</p>
                  <p className="text-gray-500 text-sm">View your website as a customer</p>
                </div>
                <svg className="w-5 h-5 text-gray-600 ml-auto transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}