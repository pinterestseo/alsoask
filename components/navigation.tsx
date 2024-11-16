"use client";

import Link from 'next/link';
import { MoonIcon, SunIcon, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export function Navigation() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-[#6366F1]" />
            <span className="text-xl font-bold text-[#6366F1] dark:text-[#818CF8]">
              PeopleAlsoAsk
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/questions"
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors"
            >
              Browse Questions
            </Link>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}