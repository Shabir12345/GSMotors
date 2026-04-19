'use client';

import React, { useState, useEffect } from 'react';
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
        <div className={`inline-flex items-center ${className || ''}`}>
            <div className="relative overflow-visible flex items-center min-w-[120px]">
                <Image
                    src="/logo.png"
                    alt="GSMotorsinc Logo"
                    width={width || 600}
                    height={height || 150}
                    className={`object-contain transition-all duration-300 ${!isFixed ? 'h-[2.5em] w-auto' : ''}`}
                    priority={priority}
                    unoptimized={true}
                />
            </div>
        </div>
    );
}
