"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { articles } from '@/data/articles';
import Link from 'next/link';
import { SnippetBox } from '@/components/snippet-box';

// Komponen untuk hasil pencarian
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const searchResults = Object.entries(articles).filter(([_, article]) => {
    return (
      article.title.toLowerCase().includes(query) ||
      article.snippet.toLowerCase().includes(query) ||
      article.content.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        Search Results for "{query}"
      </h1>

      {searchResults.length > 0 ? (
        <div className="space-y-6">
          {searchResults.map(([slug, article]) => (
            <Link key={slug} href={`/question/${slug}`}>
              <SnippetBox>
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-muted-foreground">{article.snippet}</p>
              </SnippetBox>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No results found for your search.</p>
      )}
    </div>
  );
}

// Komponen utama dengan Suspense
export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Searching...</h1>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}