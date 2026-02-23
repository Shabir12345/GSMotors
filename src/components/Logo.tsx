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
            <div className="relative overflow-visible flex items-center">
                <Image
                    src="/logo.png"
                    alt="GSMotorsinc Logo"
                    width={width || 600}
                    height={height || 150}
                    className={`object-contain transition-all duration-300 ${!isFixed ? 'h-[5.25em] w-auto' : ''}`}
                    style={{
                        filter: 'brightness(1.1) contrast(1.1)',
                        mixBlendMode: 'screen'
                    }}
                    priority={priority}
                />
            </div>
        </div>
    );
}
