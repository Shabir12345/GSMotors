import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
}

export default function Logo({ className, width, height, priority = true }: LogoProps) {
    const isFixed = width && height;

    return (
        <div className={`inline-flex items-center ${className || ''}`} suppressHydrationWarning>
            {/* 
              SVG Filter to "Chroma Key" out black backgrounds from images.
            */}
            <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
                <defs>
                    <filter id="remove-black-bg" colorInterpolationFilters="sRGB">
                        <feColorMatrix
                            type="matrix"
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    1.5 1.5 1.5 0 -0.1"
                        />
                        <feComponentTransfer>
                            <feFuncA type="gamma" exponent="1.5" amplitude="1.2" offset="0" />
                        </feComponentTransfer>
                    </filter>
                </defs>
            </svg>

            <div className="relative overflow-visible flex items-center">
                <Image
                    src="/logo.png"
                    alt="GSMotorsinc Logo"
                    width={width || 600}
                    height={height || 150}
                    // Increased by another 50% from 3.5em -> 5.25em
                    className={`object-contain transition-all duration-300 ${!isFixed ? 'h-[5.25em] w-auto' : ''}`}
                    style={{
                        filter: 'url(#remove-black-bg) brightness(1.1) contrast(1.1)',
                        mixBlendMode: 'screen'
                    }}
                    priority={priority}
                />
            </div>
        </div>
    );
}
