import { type Article } from '@/types';

export function generateArticleStructuredData(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.snippet,
    articleBody: article.content,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'PeopleAlsoAsk',
      url: 'https://peoplealsoask.com'
    }
  };
}

export function generateFAQStructuredData(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: article.title,
        acceptedAnswer: {
          '@type': 'Answer',
          text: article.snippet
        }
      }
    ]
  };
}

export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'PeopleAlsoAsk',
    url: 'https://peoplealsoask.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://peoplealsoask.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };
}