import { Suspense } from 'react';

import ClientJobSwitchPage from '@/components/JobSwitchPage/ClientJobSwitchPage';
import LoaderForRoute from '@/components/LoaderForRoute/LoaderForRoute';

export default function JobSwitchPage() {
  return (
    <Suspense fallback={<LoaderForRoute />}>
      <ClientJobSwitchPage />
    </Suspense>
  );
}