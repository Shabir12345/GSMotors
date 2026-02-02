import FinancingForm from '@/components/FinancingForm';

export const metadata = {
    title: 'Financing - GS Motors Luxury',
    description: 'Flexible financing options for your dream car. Apply online securely.',
};

export default function FinancingPage() {
    return (
        <div className="min-h-screen bg-brand-dark pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Financing Made <span className="text-brand-accent">Simple</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        We work with premium lenders to secure the best rates and terms for your unique situation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-4">Why Finance With Us?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Competitive rates starting at 2.9%",
                                    "Terms up to 84 months",
                                    "Lease options available",
                                    "No pre-payment penalties",
                                    "Digital, paperless process"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-green-500">✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-accent/10 to-transparent border border-brand-accent/20">
                            <h3 className="text-xl font-bold text-white mb-2">Have Questions?</h3>
                            <p className="text-gray-400 mb-4">Our finance managers are available to discuss your options.</p>
                            <a href="tel:5559876543" className="text-brand-accent font-bold hover:text-white transition-colors">
                                Call (555) 987-6543
                            </a>
                        </div>
                    </div>

                    <div>
                        <FinancingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
