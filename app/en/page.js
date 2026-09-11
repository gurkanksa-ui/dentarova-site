import HomePage from '../../components/HomePage';
import { content } from '../../lib/content';

export const metadata = {
  title: 'Dentarova | Dental Growth Partner',
  description: content.en.heroText,
  alternates: { languages: { en: '/en', tr: '/tr', ar: '/ar' } },
};

export default function Page() {
  return <HomePage locale="en" />;
}
