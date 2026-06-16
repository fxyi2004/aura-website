import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../globals.css';

export const metadata: Metadata = {
  title: {
    default: 'AURA INTELLIGENT SYSTEMS',
    template: '%s | AURA'
  },
  description: 'Unmanned systems integrator — UAV, UGV, USV solutions for agriculture, security, logistics, and more.',
  keywords: ['UAV', 'UGV', 'USV', 'unmanned systems', 'drone', 'robot', 'smart agriculture', 'inspection'],
  authors: [{ name: 'AURA INTELLIGENT SYSTEMS' }],
  openGraph: {
    type: 'website',
    siteName: 'AURA INTELLIGENT SYSTEMS',
    title: 'AURA - Unmanned Systems Solutions',
    description: 'Professional unmanned systems solution provider',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
