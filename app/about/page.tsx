import type { Metadata } from 'next';
import { SnippetBox } from '@/components/snippet-box';
import { Users, BookOpen, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PeopleAlsoAsk\'s mission to make knowledge accessible and understandable for everyone.',
  openGraph: {
    title: 'About Us | PeopleAlsoAsk',
    description: 'Learn about PeopleAlsoAsk\'s mission to make knowledge accessible and understandable for everyone.'
  }
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-8">About PeopleAlsoAsk</h1>
      
      <SnippetBox className="mb-12">
        <p className="text-lg text-muted-foreground">
          We're dedicated to providing comprehensive, accurate answers to the questions people frequently ask online. Our mission is to make knowledge accessible and understandable for everyone.
        </p>
      </SnippetBox>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <div className="space-y-3">
          <Users className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Expert Contributors</h2>
          <p className="text-muted-foreground">Our content is written and reviewed by subject matter experts across various fields.</p>
        </div>
        <div className="space-y-3">
          <BookOpen className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">In-depth Research</h2>
          <p className="text-muted-foreground">Every answer is thoroughly researched and fact-checked for accuracy and completeness.</p>
        </div>
        <div className="space-y-3">
          <Award className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Quality First</h2>
          <p className="text-muted-foreground">We maintain high standards for content quality and user experience.</p>
        </div>
      </div>

      <section className="prose dark:prose-invert max-w-none">
        <h2>Our Story</h2>
        <p>
          PeopleAlsoAsk was founded with a simple mission: to provide clear, comprehensive answers to the questions people frequently search for online. We noticed that while information is abundant on the internet, finding reliable, well-organized answers can be challenging.
        </p>
        
        <h2>Our Approach</h2>
        <p>
          We take a structured approach to creating content:
        </p>
        <ul>
          <li>Research-based answers from reliable sources</li>
          <li>Clear, concise explanations that anyone can understand</li>
          <li>Regular updates to keep information current</li>
          <li>User-friendly organization and presentation</li>
        </ul>
      </section>
    </div>
  );
}