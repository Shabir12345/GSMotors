'use client';

// Vehicle Photo Management Page - Professional Redesign

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Upload,
  Trash2,
  Plus,
  AlertCircle,
  CheckCircle,
  Image as ImageIcon,
  Save,
  X,
  RefreshCw,
  Trophy
} from 'lucide-react';
import Link from 'next/link';

import AdminLayout from '@/components/AdminLayout';
import DraggablePhoto from '@/components/DraggablePhoto';
import { cn } from '@/lib/utils';
import { formatVehicleTitle } from '@/utils/formatters';

interface Photo {
  id: string;
  url: string;
  altText?: string;
  sortOrder: number;
  isPrimary: boolean;
  createdAt: string;
}

interface Vehicle {
  id: string;
  title: string;
  year: number;
  make: string;
  model: string;
  vin: string;
  trim?: string;
}

export default function VehiclePhotosPage() {
  const params = useParams();
  const router = useRouter();
  const vehicleId = params.id as string;

  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [savingOrder, setSavingOrder] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState({
    current: 0,
    total: 0,
    currentFileName: '',
  });
  const [deletingAll, setDeletingAll] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const fetchVehicle = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setVehicle(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch vehicle:', error);
    }
  }, [vehicleId]);

  const fetchPhotos = useCallback(async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/photos?vehicleId=${vehicleId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setPhotos(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch photos:', error);
    } finally {
      setLoading(false);
    }
  }, [vehicleId]);

  useEffect(() => {
    fetchVehicle();
    fetchPhotos();
  }, [fetchVehicle, fetchPhotos]);

  const movePhoto = useCallback((dragIndex: number, hoverIndex: number) => {
    setPhotos((prevPhotos) => {
      const newPhotos = [...prevPhotos];
      const draggedPhoto = newPhotos[dragIndex];
      newPhotos.splice(dragIndex, 1);
      newPhotos.splice(hoverIndex, 0, draggedPhoto);

      // Position #1 (index 0) always becomes primary dynamically
      return newPhotos.map((p, idx) => ({
        ...p,
        sortOrder: idx,
        isPrimary: idx === 0
      }));
    });
    setHasUnsavedChanges(true);
  }, []);

  const saveOrder = async () => {
    setSavingOrder(true);
    setError('');

    try {
      const token = localStorage.getItem('authToken');

      // We need to update each photo's sort order
      // For efficiency, we can do this in parallel, but better would be a bulk endpoint
      // Given your current API structure, we'll do sequential/parallel individual updates
      const updatePromises = photos.map((photo, index) =>
        fetch(`/api/admin/photos/${photo.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            sortOrder: index,
            isPrimary: index === 0 // Ensure index 0 is strictly primary on server
          }),
        })
      );

      await Promise.all(updatePromises);
      setHasUnsavedChanges(false);
      setSuccessMessage('Photo order saved successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      setError('Failed to save photo order');
    } finally {
      setSavingOrder(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    // Simple validation
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const maxSize = 20 * 1024 * 1024;

    for (const file of fileArray) {
      const fileName = file.name.toLowerCase();
      const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
      if (!hasValidExtension || file.size > maxSize) {
        setError(`Invalid file or file too large: ${file.name}`);
        return;
      }
    }

    setUploading(true);
    setError('');
    setUploadProgress({ current: 0, total: fileArray.length, currentFileName: '' });

    const token = localStorage.getItem('authToken');
    let successfulCount = 0;

    for (let i = 0; i < fileArray.length; i++) {
      const file = fileArray[i];
      setUploadProgress(prev => ({ ...prev, current: i, currentFileName: file.name }));

      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('vehicleId', vehicleId);

        const uploadResponse = await fetch('/api/admin/upload', {
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });

        const uploadData = await uploadResponse.json();
        if (uploadData.success) {
          // Create photo record
          await fetch('/api/admin/photos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              vehicleId,
              url: uploadData.data.url,
              altText: file.name,
              sortOrder: photos.length + successfulCount,
              isPrimary: photos.length === 0 && successfulCount === 0,
            }),
          });
          successfulCount++;
        }
      } catch (err) {
        console.error('Error uploading:', err);
      }
    }

    setUploading(false);
    setUploadProgress({ current: 0, total: 0, currentFileName: '' });
    fetchPhotos();
    if (successfulCount > 0) {
      setSuccessMessage(`Successfully uploaded ${successfulCount} photos`);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleSetPrimary = async (photoId: string) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/photos/${photoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isPrimary: true }),
      });

      if (response.ok) {
        // Move the newly primary photo to index 0 and reorder
        setPhotos(prev => {
          const photoIndex = prev.findIndex(p => p.id === photoId);
          if (photoIndex === -1) return prev;

          const newPhotos = [...prev];
          const [photo] = newPhotos.splice(photoIndex, 1);
          newPhotos.unshift(photo);

          return newPhotos.map((p, idx) => ({
            ...p,
            sortOrder: idx,
            isPrimary: idx === 0
          }));
        });
        setHasUnsavedChanges(true);
        setSuccessMessage('Primary photo updated and moved to first position');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error) {
      setError('Failed to set primary photo');
    }
  };

  const handleDeletePhoto = async (photoId: string) => {
    if (!confirm('Are you sure you want to delete this photo?')) return;

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/photos/${photoId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setPhotos(prev => prev.filter(p => p.id !== photoId));
      }
    } catch (error) {
      setError('Failed to delete photo');
    }
  };

  const handleDeleteAllPhotos = async () => {
    if (!confirm('Confirm DELETE ALL photos for this vehicle? This is permanent.')) return;

    setDeletingAll(true);
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/photos?vehicleId=${vehicleId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        setPhotos([]);
      }
    } catch (error) {
      setError('Failed to delete all photos');
    } finally {
      setDeletingAll(false);
    }
  };

  return (
    <AdminLayout>
      {/* FORCE REFRESH INDICATOR */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] px-6 py-2 bg-brand-accent text-white font-black text-[10px] rounded-full shadow-2xl animate-bounce">
        REDESIGNED MEDIA ENGINE ACTIVE v1.1
      </div>

      <div className="max-w-[1600px] mx-auto space-y-10">
        {/* Navigation & Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <Link
              href="/admin/vehicles"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-accent transition-colors text-sm font-bold uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" />
              Inventory List
            </Link>
            <div>
              <h1 className="text-4xl font-black text-white tracking-tight">Manage Media - REDESIGNED</h1>
              {vehicle && (
                <div className="flex items-center gap-3 mt-2">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-gray-400 border border-white/5 uppercase tracking-widest">
                    VIN: {vehicle.vin}
                  </span>
                  <div className="h-1 w-1 bg-gray-600 rounded-full" />
                  <p className="text-brand-accent font-black uppercase tracking-widest text-sm">
                    {formatVehicleTitle(vehicle.year, vehicle.make, vehicle.model, vehicle.trim)}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            {hasUnsavedChanges && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={saveOrder}
                disabled={savingOrder}
                className="btn-modern px-8 py-4 bg-brand-highlight hover:bg-green-500 text-white rounded-2xl gap-3 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              >
                {savingOrder ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                <span>Save New Order</span>
              </motion.button>
            )}

            <button
              onClick={handleDeleteAllPhotos}
              disabled={photos.length === 0 || deletingAll || uploading}
              className="px-6 py-4 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-2xl border border-rose-500/20 transition-all font-bold text-sm"
            >
              {deletingAll ? 'Deleting...' : 'Clear All'}
            </button>
          </div>
        </div>

        {/* Global Notifications */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-rose-500/10 border border-rose-500/20 text-rose-500 p-6 rounded-3xl flex items-center gap-4">
                <AlertCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-bold">{error}</span>
                <button onClick={() => setError('')} className="ml-auto hover:bg-rose-500/20 p-2 rounded-xl">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {successMessage && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-brand-highlight/10 border border-brand-highlight/20 text-brand-highlight p-6 rounded-3xl flex items-center gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <span className="font-bold">{successMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload Hub */}
        <div className="bg-white/5 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Upload className="w-48 h-48" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-black text-white">Upload New Photos</h2>
              <p className="text-gray-400 font-medium">
                Add high-quality photos of the vehicle. You can upload multiple files at once.
                The first photo you upload or select will automatically become the <span className="text-brand-accent">Primary image</span>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                  <ImageIcon className="w-3 h-3" /> JPG, PNG, WEBP
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-[10px] text-gray-500 uppercase font-black tracking-widest">
                  <Plus className="w-3 h-3" /> Multiple Files
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[400px]">
              <input
                type="file"
                multiple
                accept="image/*.heic,image/*.heif,image/jpeg,image/png,image/webp"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className={cn(
                  "relative group flex flex-col items-center justify-center gap-6 p-12 border-4 border-dashed rounded-[32px] transition-all cursor-pointer",
                  uploading ? "opacity-50 border-white/10" : "border-white/10 hover:border-brand-accent/50 hover:bg-brand-accent/5"
                )}
              >
                {!uploading ? (
                  <>
                    <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20 group-hover:scale-110 group-hover:bg-brand-accent/20 transition-all duration-500">
                      <Upload className="w-10 h-10 text-brand-accent" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-black uppercase tracking-widest text-sm">Drop files or click</p>
                      <p className="text-gray-500 text-xs mt-1">Maximum 20MB per file</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full space-y-6">
                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-brand-accent">
                      <span>Uploading...</span>
                      <span>{Math.round((uploadProgress.current / uploadProgress.total) * 100)}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        className="h-full bg-brand-accent"
                      />
                    </div>
                    <p className="text-gray-500 text-[10px] uppercase font-bold text-center truncate px-4">
                      {uploadProgress.currentFileName}
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        {/* Gallery Engine */}
        <div className="space-y-6">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Vehicle Gallery</h2>
              {photos.length > 0 && (
                <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-[10px] font-black uppercase tracking-widest rounded-full">
                  {photos.length} Photos
                </span>
              )}
            </div>
            {photos.length > 1 && (
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest hidden md:block">
                Drag to Reorder • Select Star for Primary
              </p>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="aspect-[4/3] bg-white/5 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : photos.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-20 text-center space-y-6"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
                <ImageIcon className="w-10 h-10 text-gray-700" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">No photos in gallery</h3>
                <p className="text-gray-500 max-w-sm mx-auto">Upload your first image to begin building the presentation for this listing.</p>
              </div>
            </motion.div>
          ) : (
            <DndProvider backend={HTML5Backend}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {photos.map((photo, index) => (
                  <DraggablePhoto
                    key={photo.id}
                    index={index}
                    photo={photo}
                    movePhoto={movePhoto}
                    onDelete={handleDeletePhoto}
                    onSetPrimary={handleSetPrimary}
                  />
                ))}
              </div>
            </DndProvider>
          )}
        </div>

        {/* Bulk Footer Action */}
        {hasUnsavedChanges && !savingOrder && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-8 left-0 right-0 z-50 px-4 pointer-events-none"
          >
            <div className="max-w-md mx-auto bg-brand-highlight/90 backdrop-blur-2xl border border-white/10 p-4 rounded-3xl shadow-2xl flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-3 pl-2">
                <Trophy className="w-5 h-5 text-white" />
                <span className="text-sm font-black text-white uppercase tracking-widest">Unsaved Changes</span>
              </div>
              <button
                onClick={saveOrder}
                className="px-6 py-3 bg-white text-brand-highlight hover:bg-gray-100 rounded-2xl font-black text-sm transition-all active:scale-95"
              >
                Sync to Server
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </AdminLayout>
  );
}
