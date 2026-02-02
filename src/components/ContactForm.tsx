'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-gray-400 mb-6">
                    Thank you for reaching out, {formData.name}. Our concierge team will get back to you shortly.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-brand-accent hover:text-brand-accent-glow font-medium transition-colors"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                        placeholder="Your Name"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                            placeholder="(555) 123-4567"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors"
                        placeholder="How can we help you?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-modern bg-brand-accent hover:bg-brand-accent-glow text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-brand-accent/20 disabled:opacity-70 disabled:hover:scale-100"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
