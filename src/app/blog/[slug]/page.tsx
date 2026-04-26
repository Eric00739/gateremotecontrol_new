import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog';
import { notFound } from 'next/navigation';
import LeadModalTrigger from '@/components/LeadModalTrigger';
import { siteName } from '@/data/site';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return (async () => {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return { title: 'Article Not Found' };
    const title = `${post.title} | GateRemoteSource`;
    return {
      title,
      description: post.excerpt,
      alternates: {
        canonical: `/blog/${post.slug}`,
      },
      openGraph: {
        type: 'article',
        siteName,
        url: `/blog/${post.slug}`,
        title,
        description: post.excerpt,
        images: [post.image],
      },
    };
  })();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      {/* Back link */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#FF8A1F] transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="bg-[#062748] relative overflow-hidden">
        <div className="absolute inset-0 tech-grid" />
        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link href="/blog" className="inline-block mb-6">
            <span className="rounded-md bg-[#FF8A1F]/10 text-[#FF8A1F] text-[11px] font-bold px-3 py-1.5 hover:bg-[#FF8A1F]/20 transition-colors">
              {blogCategories.find(c => c.key === post.category)?.label || post.category}
            </span>
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#F7FBFF] mb-4 leading-tight" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-[#7F9AB7] text-sm">
            <span className="inline-flex items-center gap-1.5" style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}>
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative h-72 sm:h-96 rounded-lg overflow-hidden border border-[#E2E8F0] shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            loading="eager"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          {/* Summary */}
          <p className="text-lg text-[#475569] leading-relaxed mb-8">{post.excerpt}</p>

          <div className="bg-white border border-[#E2E8F0] rounded-lg p-6">
            <h3 className="text-[#C45A00] font-bold mb-2" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Practical matching notes
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Use this guide as a starting point before sample confirmation. For remote compatibility, brand name is only one signal; exact matching should also check model, frequency, chip or PCB version, receiver label, and regional protocol.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-[#475569] sm:grid-cols-2">
              {['Original remote photos', 'Frequency or model label', 'Receiver or opener details', 'Target market and quantity'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A1F]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 bg-[#062748] rounded-lg p-6">
            <div>
              <h4 className="text-lg font-bold text-[#F7FBFF] mb-2" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                Need help now?
              </h4>
              <p className="text-[#C7D7E8] text-sm mb-4">
                Send us your compatibility question and we&apos;ll respond directly.
              </p>
              <LeadModalTrigger
                prefillType="support"
                className="inline-flex items-center gap-2 bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] font-bold px-5 py-2.5 rounded-lg transition-all text-sm btn-glow"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </LeadModalTrigger>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
