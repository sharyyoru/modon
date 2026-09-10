import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { getBlogPost, blogPosts } from '@/lib/blog-data';
import { Button } from '@/components/ui/Button';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Modon Avenew',
    };
  }

  return {
    title: `${post.title} | Modon Avenew Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-[#0a0a0a] border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      <main className="py-16 lg:py-24">
        <article className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <span className="bg-[#C4A35A] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-light mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm mb-8">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-white mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc list-inside text-white/70 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  const items = paragraph.split('\n').filter(item => item.match(/^\d\./));
                  return (
                    <ol key={index} className="list-decimal list-inside text-white/70 space-y-2 my-4">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d\.\s*\*\*([^*]+)\*\*:?\s*/, '$1: ')}</li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-white/70 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-[#1B365D] to-[#0f1f38] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Interested in Modon Avenew?
                </h3>
                <p className="text-white/60 mb-6">
                  Register now to receive exclusive pricing and floor plans.
                </p>
                <Link href="/#register">
                  <Button size="lg">
                    Register Your Interest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
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
