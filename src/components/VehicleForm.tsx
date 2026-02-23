'use client';

// Vehicle Form Component (Create/Edit)

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Save,
  X,
  Car,
  Settings,
  DollarSign,
  Eye,
  Palette,
  FileText,
  Zap,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Activity,
  Box,
  Fingerprint,
  Gauge,
  Info,
  Warehouse,
  History,
  ShieldCheck,
  Globe,
  Tag,
  Sparkles,
  Layout,
  Link as LinkIcon
} from 'lucide-react';

type VehicleFormProps = {
  vehicle?: any;
  isEdit?: boolean;
};

export default function VehicleForm({ vehicle, isEdit = false }: VehicleFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    vin: vehicle?.vin || '',
    stockNumber: vehicle?.stockNumber || '',
    year: vehicle?.year || new Date().getFullYear(),
    make: vehicle?.make || '',
    model: vehicle?.model || '',
    trim: vehicle?.trim || '',
    bodyType: vehicle?.bodyType || '',
    drivetrain: vehicle?.drivetrain || '',
    fuelType: vehicle?.fuelType || '',
    transmission: vehicle?.transmission || '',
    engine: vehicle?.engine || '',
    cylinders: vehicle?.cylinders || '',
    odometerKm: vehicle?.odometerKm || '',
    priceCents: vehicle?.priceCents ? vehicle.priceCents / 100 : '',
    status: vehicle?.status || 'AVAILABLE',
    exteriorColor: vehicle?.exteriorColor || '',
    interiorColor: vehicle?.interiorColor || '',
    title: vehicle?.title || '',
    description: vehicle?.description || '',
    carfaxUrl: vehicle?.carfaxUrl || '',
    isFeatured: vehicle?.isFeatured || false,
    isAsIs: vehicle?.isAsIs || false,
    isExport: vehicle?.isExport || false,
    isWholesale: vehicle?.isWholesale || false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as any;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');

      // Convert price to cents and clean up empty strings
      const data: any = {
        vin: formData.vin,
        year: parseInt(formData.year as any),
        make: formData.make,
        model: formData.model,
        title: formData.title,
        odometerKm: parseInt(formData.odometerKm as any),
        priceCents: Math.round(parseFloat(formData.priceCents as any) * 100),
        status: formData.status,
        isFeatured: formData.isFeatured,
        isAsIs: formData.isAsIs,
        isExport: formData.isExport,
        isWholesale: formData.isWholesale,
      };

      // Only include optional fields if they have values
      if (formData.stockNumber) data.stockNumber = formData.stockNumber;
      if (formData.trim) data.trim = formData.trim;
      if (formData.bodyType) data.bodyType = formData.bodyType;
      if (formData.drivetrain) data.drivetrain = formData.drivetrain;
      if (formData.fuelType) data.fuelType = formData.fuelType;
      if (formData.transmission) data.transmission = formData.transmission;
      if (formData.engine) data.engine = formData.engine;
      if (formData.cylinders) data.cylinders = parseInt(formData.cylinders as any);
      if (formData.exteriorColor) data.exteriorColor = formData.exteriorColor;
      if (formData.interiorColor) data.interiorColor = formData.interiorColor;
      if (formData.description) data.description = formData.description;
      if (formData.carfaxUrl) data.carfaxUrl = formData.carfaxUrl;

      const url = isEdit ? `/api/admin/vehicles/${vehicle.id}` : '/api/admin/vehicles';
      const method = isEdit ? 'PATCH' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        router.push('/admin/vehicles');
      } else {
        setError(result.error || 'Failed to save vehicle');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 pb-12">
      {error && (
        <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 px-8 py-6 rounded-[2rem] flex items-center gap-4 animate-shake shadow-2xl shadow-rose-500/5 backdrop-blur-xl">
          <div className="p-3 bg-rose-500/20 rounded-2xl">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Submission Error</span>
            <span className="font-bold text-lg">{error}</span>
          </div>
        </div>
      )}

      {/* Identity & Core */}
      <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Fingerprint className="w-40 h-40 text-white" strokeWidth={1} />
        </div>
        <div className="mb-10 flex items-center gap-6">
          <div className="p-4 bg-brand-accent/20 rounded-2xl text-brand-accent">
            <Car className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter">Identity & Core</h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Vehicle Identification Master Data</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3 lg:col-span-2">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Vehicle Listing Title <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g. 2024 Honda Civic Sport Touring"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 text-lg font-bold"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              VIN Number <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
              required
              maxLength={17}
              placeholder="17-DIGIT IDENTIFIER"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all font-mono uppercase placeholder:text-gray-700 tracking-widest"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Stock Number</label>
            <input
              type="text"
              name="stockNumber"
              value={formData.stockNumber}
              onChange={handleChange}
              placeholder="GS-XXXX"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Model Year <span className="text-brand-accent">*</span>
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              min="1900"
              max={new Date().getFullYear() + 2}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all font-bold"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Manufacturer <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleChange}
              required
              placeholder="e.g. BMW"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Model Designation <span className="text-brand-accent">*</span>
            </label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
              placeholder="e.g. M3"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Series / Trim</label>
            <input
              type="text"
              name="trim"
              value={formData.trim}
              onChange={handleChange}
              placeholder="e.g. Competition"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Performance Core */}
      <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Settings className="w-40 h-40 text-white" strokeWidth={1} />
        </div>
        <div className="mb-10 flex items-center gap-6">
          <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400">
            <Activity className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter">Performance Core</h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Technical Calibration & Specifications</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Body Architecture</label>
            <select
              name="bodyType"
              value={formData.bodyType}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all appearance-none cursor-pointer font-bold"
            >
              <option value="" className="bg-brand-dark">Select configuration...</option>
              <option value="SEDAN" className="bg-brand-dark">Sedan</option>
              <option value="COUPE" className="bg-brand-dark">Coupe</option>
              <option value="HATCHBACK" className="bg-brand-dark">Hatchback</option>
              <option value="WAGON" className="bg-brand-dark">Wagon</option>
              <option value="SUV" className="bg-brand-dark">SUV</option>
              <option value="TRUCK" className="bg-brand-dark">Truck</option>
              <option value="VAN" className="bg-brand-dark">Van / Minivan</option>
              <option value="CONVERTIBLE" className="bg-brand-dark">Convertible</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Drive System</label>
            <select
              name="drivetrain"
              value={formData.drivetrain}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all appearance-none cursor-pointer font-bold"
            >
              <option value="" className="bg-brand-dark">Select drivetrain...</option>
              <option value="FWD" className="bg-brand-dark">Front-Wheel Drive</option>
              <option value="RWD" className="bg-brand-dark">Rear-Wheel Drive</option>
              <option value="AWD" className="bg-brand-dark">All-Wheel Drive</option>
              <option value="FOUR_WD" className="bg-brand-dark">4-Wheel Drive</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Energy Source</label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all appearance-none cursor-pointer font-bold"
            >
              <option value="" className="bg-brand-dark">Select energy source...</option>
              <option value="GASOLINE" className="bg-brand-dark">Gasoline</option>
              <option value="DIESEL" className="bg-brand-dark">Diesel</option>
              <option value="HYBRID" className="bg-brand-dark">Hybrid</option>
              <option value="ELECTRIC" className="bg-brand-dark">Electric</option>
              <option value="PLUG_IN_HYBRID" className="bg-brand-dark">Plug-in Hybrid</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Transmission</label>
            <select
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all appearance-none cursor-pointer font-bold"
            >
              <option value="" className="bg-brand-dark">Select transmission...</option>
              <option value="AUTOMATIC" className="bg-brand-dark">Automatic</option>
              <option value="MANUAL" className="bg-brand-dark">Manual</option>
              <option value="CVT" className="bg-brand-dark">CVT</option>
              <option value="DCT" className="bg-brand-dark">Dual-Clutch</option>
            </select>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Engine Unit</label>
            <input
              type="text"
              name="engine"
              value={formData.engine}
              onChange={handleChange}
              placeholder="e.g. 2.0L I4 Turbo"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Cylinder Count</label>
            <input
              type="number"
              name="cylinders"
              value={formData.cylinders}
              onChange={handleChange}
              placeholder="0"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all font-bold"
            />
          </div>
        </div>
      </section>

      {/* Market & Logistics */}
      <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <DollarSign className="w-40 h-40 text-white" strokeWidth={1} />
        </div>
        <div className="mb-10 flex items-center gap-6">
          <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400">
            <DollarSign className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter">Market & Logistics</h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Valuation, Usage & Lifecycle</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Listing Price (CAD) <span className="text-brand-accent">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500 font-bold">$</span>
              <input
                type="number"
                name="priceCents"
                value={formData.priceCents}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                placeholder="0.00"
                className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all tabular-nums placeholder:text-gray-700 text-lg font-bold"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
              Odometer Reading <span className="text-brand-accent">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                name="odometerKm"
                value={formData.odometerKm}
                onChange={handleChange}
                required
                min="0"
                placeholder="0"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all tabular-nums placeholder:text-gray-700 font-bold"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 text-[10px] font-black uppercase tracking-widest">KM</span>
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Lifecycle Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all appearance-none cursor-pointer font-bold"
            >
              <option value="DRAFT" className="bg-brand-dark">Draft (Internal)</option>
              <option value="AVAILABLE" className="bg-brand-dark">Active Inventory</option>
              <option value="PENDING" className="bg-brand-dark">Pending Transaction</option>
              <option value="SOLD" className="bg-brand-dark">Sold / Archived</option>
            </select>
          </div>
        </div>
      </section>

      {/* Visibility & Classification */}
      <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Tag className="w-40 h-40 text-white" strokeWidth={1} />
        </div>
        <div className="mb-10 flex items-center gap-6">
          <div className="p-4 bg-amber-500/20 rounded-2xl text-amber-400">
            <Layout className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter">Visibility & Flags</h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Strategic Placement & Classification</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: 'isFeatured', label: 'Featured Unit', sub: 'Home Spotlight', icon: Sparkles, color: 'text-yellow-400' },
            { id: 'isAsIs', label: "Sold 'As Is'", sub: 'No Warranty', icon: AlertCircle, color: 'text-orange-400' },
            { id: 'isExport', label: 'Export Ready', sub: 'Global Market', icon: Globe, color: 'text-blue-400' },
            { id: 'isWholesale', label: 'Wholesale', sub: 'Dealer Only', icon: Warehouse, color: 'text-purple-400' },
          ].map((flag) => (
            <label key={flag.id} className="relative group cursor-pointer">
              <input
                type="checkbox"
                name={flag.id}
                checked={(formData as any)[flag.id]}
                onChange={handleChange}
                className="peer sr-only"
              />
              <div className="p-6 bg-white/5 border border-white/10 rounded-[1.5rem] transition-all peer-checked:bg-white/10 peer-checked:border-brand-accent/50 hover:bg-white/[0.07]">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${flag.color}`}>
                    <flag.icon className="w-5 h-5" />
                  </div>
                  <div className="w-10 h-6 bg-white/10 rounded-full relative transition-all peer-checked:bg-brand-accent">
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all ${(formData as any)[flag.id] ? 'translate-x-4' : ''}`} />
                  </div>
                </div>
                <span className="block text-sm font-black text-white uppercase tracking-tight">{flag.label}</span>
                <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none">{flag.sub}</span>
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* Aesthetics & Atmosphere */}
      <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Palette className="w-40 h-40 text-white" strokeWidth={1} />
        </div>
        <div className="mb-10 flex items-center gap-6">
          <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400">
            <Palette className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter">Aesthetics & Finish</h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Visual Configuration & Palette</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Exterior Finish</label>
            <input
              type="text"
              name="exteriorColor"
              value={formData.exteriorColor}
              onChange={handleChange}
              placeholder="e.g. Sonic Gray Pearl"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Interior Material</label>
            <input
              type="text"
              name="interiorColor"
              value={formData.interiorColor}
              onChange={handleChange}
              placeholder="e.g. Black Leather"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 font-bold"
            />
          </div>
        </div>
      </section>

      {/* Storytelling & Narrative */}
      <section className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <FileText className="w-40 h-40 text-white" strokeWidth={1} />
        </div>
        <div className="mb-10 flex items-center gap-6">
          <div className="p-4 bg-rose-500/20 rounded-2xl text-rose-400">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter">Listing Narrative</h3>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Marketing Copy & Digital Assets</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Marketing Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              placeholder="Describe the vehicle's features, history, and unique selling points..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 resize-none leading-relaxed"
            />
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Carfax History Link</label>
            <div className="relative group/input">
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within/input:text-brand-accent">
                <LinkIcon className="w-5 h-5" />
              </span>
              <input
                type="url"
                name="carfaxUrl"
                value={formData.carfaxUrl}
                onChange={handleChange}
                placeholder="https://www.carfax.com/vehicle-report/..."
                className="w-full pl-14 pr-6 py-4 bg-white/5 border border-white/10 rounded-[1.25rem] text-white focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all placeholder:text-gray-700 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Control Center / Actions */}
      <div className="sticky bottom-8 z-40 bg-brand-darker/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-4 shadow-[0_-20px_80px_rgba(0,0,0,0.6)] flex items-center justify-between gap-6 ring-1 ring-white/5">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-10 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-[10px] transition-all border border-white/5 active:scale-95"
        >
          Discard Changes
        </button>
        <div className="flex items-center gap-6">
          {!isEdit && (
            <p className="hidden md:flex items-center gap-2 text-[10px] text-gray-500 font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
              Asset gallery opens after deployment
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="group relative px-12 py-5 bg-brand-accent hover:bg-brand-accent-glow text-white rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-[0_0_40px_rgba(var(--brand-accent-rgb),0.3)] disabled:grayscale disabled:opacity-50 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative flex items-center gap-3">
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  Synchronizing...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  {isEdit ? 'Update Vehicle Master' : 'Deploy Listing'}
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
