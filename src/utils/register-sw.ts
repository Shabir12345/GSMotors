/**
 * Service Worker Registration Utility
 * Registers the service worker for offline caching and performance optimization
 */

export function registerServiceWorker() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
        return;
    }

    // Only register in production or when explicitly enabled
    if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_ENABLE_SW) {
        console.log('Service worker disabled in development');
        // Force unregister in dev to clean up potentially stale workers
        unregisterServiceWorker();
        return;
    }

    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered:', registration.scope);

                // Check for updates periodically
                setInterval(() => {
                    registration.update();
                }, 60 * 60 * 1000); // Check every hour

                // Listen for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;

                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New service worker available, notify user
                                console.log('New version available! Refresh to update.');

                                // Optionally show a notification to the user
                                if (window.confirm('A new version is available. Refresh to update?')) {
                                    window.location.reload();
                                }
                            }
                        });
                    }
                });
            })
            .catch((error) => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

export async function unregisterServiceWorker() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
        return;
    }

    try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
            await registration.unregister();
            console.log('Service Worker unregistered');
        }

        // Clear all caches to fix hydration/MIME issues
        if ('caches' in window) {
            const cacheNames = await caches.keys();
            for (const name of cacheNames) {
                await caches.delete(name);
                console.log('Cache deleted:', name);
            }
        }
    } catch (error) {
        console.error('Service Worker/Cache cleanup failed:', error);
    }
}
