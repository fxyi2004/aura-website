import { getCases } from '@/lib/cases';
import CasesClient from './CasesClient';

export const dynamic = 'force-dynamic';

export default async function CasesPage() {
  const cases = await getCases();
  return <CasesClient cases={cases} />;
}
