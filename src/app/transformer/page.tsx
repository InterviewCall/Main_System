import { Suspense } from 'react';

import LoaderForRoute from '@/components/LoaderForRoute/LoaderForRoute';
import ClientTransformerPage from '@/components/TransFormerPage/ClientTransFormerPage';

export default function JobSwitchPage() {
  return (
    <Suspense fallback={<LoaderForRoute />}>
      <ClientTransformerPage />
    </Suspense>
  );
}