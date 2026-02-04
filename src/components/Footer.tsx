'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/siteConfig';

export default function Footer() {
    const [year, setYear] = useState<number>(2026);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setYear(new Date().getFullYear());
    }, []);

    // Use 2026 as default for server rendering to match client if possible, 
    // or just use suppressHydrationWarning on the year display.

    return (
        <footer className="relative bg-brand-darker pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            <span className="text-3xl font-bold font-display tracking-tighter text-white">
                                GS<span className="text-brand-accent">Motors</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {/* Social Placeholders */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-accent hover:scale-110 transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.451 2.535c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Navigation</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/inventory" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                                    Inventory
                                </Link>
                            </li>
                            <li>
                                <Link href="/wholesale" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                                    Wholesale
                                </Link>
                            </li>
                            <li>
                                <Link href="/financing" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                                    Financing
                                </Link>
                            </li>
                            <li>
                                <Link href="/sell-trade" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                                    Sell/Trade
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-brand-accent transition-colors flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent opacity-0 group-hover:opacity-100 mr-2 transition-all"></span>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-gray-400">
                                <svg className="w-5 h-5 text-brand-accent mt-1 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-brand-accent mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>{siteConfig.contact.phone}</span>
                            </li>
                            <li className="flex items-center text-gray-400">
                                <svg className="w-5 h-5 text-brand-accent mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>{siteConfig.contact.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Action */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Ready to Drive?</h3>
                        <p className="text-gray-400 mb-6">
                            Book a viewing today and experience the difference of a GS Motors vehicle.
                        </p>
                        <Link
                            href="/contact"
                            className="btn-modern bg-white/10 text-white w-full text-center block hover:bg-white/20 border border-white/10"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p suppressHydrationWarning>&copy; {year} {siteConfig.name}. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
