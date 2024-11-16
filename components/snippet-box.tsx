"use client";

import { cn } from '@/lib/utils';

interface SnippetBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function SnippetBox({ children, className }: SnippetBoxProps) {
  return (
    <div className={cn(
      "group relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md",
      "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-primary/5 before:via-transparent before:to-primary/5 before:opacity-0 before:transition-opacity hover:before:opacity-100",
      className
    )}>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}