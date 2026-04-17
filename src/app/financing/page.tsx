import FinancingForm from '@/components/FinancingForm';
import { siteConfig } from '@/siteConfig';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'Auto Financing | Competitive Rates & Fast Approval — GS Motors',
    description: 'Get approved for a quality pre-owned car with competitive rates from 2.9%, terms up to 84 months, and no pre-payment penalties. Apply online.',
};

const benefits = [
    { title: 'Rates from 2.9% APR', desc: 'We work with top lenders to find you the most competitive rate.' },
    { title: 'Terms up to 84 months', desc: 'Flexible repayment schedules to fit your monthly budget.' },
    { title: 'No pre-payment penalties', desc: 'Pay off early anytime — save on interest without fees.' },
    { title: 'Digital, paperless process', desc: 'Apply from home. Approvals in hours, not days.' },
    { title: 'All credit situations', desc: 'New credit, rebuilding, or established — we find solutions.' },
    { title: 'Lease options available', desc: 'Flexible lease programs on select inventory.' },
];

export default function FinancingPage() {
    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Flexible Auto Financing"
                title={<>Easy Auto <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Financing</span></>}
                subtitle="Get pre-approved in hours with competitive rates and flexible terms. We work with top lenders to find the best financing for your situation."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Financing', href: '/financing' }]}
            />

            <div className="container mx-auto px-4 md:px-6 pb-10">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-14 max-w-7xl mx-auto items-start">

                    {/* Left: Benefits */}
                    <div className="space-y-6">
                        <div className="bg-white/[0.04] border border-white/[0.07] rounded-3xl p-8">
                            <h2 className="text-xl font-bold text-white mb-6">Why Finance with GS Motors?</h2>
                            <div className="space-y-5">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{item.title}</p>
                                            <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="bg-gradient-to-br from-brand-accent/10 via-transparent to-transparent border border-brand-accent/20 rounded-3xl p-8">
                            <h3 className="text-white font-bold text-lg mb-6">How It Works</h3>
                            <div className="space-y-5">
                                {[
                                    { step: '1', label: 'Fill out the form', desc: 'Takes under 5 minutes online' },
                                    { step: '2', label: 'Get pre-approved', desc: 'Our team reviews within hours' },
                                    { step: '3', label: 'Pick your vehicle', desc: 'Browse our full inventory' },
                                    { step: '4', label: 'Drive away', desc: 'Complete the paperwork at the showroom' },
                                ].map((step) => (
                                    <div key={step.step} className="flex items-start gap-4">
                                        <div className="w-7 h-7 rounded-full bg-brand-accent text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                                            {step.step}
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{step.label}</p>
                                            <p className="text-gray-400 text-xs mt-0.5">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call CTA */}
                        <div className="flex items-center gap-4 p-5 bg-white/[0.04] border border-white/[0.07] rounded-2xl">
                            <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-0.5">Have questions? Call our finance team</p>
                                <a href={`tel:${siteConfig.contact.phone}`} className="text-white font-bold hover:text-brand-accent transition-colors text-sm">
                                    {siteConfig.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div>
                        <FinancingForm />
                    </div>
                </div>
            </div>

            <PageCTA
                title="Ready to Find Your Vehicle?"
                subtitle="Browse our certified pre-owned inventory and reserve the car you love."
                primaryLabel="Browse Inventory"
                secondaryLabel="Contact Sales"
            />
        </div>
    );
}
