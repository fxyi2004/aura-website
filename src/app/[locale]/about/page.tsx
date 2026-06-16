import type { Metadata } from 'next';
import AboutClient from '../../about/AboutClient';

const META: Record<string, { title: string; description: string }> = {
  en: { title: 'About Us', description: 'AURA is an unmanned systems integrator focused on real-world deployment across agriculture, security, logistics, and emergency response.' },
  zh: { title: '关于我们', description: 'AURA 是无人系统集成商，专注场景落地。自有品牌产品 + 精选行业设备，覆盖农业、安防、物流、应急等核心场景。' },
  es: { title: 'Sobre Nosotros', description: 'AURA es un integrador de sistemas no tripulados enfocado en despliegues reales para agricultura, seguridad, logística y respuesta a emergencias.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META.en;
  return { title: m.title, description: m.description };
}

export default function AboutPage() {
  return <AboutClient />;
}
