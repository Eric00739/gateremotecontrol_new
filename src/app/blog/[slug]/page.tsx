import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blog';
import { notFound } from 'next/navigation';
import LeadModalTrigger from '@/components/LeadModalTrigger';

export async function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return (async () => {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return { title: 'Article Not Found' };
    return {
      title: `${post.title} — GateRemoteSource`,
      description: post.excerpt,
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
            <span className="rounded-full bg-[#FF8A1F]/10 text-[#FF8A1F] text-[11px] font-bold px-3 py-1.5 hover:bg-[#FF8A1F]/20 transition-colors">
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
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl">
          {/* Summary */}
          <p className="text-lg text-[#475569] leading-relaxed mb-8">{post.excerpt}</p>

          {/* Coming Soon Notice */}
          <div className="bg-[#FF8A1F]/8 border border-[#FF8A1F]/20 rounded-xl p-6">
            <h3 className="text-[#C45A00] font-bold mb-2" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
              Full article coming soon
            </h3>
            <p className="text-[#94723A] text-sm leading-relaxed">
              We&apos;re writing a detailed guide on this topic. In the meantime, if you have questions about {post.title.toLowerCase()}, feel free to reach out to our team for direct compatibility support.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-[#062748] rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF8A1F] rounded-full opacity-[0.04] blur-[60px]" />
            <div className="relative">
              <h4 className="text-lg font-bold text-[#F7FBFF] mb-2" style={{ fontFamily: 'var(--font-outfit), sans-serif' }}>
                Need help now?
              </h4>
              <p className="text-[#C7D7E8] text-sm mb-4">
                Send us your compatibility question and we&apos;ll respond directly.
              </p>
              <LeadModalTrigger
                prefillType="support"
                className="inline-flex items-center gap-2 bg-[#FF8A1F] hover:bg-[#F97316] text-[#062748] font-bold px-5 py-2.5 rounded-xl transition-all text-sm btn-glow"
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
