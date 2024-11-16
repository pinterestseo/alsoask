interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article';
}

export function MetaTags({
  title,
  description,
  keywords,
  ogImage,
  canonical,
  type = 'website'
}: MetaTagsProps) {
  return (
    <>
      <title>{title} | PeopleAlsoAsk</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </>
  );
}