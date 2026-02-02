'use client';

import { useState } from 'react';

interface DealerRegistrationFormProps {
    onSuccess: () => void;
}

export default function DealerRegistrationForm({ onSuccess }: DealerRegistrationFormProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        onSuccess();
    };

    return (
        <div className="w-full max-w-md mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent to-purple-600 rounded-2xl opacity-50 blur group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-gray-900 border border-white/10 rounded-xl p-8 shadow-2xl">
                <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Dealer Access</h3>
                    <p className="text-gray-400 text-sm">Register to view exclusive wholesale inventory and pricing.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">
                            Dealership Name
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                            placeholder="Enter dealership name"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">
                            Dealer License #
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                            placeholder="License number"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">
                            Business Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                            placeholder="purchasing@dealership.com"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-6 bg-brand-accent hover:bg-brand-accent-glow text-white font-bold py-3 rounded-lg shadow-lg shadow-brand-accent/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Verifying...
                            </>
                        ) : (
                            'Request Access'
                        )}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Secure SSL Connection. Verified Dealers Only.
                    </p>
                </form>
            </div>
        </div>
    );
}
