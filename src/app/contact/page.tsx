import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/siteConfig';

export const metadata = {
    title: 'Contact Us - GS Motors Luxury',
    description: 'Visit our showroom or contact our concierge team.',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-dark pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Get In <span className="text-brand-accent">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Our team is ready to assist you with any questions about our inventory or services.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold text-white mb-1">Sales</h3>
                                <p className="text-brand-accent font-medium mb-2">{siteConfig.contact.phone}</p>
                                <p className="text-sm text-gray-400">Mon-Fri: 9am - 7pm</p>
                                <p className="text-sm text-gray-400">Sat: 10am - 6pm</p>
                                <p className="text-sm text-gray-400">Sun: By Appointment</p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold text-white mb-1">Service</h3>
                                <p className="text-brand-accent font-medium mb-2">{siteConfig.contact.email}</p>
                                <p className="text-sm text-gray-400">24/7 Email Support</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-white/10">
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="text-center lg:text-left">
                            <h3 className="text-xl font-bold text-white mb-2">Visit Our Showroom</h3>
                            <p className="text-gray-400">{siteConfig.contact.address}</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
