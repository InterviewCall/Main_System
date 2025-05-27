import { Suspense } from 'react';

import ClientProgramPage from '@/components/ProgramPage/ClientProgramPage';

export default function JobSwitchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientProgramPage />
    </Suspense>
  );
}