import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Sparkles } from "lucide-react";

export default function LatestArticlesSection() {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#05070E] bg-tech-grid bg-atmosphere text-white relative z-10 border-t border-indigo-500/20 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 border border-indigo-500/30 rounded-full px-4 py-1 bg-[#0C1222] text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> NIXATV GUIDES & INSIGHTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Latest <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">IPTV Articles</span> & Tutorials
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Stay up to date with setup guides, device optimization, and streaming news from NixaTV engineers.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className={`grid gap-6 mb-12 ${displayPosts.length === 1 ? 'grid-cols-1 max-w-lg mx-auto' : displayPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
          {displayPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <article className="nixa-card overflow-hidden flex flex-col group cursor-pointer h-full border border-indigo-500/20">
                <div className="h-48 relative overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    alt={post.title}
                    src={post.coverImage || "/og-image.jpg"}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={192}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1222] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#05070E]/80 backdrop-blur-md text-cyan-400 rounded-full text-xs font-bold border border-indigo-500/30">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-snug text-white group-hover:text-cyan-300 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.description}
                  </p>
                  <div className="mt-auto text-slate-400 text-xs font-medium flex items-center justify-between border-t border-white/10 pt-4">
                    <span>{post.date}</span>
                    <span className="flex items-center text-cyan-400 group-hover:translate-x-1 transition-transform font-bold text-xs">
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="btn-secondary text-sm">
              View All Articles & Tutorials <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
