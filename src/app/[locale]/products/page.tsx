import type { Metadata } from 'next';
import { getAllProducts } from '@/lib/products';
import ProductsClient from '../../products/ProductsClient';

const META: Record<string, { title: string; description: string }> = {
  en: { title: 'Products', description: 'Browse AURA\'s full range of UAV, UGV, USV, and AI systems — inspection drones, agricultural sprayers, cargo drones, security robots, and more.' },
  zh: { title: '产品中心', description: '浏览 AURA 全系列无人机、无人车、无人船及 AI 系统，涵盖巡检无人机、植保无人机、重载物流无人机、安防机器人等。' },
  es: { title: 'Productos', description: 'Explora la gama completa de UAV, UGV, USV y sistemas IA de AURA — drones de inspección, fumigadores agrícolas, drones de carga, robots de seguridad y más.' },
};

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return { title: m.title, description: m.description };
}

export default async function ProductsPage() {
  const products = await getAllProducts();
  return <ProductsClient products={products} />;
}
