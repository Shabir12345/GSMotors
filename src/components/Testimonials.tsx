'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <section className="py-24 bg-brand-darker relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-brand-darker">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-brand-accent/5 blur-[100px]"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-highlight/5 blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
                        <span className="text-brand-highlight">★★★★★</span>
                        <span className="text-gray-300 font-medium">Trusted by Community</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Client Stories
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Don't just take our word for it. Here is what our neighbors have to say about their experience.
                    </p>

                    {googleRating && (
                        <div className="mt-8">
                            <div className="text-3xl font-bold text-white mb-2">{googleRating} / 5.0</div>
                            <div className="text-sm text-gray-500">Based on {totalRatings} Google Reviews</div>
                        </div>
                    )}
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    className="pb-16"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-full bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-brand-accent/30 transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-6">
                                    {review.authorPhoto ? (
                                        <img src={review.authorPhoto} alt={review.author} className="w-12 h-12 rounded-full ring-2 ring-brand-accent/20" />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold text-xl">
                                            {review.author.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold text-white">{review.author}</h4>
                                        <p className="text-xs text-gray-400">{review.time}</p>
                                    </div>
                                </div>

                                <div className="flex mb-4 text-brand-highlight text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-600"}>★</span>
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-relaxed italic opacity-90 line-clamp-4">
                                    "{review.text}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
