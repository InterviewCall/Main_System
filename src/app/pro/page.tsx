import { Suspense } from 'react';

import LoaderForRoute from '@/components/LoaderForRoute/LoaderForRoute';
import ClientProgramPage from '@/components/ProgramPage/ClientProgramPage';

export default function ProgramPage() {
  return (
    <Suspense fallback={<LoaderForRoute />}>
      <ClientProgramPage />
    </Suspense>
  );
}