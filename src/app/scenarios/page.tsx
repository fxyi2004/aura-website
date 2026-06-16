import { getAllProducts } from '@/lib/products';
import ScenariosClient from './ScenariosClient';

export const dynamic = 'force-dynamic';

export default async function ScenariosPage() {
  const products = await getAllProducts();
  return <ScenariosClient products={products} />;
}
