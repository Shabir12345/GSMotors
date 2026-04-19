import Link from 'next/link';
import { siteConfig } from '@/siteConfig';

import dynamic from 'next/dynamic';

const HeroScrollAnimation = dynamic(() => import('@/components/HeroScrollAnimation'), {
  ssr: false,
});

const DynamicHeroText = dynamic(() => import('@/components/DynamicHeroText'), {
  ssr: false,
});

// Dynamically import below-the-fold components to reduce initial JS payload
import InventoryGrid from '@/components/InventoryGrid';
import FinancingSection from '@/components/FinancingSection';
import TradeInSection from '@/components/TradeInSection';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';

export const revalidate = 60; // Enable ISR, revalidate every 60 seconds

import { prisma } from '@/lib/prisma';
import { MOCK_REVIEWS } from '@/data/mockData';

async function getFeaturedVehicles() {
  try {
    const vehicles = await prisma.vehicle.findMany({
      where: {
        isFeatured: true,
        status: 'AVAILABLE',
        isWholesale: false,
        isAsIs: false,
        isExport: false
      } as any,
      take: 3,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        photos: {
          where: { isPrimary: true },
          take: 1
        }
      }
    });

    // Map Prisma models to the UI interface
    return vehicles.map((v: any) => ({
      ...v,
      transmission: v.transmission || undefined,
      exteriorColor: v.exteriorColor || undefined,
      isAsIs: !!v.isAsIs,
      isExport: !!v.isExport,
      isWholesale: !!v.isWholesale,
      photos: v.photos.map((p: any) => ({ url: p.url }))
    }));
  } catch (error) {
    console.error('Failed to fetch featured vehicles:', error);
    return [];
  }
}

async function getGoogleReviews() {
  return {
    success: true,
    rating: 5.0,
    totalRatings: 128,
    reviews: MOCK_REVIEWS
  };
}

export default async function HomePage() {
  const featuredVehicles = await getFeaturedVehicles();
  const googleReviews = await getGoogleReviews();


  return (
    <main className="bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoDealer',
            name: 'GSMotorsinc',
            url: 'https://gsmotorsinc.com',
            telephone: '647-801-2475',
            email: 'concierge@gsmotorsinc.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '3400 ON-115',
              addressLocality: 'Newcastle',
              addressRegion: 'ON',
              postalCode: 'L1B 0R6',
              addressCountry: 'CA',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 43.942, longitude: -78.603 },
            openingHours: ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00'],
            priceRange: '$$',
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.instagram,
            ],
          }),
        }}
      />
      {/* Hero Section */}
      <section id="home" className="relative p-0 m-0 border-0 outline-0">
        <HeroScrollAnimation
          frameCount={80}
          imagesPath="/images/hero-scroll/frame_"
          imageExtension=".jpg"
        >
          <DynamicHeroText />
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </HeroScrollAnimation>
      </section>

      {/* Featured Inventory Section */}
      <div id="featured-inventory" className="relative z-10 glass-panel border-y border-white/5">
        <InventoryGrid
          vehicles={featuredVehicles}
          loading={false}
          title="Quality Vehicles for Every Budget"
          subtitle="Affordable pre-owned cars with certified inspections. Find reliable transportation at prices that make sense."
        />
        <div className="text-center pb-12 bg-brand-dark">
          <Link
            href="/inventory"
            className="inline-flex items-center space-x-2 text-brand-accent hover:text-white transition-colors text-lg font-medium group"
          >
            <span>View Full Inventory</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
      {/* Specialized Inventory Categories */}
      <section className="section-padding bg-brand-darker relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-display tracking-tight">
              Multiple Ways to <span className="text-brand-accent">Find Your Car</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              Whether you're looking for a certified pre-owned bargain, seeking export options, or exploring project vehicles, we have inventory to match every need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* As Is Card */}
            <Link href="/as-is-vehicles" className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-500 shadow-2xl shadow-brand-accent/5">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2766&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">Budget Options</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">As-Is Specials</h3>
                <p className="text-gray-300 text-sm md:text-base transform group-hover:-translate-y-2 transition-transform line-clamp-2">Deep discounts on project cars and vehicles needing work. Perfect for value hunters and DIY mechanics.</p>
                <div className="mt-4 flex items-center text-white/50 group-hover:text-brand-accent font-bold transition-colors text-xs md:text-sm">
                  <span>See Specials</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>

            {/* Wholesale Card */}
            <Link href="/wholesale" className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all duration-500 shadow-2xl shadow-brand-accent/5">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2672&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-2">Dealer Network</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">Wholesale Direct</h3>
                <p className="text-gray-300 text-sm md:text-base transform group-hover:-translate-y-2 transition-transform line-clamp-2">Inventory for licensed dealers. Competitive pricing and flexible terms for bulk purchases.</p>
                <div className="mt-4 flex items-center text-white/50 group-hover:text-brand-accent font-bold transition-colors text-xs md:text-sm">
                  <span>Dealer Portal</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>

            {/* Export Card */}
            <Link href="/export" className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-500 shadow-2xl shadow-indigo-500/5">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Global Logistics</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">International Export</h3>
                <p className="text-gray-300 text-sm md:text-base transform group-hover:-translate-y-2 transition-transform line-clamp-2">Shipping solutions for buyers anywhere. Worldwide exports with transparent logistics and documentation.</p>
                <div className="mt-4 flex items-center text-white/50 group-hover:text-indigo-400 font-bold transition-colors text-xs md:text-sm">
                  <span>View Units</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Financing Section */}
      <FinancingSection />

      {/* Trade-In Section */}
      <TradeInSection />

      {/* Services Section */}
      <section id="services" className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-darker/50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-accent/30 transition-all duration-500 group shadow-xl">
              <div className="w-14 h-14 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform shadow-lg shadow-brand-accent/10">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Certified Quality</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">Every vehicle undergoes a rigorous 150-point inspection. We only sell cars we'd drive ourselves.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-highlight/30 transition-all duration-500 group shadow-xl">
              <div className="w-14 h-14 bg-brand-highlight/20 rounded-2xl flex items-center justify-center mb-6 text-brand-highlight group-hover:scale-110 transition-transform shadow-lg shadow-brand-highlight/10">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Transparent Pricing</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">No hidden fees, no surprise add-ons. The price you see is the price you pay, plus tax and licensing.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-purple-500/30 transition-all duration-500 group shadow-xl">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/10">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Stress-Free Experience</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">Our non-commissioned sales staff are here to help you find the right car, not just sell you one.</p>
            </div>
          </div>
        </div>
      </section>


      {/* About Us */}
      <AboutUs />

      {/* Testimonials */}
      <Testimonials
        reviews={googleReviews?.reviews || []}
        loading={false}
        googleRating={googleReviews?.rating}
        totalRatings={googleReviews?.totalRatings}
      />

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Quality Used Cars in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Toronto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Affordable, reliable pre-owned vehicles with transparent pricing and honest service. Find your next car today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/inventory"
              className="btn-modern bg-white text-brand-darker hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              Browse Inventory
            </Link>
            <Link
              href="/contact"
              className="btn-modern bg-brand-darker text-white border border-white/20 hover:bg-black px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-all hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
