import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PeopleAlsoAsk. We\'re here to help answer your questions and provide support.',
  openGraph: {
    title: 'Contact Us | PeopleAlsoAsk',
    description: 'Get in touch with PeopleAlsoAsk. We\'re here to help answer your questions and provide support.'
  }
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-3 mb-12">
        <div className="space-y-3">
          <Mail className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-muted-foreground">support@peoplealsoask.com</p>
        </div>
        <div className="space-y-3">
          <MessageSquare className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Live Chat</h2>
          <p className="text-muted-foreground">Available Monday to Friday, 9am-5pm EST</p>
        </div>
        <div className="space-y-3">
          <MapPin className="h-8 w-8 text-primary" />
          <h2 className="text-xl font-semibold">Office</h2>
          <p className="text-muted-foreground">123 Knowledge Street, Web City, 12345</p>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <ContactForm />
      </div>
    </div>
  );
}