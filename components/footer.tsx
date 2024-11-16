"use client";

import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { NewsletterForm } from './newsletter-form';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const categories = [
    { name: 'Technology', href: '/category/technology' },
    { name: 'Health', href: '/category/health' },
    { name: 'Science', href: '/category/science' },
    { name: 'Business', href: '/category/business' },
  ];

  const resources = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PeopleAlsoAsk</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover comprehensive answers to your most pressing questions. Expert insights and detailed explanations on various topics.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} PeopleAlsoAsk. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}