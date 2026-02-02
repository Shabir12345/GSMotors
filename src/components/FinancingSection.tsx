'use client';

import Link from 'next/link';
import Image from 'next/image';
import FinancingForm from './FinancingForm';

export default function FinancingSection() {
    return (
        <section id="financing" className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-highlight/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
                            <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            <span className="text-sm font-medium text-gray-300">Flexible Financing Options</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Drive Your Dream Car <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-glow">
                                Without The Hassle.
                            </span>
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            We offer bespoke financing packages tailored to your unique financial situation. Whether you are looking for low interest rates, extended terms, or lease options, our finance specialists are here to structure the perfect deal for you.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {[
                                { title: 'Competitive Rates', desc: 'Starting as low as 2.9% APR for qualified buyers.' },
                                { title: 'Quick Approval', desc: 'Get pre-approved in minutes with our secure online application.' },
                                { title: 'All Credit Types', desc: 'We work with a network of premium lenders to find solutions for every credit profile.' },
                                { title: 'Trade-In Valuations', desc: 'Top dollar for your current vehicle to lower your payments.' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-3">
                                    <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/financing"
                            className="btn-modern bg-white text-brand-dark hover:bg-gray-100 px-8 py-3.5 rounded-full font-bold shadow-lg shadow-white/10 transition-transform hover:-translate-y-1"
                        >
                            Apply for Financing
                        </Link>
                    </div>

                    {/* Functional Form */}
                    <div className="w-full md:w-1/2 relative">
                        <FinancingForm />

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/20 blur-[100px] -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
