import { siteConfig } from '@/siteConfig';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <section className="section-padding bg-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                        <div>
                            <span className="text-brand-accent font-bold tracking-wider uppercase text-[10px] md:text-sm mb-2 block">Our Story</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 md:mb-6">
                                Your Trusted <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                                    Used Car Dealer.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                At {siteConfig.name}, we believe buying a used car should be straightforward and stress-free. Every vehicle in our lot is inspected before it goes on sale — no hidden surprises, no pressure tactics, just honest deals.
                            </p>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Our team is here to help you find the right car for your budget and lifestyle. From flexible financing options to fair trade-in valuations, we handle everything so you can drive away with confidence.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">10+</div>
                                <div className="text-xs md:text-sm text-gray-500 font-medium">Years Excellence</div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-xs md:text-sm text-gray-500 font-medium">Happy Clients</div>
                            </div>
                        </div>

                        <div className="pt-2 md:pt-4">
                            <Link
                                href="/contact"
                                className="text-white border-b border-brand-accent hover:border-white transition-colors pb-1 inline-flex items-center gap-2 font-bold text-sm md:text-base group"
                            >
                                Visit our showroom <span className="text-brand-accent group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[350px] md:h-[500px] w-full bg-gray-900 group">
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-700"
                            />

                            {/* Overlay Card - Hidden on very small screens or made more compact */}
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-brand-darker/90 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 shadow-lg scale-95 md:scale-100 transition-transform">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-white text-sm md:text-base mb-0.5 md:mb-1">Visit Us Today</h4>
                                        <p className="text-[10px] md:text-sm text-gray-400 mb-1 md:mb-2 truncate">{siteConfig.contact.address}</p>
                                        <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-accent hover:text-white text-[10px] md:text-sm font-bold transition-colors">
                                            {siteConfig.contact.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}
