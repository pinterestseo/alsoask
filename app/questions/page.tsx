"use client";

import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { articles } from '@/data/articles';
import Image from 'next/image';
import { useState } from 'react';

export default function QuestionsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = Object.entries(articles).filter(([_, article]) => {
    const query = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(query) ||
      article.snippet.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12 space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Browse Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore our curated collection of questions and comprehensive answers
          </p>
        </div>
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            className="pl-10 h-12 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-8">
        {filteredArticles.map(([slug, article]) => (
          <Link key={slug} href={`/question/${slug}`}>
            <div className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:shadow-lg transition-all">
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
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {article.title}
                    </h2>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                      {article.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-200 text-lg">
                    {article.snippet}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}