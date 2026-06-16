import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const { data, error } = await supabase.from('product_scenarios').select('*').limit(50);
  return NextResponse.json({ data, error });
}
