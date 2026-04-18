'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/siteConfig';
import Logo from './Logo';

export default function Footer() {
    const [year, setYear] = useState<number>(2026);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    const navColumns = [
        {
            title: 'Inventory',
            links: [
                { name: 'Browse All Vehicles', href: '/inventory' },
                { name: 'As-Is Specials', href: '/as-is' },
                { name: 'Wholesale Portal', href: '/wholesale' },
                { name: 'Export Services', href: '/export' },
            ],
        },
        {
            title: 'Services',
            links: [
                { name: 'Auto Financing', href: '/financing' },
                { name: 'Sell / Trade-In', href: '/sell-trade' },
                { name: 'Certified Quality', href: '/insurance-certified' },
                { name: 'Get in Touch', href: '/contact' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/about-us' },
                { name: 'Why Choose Us', href: '/why-choose-us' },
                { name: 'Customer Reviews', href: '/testimonials' },
                { name: 'Blog & Guides', href: '/blog' },
                { name: 'FAQ', href: '/faq' },
                { name: 'Careers', href: '/careers' },
            ],
        },
    ];

    return (
        <footer className="relative bg-brand-darker pt-16 md:pt-20 pb-10 overflow-hidden border-t border-white/[0.06]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />
            {/* Glow orbs */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-highlight/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10 md:gap-12 mb-14">

                    {/* Brand Column — spans 2 on xl */}
                    <div className="xl:col-span-2 space-y-6">
                        <Link href="/" className="block w-fit">
                            <Logo className="text-3xl md:text-4xl" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                            {siteConfig.description}
                        </p>

                        {/* Contact quick info */}
                        <div className="space-y-3">
                            <a
                                href={`tel:${siteConfig.contact.phone}`}
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30 transition-all">
                                    <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                {siteConfig.contact.phone}
                            </a>
                            <a
                                href={`mailto:${siteConfig.contact.email}`}
                                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group"
                            >
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30 transition-all">
                                    <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                {siteConfig.contact.email}
                            </a>
                            <div className="flex items-start gap-3 text-gray-400 text-sm group">
                                <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30 transition-all">
                                    <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span className="leading-relaxed">{siteConfig.contact.address}</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 pt-1">
                            <a
                                href={siteConfig.social.facebook}
                                aria-label="Facebook"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a
                                href={siteConfig.social.instagram}
                                aria-label="Instagram"
                                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Nav Link Columns */}
                    {navColumns.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-white font-bold mb-5 text-sm tracking-widest uppercase">{col.title}</h3>
                            <ul className="space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-brand-accent transition-colors duration-200 flex items-center gap-2 text-sm group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* SEO Browse-by section */}
                <div className="border-t border-white/[0.06] pt-10 mb-10">
                    <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.25em] mb-6">Browse By</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Make</p>
                            <ul className="space-y-1.5">
                                {[
                                    { name: 'Mercedes-Benz', href: '/inventory/mercedes' },
                                    { name: 'BMW', href: '/inventory/bmw' },
                                    { name: 'Honda', href: '/inventory/honda' },
                                    { name: 'Toyota', href: '/inventory/toyota' },
                                    { name: 'Mazda', href: '/inventory/mazda' },
                                    { name: 'Hyundai', href: '/inventory/hyundai' },
                                    { name: 'Nissan', href: '/inventory/nissan' },
                                    { name: 'Subaru', href: '/inventory/subaru' },
                                    { name: 'Kia', href: '/inventory/kia' },
                                    { name: 'Ford', href: '/inventory/ford' },
                                ].map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-gray-500 hover:text-brand-accent transition-colors text-xs">{l.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Body Type</p>
                            <ul className="space-y-1.5">
                                {[
                                    { name: 'Sedans', href: '/inventory/body/sedan' },
                                    { name: 'SUVs', href: '/inventory/body/suv' },
                                    { name: 'Coupes', href: '/inventory/body/coupe' },
                                    { name: 'Hatchbacks', href: '/inventory/body/hatchback' },
                                    { name: 'Wagons', href: '/inventory/body/wagon' },
                                ].map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-gray-500 hover:text-brand-accent transition-colors text-xs">{l.name}</Link>
                                    </li>
                                ))}
                                <li className="pt-1">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2 mt-3">Price</p>
                                </li>
                                {[
                                    { name: 'Under $10,000', href: '/inventory/price/under-10k' },
                                    { name: '$10,000 – $15,000', href: '/inventory/price/10k-15k' },
                                    { name: '$15,000 – $20,000', href: '/inventory/price/15k-20k' },
                                    { name: '$20,000 – $25,000', href: '/inventory/price/20k-25k' },
                                    { name: '$25,000+', href: '/inventory/price/25k-plus' },
                                ].map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-gray-500 hover:text-brand-accent transition-colors text-xs">{l.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">City</p>
                            <ul className="space-y-1.5">
                                {[
                                    { name: 'Newcastle', href: '/locations/newcastle' },
                                    { name: 'Bowmanville', href: '/locations/bowmanville' },
                                    { name: 'Oshawa', href: '/locations/oshawa' },
                                    { name: 'Whitby', href: '/locations/whitby' },
                                    { name: 'Ajax', href: '/locations/ajax' },
                                    { name: 'Pickering', href: '/locations/pickering' },
                                    { name: 'Toronto', href: '/locations/toronto' },
                                    { name: 'Durham Region', href: '/locations/durham-region' },
                                ].map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-gray-500 hover:text-brand-accent transition-colors text-xs">{l.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Financing</p>
                            <ul className="space-y-1.5">
                                {[
                                    { name: 'Apply for Financing', href: '/financing/apply' },
                                    { name: 'Bad Credit', href: '/financing/bad-credit' },
                                    { name: 'No Credit', href: '/financing/no-credit' },
                                    { name: 'First-Time Buyer', href: '/financing/first-time-buyer' },
                                    { name: 'Newcomers to Canada', href: '/financing/newcomers' },
                                    { name: 'Self-Employed', href: '/financing/self-employed' },
                                ].map(l => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-gray-500 hover:text-brand-accent transition-colors text-xs">{l.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p suppressHydrationWarning className="font-medium">
                        &copy; {year} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="/faq" className="hover:text-brand-accent transition-colors">FAQ</Link>
                        <Link href="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-brand-accent transition-colors">Terms of Use</Link>
                        <Link href="/admin" className="hover:text-brand-accent transition-colors">Admin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
