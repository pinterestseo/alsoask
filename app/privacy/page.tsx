import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how PeopleAlsoAsk collects, uses, and protects your personal information. Read our comprehensive privacy policy.',
  openGraph: {
    title: 'Privacy Policy | PeopleAlsoAsk',
    description: 'Learn how PeopleAlsoAsk collects, uses, and protects your personal information.'
  }
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto prose dark:prose-invert">
      <h1>Privacy Policy</h1>
      
      <div className="not-prose bg-card p-6 rounded-lg border mb-8">
        <p className="text-lg text-muted-foreground">
          At PeopleAlsoAsk, we take your privacy seriously. This Privacy Policy explains how we collect,
          use, and protect your personal information.
        </p>
      </div>

      <section className="space-y-6">
        <div>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Email address (when you subscribe to our newsletter)</li>
            <li>Name and contact information (when you contact us)</li>
            <li>Usage data and analytics</li>
          </ul>
        </div>

        <div>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Send you updates and newsletters (if subscribed)</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and user experience</li>
          </ul>
        </div>

        <div>
          <h2>Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, modification, or destruction.
          </p>
        </div>

        <div>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </div>

        <div>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@peoplealsoask.com">privacy@peoplealsoask.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}