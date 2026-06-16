import { supabase } from './supabase';

export interface Case {
  id: number;
  scenario_en: string;
  scenario_zh: string;
  title: string;
  title_en?: string;
  title_es?: string;
  summary: string;
  summary_en?: string;
  summary_es?: string;
  results: string[];
  results_en?: string[];
  results_es?: string[];
  sort_order: number;
  published: boolean;
}

export async function getCases(): Promise<Case[]> {
  const { data, error } = await supabase
    .from('cases')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Failed to fetch cases:', error);
    return [];
  }
  return data ?? [];
}
