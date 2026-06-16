import { notFound } from 'next/navigation';
import { scenariosMeta } from '@/app/data/scenariosMeta';
import { getAllProducts } from '@/lib/products';
import ScenarioDetailClient from '../../../scenarios/[slug]/ScenarioDetailClient';

export const revalidate = 3600;

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function ScenarioDetailPage({ params }: Props) {
  const { slug } = await params;
  const scenario = scenariosMeta.find((s) => s.id === slug);
  if (!scenario) notFound();

  const allProducts = await getAllProducts();
  const products = allProducts.filter((p) => p.scenarios.includes(scenario.id));

  return <ScenarioDetailClient scenario={scenario} products={products} />;
}
