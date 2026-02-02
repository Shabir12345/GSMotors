'use client';

import { useState } from 'react';

export default function TradeInForm() {
    const [formData, setFormData] = useState({
        year: '',
        make: '',
        model: '',
        vin: '',
        mileage: '',
        condition: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Details Submitted</h3>
                <p className="text-gray-400 mb-6">
                    Thanks, {formData.firstName}. We'll evaluate your {formData.year} {formData.make} {formData.model} and send you a preliminary offer shortly.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-accent hover:text-brand-accent-glow font-medium transition-colors"
                >
                    Value another vehicle
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Value Your Trade</h3>
                <p className="text-sm text-gray-400">
                    Get a competitive offer for your current vehicle in minutes.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h4 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Vehicle Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Year</label>
                            <input
                                type="number"
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                                placeholder="2018"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Make</label>
                            <input
                                type="text"
                                name="make"
                                value={formData.make}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                                placeholder="BMW"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Model</label>
                            <input
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                                placeholder="X5"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">VIN (Optional)</label>
                            <input
                                type="text"
                                name="vin"
                                value={formData.vin}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                                placeholder="17-digit VIN"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Mileage</label>
                            <input
                                type="number"
                                name="mileage"
                                value={formData.mileage}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                                placeholder="45,000"
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-xs font-medium text-gray-400 mb-1">Condition</label>
                        <select
                            name="condition"
                            value={formData.condition}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent cursor-pointer"
                        >
                            <option value="" className="bg-gray-900 text-gray-400">Select Condition</option>
                            <option value="Excellent" className="bg-gray-900">Excellent (Looks New)</option>
                            <option value="Good" className="bg-gray-900">Good (Minor Wear)</option>
                            <option value="Fair" className="bg-gray-900">Fair (Visible Wear)</option>
                            <option value="Poor" className="bg-gray-900">Poor (Needs Work)</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Your Contact Info</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-modern bg-white text-brand-dark hover:bg-gray-100 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-white/10 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {loading ? 'Processing...' : 'Get My Offer'}
                    </button>
                </div>
            </form>
        </div>
    );
}
