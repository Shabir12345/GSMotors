import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/siteConfig';
import PageHero from '@/components/PageHero';

export const metadata = {
    title: 'Contact GS Motors | Schedule a Viewing or Ask a Question',
    description: 'Get in touch with GS Motors. Call, email, or stop by our showroom in Newcastle, ON. Open Mon–Fri 9am–7pm. Fast response guaranteed.',
};

const contactCards = [
    {
        label: 'Sales & Support',
        value: siteConfig.contact.phone,
        href: `tel:${siteConfig.contact.phone}`,
        hours: ['Mon–Fri: 9am – 7pm', 'Sat–Sun: By Appointment'],
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        accentClass: 'text-brand-accent',
    },
    {
        label: 'Email Us',
        value: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
        hours: ['Available 24/7', 'Avg. response: 1 hour'],
        icon: (
            <svg className="w-5 h-5 text-brand-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        accentClass: 'text-brand-highlight',
    },
];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="We're Here to Help"
                title={<>Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Touch</span></>}
                subtitle="Questions about our inventory, financing options, or trade-in valuations? Our friendly team is ready to help — reach out anytime."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]}
            />

            <div className="container mx-auto px-4 md:px-6 pb-20">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 max-w-7xl mx-auto">

                    {/* Left: Info + Map */}
                    <div className="space-y-6 order-2 lg:order-1">
                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactCards.map((card) => (
                                <a
                                    key={card.label}
                                    href={card.href}
                                    className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/15 rounded-2xl p-6 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        {card.icon}
                                    </div>
                                    <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${card.accentClass}`}>{card.label}</p>
                                    <p className="text-white font-bold text-base mb-3 break-all leading-tight">{card.value}</p>
                                    <div className="space-y-1">
                                        {card.hours.map((h) => (
                                            <p key={h} className="text-gray-500 text-xs">{h}</p>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Address Card */}
                        <div className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-brand-accent mb-2">Showroom Location</p>
                                    <p className="text-white font-semibold text-sm">{siteConfig.contact.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[280px] md:h-[360px] w-full rounded-2xl overflow-hidden border border-white/10 relative">
                            <iframe
                                src={siteConfig.contact.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={siteConfig.contact.mapTitle}
                            />
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="order-1 lg:order-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
