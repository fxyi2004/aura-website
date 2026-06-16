import { supabase } from './supabase';

export interface ProductSpec {
  spec_key: string;
  spec_value: string;
  sort_order: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  full_description: string;
  image_url: string;
  category: string;
  usecase: string;
  sort_order: number;
  scenarios: string[];
  specs: ProductSpec[];
}

export async function getAllProducts(): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      product_specs(spec_key, spec_value, sort_order),
      product_scenarios(scenario_id)
    `)
    .order('sort_order');

  if (error) { console.error('getAllProducts:', error); return []; }

  return (products ?? []).map(p => ({
    ...p,
    image_url: p.image_url || '',
    scenarios: (p.product_scenarios ?? []).map((s: { scenario_id: string }) => s.scenario_id),
    specs: (p.product_specs ?? []).sort((a: ProductSpec, b: ProductSpec) => a.sort_order - b.sort_order),
  }));
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      product_specs(spec_key, spec_value, sort_order),
      product_scenarios(scenario_id)
    `)
    .eq('id', id)
    .single();

  if (error) { console.error('getProductById:', error); return null; }

  return {
    ...data,
    image_url: data.image_url || '',
    scenarios: (data.product_scenarios ?? []).map((s: { scenario_id: string }) => s.scenario_id),
    specs: (data.product_specs ?? []).sort((a: ProductSpec, b: ProductSpec) => a.sort_order - b.sort_order),
  };
}
