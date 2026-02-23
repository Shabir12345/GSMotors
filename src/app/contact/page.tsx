import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/siteConfig';

export const metadata = {
    title: 'Contact Us - GSMotorsinc',
    description: 'Visit our showroom or contact our concierge team.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-dark pt-20 md:pt-28">
            <div className="container mx-auto px-4 section-padding">
                <div className="text-center mb-12 md:mb-20">
                    <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        Keep In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Touch</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Our specialized concierge team is ready to assist you with any inquiries regarding our premium inventory or services.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 max-w-7xl mx-auto overflow-visible">
                    {/* Contact Info */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-md hover:bg-white/[0.08] transition-all">
                                <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mb-4 block">Sales & Support</span>
                                <h3 className="text-xl font-bold text-white mb-2">{siteConfig.contact.phone}</h3>
                                <div className="space-y-1 pt-2">
                                    <p className="text-xs text-gray-400">Mon-Fri: 9am - 7pm</p>
                                    <p className="text-xs text-gray-400">Sat-Sun: By Appointment</p>
                                </div>
                            </div>
                            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl backdrop-blur-md hover:bg-white/[0.08] transition-all">
                                <span className="text-brand-highlight text-[10px] font-black uppercase tracking-widest mb-4 block">Direct Inquiries</span>
                                <h3 className="text-xl font-bold text-white mb-2 break-all">{siteConfig.contact.email}</h3>
                                <div className="space-y-1 pt-2">
                                    <p className="text-xs text-gray-400">Available 24/7 via Email</p>
                                    <p className="text-xs text-gray-400">Avg. response: <span className="text-white">1hr</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-3xl group relative">
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:filter-none transition-all duration-1000"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none">
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{siteConfig.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="order-1 lg:order-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>

    );
}
