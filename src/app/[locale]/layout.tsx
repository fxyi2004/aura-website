import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HtmlLang from '../components/HtmlLang';
import '../globals.css';

const META: Record<string, { title: string; description: string; keywords: string[] }> = {
  en: {
    title: 'AURA INTELLIGENT SYSTEMS',
    description: 'Unmanned systems integrator specializing in UAV, UGV, and USV solutions for agriculture, security, logistics, emergency response, and more.',
    keywords: ['UAV', 'UGV', 'USV', 'unmanned systems', 'drone', 'robot', 'smart agriculture', 'inspection', 'logistics drone', 'security robot'],
  },
  zh: {
    title: 'AURA 智能无人系统',
    description: '无人系统集成商，专注空、地、水无人系统落地应用。覆盖智慧农业、安防巡检、物流配送、应急救援等核心场景，自有品牌产品+行业精选设备，一站式交付。',
    keywords: ['无人机', '无人车', '无人船', '无人系统', '植保无人机', '安防机器人', '智慧农业', '物流无人机', '应急救援'],
  },
  es: {
    title: 'AURA SISTEMAS INTELIGENTES',
    description: 'Integrador de sistemas no tripulados especializado en soluciones UAV, UGV y USV para agricultura inteligente, seguridad, logística y respuesta a emergencias.',
    keywords: ['UAV', 'UGV', 'USV', 'sistemas no tripulados', 'dron', 'robot', 'agricultura inteligente', 'inspección', 'logística', 'robot de seguridad'],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return {
    title: { default: m.title, template: `%s | AURA` },
    description: m.description,
    keywords: m.keywords,
    authors: [{ name: 'AURA INTELLIGENT SYSTEMS' }],
    openGraph: {
      type: 'website',
      siteName: 'AURA INTELLIGENT SYSTEMS',
      title: m.title,
      description: m.description,
      images: [{ url: '/images/logo/aura-logo.png', width: 512, height: 512, alt: 'AURA' }],
    },
    twitter: {
      card: 'summary',
      title: m.title,
      description: m.description,
      images: ['/images/logo/aura-logo.png'],
    },
  };
}

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
    <NextIntlClientProvider messages={messages}>
      <HtmlLang locale={locale} />
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
