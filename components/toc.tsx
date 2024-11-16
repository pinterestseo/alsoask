"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TocProps {
  headings: { id: string; text: string; level: number }[];
}

export function TableOfContents({ headings }: TocProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            // Add active-heading class to the heading
            const heading = document.getElementById(entry.target.id);
            if (heading) {
              heading.classList.add('active-heading');
            }
          } else {
            // Remove active-heading class when not intersecting
            const heading = document.getElementById(entry.target.id);
            if (heading) {
              heading.classList.remove('active-heading');
            }
          }
        });
      },
      { rootMargin: '-80px 0px -40% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      // Clean up active-heading classes
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          element.classList.remove('active-heading');
        }
      });
    };
  }, [headings]);

  return (
    <nav className="space-y-2 rounded-xl border bg-card p-6 sticky top-24">
      <p className="font-medium mb-4">Table of Contents</p>
      <ul className="space-y-3 text-sm">
        {headings.map(({ id, text, level }) => (
          <li
            key={id}
            style={{ paddingLeft: `${(level - 2) * 1}rem` }}
          >
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  setActiveId(id);
                }
              }}
              className={cn(
                'hover:text-primary inline-block transition-colors',
                activeId === id
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground'
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}