'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { HeroScrollContext } from '@/components/HeroScrollContext';
import HeroLoadingPlaceholder from '@/components/HeroLoadingPlaceholder';

interface HeroScrollAnimationProps {
    frameCount: number;
    imagesPath: string;
    imageExtension?: string;
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
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Use refs for all animation state to avoid React re-renders in RAF loop
    const targetProgressRef = useRef(0);
    const currentProgressRef = useRef(0);
    const currentFrameRef = useRef(0);
    const isVisibleRef = useRef(false);
    const rafIdRef = useRef<number | null>(null);
    const dimensionsRef = useRef({ height: 0, top: 0 });
    const lastRenderedFrameRef = useRef(-1);

    // Context state — updated only when frame actually changes (not every RAF tick)
    const [contextProgress, setContextProgress] = useState(0);
    const [contextFrame, setContextFrame] = useState(0);

    // Device feature detection
    const isMobileRef = useRef(false);
    const prefersReducedMotionRef = useRef(false);

    useEffect(() => {
        setIsMounted(true);
        isMobileRef.current =
            /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent) ||
            window.innerWidth < 768;

        // Check reduced-motion preference and listen for changes
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        prefersReducedMotionRef.current = mq.matches;
        const onMotionPrefChange = (e: MediaQueryListEvent) => {
            prefersReducedMotionRef.current = e.matches;
        };
        mq.addEventListener('change', onMotionPrefChange);
        return () => mq.removeEventListener('change', onMotionPrefChange);
    }, []);

    // ── Image Loading ──────────────────────────────────────────────────────────
    useEffect(() => {
        if (!isMounted) return;

        let active = true;
        const imageObjects: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);
        imagesRef.current = imageObjects;
        let loadedCount = 0;

        // Use img.decode() — fires when image is loaded AND GPU-decoded (not just fetched)
        const loadFrame = (index: number): Promise<void> =>
            new Promise((resolve) => {
                if (imageObjects[index]) { resolve(); return; }
                const img = new Image();
                img.src = `${imagesPath}${index.toString().padStart(3, '0')}${imageExtension}`;

                // Safety timeout for each individual frame
                const timeoutId = setTimeout(() => {
                    console.warn(`Frame ${index} timed out loading`);
                    resolve();
                }, 5000);

                img.decode()
                    .then(() => {
                        clearTimeout(timeoutId);
                        if (!active) return;
                        imageObjects[index] = img;
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / frameCount) * 100));
                        resolve();
                    })
                    .catch(() => {
                        clearTimeout(timeoutId);
                        // Decode can fail for unsupported formats or network errors — always resolve
                        loadedCount++;
                        resolve();
                    });
            });

        // Priority frames: every 5th frame for mobile, every 10th for desktop
        const step = isMobileRef.current ? 5 : 10;
        const priorityFrames = Array.from({ length: Math.ceil(frameCount / step) }, (_, i) => i * step);
        const remainingFrames = Array.from({ length: frameCount }, (_, i) => i)
            .filter(i => !priorityFrames.includes(i));

        const run = async () => {
            try {
                await Promise.all(priorityFrames.map(loadFrame));
                if (!active) return;
                setIsLoaded(true); // Unlock animation with priority frames

                // Load remaining in idle time, small chunks
                const loadRemaining = async () => {
                    const chunkSize = isMobileRef.current ? 5 : 10;
                    for (let i = 0; i < remainingFrames.length; i += chunkSize) {
                        if (!active) return;
                        await Promise.all(remainingFrames.slice(i, i + chunkSize).map(loadFrame));
                    }
                };

                if ('requestIdleCallback' in window) {
                    (window as any).requestIdleCallback(() => loadRemaining(), { timeout: 3000 });
                } else {
                    setTimeout(loadRemaining, 200);
                }
            } catch {
                setHasError(true);
            }
        };

        run();

        return () => {
            active = false;
            // Free image element references to help GC on unmount / HMR
            imagesRef.current = imagesRef.current.map(() => null);
        };
    }, [frameCount, imagesPath, imageExtension, isMounted]);

    // ── Canvas Rendering ───────────────────────────────────────────────────────
    const renderFrame = useCallback((frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        const images = imagesRef.current;
        const idx = Math.min(frameCount - 1, Math.max(0, Math.round(frameIndex)));

        // Find the nearest loaded frame
        let img = images[idx];
        if (!img || !img.complete || img.naturalWidth === 0) {
            let nearest = -1, minDist = frameCount;
            for (let i = 0; i < images.length; i++) {
                const candidate = images[i];
                if (candidate && candidate.complete && candidate.naturalWidth > 0) {
                    const d = Math.abs(i - idx);
                    if (d < minDist) { minDist = d; nearest = i; }
                }
            }
            if (nearest === -1) return;
            img = images[nearest]!;
        }

        const cw = canvas.width, ch = canvas.height;
        const ir = img.naturalWidth / img.naturalHeight;
        const cr = cw / ch;

        let dw, dh, ox, oy;
        if (ir > cr) {
            dh = ch; dw = img.naturalWidth * (ch / img.naturalHeight);
        } else {
            dw = cw; dh = img.naturalHeight * (cw / img.naturalWidth);
        }
        ox = (cw - dw) / 2;
        oy = (ch - dh) / 2;

        ctx.drawImage(img, ox, oy, dw, dh);
    }, [frameCount]);

    // ── Size Updater ───────────────────────────────────────────────────────────
    const updateCanvasSize = useCallback(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const parent = canvas.parentElement;
        if (!parent) return;

        const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR at 2 for perf
        const rect = parent.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        // Cache container position for scroll calculations
        const containerRect = container.getBoundingClientRect();
        dimensionsRef.current = {
            height: containerRect.height,
            top: containerRect.top + window.scrollY
        };

        // Force re-draw after resize
        lastRenderedFrameRef.current = -1;
        renderFrame(currentFrameRef.current);
    }, [renderFrame]);

    // ── Animation + Scroll Loop ────────────────────────────────────────────────
    useEffect(() => {
        if (!isLoaded) return;

        const isMobile = isMobileRef.current;
        const reducedMotion = prefersReducedMotionRef.current;

        // ── Reduced-Motion: static render, no scroll binding ──────────────────
        if (reducedMotion) {
            updateCanvasSize();
            // Show a representative frame (mid-sequence) so the canvas isn't black
            renderFrame(Math.floor(frameCount * 0.45));
            // Also expose a settled context state so children (DynamicHeroText) can show the CTA
            setContextProgress(1);
            setContextFrame(frameCount - 1);
            return; // No RAF, no scroll listeners needed — static experience
        }

        // Slightly more responsive lerp than 0.08 — tracks fast scrolls better
        const lerpFactor = isMobile ? 1 : 0.12;

        const animate = () => {
            const diff = targetProgressRef.current - currentProgressRef.current;

            if (Math.abs(diff) > 0.0002) {
                currentProgressRef.current += diff * lerpFactor;
            } else {
                currentProgressRef.current = targetProgressRef.current;
            }

            const frameFloat = currentProgressRef.current * (frameCount - 1);
            const frameInt = Math.round(frameFloat);

            // Only draw if frame actually changed — saves GPU/CPU
            if (frameInt !== lastRenderedFrameRef.current) {
                lastRenderedFrameRef.current = frameInt;
                currentFrameRef.current = frameInt;
                renderFrame(frameFloat);

                // Update context state at reduced frequency to limit React renders
                setContextProgress(currentProgressRef.current);
                setContextFrame(frameInt);
            }

            rafIdRef.current = requestAnimationFrame(animate);
        };

        const stopAnimation = () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
                rafIdRef.current = null;
            }
        };

        const startAnimation = () => {
            stopAnimation();
            rafIdRef.current = requestAnimationFrame(animate);
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const { top: offsetTop, height: containerHeight } = dimensionsRef.current;
            const windowHeight = window.innerHeight;
            const scrollableDistance = containerHeight - windowHeight;

            if (scrollableDistance <= 0) return;

            const relativeScroll = scrollTop - offsetTop;
            const p = Math.max(0, Math.min(1, relativeScroll / scrollableDistance));
            targetProgressRef.current = p;

            // On mobile: snap immediately (no lerp needed)
            if (isMobile) {
                currentProgressRef.current = p;
            }
        };

        // IntersectionObserver: start/stop RAF based on visibility
        // Also re-draw the canvas when becoming visible again to prevent black screen
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isVisibleRef.current = entry.isIntersecting;

                    if (entry.isIntersecting) {
                        // Re-sync position in case scroll happened while invisible
                        updateCanvasSize();
                        handleScroll();
                        // Force immediate re-draw to prevent black screen
                        lastRenderedFrameRef.current = -1;
                        renderFrame(currentProgressRef.current * (frameCount - 1));
                        startAnimation();
                        window.addEventListener('scroll', handleScroll, { passive: true });
                    } else {
                        stopAnimation();
                        window.removeEventListener('scroll', handleScroll);
                    }
                });
            },
            {
                threshold: 0,
                // Trigger slightly before element is fully off-screen to warm up re-draw
                rootMargin: '200px 0px 200px 0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Debounced resize handler
        let resizeTimer: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                updateCanvasSize();
                if (isVisibleRef.current) {
                    lastRenderedFrameRef.current = -1;
                    renderFrame(currentProgressRef.current * (frameCount - 1));
                }
            }, 150);
        };

        window.addEventListener('resize', handleResize, { passive: true });
        updateCanvasSize();
        handleScroll();

        return () => {
            stopAnimation();
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, [isLoaded, frameCount, renderFrame, updateCanvasSize]);

    // Handle page visibility changes (tab switching, phone lock screen)
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible' && isVisibleRef.current) {
                updateCanvasSize();
                lastRenderedFrameRef.current = -1;
                renderFrame(currentProgressRef.current * (frameCount - 1));
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [frameCount, renderFrame, updateCanvasSize]);

    if (hasError) {
        return (
            <div className="relative w-full h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GSMotorsinc</h1>
                    <p className="text-xl text-gray-400">Premium Vehicles. Unbeatable Value.</p>
                </div>
            </div>
        );
    }

    return (
        <HeroScrollContext.Provider value={{ progress: contextProgress, currentFrame: contextFrame, isLoaded }}>
            {/*
              Container height drives the scroll distance.
              200vh = 1 viewport of scrolling animates all 80 frames.
              Reduced-motion users get a static 100vh section — no unnecessary scroll space.
            */}
            <div
                ref={containerRef}
                className="relative w-full"
                style={{ height: prefersReducedMotionRef.current ? '100vh' : '200vh' }}
            >
                {/*
                  sticky + CSS containment: layout style paint
                  — tells the browser this subtree is isolated for repaints.
                  Prevents unnecessary layout recalculation outside this div during scroll.
                */}
                <div
                    className="sticky top-0 h-screen w-full overflow-hidden bg-black"
                    style={{ contain: 'layout style paint' }}
                >
                    {!isMounted ? (
                        <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
                            <div className="text-center">
                                <h1 className="text-4xl md:text-6xl font-bold mb-4">GSMotorsinc</h1>
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

                    {/* Canvas background — role="img" so screen readers skip it gracefully */}
                    <canvas
                        ref={canvasRef}
                        role="img"
                        aria-label="Scroll-driven showcase of GSMotorsinc premium vehicles"
                        className="absolute inset-0 w-full h-full"
                        style={{
                            display: 'block',
                            // Hardware-accelerated compositing — prevents canvas from disappearing on scroll
                            transform: 'translateZ(0)',
                            backfaceVisibility: 'hidden',
                            WebkitBackfaceVisibility: 'hidden',
                        }}
                    />

                    {/* Gradient Vignettes */}
                    <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/80" />
                    <div className="absolute inset-y-0 left-0 w-24 sm:w-48 z-10 pointer-events-none bg-gradient-to-r from-black/80 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-24 sm:w-48 z-10 pointer-events-none bg-gradient-to-l from-black/80 to-transparent" />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                        {children}
                    </div>
                </div>
            </div>
        </HeroScrollContext.Provider>
    );
}
