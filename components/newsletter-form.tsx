"use client";

import { Button } from '@/components/ui/button';

export function NewsletterForm() {
  return (
    <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-3 py-2 text-sm rounded-md border bg-background"
      />
      <Button className="w-full">Subscribe</Button>
    </form>
  );
}