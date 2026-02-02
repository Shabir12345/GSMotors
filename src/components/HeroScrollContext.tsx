'use client';

import { createContext, useContext } from 'react';

interface HeroScrollContextType {
    progress: number;
    currentFrame: number;
    isLoaded: boolean;
}

export const HeroScrollContext = createContext<HeroScrollContextType>({
    progress: 0,
    currentFrame: 0,
    isLoaded: false
});

export const useHeroScroll = () => useContext(HeroScrollContext);
