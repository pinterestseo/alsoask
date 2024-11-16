import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our Terms of Service to understand the rules and guidelines for using PeopleAlsoAsk.',
  openGraph: {
    title: 'Terms of Service | PeopleAlsoAsk',
    description: 'Read our Terms of Service to understand the rules and guidelines for using PeopleAlsoAsk.'
  }
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto prose dark:prose-invert">
      <h1>Terms of Service</h1>
      
      <div className="not-prose bg-card p-6 rounded-lg border mb-8">
        <p className="text-lg text-muted-foreground">
          By accessing and using PeopleAlsoAsk, you agree to be bound by these Terms of Service.
        </p>
      </div>

      <section className="space-y-8">
        <div>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>
        </div>

        <div>
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on PeopleAlsoAsk for personal, non-commercial use only.
          </p>
          
          <h3>This license shall not allow you to:</h3>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Remove any copyright or proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </div>

        <div>
          <h2>3. Content Accuracy</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no warranties about the completeness, reliability, or accuracy of this information.
          </p>
        </div>

        <div>
          <h2>4. Links to Third-Party Sites</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites.
          </p>
        </div>

        <div>
          <h2>5. User Contributions</h2>
          <p>
            Any content you contribute must be accurate, legal, and not infringe on any third party's rights.
          </p>
        </div>

        <div>
          <h2>6. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Please review these terms periodically for changes.
          </p>
        </div>

        <div>
          <h2>Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{' '}
            <a href="mailto:legal@peoplealsoask.com">legal@peoplealsoask.com</a>
          </p>
        </div>
      </section>
    </div>
  );
}