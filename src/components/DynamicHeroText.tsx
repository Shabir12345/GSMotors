'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { useHeroScroll } from '@/components/HeroScrollContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

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
    const getScale = (opacity: number) => 0.95 + (opacity * 0.05);

    if (!isLoaded) return null;

    return (
        <div className="relative w-full h-full flex items-center justify-center text-center px-4">
            {/* Stage 1: Brand Identity */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-out"
                style={{
                    opacity: stage1Opacity,
                    transform: `scale(${getScale(stage1Opacity)})`,
                    pointerEvents: stage1Opacity > 0.5 ? 'auto' : 'none'
                }}
            >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 text-white tracking-tighter drop-shadow-2xl">
                    GS<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">MOTORS</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light tracking-[0.2em] uppercase backdrop-blur-sm py-2 px-6 rounded-lg">
                    Excellence. Precision. Prestige.
                </p>
            </div>

            {/* Stage 3: Call to Action */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-out"
                style={{
                    opacity: stage3Opacity,
                    transform: `scale(${getScale(stage3Opacity)})`,
                    pointerEvents: stage3Opacity > 0.5 ? 'auto' : 'none'
                }}
            >
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 text-white tracking-tighter drop-shadow-2xl">
                    DRIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">CONFIDENTLY</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 font-light tracking-wide max-w-3xl mx-auto backdrop-blur-sm py-2 px-6 rounded-lg">
                    Experience the future of car buying with our premium selection and stress-free process.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
                    <Link
                        href="#featured-inventory"
                        className="btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white px-8 py-4 rounded-full text-lg shadow-2xl shadow-brand-accent/30 w-full sm:w-auto transition-all hover:scale-105 text-center"
                    >
                        Explore Inventory
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 rounded-full text-lg text-white border border-white/30 backdrop-blur-md hover:bg-white/10 w-full sm:w-auto transition-all text-center"
                    >
                        Book a Viewing
                    </Link>
                </div>
            </div>
        </div>
    );
}
