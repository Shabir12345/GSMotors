'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

interface Review {
    author: string;
    authorPhoto?: string;
    rating: number;
    text: string;
    time: string;
}

interface TestimonialsProps {
    reviews: Review[];
    loading: boolean;
    googleRating?: number;
    totalRatings?: number;
}

export default function Testimonials({ reviews, loading, googleRating, totalRatings }: TestimonialsProps) {
    if (loading) {
        return (
            <section className="py-24 bg-brand-darker relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-16 h-16 border-4 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding bg-brand-darker relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-brand-darker">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[100px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-highlight/5 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-6 py-1.5 md:py-2 mb-6">
                        <span className="text-brand-highlight text-sm md:text-base">★★★★★</span>
                        <span className="text-[10px] md:text-sm text-gray-300 font-black uppercase tracking-widest">Trusted Community</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Client Stories
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                        Don't just take our word for it. Here is what our neighbors have to say about their experience.
                    </p>

                    {googleRating && (
                        <div className="mt-8">
                            <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{googleRating} / 5.0</div>
                            <div className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-widest">Based on {totalRatings} Google Reviews</div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-12 md:pb-16">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 hover:border-brand-accent/30 transition-all duration-300 group shadow-2xl shadow-black/20">
                            <div className="flex items-center space-x-4 mb-5 md:mb-6">
                                {review.authorPhoto ? (
                                    <Image src={review.authorPhoto} alt={review.author} width={40} height={40} className="md:w-12 md:h-12 rounded-full ring-2 ring-brand-accent/20 object-cover group-hover:ring-brand-accent transition-all" />
                                ) : (
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-lg md:text-xl group-hover:bg-brand-accent group-hover:text-white transition-all">
                                        {review.author.charAt(0)}
                                    </div>
                                )}
                                <div className="min-w-0">
                                    <h4 className="font-bold text-white text-sm md:text-base truncate">{review.author}</h4>
                                    <p className="text-[10px] md:text-xs text-gray-500 font-medium">{review.time}</p>
                                </div>
                            </div>

                            <div className="flex mb-3 md:mb-4 text-brand-highlight text-[10px] md:text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-600"}>★</span>
                                ))}
                            </div>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed italic opacity-90 line-clamp-4 group-hover:text-gray-300 transition-colors">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
