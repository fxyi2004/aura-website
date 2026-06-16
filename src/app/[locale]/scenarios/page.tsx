import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/products';
import ScenariosClient from '../../scenarios/ScenariosClient';

const META: Record<string, { title: string; description: string }> = {
  en: { title: 'Solutions', description: 'Scenario-driven unmanned systems solutions for inspection & security, smart campus, agriculture, and mountain logistics. Find the right system for your use case.' },
  zh: { title: '场景方案', description: '以场景为中心的无人系统解决方案，覆盖巡检安防、智慧校园、智慧农业、山地物流，按需配置最优产品组合。' },
  es: { title: 'Soluciones', description: 'Soluciones de sistemas no tripulados centradas en el escenario: inspección y seguridad, campus inteligente, agricultura y logística en montaña.' },
};

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return { title: m.title, description: m.description };
}

export default async function ScenariosPage() {
  const products = await getAllProducts();
  return <ScenariosClient products={products} />;
}
