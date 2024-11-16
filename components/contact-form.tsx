"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium mb-2 block">Name</label>
          <Input placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email</label>
          <Input type="email" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Subject</label>
        <Input placeholder="How can we help?" />
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Message</label>
        <textarea 
          className="w-full min-h-[150px] rounded-md border bg-background px-3 py-2 text-sm"
          placeholder="Your message..."
        />
      </div>
      <Button className="w-full md:w-auto">Send Message</Button>
    </form>
  );
}