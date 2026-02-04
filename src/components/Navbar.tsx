'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/siteConfig';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

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
        { name: 'Wholesale', href: '/wholesale' },
        { name: 'Financing', href: '/financing' },
        { name: 'Sell/Trade', href: '/sell-trade' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 glass-nav' : 'py-4 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" prefetch={false} className="relative z-50 transition-transform hover:scale-105">
                            <span className="text-2xl font-bold font-display tracking-tighter text-white">
                                GS<span className="text-brand-accent">Motors</span>
                            </span>
                            {/* If you want to use an image logo later:
              <Image 
                src="/Logo.png" 
                alt={`${siteConfig.name} Logo`} 
                width={120} 
                height={40} 
                className="h-10 w-auto"
              />
              */}
                        </Link>

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

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link
                                href="/contact"
                                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-6 py-2.5 rounded-full shadow-lg shadow-brand-accent/20 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Book Viewing
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden relative z-50 p-2 text-white/80 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
                            </div>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-brand-darker/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center space-y-6 p-4">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-2xl font-bold font-display text-white/90 hover:text-brand-accent transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                            style={{ transitionDelay: `${idx * 100}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div
                        className={`mt-8 transform transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <Link
                            href="/contact"
                            className="btn-modern bg-brand-accent text-white px-8 py-4 rounded-full text-lg shadow-xl shadow-brand-accent/30"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Viewing
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
