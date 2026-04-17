import Link from 'next/link';

interface PageCTAProps {
    title: string;
    subtitle?: string;
    primaryHref?: string;
    primaryLabel?: string;
    secondaryHref?: string;
    secondaryLabel?: string;
}

export default function PageCTA({
    title,
    subtitle,
    primaryHref = '/inventory',
    primaryLabel = 'Browse Inventory',
    secondaryHref = '/contact',
    secondaryLabel = 'Contact Us',
}: PageCTAProps) {
    return (
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-accent/10 via-transparent to-brand-highlight/10 border border-white/10 p-10 md:p-14 text-center overflow-hidden">
                {/* Decorative blur */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-64 h-64 bg-brand-accent/10 rounded-full blur-[80px]" />
                </div>

                <div className="relative z-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h2>
                    {subtitle && (
                        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-base md:text-lg">{subtitle}</p>
                    )}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={primaryHref}
                            className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-brand-accent/25 text-sm"
                        >
                            {primaryLabel}
                        </Link>
                        <Link
                            href={secondaryHref}
                            className="btn-modern bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 text-sm"
                        >
                            {secondaryLabel}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
