'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { siteConfig } from '@/siteConfig';
import Logo from './Logo';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check for admin token
        const token = localStorage.getItem('authToken');
        setIsAdmin(!!token);

        const sentinel = document.getElementById('nav-sentinel');
        if (!sentinel) return;

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                // If sentinel is interacting (visible at top), we are NOT scrolled.
                // If sentinel is NOT intersecting (scrolled past), we ARE scrolled.
                setIsScrolled(!entry.isIntersecting);
            }
        }, { threshold: 0 });

        observer.observe(sentinel);

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Inventory', href: '/inventory' },
        { name: 'As Is', href: '/as-is' },
        { name: 'Export', href: '/export' },
        { name: 'Wholesale', href: '/wholesale' },
        { name: 'Financing', href: '/financing' },
        { name: 'Sell/Trade', href: '/sell-trade' },
        { name: 'Contact', href: '/contact' },
    ];

    if (pathname?.startsWith('/admin')) return null;

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-nav' : 'py-5 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" prefetch={false} className="relative z-50 transition-all hover:scale-105 flex items-center">
                            <div className="h-14 md:h-20 flex items-center py-1 -translate-y-[4mm]">
                                <Logo className="text-3xl md:text-4xl" />
                            </div>
                        </Link>
                        {/* If you want to use an image logo later:
              <Image 
                src="/Logo.png" 
                alt={`${siteConfig.name} Logo`} 
                width={120} 
                height={40} 
                className="h-10 w-auto"
              />
              */}
                        {/* ... commented out code ... */}

                        <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                href="/admin"
                                className="text-gray-400 hover:text-brand-accent text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group"
                            >
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>{isAdmin ? 'Dashboard' : 'Portal'}</span>
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-2.5 rounded-full shadow-lg shadow-brand-accent/20 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Book Viewing
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative">
                                <span className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-500 ${isMobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                                <span className={`absolute left-0 top-2 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
                                <span className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-500 ${isMobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
                            </div>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-brand-darker/98 backdrop-blur-2xl z-40 md:hidden transition-all duration-700 ease-in-out",
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                )}
            >
                {/* Decorative backgrounds */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-accent/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-highlight/10 rounded-full blur-[100px] animate-pulse delay-700" />

                <div className="h-full flex flex-col justify-between p-8 pt-24 overflow-y-auto">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "group flex items-center justify-between py-4 border-b border-white/5 text-2xl font-bold font-display transition-all duration-500",
                                    isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                                )}
                                style={{ transitionDelay: `${idx * 50 + 200}ms` }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="text-white group-hover:text-brand-accent group-active:text-brand-accent transition-colors">
                                    {link.name}
                                </span>
                                <svg
                                    className="w-6 h-6 text-white/20 group-hover:text-brand-accent transition-colors"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <div
                        className={cn(
                            "mt-12 space-y-8 transition-all duration-700 delay-500",
                            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        )}
                    >
                        <div className="flex flex-col gap-4">
                            <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">Quick Contact</p>
                            <a href={`tel:${siteConfig.contact.phone}`} className="text-lg text-white/80 hover:text-white font-medium">
                                {siteConfig.contact.phone}
                            </a>
                            <a href={`mailto:${siteConfig.contact.email}`} className="text-lg text-white/80 hover:text-white font-medium">
                                {siteConfig.contact.email}
                            </a>
                            <Link
                                href="/admin"
                                className="text-sm text-gray-400 hover:text-brand-accent font-bold uppercase tracking-widest mt-2 flex items-center gap-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                {isAdmin ? 'Admin Dashboard' : 'Admin Portal'}
                            </Link>
                        </div>

                        <Link
                            href="/contact"
                            className="btn-modern bg-brand-accent text-white w-full py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-brand-accent/20 active:scale-95 transition-all text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a viewing
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
}
