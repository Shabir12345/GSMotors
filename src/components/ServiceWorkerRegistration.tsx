'use client';

import { useEffect } from 'react';
import { registerServiceWorker, unregisterServiceWorker } from '@/utils/register-sw';

export default function ServiceWorkerRegistration() {
    useEffect(() => {
        // In development, we want to ensure NO service worker is interfering
        if (process.env.NODE_ENV === 'development') {
            unregisterServiceWorker();
        } else {
            registerServiceWorker();
        }
    }, []);

    return null;
}
