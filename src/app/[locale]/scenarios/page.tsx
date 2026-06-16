import { getAllProducts } from '@/lib/products';
import ScenariosClient from '../../scenarios/ScenariosClient';

export default async function ScenariosPage() {
  const products = await getAllProducts();
  return <ScenariosClient products={products} />;
}
