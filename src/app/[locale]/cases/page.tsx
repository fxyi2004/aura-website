import type { Metadata } from 'next';
import { getCases } from '@/lib/cases';
import CasesClient from '../../cases/CasesClient';

export const dynamic = 'force-dynamic';

const META: Record<string, { title: string; description: string }> = {
  en: { title: 'Case Studies', description: 'Real-world unmanned systems deployments across island logistics, mountain cargo, agriculture, emergency response, water inspection, and smart campuses.' },
  zh: { title: '案例展示', description: '来自全球各地的真实部署案例，覆盖海岛物流、山区运输、智慧农业、应急救援、水域巡检、智慧园区六大场景。' },
  es: { title: 'Casos de Éxito', description: 'Casos reales de despliegue de sistemas no tripulados en logística insular, carga en montaña, agricultura, emergencias, inspección hídrica y campus inteligente.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return { title: m.title, description: m.description };
}

export default async function CasesPage() {
  const cases = await getCases();
  return <CasesClient cases={cases} />;
}
