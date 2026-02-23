'use client';

// Admin Dashboard Layout

import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/siteConfig';
import Logo from './Logo';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check authentication
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/admin');
      return;
    }

    setUser(JSON.parse(userData));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    router.push('/admin');
  };

  if (!mounted || !user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/admin/vehicles', label: 'Vehicles', icon: '🚗' },
    { href: '/admin/vehicles/new', label: 'Add Vehicle', icon: '➕' },
    { href: '/admin/submissions', label: 'Form Submissions', icon: '📝' },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-darker/60 backdrop-blur-xl border-b border-white/5 h-20 flex items-center">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link href="/admin/dashboard" className="transition-transform hover:scale-105 -translate-y-[4mm]">
              <Logo className="text-xl sm:text-2xl" />
              <span className="hidden sm:inline-block ml-2 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest bg-brand-accent/20 text-brand-accent font-bold border border-brand-accent/20">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-2 hidden sm:flex">
              <span className="text-sm font-semibold text-white">{user.name}</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">{user.role}</span>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block"></div>

            <button
              onClick={handleLogout}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 transition-all duration-300 text-sm font-bold"
            >
              <span>Logout</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-20 left-0 z-40
          w-72 h-[calc(100vh-5rem)] 
          bg-brand-darker/40 backdrop-blur-md 
          border-r border-white/5
          transition-transform duration-500 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 h-full flex flex-col justify-between">
            <nav className="space-y-1.5">
              <div className="px-4 mb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Inventory Management</p>
                <p className="text-[10px] text-brand-accent font-black animate-pulse">SYSTEM UPDATED v2.0</p>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
                    ${pathname === item.href
                      ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20 shadow-[0_0_20px_rgba(255,59,48,0.05)]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                    }
                  `}
                >
                  <span className={`text-xl transition-transform group-hover:scale-110 ${pathname === item.href ? 'scale-110' : ''}`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-white/10">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-300 border border-transparent group"
              >
                <span className="text-xl transition-transform group-hover:-translate-x-1">🏠</span>
                <span className="font-medium">Back to Website</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-30"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 lg:p-12 min-h-[calc(100vh-5rem)]">
          <div className="max-w-[1400px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
