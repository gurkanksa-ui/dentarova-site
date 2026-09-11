import { content } from '../../lib/content';

export const dynamicParams = false;

export function generateStaticParams(){ return [{locale:'en'},{locale:'tr'},{locale:'ar'}]; }

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const names = { en: 'Dentarova | Dental Growth Partner', tr: 'Dentarova | Diş Klinikleri Growth Partner', ar: 'Dentarova | شريك نمو لعيادات الأسنان' };
  return {
    title: names[locale] || names.en,
    description: content[locale]?.heroText || content.en.heroText,
    alternates: { languages: { en:'/en', tr:'/tr', ar:'/ar' } },
  };
}

export default function LocaleLayout({ children, params }) {
  return children;
}
