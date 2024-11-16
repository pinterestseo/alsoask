import { SnippetBox } from '@/components/snippet-box';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categories = {
  'technology': {
    title: 'Technology Questions',
    description: 'Explore questions about artificial intelligence, blockchain, programming, and other tech topics.',
    questions: [
      {
        id: 1,
        question: "What is artificial intelligence?",
        snippet: "Artificial Intelligence (AI) is the simulation of human intelligence by machines. It enables systems to mimic human learning, reasoning, and problem-solving capabilities.",
        slug: "what-is-artificial-intelligence"
      },
      {
        id: 2,
        question: "How does blockchain work?",
        snippet: "Blockchain is a decentralized digital ledger that records transactions across a network of computers. Each block contains transaction data and is linked to previous blocks, forming a chain.",
        slug: "how-does-blockchain-work"
      }
    ]
  },
  'health': {
    title: 'Health Questions',
    description: 'Find answers about wellness, meditation, exercise, nutrition, and other health-related topics.',
    questions: [
      {
        id: 3,
        question: "What are the benefits of meditation?",
        snippet: "Meditation offers numerous benefits including reduced stress and anxiety, improved focus and concentration, better emotional well-being, and enhanced self-awareness.",
        slug: "benefits-of-meditation"
      }
    ]
  },
  'science': {
    title: 'Science Questions',
    description: 'Discover answers about physics, chemistry, biology, astronomy, and other scientific fields.',
    questions: []
  },
  'business': {
    title: 'Business Questions',
    description: 'Learn about entrepreneurship, management, finance, marketing, and other business topics.',
    questions: []
  }
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = categories[params.slug as keyof typeof categories];
  
  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found'
    };
  }

  return {
    title: category.title,
    description: category.description,
    openGraph: {
      title: `${category.title} | PeopleAlsoAsk`,
      description: category.description,
      type: 'website'
    }
  };
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug: slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{category.title}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
      </div>

      {category.questions.length > 0 ? (
        <div className="grid gap-6">
          {category.questions.map((q) => (
            <Link key={q.id} href={`/question/${q.slug}`}>
              <SnippetBox>
                <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
                <p className="text-muted-foreground leading-relaxed">{q.snippet}</p>
              </SnippetBox>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No questions available in this category yet.</p>
        </div>
      )}
    </div>
  );
}