import HomePage from '../../components/HomePage';
import { content } from '../../lib/content';

export const metadata = {
  title: 'Dentarova | شريك نمو لعيادات الأسنان',
  description: content.ar.heroText,
  alternates: { languages: { en: '/en', tr: '/tr', ar: '/ar' } },
};

export default function Page() {
  return <HomePage locale="ar" />;
}
