import { Suspense } from 'react';

import ClientTransformerPage from '@/components/TransFormerPage/ClientTransFormerPage';

export default function JobSwitchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientTransformerPage />
    </Suspense>
  );
}