import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";
import BlogOfferCard from "@/components/blog/BlogOfferCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found | NixaTV' };
  }

  const siteUrl = 'https://www.nixatv.pro';
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImage = post.coverImage
    ? (post.coverImage.startsWith('http') ? post.coverImage : `${siteUrl}${post.coverImage}`)
    : `${siteUrl}/og-image.jpg`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: 'NixaTV',
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const splitToken = '\n## ';
  const sections = beforeFaq.split(splitToken);
  let contentPart1 = beforeFaq;
  let contentPart2 = '';
  
  if (sections.length > 2) {
    const middleIndex = Math.floor(sections.length / 2);
    contentPart1 = sections.slice(0, middleIndex).join(splitToken);
    contentPart2 = '## ' + sections.slice(middleIndex).join(splitToken);
  } else {
    const paragraphs = beforeFaq.split('\n\n');
    if (paragraphs.length > 4) {
      const mid = Math.floor(paragraphs.length / 2);
      contentPart1 = paragraphs.slice(0, mid).join('\n\n');
      contentPart2 = paragraphs.slice(mid).join('\n\n');
    }
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.coverImage ? (post.coverImage.startsWith('http') ? post.coverImage : `https://www.nixatv.pro${post.coverImage}`) : undefined,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author || "NixaTV Team",
      "url": "https://www.nixatv.pro",
    },
    "publisher": {
      "@type": "Organization",
      "name": "NixaTV",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.nixatv.pro/icon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nixatv.pro/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nixatv.pro",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.nixatv.pro/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.nixatv.pro/blog/${post.slug}`,
      },
    ],
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const markdownComponents = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ node, ...props }: any) => <h2 className="text-xl sm:text-2xl font-black mt-10 mb-4 text-white uppercase tracking-tight" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ node, ...props }: any) => <h3 className="text-lg font-bold mt-8 mb-3 text-cyan-400" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ node, ...props }: any) => <p className="mb-6 leading-relaxed text-xs sm:text-sm text-slate-300" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ node, ...props }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-xs sm:text-sm text-slate-300" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: ({ node, ...props }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-xs sm:text-sm text-slate-300" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ node, ...props }: any) => <a className="text-cyan-400 hover:text-indigo-300 underline font-bold transition-colors" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ node, ...props }: any) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-2 mb-6 italic bg-white/5 rounded-r text-[#F8FAFC]" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ node, ...props }: any) => <span className="overflow-x-auto mb-8 block"><table className="w-full text-left border-collapse" {...props} /></span>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: ({ node, ...props }: any) => <th className="border-b border-white/10 py-3 px-4 font-bold text-white bg-white/5 text-xs uppercase" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: ({ node, ...props }: any) => <td className="border-b border-white/10 py-3 px-4 text-xs text-slate-400" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ node, alt, src, ...props }: any) => (
      <span className="my-8 flex flex-col items-center block">
        <img
          src={src}
          alt={alt || "NixaTV IPTV Guide Illustration"}
          title={alt || "NixaTV IPTV Guide Illustration"}
          loading="lazy"
          className="rounded-2xl max-w-full border border-indigo-500/20"
          {...props}
        />
        {alt && <span className="text-xs text-center block mt-2 text-slate-400 opacity-80">{alt}</span>}
      </span>
    ),
  };

  return (
    <main className="w-full min-h-screen bg-[#05070E] bg-tech-grid bg-atmosphere text-[#F8FAFC] relative z-10">
      <div className="pt-16 pb-24 px-4 sm:px-6 md:px-12 max-w-[1024px] mx-auto w-full relative z-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Background Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-500/10 to-transparent blur-3xl opacity-50" />

      <Link href="/blog" className="inline-flex items-center text-xs font-black uppercase tracking-wider text-cyan-400 hover:text-indigo-300 mb-8 transition-colors group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog Listing
      </Link>

      <article className="bg-[#0C1222] border border-indigo-500/20 rounded-3xl p-6 md:p-12 shadow-2xl relative z-10">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-500/10 text-cyan-300 rounded-full text-[10px] font-black uppercase tracking-wider mb-4 border border-indigo-500/20">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span>{post.date}</span>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-2xl overflow-hidden relative w-full h-[280px] md:h-[480px] border border-indigo-500/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="max-w-none text-slate-300">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {contentPart1}
          </ReactMarkdown>

          <BlogOfferCard />

          {contentPart2 && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {contentPart2}
            </ReactMarkdown>
          )}

          <BlogOfferCard />

          {faqs.length > 0 && (
            <div className="mt-12 mb-8 border-t border-indigo-500/20 pt-8">
              <h2 className="text-xl sm:text-2xl font-black mb-6 text-white uppercase">Frequently Asked Questions</h2>
              <ArticleFAQAccordion faqs={faqs} />
            </div>
          )}

          {afterFaq && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {afterFaq}
            </ReactMarkdown>
          )}
        </div>
      </article>

      {/* Related Articles Section */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="mt-16 pt-12 border-t border-indigo-500/20 relative z-10">
            <h2 className="text-2xl font-black text-white mb-8 uppercase">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                  <article className="bg-[#0C1222] rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:border-cyan-400/50 transition-all duration-300 h-full border border-indigo-500/20 shadow-xl">
                    <div className="h-40 relative overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                        alt={relPost.title}
                        src={relPost.coverImage || "/blog/high-quality-iptv-service.webp"}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <span className="text-[10px] text-cyan-400 font-black uppercase tracking-wider mb-2">{relPost.category}</span>
                      <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors leading-snug">
                        {relPost.title}
                      </h3>
                        <p className="text-[10px] text-slate-400 line-clamp-2 mt-auto font-semibold uppercase tracking-wider">
                        {relPost.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
      </div>
    </main>
  );
}
