import HomePage from '../../components/HomePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

export default async function Page({ params }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
