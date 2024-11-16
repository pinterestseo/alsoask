import Image from 'next/image';
import { TableOfContents } from '@/components/toc';
import { SnippetBox } from '@/components/snippet-box';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateArticleStructuredData, generateFAQStructuredData } from '@/lib/seo';
import { articles } from '@/data/articles';

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug: slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles[params.slug];
  
  if (!article) {
    return {
      title: 'Not Found',
      description: 'The requested article could not be found'
    };
  }

  return {
    title: article.title,
    description: article.snippet,
    openGraph: {
      title: `${article.title} | PeopleAlsoAsk`,
      description: article.snippet,
      type: 'article',
      images: article.featuredImage ? [
        {
          url: article.featuredImage.url,
          alt: article.featuredImage.alt,
          width: 1200,
          height: 630
        }
      ] : []
    }
  };
}

export default function QuestionPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  const articleStructuredData = generateArticleStructuredData(article);
  const faqStructuredData = generateFAQStructuredData(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <article className="prose dark:prose-invert">
            <h1 className="text-3xl font-semibold mb-6">{article.title}</h1>
            
            {article.category && (
              <div className="mb-6">
                <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
            )}

            {article.featuredImage && (
              <div className="my-8 relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={article.featuredImage.url}
                  alt={article.featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
                {article.featuredImage.caption && (
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    {article.featuredImage.caption}
                  </p>
                )}
              </div>
            )}
            
            <SnippetBox className="my-8">
              <p className="text-lg text-muted-foreground leading-relaxed m-0">{article.snippet}</p>
            </SnippetBox>

            <div 
              className="mt-8 space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          <aside className="hidden lg:block fixed top-24 right-[max(2rem,calc(50%-45rem))]">
            <div className="w-64">
              <TableOfContents headings={article.headings} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}