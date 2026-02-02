'use client';

import { useState } from 'react';

export default function FinancingForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        annualIncome: '',
        creditScore: '',
        downPayment: '',
        employmentStatus: 'Employed',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

        // In a real implementation:
        // await fetch('/api/financing', { method: 'POST', body: JSON.stringify(formData) });

        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                <p className="text-gray-400 mb-6">
                    Thank you, {formData.firstName}. Our finance specialists will review your information and contact you shortly.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-accent hover:text-brand-accent-glow font-medium transition-colors"
                >
                    Submit another application
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl shadow-brand-accent/5">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Quick Pre-Approval</h3>
                <p className="text-sm text-gray-400">
                    Get started with our secure, no-obligation financing application.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="John"
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
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="Doe"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="john@example.com"
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
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Annual Income</label>
                        <input
                            type="number"
                            name="annualIncome"
                            value={formData.annualIncome}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="$100,000"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-400 mb-1">Est. Down Payment</label>
                        <input
                            type="number"
                            name="downPayment"
                            value={formData.downPayment}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="$10,000"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">Credit Score Estimate</label>
                    <select
                        name="creditScore"
                        value={formData.creditScore}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors cursor-pointer"
                    >
                        <option value="" className="bg-gray-900 text-gray-400">Select Score Range</option>
                        <option value="excellent" className="bg-gray-900">Excellent (720+)</option>
                        <option value="good" className="bg-gray-900">Good (680-719)</option>
                        <option value="fair" className="bg-gray-900">Fair (640-679)</option>
                        <option value="poor" className="bg-gray-900">Needs Work (Below 640)</option>
                    </select>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white py-3.5 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            'Get Pre-Approved Now'
                        )}
                    </button>
                    <p className="text-center text-[10px] text-gray-500 mt-3">
                        By submitting, you agree to our privacy policy. Your information is secure.
                    </p>
                </div>
            </form>
        </div>
    );
}
