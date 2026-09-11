import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Dentarova | Dental Growth Partner',
  description: 'Dentarova builds patient growth systems for dental clinics: qualified leads, appointments and measurable growth.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>;
}
