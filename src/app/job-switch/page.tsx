import { Suspense } from 'react';

import ClientJobSwitchPage from '@/components/JobSwitchPage/ClientJobSwitchPage';

export default function JobSwitchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientJobSwitchPage />
    </Suspense>
  );
}