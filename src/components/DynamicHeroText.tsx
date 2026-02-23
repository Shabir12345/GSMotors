'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useHeroScroll } from '@/components/HeroScrollContext';
import { cn } from '@/lib/utils';
// import Logo from './Logo';

export default function DynamicHeroText() {
    const { currentFrame, isLoaded } = useHeroScroll();

    // Define the visibility logic for each stage
    // Stage 1: GSMotors (0 - 30)
    // Stage 2: Unrivaled Selection (25 - 60)
    // Stage 3: Drive Confidently (55 - 80)
    // We use some overlap for cross-fading

    const getOpacity = (frameOffset: number, start: number, end: number, peakStart: number, peakEnd: number) => {
        if (frameOffset < start || frameOffset > end) return 0;
        if (frameOffset >= peakStart && frameOffset <= peakEnd) return 1;

        if (frameOffset < peakStart) {
            return (frameOffset - start) / (peakStart - start);
        } else {
            return 1 - (frameOffset - peakEnd) / (end - peakEnd);
        }
    };

    const stage1Opacity = useMemo(() => getOpacity(currentFrame, 0, 45, 0, 35), [currentFrame]);
    const stage3Opacity = useMemo(() => {
        // Stage 3 stays visible until the end
        if (currentFrame < 40) return 0;
        if (currentFrame > 55) return 1;
        return (currentFrame - 40) / (55 - 40);
    }, [currentFrame]);

    // Apply a slight scale effect for a "premium" feel
    const getScale = (opacity: number) => 0.98 + (opacity * 0.02);
    const getBlur = (opacity: number) => (1 - opacity) * 10;
    const getYOffset = (opacity: number) => (1 - opacity) * 20;

    if (!isLoaded) return null;

    return (
        <div className="relative w-full h-full flex items-center justify-center text-center px-4">
            {/* Stage 1: Brand Identity */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                style={{
                    opacity: stage1Opacity,
                    transform: `scale(${getScale(stage1Opacity)}) translateY(${getYOffset(stage1Opacity)}px) translateZ(0)`,
                    filter: `blur(${getBlur(stage1Opacity)}px)`,
                    willChange: 'opacity, transform, filter',
                    pointerEvents: stage1Opacity > 0.8 ? 'auto' : 'none'
                }}
            >
                <div className="relative overflow-hidden mb-4" style={{ transform: 'translateZ(0)' }}>
                    <h1
                        className="text-5xl sm:text-8xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl leading-tight sm:leading-none"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        GSMotors<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">inc</span>
                    </h1>
                </div>
                <div
                    className="flex items-center gap-4 transition-all duration-700 delay-100"
                    style={{ transform: `translateY(${getYOffset(stage1Opacity) * 0.5}px)` }}
                >
                    <span className="h-px w-6 sm:w-8 bg-brand-accent/50" />
                    <p className="text-[10px] sm:text-base md:text-lg text-gray-300 font-light tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                        Excellence. Precision. Prestige.
                    </p>
                    <span className="h-px w-6 sm:w-8 bg-brand-accent/50" />
                </div>
            </div>

            {/* Stage 3: Call to Action */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                style={{
                    opacity: stage3Opacity,
                    transform: `scale(${getScale(stage3Opacity)}) translateY(${getYOffset(stage3Opacity)}px) translateZ(0)`,
                    filter: `blur(${getBlur(stage3Opacity)}px)`,
                    willChange: 'opacity, transform, filter',
                    pointerEvents: stage3Opacity > 0.8 ? 'auto' : 'none'
                }}
            >
                <h1
                    className="text-4xl sm:text-7xl md:text-8xl font-bold mb-6 text-white tracking-tighter drop-shadow-2xl leading-tight sm:leading-none"
                    style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                    DRIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">CONFIDENTLY</span>
                </h1>
                <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4">
                    Experience the future of car buying with our premium selection and stress-free process.
                </p>
                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 w-full px-6 sm:px-0"
                    style={{ transform: `translateY(${getYOffset(stage3Opacity) * 0.3}px)` }}
                >
                    <Link
                        href="/inventory"
                        className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-10 py-4 sm:py-5 rounded-full text-lg font-bold shadow-2xl shadow-brand-accent/30 w-full sm:w-auto transition-all hover:scale-105 active:scale-95 text-center"
                    >
                        Explore Inventory
                    </Link>
                    <Link
                        href="/contact"
                        className="px-10 py-4 sm:py-5 rounded-full text-lg text-white font-medium border border-white/20 backdrop-blur-md hover:bg-white/10 w-full sm:w-auto transition-all text-center hover:border-white/40"
                    >
                        Book a Viewing
                    </Link>
                </div>
            </div>

        </div>
    );
}
