'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from './ui/Button';
import { useSectionTracking } from '@/hooks/useTracking';
import { getFeaturedPosts } from '@/lib/blog-data';

export function FeaturedArticles() {
  const trackRef = useSectionTracking('articles');
  const posts = getFeaturedPosts(3);

  return (
    <section id="articles" ref={trackRef} className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Insights
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-light">
              Latest <span className="font-semibold">Articles</span>
            </h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="group">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
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
                  <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-[#C4A35A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
