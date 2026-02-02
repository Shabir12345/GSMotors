import { siteConfig } from '@/siteConfig';
import Link from 'next/link';

export default function AboutUs() {
    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-full bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                                Redefining the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-white">
                                    Luxury Experience.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                At {siteConfig.name}, we believe that buying a luxury vehicle should be as exceptional as the car itself. Established with a passion for automotive excellence, we curate only the finest pre-owned vehicles, ensuring that every car in our showroom meets the highest standards of quality and performance.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our team of dedicated professionals is committed to providing a transparent, personalized, and stress-free experience. From our meticulously inspected inventory to our bespoke financing solutions, we are here to help you find the perfect vehicle that matches your lifestyle.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-3xl font-bold text-white mb-1">10+</div>
                                <div className="text-sm text-gray-400">Years of Excellence</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <div className="text-3xl font-bold text-white mb-1">500+</div>
                                <div className="text-sm text-gray-400">Happy Clients</div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="text-white border-b border-brand-accent hover:border-white transition-colors pb-1 inline-flex items-center gap-2"
                            >
                                Visit our showroom <span className="text-brand-accent">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[500px] w-full bg-gray-900 group">
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:filter-none transition-all duration-700"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-brand-darker/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Visit Us Today</h4>
                                        <p className="text-sm text-gray-400 mb-2">{siteConfig.contact.address}</p>
                                        <a href={`tel:${siteConfig.contact.phone}`} className="text-brand-accent hover:text-white text-sm font-medium transition-colors">
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
