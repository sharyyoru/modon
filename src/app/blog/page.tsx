import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export const metadata = {
  title: 'Blog | Modon Avenew',
  description: 'Latest insights and articles about luxury living, home financing, and Abu Dhabi real estate.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-[#0a0a0a] border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl text-white font-light mb-6">
              Insights & <span className="font-semibold">Articles</span>
            </h1>
            <p className="text-white/60 text-lg">
              Stay informed with the latest news about luxury living, home financing,
              and Abu Dhabi real estate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <article className="bg-[#141414] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C4A35A]/30 transition-all duration-300 h-full">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C4A35A] text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-white/40 text-sm mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-white text-lg font-semibold mb-2 group-hover:text-[#C4A35A] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-white/50 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Modon Properties. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
