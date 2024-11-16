import { type Article } from '@/types';

export function generateCanonicalUrl(path: string): string {
  return `https://peoplealsoask.com${path}`;
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.snippet,
    articleBody: article.content,
    datePublished: article.publishedAt || new Date().toISOString(),
    dateModified: article.updatedAt || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'PeopleAlsoAsk',
      url: 'https://peoplealsoask.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'PeopleAlsoAsk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://peoplealsoask.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': generateCanonicalUrl(`/question/${article.slug}`)
    }
  };
}