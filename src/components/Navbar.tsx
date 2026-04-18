'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import Logo from './Logo';
import { cn } from '@/lib/utils';

type NavItem = {
    name: string;
    href: string;
    submenu?: { name: string; href: string; desc?: string }[];
};

const navLinks: NavItem[] = [
    { name: 'Inventory', href: '/inventory' },
    {
        name: 'Locations',
        href: '/locations',
        submenu: [
            { name: 'All Locations', href: '/locations', desc: 'Cities we serve across Ontario' },
            { name: 'Newcastle', href: '/locations/newcastle', desc: 'Our dealership — Hwy 115' },
            { name: 'Bowmanville', href: '/locations/bowmanville', desc: '10 min from Newcastle' },
            { name: 'Oshawa', href: '/locations/oshawa', desc: '25 min — Durham Region hub' },
            { name: 'Whitby', href: '/locations/whitby', desc: '30 min from Newcastle' },
            { name: 'Ajax', href: '/locations/ajax', desc: '35 min from Newcastle' },
            { name: 'Toronto', href: '/locations/toronto', desc: '75 min — GTA delivery available' },
        ],
    },
    {
        name: 'Services',
        href: '/services',
        submenu: [
            { name: 'All Services', href: '/services', desc: 'Full range of vehicle services' },
            { name: 'Financing', href: '/financing', desc: 'Competitive rates & fast approval' },
            { name: 'Sell / Trade-In', href: '/sell-trade', desc: 'Get top dollar for your vehicle' },
            { name: 'Wholesale', href: '/wholesale', desc: 'Dealer direct pricing' },
            { name: 'Export', href: '/export', desc: 'International vehicle logistics' },
            { name: 'As-Is Vehicles', href: '/as-is', desc: 'Value pricing, sold as-is' },
        ],
    },
    {
        name: 'Company',
        href: '#',
        submenu: [
            { name: 'About Us', href: '/about-us', desc: 'Our story & team' },
            { name: 'Why Choose Us', href: '/why-choose-us', desc: 'What sets us apart' },
            { name: 'Certified Quality', href: '/insurance-certified', desc: '150-point inspection process' },
            { name: 'Testimonials', href: '/testimonials', desc: 'Real customer reviews' },
            { name: 'Guides', href: '/guides', desc: 'Car buying guides & tips' },
            { name: 'Blog', href: '/blog', desc: 'News & insights' },
            { name: 'FAQ', href: '/faq', desc: 'Common questions answered' },
            { name: 'Careers', href: '/careers', desc: 'Join the GSMotorsinc team' },
        ],
    },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const token = localStorage.getItem('authToken');
        setIsAdmin(!!token);

        const sentinel = document.getElementById('nav-sentinel');
        if (!sentinel) return;

        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                setIsScrolled(!entry.isIntersecting);
            }
        }, { threshold: 0 });

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenMobileSection(null);
    }, [pathname]);

    if (pathname?.startsWith('/admin')) return null;

    const toggleMobileSection = (name: string) => {
        setOpenMobileSection(prev => prev === name ? null : name);
    };

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    isScrolled ? 'py-2 glass-nav' : 'py-4 bg-transparent'
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <nav className="flex items-center justify-between gap-4">
                        {/* Logo */}
                        <Link href="/" prefetch={false} className="relative z-50 transition-transform hover:scale-105 flex items-center shrink-0">
                            <div className="h-12 md:h-16 flex items-center py-1">
                                <Logo className="text-3xl md:text-4xl" />
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.submenu ? (
                                        <button
                                            className={cn(
                                                'flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                                                'text-gray-300 hover:text-white hover:bg-white/10'
                                            )}
                                        >
                                            {link.name}
                                            <svg className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-200',
                                                pathname === link.href
                                                    ? 'text-white bg-white/10'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {/* Dropdown */}
                                    {link.submenu && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="w-64 rounded-2xl bg-[#0a0f1e]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
                                                <div className="p-2">
                                                    {link.submenu.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={cn(
                                                                'flex flex-col px-4 py-3 rounded-xl transition-all duration-150 group/item',
                                                                pathname === item.href
                                                                    ? 'bg-brand-accent/15 text-brand-accent'
                                                                    : 'hover:bg-white/5 text-gray-300 hover:text-white'
                                                            )}
                                                        >
                                                            <span className="font-semibold text-sm">{item.name}</span>
                                                            {item.desc && (
                                                                <span className="text-xs text-gray-500 group-hover/item:text-gray-400 mt-0.5">{item.desc}</span>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTAs */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Link
                                href="/admin"
                                className="text-gray-500 hover:text-brand-accent text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1.5"
                            >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                {isAdmin ? 'Dashboard' : 'Portal'}
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white text-sm px-5 py-2.5 rounded-full shadow-lg shadow-brand-accent/25 transition-all duration-300 hover:-translate-y-0.5 font-semibold"
                            >
                                Book Viewing
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="w-5 h-4 relative flex flex-col justify-between">
                                <span className={cn('block w-full h-0.5 bg-current rounded-full transition-all duration-400', isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : '')} />
                                <span className={cn('block w-full h-0.5 bg-current rounded-full transition-all duration-200', isMobileMenuOpen ? 'opacity-0 scale-x-0' : '')} />
                                <span className={cn('block w-full h-0.5 bg-current rounded-full transition-all duration-400', isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : '')} />
                            </div>
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out',
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                )}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-brand-darker/95 backdrop-blur-2xl" onClick={() => setIsMobileMenuOpen(false)} />

                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-highlight/5 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative h-full flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
                    {/* Nav Links */}
                    <div className="flex flex-col gap-1 flex-1">
                        {navLinks.map((link, idx) => (
                            <div
                                key={link.name}
                                className={cn(
                                    'transition-all duration-500',
                                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                )}
                                style={{ transitionDelay: `${idx * 60 + 150}ms` }}
                            >
                                {link.submenu ? (
                                    <div className="rounded-2xl overflow-hidden">
                                        <button
                                            onClick={() => toggleMobileSection(link.name)}
                                            className="w-full flex items-center justify-between px-5 py-4 text-left text-white font-bold text-lg hover:text-brand-accent transition-colors"
                                        >
                                            {link.name}
                                            <svg
                                                className={cn('w-5 h-5 text-white/30 transition-transform duration-300', openMobileSection === link.name ? 'rotate-180' : '')}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className={cn(
                                            'overflow-hidden transition-all duration-300',
                                            openMobileSection === link.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        )}>
                                            <div className="px-3 pb-3 space-y-1">
                                                {link.submenu.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex flex-col px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        <span className="text-white font-semibold text-sm">{item.name}</span>
                                                        {item.desc && <span className="text-gray-500 text-xs mt-0.5">{item.desc}</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="flex items-center px-5 py-4 text-white font-bold text-lg hover:text-brand-accent transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                                <div className="h-px bg-white/5 mx-2" />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Contact Info */}
                    <div
                        className={cn(
                            'mt-8 space-y-4 transition-all duration-500 delay-500',
                            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        )}
                    >
                        <div className="bg-white/5 rounded-2xl p-5 space-y-3 border border-white/5">
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.25em]">Quick Contact</p>
                            <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-white/80 hover:text-white font-medium text-sm transition-colors">
                                <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                {siteConfig.contact.phone}
                            </a>
                            <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-white/80 hover:text-white font-medium text-sm transition-colors">
                                <svg className="w-4 h-4 text-brand-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {siteConfig.contact.email}
                            </a>
                        </div>
                        <Link
                            href="/contact"
                            className="btn-modern bg-brand-accent text-white w-full py-4 rounded-2xl text-base font-bold shadow-xl shadow-brand-accent/20 active:scale-95 transition-all text-center block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book a Viewing
                        </Link>
                        <Link
                            href="/admin"
                            className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-brand-accent font-bold uppercase tracking-widest transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            {isAdmin ? 'Admin Dashboard' : 'Admin Portal'}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
