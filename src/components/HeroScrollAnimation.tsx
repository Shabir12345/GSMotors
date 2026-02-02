'use client';

import { useEffect, useRef, useState } from 'react';
import { HeroScrollContext } from '@/components/HeroScrollContext';


interface HeroScrollAnimationProps {
    frameCount: number;
    imagesPath: string; // e.g., '/hero-animation/frame_'
    imageExtension?: string; // e.g., '.jpg'
    children?: React.ReactNode;
}

export default function HeroScrollAnimation({
    frameCount,
    imagesPath,
    imageExtension = '.jpg',
    children
}: HeroScrollAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        // Preload priority frames first (e.g., every 5th frame) to give immediate feedback
        // then fill in the gaps. For simplicity, we'll load all sequentially here but
        // a real prod app might use a more complex strategy.

        // We'll use a promise-based approach to control concurrency if needed, 
        // but browsers handle image loading reasonably well.
        const loadImages = async () => {
            const promises = [];
            const imageObjects: HTMLImageElement[] = new Array(frameCount).fill(null);

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const frameIndex = i.toString().padStart(3, '0');
                    img.src = `${imagesPath}${frameIndex}${imageExtension}`;
                    img.onload = () => {
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };
                    img.onerror = () => {
                        // Handle error - maybe try to load previous frame or just skip
                        console.error(`Failed to load frame ${i}`);
                        loadedCount++; // Count as handled
                        resolve();
                    };
                    imageObjects[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(imageObjects);
            setIsLoaded(true);
        };

        let isMounted = true;
        loadImages().then(() => {
            if (!isMounted) return;
        });

        return () => {
            isMounted = false;
        };
    }, [frameCount, imagesPath, imageExtension]);

    // Canvas drawing logic
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Type checking for the ref context
        const renderFrame = (index: number) => {
            // Clamp index
            const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(index)));
            const img = images[frameIndex];

            if (!img) return;

            // Only draw if image is successfully loaded
            if (!img.complete || img.naturalWidth === 0) return;

            // Draw logic to cover the canvas (object-fit: cover)
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                // Image is wider than canvas
                drawHeight = canvas.height * 1.01;
                drawWidth = (img.width * (canvas.height / img.height)) * 1.01;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                // Image is taller than canvas
                drawWidth = canvas.width * 1.01;
                drawHeight = (img.height * (canvas.width / img.width)) * 1.01;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Initial draw
        renderFrame(0);

        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const scrollableDistance = rect.height - windowHeight;
            if (scrollableDistance <= 0) return;

            const rawProgress = -rect.top / scrollableDistance;
            const progress = Math.max(0, Math.min(1, rawProgress));

            const frameIndex = progress * (frameCount - 1);
            setProgress(progress);
            setCurrentFrame(Math.round(frameIndex));

            requestAnimationFrame(() => renderFrame(frameIndex));
        };

        window.addEventListener('scroll', handleScroll);
        const updateCanvasSize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                const parentRect = canvasRef.current.parentElement.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;

                // Use parent dimensions to ensure exact fit
                canvasRef.current.width = parentRect.width * dpr;
                canvasRef.current.height = parentRect.height * dpr;

                handleScroll();
            }
        };

        window.addEventListener('resize', updateCanvasSize);

        // Set initial canvas size
        updateCanvasSize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, [isLoaded, images, frameCount]);

    return (
        <HeroScrollContext.Provider value={{ progress, currentFrame, isLoaded }}>
            <div ref={containerRef} className="relative w-full" style={{ height: '200vh' }}>
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                    {!isMounted ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
                            <div className="text-center">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">GS Motors</h1>
                                <p className="text-xl text-gray-400">Loading Experience...</p>
                            </div>
                        </div>
                    ) : (
                        <>
                            {!isLoaded && (
                                <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                                    <div className="text-center">
                                        <div className="mb-4 text-2xl font-bold">Loading Experience...</div>
                                        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 transition-all duration-100 ease-out"
                                                style={{ width: `${loadingProgress}%` }}
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-400">{loadingProgress}%</p>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* Overlay Content */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                        {children}
                    </div>

                    {/* Gradient Vignettes to blend edges */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                    <div className="absolute inset-y-0 left-0 w-32 sm:w-64 z-10 pointer-events-none bg-gradient-to-r from-black/90 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-32 sm:w-64 z-10 pointer-events-none bg-gradient-to-l from-black/90 to-transparent" />

                    <canvas
                        ref={canvasRef}
                        className="block w-full h-full object-cover"
                    />
                </div>
            </div>
        </HeroScrollContext.Provider>
    );
}
