import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Categories',
    template: '%s | PeopleAlsoAsk'
  },
  description: 'Browse questions by category on PeopleAlsoAsk.',
};

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}