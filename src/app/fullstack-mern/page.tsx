import { Suspense } from 'react';

import ClientFullstackMernPage from '@/components/FullstackMernPage/ClientFullstackMernPage';

export default function FullstackMernPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientFullstackMernPage />
    </Suspense>
  );
}