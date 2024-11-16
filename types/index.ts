export interface Article {
  title: string;
  snippet: string;
  content: string;
  headings: {
    id: string;
    text: string;
    level: number;
  }[];
  keywords?: string[];
  category?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  slug?: string;
  featuredImage?: {
    url: string;
    alt: string;
    caption?: string;
  };
}