import HomePage from '../../components/HomePage';
import { content } from '../../lib/content';

export const metadata = {
  title: 'Dentarova | Diş Klinikleri Growth Partner',
  description: content.tr.heroText,
  alternates: { languages: { en: '/en', tr: '/tr', ar: '/ar' } },
};

export default function Page() {
  return <HomePage locale="tr" />;
}
