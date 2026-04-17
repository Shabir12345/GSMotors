import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blog';
import PageHero from '@/components/PageHero';
import PageCTA from '@/components/PageCTA';

export const metadata = {
    title: 'Blog — Car Buying Guides, Tips & Insights | GS Motors',
    description: 'Expert guides, buying tips, and Toronto market insights. Everything you need to know about purchasing a quality pre-owned vehicle.',
};

export default function BlogPage() {
    const allPosts = getAllBlogPosts();

    return (
        <div className="min-h-screen bg-brand-darker">
            <PageHero
                badge="Resource Centre"
                title={<>Car Buying <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-highlight">Insights</span></>}
                subtitle="Expert guides, buying tips, and local Toronto market insights. Learn everything you need to know about purchasing a quality pre-owned vehicle."
                breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]}
            />

            <section className="container mx-auto px-4 md:px-6 pb-14">
                {allPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] hover:border-brand-accent/30 rounded-2xl overflow-hidden transition-all duration-300"
                            >
                                <div className="p-6 md:p-7 flex flex-col flex-1">
                                    {/* Category */}
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 rounded-full border border-brand-accent/20">
                                            {post.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/[0.07] pt-4 mt-auto">
                                        <span>
                                            {new Date(post.date).toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span>{post.readingTime} min read</span>
                                    </div>

                                    {/* CTA */}
                                    <div className="mt-4 flex items-center gap-1.5 text-brand-accent font-semibold text-sm group-hover:gap-2.5 transition-all">
                                        <span>Read Article</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/[0.04] border border-white/[0.07] rounded-2xl">
                        <p className="text-gray-400 text-base mb-2">No articles published yet.</p>
                        <p className="text-gray-500 text-sm">Check back soon for buying guides and market insights.</p>
                    </div>
                )}
            </section>

            <PageCTA
                title="Ready to Find Your Next Vehicle?"
                subtitle="Browse our certified pre-owned inventory and experience the GS Motors difference."
                primaryLabel="Browse Inventory"
                secondaryLabel="Contact Us"
            />
        </div>
    );
}
