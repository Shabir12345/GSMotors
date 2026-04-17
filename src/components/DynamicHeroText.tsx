'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useHeroScroll } from '@/components/HeroScrollContext';

export default function DynamicHeroText() {
    const { currentFrame, isLoaded } = useHeroScroll();
    const isMobileRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mobile = window.innerWidth < 768;
        isMobileRef.current = mobile;
        setIsMobile(mobile);
    }, []);

    // Opacity helpers — no blur, uses only opacity + translateY for GPU-friendly compositing
    const getOpacity = (frame: number, start: number, end: number, peakStart: number, peakEnd: number) => {
        if (frame < start || frame > end) return 0;
        if (frame >= peakStart && frame <= peakEnd) return 1;
        if (frame < peakStart) return (frame - start) / (peakStart - start);
        return 1 - (frame - peakEnd) / (end - peakEnd);
    };

    const stage1Opacity = getOpacity(currentFrame, 0, 45, 0, 35);
    const stage3Opacity = (() => {
        if (currentFrame < 40) return 0;
        if (currentFrame > 55) return 1;
        return (currentFrame - 40) / (55 - 40);
    })();

    // Subtle Y-offset only — skip blur entirely (CSS blur is very expensive on mobile)
    const getYOffset = (opacity: number) => isMobile ? 0 : (1 - opacity) * 15;
    const getScale = (opacity: number) => isMobile ? 1 : 0.98 + opacity * 0.02;

    if (!isLoaded) return null;

    return (
        <div className="relative w-full h-full flex items-center justify-center text-center px-4">
            {/* Stage 1: Brand Identity */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                    opacity: stage1Opacity,
                    // Only promote to GPU layer if actually visible — saves memory
                    transform: `scale(${getScale(stage1Opacity)}) translateY(${getYOffset(stage1Opacity)}px) translateZ(0)`,
                    willChange: stage1Opacity > 0 && stage1Opacity < 1 ? 'opacity, transform' : 'auto',
                    pointerEvents: stage1Opacity > 0.8 ? 'auto' : 'none',
                    visibility: stage1Opacity === 0 ? 'hidden' : 'visible',
                }}
            >
                <div className="mb-4">
                    <h1
                        className="text-5xl sm:text-8xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl leading-tight sm:leading-none"
                    >
                        GSMotors<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">inc</span>
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <span className="h-px w-6 sm:w-8 bg-brand-accent/50" />
                    <p className="text-[10px] sm:text-base md:text-lg text-gray-300 font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                        Excellence. Precision. Prestige.
                    </p>
                    <span className="h-px w-6 sm:w-8 bg-brand-accent/50" />
                </div>
            </div>

            {/* Stage 3: Call to Action */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                    opacity: stage3Opacity,
                    transform: `scale(${getScale(stage3Opacity)}) translateY(${getYOffset(stage3Opacity)}px) translateZ(0)`,
                    willChange: stage3Opacity > 0 && stage3Opacity < 1 ? 'opacity, transform' : 'auto',
                    pointerEvents: stage3Opacity > 0.8 ? 'auto' : 'none',
                    visibility: stage3Opacity === 0 ? 'hidden' : 'visible',
                }}
            >
                <h2
                    className="text-4xl sm:text-7xl md:text-8xl font-bold mb-6 text-white tracking-tighter drop-shadow-2xl leading-tight sm:leading-none"
                >
                    DRIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">CONFIDENTLY</span>
                </h2>
                <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4">
                    Experience the future of car buying with our premium selection and stress-free process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 w-full px-6 sm:px-0">
                    <Link
                        href="/inventory"
                        className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-10 py-4 sm:py-5 rounded-full text-lg font-bold shadow-2xl shadow-brand-accent/30 w-full sm:w-auto transition-colors active:scale-95 text-center"
                    >
                        Explore Inventory
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-4 sm:py-5 rounded-full text-lg text-white font-medium border border-white/20 backdrop-blur-md hover:bg-white/10 w-full sm:w-auto transition-colors text-center hover:border-white/40"
                    >
                        Book a Viewing
                    </Link>
                </div>
            </div>
        </div>
    );
}
