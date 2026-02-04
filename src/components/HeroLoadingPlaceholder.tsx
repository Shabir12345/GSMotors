import React from 'react';

interface HeroLoadingPlaceholderProps {
  progress?: number;
}

export default function HeroLoadingPlaceholder({ progress = 0 }: HeroLoadingPlaceholderProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-darker via-brand-dark to-black overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 via-brand-highlight/20 to-brand-accent/20 animate-pulse"
          style={{ width: '200%', left: '-50%' }}
        />
      </div>

      {/* Loading content */}
      <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            GS Motors
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 opacity-80">
            Loading Premium Experience...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-80 max-w-full mx-auto">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-brand-accent to-brand-highlight transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-gray-500">{progress}%</p>
        </div>
      </div>
    </div>
  );
}
