import React from 'react';
import Breadcrumb from './Breadcrumb';

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface PageHeroProps {
    badge?: string;
    badgeColor?: 'blue' | 'green' | 'amber' | 'indigo' | 'purple' | 'gray' | 'red';
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    centered?: boolean;
    children?: React.ReactNode;
}

const badgeColorMap = {
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    green: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    indigo: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    gray: 'bg-white/5 border-white/10 text-gray-400',
    red: 'bg-red-500/10 border-red-500/20 text-red-400',
};

export default function PageHero({
    badge,
    badgeColor = 'blue',
    title,
    subtitle,
    breadcrumbs,
    centered = true,
    children,
}: PageHeroProps) {
    return (
        <div className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {breadcrumbs && (
                    <div className="mb-8">
                        <Breadcrumb items={breadcrumbs} />
                    </div>
                )}
                <div className={centered ? 'text-center max-w-4xl mx-auto' : 'max-w-4xl'}>
                    {badge && (
                        <div className={`inline-flex items-center px-3 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase mb-5 ${badgeColorMap[badgeColor]}`}>
                            {badge}
                        </div>
                    )}
                    <h1 className="font-bold text-white mb-4 tracking-tight">{title}</h1>
                    {subtitle && (
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                    {children}
                </div>
            </div>
        </div>
    );
}
