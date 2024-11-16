import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/seo-utils';

interface BreadcrumbsProps {
  items: {
    name: string;
    href: string;
  }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = generateBreadcrumbSchema(
    items.map(item => ({
      name: item.name,
      url: `https://peoplealsoask.com${item.href}`
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
              {index === items.length - 1 ? (
                <span className="text-foreground">{item.name}</span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}