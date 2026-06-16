import { notFound } from 'next/navigation';
import { scenariosMeta } from '@/app/data/scenariosMeta';
import { getAllProducts } from '@/lib/products';
import ScenarioDetailClient from './ScenarioDetailClient';

export const dynamic = 'force-dynamic';

interface Props {
  params: { slug: string };
}

export default async function ScenarioDetailPage({ params }: Props) {
  const scenario = scenariosMeta.find((s) => s.id === params.slug);
  if (!scenario) notFound();

  const allProducts = await getAllProducts();
  const products = allProducts.filter((p) => p.scenarios.includes(scenario.id));

  return <ScenarioDetailClient scenario={scenario} products={products} />;
}
