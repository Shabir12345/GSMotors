'use client';

import { useEffect, useRef, useState } from 'react';
import { HeroScrollContext } from '@/components/HeroScrollContext';
import HeroLoadingPlaceholder from '@/components/HeroLoadingPlaceholder';


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
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Progressive image loading with support for all frames
    useEffect(() => {
        if (!isMounted) return;

        let isMountedLocal = true;
        const imageObjects: HTMLImageElement[] = new Array(frameCount).fill(null);
        let loadedCount = 0;

        // Phase 1: Load priority frames (every 10th frame) - ensures jumpy movement ASAP
        const priorityFrames = Array.from({ length: Math.ceil(frameCount / 10) }, (_, i) => i * 10);

        // Phase 2: Load secondary frames (every 5th frame not in phase 1)
        const secondaryFrames = Array.from({ length: Math.ceil(frameCount / 5) }, (_, i) => i * 5).filter(i => !priorityFrames.includes(i));

        // Phase 3: Load all remaining frames
        const remainingFrames = Array.from({ length: frameCount }, (_, i) => i).filter(i => !priorityFrames.includes(i) && !secondaryFrames.includes(i));


        const loadFrame = (index: number): Promise<void> => {
            return new Promise((resolve) => {
                try {
                    if (imageObjects[index]) {
                        resolve();
                        return;
                    }

                    const img = new Image();
                    const frameIndex = index.toString().padStart(3, '0');
                    img.src = `${imagesPath}${frameIndex}${imageExtension}`;

                    img.onload = () => {
                        if (!isMountedLocal) return;
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    };

                    img.onerror = () => {
                        console.error(`Failed to load frame ${index}`);
                        loadedCount++;
                        resolve();
                    };

                    imageObjects[index] = img;
                } catch (error) {
                    console.error('Error loading frame:', error);
                    setHasError(true);
                    resolve();
                }
            });
        };

        const loadImages = async () => {
            try {
                // Phase 1: Load priority frames immediately
                await Promise.all(priorityFrames.map(loadFrame));

                if (!isMountedLocal) return;
                setImages([...imageObjects]);
                setIsLoaded(true); // Enable animation with priority frames

                // Phase 2: Load secondary frames using requestIdleCallback
                const loadSecondaryFrames = () => {
                    if (!isMountedLocal) return;

                    const loadBatch = async () => {
                        await Promise.all(secondaryFrames.map(loadFrame));
                        if (!isMountedLocal) return;
                        setImages([...imageObjects]);
                    };

                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => loadBatch());
                    } else {
                        setTimeout(() => loadBatch(), 100);
                    }
                };

                loadSecondaryFrames();

                // Phase 3: Load remaining frames in background
                const loadRemainingFrames = () => {
                    if (!isMountedLocal) return;

                    const loadBatch = async () => {
                        // Load in chunks to avoid blocking
                        const chunkSize = 10;
                        for (let i = 0; i < remainingFrames.length; i += chunkSize) {
                            if (!isMountedLocal) return;
                            const chunk = remainingFrames.slice(i, i + chunkSize);
                            await Promise.all(chunk.map(loadFrame));
                            setImages([...imageObjects]);
                        }
                    };

                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => loadBatch(), { timeout: 2000 });
                    } else {
                        setTimeout(() => loadBatch(), 500);
                    }
                };

                loadRemainingFrames();
            } catch (error) {
                console.error('Error in image loading:', error);
                setHasError(true);
            }
        };

        loadImages();

        return () => {
            isMountedLocal = false;
        };
    }, [frameCount, imagesPath, imageExtension, isMounted]);

    // Canvas drawing logic with optimized scroll handling
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let rafId: number | null = null;
        let isScrolling = false;

        const renderFrame = (index: number) => {
            const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(index)));
            const img = images[frameIndex];

            // Better fallback: find the nearest loaded frame in either direction to ensure movement during loading
            if (!img || !img.complete || img.naturalWidth === 0) {
                let nearestFrame = -1;
                let minDistance = frameCount;

                for (let i = 0; i < frameCount; i++) {
                    const checkImg = images[i];
                    if (checkImg && checkImg.complete && checkImg.naturalWidth > 0) {
                        const distance = Math.abs(i - frameIndex);
                        if (distance < minDistance) {
                            minDistance = distance;
                            nearestFrame = i;
                        }
                    }
                }

                if (nearestFrame !== -1) {
                    const finalImg = images[nearestFrame];
                    const canvasRatio = canvas.width / canvas.height;
                    const imgRatio = finalImg.naturalWidth / finalImg.naturalHeight;

                    let drawWidth, drawHeight, offsetX, offsetY;

                    if (imgRatio > canvasRatio) {
                        drawHeight = canvas.height * 1.01;
                        drawWidth = (finalImg.naturalWidth * (canvas.height / finalImg.naturalHeight)) * 1.01;
                        offsetX = (canvas.width - drawWidth) / 2;
                        offsetY = (canvas.height - drawHeight) / 2;
                    } else {
                        drawWidth = canvas.width * 1.01;
                        drawHeight = (finalImg.naturalHeight * (canvas.width / finalImg.naturalWidth)) * 1.01;
                        offsetX = (canvas.width - drawWidth) / 2;
                        offsetY = (canvas.height - drawHeight) / 2;
                    }

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(finalImg, offsetX, offsetY, drawWidth, drawHeight);
                    return;
                }
                return;
            }

            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.naturalWidth / img.naturalHeight;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvas.height * 1.01;
                drawWidth = (img.naturalWidth * (canvas.height / img.naturalHeight)) * 1.01;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.width * 1.01;
                drawHeight = (img.naturalHeight * (canvas.width / img.naturalWidth)) * 1.01;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = (canvas.height - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        // Initial draw
        renderFrame(0);

        const handleScroll = () => {
            if (isScrolling) return;

            isScrolling = true;

            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }

            rafId = requestAnimationFrame(() => {
                const container = containerRef.current;
                if (!container) {
                    isScrolling = false;
                    return;
                }

                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const scrollableDistance = rect.height - windowHeight;
                if (scrollableDistance <= 0) {
                    isScrolling = false;
                    return;
                }

                const rawProgress = -rect.top / scrollableDistance;
                const progress = Math.max(0, Math.min(1, rawProgress));

                const frameIndex = progress * (frameCount - 1);
                setProgress(progress);
                setCurrentFrame(Math.round(frameIndex));

                renderFrame(frameIndex);
                isScrolling = false;
            });
        };

        // Intersection observer to only animate when visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Only listen to scroll when element is in view
                        window.addEventListener('scroll', handleScroll, { passive: true });
                        handleScroll(); // Initial sync
                    } else {
                        // Stop listening when out of view to save resources
                        window.removeEventListener('scroll', handleScroll);
                    }
                });
            },
            { threshold: 0 } // Trigger when even 1 pixel is visible
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        const updateCanvasSize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                const parentRect = canvasRef.current.parentElement.getBoundingClientRect();
                const dpr = window.devicePixelRatio || 1;

                canvasRef.current.width = parentRect.width * dpr;
                canvasRef.current.height = parentRect.height * dpr;

                handleScroll();
            }
        };

        const handleResize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                // Debounce resize
                if (rafId) cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(updateCanvasSize);
            }
        };

        window.addEventListener('resize', handleResize, { passive: true });
        updateCanvasSize();

        return () => {
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            // Cleanup listeners
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, [isLoaded, images, frameCount]);

    // Error fallback
    if (hasError) {
        return (
            <div className="relative w-full h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GS Motors</h1>
                    <p className="text-xl text-gray-400">Loading experience...</p>
                </div>
            </div>
        );
    }

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
                                <HeroLoadingPlaceholder progress={loadingProgress} />
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
                        style={{ willChange: 'transform' }}
                    />
                </div>
            </div>
        </HeroScrollContext.Provider>
    );
}
