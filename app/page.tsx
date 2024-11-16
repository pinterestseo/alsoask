"use client";

import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#EEF5FF] dark:bg-slate-900 min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-[#6366F1] text-white mb-6">
              Discover Knowledge
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#6366F1] dark:text-[#818CF8] mb-6 leading-tight">
              Your Questions,<br />
              Expertly Answered
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover comprehensive answers to life's most pressing questions, curated by experts and backed by research.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What's your question?"
                  className="w-full h-16 px-6 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1] focus:ring-opacity-50 outline-none text-lg dark:text-white dark:placeholder-gray-400"
                />
                <Button 
                  type="submit"
                  className="absolute right-2 top-2 h-12 w-12 rounded-full bg-black dark:bg-[#6366F1] hover:bg-gray-800 dark:hover:bg-[#5558E3]"
                  size="icon"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Questions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Questions</h2>
            <Link 
              href="/questions" 
              className="text-[#6366F1] hover:text-[#5558E3] dark:text-[#818CF8] dark:hover:text-[#6366F1] font-medium flex items-center gap-2"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="space-y-6">
            {Object.entries(articles).map(([slug, article]) => (
              <Link key={slug} href={`/question/${slug}`}>
                <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-6 hover:shadow-lg transition-all">
                  <div className="flex gap-6">
                    {article.featuredImage && (
                      <div className="relative w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={article.featuredImage.url}
                          alt={article.featuredImage.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {article.snippet}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}