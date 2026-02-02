import Link from 'next/link';
import dynamic from 'next/dynamic';
import { siteConfig } from '@/siteConfig';

const HeroScrollAnimation = dynamic(() => import('@/components/HeroScrollAnimation'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black" />
});

import InventoryGrid from '@/components/InventoryGrid';
import Testimonials from '@/components/Testimonials';
import DynamicHeroText from '@/components/DynamicHeroText';
import FinancingSection from '@/components/FinancingSection';
import TradeInSection from '@/components/TradeInSection';
import AboutUs from '@/components/AboutUs';

import { MOCK_VEHICLES, MOCK_REVIEWS } from '@/data/mockData';

async function getFeaturedVehicles() {
  return MOCK_VEHICLES.filter(v => v.isFeatured).slice(0, 3);
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
          title="Featured Collection"
          subtitle="Hand-picked for quality and performance. These vehicles represent the best of our current stock."
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



      {/* Financing Section */}
      <FinancingSection />

      {/* Trade-In Section */}
      <TradeInSection />

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-darker/50 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-accent/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Certified Quality</h3>
              <p className="text-gray-400">Every vehicle undergoes a rigorous 150-point inspection. We only sell cars we'd drive ourselves.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-brand-highlight/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-highlight/20 rounded-2xl flex items-center justify-center mb-6 text-brand-highlight group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Pricing</h3>
              <p className="text-gray-400">No hidden fees, no surprise add-ons. The price you see is the price you pay, plus tax and licensing.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Stress-Free Experience</h3>
              <p className="text-gray-400">Our non-commissioned sales staff are here to help you find the right car, not just sell you one.</p>
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
            Ready to Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Dream Car?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Visit our showroom today or browse our inventory online. Your perfect drive is waiting.
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
