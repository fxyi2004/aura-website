import type { Metadata } from 'next';
import { getProductById } from '@/lib/products';
import { getTranslations } from 'next-intl/server';
import ProductDetailPage from '../../../products/[id]/ProductDetailClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const [product, pl] = await Promise.all([
    getProductById(id),
    getTranslations({ locale, namespace: 'products_list' }),
  ]);
  if (!product) return { title: 'Product' };

  let name = product.name;
  let desc = product.description ?? '';
  try { name = pl(`${id}.name` as any); } catch {}
  try { desc = pl(`${id}.desc` as any); } catch {}

  return {
    title: name,
    description: desc,
    openGraph: {
      title: `${name} | AURA`,
      description: desc,
      images: product.image_url ? [{ url: product.image_url }] : [],
    },
  };
}

export default ProductDetailPage;
