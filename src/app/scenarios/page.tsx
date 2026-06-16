import { getAllProducts } from '@/lib/products';
import ScenariosClient from './ScenariosClient';

export default async function ScenariosPage() {
  const products = await getAllProducts();
  return <ScenariosClient products={products} />;
}
