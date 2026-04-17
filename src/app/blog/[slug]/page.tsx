import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${post.title} | GS Motors Blog`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  // Parse markdown-like content (simple conversion)
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-4xl font-bold text-white mt-12 mb-6 tracking-tight">
            {paragraph.replace('# ', '')}
          </h1>
        );
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-xl font-bold text-white mt-8 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').filter(l => l.startsWith('- '));
        return (
          <ul key={idx} className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4">
            {items.map((item, i) => (
              <li key={i}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      }
      if (paragraph.startsWith('❌') || paragraph.startsWith('✓')) {
        return (
          <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 text-gray-300">
            {paragraph}
          </div>
        );
      }
      if (paragraph.match(/^#+\s/)) {
        return null; // Already handled
      }

      return (
        <p key={idx} className="text-gray-400 leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    datePublished: post.date,
    keywords: post.keywords,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-brand-dark pt-20 md:pt-28">
        {/* Breadcrumb */}
        <section className="container mx-auto px-4 py-4 max-w-3xl">
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${params.slug}` }
            ]}
          />
        </section>

        {/* Article Header */}
        <section className="container mx-auto px-4 max-w-3xl section-padding">
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-brand-accent hover:text-brand-highlight transition-colors flex items-center gap-2 mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-500 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">By</span>
                <span className="text-white font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="container mx-auto px-4 max-w-3xl section-padding prose-custom">
          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>
        </section>

        {/* Share & CTA */}
        <section className="container mx-auto px-4 max-w-3xl section-padding border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Found this helpful?</h3>
              <p className="text-gray-400">Share with friends looking to buy a used car in Toronto.</p>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"
                title="Share on Facebook"
              >
                f
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? window.location.href : ''}&text=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"
                title="Share on Twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 section-padding">
            <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-2xl overflow-hidden border border-white/5 hover:border-brand-accent/50 transition-all bg-gradient-to-br from-white/5 to-transparent p-6"
                >
                  <span className="inline-block px-2 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 rounded mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center text-brand-accent font-semibold text-sm">
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container mx-auto px-4 section-padding bg-gradient-to-r from-brand-accent/10 to-brand-highlight/10 rounded-3xl border border-white/5 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to Find Your Next Car?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Browse our inventory of quality pre-owned vehicles with full inspections and warranty protection.
          </p>
          <Link
            href="/inventory"
            className="btn-modern bg-white text-brand-darker hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 inline-block"
          >
            Browse Inventory
          </Link>
        </section>
      </div>
    </>
  );
}
