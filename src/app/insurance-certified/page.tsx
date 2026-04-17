import Link from 'next/link';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'Certified Pre-Owned Quality | 150-Point Inspections & Warranty — GS Motors',
    description: 'Every GS Motors vehicle passes a rigorous 150-point inspection by certified technicians. Three certification tiers with full warranty coverage.',
};

const inspectionCategories = [
    {
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
        ),
        title: 'Engine & Mechanical',
        points: ['Complete engine diagnostic check', 'Transmission fluid condition & performance', 'Oil, filters, and fluid levels', 'Belt and hose condition', 'Cooling system integrity', 'Battery health and charge'],
    },
    {
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Suspension & Steering',
        points: ['Suspension component inspection', 'Shock absorbers and struts condition', 'Tie rods, ball joints, and bushings', 'Steering system play and response', 'Wheel alignment check', 'Tire condition and pressure'],
    },
    {
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        ),
        title: 'Brake System',
        points: ['Brake pad condition and thickness', 'Brake rotor wear and warping', 'Brake fluid condition and level', 'ABS system functionality', 'Parking brake operation', 'Brake pedal feel and responsiveness'],
    },
    {
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Electrical & Safety',
        points: ['All lighting systems verified', 'Airbag system function', 'Door locks and power windows', 'Dashboard warning lights', 'Climate control systems', 'Safety belt functionality'],
    },
    {
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
        ),
        title: 'Interior Quality',
        points: ['Seat condition and adjustability', 'Dashboard cracks or damage', 'Carpet and upholstery wear', 'Door panels and trim integrity', 'Odor assessment', 'Trunk and cargo area condition'],
    },
    {
        icon: (
            <svg className="w-5 h-5 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Exterior & Body',
        points: ['Paint condition and finish', 'Body panels alignment', 'Rust and corrosion inspection', 'Glass condition (windshield, windows)', 'Weather seals and gaskets', 'Sunroof operation (if equipped)'],
    },
];

const certTiers = [
    {
        stars: 3,
        name: 'Platinum Certified',
        subtitle: 'Model years 2015+ with under 150,000 km',
        color: 'border-yellow-500/40 from-yellow-500/10',
        accentClass: 'text-yellow-400',
        perks: ['Full 150-point inspection', '3 months / 5,000 km bumper-to-bumper', '6 months / 10,000 km powertrain', '24/7 roadside assistance', '2x complimentary oil changes'],
        bestFor: 'Maximum warranty coverage and peace of mind',
    },
    {
        stars: 2,
        name: 'Gold Certified',
        subtitle: 'Model years 2012+ with under 200,000 km',
        color: 'border-orange-500/40 from-orange-500/10',
        accentClass: 'text-orange-400',
        perks: ['Full 150-point inspection', '2 months / 4,000 km bumper-to-bumper', '3 months / 5,000 km powertrain', '24/7 roadside assistance', '1 complimentary oil change'],
        bestFor: 'Solid warranty with great value balance',
    },
    {
        stars: 1,
        name: 'Silver Certified',
        subtitle: 'Model years 2010+ with mileage as-noted',
        color: 'border-gray-500/40 from-gray-500/10',
        accentClass: 'text-gray-300',
        perks: ['Full 150-point inspection', '1 month / 2,000 km powertrain warranty', '24/7 roadside assistance', 'Detailed inspection report', 'Extended warranty available'],
        bestFor: 'Budget-conscious buyers wanting certified quality',
    },
    {
        stars: 0,
        name: 'Extended Warranty',
        subtitle: 'Available for any certified vehicle',
        color: 'border-brand-accent/40 from-brand-accent/10',
        accentClass: 'text-brand-accent',
        perks: ['Powertrain plan (engine, transmission)', 'Comprehensive coverage plan', 'Gap insurance available', 'Coverage up to 7 years / 160,000 km', 'Flexible deductible options'],
        bestFor: 'Long-term protection beyond factory warranty',
    },
];

const processSteps = [
    { n: '01', title: 'Visual Inspection', desc: 'Complete exterior and interior walkthrough' },
    { n: '02', title: 'Diagnostic Test', desc: 'Computer diagnostic scan for engine & systems' },
    { n: '03', title: 'Test Drive', desc: 'On-road performance evaluation' },
    { n: '04', title: 'Detailed Check', desc: '150-point mechanical and safety inspection' },
    { n: '05', title: 'Full Report', desc: 'Inspection report provided to you' },
    { n: '06', title: 'Certification', desc: 'Vehicle certified and ready for sale' },
];

export default function InsuranceCertifiedPage() {
    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Certified Pre-Owned"
                title={<>Quality You Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Trust</span></>}
                subtitle="Every vehicle at GS Motors is certified through our comprehensive 150-point inspection process. Buy with confidence knowing your car has been thoroughly checked by certified technicians."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Certified Quality', href: '/insurance-certified' }]}
            />

            {/* Trust Stats */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { value: '150+', label: 'Point Inspection', color: 'text-brand-accent' },
                        { value: '100%', label: 'Certified Technician', color: 'text-brand-highlight' },
                        { value: '3', label: 'Warranty Tiers', color: 'text-purple-400' },
                        { value: '7yr', label: 'Max Extended Coverage', color: 'text-cyan-400' },
                    ].map((s) => (
                        <div key={s.label} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6 text-center">
                            <div className={`text-3xl md:text-4xl font-bold mb-1.5 ${s.color}`}>{s.value}</div>
                            <p className="text-gray-400 text-sm font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 150-Point Inspection */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Our 150-Point Inspection</h2>
                    <p className="text-gray-400 text-sm">Every system, every component — nothing is missed</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {inspectionCategories.map((cat) => (
                        <div key={cat.title} className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/[0.07] hover:border-brand-accent/20 rounded-2xl p-6 transition-all">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-9 h-9 rounded-xl bg-brand-accent/15 flex items-center justify-center shrink-0">
                                    {cat.icon}
                                </div>
                                <h3 className="text-white font-bold text-sm">{cat.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {cat.points.map((p) => (
                                    <li key={p} className="flex items-center gap-2.5 text-gray-400 text-xs">
                                        <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Certification Levels */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Certification Levels & Warranty</h2>
                    <p className="text-gray-400 text-sm">Three tiers of protection for every budget</p>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    {certTiers.map((tier) => (
                        <div key={tier.name} className={`bg-gradient-to-br ${tier.color} to-transparent border rounded-3xl p-8 transition-all hover:shadow-xl`}>
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-white font-bold text-lg">{tier.name}</h3>
                                    <p className="text-gray-400 text-sm mt-0.5">{tier.subtitle}</p>
                                </div>
                                {tier.stars > 0 && (
                                    <div className="flex gap-0.5">
                                        {[...Array(3)].map((_, i) => (
                                            <svg key={i} className={`w-4 h-4 ${i < tier.stars ? 'text-yellow-400' : 'text-gray-700'}`} fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <ul className="space-y-2.5 mb-6">
                                {tier.perks.map((p) => (
                                    <li key={p} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <span className={`w-4 h-4 rounded-full bg-current/20 flex items-center justify-center shrink-0 ${tier.accentClass}`}>
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                            <div className="border-t border-white/10 pt-4">
                                <p className={`text-xs font-bold uppercase tracking-widest ${tier.accentClass} mb-1`}>Best For</p>
                                <p className="text-gray-400 text-sm">{tier.bestFor}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Steps */}
            <section className="container mx-auto px-4 md:px-6 mb-16">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Our Certification Process</h2>
                    <p className="text-gray-400 text-sm">From arrival to certified — every step matters</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {processSteps.map((step) => (
                        <div key={step.n} className="bg-white/[0.04] border border-white/[0.07] rounded-2xl p-6">
                            <div className="text-3xl font-black text-brand-accent/30 mb-3">{step.n}</div>
                            <h3 className="text-white font-bold text-sm mb-1.5">{step.title}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <PageCTA
                title="Find Your Certified Vehicle Today"
                subtitle="Browse our inventory of certified pre-owned vehicles with full inspection reports and warranty protection."
                primaryLabel="View Certified Vehicles"
                secondaryLabel="Contact Us"
            />
        </div>
    );
}
