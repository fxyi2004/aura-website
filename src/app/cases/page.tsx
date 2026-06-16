import { getCases } from '@/lib/cases';
import CasesClient from './CasesClient';

export const revalidate = 60;

export default async function CasesPage() {
  const cases = await getCases();
  return <CasesClient cases={cases} />;
}
